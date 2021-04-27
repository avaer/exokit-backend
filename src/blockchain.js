const events = require('events');
const {EventEmitter} = events;
const dns = require('dns');
const bip39 = require('bip39');
const {hdkey} = require('ethereumjs-wallet');
const https = require('https');
const fetch = require('node-fetch');
const Web3 = require('web3');
const { 
  INFURA_PROJECT_ID,
  POLYGON_VIGIL_KEY,
  ETHEREUM_HOST,
} = require('./constants.js');
const {createDecipheriv} = require('crypto');

let addresses,
  abis,
  web3,
  web3sockets,
  contracts,
  gethNodeUrl,
  gethNodeWSUrl,
  web3socketProviderUrls;

const BlockchainNetworks = [
  "mainnet",
  "mainnetsidechain",
  "polygon"
];

const loadPromise = (async () => {
  const [
    newAddresses,
    newAbis,
    ethereumHostAddress,
    newPorts,
  ] = await Promise.all([
    fetch('https://contracts.webaverse.com/config/addresses.js').then(res => res.text()).then(s => JSON.parse(s.replace(/^\s*export\s*default\s*/, ''))),
    fetch('https://contracts.webaverse.com/config/abi.js').then(res => res.text()).then(s => JSON.parse(s.replace(/^\s*export\s*default\s*/, ''))),
    new Promise((accept, reject) => {
      dns.resolve4(ETHEREUM_HOST, (err, addresses) => {
        if (!err) {
          if (addresses.length > 0) {
            accept(addresses[0]);
          } else {
            reject(new Error('no addresses resolved for ' + ETHEREUM_HOST));
          }
        } else {
          reject(err);
        }
      });
    }),
    (async () => {
      const j = await new Promise((accept, reject) => {
        const proxyReq = https.request('https://contracts.webaverse.com/config/ports.js', proxyRes => {
          const bs = [];
          proxyRes.on('data', b => {
            bs.push(b);
          });
          proxyRes.on('end', () => {
            accept(JSON.parse(Buffer.concat(bs).toString('utf8').slice('export default'.length)));
          });
          proxyRes.on('error', err => {
            reject(err);
          });
        });
        proxyReq.end();
      });
      return j;
    })(),
  ]);
  addresses = newAddresses;
  abis = newAbis;

  const ports = newPorts;
  gethNodeUrl = `http://${ethereumHostAddress}`;
  gethNodeWSUrl = `ws://${ethereumHostAddress}`;

  web3 = {
    mainnet: new Web3(new Web3.providers.HttpProvider(
      `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`
    )),
    mainnetsidechain: new Web3(new Web3.providers.HttpProvider(
      `${gethNodeUrl}:${ports.mainnetsidechain}`
    )),
    polygon: new Web3(new Web3.providers.HttpProvider(
      `https://rpc-mainnet.maticvigil.com/v1/${POLYGON_VIGIL_KEY}`
    )),
  };

  web3socketProviderUrls = {
    mainnet: `wss://mainnet.infura.io/ws/v3/${INFURA_PROJECT_ID}`,
    mainnetsidechain: `${gethNodeWSUrl}:${ports.mainnetsidechainWs}`,
    polygon: `wss://rpc-webverse-mainnet.maticvigil.com/v1/${POLYGON_VIGIL_KEY}`,
  };

  contracts = {};
  BlockchainNetworks.forEach(network => {
    contracts[network] = {
      Account: new web3[network].eth.Contract(abis.Account, addresses[network].Account),
      FT: new web3[network].eth.Contract(abis.FT, addresses[network].FT),
      FTProxy: new web3[network].eth.Contract(abis.FTProxy, addresses[network].FTProxy),
      NFT: new web3[network].eth.Contract(abis.NFT, addresses[network].NFT),
      NFTProxy: new web3[network].eth.Contract(abis.NFTProxy, addresses[network].NFTProxy),
      Trade: new web3[network].eth.Contract(abis.Trade, addresses[network].Trade),
      LAND: new web3[network].eth.Contract(abis.LAND, addresses[network].LAND),
      LANDProxy: new web3[network].eth.Contract(abis.LANDProxy, addresses[network].LANDProxy),
    }
  })
})();

async function getPastEvents({
  chainName,
  contractName,
  eventName = 'allEvents',
  fromBlock = 0,
  toBlock = 'latest',
} = {}) {
  try {
    const {contracts} = await getBlockchain();
    return await contracts[chainName][contractName].getPastEvents(
      eventName,
      {
        fromBlock,
        toBlock,
      }
    );
  } catch (e) {
    console.error(e);
    return [];
  }
}

async function getBlockchain() {
  await loadPromise;
  return {
    addresses,
    abis,
    web3,
    web3sockets,
    contracts,
    gethNodeUrl,
    gethNodeWSUrl,
    web3socketProviderUrls,
  };
}

function makeWeb3WebsocketContract(chainName, contractName) {
  const web3socketProvider = new Web3.providers.WebsocketProvider(web3socketProviderUrls[chainName])
  const web3socket = new Web3(web3socketProvider);
  const web3socketContract = new web3socket.eth.Contract(abis[contractName], addresses[chainName][contractName]);

  web3socketProvider.on('error', err => {
    listener.emit('error', err);
  });
  web3socketProvider.on('end', () => {
    listener.emit('end');
  });

  const listener = new EventEmitter();
  listener.disconnect = () => {
    try {
      web3socketProvider.disconnect();
    } catch (err) {
      console.warn(err);
    }
  };
  web3socketContract.listener = listener;

  return web3socketContract;
}

const areAddressesCollaborator = async (addresses, hash, id) => {
  let isC = false; // collaborator
  let isO1 = false; // owner on sidechain
  let isO2 = false; // owner on mainnet
  for (const address of addresses) {
    const [
      _isC,
      _isO1,
      _isO2,
    ] = await Promise.all([
      (async () => {
        try {
          const isC = await contracts.mainnetsidechain.NFT.methods.isCollaborator(hash, address).call();
          return isC;
        } catch (err) {
          return false;
        }
      })(),
      (async () => {
        try {
          let owner = await contracts.mainnetsidechain.NFT.methods.ownerOf(id).call();
          owner = owner.toLowerCase();
          return owner === address;
        } catch (err) {
          return false;
        }
      })(),
      (async () => {
        try {
          let owner = await contracts.mainnet.NFT.methods.ownerOf(id).call();
          owner = owner.toLowerCase();
          return owner === address;
        } catch (err) {
          return false;
        }
      })(),
    ]);

    isC = isC || _isC;
    isO1 = isO1 || _isO1;
    isO2 = isO2 || _isO2;
  }

  return isC || isO1 || isO2;
};

const areAddressesSingleCollaborator = async (addresses, id) => {
  let isC = false; // collaborator
  let isO1 = false; // owner on sidechain
  let isO2 = false; // owner on mainnet
  for (const address of addresses) {
    const [
      _isC,
      _isO1,
      _isO2,
    ] = await Promise.all([
      (async () => {
        try {
          const isC = await contracts.mainnetsidechain.NFT.methods.isSingleCollaborator(id, address).call();
          return isC;
        } catch (err) {
          return false;
        }
      })(),
      (async () => {
        try {
          let owner = await contracts.mainnetsidechain.NFT.methods.ownerOf(id).call();
          owner = owner.toLowerCase();
          return owner === address;
        } catch (err) {
          return false;
        }
      })(),
      (async () => {
        try {
          let owner = await contracts.mainnet.NFT.methods.ownerOf(id).call();
          owner = owner.toLowerCase();
          return owner === address;
        } catch (err) {
          return false;
        }
      })(),
    ]);
    isC = isC || _isC;
    isO1 = isO1 || _isO1;
    isO2 = isO2 || _isO2;
  }

  return isC || isO1 || isO2;
};

const isCollaborator = async (tokenId, address) => {
  const hash = await contracts.mainnetsidechain.NFT.methods.getHash(tokenId).call();
  return await areAddressesCollaborator([address], hash, tokenId);
};

const isSingleCollaborator = async (tokenId, address) => await areAddressesSingleCollaborator([address], tokenId);

module.exports = {
  getBlockchain,
  getPastEvents,
  makeWeb3WebsocketContract,
  BlockchainNetworks,
  isSingleCollaborator,
  areAddressesCollaborator,
  areAddressesSingleCollaborator,
  isCollaborator
};
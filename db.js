const stream = require('stream');
const s3 = require('./aws.js');
const ddb = require('./aws.js');
const ddbd = require('./aws.js');

const defaultDynamoTable = 'sidechain-cache';

async function getDynamoItem(id, TableName) {
  const params = {
    TableName,
    Key: {
      id,
    },
  };

  try {
    return await ddbd.get(params).promise();
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function putDynamoItem(id, data, TableName) {
  const params = {
    TableName,
    Item: {
      ...data,
      id,
    },
  };

  try {
    return ddbd.put(params).promise();
  } catch (e) {
    console.error(e);
    return false;
  }
}

async function getDynamoAllItems(TableName = defaultDynamoTable) {
  const params = {
    TableName,
  };

  try {
    const o = await ddbd.scan(params).promise();
    const items = (o && o.Items) || [];
    return items;
  } catch (e) {
    console.error(e);
    return null;
  }
}

function uploadFromStream(bucket, key, type) {
  const pass = new stream.PassThrough();
  const params = {Bucket: bucket, Key: key, Body: pass, ACL: 'public-read'};
  if (type) {
    params['ContentType'] = type;
  }
  s3.upload(params, function(err, data) {
    console.log('emit done', !!err, !!data);
    if (err) {
      pass.emit('error', err);
    } else {
      pass.emit('done', data);
    }
  });
  return pass;
}

module.exports = {
  getDynamoItem,
  putDynamoItem,
  getDynamoAllItems,
  uploadFromStream,
}

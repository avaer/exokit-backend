parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    g6JQ: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function t(t) {
          for (var r = 1; r < arguments.length; r++) {
            var o = null != arguments[r] ? arguments[r] : {};
            r % 2
              ? e(Object(o), !0).forEach(function (e) {
                  n(t, e, o[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
              : e(Object(o)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(o, e)
                  );
                });
          }
          return t;
        }
        function n(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        const r = {},
          o = { exports: r };
        var l = (function (e, t, n, i) {
            var s,
              c = "function" == typeof l && l,
              u = "function" == typeof require && require;
            function f(n, r) {
              if (!t[n]) {
                if (!e[n]) {
                  var o = "function" == typeof l && l;
                  if (!r && o) return o(n, !0);
                  if (c) return c(n, !0);
                  if (u && "string" == typeof n) return u(n);
                  var i = new Error("Cannot find module '" + n + "'");
                  throw ((i.code = "MODULE_NOT_FOUND"), i);
                }
                (a.resolve = function (t) {
                  return e[n][1][t] || t;
                }),
                  (a.cache = {});
                var s = (t[n] = new f.Module(n));
                e[n][0].call(s.exports, a, s, s.exports, this);
              }
              return t[n].exports;
              function a(e) {
                return f(a.resolve(e));
              }
            }
            (f.isParcelRequire = !0),
              (f.Module = function (e) {
                (this.id = e), (this.bundle = f), (this.exports = {});
              }),
              (f.modules = e),
              (f.cache = t),
              (f.parent = c),
              (f.register = function (t, n) {
                e[t] = [
                  function (e, t) {
                    t.exports = n;
                  },
                  {},
                ];
              });
            for (var a = 0; a < n.length; a++)
              try {
                f(n[a]);
              } catch (e) {
                s || (s = e);
              }
            if (n.length) {
              var p = f(n[n.length - 1]);
              "object" == typeof r && void 0 !== o
                ? (o.exports = p)
                : "function" == typeof define &&
                  define.amd &&
                  define(function () {
                    return p;
                  });
            }
            if (((l = f), s)) throw s;
            return f;
          })(
            {
              YBDT: [
                function (e, t, n) {
                  const r = (e, t) => {
                      if (!e) throw new Error(t);
                    },
                    o = (e) => e && "object" == typeof e && !Array.isArray(e),
                    l = (e, t) =>
                      typeof e == typeof t
                        ? e > t
                        : "string" == typeof e && "number" == typeof t,
                    i = (e, t) => {
                      for (let n in e) t.write(n, e[n]);
                    };
                  function s(e = null) {
                    let t,
                      n = [],
                      c = [],
                      u = -1,
                      f = e,
                      a = -1;
                    const p = () => {
                        r(n.length === c.length / 2),
                          0 === a
                            ? n.length
                              ? ((u = c.pop()), (f = n.pop()), (a = c.pop()))
                              : ((u = 0), (a = -1))
                            : (r(a > 0), o(f[--a]) && a--);
                      },
                      d = () => {
                        const e = [];
                        let t = f,
                          r = n.length - 1,
                          l = a;
                        for (; l >= 0; )
                          e.unshift(t[l]),
                            0 === l
                              ? ((l = c[2 * r]), (t = n[r--]))
                              : (l -= o(t[l - 1]) ? 2 : 1);
                        return e;
                      };
                    return {
                      read: () => ({
                        ascend: p,
                        getPath: d,
                        get: () => (f ? f.slice(a + 1) : null),
                        getKey: () => f[a],
                        getComponent() {
                          let e;
                          return f && f.length > a + 1 && o((e = f[a + 1]))
                            ? e
                            : null;
                        },
                        descendFirst() {
                          let e = a + 1;
                          if (
                            !f ||
                            e >= f.length ||
                            (o(f[e]) && e + 1 >= f.length)
                          )
                            return !1;
                          o(f[e]) && e++;
                          let t = f[e];
                          return (
                            Array.isArray(t)
                              ? (c.push(a),
                                n.push(f),
                                c.push(e),
                                (a = 0),
                                (f = t))
                              : (a = e),
                            !0
                          );
                        },
                        nextSibling() {
                          if (
                            (r(n.length === c.length / 2),
                            a > 0 || 0 === n.length)
                          )
                            return !1;
                          const e = c[c.length - 1] + 1,
                            t = n[n.length - 1];
                          return !(
                            e >= t.length ||
                            (r(!isNaN(e)), (c[c.length - 1] = e), (f = t[e]), 0)
                          );
                        },
                        _init(e, t, r, o) {
                          (f = e), (a = t), (n = r.slice()), (c = o.slice());
                        },
                        clone() {
                          const e = s(null).read();
                          return e._init(f, a, n, c), e;
                        },
                        *[Symbol.iterator]() {
                          if (this.descendFirst()) {
                            do {
                              yield this.getKey();
                            } while (this.nextSibling());
                            p();
                          }
                        },
                        traverse(e, t) {
                          const n = this.getComponent();
                          n && t(n, e);
                          for (const r of this)
                            e && e.descend(r),
                              this.traverse(e, t),
                              e && e.ascend();
                        },
                        eachPick(e, t) {
                          this.traverse(e, (e, n) => {
                            null != e.p && t(e.p, n);
                          });
                        },
                        eachDrop(e, t) {
                          this.traverse(e, (e, n) => {
                            null != e.d && t(e.d, n);
                          });
                        },
                      }),
                      write: () => (
                        (t = []),
                        {
                          reset() {
                            u = -1;
                          },
                          getComponent() {
                            !(function () {
                              r(n.length === c.length / 2),
                                null === f && (e = f = []);
                              for (let e = 0; e < t.length; e++) {
                                const i = t[e];
                                let s = a + 1;
                                if (
                                  (s < f.length && o(f[s]) && s++,
                                  r(s === f.length || !o(f[s])),
                                  s === f.length)
                                )
                                  f.push(i), (a = s);
                                else if (f[s] === i) a = s;
                                else {
                                  if (!Array.isArray(f[s])) {
                                    const e = f.splice(s, f.length - s);
                                    f.push(e), u > -1 && (u = s);
                                  }
                                  for (
                                    c.push(a),
                                      n.push(f),
                                      -1 !== u &&
                                        (r(l(i, f[u][0])),
                                        (s = u + 1),
                                        (u = -1));
                                    s < f.length && l(i, f[s][0]);

                                  )
                                    s++;
                                  if (
                                    (c.push(s),
                                    (a = 0),
                                    s < f.length && f[s][0] === i)
                                  )
                                    f = f[s];
                                  else {
                                    const e = [i];
                                    f.splice(s, 0, e), (f = e);
                                  }
                                }
                              }
                              t.length = 0;
                            })();
                            const i = a + 1;
                            if (i < f.length && o(f[i])) return f[i];
                            {
                              const e = {};
                              return f.splice(i, 0, e), e;
                            }
                          },
                          write(e, t) {
                            const n = this.getComponent();
                            r(
                              null == n[e] || n[e] === t,
                              "Internal consistency error: Overwritten component. File a bug"
                            ),
                              (n[e] = t);
                          },
                          get: () => e,
                          descend(e) {
                            t.push(e);
                          },
                          descendPath(e) {
                            return t.push(...e), this;
                          },
                          ascend() {
                            t.length ? t.pop() : p();
                          },
                          mergeTree(t, o = i) {
                            if (null === t) return;
                            if ((r(Array.isArray(t)), t === e))
                              throw Error("Cannot merge into my own tree");
                            const l = u,
                              s = n.length;
                            let c = 0;
                            for (let e = 0; e < t.length; e++) {
                              const n = t[e];
                              "string" == typeof n || "number" == typeof n
                                ? (c++, this.descend(n))
                                : Array.isArray(n)
                                ? this.mergeTree(n, o)
                                : "object" == typeof n && o(n, this);
                            }
                            for (; c--; ) this.ascend();
                            u = n.length === s ? l : -1;
                          },
                          at(e, t) {
                            this.descendPath(e), t(this);
                            for (let n = 0; n < e.length; n++) this.ascend();
                            return this;
                          },
                          writeAtPath(e, t, n) {
                            return (
                              this.at(e, () => this.write(t, n)),
                              this.reset(),
                              this
                            );
                          },
                          writeMove(e, t, n = 0) {
                            return this.writeAtPath(e, "p", n).writeAtPath(
                              t,
                              "d",
                              n
                            );
                          },
                          getPath() {
                            const e = d();
                            return e.push(...t), e;
                          },
                        }
                      ),
                    };
                  }
                  (n.writeCursor = () => s().write()),
                    (n.readCursor = (e) => s(e).read());
                  (n.advancer = function (e, t, n) {
                    let r, o;
                    function i(r) {
                      let i;
                      for (; o; ) {
                        const s = (i = e.getKey());
                        if (null != r) {
                          let n = !1;
                          if (
                            (t &&
                              "number" == typeof s &&
                              (i = t(s, e.getComponent())) < 0 &&
                              ((i = ~i), (n = !0)),
                            l(i, r))
                          )
                            return;
                          if (i === r && !n) return e;
                        }
                        n && "number" == typeof s && n(i, e.getComponent()),
                          (o = e.nextSibling());
                      }
                    }
                    return (
                      (o = r = e && e.descendFirst()),
                      (i.end = () => {
                        r && e.ascend();
                      }),
                      i
                    );
                  }),
                    (n.eachChildOf = function (e, t, n) {
                      let r, o, i, s;
                      for (
                        r = o = e && e.descendFirst(),
                          i = s = t && t.descendFirst();
                        r || i;

                      ) {
                        let o = r ? e.getKey() : null,
                          s = i ? t.getKey() : null;
                        null !== o &&
                          null !== s &&
                          (l(s, o) ? (s = null) : o !== s && (o = null)),
                          n(
                            null == o ? s : o,
                            null != o ? e : null,
                            null != s ? t : null
                          ),
                          null != o && r && (r = e.nextSibling()),
                          null != s && i && (i = t.nextSibling());
                      }
                      o && e.ascend(), s && t.ascend();
                    });
                },
                {},
              ],
              eFkX: [
                function (e, t, n) {
                  function r(e, t) {
                    if (Array.isArray(t)) return !1;
                    for (let n in e) if (!l(e[n], t[n])) return !1;
                    for (let n in t) if (void 0 === e[n]) return !1;
                    return !0;
                  }
                  function o(e, t) {
                    if (!Array.isArray(t)) return !1;
                    if (e.length !== t.length) return !1;
                    for (let n = 0; n < e.length; n++)
                      if (!l(e[n], t[n])) return !1;
                    return !0;
                  }
                  function l(e, t) {
                    return (
                      e === t ||
                      (null !== e &&
                        null !== t &&
                        "object" == typeof e &&
                        "object" == typeof t &&
                        (Array.isArray(e) ? o(e, t) : r(e, t)))
                    );
                  }
                  t.exports = l;
                },
                {},
              ],
              TNQL: [
                function (e, t, n) {
                  t.exports = function e(t) {
                    if (null === t) return null;
                    if (Array.isArray(t)) return t.map(e);
                    if ("object" == typeof t) {
                      const n = {};
                      for (let r in t) n[r] = e(t[r]);
                      return n;
                    }
                    return t;
                  };
                },
                {},
              ],
              bU8t: [
                function (e, t, n) {
                  Object.defineProperty(n, "__esModule", { value: !0 }),
                    (n.strPosToUni = (e, t = e.length) => {
                      let n = 0,
                        r = 0;
                      for (; r < t; r++) e.charCodeAt(r) >= 55296 && (n++, r++);
                      if (r !== t)
                        throw Error("Invalid offset - splits unicode bytes");
                      return r - n;
                    }),
                    (n.uniToStrPos = (e, t) => {
                      let n = 0;
                      for (; t > 0; t--) n += e.charCodeAt(n) >= 55296 ? 2 : 1;
                      return n;
                    });
                },
                {},
              ],
              L7F6: [
                function (e, t, n) {
                  Object.defineProperty(n, "__esModule", { value: !0 });
                  const r = e("unicount"),
                    o = (e) => {
                      if (!Array.isArray(e))
                        throw Error("Op must be an array of components");
                      let t = null;
                      for (let n = 0; n < e.length; n++) {
                        const r = e[n];
                        switch (typeof r) {
                          case "object":
                            if (!("number" == typeof r.d && r.d > 0))
                              throw Error(
                                "Object components must be deletes of size > 0"
                              );
                            break;
                          case "string":
                            if (!(r.length > 0))
                              throw Error("Inserts cannot be empty");
                            break;
                          case "number":
                            if (!(r > 0))
                              throw Error("Skip components must be >0");
                            if ("number" == typeof t)
                              throw Error(
                                "Adjacent skip components should be combined"
                              );
                        }
                        t = r;
                      }
                      if ("number" == typeof t)
                        throw Error("Op has a trailing skip");
                    },
                    l = (e) => {
                      const t = [],
                        n = i(t);
                      for (let r = 0; r < e.length; r++) n(e[r]);
                      return u(t);
                    },
                    i = (e) => (t) => {
                      t &&
                        0 !== t.d &&
                        (0 === e.length
                          ? e.push(t)
                          : typeof t == typeof e[e.length - 1]
                          ? "object" == typeof t
                            ? (e[e.length - 1].d += t.d)
                            : (e[e.length - 1] += t)
                          : e.push(t));
                    },
                    s = (e) =>
                      "number" == typeof e
                        ? e
                        : "string" == typeof e
                        ? r.strPosToUni(e)
                        : e.d,
                    c = (e) => {
                      let t = 0,
                        n = 0;
                      return {
                        take: (o, l) => {
                          if (t === e.length) return -1 === o ? null : o;
                          const i = e[t];
                          let s;
                          if ("number" == typeof i)
                            return -1 === o || i - n <= o
                              ? ((s = i - n), ++t, (n = 0), s)
                              : ((n += o), o);
                          if ("string" == typeof i) {
                            if (
                              -1 === o ||
                              "i" === l ||
                              r.strPosToUni(i.slice(n)) <= o
                            )
                              return (s = i.slice(n)), ++t, (n = 0), s;
                            {
                              const e = n + r.uniToStrPos(i.slice(n), o);
                              return (s = i.slice(n, e)), (n = e), s;
                            }
                          }
                          return -1 === o || "d" === l || i.d - n <= o
                            ? ((s = { d: i.d - n }), ++t, (n = 0), s)
                            : ((n += o), { d: o });
                        },
                        peek: () => e[t],
                      };
                    },
                    u = (e) => (
                      e.length > 0 &&
                        "number" == typeof e[e.length - 1] &&
                        e.pop(),
                      e
                    );
                  function f(e, t, n) {
                    if ("left" !== n && "right" !== n)
                      throw Error("side (" + n + ") must be 'left' or 'right'");
                    o(e), o(t);
                    const l = [],
                      f = i(l),
                      { take: a, peek: p } = c(e);
                    for (let o = 0; o < t.length; o++) {
                      const e = t[o];
                      let l, i;
                      switch (typeof e) {
                        case "number":
                          for (l = e; l > 0; )
                            f((i = a(l, "i"))),
                              "string" != typeof i && (l -= s(i));
                          break;
                        case "string":
                          "left" === n && "string" == typeof p() && f(a(-1)),
                            f(r.strPosToUni(e));
                          break;
                        case "object":
                          for (l = e.d; l > 0; )
                            switch (typeof (i = a(l, "i"))) {
                              case "number":
                                l -= i;
                                break;
                              case "string":
                                f(i);
                                break;
                              case "object":
                                l -= i.d;
                            }
                      }
                    }
                    let d;
                    for (; (d = a(-1)); ) f(d);
                    return u(l);
                  }
                  function a(e, t) {
                    o(e), o(t);
                    const n = [],
                      l = i(n),
                      { take: f } = c(e);
                    for (let o = 0; o < t.length; o++) {
                      const e = t[o];
                      let n, i;
                      switch (typeof e) {
                        case "number":
                          for (n = e; n > 0; )
                            l((i = f(n, "d"))),
                              "object" != typeof i && (n -= s(i));
                          break;
                        case "string":
                          l(e);
                          break;
                        case "object":
                          for (n = e.d; n > 0; )
                            switch (typeof (i = f(n, "d"))) {
                              case "number":
                                l({ d: i }), (n -= i);
                                break;
                              case "string":
                                n -= r.strPosToUni(i);
                                break;
                              case "object":
                                l(i);
                            }
                      }
                    }
                    let a;
                    for (; (a = f(-1)); ) l(a);
                    return u(n);
                  }
                  const p = (e, t) => {
                      let n = 0;
                      for (let o = 0; o < t.length && e > n; o++) {
                        const l = t[o];
                        switch (typeof l) {
                          case "number":
                            n += l;
                            break;
                          case "string":
                            const t = r.strPosToUni(l);
                            (n += t), (e += t);
                            break;
                          case "object":
                            e -= Math.min(l.d, e - n);
                        }
                      }
                      return e;
                    },
                    d = (e, t) =>
                      "number" == typeof e ? p(e, t) : e.map((e) => p(e, t));
                  n.default = function (e) {
                    return {
                      name: "text-unicode",
                      uri: "http://sharejs.org/types/text-unicode",
                      trim: u,
                      normalize: l,
                      checkOp: o,
                      create(t = "") {
                        if ("string" != typeof t)
                          throw Error("Initial data must be a string");
                        return e.create(t);
                      },
                      apply(t, n) {
                        o(n);
                        const r = e.builder(t);
                        for (let e = 0; e < n.length; e++) {
                          const t = n[e];
                          switch (typeof t) {
                            case "number":
                              r.skip(t);
                              break;
                            case "string":
                              r.append(t);
                              break;
                            case "object":
                              r.del(t.d);
                          }
                        }
                        return r.build();
                      },
                      transform: f,
                      compose: a,
                      transformPosition: p,
                      transformSelection: d,
                    };
                  };
                },
                { unicount: "bU8t" },
              ],
              caPj: [
                function (e, t, n) {
                  Object.defineProperty(n, "__esModule", { value: !0 });
                  const r = e("unicount");
                  function o(e, t) {
                    return {
                      get: e,
                      getLength: () => e().length,
                      insert(n, o, l) {
                        const i = r.strPosToUni(e(), n);
                        return t([i, o], l);
                      },
                      remove(n, o, l) {
                        const i = r.strPosToUni(e(), n);
                        return t([i, { d: o }], l);
                      },
                      _onOp(e) {
                        for (var t = 0, n = 0; n < e.length; n++) {
                          var r = e[n];
                          switch (typeof r) {
                            case "number":
                              t += r;
                              break;
                            case "string":
                              this.onInsert && this.onInsert(t, r),
                                (t += r.length);
                              break;
                            case "object":
                              this.onRemove && this.onRemove(t, r.d), r.d;
                          }
                        }
                      },
                      onInsert: null,
                      onRemove: null,
                    };
                  }
                  (n.default = o), (o.provides = { text: !0 });
                },
                { unicount: "bU8t" },
              ],
              IMP5: [
                function (e, t, n) {
                  var r =
                    (this && this.__importDefault) ||
                    function (e) {
                      return e && e.__esModule ? e : { default: e };
                    };
                  Object.defineProperty(n, "__esModule", { value: !0 });
                  const o = e("unicount"),
                    l = r(e("./maketext")),
                    i = r(e("./api")),
                    s = {
                      create: (e) => e,
                      toString: (e) => e,
                      builder(e) {
                        if ("string" != typeof e)
                          throw Error("Invalid document snapshot: " + e);
                        const t = [];
                        return {
                          skip(n) {
                            let r = o.uniToStrPos(e, n);
                            if (r > e.length)
                              throw Error(
                                "The op is too long for this document"
                              );
                            t.push(e.slice(0, r)), (e = e.slice(r));
                          },
                          append(e) {
                            t.push(e);
                          },
                          del(t) {
                            e = e.slice(o.uniToStrPos(e, t));
                          },
                          build: () => t.join("") + e,
                        };
                      },
                    },
                    c = l.default(s),
                    u = Object.assign({}, c, { api: i.default });
                  n.type = u;
                  var f = e("./maketext");
                  n.makeType = f.default;
                },
                { unicount: "bU8t", "./maketext": "L7F6", "./api": "caPj" },
              ],
              iIAs: [
                function (e, n, r) {
                  const o = () => {},
                    {
                      readCursor: l,
                      writeCursor: i,
                      advancer: s,
                      eachChildOf: c,
                    } = e("./cursor"),
                    u = e("./deepEqual"),
                    f = e("./deepClone"),
                    a = (e, t) => {
                      if (!e) throw new Error(t);
                    };
                  let p = !1;
                  const d = (r.type = {
                      name: "json1",
                      uri: "http://sharejs.org/types/JSONv1",
                      readCursor: l,
                      writeCursor: i,
                      create: (e) => e,
                      setDebug(e) {
                        (p = e), (o.quiet = !e);
                      },
                    }),
                    g = (e) => (e ? e.getComponent() : null),
                    h = (e) => e && "object" == typeof e && !Array.isArray(e),
                    y = (e) =>
                      Array.isArray(e)
                        ? e.slice()
                        : null !== e && "object" == typeof e
                        ? Object.assign({}, e)
                        : e,
                    m = (e) => e && (null != e.p || void 0 !== e.r),
                    b = (e) => e && (null != e.d || void 0 !== e.i),
                    v = (r.removeOp = (e, t = !0) =>
                      i().writeAtPath(e, "r", t).get()),
                    w = (r.moveOp = (e, t) => i().writeMove(e, t).get()),
                    P = (r.insertOp = (e, t) =>
                      i().writeAtPath(e, "i", t).get()),
                    k =
                      ((r.replaceOp = (e, t, n) =>
                        i()
                          .at(e, (e) => {
                            e.write("r", t), e.write("i", n);
                          })
                          .get()),
                      (r.editOp = (e, t, n) =>
                        i()
                          .at(e, (e) => _(e, t, n))
                          .get()));
                  function A(e, t) {
                    return (
                      a(null != e),
                      "number" == typeof t
                        ? (a(Array.isArray(e)), (e = e.slice()).splice(t, 1))
                        : (a(h(e)), delete (e = Object.assign({}, e))[t]),
                      e
                    );
                  }
                  function j(e, t, n) {
                    return (
                      "number" == typeof t
                        ? (a(
                            Array.isArray(e),
                            "Cannot use numerical key for object container"
                          ),
                          e.splice(t, 0, n))
                        : (a(h(e), "Cannot insert into missing item"),
                          a(
                            void 0 === e[t],
                            "Trying to overwrite value at key. Your op needs to remove it first"
                          ),
                          (e[t] = n)),
                      n
                    );
                  }
                  const O = (e, t, n) => (((e = y(e))[t] = n), e),
                    C = {},
                    E = (d.registerSubtype = function (e) {
                      e.type && (e = e.type),
                        e.name && (C[e.name] = e),
                        e.uri && (C[e.uri] = e);
                    });
                  E(e("ot-text-unicode"));
                  const x = (e, t) => e + t;
                  E({
                    name: "number",
                    apply: x,
                    compose: x,
                    transform: (e) => e,
                  });
                  const T = (e) =>
                      null == e
                        ? null
                        : e.et
                        ? ((e) => {
                            const t = C[e];
                            if (t) return t;
                            throw Error("Missing type: " + e);
                          })(e.et)
                        : e.es
                        ? C["text-unicode"]
                        : null != e.ena
                        ? C.number
                        : null,
                    S = (e) => (e.es ? e.es : null != e.ena ? e.ena : e.e),
                    _ = (e, t, n) => {
                      "object" == typeof t && (t = t.name),
                        "number" === t
                          ? e.write("ena", n)
                          : "text-unicode" === t
                          ? e.write("es", n)
                          : (e.write("et", t), e.write("e", n));
                    },
                    M = (e) => {
                      a("number" == typeof e), a(e >= 0), a(e === (0 | e));
                    },
                    D = (e) => {
                      "number" == typeof e ? M(e) : a("string" == typeof e);
                    },
                    U = (d.checkValidOp = function (e) {
                      if (null === e) return;
                      const t = new Set(),
                        n = new Set(),
                        r = (e) => {
                          let r = !0,
                            o = !1;
                          for (let l in e) {
                            const i = e[l];
                            if (
                              ((r = !1),
                              a(
                                "p" === l ||
                                  "r" === l ||
                                  "d" === l ||
                                  "i" === l ||
                                  "e" === l ||
                                  "es" === l ||
                                  "ena" === l ||
                                  "et" === l,
                                "Invalid component item '" + l + "'"
                              ),
                              "p" === l)
                            )
                              M(i), a(!t.has(i)), t.add(i), a(void 0 === e.r);
                            else if ("d" === l)
                              M(i), a(!n.has(i)), n.add(i), a(void 0 === e.i);
                            else if ("e" === l || "es" === l || "ena" === l) {
                              a(!o), (o = !0);
                              const t = T(e);
                              a(t, "Missing type in edit"),
                                t.checkValidOp && t.checkValidOp(S(e));
                            }
                          }
                          a(!r);
                        },
                        o = (e, t, n) => {
                          if (!Array.isArray(e))
                            throw Error("Op must be null or a list");
                          if (0 === e.length) throw Error("Empty descent");
                          t || D(e[0]);
                          let l = 1,
                            i = 0,
                            s = 0;
                          for (let c = 0; c < e.length; c++) {
                            const t = e[c];
                            if ((a(null != t), Array.isArray(t))) {
                              const e = o(t, !1, n);
                              if (i) {
                                const t = typeof s,
                                  n = typeof e;
                                t === n
                                  ? a(s < e, "descent keys are not in order")
                                  : a("number" === t && "string" === n);
                              }
                              (s = e), i++, (l = 3);
                            } else
                              "object" == typeof t
                                ? (a(1 === l, `Prev not scalar - instead ${l}`),
                                  r(t),
                                  (l = 2))
                                : (a(3 !== l), D(t), (l = 1));
                          }
                          return a(1 !== i), a(2 === l || 3 === l), e[0];
                        };
                      o(e, !0, !1),
                        a(
                          t.size === n.size,
                          "Mismatched picks and drops in op"
                        );
                      for (let l = 0; l < t.size; l++) a(t.has(l)), a(n.has(l));
                    });
                  d.normalize = function (e) {
                    let t = 0,
                      n = [];
                    const r = i();
                    return (
                      r.mergeTree(e, (e, r) => {
                        const o = T(e);
                        if (o) {
                          const t = S(e);
                          _(r, o, o.normalize ? o.normalize(t) : t);
                        }
                        ["r", "p", "i", "d"].forEach((o) => {
                          if (void 0 !== e[o]) {
                            const l =
                              "p" === o || "d" === o
                                ? ((e) => (null == n[e] && (n[e] = t++), n[e]))(
                                    e[o]
                                  )
                                : e[o];
                            r.write(o, l);
                          }
                        });
                      }),
                      r.get()
                    );
                  };
                  d.apply = function (e, t) {
                    if (((o.quiet = !p), U(t), null === t)) return e;
                    const n = [];
                    return (function e(t, r) {
                      let o = t,
                        l = 0,
                        i = { root: t },
                        s = 0,
                        c = i,
                        u = "root";
                      function f() {
                        for (; s < l; s++) {
                          let e = r[s];
                          "object" != typeof e &&
                            ((c = c[u] = y(c[u])), (u = e));
                        }
                      }
                      for (; l < r.length; l++) {
                        const t = r[l];
                        if (Array.isArray(t)) {
                          const n = e(o, t);
                          n !== o && void 0 !== n && (f(), (o = c[u] = n));
                        } else if ("object" == typeof t) {
                          null != t.d
                            ? (f(), (o = j(c, u, n[t.d])))
                            : void 0 !== t.i && (f(), (o = j(c, u, t.i)));
                          const e = T(t);
                          if (e) f(), (o = c[u] = e.apply(o, S(t)));
                          else if (void 0 !== t.e)
                            throw Error("Subtype " + t.et + " undefined");
                        } else o = null != o ? o[t] : void 0;
                      }
                      return i.root;
                    })(
                      (e = (function e(t, r) {
                        const o = [];
                        let l = 0;
                        for (; l < r.length; l++) {
                          const e = r[l];
                          if (Array.isArray(e)) break;
                          "object" != typeof e &&
                            (o.push(t), (t = null == t ? void 0 : t[e]));
                        }
                        for (let n = r.length - 1; n >= l; n--) t = e(t, r[n]);
                        for (--l; l >= 0; l--) {
                          const e = r[l];
                          if ("object" != typeof e) {
                            const n = o.pop();
                            t =
                              t === (null == n ? void 0 : n[e])
                                ? n
                                : void 0 === t
                                ? A(n, e)
                                : O(n, e, t);
                          } else
                            m(e) &&
                              (a(
                                void 0 !== t,
                                "Cannot pick up or remove undefined"
                              ),
                              null != e.p && (n[e.p] = t),
                              (t = void 0));
                        }
                        return t;
                      })(e, t)),
                      t
                    );
                  };
                  d.transformPosition = (e, t) => {
                    (e = e.slice()), U(t);
                    const n = l(t);
                    let r,
                      o,
                      i = !1;
                    const c = [];
                    for (let l = 0; ; l++) {
                      const t = e[l],
                        u = n.getComponent();
                      if (
                        (u &&
                          (void 0 !== u.r
                            ? (i = !0)
                            : null != u.p && ((i = !1), (r = u.p), (o = l))),
                        l >= e.length)
                      )
                        break;
                      let f = 0;
                      const a = s(n, null, (e, t) => {
                        m(t) && f++;
                      });
                      c.unshift(a);
                      const p = a(t);
                      if (("number" == typeof t && (e[l] -= f), !p)) break;
                    }
                    if ((c.forEach((e) => e.end()), i)) return null;
                    const u = () => {
                      let t = 0;
                      for (
                        null != r &&
                        ((t = o), (e = n.getPath().concat(e.slice(o))));
                        t < e.length;
                        t++
                      ) {
                        const r = e[t],
                          o = g(n),
                          l = T(o);
                        if (l) {
                          const n = S(o);
                          l.transformPosition &&
                            (e[t] = l.transformPosition(e[t], n));
                          break;
                        }
                        let i = 0;
                        const c = s(
                          n,
                          (e, t) => (b(t) ? ~(e - i) : e - i),
                          (e, t) => {
                            b(t) && i++;
                          }
                        )(r);
                        if (("number" == typeof r && (e[t] += i), !c)) break;
                      }
                    };
                    return (
                      null != r
                        ? n.eachDrop(null, (e) => {
                            e === r && u();
                          })
                        : u(),
                      e
                    );
                  };
                  const I = (d.compose = function (e, t) {
                      if ((U(e), U(t), null == e)) return t;
                      if (null == t) return e;
                      let n = 0;
                      const r = l(e),
                        o = l(t),
                        u = i(),
                        f = [],
                        p = [],
                        d = [],
                        h = [],
                        y = [],
                        v = [];
                      r.traverse(null, (e) => {
                        null != e.p && (d[e.p] = r.clone());
                      }),
                        o.traverse(null, (e) => {
                          null != e.d && (h[e.d] = o.clone());
                        });
                      const w = i();
                      return (
                        (function e(t, r, o, l, u, w, P, k) {
                          a(r || o);
                          const A = g(r),
                            j = g(o),
                            O = j && void 0 !== j.r,
                            C = A && void 0 !== A.i,
                            E = A ? A.d : null,
                            x = j ? j.p : null,
                            M = (w || O) && null == x;
                          if (null != x) (l = h[x]), (P = p[x] = i());
                          else if (j && void 0 !== j.r) l = null;
                          else {
                            const e = g(l);
                            e && null != e.d && (l = null);
                          }
                          const D = g(l);
                          if (null != E)
                            if (((t = d[E]), (k = f[E] = i()), M))
                              w && !O && k.write("r", !0);
                            else {
                              const e = (y[E] = n++);
                              P.write("d", e);
                            }
                          else if (A && void 0 !== A.i) t = null;
                          else {
                            const e = g(t);
                            e && null != e.p && (t = null);
                          }
                          let U;
                          C ? (a(void 0 === u), (U = A.i)) : (U = u);
                          const I = (null == x ? !C || w || O : void 0 === U)
                            ? null
                            : P.getComponent();
                          if (null != x)
                            if (void 0 !== u || C);
                            else {
                              const e = null != E ? y[E] : n++;
                              (v[x] = e), k.write("p", e);
                            }
                          else
                            O &&
                              (C || void 0 !== u || (j.r, k.write("r", j.r)));
                          const F = M ? null : T(A),
                            K = T(D);
                          if (
                            ((F || K) && (F && F.name, K && K.name), F && K)
                          ) {
                            a(F === K);
                            const e = S(A),
                              t = S(D),
                              n = F.compose(e, t);
                            _(P, F, n);
                          } else F ? _(P, F, S(A)) : K && _(P, K, S(D));
                          const N = "object" == typeof U && null != U;
                          let L = !1,
                            q = 0,
                            z = 0,
                            R = 0,
                            B = 0,
                            V = 0;
                          const X = s(
                              l,
                              (e, t) => (b(t) ? B - e - 1 : e - B),
                              (e, t) => {
                                b(t) && B++;
                              }
                            ),
                            Y = s(
                              t,
                              (e, t) => (m(t) ? q - e - 1 : e - q),
                              (e, t) => {
                                m(t) && q++;
                              }
                            );
                          if (
                            (c(r, o, (t, n, r) => {
                              let o,
                                l,
                                i = t,
                                s = t,
                                c = t;
                              if ("number" == typeof t) {
                                let e = t + R;
                                (l = X(e)), (s = e + B);
                                let u = t + z;
                                (o = Y(u)),
                                  b(g(l)) && (o = null),
                                  (c = t + V),
                                  a((i = u + q) >= 0, "p1PickKey is negative"),
                                  a(s >= 0, "p2DropKey is negative");
                                const f = b(g(n)),
                                  p = m(g(r));
                                (f || (p && !M)) && V--, f && z--, p && R--;
                              } else (o = Y(t)), (l = X(t));
                              k.descend(i), P.descend(s);
                              const u = N && !b(g(n)) ? U[c] : void 0,
                                f = e(o, n, r, l, u, M, P, k);
                              N && !M
                                ? u !== f &&
                                  (L ||
                                    ((U = Array.isArray(U)
                                      ? U.slice()
                                      : Object.assign({}, U)),
                                    (L = !0)),
                                  ((e, t, n) => {
                                    "number" == typeof t
                                      ? (a(Array.isArray(e)), a(t < e.length))
                                      : (a(!Array.isArray(e)),
                                        a(void 0 !== e[t])),
                                      void 0 === n
                                        ? "number" == typeof t
                                          ? e.splice(t, 1)
                                          : delete e[t]
                                        : (e[t] = n);
                                  })(U, c, f))
                                : a(void 0 === f),
                                P.ascend(),
                                k.ascend();
                            }),
                            Y.end(),
                            X.end(),
                            null != I)
                          )
                            I.i = U;
                          else if (!w && !O && null == x) return U;
                        })(r, r.clone(), o, o.clone(), void 0, !1, u, w),
                        u.reset(),
                        u.mergeTree(w.get()),
                        u.reset(),
                        u.get(),
                        f.map((e) => e.get()),
                        p.map((e) => e.get()),
                        r.traverse(u, (e, t) => {
                          const n = e.p;
                          if (null != n) {
                            const e = y[n];
                            null != e && t.write("p", e);
                            const r = f[n];
                            r && r.get(), r && t.mergeTree(r.get());
                          } else void 0 !== e.r && t.write("r", e.r);
                        }),
                        u.reset(),
                        u.get(),
                        o.traverse(u, (e, t) => {
                          const n = e.d;
                          if (null != n) {
                            const e = v[n];
                            null != e && t.write("d", e);
                            const r = p[n];
                            r && t.mergeTree(r.get());
                          } else void 0 !== e.i && t.write("i", e.i);
                          const r = T(e);
                          r && !T(t.getComponent()) && _(t, r, S(e));
                        }),
                        u.get()
                      );
                    }),
                    F = (e) => {
                      if (null == e) return null;
                      const t = e.slice();
                      for (let n = 0; n < e.length; n++)
                        Array.isArray(t[n]) && (t[n] = F(t[n]));
                      return t;
                    },
                    K = (d.RM_UNEXPECTED_CONTENT = 1),
                    N = (d.DROP_COLLISION = 2),
                    L = (d.BLACKHOLE = 3),
                    q = (d.tryTransform = function (e, t, n) {
                      a(
                        "left" === n || "right" === n,
                        "Direction must be left or right"
                      );
                      const r = "left" === n ? 0 : 1;
                      if (((o.quiet = !p), (o.prefix = 0), null == t))
                        return { ok: !0, result: e };
                      U(e), U(t);
                      let c = null;
                      const d = [],
                        h = [],
                        y = [],
                        A = [],
                        j = [],
                        O = [],
                        C = [],
                        E = [],
                        x = [],
                        M = [],
                        D = [],
                        I = [],
                        q = [],
                        z = [],
                        R = [];
                      let B = 0;
                      const V = l(e),
                        X = l(t),
                        Y = i();
                      if (
                        ((function e(t, n, r) {
                          const o = g(n);
                          o &&
                            (void 0 !== o.r
                              ? (r = n.clone())
                              : null != o.p &&
                                ((r = null), (O[o.p] = t.clone())));
                          const l = t.getComponent();
                          let i;
                          l &&
                            null != (i = l.p) &&
                            ((j[i] = n ? n.clone() : null),
                            (y[i] = t.clone()),
                            r && ((M[i] = !0), (x[i] = r)),
                            o && null != o.p && (z[i] = o.p));
                          const c = s(n);
                          for (const s of t) e(t, c(s), r);
                          c.end();
                        })(X, V, null),
                        (function e(t, n, o, l, i) {
                          const u = o.getComponent();
                          let f,
                            a = !1;
                          u &&
                            (null != (f = u.d)
                              ? ((A[f] = o.clone()),
                                null == R[l] && (R[l] = []),
                                R[l].push(f),
                                M[f],
                                (t = j[f]),
                                (n = y[f]),
                                M[f]
                                  ? (i && (D[f] = !0), (i = x[f]))
                                  : !i ||
                                    (1 !== r && null != z[f]) ||
                                    (null == c &&
                                      (c = {
                                        type: K,
                                        op1: v(i.getPath()),
                                        op2: w(n.getPath(), o.getPath()),
                                      })),
                                (a = !0))
                              : void 0 !== u.i &&
                                ((t = n = null),
                                (a = !0),
                                i &&
                                  null == c &&
                                  (c = {
                                    type: K,
                                    op1: v(i.getPath()),
                                    op2: P(o.getPath(), u.i),
                                  })));
                          const p = g(t);
                          p &&
                            (void 0 !== p.r
                              ? (i = t.clone())
                              : null != p.p && (p.p, (l = p.p), (i = null)));
                          const d = T(u);
                          d &&
                            i &&
                            null == c &&
                            (c = {
                              type: K,
                              op1: v(i.getPath()),
                              op2: k(o.getPath(), d, S(u)),
                            });
                          let h = 0,
                            b = 0;
                          const O = s(
                              n,
                              (e, t) => (m(t) ? h - e - 1 : e - h),
                              (e, t) => {
                                m(t) && h++;
                              }
                            ),
                            C = s(t);
                          for (const r of o)
                            if ("number" == typeof r) {
                              const t = r - b,
                                n = O(t);
                              b += e(C(t + h), n, o, l, i);
                            } else {
                              const t = O(r);
                              e(C(r), t, o, l, i);
                            }
                          return O.end(), C.end(), a;
                        })(V, X, X.clone(), null, null),
                        A.map((e) => e && e.get()),
                        c)
                      )
                        return { ok: !1, conflict: c };
                      D.map((e) => !!e);
                      const Q = [];
                      let H = null;
                      !(function e(t, n, o, l, c) {
                        let u = !1;
                        const f = g(n);
                        if (m(f)) {
                          const e = f.p;
                          null != e
                            ? ((o = A[e]),
                              (l = I[e] = i()),
                              (u = !0),
                              (c = null))
                            : ((o = null), (c = n.clone()));
                        } else b(g(o)) && (o = null);
                        const p = t.getComponent();
                        if (p) {
                          const e = p.p;
                          null != e
                            ? ((E[e] = c),
                              (Q[e] =
                                c || (1 === r && u) ? null : l.getComponent()),
                              (d[e] = t.clone()),
                              o && (C[e] = o.clone()))
                            : void 0 !== p.r &&
                              (c || l.write("r", !0),
                              (c || u) &&
                                (null == H && (H = new Set()), H.add(p)));
                        }
                        let h = 0,
                          y = 0;
                        const v = s(n, null, (e, t) => {
                          m(t) && h++;
                        });
                        v._name = "2pick";
                        const w = s(
                          o,
                          (e, t) => (b(t) ? ~(e - y) : e - y),
                          (e, t) => {
                            b(t) && y++;
                          }
                        );
                        if (((w._name = "2drop"), t))
                          for (const r of t)
                            if ("string" == typeof r) {
                              const n = v(r),
                                o = w(r);
                              l.descend(r), e(t, n, o, l, c), l.ascend();
                            } else {
                              const n = v(r),
                                o = r - h,
                                i = m(g(n)) ? null : w(o),
                                s = o + y;
                              a(s >= 0),
                                l.descend(s),
                                e(t, n, i, l, c),
                                l.ascend();
                            }
                        v.end(), w.end();
                      })(V, X, X.clone(), Y, null),
                        Y.reset();
                      let J = [];
                      if (
                        ((function e(t, o, l, p, j, x) {
                          a(o);
                          const D = o.getComponent();
                          let U = g(p),
                            I = !1;
                          const F = (e, t, n) =>
                            e
                              ? w(e.getPath(), t.getPath())
                              : P(t.getPath(), n.i);
                          if (b(D)) {
                            const e = D.d;
                            null != e && (h[e] = o.clone());
                            const n = null != e ? Q[e] : null;
                            let i = !1;
                            if (void 0 !== D.i || (null != e && n)) {
                              let t;
                              U &&
                                (void 0 !== U.i ||
                                  (null != (t = U.d) && !M[U.d])) &&
                                ((i =
                                  null != t
                                    ? null != e && e === z[t]
                                    : u(U.i, D.i)) ||
                                  (null != t && 1 !== r && null != z[t]) ||
                                  (null == c &&
                                    (c = {
                                      type: N,
                                      op1: F(null != e && d[e], o, D),
                                      op2: F(null != t && y[t], p, U),
                                    }))),
                                i ||
                                  (x
                                    ? null == c &&
                                      (c = {
                                        type: K,
                                        op1: F(null != e ? d[e] : null, o, D),
                                        op2: v(x.getPath()),
                                      })
                                    : (null != e
                                        ? ((J[B] = e),
                                          j.write("d", (n.p = B++)))
                                        : j.write("i", f(D.i)),
                                      (I = !0)));
                            } else if (null != e && !n) {
                              const t = E[e];
                              t && (x = t.clone());
                            }
                            null != e
                              ? ((t = d[e]), (l = O[e]), (p = C[e]))
                              : void 0 !== D.i &&
                                ((t = l = null), i || (p = null));
                          } else m(g(t)) && (t = l = p = null);
                          const L = g(t),
                            R = g(l);
                          if (m(R)) {
                            const e = R.p;
                            (void 0 !== R.r && (!L || void 0 === L.r)) || M[e]
                              ? ((p = null), (x = l.clone()))
                              : null != e &&
                                ((p = A[e]),
                                (1 !== r && null != z[e]) ||
                                  ((j = q[e]) || (j = q[e] = i()),
                                  j.reset(),
                                  (x = null)));
                          } else !b(D) && b(U) && (p = null);
                          U = null != p ? p.getComponent() : null;
                          const V = T(D);
                          if (V) {
                            const e = S(D);
                            if (x)
                              null == c &&
                                (c = {
                                  type: K,
                                  op1: k(o.getPath(), V, e),
                                  op2: v(x.getPath()),
                                });
                            else {
                              const t = T(U);
                              let r;
                              if (t) {
                                if (V !== t)
                                  throw Error(
                                    "Transforming incompatible types"
                                  );
                                const o = S(U);
                                r = V.transform(e, o, n);
                              } else r = f(e);
                              _(j, V, r);
                            }
                          }
                          let X = 0,
                            Y = 0,
                            $ = 0,
                            G = 0,
                            W = 0,
                            Z = 0,
                            ee = null != t && t.descendFirst(),
                            te = ee;
                          const ne = s(l, null, (e, t) => {
                            m(t) && $++;
                          });
                          ne._name = "2p";
                          let re = null != p && p.descendFirst(),
                            oe = re;
                          for (const n of o)
                            if ("number" == typeof n) {
                              let l;
                              const i = b(o.getComponent()),
                                s = n - Y;
                              {
                                let e;
                                for (
                                  ;
                                  ee && "number" == typeof (e = t.getKey());

                                ) {
                                  e += X;
                                  const n = t.getComponent(),
                                    o = m(n);
                                  if (
                                    e > s ||
                                    (e === s && (!o || (0 === r && i)))
                                  )
                                    break;
                                  if (o) {
                                    X--;
                                    const e = n.p;
                                    Q[e],
                                      z.includes(e),
                                      n.d,
                                      g(q[n.d]),
                                      m(g(q[n.d])),
                                      ((void 0 === n.r || (H && H.has(n))) &&
                                        (null == e ||
                                          !Q[e] ||
                                          (1 !== r && z.includes(e)))) ||
                                        W--;
                                  }
                                  ee = t.nextSibling();
                                }
                                l = ee && e === s ? t : null;
                              }
                              const c = s - X;
                              let u = ne(c);
                              const f = c - $;
                              let d = null;
                              {
                                let e, t;
                                for (
                                  ;
                                  re && "number" == typeof (e = p.getKey());

                                ) {
                                  t = e - G;
                                  const n = p.getComponent(),
                                    o = b(n);
                                  if (t > f) break;
                                  if (t === f) {
                                    if (!o) {
                                      d = p;
                                      break;
                                    }
                                    {
                                      if (0 === r && i) {
                                        d = p;
                                        break;
                                      }
                                      const e = u && m(u.getComponent());
                                      if (0 === r && e) break;
                                    }
                                  }
                                  if (o) {
                                    const e = n.d;
                                    M[e],
                                      z[e],
                                      void 0 === n.i &&
                                      (M[e] || (null != z[e] && 1 !== r))
                                        ? (M[e] || (null != z[e] && 0 === r)) &&
                                          (G++, Z--)
                                        : G++;
                                  }
                                  re = p.nextSibling();
                                }
                              }
                              const h = f + G + W + Z;
                              a(
                                h >= 0,
                                "trying to descend to a negative index"
                              ),
                                j.descend(h),
                                i && ((l = u = d = null), Y++),
                                e(l, o, u, d, j, x) && Z++,
                                j.ascend();
                            } else {
                              let r;
                              for (
                                ;
                                ee &&
                                ("string" != typeof (r = t.getKey()) ||
                                  !(r > n || r === n));

                              )
                                ee = t.nextSibling();
                              const l = ee && r === n ? t : null,
                                i = ne(n);
                              let s;
                              for (
                                ;
                                re &&
                                ("string" != typeof (s = p.getKey()) ||
                                  !(s > n || s === n));

                              )
                                re = p.nextSibling();
                              const c = re && s === n ? p : null;
                              j.descend(n), e(l, o, i, c, j, x), j.ascend(n);
                            }
                          return (
                            ne.end(), te && t.ascend(), oe && p.ascend(), I
                          );
                        })(V, V.clone(), X, X.clone(), Y, null),
                        c)
                      )
                        return { ok: !1, conflict: c };
                      Y.reset();
                      const $ = (e, t, n) =>
                        e.traverse(t, (t, r) => {
                          null != t.d && n(t.d, e, r);
                        });
                      (M.length || I.length) &&
                        ($(X, Y, (e, t, n) => {
                          M[e] && !D[e] && n.write("r", !0),
                            I[e] && n.mergeTree(I[e].get());
                        }),
                        Y.reset());
                      const G = [],
                        W = [];
                      if ((q.length || M.length) && !c) {
                        const e = l(F(Y.get()));
                        if (
                          ($(e, null, (e, t) => {
                            G[e] = t.clone();
                          }),
                          q.forEach((e) => {
                            e &&
                              $(l(e.get()), null, (e, t) => {
                                G[e] = t.clone();
                              });
                          }),
                          (function e(t, n, r, c, u, f) {
                            o.prefix++;
                            const a = g(n);
                            if (m(a))
                              if (null != a.p) {
                                u = a;
                                const e = a.p;
                                G[e].getPath(), (r = G[e]), (c = W[e] = i());
                              } else void 0 !== a.r && ((r = null), (f = !0));
                            else b(g(r)) && (r = null);
                            const p = t.getComponent();
                            if (p) {
                              let e;
                              if (null != (e = p.d)) {
                                const e = q[p.d];
                                e &&
                                  (e.get(),
                                  c.mergeTree(e.get()),
                                  (r = l(e.get())));
                              }
                            }
                            let d = 0,
                              h = 0;
                            const y = s(n, null, (e, t) => {
                                m(t) && d--;
                              }),
                              v = s(
                                r,
                                (e, t) => (b(t) ? -(e - h) - 1 : e - h),
                                (e, t) => {
                                  b(t) && h++;
                                }
                              );
                            for (const o of t)
                              if ("number" == typeof o) {
                                const n = y(o),
                                  r = o + d,
                                  l = v(r),
                                  i = r + h;
                                c.descend(i), e(t, n, l, c, u, f), c.ascend();
                              } else
                                c.descend(o),
                                  e(t, y(o), v(o), c, u, f),
                                  c.ascend();
                            y.end(), v.end();
                          })(X, e, e.clone(), Y, null, !1),
                          Y.reset(),
                          c)
                        )
                          return { ok: !1, conflict: c };
                        if ((Y.get(), W.length)) {
                          const e = W.map((e) => (e ? e.get() : null)),
                            t = l(F(Y.get()));
                          if (
                            ($(t, Y, (t, n, r) => {
                              const o = e[t];
                              o && (r.mergeTree(o), (e[t] = null));
                            }),
                            e.find((e) => e))
                          ) {
                            const t = i(),
                              n = i();
                            let o = 0,
                              s = 0;
                            e.forEach((e) => {
                              null != e &&
                                $(l(e), null, (e) => {
                                  const l = J[e];
                                  t.writeMove(
                                    d[l].getPath(),
                                    h[l].getPath(),
                                    o++
                                  );
                                  const i = R[l];
                                  i &&
                                    i.forEach((e) => {
                                      M[e] ||
                                        (1 !== r && null != z[e]) ||
                                        n.writeMove(
                                          y[e].getPath(),
                                          A[e].getPath(),
                                          s++
                                        );
                                    });
                                });
                            }),
                              (c = { type: L, op1: t.get(), op2: n.get() });
                          }
                        }
                      }
                      return c
                        ? { ok: !1, conflict: c }
                        : { ok: !0, result: Y.get() };
                    }),
                    z = (e) => {
                      const t = new Error("Transform detected write conflict");
                      throw (
                        ((t.conflict = e),
                        (t.type = t.name = "writeConflict"),
                        t)
                      );
                    },
                    R =
                      ((d.transform = (e, t, n) => {
                        const { ok: r, result: o, conflict: l } = q(e, t, n);
                        if (r) return o;
                        z(l);
                      }),
                      (e) => {
                        const t = i();
                        return (
                          l(e).traverse(t, (e, t) => {
                            (b(e) || T(e)) && t.write("r", !0);
                          }),
                          t.get()
                        );
                      }),
                    B = (e, t) => {
                      const { type: n, op1: r, op2: o } = e;
                      switch (n) {
                        case N:
                          return "left" === t ? [null, R(o)] : [R(r), null];
                        case K:
                          let e = !1;
                          return (
                            l(r).traverse(null, (t) => {
                              void 0 !== t.r && (e = !0);
                            }),
                            e ? [null, R(o)] : [R(r), null]
                          );
                        case L:
                          return [R(r), R(o)];
                        default:
                          throw Error("Unrecognised conflict: " + n);
                      }
                    },
                    V = (e, t, n, r) => {
                      let o = null;
                      for (;;) {
                        const { ok: l, result: i, conflict: s } = q(t, n, r);
                        if (l) return I(o, i);
                        if (e(s)) {
                          const [e, l] = B(s, r);
                          (t = I(t, e)), (n = I(n, l)), (o = I(o, l));
                        } else z(s);
                      }
                    };
                  (d.transformNoConflict = (e, t, n) => V(() => !0, e, t, n)),
                    (d.typeAllowingConflictsPred = (e) =>
                      t({}, d, { transform: (t, n, r) => V(e, t, n, r) }));
                },
                {
                  "./cursor": "YBDT",
                  "./deepEqual": "eFkX",
                  "./deepClone": "TNQL",
                  "ot-text-unicode": "IMP5",
                },
              ],
            },
            {},
            ["iIAs"]
          ),
          i = o.exports;
        exports.default = i;
      },
      {},
    ],
    Xrp7: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.JSONServer =
            exports.MessageEvent =
            exports.EventTarget =
              void 0);
        var s = t(require("./json1.js"));
        function t(s) {
          return s && s.__esModule ? s : { default: s };
        }
        const e =
          globalThis.EventTarget ||
          class {
            constructor() {
              this.listeners = {};
            }
            dispatchEvent(s) {
              const t = this.listeners[s.type];
              if (t) for (let e = 0; e < t.length; e++) t[e](s);
            }
            addEventListener(s, t) {
              let e = this.listeners[s];
              e || ((e = []), (this.listeners[s] = e)), e.push(t);
            }
            removeEventListener(s, t) {
              const e = this.listeners[s];
              if (e) {
                const s = listners.indexOf(t);
                -1 !== s && e.splice(s, 1);
              }
            }
          };
        exports.EventTarget = e;
        const n =
          globalThis.MessageEvent ||
          class {
            constructor(s, t = {}) {
              (this.type = s), (this.data = t.data);
            }
          };
        exports.MessageEvent = n;
        class i extends e {
          constructor(s, t = {}) {
            super(),
              (this.lastJson = JSON.parse(JSON.stringify(s))),
              (this.baseIndex = 0),
              (this.history = []),
              (this.connections = []),
              "number" != typeof t.maxHistory && (t.maxHistory = 1024),
              (this.options = t);
          }
          getJson() {
            return JSON.parse(JSON.stringify(this.lastJson));
          }
          connect(s) {
            this.dispatchEvent(
              new n("send", {
                data: {
                  connection: s,
                  message: {
                    method: "init",
                    json: JSON.parse(JSON.stringify(this.lastJson)),
                    baseIndex: this.baseIndex + this.history.length,
                  },
                },
              })
            ),
              this.connections.push(s);
          }
          disconnect(s) {
            const t = this.connections.indexOf(s);
            -1 !== t && this.connections.splice(t);
          }
          pushOps(t, e, i) {
            const o = this.baseIndex + this.history.length;
            if (o !== e)
              if (e >= this.baseIndex) {
                const n = o - e;
                if (n > 0) {
                  for (let e = 0; e < t.length; e++)
                    for (let i = 0; i < n; i++) {
                      const o = s.default.type.tryTransform(
                        t[e],
                        this.history[this.history.length - n + i],
                        "left"
                      );
                      if (!o.ok) {
                        t[e] = null;
                        break;
                      }
                      t[e] = o.result;
                    }
                  t = t.filter((s) => null !== s);
                } else t.length = 0;
              } else t.length = 0;
            if (t.length > 0) {
              for (let s = 0; s < this.connections.length; s++) {
                const e = this.connections[s];
                e !== i &&
                  this.dispatchEvent(
                    new n("send", {
                      data: {
                        connection: e,
                        message: {
                          method: "ops",
                          ops: t,
                          baseIndex: this.baseIndex + this.history.length,
                        },
                      },
                    })
                  );
              }
              for (let e = 0; e < t.length; e++)
                this.lastJson = s.default.type.apply(this.lastJson, t[e]);
              for (
                this.history.push.apply(this.history, t);
                this.history.length >= this.options.maxHistory;

              )
                this.history.shift(), this.baseIndex++;
            }
            o !== e &&
              this.dispatchEvent(
                new n("send", {
                  data: {
                    connection: i,
                    message: {
                      method: "init",
                      json: JSON.parse(JSON.stringify(this.lastJson)),
                      baseIndex: this.baseIndex + this.history.length,
                    },
                  },
                })
              );
          }
        }
        exports.JSONServer = i;
      },
      { "./json1.js": "g6JQ" },
    ],
  },
  {},
  ["Xrp7"],
  null
);
//# sourceMappingURL=/sync-server.js.map

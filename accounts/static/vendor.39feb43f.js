let t;
function e(t, e, i, s) {
  Object.defineProperty(t, e, {
    get: i,
    set: s,
    enumerable: !0,
    configurable: !0,
  });
}
var i,
  s,
  r,
  n,
  o,
  l,
  a,
  c,
  h,
  u,
  d,
  f,
  p,
  m,
  g,
  b,
  v,
  y,
  x,
  E,
  w,
  N,
  _,
  A,
  S,
  k,
  O,
  L,
  T,
  C,
  q,
  M,
  D,
  j,
  R,
  V,
  I,
  P,
  $,
  B,
  U,
  H,
  z,
  F,
  W,
  Y,
  K,
  Z,
  X,
  G =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {};
function Q(t) {
  return t && t.__esModule ? t.default : t;
}
var J = {},
  tt = {},
  te = G.parcelRequire94c2;
null == te &&
  (((te = function (t) {
    if (t in J) return J[t].exports;
    if (t in tt) {
      var e = tt[t];
      delete tt[t];
      var i = { id: t, exports: {} };
      return (J[t] = i), e.call(i.exports, i, i.exports), i.exports;
    }
    var s = Error("Cannot find module '" + t + "'");
    throw ((s.code = "MODULE_NOT_FOUND"), s);
  }).register = function (t, e) {
    tt[t] = e;
  }),
  (G.parcelRequire94c2 = te));
var ti = te.register;
ti("5Jx4e", function (t, i) {
  e(t.exports, "default", function () {
    return a;
  });
  var s = te("ht9qF"),
    r = i && !i.nodeType && i,
    n = r && t && !t.nodeType && t,
    o = n && n.exports === r ? s.default.Buffer : void 0,
    l = o ? o.allocUnsafe : void 0,
    a = function (t, e) {
      if (e) return t.slice();
      var i = t.length,
        s = l ? l(i) : new t.constructor(i);
      return t.copy(s), s;
    };
}),
  ti("ht9qF", function (t, i) {
    e(t.exports, "default", function () {
      return n;
    });
    var s = te("lnjqR"),
      r = "object" == typeof self && self && self.Object === Object && self,
      n = s.default || r || Function("return this")();
  }),
  ti("lnjqR", function (t, i) {
    e(t.exports, "default", function () {
      return s;
    });
    var s = "object" == typeof G && G && G.Object === Object && G;
  }),
  ti("dG9Ze", function (t, i) {
    e(t.exports, "default", function () {
      return a;
    });
    var s = te("ht9qF"),
      r = te("9bks7"),
      n = i && !i.nodeType && i,
      o = n && t && !t.nodeType && t,
      l = o && o.exports === n ? s.default.Buffer : void 0,
      a = (l ? l.isBuffer : void 0) || r.default;
  }),
  ti("9bks7", function (t, i) {
    e(t.exports, "default", function () {
      return s;
    });
    var s = function () {
      return !1;
    };
  }),
  ti("rj6Om", function (t, i) {
    e(t.exports, "default", function () {
      return l;
    });
    var s = te("lnjqR"),
      r = i && !i.nodeType && i,
      n = r && t && !t.nodeType && t,
      o = n && n.exports === r && s.default.process,
      l = (function () {
        try {
          var t = n && n.require && n.require("util").types;
          if (t) return t;
          return o && o.binding && o.binding("util");
        } catch (t) {}
      })();
  }),
  ti("6VEzq", function (t, e) {
    var i,
      s = "__lodash_hash_undefined__",
      r = "[object Arguments]",
      n = "[object Boolean]",
      o = "[object Date]",
      l = "[object Function]",
      a = "[object GeneratorFunction]",
      c = "[object Map]",
      h = "[object Number]",
      u = "[object Object]",
      d = "[object Promise]",
      f = "[object RegExp]",
      p = "[object Set]",
      m = "[object String]",
      g = "[object Symbol]",
      b = "[object WeakMap]",
      v = "[object ArrayBuffer]",
      y = "[object DataView]",
      x = "[object Float32Array]",
      E = "[object Float64Array]",
      w = "[object Int8Array]",
      N = "[object Int16Array]",
      _ = "[object Int32Array]",
      A = "[object Uint8Array]",
      S = "[object Uint8ClampedArray]",
      k = "[object Uint16Array]",
      O = "[object Uint32Array]",
      L = /\w*$/,
      T = /^\[object .+?Constructor\]$/,
      C = /^(?:0|[1-9]\d*)$/,
      q = {};
    (q[r] =
      q["[object Array]"] =
      q[v] =
      q[y] =
      q[n] =
      q[o] =
      q[x] =
      q[E] =
      q[w] =
      q[N] =
      q[_] =
      q[c] =
      q[h] =
      q[u] =
      q[f] =
      q[p] =
      q[m] =
      q[g] =
      q[A] =
      q[S] =
      q[k] =
      q[O] =
        !0),
      (q["[object Error]"] = q[l] = q[b] = !1);
    var M = "object" == typeof G && G && G.Object === Object && G,
      D = "object" == typeof self && self && self.Object === Object && self,
      j = M || D || Function("return this")(),
      R = e && !e.nodeType && e,
      V = R && t && !t.nodeType && t,
      I = V && V.exports === R;
    function P(t, e) {
      return t.set(e[0], e[1]), t;
    }
    function $(t, e) {
      return t.add(e), t;
    }
    function B(t, e, i, s) {
      var r = -1,
        n = t ? t.length : 0;
      for (s && n && (i = t[++r]); ++r < n; ) i = e(i, t[r], r, t);
      return i;
    }
    function U(t) {
      var e = !1;
      if (null != t && "function" != typeof t.toString)
        try {
          e = !!(t + "");
        } catch (t) {}
      return e;
    }
    function H(t) {
      var e = -1,
        i = Array(t.size);
      return (
        t.forEach(function (t, s) {
          i[++e] = [s, t];
        }),
        i
      );
    }
    function z(t, e) {
      return function (i) {
        return t(e(i));
      };
    }
    function F(t) {
      var e = -1,
        i = Array(t.size);
      return (
        t.forEach(function (t) {
          i[++e] = t;
        }),
        i
      );
    }
    var W = Array.prototype,
      Y = Function.prototype,
      K = Object.prototype,
      Z = j["__core-js_shared__"],
      X = (i = /[^.]+$/.exec((Z && Z.keys && Z.keys.IE_PROTO) || ""))
        ? "Symbol(src)_1." + i
        : "",
      Q = Y.toString,
      J = K.hasOwnProperty,
      tt = K.toString,
      te = RegExp(
        "^" +
          Q.call(J)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      ),
      ti = I ? j.Buffer : void 0,
      ts = j.Symbol,
      tr = j.Uint8Array,
      tn = z(Object.getPrototypeOf, Object),
      to = Object.create,
      tl = K.propertyIsEnumerable,
      ta = W.splice,
      tc = Object.getOwnPropertySymbols,
      th = ti ? ti.isBuffer : void 0,
      tu = z(Object.keys, Object),
      td = tD(j, "DataView"),
      tf = tD(j, "Map"),
      tp = tD(j, "Promise"),
      tm = tD(j, "Set"),
      tg = tD(j, "WeakMap"),
      tb = tD(Object, "create"),
      tv = tI(td),
      ty = tI(tf),
      tx = tI(tp),
      tE = tI(tm),
      tw = tI(tg),
      tN = ts ? ts.prototype : void 0,
      t_ = tN ? tN.valueOf : void 0;
    function tA(t) {
      var e = -1,
        i = t ? t.length : 0;
      for (this.clear(); ++e < i; ) {
        var s = t[e];
        this.set(s[0], s[1]);
      }
    }
    function tS(t) {
      var e = -1,
        i = t ? t.length : 0;
      for (this.clear(); ++e < i; ) {
        var s = t[e];
        this.set(s[0], s[1]);
      }
    }
    function tk(t) {
      var e = -1,
        i = t ? t.length : 0;
      for (this.clear(); ++e < i; ) {
        var s = t[e];
        this.set(s[0], s[1]);
      }
    }
    function tO(t) {
      this.__data__ = new tS(t);
    }
    function tL(t, e, i) {
      var s = t[e];
      (J.call(t, e) && tP(s, i) && (void 0 !== i || e in t)) || (t[e] = i);
    }
    function tT(t, e) {
      for (var i = t.length; i--; ) if (tP(t[i][0], e)) return i;
      return -1;
    }
    function tC(t) {
      var e = new t.constructor(t.byteLength);
      return new tr(e).set(new tr(t)), e;
    }
    function tq(t, e, i, s) {
      i || (i = {});
      for (var r = -1, n = e.length; ++r < n; ) {
        var o = e[r],
          l = s ? s(i[o], t[o], o, i, t) : void 0;
        tL(i, o, void 0 === l ? t[o] : l);
      }
      return i;
    }
    function tM(t, e) {
      var i,
        s = t.__data__;
      return (
        "string" == (i = typeof e) ||
        "number" == i ||
        "symbol" == i ||
        "boolean" == i
          ? "__proto__" !== e
          : null === e
      )
        ? s["string" == typeof e ? "string" : "hash"]
        : s.map;
    }
    function tD(t, e) {
      var i = null == t ? void 0 : t[e];
      return !(!tz(i) || (X && X in i)) && (tH(i) || U(i) ? te : T).test(tI(i))
        ? i
        : void 0;
    }
    (tA.prototype.clear = function () {
      this.__data__ = tb ? tb(null) : {};
    }),
      (tA.prototype.delete = function (t) {
        return this.has(t) && delete this.__data__[t];
      }),
      (tA.prototype.get = function (t) {
        var e = this.__data__;
        if (tb) {
          var i = e[t];
          return i === s ? void 0 : i;
        }
        return J.call(e, t) ? e[t] : void 0;
      }),
      (tA.prototype.has = function (t) {
        var e = this.__data__;
        return tb ? void 0 !== e[t] : J.call(e, t);
      }),
      (tA.prototype.set = function (t, e) {
        return (this.__data__[t] = tb && void 0 === e ? s : e), this;
      }),
      (tS.prototype.clear = function () {
        this.__data__ = [];
      }),
      (tS.prototype.delete = function (t) {
        var e = this.__data__,
          i = tT(e, t);
        return !(i < 0) && (i == e.length - 1 ? e.pop() : ta.call(e, i, 1), !0);
      }),
      (tS.prototype.get = function (t) {
        var e = this.__data__,
          i = tT(e, t);
        return i < 0 ? void 0 : e[i][1];
      }),
      (tS.prototype.has = function (t) {
        return tT(this.__data__, t) > -1;
      }),
      (tS.prototype.set = function (t, e) {
        var i = this.__data__,
          s = tT(i, t);
        return s < 0 ? i.push([t, e]) : (i[s][1] = e), this;
      }),
      (tk.prototype.clear = function () {
        this.__data__ = {
          hash: new tA(),
          map: new (tf || tS)(),
          string: new tA(),
        };
      }),
      (tk.prototype.delete = function (t) {
        return tM(this, t).delete(t);
      }),
      (tk.prototype.get = function (t) {
        return tM(this, t).get(t);
      }),
      (tk.prototype.has = function (t) {
        return tM(this, t).has(t);
      }),
      (tk.prototype.set = function (t, e) {
        return tM(this, t).set(t, e), this;
      }),
      (tO.prototype.clear = function () {
        this.__data__ = new tS();
      }),
      (tO.prototype.delete = function (t) {
        return this.__data__.delete(t);
      }),
      (tO.prototype.get = function (t) {
        return this.__data__.get(t);
      }),
      (tO.prototype.has = function (t) {
        return this.__data__.has(t);
      }),
      (tO.prototype.set = function (t, e) {
        var i = this.__data__;
        if (i instanceof tS) {
          var s = i.__data__;
          if (!tf || s.length < 199) return s.push([t, e]), this;
          i = this.__data__ = new tk(s);
        }
        return i.set(t, e), this;
      });
    var tj = tc
        ? z(tc, Object)
        : function () {
            return [];
          },
      tR = function (t) {
        return tt.call(t);
      };
    function tV(t) {
      var e = t && t.constructor;
      return t === (("function" == typeof e && e.prototype) || K);
    }
    function tI(t) {
      if (null != t) {
        try {
          return Q.call(t);
        } catch (t) {}
        try {
          return t + "";
        } catch (t) {}
      }
      return "";
    }
    function tP(t, e) {
      return t === e || (t != t && e != e);
    }
    ((td && tR(new td(new ArrayBuffer(1))) != y) ||
      (tf && tR(new tf()) != c) ||
      (tp && tR(tp.resolve()) != d) ||
      (tm && tR(new tm()) != p) ||
      (tg && tR(new tg()) != b)) &&
      (tR = function (t) {
        var e = tt.call(t),
          i = e == u ? t.constructor : void 0,
          s = i ? tI(i) : void 0;
        if (s)
          switch (s) {
            case tv:
              return y;
            case ty:
              return c;
            case tx:
              return d;
            case tE:
              return p;
            case tw:
              return b;
          }
        return e;
      });
    var t$ = Array.isArray;
    function tB(t) {
      var e;
      return (
        null != t &&
        "number" == typeof (e = t.length) &&
        e > -1 &&
        e % 1 == 0 &&
        e <= 0x1fffffffffffff &&
        !tH(t)
      );
    }
    var tU =
      th ||
      function () {
        return !1;
      };
    function tH(t) {
      var e = tz(t) ? tt.call(t) : "";
      return e == l || e == a;
    }
    function tz(t) {
      var e = typeof t;
      return !!t && ("object" == e || "function" == e);
    }
    function tF(t) {
      return tB(t)
        ? (function (t, e) {
            var i,
              s =
                t$(t) ||
                (t &&
                  "object" == typeof t &&
                  tB(t) &&
                  J.call(t, "callee") &&
                  (!tl.call(t, "callee") || tt.call(t) == r))
                  ? (function (t, e) {
                      for (var i = -1, s = Array(t); ++i < t; ) s[i] = e(i);
                      return s;
                    })(t.length, String)
                  : [],
              n = s.length,
              o = !!n;
            for (var l in t)
              J.call(t, l) &&
                !(
                  o &&
                  ("length" == l ||
                    ((i = null == (i = n) ? 0x1fffffffffffff : i) &&
                      ("number" == typeof l || C.test(l)) &&
                      l > -1 &&
                      l % 1 == 0 &&
                      l < i))
                ) &&
                s.push(l);
            return s;
          })(t)
        : (function (t) {
            if (!tV(t)) return tu(t);
            var e = [];
            for (var i in Object(t))
              J.call(t, i) && "constructor" != i && e.push(i);
            return e;
          })(t);
    }
    t.exports = function (t) {
      return (function t(e, i, s, d, b, T, C) {
        if ((d && (M = T ? d(e, b, T, C) : d(e)), void 0 !== M)) return M;
        if (!tz(e)) return e;
        var M,
          D = t$(e);
        if (D) {
          if (
            ((j = e.length),
            (R = e.constructor(j)),
            j &&
              "string" == typeof e[0] &&
              J.call(e, "index") &&
              ((R.index = e.index), (R.input = e.input)),
            (M = R),
            !i)
          )
            return (function (t, e) {
              var i = -1,
                s = t.length;
              for (e || (e = Array(s)); ++i < s; ) e[i] = t[i];
              return e;
            })(e, M);
        } else {
          var j,
            R,
            V,
            I,
            z,
            W,
            Y = tR(e),
            K = Y == l || Y == a;
          if (tU(e))
            return (function (t, e) {
              if (e) return t.slice();
              var i = new t.constructor(t.length);
              return t.copy(i), i;
            })(e, i);
          if (Y == u || Y == r || (K && !T)) {
            if (U(e)) return T ? e : {};
            if (
              ((M =
                "function" != typeof (V = K ? {} : e).constructor || tV(V)
                  ? {}
                  : tz((I = tn(V)))
                  ? to(I)
                  : {}),
              !i)
            )
              return (z = (W = M) && tq(e, tF(e), W)), tq(e, tj(e), z);
          } else {
            if (!q[Y]) return T ? e : {};
            M = (function (t, e, i, s) {
              var r,
                l,
                a,
                u = t.constructor;
              switch (e) {
                case v:
                  return tC(t);
                case n:
                case o:
                  return new u(+t);
                case y:
                  return (
                    (r = s ? tC(t.buffer) : t.buffer),
                    new t.constructor(r, t.byteOffset, t.byteLength)
                  );
                case x:
                case E:
                case w:
                case N:
                case _:
                case A:
                case S:
                case k:
                case O:
                  return (
                    (l = s ? tC(t.buffer) : t.buffer),
                    new t.constructor(l, t.byteOffset, t.length)
                  );
                case c:
                  return B(s ? i(H(t), !0) : H(t), P, new t.constructor());
                case h:
                case m:
                  return new u(t);
                case f:
                  return (
                    ((a = new t.constructor(t.source, L.exec(t))).lastIndex =
                      t.lastIndex),
                    a
                  );
                case p:
                  return B(s ? i(F(t), !0) : F(t), $, new t.constructor());
                case g:
                  return t_ ? Object(t_.call(t)) : {};
              }
            })(e, Y, t, i);
          }
        }
        C || (C = new tO());
        var Z = C.get(e);
        if (Z) return Z;
        if ((C.set(e, M), !D)) {
          var X,
            G,
            Q = s
              ? ((G = tF((X = e))),
                t$(X)
                  ? G
                  : (function (t, e) {
                      for (var i = -1, s = e.length, r = t.length; ++i < s; )
                        t[r + i] = e[i];
                      return t;
                    })(G, tj(X)))
              : tF(e);
        }
        return (
          (function (t, e) {
            for (
              var i = -1, s = t ? t.length : 0;
              ++i < s && !1 !== e(t[i], i, t);

            );
          })(Q || e, function (r, n) {
            Q && (r = e[(n = r)]), tL(M, n, t(r, i, s, d, n, e, C));
          }),
          M
        );
      })(t, !0, !0);
    };
  }),
  ti("iK1WR", function (t, e) {
    var i,
      s,
      r,
      n = "__lodash_hash_undefined__",
      o = "[object Arguments]",
      l = "[object Array]",
      a = "[object Boolean]",
      c = "[object Date]",
      h = "[object Error]",
      u = "[object Function]",
      d = "[object Map]",
      f = "[object Number]",
      p = "[object Object]",
      m = "[object Promise]",
      g = "[object RegExp]",
      b = "[object Set]",
      v = "[object String]",
      y = "[object WeakMap]",
      x = "[object ArrayBuffer]",
      E = "[object DataView]",
      w = /^\[object .+?Constructor\]$/,
      N = /^(?:0|[1-9]\d*)$/,
      _ = {};
    (_["[object Float32Array]"] =
      _["[object Float64Array]"] =
      _["[object Int8Array]"] =
      _["[object Int16Array]"] =
      _["[object Int32Array]"] =
      _["[object Uint8Array]"] =
      _["[object Uint8ClampedArray]"] =
      _["[object Uint16Array]"] =
      _["[object Uint32Array]"] =
        !0),
      (_[o] =
        _[l] =
        _[x] =
        _[a] =
        _[E] =
        _[c] =
        _[h] =
        _[u] =
        _[d] =
        _[f] =
        _[p] =
        _[g] =
        _[b] =
        _[v] =
        _[y] =
          !1);
    var A = "object" == typeof G && G && G.Object === Object && G,
      S = "object" == typeof self && self && self.Object === Object && self,
      k = A || S || Function("return this")(),
      O = e && !e.nodeType && e,
      L = O && t && !t.nodeType && t,
      T = L && L.exports === O,
      C = T && A.process,
      q = (function () {
        try {
          return C && C.binding && C.binding("util");
        } catch (t) {}
      })(),
      M = q && q.isTypedArray;
    function D(t) {
      var e = -1,
        i = Array(t.size);
      return (
        t.forEach(function (t, s) {
          i[++e] = [s, t];
        }),
        i
      );
    }
    function j(t) {
      var e = -1,
        i = Array(t.size);
      return (
        t.forEach(function (t) {
          i[++e] = t;
        }),
        i
      );
    }
    var R = Array.prototype,
      V = Function.prototype,
      I = Object.prototype,
      P = k["__core-js_shared__"],
      $ = V.toString,
      B = I.hasOwnProperty,
      U = (i = /[^.]+$/.exec((P && P.keys && P.keys.IE_PROTO) || ""))
        ? "Symbol(src)_1." + i
        : "",
      H = I.toString,
      z = RegExp(
        "^" +
          $.call(B)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      ),
      F = T ? k.Buffer : void 0,
      W = k.Symbol,
      Y = k.Uint8Array,
      K = I.propertyIsEnumerable,
      Z = R.splice,
      X = W ? W.toStringTag : void 0,
      Q = Object.getOwnPropertySymbols,
      J = F ? F.isBuffer : void 0,
      tt =
        ((s = Object.keys),
        (r = Object),
        function (t) {
          return s(r(t));
        }),
      te = tA(k, "DataView"),
      ti = tA(k, "Map"),
      ts = tA(k, "Promise"),
      tr = tA(k, "Set"),
      tn = tA(k, "WeakMap"),
      to = tA(Object, "create"),
      tl = tO(te),
      ta = tO(ti),
      tc = tO(ts),
      th = tO(tr),
      tu = tO(tn),
      td = W ? W.prototype : void 0,
      tf = td ? td.valueOf : void 0;
    function tp(t) {
      var e = -1,
        i = null == t ? 0 : t.length;
      for (this.clear(); ++e < i; ) {
        var s = t[e];
        this.set(s[0], s[1]);
      }
    }
    function tm(t) {
      var e = -1,
        i = null == t ? 0 : t.length;
      for (this.clear(); ++e < i; ) {
        var s = t[e];
        this.set(s[0], s[1]);
      }
    }
    function tg(t) {
      var e = -1,
        i = null == t ? 0 : t.length;
      for (this.clear(); ++e < i; ) {
        var s = t[e];
        this.set(s[0], s[1]);
      }
    }
    function tb(t) {
      var e = -1,
        i = null == t ? 0 : t.length;
      for (this.__data__ = new tg(); ++e < i; ) this.add(t[e]);
    }
    function tv(t) {
      var e = (this.__data__ = new tm(t));
      this.size = e.size;
    }
    function ty(t, e) {
      for (var i = t.length; i--; ) if (tL(t[i][0], e)) return i;
      return -1;
    }
    function tx(t) {
      return null == t
        ? void 0 === t
          ? "[object Undefined]"
          : "[object Null]"
        : X && X in Object(t)
        ? (function (t) {
            var e = B.call(t, X),
              i = t[X];
            try {
              t[X] = void 0;
              var s = !0;
            } catch (t) {}
            var r = H.call(t);
            return s && (e ? (t[X] = i) : delete t[X]), r;
          })(t)
        : H.call(t);
    }
    function tE(t) {
      return tR(t) && tx(t) == o;
    }
    function tw(t, e, i, s, r, n) {
      var o = 1 & i,
        l = t.length,
        a = e.length;
      if (l != a && !(o && a > l)) return !1;
      var c = n.get(t);
      if (c && n.get(e)) return c == e;
      var h = -1,
        u = !0,
        d = 2 & i ? new tb() : void 0;
      for (n.set(t, e), n.set(e, t); ++h < l; ) {
        var f = t[h],
          p = e[h];
        if (s) var m = o ? s(p, f, h, e, t, n) : s(f, p, h, t, e, n);
        if (void 0 !== m) {
          if (m) continue;
          u = !1;
          break;
        }
        if (d) {
          if (
            !(function (t, e) {
              for (var i = -1, s = null == t ? 0 : t.length; ++i < s; )
                if (e(t[i], i, t)) return !0;
              return !1;
            })(e, function (t, e) {
              if (!d.has(e) && (f === t || r(f, t, i, s, n))) return d.push(e);
            })
          ) {
            u = !1;
            break;
          }
        } else if (!(f === p || r(f, p, i, s, n))) {
          u = !1;
          break;
        }
      }
      return n.delete(t), n.delete(e), u;
    }
    function tN(t) {
      var e;
      return (
        (e = (function (t) {
          return null != t && tD(t.length) && !tM(t)
            ? (function (t, e) {
                var i,
                  s = tC(t),
                  r = !s && tT(t),
                  n = !s && !r && tq(t),
                  o = !s && !r && !n && tV(t),
                  l = s || r || n || o,
                  a = l
                    ? (function (t, e) {
                        for (var i = -1, s = Array(t); ++i < t; ) s[i] = e(i);
                        return s;
                      })(t.length, String)
                    : [],
                  c = a.length;
                for (var h in t)
                  B.call(t, h) &&
                    !(
                      l &&
                      ("length" == h ||
                        (n && ("offset" == h || "parent" == h)) ||
                        (o &&
                          ("buffer" == h ||
                            "byteLength" == h ||
                            "byteOffset" == h)) ||
                        ((i = null == (i = c) ? 0x1fffffffffffff : i) &&
                          ("number" == typeof h || N.test(h)) &&
                          h > -1 &&
                          h % 1 == 0 &&
                          h < i))
                    ) &&
                    a.push(h);
                return a;
              })(t)
            : (function (t) {
                if (
                  ((e = t && t.constructor),
                  t !== (("function" == typeof e && e.prototype) || I))
                )
                  return tt(t);
                var e,
                  i = [];
                for (var s in Object(t))
                  B.call(t, s) && "constructor" != s && i.push(s);
                return i;
              })(t);
        })(t)),
        tC(t)
          ? e
          : (function (t, e) {
              for (var i = -1, s = e.length, r = t.length; ++i < s; )
                t[r + i] = e[i];
              return t;
            })(e, tS(t))
      );
    }
    function t_(t, e) {
      var i,
        s = t.__data__;
      return (
        "string" == (i = typeof e) ||
        "number" == i ||
        "symbol" == i ||
        "boolean" == i
          ? "__proto__" !== e
          : null === e
      )
        ? s["string" == typeof e ? "string" : "hash"]
        : s.map;
    }
    function tA(t, e) {
      var i = null == t ? void 0 : t[e];
      return !(!tj(i) || (U && U in i)) && (tM(i) ? z : w).test(tO(i))
        ? i
        : void 0;
    }
    (tp.prototype.clear = function () {
      (this.__data__ = to ? to(null) : {}), (this.size = 0);
    }),
      (tp.prototype.delete = function (t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= e ? 1 : 0), e;
      }),
      (tp.prototype.get = function (t) {
        var e = this.__data__;
        if (to) {
          var i = e[t];
          return i === n ? void 0 : i;
        }
        return B.call(e, t) ? e[t] : void 0;
      }),
      (tp.prototype.has = function (t) {
        var e = this.__data__;
        return to ? void 0 !== e[t] : B.call(e, t);
      }),
      (tp.prototype.set = function (t, e) {
        var i = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (i[t] = to && void 0 === e ? n : e),
          this
        );
      }),
      (tm.prototype.clear = function () {
        (this.__data__ = []), (this.size = 0);
      }),
      (tm.prototype.delete = function (t) {
        var e = this.__data__,
          i = ty(e, t);
        return (
          !(i < 0) &&
          (i == e.length - 1 ? e.pop() : Z.call(e, i, 1), --this.size, !0)
        );
      }),
      (tm.prototype.get = function (t) {
        var e = this.__data__,
          i = ty(e, t);
        return i < 0 ? void 0 : e[i][1];
      }),
      (tm.prototype.has = function (t) {
        return ty(this.__data__, t) > -1;
      }),
      (tm.prototype.set = function (t, e) {
        var i = this.__data__,
          s = ty(i, t);
        return s < 0 ? (++this.size, i.push([t, e])) : (i[s][1] = e), this;
      }),
      (tg.prototype.clear = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new tp(),
            map: new (ti || tm)(),
            string: new tp(),
          });
      }),
      (tg.prototype.delete = function (t) {
        var e = t_(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      }),
      (tg.prototype.get = function (t) {
        return t_(this, t).get(t);
      }),
      (tg.prototype.has = function (t) {
        return t_(this, t).has(t);
      }),
      (tg.prototype.set = function (t, e) {
        var i = t_(this, t),
          s = i.size;
        return i.set(t, e), (this.size += i.size == s ? 0 : 1), this;
      }),
      (tb.prototype.add = tb.prototype.push =
        function (t) {
          return this.__data__.set(t, n), this;
        }),
      (tb.prototype.has = function (t) {
        return this.__data__.has(t);
      }),
      (tv.prototype.clear = function () {
        (this.__data__ = new tm()), (this.size = 0);
      }),
      (tv.prototype.delete = function (t) {
        var e = this.__data__,
          i = e.delete(t);
        return (this.size = e.size), i;
      }),
      (tv.prototype.get = function (t) {
        return this.__data__.get(t);
      }),
      (tv.prototype.has = function (t) {
        return this.__data__.has(t);
      }),
      (tv.prototype.set = function (t, e) {
        var i = this.__data__;
        if (i instanceof tm) {
          var s = i.__data__;
          if (!ti || s.length < 199)
            return s.push([t, e]), (this.size = ++i.size), this;
          i = this.__data__ = new tg(s);
        }
        return i.set(t, e), (this.size = i.size), this;
      });
    var tS = Q
        ? function (t) {
            return null == t
              ? []
              : (function (t, e) {
                  for (
                    var i = -1, s = null == t ? 0 : t.length, r = 0, n = [];
                    ++i < s;

                  ) {
                    var o = t[i];
                    e(o, i, t) && (n[r++] = o);
                  }
                  return n;
                })(Q((t = Object(t))), function (e) {
                  return K.call(t, e);
                });
          }
        : function () {
            return [];
          },
      tk = tx;
    function tO(t) {
      if (null != t) {
        try {
          return $.call(t);
        } catch (t) {}
        try {
          return t + "";
        } catch (t) {}
      }
      return "";
    }
    function tL(t, e) {
      return t === e || (t != t && e != e);
    }
    ((te && tk(new te(new ArrayBuffer(1))) != E) ||
      (ti && tk(new ti()) != d) ||
      (ts && tk(ts.resolve()) != m) ||
      (tr && tk(new tr()) != b) ||
      (tn && tk(new tn()) != y)) &&
      (tk = function (t) {
        var e = tx(t),
          i = e == p ? t.constructor : void 0,
          s = i ? tO(i) : "";
        if (s)
          switch (s) {
            case tl:
              return E;
            case ta:
              return d;
            case tc:
              return m;
            case th:
              return b;
            case tu:
              return y;
          }
        return e;
      });
    var tT = tE(
        (function () {
          return arguments;
        })()
      )
        ? tE
        : function (t) {
            return tR(t) && B.call(t, "callee") && !K.call(t, "callee");
          },
      tC = Array.isArray,
      tq =
        J ||
        function () {
          return !1;
        };
    function tM(t) {
      if (!tj(t)) return !1;
      var e = tx(t);
      return (
        e == u ||
        "[object GeneratorFunction]" == e ||
        "[object AsyncFunction]" == e ||
        "[object Proxy]" == e
      );
    }
    function tD(t) {
      return (
        "number" == typeof t && t > -1 && t % 1 == 0 && t <= 0x1fffffffffffff
      );
    }
    function tj(t) {
      var e = typeof t;
      return null != t && ("object" == e || "function" == e);
    }
    function tR(t) {
      return null != t && "object" == typeof t;
    }
    var tV = M
      ? function (t) {
          return M(t);
        }
      : function (t) {
          return tR(t) && tD(t.length) && !!_[tx(t)];
        };
    t.exports = function (t, e) {
      return (function t(e, i, s, r, n) {
        return (
          e === i ||
          (null != e && null != i && (tR(e) || tR(i))
            ? (function (t, e, i, s, r, n) {
                var u = tC(t),
                  m = tC(e),
                  y = u ? l : tk(t),
                  w = m ? l : tk(e);
                (y = y == o ? p : y), (w = w == o ? p : w);
                var N = y == p,
                  _ = w == p,
                  A = y == w;
                if (A && tq(t)) {
                  if (!tq(e)) return !1;
                  (u = !0), (N = !1);
                }
                if (A && !N)
                  return (
                    n || (n = new tv()),
                    u || tV(t)
                      ? tw(t, e, i, s, r, n)
                      : (function (t, e, i, s, r, n, o) {
                          switch (i) {
                            case E:
                              if (
                                t.byteLength != e.byteLength ||
                                t.byteOffset != e.byteOffset
                              )
                                break;
                              (t = t.buffer), (e = e.buffer);
                            case x:
                              if (
                                t.byteLength != e.byteLength ||
                                !n(new Y(t), new Y(e))
                              )
                                break;
                              return !0;
                            case a:
                            case c:
                            case f:
                              return tL(+t, +e);
                            case h:
                              return t.name == e.name && t.message == e.message;
                            case g:
                            case v:
                              return t == e + "";
                            case d:
                              var l = D;
                            case b:
                              var u = 1 & s;
                              if ((l || (l = j), t.size != e.size && !u)) break;
                              var p = o.get(t);
                              if (p) return p == e;
                              (s |= 2), o.set(t, e);
                              var m = tw(l(t), l(e), s, r, n, o);
                              return o.delete(t), m;
                            case "[object Symbol]":
                              if (tf) return tf.call(t) == tf.call(e);
                          }
                          return !1;
                        })(t, e, y, i, s, r, n)
                  );
                if (!(1 & i)) {
                  var S = N && B.call(t, "__wrapped__"),
                    k = _ && B.call(e, "__wrapped__");
                  if (S || k) {
                    var O = S ? t.value() : t,
                      L = k ? e.value() : e;
                    return n || (n = new tv()), r(O, L, i, s, n);
                  }
                }
                return (
                  !!A &&
                  (n || (n = new tv()),
                  (function (t, e, i, s, r, n) {
                    var o = 1 & i,
                      l = tN(t),
                      a = l.length;
                    if (a != tN(e).length && !o) return !1;
                    for (var c = a; c--; ) {
                      var h = l[c];
                      if (!(o ? h in e : B.call(e, h))) return !1;
                    }
                    var u = n.get(t);
                    if (u && n.get(e)) return u == e;
                    var d = !0;
                    n.set(t, e), n.set(e, t);
                    for (var f = o; ++c < a; ) {
                      var p = t[(h = l[c])],
                        m = e[h];
                      if (s)
                        var g = o ? s(m, p, h, e, t, n) : s(p, m, h, t, e, n);
                      if (!(void 0 === g ? p === m || r(p, m, i, s, n) : g)) {
                        d = !1;
                        break;
                      }
                      f || (f = "constructor" == h);
                    }
                    if (d && !f) {
                      var b = t.constructor,
                        v = e.constructor;
                      b != v &&
                        "constructor" in t &&
                        "constructor" in e &&
                        !(
                          "function" == typeof b &&
                          b instanceof b &&
                          "function" == typeof v &&
                          v instanceof v
                        ) &&
                        (d = !1);
                    }
                    return n.delete(t), n.delete(e), d;
                  })(t, e, i, s, r, n))
                );
              })(e, i, s, r, t, n)
            : e != e && i != i)
        );
      })(t, e);
    };
  });
var ts = te("j3H8N"),
  tr = function (t, e) {
    return t === e || (t != t && e != e);
  },
  tn = function (t, e) {
    for (var i = t.length; i--; ) if (tr(t[i][0], e)) return i;
    return -1;
  },
  to = Array.prototype.splice;
function tl(t) {
  var e = -1,
    i = null == t ? 0 : t.length;
  for (this.clear(); ++e < i; ) {
    var s = t[e];
    this.set(s[0], s[1]);
  }
}
(tl.prototype.clear = function () {
  (this.__data__ = []), (this.size = 0);
}),
  (tl.prototype.delete = function (t) {
    var e = this.__data__,
      i = tn(e, t);
    return (
      !(i < 0) &&
      (i == e.length - 1 ? e.pop() : to.call(e, i, 1), --this.size, !0)
    );
  }),
  (tl.prototype.get = function (t) {
    var e = this.__data__,
      i = tn(e, t);
    return i < 0 ? void 0 : e[i][1];
  }),
  (tl.prototype.has = function (t) {
    return tn(this.__data__, t) > -1;
  }),
  (tl.prototype.set = function (t, e) {
    var i = this.__data__,
      s = tn(i, t);
    return s < 0 ? (++this.size, i.push([t, e])) : (i[s][1] = e), this;
  });
var ta = te("ht9qF"),
  tc = ta.default.Symbol,
  th = Object.prototype,
  tu = th.hasOwnProperty,
  td = th.toString,
  tf = tc ? tc.toStringTag : void 0,
  tp = function (t) {
    var e = tu.call(t, tf),
      i = t[tf];
    try {
      t[tf] = void 0;
      var s = !0;
    } catch (t) {}
    var r = td.call(t);
    return s && (e ? (t[tf] = i) : delete t[tf]), r;
  },
  tm = Object.prototype.toString,
  tg = tc ? tc.toStringTag : void 0,
  tb = function (t) {
    return null == t
      ? void 0 === t
        ? "[object Undefined]"
        : "[object Null]"
      : tg && tg in Object(t)
      ? tp(t)
      : tm.call(t);
  },
  tv = function (t) {
    var e = typeof t;
    return null != t && ("object" == e || "function" == e);
  },
  ty = function (t) {
    if (!tv(t)) return !1;
    var e = tb(t);
    return (
      "[object Function]" == e ||
      "[object GeneratorFunction]" == e ||
      "[object AsyncFunction]" == e ||
      "[object Proxy]" == e
    );
  },
  ta = te("ht9qF"),
  tx = ta.default["__core-js_shared__"],
  tE = (n = /[^.]+$/.exec((tx && tx.keys && tx.keys.IE_PROTO) || ""))
    ? "Symbol(src)_1." + n
    : "",
  tw = Function.prototype.toString,
  tN = function (t) {
    if (null != t) {
      try {
        return tw.call(t);
      } catch (t) {}
      try {
        return t + "";
      } catch (t) {}
    }
    return "";
  },
  t_ = /^\[object .+?Constructor\]$/,
  tA = Object.prototype,
  tS = Function.prototype.toString,
  tk = tA.hasOwnProperty,
  tO = RegExp(
    "^" +
      tS
        .call(tk)
        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  ),
  tL = function (t, e) {
    var i,
      s = null == t ? void 0 : t[e];
    return tv((i = s)) && (!tE || !(tE in i)) && (ty(i) ? tO : t_).test(tN(i))
      ? s
      : void 0;
  },
  ta = te("ht9qF"),
  tT = tL(ta.default, "Map"),
  tC = tL(Object, "create"),
  tq = Object.prototype.hasOwnProperty,
  tM = Object.prototype.hasOwnProperty;
function tD(t) {
  var e = -1,
    i = null == t ? 0 : t.length;
  for (this.clear(); ++e < i; ) {
    var s = t[e];
    this.set(s[0], s[1]);
  }
}
(tD.prototype.clear = function () {
  (this.__data__ = tC ? tC(null) : {}), (this.size = 0);
}),
  (tD.prototype.delete = function (t) {
    var e = this.has(t) && delete this.__data__[t];
    return (this.size -= e ? 1 : 0), e;
  }),
  (tD.prototype.get = function (t) {
    var e = this.__data__;
    if (tC) {
      var i = e[t];
      return "__lodash_hash_undefined__" === i ? void 0 : i;
    }
    return tq.call(e, t) ? e[t] : void 0;
  }),
  (tD.prototype.has = function (t) {
    var e = this.__data__;
    return tC ? void 0 !== e[t] : tM.call(e, t);
  }),
  (tD.prototype.set = function (t, e) {
    var i = this.__data__;
    return (
      (this.size += this.has(t) ? 0 : 1),
      (i[t] = tC && void 0 === e ? "__lodash_hash_undefined__" : e),
      this
    );
  });
var tj = function (t) {
    var e = typeof t;
    return "string" == e || "number" == e || "symbol" == e || "boolean" == e
      ? "__proto__" !== t
      : null === t;
  },
  tR = function (t, e) {
    var i = t.__data__;
    return tj(e) ? i["string" == typeof e ? "string" : "hash"] : i.map;
  };
function tV(t) {
  var e = -1,
    i = null == t ? 0 : t.length;
  for (this.clear(); ++e < i; ) {
    var s = t[e];
    this.set(s[0], s[1]);
  }
}
function tI(t) {
  var e = (this.__data__ = new tl(t));
  this.size = e.size;
}
(tV.prototype.clear = function () {
  (this.size = 0),
    (this.__data__ = {
      hash: new tD(),
      map: new (tT || tl)(),
      string: new tD(),
    });
}),
  (tV.prototype.delete = function (t) {
    var e = tR(this, t).delete(t);
    return (this.size -= e ? 1 : 0), e;
  }),
  (tV.prototype.get = function (t) {
    return tR(this, t).get(t);
  }),
  (tV.prototype.has = function (t) {
    return tR(this, t).has(t);
  }),
  (tV.prototype.set = function (t, e) {
    var i = tR(this, t),
      s = i.size;
    return i.set(t, e), (this.size += i.size == s ? 0 : 1), this;
  }),
  (tI.prototype.clear = function () {
    (this.__data__ = new tl()), (this.size = 0);
  }),
  (tI.prototype.delete = function (t) {
    var e = this.__data__,
      i = e.delete(t);
    return (this.size = e.size), i;
  }),
  (tI.prototype.get = function (t) {
    return this.__data__.get(t);
  }),
  (tI.prototype.has = function (t) {
    return this.__data__.has(t);
  }),
  (tI.prototype.set = function (t, e) {
    var i = this.__data__;
    if (i instanceof tl) {
      var s = i.__data__;
      if (!tT || s.length < 199)
        return s.push([t, e]), (this.size = ++i.size), this;
      i = this.__data__ = new tV(s);
    }
    return i.set(t, e), (this.size = i.size), this;
  });
var tP = (function () {
    try {
      var t = tL(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch (t) {}
  })(),
  t$ = function (t, e, i) {
    "__proto__" == e && tP
      ? tP(t, e, { configurable: !0, enumerable: !0, value: i, writable: !0 })
      : (t[e] = i);
  },
  tB = function (t, e, i) {
    ((void 0 === i || tr(t[e], i)) && (void 0 !== i || e in t)) || t$(t, e, i);
  },
  tU = function (t, e, i) {
    for (var s = -1, r = Object(t), n = i(t), o = n.length; o--; ) {
      var l = n[++s];
      if (!1 === e(r[l], l, r)) break;
    }
    return t;
  },
  tH = te("5Jx4e"),
  ta = te("ht9qF"),
  tz = ta.default.Uint8Array,
  tF = function (t) {
    var e = new t.constructor(t.byteLength);
    return new tz(e).set(new tz(t)), e;
  },
  tW = function (t, e) {
    var i = e ? tF(t.buffer) : t.buffer;
    return new t.constructor(i, t.byteOffset, t.length);
  },
  tY = function (t, e) {
    var i = -1,
      s = t.length;
    for (e || (e = Array(s)); ++i < s; ) e[i] = t[i];
    return e;
  },
  tK = Object.create,
  tZ = (function () {
    function t() {}
    return function (e) {
      if (!tv(e)) return {};
      if (tK) return tK(e);
      t.prototype = e;
      var i = new t();
      return (t.prototype = void 0), i;
    };
  })(),
  tX = function (t, e) {
    return function (i) {
      return t(e(i));
    };
  },
  tG = tX(Object.getPrototypeOf, Object),
  tQ = Object.prototype,
  tJ = function (t) {
    var e = t && t.constructor;
    return t === (("function" == typeof e && e.prototype) || tQ);
  },
  t0 = function (t) {
    return "function" != typeof t.constructor || tJ(t) ? {} : tZ(tG(t));
  },
  t1 = function (t) {
    return null != t && "object" == typeof t;
  },
  t2 = function (t) {
    return t1(t) && "[object Arguments]" == tb(t);
  },
  t5 = Object.prototype,
  t3 = t5.hasOwnProperty,
  t4 = t5.propertyIsEnumerable,
  t6 = t2(
    (function () {
      return arguments;
    })()
  )
    ? t2
    : function (t) {
        return t1(t) && t3.call(t, "callee") && !t4.call(t, "callee");
      },
  t8 = Array.isArray,
  t9 = function (t) {
    return (
      "number" == typeof t && t > -1 && t % 1 == 0 && t <= 0x1fffffffffffff
    );
  },
  t7 = function (t) {
    return null != t && t9(t.length) && !ty(t);
  },
  et = te("dG9Ze"),
  ee = Object.prototype,
  ei = Function.prototype.toString,
  es = ee.hasOwnProperty,
  er = ei.call(Object),
  en = function (t) {
    if (!t1(t) || "[object Object]" != tb(t)) return !1;
    var e = tG(t);
    if (null === e) return !0;
    var i = es.call(e, "constructor") && e.constructor;
    return "function" == typeof i && i instanceof i && ei.call(i) == er;
  },
  eo = {};
(eo["[object Float32Array]"] =
  eo["[object Float64Array]"] =
  eo["[object Int8Array]"] =
  eo["[object Int16Array]"] =
  eo["[object Int32Array]"] =
  eo["[object Uint8Array]"] =
  eo["[object Uint8ClampedArray]"] =
  eo["[object Uint16Array]"] =
  eo["[object Uint32Array]"] =
    !0),
  (eo["[object Arguments]"] =
    eo["[object Array]"] =
    eo["[object ArrayBuffer]"] =
    eo["[object Boolean]"] =
    eo["[object DataView]"] =
    eo["[object Date]"] =
    eo["[object Error]"] =
    eo["[object Function]"] =
    eo["[object Map]"] =
    eo["[object Number]"] =
    eo["[object Object]"] =
    eo["[object RegExp]"] =
    eo["[object Set]"] =
    eo["[object String]"] =
    eo["[object WeakMap]"] =
      !1);
var el = function (t) {
    return function (e) {
      return t(e);
    };
  },
  ea = te("rj6Om"),
  ec = ea.default && ea.default.isTypedArray,
  eh = ec
    ? el(ec)
    : function (t) {
        return t1(t) && t9(t.length) && !!eo[tb(t)];
      },
  eu = function (t, e) {
    if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e)
      return t[e];
  },
  ed = Object.prototype.hasOwnProperty,
  ef = function (t, e, i) {
    var s = t[e];
    (ed.call(t, e) && tr(s, i) && (void 0 !== i || e in t)) || t$(t, e, i);
  },
  ep = function (t, e, i, s) {
    var r = !i;
    i || (i = {});
    for (var n = -1, o = e.length; ++n < o; ) {
      var l = e[n],
        a = s ? s(i[l], t[l], l, i, t) : void 0;
      void 0 === a && (a = t[l]), r ? t$(i, l, a) : ef(i, l, a);
    }
    return i;
  },
  em = function (t, e) {
    for (var i = -1, s = Array(t); ++i < t; ) s[i] = e(i);
    return s;
  },
  et = te("dG9Ze"),
  eg = /^(?:0|[1-9]\d*)$/,
  eb = function (t, e) {
    var i = typeof t;
    return (
      !!(e = null == e ? 0x1fffffffffffff : e) &&
      ("number" == i || ("symbol" != i && eg.test(t))) &&
      t > -1 &&
      t % 1 == 0 &&
      t < e
    );
  },
  ev = Object.prototype.hasOwnProperty,
  ey = function (t, e) {
    var i = t8(t),
      s = !i && t6(t),
      r = !i && !s && (0, et.default)(t),
      n = !i && !s && !r && eh(t),
      o = i || s || r || n,
      l = o ? em(t.length, String) : [],
      a = l.length;
    for (var c in t)
      (e || ev.call(t, c)) &&
        !(
          o &&
          ("length" == c ||
            (r && ("offset" == c || "parent" == c)) ||
            (n && ("buffer" == c || "byteLength" == c || "byteOffset" == c)) ||
            eb(c, a))
        ) &&
        l.push(c);
    return l;
  },
  ex = function (t) {
    var e = [];
    if (null != t) for (var i in Object(t)) e.push(i);
    return e;
  },
  eE = Object.prototype.hasOwnProperty,
  ew = function (t) {
    if (!tv(t)) return ex(t);
    var e = tJ(t),
      i = [];
    for (var s in t) ("constructor" == s && (e || !eE.call(t, s))) || i.push(s);
    return i;
  },
  eN = function (t) {
    return t7(t) ? ey(t, !0) : ew(t);
  },
  e_ = function (t, e, i, s, r, n, o) {
    var l = eu(t, i),
      a = eu(e, i),
      c = o.get(a);
    if (c) {
      tB(t, i, c);
      return;
    }
    var h = n ? n(l, a, i + "", t, e, o) : void 0,
      u = void 0 === h;
    if (u) {
      var d = t8(a),
        f = !d && (0, et.default)(a),
        p = !d && !f && eh(a);
      ((h = a), d || f || p)
        ? t8(l)
          ? (h = l)
          : t1(l) && t7(l)
          ? (h = tY(l))
          : f
          ? ((u = !1), (h = (0, tH.default)(a, !0)))
          : p
          ? ((u = !1), (h = tW(a, !0)))
          : (h = [])
        : en(a) || t6(a)
        ? ((h = l), t6(l))
          ? (h = ep(l, eN(l)))
          : (!tv(l) || ty(l)) && (h = t0(a))
        : (u = !1);
    }
    u && (o.set(a, h), r(h, a, s, n, o), o.delete(a)), tB(t, i, h);
  },
  eA = function t(e, i, s, r, n) {
    e !== i &&
      tU(
        i,
        function (o, l) {
          if ((n || (n = new tI()), tv(o))) e_(e, i, l, s, t, r, n);
          else {
            var a = r ? r(eu(e, l), o, l + "", e, i, n) : void 0;
            void 0 === a && (a = o), tB(e, l, a);
          }
        },
        eN
      );
  },
  eS = function (t) {
    return t;
  },
  ek = function (t, e, i) {
    switch (i.length) {
      case 0:
        return t.call(e);
      case 1:
        return t.call(e, i[0]);
      case 2:
        return t.call(e, i[0], i[1]);
      case 3:
        return t.call(e, i[0], i[1], i[2]);
    }
    return t.apply(e, i);
  },
  eO = Math.max,
  eL = Date.now,
  eT =
    ((o = tP
      ? function (t, e) {
          return tP(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: function () {
              return e;
            },
            writable: !0,
          });
        }
      : eS),
    (l = 0),
    (a = 0),
    function () {
      var t = eL(),
        e = 16 - (t - a);
      if (((a = t), e > 0)) {
        if (++l >= 800) return arguments[0];
      } else l = 0;
      return o.apply(void 0, arguments);
    }),
  eC = function (t, e, i) {
    if (!tv(i)) return !1;
    var s = typeof e;
    return (
      ("number" == s
        ? !!(t7(i) && eb(e, i.length))
        : "string" == s && e in i) && tr(i[e], t)
    );
  },
  eq =
    ((c = function (t, e, i) {
      eA(t, e, i);
    }),
    (i = function (t, e) {
      var i = -1,
        s = e.length,
        r = s > 1 ? e[s - 1] : void 0,
        n = s > 2 ? e[2] : void 0;
      for (
        r = c.length > 3 && "function" == typeof r ? (s--, r) : void 0,
          n && eC(e[0], e[1], n) && ((r = s < 3 ? void 0 : r), (s = 1)),
          t = Object(t);
        ++i < s;

      ) {
        var o = e[i];
        o && c(t, o, i, r);
      }
      return t;
    }),
    eT(
      ((r = eO(void 0 === (r = s) ? i.length - 1 : r, 0)),
      function () {
        for (
          var t = arguments, e = -1, s = eO(t.length - r, 0), n = Array(s);
          ++e < s;

        )
          n[e] = t[r + e];
        e = -1;
        for (var o = Array(r + 1); ++e < r; ) o[e] = t[e];
        return (o[r] = eS(n)), ek(i, this, o);
      }),
      i + ""
    )),
  eM = {};
e(eM, "Scope", function () {
  return eD;
}),
  e(eM, "Attributor", function () {
    return ej;
  }),
  e(eM, "Registry", function () {
    return eI;
  }),
  e(eM, "ClassAttributor", function () {
    return e$;
  }),
  e(eM, "StyleAttributor", function () {
    return eU;
  }),
  e(eM, "AttributorStore", function () {
    return eH;
  }),
  e(eM, "LeafBlot", function () {
    return eY;
  }),
  e(eM, "ParentBlot", function () {
    return eG;
  }),
  e(eM, "InlineBlot", function () {
    return eJ;
  }),
  e(eM, "BlockBlot", function () {
    return e1;
  }),
  e(eM, "ContainerBlot", function () {
    return e5;
  }),
  e(eM, "EmbedBlot", function () {
    return e3;
  }),
  e(eM, "ScrollBlot", function () {
    return e8;
  }),
  e(eM, "TextBlot", function () {
    return e7;
  });
var eD =
  (((t = eD || {})[(t.TYPE = 3)] = "TYPE"),
  (t[(t.LEVEL = 12)] = "LEVEL"),
  (t[(t.ATTRIBUTE = 13)] = "ATTRIBUTE"),
  (t[(t.BLOT = 14)] = "BLOT"),
  (t[(t.INLINE = 7)] = "INLINE"),
  (t[(t.BLOCK = 11)] = "BLOCK"),
  (t[(t.BLOCK_BLOT = 10)] = "BLOCK_BLOT"),
  (t[(t.INLINE_BLOT = 6)] = "INLINE_BLOT"),
  (t[(t.BLOCK_ATTRIBUTE = 9)] = "BLOCK_ATTRIBUTE"),
  (t[(t.INLINE_ATTRIBUTE = 5)] = "INLINE_ATTRIBUTE"),
  (t[(t.ANY = 15)] = "ANY"),
  t);
class ej {
  constructor(t, e, i = {}) {
    (this.attrName = t), (this.keyName = e);
    let s = eD.TYPE & eD.ATTRIBUTE;
    (this.scope = null != i.scope ? (i.scope & eD.LEVEL) | s : eD.ATTRIBUTE),
      null != i.whitelist && (this.whitelist = i.whitelist);
  }
  static keys(t) {
    return Array.from(t.attributes).map((t) => t.name);
  }
  add(t, e) {
    return !!this.canAdd(t, e) && (t.setAttribute(this.keyName, e), !0);
  }
  canAdd(t, e) {
    return (
      null == this.whitelist ||
      ("string" == typeof e
        ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1
        : this.whitelist.indexOf(e) > -1)
    );
  }
  remove(t) {
    t.removeAttribute(this.keyName);
  }
  value(t) {
    let e = t.getAttribute(this.keyName);
    return this.canAdd(t, e) && e ? e : "";
  }
}
class eR extends Error {
  constructor(t) {
    super((t = "[Parchment] " + t)),
      (this.message = t),
      (this.name = this.constructor.name);
  }
}
const eV = class t {
  constructor() {
    (this.attributes = {}),
      (this.classes = {}),
      (this.tags = {}),
      (this.types = {});
  }
  static find(t, e = !1) {
    if (null == t) return null;
    if (this.blots.has(t)) return this.blots.get(t) || null;
    if (e) {
      let i = null;
      try {
        i = t.parentNode;
      } catch {
        return null;
      }
      return this.find(i, e);
    }
    return null;
  }
  create(e, i, s) {
    let r = this.query(i);
    if (null == r) throw new eR(`Unable to create ${i} blot`);
    let n =
        i instanceof Node || i.nodeType === Node.TEXT_NODE ? i : r.create(s),
      o = new r(e, n, s);
    return t.blots.set(o.domNode, o), o;
  }
  find(e, i = !1) {
    return t.find(e, i);
  }
  query(t, e = eD.ANY) {
    let i;
    return (
      "string" == typeof t
        ? (i = this.types[t] || this.attributes[t])
        : t instanceof Text || t.nodeType === Node.TEXT_NODE
        ? (i = this.types.text)
        : "number" == typeof t
        ? t & eD.LEVEL & eD.BLOCK
          ? (i = this.types.block)
          : t & eD.LEVEL & eD.INLINE && (i = this.types.inline)
        : t instanceof Element &&
          ((t.getAttribute("class") || "")
            .split(/\s+/)
            .some((t) => !!(i = this.classes[t])),
          (i = i || this.tags[t.tagName])),
      null == i
        ? null
        : "scope" in i && e & eD.LEVEL & i.scope && e & eD.TYPE & i.scope
        ? i
        : null
    );
  }
  register(...t) {
    return t.map((t) => {
      let e = "blotName" in t,
        i = "attrName" in t;
      if (!e && !i) throw new eR("Invalid definition");
      if (e && "abstract" === t.blotName)
        throw new eR("Cannot register abstract class");
      let s = e ? t.blotName : i ? t.attrName : void 0;
      return (
        (this.types[s] = t),
        i
          ? "string" == typeof t.keyName && (this.attributes[t.keyName] = t)
          : e &&
            (t.className && (this.classes[t.className] = t),
            t.tagName &&
              (Array.isArray(t.tagName)
                ? (t.tagName = t.tagName.map((t) => t.toUpperCase()))
                : (t.tagName = t.tagName.toUpperCase()),
              (Array.isArray(t.tagName) ? t.tagName : [t.tagName]).forEach(
                (e) => {
                  (null == this.tags[e] || null == t.className) &&
                    (this.tags[e] = t);
                }
              ))),
        t
      );
    });
  }
};
eV.blots = new WeakMap();
let eI = eV;
function eP(t, e) {
  return (t.getAttribute("class") || "")
    .split(/\s+/)
    .filter((t) => 0 === t.indexOf(`${e}-`));
}
const e$ = class extends ej {
  static keys(t) {
    return (t.getAttribute("class") || "")
      .split(/\s+/)
      .map((t) => t.split("-").slice(0, -1).join("-"));
  }
  add(t, e) {
    return (
      !!this.canAdd(t, e) &&
      (this.remove(t), t.classList.add(`${this.keyName}-${e}`), !0)
    );
  }
  remove(t) {
    eP(t, this.keyName).forEach((e) => {
      t.classList.remove(e);
    }),
      0 === t.classList.length && t.removeAttribute("class");
  }
  value(t) {
    let e = (eP(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
    return this.canAdd(t, e) ? e : "";
  }
};
function eB(t) {
  let e = t.split("-"),
    i = e
      .slice(1)
      .map((t) => t[0].toUpperCase() + t.slice(1))
      .join("");
  return e[0] + i;
}
const eU = class extends ej {
    static keys(t) {
      return (t.getAttribute("style") || "")
        .split(";")
        .map((t) => t.split(":")[0].trim());
    }
    add(t, e) {
      return !!this.canAdd(t, e) && ((t.style[eB(this.keyName)] = e), !0);
    }
    remove(t) {
      (t.style[eB(this.keyName)] = ""),
        t.getAttribute("style") || t.removeAttribute("style");
    }
    value(t) {
      let e = t.style[eB(this.keyName)];
      return this.canAdd(t, e) ? e : "";
    }
  },
  eH = class {
    constructor(t) {
      (this.attributes = {}), (this.domNode = t), this.build();
    }
    attribute(t, e) {
      e
        ? t.add(this.domNode, e) &&
          (null != t.value(this.domNode)
            ? (this.attributes[t.attrName] = t)
            : delete this.attributes[t.attrName])
        : (t.remove(this.domNode), delete this.attributes[t.attrName]);
    }
    build() {
      this.attributes = {};
      let t = eI.find(this.domNode);
      if (null == t) return;
      let e = ej.keys(this.domNode),
        i = e$.keys(this.domNode),
        s = eU.keys(this.domNode);
      e.concat(i)
        .concat(s)
        .forEach((e) => {
          let i = t.scroll.query(e, eD.ATTRIBUTE);
          i instanceof ej && (this.attributes[i.attrName] = i);
        });
    }
    copy(t) {
      Object.keys(this.attributes).forEach((e) => {
        let i = this.attributes[e].value(this.domNode);
        t.format(e, i);
      });
    }
    move(t) {
      this.copy(t),
        Object.keys(this.attributes).forEach((t) => {
          this.attributes[t].remove(this.domNode);
        }),
        (this.attributes = {});
    }
    values() {
      return Object.keys(this.attributes).reduce(
        (t, e) => ((t[e] = this.attributes[e].value(this.domNode)), t),
        {}
      );
    }
  },
  ez = class {
    constructor(t, e) {
      (this.scroll = t),
        (this.domNode = e),
        eI.blots.set(e, this),
        (this.prev = null),
        (this.next = null);
    }
    static create(t) {
      let e, i;
      if (null == this.tagName) throw new eR("Blot definition missing tagName");
      return (
        Array.isArray(this.tagName)
          ? ("string" == typeof t
              ? parseInt((i = t.toUpperCase()), 10).toString() === i &&
                (i = parseInt(i, 10))
              : "number" == typeof t && (i = t),
            (e =
              "number" == typeof i
                ? document.createElement(this.tagName[i - 1])
                : i && this.tagName.indexOf(i) > -1
                ? document.createElement(i)
                : document.createElement(this.tagName[0])))
          : (e = document.createElement(this.tagName)),
        this.className && e.classList.add(this.className),
        e
      );
    }
    get statics() {
      return this.constructor;
    }
    attach() {}
    clone() {
      let t = this.domNode.cloneNode(!1);
      return this.scroll.create(t);
    }
    detach() {
      null != this.parent && this.parent.removeChild(this),
        eI.blots.delete(this.domNode);
    }
    deleteAt(t, e) {
      this.isolate(t, e).remove();
    }
    formatAt(t, e, i, s) {
      let r = this.isolate(t, e);
      if (null != this.scroll.query(i, eD.BLOT) && s) r.wrap(i, s);
      else if (null != this.scroll.query(i, eD.ATTRIBUTE)) {
        let t = this.scroll.create(this.statics.scope);
        r.wrap(t), t.format(i, s);
      }
    }
    insertAt(t, e, i) {
      let s =
          null == i ? this.scroll.create("text", e) : this.scroll.create(e, i),
        r = this.split(t);
      this.parent.insertBefore(s, r || void 0);
    }
    isolate(t, e) {
      let i = this.split(t);
      if (null == i) throw Error("Attempt to isolate at end");
      return i.split(e), i;
    }
    length() {
      return 1;
    }
    offset(t = this.parent) {
      return null == this.parent || this === t
        ? 0
        : this.parent.children.offset(this) + this.parent.offset(t);
    }
    optimize(t) {
      !this.statics.requiredContainer ||
        this.parent instanceof this.statics.requiredContainer ||
        this.wrap(this.statics.requiredContainer.blotName);
    }
    remove() {
      null != this.domNode.parentNode &&
        this.domNode.parentNode.removeChild(this.domNode),
        this.detach();
    }
    replaceWith(t, e) {
      let i = "string" == typeof t ? this.scroll.create(t, e) : t;
      return (
        null != this.parent &&
          (this.parent.insertBefore(i, this.next || void 0), this.remove()),
        i
      );
    }
    split(t, e) {
      return 0 === t ? this : this.next;
    }
    update(t, e) {}
    wrap(t, e) {
      let i = "string" == typeof t ? this.scroll.create(t, e) : t;
      if (
        (null != this.parent &&
          this.parent.insertBefore(i, this.next || void 0),
        "function" != typeof i.appendChild)
      )
        throw new eR(`Cannot wrap ${t}`);
      return i.appendChild(this), i;
    }
  };
ez.blotName = "abstract";
let eF = ez;
const eW = class extends eF {
  static value(t) {
    return !0;
  }
  index(t, e) {
    return this.domNode === t ||
      this.domNode.compareDocumentPosition(t) &
        Node.DOCUMENT_POSITION_CONTAINED_BY
      ? Math.min(e, 1)
      : -1;
  }
  position(t, e) {
    let i = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
    return t > 0 && (i += 1), [this.parent.domNode, i];
  }
  value() {
    return { [this.statics.blotName]: this.statics.value(this.domNode) || !0 };
  }
};
eW.scope = eD.INLINE_BLOT;
const eY = eW;
class eK {
  constructor() {
    (this.head = null), (this.tail = null), (this.length = 0);
  }
  append(...t) {
    if ((this.insertBefore(t[0], null), t.length > 1)) {
      let e = t.slice(1);
      this.append(...e);
    }
  }
  at(t) {
    let e = this.iterator(),
      i = e();
    for (; i && t > 0; ) (t -= 1), (i = e());
    return i;
  }
  contains(t) {
    let e = this.iterator(),
      i = e();
    for (; i; ) {
      if (i === t) return !0;
      i = e();
    }
    return !1;
  }
  indexOf(t) {
    let e = this.iterator(),
      i = e(),
      s = 0;
    for (; i; ) {
      if (i === t) return s;
      (s += 1), (i = e());
    }
    return -1;
  }
  insertBefore(t, e) {
    null != t &&
      (this.remove(t),
      (t.next = e),
      null != e
        ? ((t.prev = e.prev),
          null != e.prev && (e.prev.next = t),
          (e.prev = t),
          e === this.head && (this.head = t))
        : null != this.tail
        ? ((this.tail.next = t), (t.prev = this.tail), (this.tail = t))
        : ((t.prev = null), (this.head = this.tail = t)),
      (this.length += 1));
  }
  offset(t) {
    let e = 0,
      i = this.head;
    for (; null != i; ) {
      if (i === t) return e;
      (e += i.length()), (i = i.next);
    }
    return -1;
  }
  remove(t) {
    this.contains(t) &&
      (null != t.prev && (t.prev.next = t.next),
      null != t.next && (t.next.prev = t.prev),
      t === this.head && (this.head = t.next),
      t === this.tail && (this.tail = t.prev),
      (this.length -= 1));
  }
  iterator(t = this.head) {
    return () => {
      let e = t;
      return null != t && (t = t.next), e;
    };
  }
  find(t, e = !1) {
    let i = this.iterator(),
      s = i();
    for (; s; ) {
      let r = s.length();
      if (t < r || (e && t === r && (null == s.next || 0 !== s.next.length())))
        return [s, t];
      (t -= r), (s = i());
    }
    return [null, 0];
  }
  forEach(t) {
    let e = this.iterator(),
      i = e();
    for (; i; ) t(i), (i = e());
  }
  forEachAt(t, e, i) {
    if (e <= 0) return;
    let [s, r] = this.find(t),
      n = t - r,
      o = this.iterator(s),
      l = o();
    for (; l && n < t + e; ) {
      let s = l.length();
      t > n
        ? i(l, t - n, Math.min(e, n + s - t))
        : i(l, 0, Math.min(s, t + e - n)),
        (n += s),
        (l = o());
    }
  }
  map(t) {
    return this.reduce((e, i) => (e.push(t(i)), e), []);
  }
  reduce(t, e) {
    let i = this.iterator(),
      s = i();
    for (; s; ) (e = t(e, s)), (s = i());
    return e;
  }
}
function eZ(t, e) {
  let i = e.find(t);
  if (i) return i;
  try {
    return e.create(t);
  } catch {
    let i = e.create(eD.INLINE);
    return (
      Array.from(t.childNodes).forEach((t) => {
        i.domNode.appendChild(t);
      }),
      t.parentNode && t.parentNode.replaceChild(i.domNode, t),
      i.attach(),
      i
    );
  }
}
const eX = class t extends eF {
  constructor(t, e) {
    super(t, e), (this.uiNode = null), this.build();
  }
  appendChild(t) {
    this.insertBefore(t);
  }
  attach() {
    super.attach(),
      this.children.forEach((t) => {
        t.attach();
      });
  }
  attachUI(e) {
    null != this.uiNode && this.uiNode.remove(),
      (this.uiNode = e),
      t.uiClass && this.uiNode.classList.add(t.uiClass),
      this.uiNode.setAttribute("contenteditable", "false"),
      this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
  }
  build() {
    (this.children = new eK()),
      Array.from(this.domNode.childNodes)
        .filter((t) => t !== this.uiNode)
        .reverse()
        .forEach((t) => {
          try {
            let e = eZ(t, this.scroll);
            this.insertBefore(e, this.children.head || void 0);
          } catch (t) {
            if (t instanceof eR) return;
            throw t;
          }
        });
  }
  deleteAt(t, e) {
    if (0 === t && e === this.length()) return this.remove();
    this.children.forEachAt(t, e, (t, e, i) => {
      t.deleteAt(e, i);
    });
  }
  descendant(e, i = 0) {
    let [s, r] = this.children.find(i);
    return (null == e.blotName && e(s)) ||
      (null != e.blotName && s instanceof e)
      ? [s, r]
      : s instanceof t
      ? s.descendant(e, r)
      : [null, -1];
  }
  descendants(e, i = 0, s = Number.MAX_VALUE) {
    let r = [],
      n = s;
    return (
      this.children.forEachAt(i, s, (i, s, o) => {
        ((null == e.blotName && e(i)) ||
          (null != e.blotName && i instanceof e)) &&
          r.push(i),
          i instanceof t && (r = r.concat(i.descendants(e, s, n))),
          (n -= o);
      }),
      r
    );
  }
  detach() {
    this.children.forEach((t) => {
      t.detach();
    }),
      super.detach();
  }
  enforceAllowedChildren() {
    let e = !1;
    this.children.forEach((i) => {
      e ||
        this.statics.allowedChildren.some((t) => i instanceof t) ||
        (i.statics.scope === eD.BLOCK_BLOT
          ? (null != i.next && this.splitAfter(i),
            null != i.prev && this.splitAfter(i.prev),
            i.parent.unwrap(),
            (e = !0))
          : i instanceof t
          ? i.unwrap()
          : i.remove());
    });
  }
  formatAt(t, e, i, s) {
    this.children.forEachAt(t, e, (t, e, r) => {
      t.formatAt(e, r, i, s);
    });
  }
  insertAt(t, e, i) {
    let [s, r] = this.children.find(t);
    if (s) s.insertAt(r, e, i);
    else {
      let t =
        null == i ? this.scroll.create("text", e) : this.scroll.create(e, i);
      this.appendChild(t);
    }
  }
  insertBefore(t, e) {
    null != t.parent && t.parent.children.remove(t);
    let i = null;
    this.children.insertBefore(t, e || null),
      (t.parent = this),
      null != e && (i = e.domNode),
      (this.domNode.parentNode !== t.domNode ||
        this.domNode.nextSibling !== i) &&
        this.domNode.insertBefore(t.domNode, i),
      t.attach();
  }
  length() {
    return this.children.reduce((t, e) => t + e.length(), 0);
  }
  moveChildren(t, e) {
    this.children.forEach((i) => {
      t.insertBefore(i, e);
    });
  }
  optimize(t) {
    if (
      (super.optimize(t),
      this.enforceAllowedChildren(),
      null != this.uiNode &&
        this.uiNode !== this.domNode.firstChild &&
        this.domNode.insertBefore(this.uiNode, this.domNode.firstChild),
      0 === this.children.length)
    ) {
      if (null != this.statics.defaultChild) {
        let t = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(t);
      } else this.remove();
    }
  }
  path(e, i = !1) {
    let [s, r] = this.children.find(e, i),
      n = [[this, e]];
    return s instanceof t
      ? n.concat(s.path(r, i))
      : (null != s && n.push([s, r]), n);
  }
  removeChild(t) {
    this.children.remove(t);
  }
  replaceWith(e, i) {
    let s = "string" == typeof e ? this.scroll.create(e, i) : e;
    return s instanceof t && this.moveChildren(s), super.replaceWith(s);
  }
  split(t, e = !1) {
    if (!e) {
      if (0 === t) return this;
      if (t === this.length()) return this.next;
    }
    let i = this.clone();
    return (
      this.parent && this.parent.insertBefore(i, this.next || void 0),
      this.children.forEachAt(t, this.length(), (t, s, r) => {
        let n = t.split(s, e);
        null != n && i.appendChild(n);
      }),
      i
    );
  }
  splitAfter(t) {
    let e = this.clone();
    for (; null != t.next; ) e.appendChild(t.next);
    return this.parent && this.parent.insertBefore(e, this.next || void 0), e;
  }
  unwrap() {
    this.parent && this.moveChildren(this.parent, this.next || void 0),
      this.remove();
  }
  update(t, e) {
    let i = [],
      s = [];
    t.forEach((t) => {
      t.target === this.domNode &&
        "childList" === t.type &&
        (i.push(...t.addedNodes), s.push(...t.removedNodes));
    }),
      s.forEach((t) => {
        if (
          null != t.parentNode &&
          "IFRAME" !== t.tagName &&
          document.body.compareDocumentPosition(t) &
            Node.DOCUMENT_POSITION_CONTAINED_BY
        )
          return;
        let e = this.scroll.find(t);
        null != e &&
          (null == e.domNode.parentNode ||
            e.domNode.parentNode === this.domNode) &&
          e.detach();
      }),
      i
        .filter((t) => t.parentNode === this.domNode && t !== this.uiNode)
        .sort((t, e) =>
          t === e
            ? 0
            : t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING
            ? 1
            : -1
        )
        .forEach((t) => {
          let e = null;
          null != t.nextSibling && (e = this.scroll.find(t.nextSibling));
          let i = eZ(t, this.scroll);
          (i.next !== e || null == i.next) &&
            (null != i.parent && i.parent.removeChild(this),
            this.insertBefore(i, e || void 0));
        }),
      this.enforceAllowedChildren();
  }
};
eX.uiClass = "";
const eG = eX,
  eQ = class t extends eG {
    static create(t) {
      return super.create(t);
    }
    static formats(e, i) {
      let s = i.query(t.blotName);
      if (!(null != s && e.tagName === s.tagName)) {
        if ("string" == typeof this.tagName) return !0;
        if (Array.isArray(this.tagName)) return e.tagName.toLowerCase();
      }
    }
    constructor(t, e) {
      super(t, e), (this.attributes = new eH(this.domNode));
    }
    format(e, i) {
      if (e !== this.statics.blotName || i) {
        let t = this.scroll.query(e, eD.INLINE);
        null != t &&
          (t instanceof ej
            ? this.attributes.attribute(t, i)
            : i &&
              (e !== this.statics.blotName || this.formats()[e] !== i) &&
              this.replaceWith(e, i));
      } else
        this.children.forEach((e) => {
          e instanceof t || (e = e.wrap(t.blotName, !0)),
            this.attributes.copy(e);
        }),
          this.unwrap();
    }
    formats() {
      let t = this.attributes.values(),
        e = this.statics.formats(this.domNode, this.scroll);
      return null != e && (t[this.statics.blotName] = e), t;
    }
    formatAt(t, e, i, s) {
      null != this.formats()[i] || this.scroll.query(i, eD.ATTRIBUTE)
        ? this.isolate(t, e).format(i, s)
        : super.formatAt(t, e, i, s);
    }
    optimize(e) {
      super.optimize(e);
      let i = this.formats();
      if (0 === Object.keys(i).length) return this.unwrap();
      let s = this.next;
      s instanceof t &&
        s.prev === this &&
        (function (t, e) {
          if (Object.keys(t).length !== Object.keys(e).length) return !1;
          for (let i in t) if (t[i] !== e[i]) return !1;
          return !0;
        })(i, s.formats()) &&
        (s.moveChildren(this), s.remove());
    }
    replaceWith(t, e) {
      let i = super.replaceWith(t, e);
      return this.attributes.copy(i), i;
    }
    update(t, e) {
      super.update(t, e),
        t.some((t) => t.target === this.domNode && "attributes" === t.type) &&
          this.attributes.build();
    }
    wrap(e, i) {
      let s = super.wrap(e, i);
      return s instanceof t && this.attributes.move(s), s;
    }
  };
(eQ.allowedChildren = [eQ, eY]),
  (eQ.blotName = "inline"),
  (eQ.scope = eD.INLINE_BLOT),
  (eQ.tagName = "SPAN");
const eJ = eQ,
  e0 = class t extends eG {
    static create(t) {
      return super.create(t);
    }
    static formats(e, i) {
      let s = i.query(t.blotName);
      if (!(null != s && e.tagName === s.tagName)) {
        if ("string" == typeof this.tagName) return !0;
        if (Array.isArray(this.tagName)) return e.tagName.toLowerCase();
      }
    }
    constructor(t, e) {
      super(t, e), (this.attributes = new eH(this.domNode));
    }
    format(e, i) {
      let s = this.scroll.query(e, eD.BLOCK);
      null != s &&
        (s instanceof ej
          ? this.attributes.attribute(s, i)
          : e !== this.statics.blotName || i
          ? i &&
            (e !== this.statics.blotName || this.formats()[e] !== i) &&
            this.replaceWith(e, i)
          : this.replaceWith(t.blotName));
    }
    formats() {
      let t = this.attributes.values(),
        e = this.statics.formats(this.domNode, this.scroll);
      return null != e && (t[this.statics.blotName] = e), t;
    }
    formatAt(t, e, i, s) {
      null != this.scroll.query(i, eD.BLOCK)
        ? this.format(i, s)
        : super.formatAt(t, e, i, s);
    }
    insertAt(t, e, i) {
      if (null == i || null != this.scroll.query(e, eD.INLINE))
        super.insertAt(t, e, i);
      else {
        let s = this.split(t);
        if (null != s) {
          let t = this.scroll.create(e, i);
          s.parent.insertBefore(t, s);
        } else throw Error("Attempt to insertAt after block boundaries");
      }
    }
    replaceWith(t, e) {
      let i = super.replaceWith(t, e);
      return this.attributes.copy(i), i;
    }
    update(t, e) {
      super.update(t, e),
        t.some((t) => t.target === this.domNode && "attributes" === t.type) &&
          this.attributes.build();
    }
  };
(e0.blotName = "block"),
  (e0.scope = eD.BLOCK_BLOT),
  (e0.tagName = "P"),
  (e0.allowedChildren = [eJ, e0, eY]);
const e1 = e0,
  e2 = class extends eG {
    checkMerge() {
      return (
        null !== this.next &&
        this.next.statics.blotName === this.statics.blotName
      );
    }
    deleteAt(t, e) {
      super.deleteAt(t, e), this.enforceAllowedChildren();
    }
    formatAt(t, e, i, s) {
      super.formatAt(t, e, i, s), this.enforceAllowedChildren();
    }
    insertAt(t, e, i) {
      super.insertAt(t, e, i), this.enforceAllowedChildren();
    }
    optimize(t) {
      super.optimize(t),
        this.children.length > 0 &&
          null != this.next &&
          this.checkMerge() &&
          (this.next.moveChildren(this), this.next.remove());
    }
  };
(e2.blotName = "container"), (e2.scope = eD.BLOCK_BLOT);
const e5 = e2,
  e3 = class extends eY {
    static formats(t, e) {}
    format(t, e) {
      super.formatAt(0, this.length(), t, e);
    }
    formatAt(t, e, i, s) {
      0 === t && e === this.length()
        ? this.format(i, s)
        : super.formatAt(t, e, i, s);
    }
    formats() {
      return this.statics.formats(this.domNode, this.scroll);
    }
  },
  e4 = {
    attributes: !0,
    characterData: !0,
    characterDataOldValue: !0,
    childList: !0,
    subtree: !0,
  },
  e6 = class extends eG {
    constructor(t, e) {
      super(null, e),
        (this.registry = t),
        (this.scroll = this),
        this.build(),
        (this.observer = new MutationObserver((t) => {
          this.update(t);
        })),
        this.observer.observe(this.domNode, e4),
        this.attach();
    }
    create(t, e) {
      return this.registry.create(this, t, e);
    }
    find(t, e = !1) {
      let i = this.registry.find(t, e);
      return i
        ? i.scroll === this
          ? i
          : e
          ? this.find(i.scroll.domNode.parentNode, !0)
          : null
        : null;
    }
    query(t, e = eD.ANY) {
      return this.registry.query(t, e);
    }
    register(...t) {
      return this.registry.register(...t);
    }
    build() {
      null != this.scroll && super.build();
    }
    detach() {
      super.detach(), this.observer.disconnect();
    }
    deleteAt(t, e) {
      this.update(),
        0 === t && e === this.length()
          ? this.children.forEach((t) => {
              t.remove();
            })
          : super.deleteAt(t, e);
    }
    formatAt(t, e, i, s) {
      this.update(), super.formatAt(t, e, i, s);
    }
    insertAt(t, e, i) {
      this.update(), super.insertAt(t, e, i);
    }
    optimize(t = [], e = {}) {
      super.optimize(e);
      let i = e.mutationsMap || new WeakMap(),
        s = Array.from(this.observer.takeRecords());
      for (; s.length > 0; ) t.push(s.pop());
      let r = (t, e = !0) => {
          null == t ||
            t === this ||
            (null != t.domNode.parentNode &&
              (i.has(t.domNode) || i.set(t.domNode, []), e && r(t.parent)));
        },
        n = (t) => {
          i.has(t.domNode) &&
            (t instanceof eG && t.children.forEach(n),
            i.delete(t.domNode),
            t.optimize(e));
        },
        o = t;
      for (let e = 0; o.length > 0; e += 1) {
        if (e >= 100)
          throw Error("[Parchment] Maximum optimize iterations reached");
        for (
          o.forEach((t) => {
            let e = this.find(t.target, !0);
            null != e &&
              (e.domNode === t.target &&
                ("childList" === t.type
                  ? (r(this.find(t.previousSibling, !1)),
                    Array.from(t.addedNodes).forEach((t) => {
                      let e = this.find(t, !1);
                      r(e, !1),
                        e instanceof eG &&
                          e.children.forEach((t) => {
                            r(t, !1);
                          });
                    }))
                  : "attributes" === t.type && r(e.prev)),
              r(e));
          }),
            this.children.forEach(n),
            s = (o = Array.from(this.observer.takeRecords())).slice();
          s.length > 0;

        )
          t.push(s.pop());
      }
    }
    update(t, e = {}) {
      t = t || this.observer.takeRecords();
      let i = new WeakMap();
      t
        .map((t) => {
          let e = this.find(t.target, !0);
          return null == e
            ? null
            : i.has(e.domNode)
            ? (i.get(e.domNode).push(t), null)
            : (i.set(e.domNode, [t]), e);
        })
        .forEach((t) => {
          null != t &&
            t !== this &&
            i.has(t.domNode) &&
            t.update(i.get(t.domNode) || [], e);
        }),
        (e.mutationsMap = i),
        i.has(this.domNode) && super.update(i.get(this.domNode), e),
        this.optimize(t, e);
    }
  };
(e6.blotName = "scroll"),
  (e6.defaultChild = e1),
  (e6.allowedChildren = [e1, e5]),
  (e6.scope = eD.BLOCK_BLOT),
  (e6.tagName = "DIV");
const e8 = e6,
  e9 = class t extends eY {
    static create(t) {
      return document.createTextNode(t);
    }
    static value(t) {
      return t.data;
    }
    constructor(t, e) {
      super(t, e), (this.text = this.statics.value(this.domNode));
    }
    deleteAt(t, e) {
      this.domNode.data = this.text =
        this.text.slice(0, t) + this.text.slice(t + e);
    }
    index(t, e) {
      return this.domNode === t ? e : -1;
    }
    insertAt(t, e, i) {
      null == i
        ? ((this.text = this.text.slice(0, t) + e + this.text.slice(t)),
          (this.domNode.data = this.text))
        : super.insertAt(t, e, i);
    }
    length() {
      return this.text.length;
    }
    optimize(e) {
      super.optimize(e),
        (this.text = this.statics.value(this.domNode)),
        0 === this.text.length
          ? this.remove()
          : this.next instanceof t &&
            this.next.prev === this &&
            (this.insertAt(this.length(), this.next.value()),
            this.next.remove());
    }
    position(t, e = !1) {
      return [this.domNode, t];
    }
    split(t, e = !1) {
      if (!e) {
        if (0 === t) return this;
        if (t === this.length()) return this.next;
      }
      let i = this.scroll.create(this.domNode.splitText(t));
      return (
        this.parent.insertBefore(i, this.next || void 0),
        (this.text = this.statics.value(this.domNode)),
        i
      );
    }
    update(t, e) {
      t.some((t) => "characterData" === t.type && t.target === this.domNode) &&
        (this.text = this.statics.value(this.domNode));
    }
    value() {
      return this.text;
    }
  };
(e9.blotName = "text"), (e9.scope = eD.INLINE_BLOT);
const e7 = e9;
var it = {};
Object.defineProperty(it, "__esModule", { value: !0 }),
  (it.AttributeMap = it.OpIterator = it.Op = void 0);
var ie = {};
function ii(t, e, i, s, r) {
  if (t === e) return t ? [[0, t]] : [];
  if (null != i) {
    var n = (function (t, e, i) {
      var s = "number" == typeof i ? { index: i, length: 0 } : i.oldRange,
        r = "number" == typeof i ? null : i.newRange,
        n = t.length,
        o = e.length;
      if (0 === s.length && (null === r || 0 === r.length)) {
        var l = s.index,
          a = t.slice(0, l),
          c = t.slice(l),
          h = r ? r.index : null;
        t: {
          var u = l + o - n;
          if ((null !== h && h !== u) || u < 0 || u > o) break t;
          var d = e.slice(0, u),
            f = e.slice(u);
          if (f !== c) break t;
          var p = Math.min(l, u),
            m = a.slice(0, p),
            g = d.slice(0, p);
          if (m !== g) break t;
          var b = a.slice(p),
            v = d.slice(p);
          return iy(m, b, v, c);
        }
        e: if (null === h || h === l) {
          var d = e.slice(0, l),
            f = e.slice(l);
          if (d !== a) break e;
          var y = Math.min(n - l, o - l),
            x = c.slice(c.length - y),
            E = f.slice(f.length - y);
          if (x !== E) break e;
          var b = c.slice(0, c.length - y),
            v = f.slice(0, f.length - y);
          return iy(a, b, v, x);
        }
      }
      if (s.length > 0 && r && 0 === r.length)
        i: {
          var m = t.slice(0, s.index),
            x = t.slice(s.index + s.length),
            p = m.length,
            y = x.length;
          if (o < p + y) break i;
          var g = e.slice(0, p),
            E = e.slice(o - y);
          if (m !== g || x !== E) break i;
          var b = t.slice(p, n - y),
            v = e.slice(p, o - y);
          return iy(m, b, v, x);
        }
      return null;
    })(t, e, i);
    if (n) return n;
  }
  var o = ir(t, e),
    l = t.substring(0, o);
  o = il((t = t.substring(o)), (e = e.substring(o)));
  var a = t.substring(t.length - o),
    c = (function (t, e) {
      if (!t) return [[1, e]];
      if (!e) return [[-1, t]];
      var i,
        s = t.length > e.length ? t : e,
        r = t.length > e.length ? e : t,
        n = s.indexOf(r);
      if (-1 !== n)
        return (
          (i = [
            [1, s.substring(0, n)],
            [0, r],
            [1, s.substring(n + r.length)],
          ]),
          t.length > e.length && (i[0][0] = i[2][0] = -1),
          i
        );
      if (1 === r.length)
        return [
          [-1, t],
          [1, e],
        ];
      var o = (function (t, e) {
        var i,
          s,
          r,
          n,
          o,
          l = t.length > e.length ? t : e,
          a = t.length > e.length ? e : t;
        if (l.length < 4 || 2 * a.length < l.length) return null;
        function c(t, e, i) {
          for (
            var s,
              r,
              n,
              o,
              l = t.substring(i, i + Math.floor(t.length / 4)),
              a = -1,
              c = "";
            -1 !== (a = e.indexOf(l, a + 1));

          ) {
            var h = ir(t.substring(i), e.substring(a)),
              u = il(t.substring(0, i), e.substring(0, a));
            c.length < u + h &&
              ((c = e.substring(a - u, a) + e.substring(a, a + h)),
              (s = t.substring(0, i - u)),
              (r = t.substring(i + h)),
              (n = e.substring(0, a - u)),
              (o = e.substring(a + h)));
          }
          return 2 * c.length >= t.length ? [s, r, n, o, c] : null;
        }
        var h = c(l, a, Math.ceil(l.length / 4)),
          u = c(l, a, Math.ceil(l.length / 2));
        return h || u
          ? ((i = u ? (h && h[4].length > u[4].length ? h : u) : h),
            t.length > e.length
              ? ((s = i[0]), (r = i[1]), (n = i[2]), (o = i[3]))
              : ((n = i[0]), (o = i[1]), (s = i[2]), (r = i[3])),
            [s, r, n, o, i[4]])
          : null;
      })(t, e);
      if (o) {
        var l = o[0],
          a = o[1],
          c = o[2],
          h = o[3],
          u = o[4],
          d = ii(l, c),
          f = ii(a, h);
        return d.concat([[0, u]], f);
      }
      return (function (t, e) {
        for (
          var i = t.length,
            s = e.length,
            r = Math.ceil((i + s) / 2),
            n = 2 * r,
            o = Array(n),
            l = Array(n),
            a = 0;
          a < n;
          a++
        )
          (o[a] = -1), (l[a] = -1);
        (o[r + 1] = 0), (l[r + 1] = 0);
        for (
          var c = i - s, h = c % 2 != 0, u = 0, d = 0, f = 0, p = 0, m = 0;
          m < r;
          m++
        ) {
          for (var g = -m + u; g <= m - d; g += 2) {
            for (
              var b,
                v = r + g,
                y =
                  (b =
                    g === -m || (g !== m && o[v - 1] < o[v + 1])
                      ? o[v + 1]
                      : o[v - 1] + 1) - g;
              b < i && y < s && t.charAt(b) === e.charAt(y);

            )
              b++, y++;
            if (((o[v] = b), b > i)) d += 2;
            else if (y > s) u += 2;
            else if (h) {
              var x = r + c - g;
              if (x >= 0 && x < n && -1 !== l[x]) {
                var E = i - l[x];
                if (b >= E) return is(t, e, b, y);
              }
            }
          }
          for (var w = -m + f; w <= m - p; w += 2) {
            for (
              var E,
                x = r + w,
                N =
                  (E =
                    w === -m || (w !== m && l[x - 1] < l[x + 1])
                      ? l[x + 1]
                      : l[x - 1] + 1) - w;
              E < i && N < s && t.charAt(i - E - 1) === e.charAt(s - N - 1);

            )
              E++, N++;
            if (((l[x] = E), E > i)) p += 2;
            else if (N > s) f += 2;
            else if (!h) {
              var v = r + c - w;
              if (v >= 0 && v < n && -1 !== o[v]) {
                var b = o[v],
                  y = r + b - v;
                if (b >= (E = i - E)) return is(t, e, b, y);
              }
            }
          }
        }
        return [
          [-1, t],
          [1, e],
        ];
      })(t, e);
    })((t = t.substring(0, t.length - o)), (e = e.substring(0, e.length - o)));
  return (
    l && c.unshift([0, l]),
    a && c.push([0, a]),
    ip(c, r),
    s &&
      (function (t) {
        for (
          var e = !1,
            i = [],
            s = 0,
            r = null,
            n = 0,
            o = 0,
            l = 0,
            a = 0,
            c = 0;
          n < t.length;

        )
          0 == t[n][0]
            ? ((i[s++] = n), (o = a), (l = c), (a = 0), (c = 0), (r = t[n][1]))
            : (1 == t[n][0] ? (a += t[n][1].length) : (c += t[n][1].length),
              r &&
                r.length <= Math.max(o, l) &&
                r.length <= Math.max(a, c) &&
                (t.splice(i[s - 1], 0, [-1, r]),
                (t[i[s - 1] + 1][0] = 1),
                s--,
                (n = --s > 0 ? i[s - 1] : -1),
                (o = 0),
                (l = 0),
                (a = 0),
                (c = 0),
                (r = null),
                (e = !0))),
            n++;
        for (
          e && ip(t),
            (function (t) {
              function e(t, e) {
                if (!t || !e) return 6;
                var i = t.charAt(t.length - 1),
                  s = e.charAt(0),
                  r = i.match(ia),
                  n = s.match(ia),
                  o = r && i.match(ic),
                  l = n && s.match(ic),
                  a = o && i.match(ih),
                  c = l && s.match(ih),
                  h = a && t.match(iu),
                  u = c && e.match(id);
                return h || u
                  ? 5
                  : a || c
                  ? 4
                  : r && !o && l
                  ? 3
                  : o || l
                  ? 2
                  : r || n
                  ? 1
                  : 0;
              }
              for (var i = 1; i < t.length - 1; ) {
                if (0 == t[i - 1][0] && 0 == t[i + 1][0]) {
                  var s = t[i - 1][1],
                    r = t[i][1],
                    n = t[i + 1][1],
                    o = il(s, r);
                  if (o) {
                    var l = r.substring(r.length - o);
                    (s = s.substring(0, s.length - o)),
                      (r = l + r.substring(0, r.length - o)),
                      (n = l + n);
                  }
                  for (
                    var a = s, c = r, h = n, u = e(s, r) + e(r, n);
                    r.charAt(0) === n.charAt(0);

                  ) {
                    (s += r.charAt(0)),
                      (r = r.substring(1) + n.charAt(0)),
                      (n = n.substring(1));
                    var d = e(s, r) + e(r, n);
                    d >= u && ((u = d), (a = s), (c = r), (h = n));
                  }
                  t[i - 1][1] != a &&
                    (a ? (t[i - 1][1] = a) : (t.splice(i - 1, 1), i--),
                    (t[i][1] = c),
                    h ? (t[i + 1][1] = h) : (t.splice(i + 1, 1), i--));
                }
                i++;
              }
            })(t),
            n = 1;
          n < t.length;

        ) {
          if (-1 == t[n - 1][0] && 1 == t[n][0]) {
            var h = t[n - 1][1],
              u = t[n][1],
              d = io(h, u),
              f = io(u, h);
            d >= f
              ? (d >= h.length / 2 || d >= u.length / 2) &&
                (t.splice(n, 0, [0, u.substring(0, d)]),
                (t[n - 1][1] = h.substring(0, h.length - d)),
                (t[n + 1][1] = u.substring(d)),
                n++)
              : (f >= h.length / 2 || f >= u.length / 2) &&
                (t.splice(n, 0, [0, h.substring(0, f)]),
                (t[n - 1][0] = 1),
                (t[n - 1][1] = u.substring(0, u.length - f)),
                (t[n + 1][0] = -1),
                (t[n + 1][1] = h.substring(f)),
                n++),
              n++;
          }
          n++;
        }
      })(c),
    c
  );
}
function is(t, e, i, s) {
  var r = t.substring(0, i),
    n = e.substring(0, s),
    o = t.substring(i),
    l = e.substring(s),
    a = ii(r, n),
    c = ii(o, l);
  return a.concat(c);
}
function ir(t, e) {
  if (!t || !e || t.charAt(0) !== e.charAt(0)) return 0;
  for (var i = 0, s = Math.min(t.length, e.length), r = s, n = 0; i < r; )
    t.substring(n, r) == e.substring(n, r) ? (n = i = r) : (s = r),
      (r = Math.floor((s - i) / 2 + i));
  return im(t.charCodeAt(r - 1)) && r--, r;
}
function io(t, e) {
  var i = t.length,
    s = e.length;
  if (0 == i || 0 == s) return 0;
  i > s ? (t = t.substring(i - s)) : i < s && (e = e.substring(0, i));
  var r = Math.min(i, s);
  if (t == e) return r;
  for (var n = 0, o = 1; ; ) {
    var l = t.substring(r - o),
      a = e.indexOf(l);
    if (-1 == a) return n;
    (o += a),
      (0 == a || t.substring(r - o) == e.substring(0, o)) && ((n = o), o++);
  }
}
function il(t, e) {
  if (!t || !e || t.slice(-1) !== e.slice(-1)) return 0;
  for (var i = 0, s = Math.min(t.length, e.length), r = s, n = 0; i < r; )
    t.substring(t.length - r, t.length - n) ==
    e.substring(e.length - r, e.length - n)
      ? (n = i = r)
      : (s = r),
      (r = Math.floor((s - i) / 2 + i));
  return ig(t.charCodeAt(t.length - r)) && r--, r;
}
var ia = /[^a-zA-Z0-9]/,
  ic = /\s/,
  ih = /[\r\n]/,
  iu = /\n\r?\n$/,
  id = /^\r?\n\r?\n/;
function ip(t, e) {
  t.push([0, ""]);
  for (var i, s = 0, r = 0, n = 0, o = "", l = ""; s < t.length; ) {
    if (s < t.length - 1 && !t[s][1]) {
      t.splice(s, 1);
      continue;
    }
    switch (t[s][0]) {
      case 1:
        n++, (l += t[s][1]), s++;
        break;
      case -1:
        r++, (o += t[s][1]), s++;
        break;
      case 0:
        var a = s - n - r - 1;
        if (e) {
          if (a >= 0 && iv(t[a][1])) {
            var c = t[a][1].slice(-1);
            if (
              ((t[a][1] = t[a][1].slice(0, -1)),
              (o = c + o),
              (l = c + l),
              !t[a][1])
            ) {
              t.splice(a, 1), s--;
              var h = a - 1;
              t[h] && 1 === t[h][0] && (n++, (l = t[h][1] + l), h--),
                t[h] && -1 === t[h][0] && (r++, (o = t[h][1] + o), h--),
                (a = h);
            }
          }
          if (ib(t[s][1])) {
            var c = t[s][1].charAt(0);
            (t[s][1] = t[s][1].slice(1)), (o += c), (l += c);
          }
        }
        if (s < t.length - 1 && !t[s][1]) {
          t.splice(s, 1);
          break;
        }
        if (o.length > 0 || l.length > 0) {
          o.length > 0 &&
            l.length > 0 &&
            (0 !== (i = ir(l, o)) &&
              (a >= 0
                ? (t[a][1] += l.substring(0, i))
                : (t.splice(0, 0, [0, l.substring(0, i)]), s++),
              (l = l.substring(i)),
              (o = o.substring(i))),
            0 !== (i = il(l, o)) &&
              ((t[s][1] = l.substring(l.length - i) + t[s][1]),
              (l = l.substring(0, l.length - i)),
              (o = o.substring(0, o.length - i))));
          var u = n + r;
          0 === o.length && 0 === l.length
            ? (t.splice(s - u, u), (s -= u))
            : 0 === o.length
            ? (t.splice(s - u, u, [1, l]), (s = s - u + 1))
            : 0 === l.length
            ? (t.splice(s - u, u, [-1, o]), (s = s - u + 1))
            : (t.splice(s - u, u, [-1, o], [1, l]), (s = s - u + 2));
        }
        0 !== s && 0 === t[s - 1][0]
          ? ((t[s - 1][1] += t[s][1]), t.splice(s, 1))
          : s++,
          (n = 0),
          (r = 0),
          (o = ""),
          (l = "");
    }
  }
  "" === t[t.length - 1][1] && t.pop();
  var d = !1;
  for (s = 1; s < t.length - 1; )
    0 === t[s - 1][0] &&
      0 === t[s + 1][0] &&
      (t[s][1].substring(t[s][1].length - t[s - 1][1].length) === t[s - 1][1]
        ? ((t[s][1] =
            t[s - 1][1] +
            t[s][1].substring(0, t[s][1].length - t[s - 1][1].length)),
          (t[s + 1][1] = t[s - 1][1] + t[s + 1][1]),
          t.splice(s - 1, 1),
          (d = !0))
        : t[s][1].substring(0, t[s + 1][1].length) == t[s + 1][1] &&
          ((t[s - 1][1] += t[s + 1][1]),
          (t[s][1] = t[s][1].substring(t[s + 1][1].length) + t[s + 1][1]),
          t.splice(s + 1, 1),
          (d = !0))),
      s++;
  d && ip(t, e);
}
function im(t) {
  return t >= 55296 && t <= 56319;
}
function ig(t) {
  return t >= 56320 && t <= 57343;
}
function ib(t) {
  return ig(t.charCodeAt(0));
}
function iv(t) {
  return im(t.charCodeAt(t.length - 1));
}
function iy(t, e, i, s) {
  return iv(t) || ib(s)
    ? null
    : (function (t) {
        for (var e = [], i = 0; i < t.length; i++)
          t[i][1].length > 0 && e.push(t[i]);
        return e;
      })([
        [0, t],
        [-1, e],
        [1, i],
        [0, s],
      ]);
}
function ix(t, e, i, s) {
  return ii(t, e, i, s, !0);
}
(ix.INSERT = 1), (ix.DELETE = -1), (ix.EQUAL = 0), (ie = ix);
var iE = te("6VEzq"),
  iw = te("iK1WR"),
  iN = {};
Object.defineProperty(iN, "__esModule", { value: !0 });
var iE = te("6VEzq"),
  iw = te("iK1WR");
((h = Y || (Y = {})).compose = function (t = {}, e = {}, i = !1) {
  "object" != typeof t && (t = {}), "object" != typeof e && (e = {});
  let s = iE(e);
  for (let r in (i ||
    (s = Object.keys(s).reduce(
      (t, e) => (null != s[e] && (t[e] = s[e]), t),
      {}
    )),
  t))
    void 0 !== t[r] && void 0 === e[r] && (s[r] = t[r]);
  return Object.keys(s).length > 0 ? s : void 0;
}),
  (h.diff = function (t = {}, e = {}) {
    "object" != typeof t && (t = {}), "object" != typeof e && (e = {});
    let i = Object.keys(t)
      .concat(Object.keys(e))
      .reduce(
        (i, s) => (iw(t[s], e[s]) || (i[s] = void 0 === e[s] ? null : e[s]), i),
        {}
      );
    return Object.keys(i).length > 0 ? i : void 0;
  }),
  (h.invert = function (t = {}, e = {}) {
    t = t || {};
    let i = Object.keys(e).reduce(
      (i, s) => (e[s] !== t[s] && void 0 !== t[s] && (i[s] = e[s]), i),
      {}
    );
    return Object.keys(t).reduce(
      (i, s) => (t[s] !== e[s] && void 0 === e[s] && (i[s] = null), i),
      i
    );
  }),
  (h.transform = function (t, e, i = !1) {
    if ("object" != typeof t) return e;
    if ("object" != typeof e) return;
    if (!i) return e;
    let s = Object.keys(e).reduce(
      (i, s) => (void 0 === t[s] && (i[s] = e[s]), i),
      {}
    );
    return Object.keys(s).length > 0 ? s : void 0;
  }),
  (iN.default = Y),
  (it.AttributeMap = iN.default);
var i_ = {};
Object.defineProperty(i_, "__esModule", { value: !0 }),
  ((K || (K = {})).length = function (t) {
    return "number" == typeof t.delete
      ? t.delete
      : "number" == typeof t.retain
      ? t.retain
      : "object" == typeof t.retain && null !== t.retain
      ? 1
      : "string" == typeof t.insert
      ? t.insert.length
      : 1;
  }),
  (i_.default = K),
  (it.Op = i_.default);
var iA = {};
Object.defineProperty(iA, "__esModule", { value: !0 }),
  (iA.default = class {
    constructor(t) {
      (this.ops = t), (this.index = 0), (this.offset = 0);
    }
    hasNext() {
      return this.peekLength() < 1 / 0;
    }
    next(t) {
      t || (t = 1 / 0);
      let e = this.ops[this.index];
      if (!e) return { retain: 1 / 0 };
      {
        let i = this.offset,
          s = i_.default.length(e);
        if (
          (t >= s - i
            ? ((t = s - i), (this.index += 1), (this.offset = 0))
            : (this.offset += t),
          "number" == typeof e.delete)
        )
          return { delete: t };
        {
          let s = {};
          return (
            e.attributes && (s.attributes = e.attributes),
            "number" == typeof e.retain
              ? (s.retain = t)
              : "object" == typeof e.retain && null !== e.retain
              ? (s.retain = e.retain)
              : "string" == typeof e.insert
              ? (s.insert = e.insert.substr(i, t))
              : (s.insert = e.insert),
            s
          );
        }
      }
    }
    peek() {
      return this.ops[this.index];
    }
    peekLength() {
      return this.ops[this.index]
        ? i_.default.length(this.ops[this.index]) - this.offset
        : 1 / 0;
    }
    peekType() {
      let t = this.ops[this.index];
      if (t) {
        if ("number" == typeof t.delete) return "delete";
        if (
          "number" != typeof t.retain &&
          ("object" != typeof t.retain || null === t.retain)
        )
          return "insert";
      }
      return "retain";
    }
    rest() {
      if (!this.hasNext()) return [];
      {
        if (0 === this.offset) return this.ops.slice(this.index);
        let t = this.offset,
          e = this.index,
          i = this.next(),
          s = this.ops.slice(this.index);
        return (this.offset = t), (this.index = e), [i].concat(s);
      }
    }
  }),
  (it.OpIterator = iA.default);
const iS = (t, e) => {
  if ("object" != typeof t || null === t)
    throw Error(`cannot retain a ${typeof t}`);
  if ("object" != typeof e || null === e)
    throw Error(`cannot retain a ${typeof e}`);
  let i = Object.keys(t)[0];
  if (!i || i !== Object.keys(e)[0])
    throw Error(`embed types not matched: ${i} != ${Object.keys(e)[0]}`);
  return [i, t[i], e[i]];
};
class ik {
  constructor(t) {
    Array.isArray(t)
      ? (this.ops = t)
      : null != t && Array.isArray(t.ops)
      ? (this.ops = t.ops)
      : (this.ops = []);
  }
  static registerEmbed(t, e) {
    this.handlers[t] = e;
  }
  static unregisterEmbed(t) {
    delete this.handlers[t];
  }
  static getHandler(t) {
    let e = this.handlers[t];
    if (!e) throw Error(`no handlers for embed type "${t}"`);
    return e;
  }
  insert(t, e) {
    let i = {};
    return "string" == typeof t && 0 === t.length
      ? this
      : ((i.insert = t),
        null != e &&
          "object" == typeof e &&
          Object.keys(e).length > 0 &&
          (i.attributes = e),
        this.push(i));
  }
  delete(t) {
    return t <= 0 ? this : this.push({ delete: t });
  }
  retain(t, e) {
    if ("number" == typeof t && t <= 0) return this;
    let i = { retain: t };
    return (
      null != e &&
        "object" == typeof e &&
        Object.keys(e).length > 0 &&
        (i.attributes = e),
      this.push(i)
    );
  }
  push(t) {
    let e = this.ops.length,
      i = this.ops[e - 1];
    if (((t = iE(t)), "object" == typeof i)) {
      if ("number" == typeof t.delete && "number" == typeof i.delete)
        return (this.ops[e - 1] = { delete: i.delete + t.delete }), this;
      if (
        "number" == typeof i.delete &&
        null != t.insert &&
        ((e -= 1), "object" != typeof (i = this.ops[e - 1]))
      )
        return this.ops.unshift(t), this;
      if (iw(t.attributes, i.attributes)) {
        if ("string" == typeof t.insert && "string" == typeof i.insert)
          return (
            (this.ops[e - 1] = { insert: i.insert + t.insert }),
            "object" == typeof t.attributes &&
              (this.ops[e - 1].attributes = t.attributes),
            this
          );
        if ("number" == typeof t.retain && "number" == typeof i.retain)
          return (
            (this.ops[e - 1] = { retain: i.retain + t.retain }),
            "object" == typeof t.attributes &&
              (this.ops[e - 1].attributes = t.attributes),
            this
          );
      }
    }
    return (
      e === this.ops.length ? this.ops.push(t) : this.ops.splice(e, 0, t), this
    );
  }
  chop() {
    let t = this.ops[this.ops.length - 1];
    return (
      t && "number" == typeof t.retain && !t.attributes && this.ops.pop(), this
    );
  }
  filter(t) {
    return this.ops.filter(t);
  }
  forEach(t) {
    this.ops.forEach(t);
  }
  map(t) {
    return this.ops.map(t);
  }
  partition(t) {
    let e = [],
      i = [];
    return (
      this.forEach((s) => {
        (t(s) ? e : i).push(s);
      }),
      [e, i]
    );
  }
  reduce(t, e) {
    return this.ops.reduce(t, e);
  }
  changeLength() {
    return this.reduce(
      (t, e) =>
        e.insert ? t + i_.default.length(e) : e.delete ? t - e.delete : t,
      0
    );
  }
  length() {
    return this.reduce((t, e) => t + i_.default.length(e), 0);
  }
  slice(t = 0, e = 1 / 0) {
    let i = [],
      s = new iA.default(this.ops),
      r = 0;
    for (; r < e && s.hasNext(); ) {
      let n;
      r < t ? (n = s.next(t - r)) : ((n = s.next(e - r)), i.push(n)),
        (r += i_.default.length(n));
    }
    return new ik(i);
  }
  compose(t) {
    let e = new iA.default(this.ops),
      i = new iA.default(t.ops),
      s = [],
      r = i.peek();
    if (null != r && "number" == typeof r.retain && null == r.attributes) {
      let t = r.retain;
      for (; "insert" === e.peekType() && e.peekLength() <= t; )
        (t -= e.peekLength()), s.push(e.next());
      r.retain - t > 0 && i.next(r.retain - t);
    }
    let n = new ik(s);
    for (; e.hasNext() || i.hasNext(); )
      if ("insert" === i.peekType()) n.push(i.next());
      else if ("delete" === e.peekType()) n.push(e.next());
      else {
        let t = Math.min(e.peekLength(), i.peekLength()),
          s = e.next(t),
          r = i.next(t);
        if (r.retain) {
          let o = {};
          if ("number" == typeof s.retain)
            o.retain = "number" == typeof r.retain ? t : r.retain;
          else if ("number" == typeof r.retain)
            null == s.retain ? (o.insert = s.insert) : (o.retain = s.retain);
          else {
            let t = null == s.retain ? "insert" : "retain",
              [e, i, n] = iS(s[t], r.retain),
              l = ik.getHandler(e);
            o[t] = { [e]: l.compose(i, n, "retain" === t) };
          }
          let l = iN.default.compose(
            s.attributes,
            r.attributes,
            "number" == typeof s.retain
          );
          if (
            (l && (o.attributes = l),
            n.push(o),
            !i.hasNext() && iw(n.ops[n.ops.length - 1], o))
          ) {
            let t = new ik(e.rest());
            return n.concat(t).chop();
          }
        } else
          "number" == typeof r.delete &&
            ("number" == typeof s.retain ||
              ("object" == typeof s.retain && null !== s.retain)) &&
            n.push(r);
      }
    return n.chop();
  }
  concat(t) {
    let e = new ik(this.ops.slice());
    return (
      t.ops.length > 0 &&
        (e.push(t.ops[0]), (e.ops = e.ops.concat(t.ops.slice(1)))),
      e
    );
  }
  diff(t, e) {
    if (this.ops === t.ops) return new ik();
    let i = [this, t].map((e) =>
        e
          .map((i) => {
            if (null != i.insert)
              return "string" == typeof i.insert ? i.insert : "\0";
            throw Error(
              "diff() called " + (e === t ? "on" : "with") + " non-document"
            );
          })
          .join("")
      ),
      s = new ik(),
      r = ie(i[0], i[1], e, !0),
      n = new iA.default(this.ops),
      o = new iA.default(t.ops);
    return (
      r.forEach((t) => {
        let e = t[1].length;
        for (; e > 0; ) {
          let i = 0;
          switch (t[0]) {
            case ie.INSERT:
              (i = Math.min(o.peekLength(), e)), s.push(o.next(i));
              break;
            case ie.DELETE:
              (i = Math.min(e, n.peekLength())), n.next(i), s.delete(i);
              break;
            case ie.EQUAL:
              i = Math.min(n.peekLength(), o.peekLength(), e);
              let r = n.next(i),
                l = o.next(i);
              iw(r.insert, l.insert)
                ? s.retain(i, iN.default.diff(r.attributes, l.attributes))
                : s.push(l).delete(i);
          }
          e -= i;
        }
      }),
      s.chop()
    );
  }
  eachLine(t, e = "\n") {
    let i = new iA.default(this.ops),
      s = new ik(),
      r = 0;
    for (; i.hasNext(); ) {
      if ("insert" !== i.peekType()) return;
      let n = i.peek(),
        o = i_.default.length(n) - i.peekLength(),
        l = "string" == typeof n.insert ? n.insert.indexOf(e, o) - o : -1;
      if (l < 0) s.push(i.next());
      else if (l > 0) s.push(i.next(l));
      else {
        if (!1 === t(s, i.next(1).attributes || {}, r)) return;
        (r += 1), (s = new ik());
      }
    }
    s.length() > 0 && t(s, {}, r);
  }
  invert(t) {
    let e = new ik();
    return (
      this.reduce((i, s) => {
        if (s.insert) e.delete(i_.default.length(s));
        else if ("number" == typeof s.retain && null == s.attributes)
          return e.retain(s.retain), i + s.retain;
        else if (s.delete || "number" == typeof s.retain) {
          let r = s.delete || s.retain;
          return (
            t.slice(i, i + r).forEach((t) => {
              s.delete
                ? e.push(t)
                : s.retain &&
                  s.attributes &&
                  e.retain(
                    i_.default.length(t),
                    iN.default.invert(s.attributes, t.attributes)
                  );
            }),
            i + r
          );
        } else if ("object" == typeof s.retain && null !== s.retain) {
          let r = t.slice(i, i + 1),
            n = new iA.default(r.ops).next(),
            [o, l, a] = iS(s.retain, n.insert),
            c = ik.getHandler(o);
          return (
            e.retain(
              { [o]: c.invert(l, a) },
              iN.default.invert(s.attributes, n.attributes)
            ),
            i + 1
          );
        }
        return i;
      }, 0),
      e.chop()
    );
  }
  transform(t, e = !1) {
    if (((e = !!e), "number" == typeof t)) return this.transformPosition(t, e);
    let i = new iA.default(this.ops),
      s = new iA.default(t.ops),
      r = new ik();
    for (; i.hasNext() || s.hasNext(); )
      if ("insert" === i.peekType() && (e || "insert" !== s.peekType()))
        r.retain(i_.default.length(i.next()));
      else if ("insert" === s.peekType()) r.push(s.next());
      else {
        let t = Math.min(i.peekLength(), s.peekLength()),
          n = i.next(t),
          o = s.next(t);
        if (n.delete) continue;
        if (o.delete) r.push(o);
        else {
          let i = n.retain,
            s = o.retain,
            l = "object" == typeof s && null !== s ? s : t;
          if (
            "object" == typeof i &&
            null !== i &&
            "object" == typeof s &&
            null !== s
          ) {
            let t = Object.keys(i)[0];
            if (t === Object.keys(s)[0]) {
              let r = ik.getHandler(t);
              r && (l = { [t]: r.transform(i[t], s[t], e) });
            }
          }
          r.retain(l, iN.default.transform(n.attributes, o.attributes, e));
        }
      }
    return r.chop();
  }
  transformPosition(t, e = !1) {
    e = !!e;
    let i = new iA.default(this.ops),
      s = 0;
    for (; i.hasNext() && s <= t; ) {
      let r = i.peekLength(),
        n = i.peekType();
      if ((i.next(), "delete" === n)) {
        t -= Math.min(r, t - s);
        continue;
      }
      "insert" === n && (s < t || !e) && (t += r), (s += r);
    }
    return t;
  }
}
(ik.Op = i_.default),
  (ik.OpIterator = iA.default),
  (ik.AttributeMap = iN.default),
  (ik.handlers = {}),
  (it.default = ik),
  ((it = ik).default = ik);
var iO = function (t, e) {
    for (
      var i = -1, s = null == t ? 0 : t.length;
      ++i < s && !1 !== e(t[i], i, t);

    );
    return t;
  },
  iL = tX(Object.keys, Object),
  iT = Object.prototype.hasOwnProperty,
  iC = function (t) {
    if (!tJ(t)) return iL(t);
    var e = [];
    for (var i in Object(t)) iT.call(t, i) && "constructor" != i && e.push(i);
    return e;
  },
  iq = function (t) {
    return t7(t) ? ey(t) : iC(t);
  },
  tH = te("5Jx4e"),
  iM = function (t, e) {
    for (var i = -1, s = null == t ? 0 : t.length, r = 0, n = []; ++i < s; ) {
      var o = t[i];
      e(o, i, t) && (n[r++] = o);
    }
    return n;
  },
  iD = function () {
    return [];
  },
  ij = Object.prototype.propertyIsEnumerable,
  iR = Object.getOwnPropertySymbols,
  iV = iR
    ? function (t) {
        return null == t
          ? []
          : iM(iR((t = Object(t))), function (e) {
              return ij.call(t, e);
            });
      }
    : iD,
  iI = function (t, e) {
    for (var i = -1, s = e.length, r = t.length; ++i < s; ) t[r + i] = e[i];
    return t;
  },
  iP = Object.getOwnPropertySymbols
    ? function (t) {
        for (var e = []; t; ) iI(e, iV(t)), (t = tG(t));
        return e;
      }
    : iD,
  i$ = function (t, e, i) {
    var s = e(t);
    return t8(t) ? s : iI(s, i(t));
  },
  iB = function (t) {
    return i$(t, iq, iV);
  },
  iU = function (t) {
    return i$(t, eN, iP);
  },
  ta = te("ht9qF"),
  iH = tL(ta.default, "DataView"),
  ta = te("ht9qF"),
  iz = tL(ta.default, "Promise"),
  ta = te("ht9qF"),
  iF = tL(ta.default, "Set"),
  ta = te("ht9qF"),
  iW = tL(ta.default, "WeakMap"),
  iY = "[object Map]",
  iK = "[object Promise]",
  iZ = "[object Set]",
  iX = "[object WeakMap]",
  iG = "[object DataView]",
  iQ = tN(iH),
  iJ = tN(tT),
  i0 = tN(iz),
  i1 = tN(iF),
  i2 = tN(iW),
  i5 = tb;
((iH && i5(new iH(new ArrayBuffer(1))) != iG) ||
  (tT && i5(new tT()) != iY) ||
  (iz && i5(iz.resolve()) != iK) ||
  (iF && i5(new iF()) != iZ) ||
  (iW && i5(new iW()) != iX)) &&
  (i5 = function (t) {
    var e = tb(t),
      i = "[object Object]" == e ? t.constructor : void 0,
      s = i ? tN(i) : "";
    if (s)
      switch (s) {
        case iQ:
          return iG;
        case iJ:
          return iY;
        case i0:
          return iK;
        case i1:
          return iZ;
        case i2:
          return iX;
      }
    return e;
  });
var i3 = i5,
  i4 = Object.prototype.hasOwnProperty,
  i6 = function (t) {
    var e = t.length,
      i = new t.constructor(e);
    return (
      e &&
        "string" == typeof t[0] &&
        i4.call(t, "index") &&
        ((i.index = t.index), (i.input = t.input)),
      i
    );
  },
  i8 = function (t, e) {
    var i = e ? tF(t.buffer) : t.buffer;
    return new t.constructor(i, t.byteOffset, t.byteLength);
  },
  i9 = /\w*$/,
  i7 = function (t) {
    var e = new t.constructor(t.source, i9.exec(t));
    return (e.lastIndex = t.lastIndex), e;
  },
  st = tc ? tc.prototype : void 0,
  se = st ? st.valueOf : void 0,
  si = function (t, e, i) {
    var s = t.constructor;
    switch (e) {
      case "[object ArrayBuffer]":
        return tF(t);
      case "[object Boolean]":
      case "[object Date]":
        return new s(+t);
      case "[object DataView]":
        return i8(t, i);
      case "[object Float32Array]":
      case "[object Float64Array]":
      case "[object Int8Array]":
      case "[object Int16Array]":
      case "[object Int32Array]":
      case "[object Uint8Array]":
      case "[object Uint8ClampedArray]":
      case "[object Uint16Array]":
      case "[object Uint32Array]":
        return tW(t, i);
      case "[object Map]":
      case "[object Set]":
        return new s();
      case "[object Number]":
      case "[object String]":
        return new s(t);
      case "[object RegExp]":
        return i7(t);
      case "[object Symbol]":
        return se ? Object(se.call(t)) : {};
    }
  },
  et = te("dG9Ze"),
  ea = te("rj6Om"),
  ss = ea.default && ea.default.isMap,
  sr = ss
    ? el(ss)
    : function (t) {
        return t1(t) && "[object Map]" == i3(t);
      },
  ea = te("rj6Om"),
  sn = ea.default && ea.default.isSet,
  so = sn
    ? el(sn)
    : function (t) {
        return t1(t) && "[object Set]" == i3(t);
      },
  sl = "[object Arguments]",
  sa = "[object Function]",
  sc = "[object Object]",
  sh = {};
(sh[sl] =
  sh["[object Array]"] =
  sh["[object ArrayBuffer]"] =
  sh["[object DataView]"] =
  sh["[object Boolean]"] =
  sh["[object Date]"] =
  sh["[object Float32Array]"] =
  sh["[object Float64Array]"] =
  sh["[object Int8Array]"] =
  sh["[object Int16Array]"] =
  sh["[object Int32Array]"] =
  sh["[object Map]"] =
  sh["[object Number]"] =
  sh[sc] =
  sh["[object RegExp]"] =
  sh["[object Set]"] =
  sh["[object String]"] =
  sh["[object Symbol]"] =
  sh["[object Uint8Array]"] =
  sh["[object Uint8ClampedArray]"] =
  sh["[object Uint16Array]"] =
  sh["[object Uint32Array]"] =
    !0),
  (sh["[object Error]"] = sh[sa] = sh["[object WeakMap]"] = !1);
var su = function t(e, i, s, r, n, o) {
    var l,
      a = 1 & i,
      c = 2 & i,
      h = 4 & i;
    if ((s && (l = n ? s(e, r, n, o) : s(e)), void 0 !== l)) return l;
    if (!tv(e)) return e;
    var u = t8(e);
    if (u) {
      if (((l = i6(e)), !a)) return tY(e, l);
    } else {
      var d,
        f,
        p,
        m,
        g = i3(e),
        b = g == sa || "[object GeneratorFunction]" == g;
      if ((0, et.default)(e)) return (0, tH.default)(e, a);
      if (g == sc || g == sl || (b && !n)) {
        if (((l = c || b ? {} : t0(e)), !a))
          return c
            ? ((f = (d = l) && ep(e, eN(e), d)), ep(e, iP(e), f))
            : ((m = (p = l) && ep(e, iq(e), p)), ep(e, iV(e), m));
      } else {
        if (!sh[g]) return n ? e : {};
        l = si(e, g, a);
      }
    }
    o || (o = new tI());
    var v = o.get(e);
    if (v) return v;
    o.set(e, l),
      so(e)
        ? e.forEach(function (r) {
            l.add(t(r, i, s, r, e, o));
          })
        : sr(e) &&
          e.forEach(function (r, n) {
            l.set(n, t(r, i, s, n, e, o));
          });
    var y = h ? (c ? iU : iB) : c ? eN : iq,
      x = u ? void 0 : y(e);
    return (
      iO(x || e, function (r, n) {
        x && (r = e[(n = r)]), ef(l, n, t(r, i, s, n, e, o));
      }),
      l
    );
  },
  sd = function (t) {
    return su(t, 5);
  };
function sf(t) {
  var e = -1,
    i = null == t ? 0 : t.length;
  for (this.__data__ = new tV(); ++e < i; ) this.add(t[e]);
}
(sf.prototype.add = sf.prototype.push =
  function (t) {
    return this.__data__.set(t, "__lodash_hash_undefined__"), this;
  }),
  (sf.prototype.has = function (t) {
    return this.__data__.has(t);
  });
var sp = function (t, e) {
    for (var i = -1, s = null == t ? 0 : t.length; ++i < s; )
      if (e(t[i], i, t)) return !0;
    return !1;
  },
  sm = function (t, e, i, s, r, n) {
    var o = 1 & i,
      l = t.length,
      a = e.length;
    if (l != a && !(o && a > l)) return !1;
    var c = n.get(t),
      h = n.get(e);
    if (c && h) return c == e && h == t;
    var u = -1,
      d = !0,
      f = 2 & i ? new sf() : void 0;
    for (n.set(t, e), n.set(e, t); ++u < l; ) {
      var p = t[u],
        m = e[u];
      if (s) var g = o ? s(m, p, u, e, t, n) : s(p, m, u, t, e, n);
      if (void 0 !== g) {
        if (g) continue;
        d = !1;
        break;
      }
      if (f) {
        if (
          !sp(e, function (t, e) {
            if (!f.has(e) && (p === t || r(p, t, i, s, n))) return f.push(e);
          })
        ) {
          d = !1;
          break;
        }
      } else if (!(p === m || r(p, m, i, s, n))) {
        d = !1;
        break;
      }
    }
    return n.delete(t), n.delete(e), d;
  },
  sg = function (t) {
    var e = -1,
      i = Array(t.size);
    return (
      t.forEach(function (t, s) {
        i[++e] = [s, t];
      }),
      i
    );
  },
  sb = function (t) {
    var e = -1,
      i = Array(t.size);
    return (
      t.forEach(function (t) {
        i[++e] = t;
      }),
      i
    );
  },
  sv = tc ? tc.prototype : void 0,
  sy = sv ? sv.valueOf : void 0,
  sx = function (t, e, i, s, r, n, o) {
    switch (i) {
      case "[object DataView]":
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) break;
        (t = t.buffer), (e = e.buffer);
      case "[object ArrayBuffer]":
        if (t.byteLength != e.byteLength || !n(new tz(t), new tz(e))) break;
        return !0;
      case "[object Boolean]":
      case "[object Date]":
      case "[object Number]":
        return tr(+t, +e);
      case "[object Error]":
        return t.name == e.name && t.message == e.message;
      case "[object RegExp]":
      case "[object String]":
        return t == e + "";
      case "[object Map]":
        var l = sg;
      case "[object Set]":
        var a = 1 & s;
        if ((l || (l = sb), t.size != e.size && !a)) break;
        var c = o.get(t);
        if (c) return c == e;
        (s |= 2), o.set(t, e);
        var h = sm(l(t), l(e), s, r, n, o);
        return o.delete(t), h;
      case "[object Symbol]":
        if (sy) return sy.call(t) == sy.call(e);
    }
    return !1;
  },
  sE = Object.prototype.hasOwnProperty,
  sw = function (t, e, i, s, r, n) {
    var o = 1 & i,
      l = iB(t),
      a = l.length;
    if (a != iB(e).length && !o) return !1;
    for (var c = a; c--; ) {
      var h = l[c];
      if (!(o ? h in e : sE.call(e, h))) return !1;
    }
    var u = n.get(t),
      d = n.get(e);
    if (u && d) return u == e && d == t;
    var f = !0;
    n.set(t, e), n.set(e, t);
    for (var p = o; ++c < a; ) {
      var m = t[(h = l[c])],
        g = e[h];
      if (s) var b = o ? s(g, m, h, e, t, n) : s(m, g, h, t, e, n);
      if (!(void 0 === b ? m === g || r(m, g, i, s, n) : b)) {
        f = !1;
        break;
      }
      p || (p = "constructor" == h);
    }
    if (f && !p) {
      var v = t.constructor,
        y = e.constructor;
      v != y &&
        "constructor" in t &&
        "constructor" in e &&
        !(
          "function" == typeof v &&
          v instanceof v &&
          "function" == typeof y &&
          y instanceof y
        ) &&
        (f = !1);
    }
    return n.delete(t), n.delete(e), f;
  },
  et = te("dG9Ze"),
  sN = "[object Arguments]",
  s_ = "[object Array]",
  sA = "[object Object]",
  sS = Object.prototype.hasOwnProperty,
  sk = function (t, e, i, s, r, n) {
    var o = t8(t),
      l = t8(e),
      a = o ? s_ : i3(t),
      c = l ? s_ : i3(e);
    (a = a == sN ? sA : a), (c = c == sN ? sA : c);
    var h = a == sA,
      u = c == sA,
      d = a == c;
    if (d && (0, et.default)(t)) {
      if (!(0, et.default)(e)) return !1;
      (o = !0), (h = !1);
    }
    if (d && !h)
      return (
        n || (n = new tI()),
        o || eh(t) ? sm(t, e, i, s, r, n) : sx(t, e, a, i, s, r, n)
      );
    if (!(1 & i)) {
      var f = h && sS.call(t, "__wrapped__"),
        p = u && sS.call(e, "__wrapped__");
      if (f || p) {
        var m = f ? t.value() : t,
          g = p ? e.value() : e;
        return n || (n = new tI()), r(m, g, i, s, n);
      }
    }
    return !!d && (n || (n = new tI()), sw(t, e, i, s, r, n));
  },
  sO = function (t, e) {
    return (function t(e, i, s, r, n) {
      return (
        e === i ||
        (null != e && null != i && (t1(e) || t1(i))
          ? sk(e, i, s, r, t, n)
          : e != e && i != i)
      );
    })(t, e);
  };
class sL extends e3 {
  static value() {}
  optimize() {
    (this.prev || this.next) && this.remove();
  }
  length() {
    return 0;
  }
  value() {
    return "";
  }
}
(sL.blotName = "break"), (sL.tagName = "BR");
class sT extends e7 {}
const sC = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};
function sq(t) {
  return t.replace(/[&<>"']/g, (t) => sC[t]);
}
class sM extends eJ {
  static allowedChildren = [sM, sL, e3, sT];
  static order = [
    "cursor",
    "inline",
    "link",
    "underline",
    "strike",
    "italic",
    "bold",
    "script",
    "code",
  ];
  static compare(t, e) {
    let i = sM.order.indexOf(t),
      s = sM.order.indexOf(e);
    return i >= 0 || s >= 0 ? i - s : t === e ? 0 : t < e ? -1 : 1;
  }
  formatAt(t, e, i, s) {
    if (
      0 > sM.compare(this.statics.blotName, i) &&
      this.scroll.query(i, eD.BLOT)
    ) {
      let r = this.isolate(t, e);
      s && r.wrap(i, s);
    } else super.formatAt(t, e, i, s);
  }
  optimize(t) {
    if (
      (super.optimize(t),
      this.parent instanceof sM &&
        sM.compare(this.statics.blotName, this.parent.statics.blotName) > 0)
    ) {
      let t = this.parent.isolate(this.offset(), this.length());
      this.moveChildren(t), t.wrap(this);
    }
  }
}
var sD = sM;
class sj extends e1 {
  cache = {};
  delta() {
    return (
      null == this.cache.delta && (this.cache.delta = sV(this)),
      this.cache.delta
    );
  }
  deleteAt(t, e) {
    super.deleteAt(t, e), (this.cache = {});
  }
  formatAt(t, e, i, s) {
    e <= 0 ||
      (this.scroll.query(i, eD.BLOCK)
        ? t + e === this.length() && this.format(i, s)
        : super.formatAt(t, Math.min(e, this.length() - t - 1), i, s),
      (this.cache = {}));
  }
  insertAt(t, e, i) {
    if (null != i) {
      super.insertAt(t, e, i), (this.cache = {});
      return;
    }
    if (0 === e.length) return;
    let s = e.split("\n"),
      r = s.shift();
    r.length > 0 &&
      (t < this.length() - 1 || null == this.children.tail
        ? super.insertAt(Math.min(t, this.length() - 1), r)
        : this.children.tail.insertAt(this.children.tail.length(), r),
      (this.cache = {}));
    let n = this;
    s.reduce(
      (t, e) => ((n = n.split(t, !0)).insertAt(0, e), e.length),
      t + r.length
    );
  }
  insertBefore(t, e) {
    let { head: i } = this.children;
    super.insertBefore(t, e), i instanceof sL && i.remove(), (this.cache = {});
  }
  length() {
    return (
      null == this.cache.length && (this.cache.length = super.length() + 1),
      this.cache.length
    );
  }
  moveChildren(t, e) {
    super.moveChildren(t, e), (this.cache = {});
  }
  optimize(t) {
    super.optimize(t), (this.cache = {});
  }
  path(t) {
    return super.path(t, !0);
  }
  removeChild(t) {
    super.removeChild(t), (this.cache = {});
  }
  split(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (e && (0 === t || t >= this.length() - 1)) {
      let e = this.clone();
      return 0 === t
        ? (this.parent.insertBefore(e, this), this)
        : (this.parent.insertBefore(e, this.next), e);
    }
    let i = super.split(t, e);
    return (this.cache = {}), i;
  }
}
(sj.blotName = "block"),
  (sj.tagName = "P"),
  (sj.defaultChild = sL),
  (sj.allowedChildren = [sL, sD, e3, sT]);
class sR extends e3 {
  attach() {
    super.attach(), (this.attributes = new eH(this.domNode));
  }
  delta() {
    return new (Q(it))().insert(this.value(), {
      ...this.formats(),
      ...this.attributes.values(),
    });
  }
  format(t, e) {
    let i = this.scroll.query(t, eD.BLOCK_ATTRIBUTE);
    null != i && this.attributes.attribute(i, e);
  }
  formatAt(t, e, i, s) {
    this.format(i, s);
  }
  insertAt(t, e, i) {
    if (null != i) {
      super.insertAt(t, e, i);
      return;
    }
    let s = e.split("\n"),
      r = s.pop(),
      n = s.map((t) => {
        let e = this.scroll.create(sj.blotName);
        return e.insertAt(0, t), e;
      }),
      o = this.split(t);
    n.forEach((t) => {
      this.parent.insertBefore(t, o);
    }),
      r && this.parent.insertBefore(this.scroll.create("text", r), o);
  }
}
function sV(t) {
  let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return t
    .descendants(eY)
    .reduce(
      (t, i) => (0 === i.length() ? t : t.insert(i.value(), sI(i, {}, e))),
      new (Q(it))()
    )
    .insert("\n", sI(t));
}
function sI(t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  return null == t
    ? e
    : ("formats" in t &&
        "function" == typeof t.formats &&
        ((e = { ...e, ...t.formats() }), i && delete e["code-token"]),
      null == t.parent ||
        "scroll" === t.parent.statics.blotName ||
        t.parent.statics.scope !== t.statics.scope)
    ? e
    : sI(t.parent, e, i);
}
sR.scope = eD.BLOCK_BLOT;
class sP extends e3 {
  static blotName = "cursor";
  static className = "ql-cursor";
  static tagName = "span";
  static CONTENTS = "\uFEFF";
  static value() {}
  constructor(t, e, i) {
    super(t, e),
      (this.selection = i),
      (this.textNode = document.createTextNode(sP.CONTENTS)),
      this.domNode.appendChild(this.textNode),
      (this.savedLength = 0);
  }
  detach() {
    null != this.parent && this.parent.removeChild(this);
  }
  format(t, e) {
    if (0 !== this.savedLength) {
      super.format(t, e);
      return;
    }
    let i = this,
      s = 0;
    for (; null != i && i.statics.scope !== eD.BLOCK_BLOT; )
      (s += i.offset(i.parent)), (i = i.parent);
    null != i &&
      ((this.savedLength = sP.CONTENTS.length),
      i.optimize(),
      i.formatAt(s, sP.CONTENTS.length, t, e),
      (this.savedLength = 0));
  }
  index(t, e) {
    return t === this.textNode ? 0 : super.index(t, e);
  }
  length() {
    return this.savedLength;
  }
  position() {
    return [this.textNode, this.textNode.data.length];
  }
  remove() {
    super.remove(), (this.parent = null);
  }
  restore() {
    let t;
    if (this.selection.composing || null == this.parent) return null;
    let e = this.selection.getNativeRange();
    for (
      ;
      null != this.domNode.lastChild &&
      this.domNode.lastChild !== this.textNode;

    )
      this.domNode.parentNode.insertBefore(
        this.domNode.lastChild,
        this.domNode
      );
    let i = this.prev instanceof sT ? this.prev : null,
      s = i ? i.length() : 0,
      r = this.next instanceof sT ? this.next : null,
      n = r ? r.text : "",
      { textNode: o } = this,
      l = o.data.split(sP.CONTENTS).join("");
    if (((o.data = sP.CONTENTS), i))
      (t = i), (l || r) && (i.insertAt(i.length(), l + n), r && r.remove());
    else if (r) (t = r), r.insertAt(0, l);
    else {
      let e = document.createTextNode(l);
      (t = this.scroll.create(e)), this.parent.insertBefore(t, this);
    }
    if ((this.remove(), e)) {
      let n = (t, e) =>
          i && t === i.domNode
            ? e
            : t === o
            ? s + e - 1
            : r && t === r.domNode
            ? s + l.length + e
            : null,
        a = n(e.start.node, e.start.offset),
        c = n(e.end.node, e.end.offset);
      if (null !== a && null !== c)
        return {
          startNode: t.domNode,
          startOffset: a,
          endNode: t.domNode,
          endOffset: c,
        };
    }
    return null;
  }
  update(t, e) {
    if (
      t.some((t) => "characterData" === t.type && t.target === this.textNode)
    ) {
      let t = this.restore();
      t && (e.range = t);
    }
  }
  optimize(t) {
    super.optimize(t);
    let { parent: e } = this;
    for (; e; ) {
      if ("A" === e.domNode.tagName) {
        (this.savedLength = sP.CONTENTS.length),
          e.isolate(this.offset(e), this.length()).unwrap(),
          (this.savedLength = 0);
        break;
      }
      e = e.parent;
    }
  }
  value() {
    return "";
  }
}
var s$ = {},
  sB = Object.prototype.hasOwnProperty,
  sU = "~";
function sH() {}
function sz(t, e, i) {
  (this.fn = t), (this.context = e), (this.once = i || !1);
}
function sF(t, e, i, s, r) {
  if ("function" != typeof i)
    throw TypeError("The listener must be a function");
  var n = new sz(i, s || t, r),
    o = sU ? sU + e : e;
  return (
    t._events[o]
      ? t._events[o].fn
        ? (t._events[o] = [t._events[o], n])
        : t._events[o].push(n)
      : ((t._events[o] = n), t._eventsCount++),
    t
  );
}
function sW(t, e) {
  0 == --t._eventsCount ? (t._events = new sH()) : delete t._events[e];
}
function sY() {
  (this._events = new sH()), (this._eventsCount = 0);
}
Object.create &&
  ((sH.prototype = Object.create(null)), new sH().__proto__ || (sU = !1)),
  (sY.prototype.eventNames = function () {
    var t,
      e,
      i = [];
    if (0 === this._eventsCount) return i;
    for (e in (t = this._events)) sB.call(t, e) && i.push(sU ? e.slice(1) : e);
    return Object.getOwnPropertySymbols
      ? i.concat(Object.getOwnPropertySymbols(t))
      : i;
  }),
  (sY.prototype.listeners = function (t) {
    var e = sU ? sU + t : t,
      i = this._events[e];
    if (!i) return [];
    if (i.fn) return [i.fn];
    for (var s = 0, r = i.length, n = Array(r); s < r; s++) n[s] = i[s].fn;
    return n;
  }),
  (sY.prototype.listenerCount = function (t) {
    var e = sU ? sU + t : t,
      i = this._events[e];
    return i ? (i.fn ? 1 : i.length) : 0;
  }),
  (sY.prototype.emit = function (t, e, i, s, r, n) {
    var o = sU ? sU + t : t;
    if (!this._events[o]) return !1;
    var l,
      a,
      c = this._events[o],
      h = arguments.length;
    if (c.fn) {
      switch ((c.once && this.removeListener(t, c.fn, void 0, !0), h)) {
        case 1:
          return c.fn.call(c.context), !0;
        case 2:
          return c.fn.call(c.context, e), !0;
        case 3:
          return c.fn.call(c.context, e, i), !0;
        case 4:
          return c.fn.call(c.context, e, i, s), !0;
        case 5:
          return c.fn.call(c.context, e, i, s, r), !0;
        case 6:
          return c.fn.call(c.context, e, i, s, r, n), !0;
      }
      for (a = 1, l = Array(h - 1); a < h; a++) l[a - 1] = arguments[a];
      c.fn.apply(c.context, l);
    } else {
      var u,
        d = c.length;
      for (a = 0; a < d; a++)
        switch ((c[a].once && this.removeListener(t, c[a].fn, void 0, !0), h)) {
          case 1:
            c[a].fn.call(c[a].context);
            break;
          case 2:
            c[a].fn.call(c[a].context, e);
            break;
          case 3:
            c[a].fn.call(c[a].context, e, i);
            break;
          case 4:
            c[a].fn.call(c[a].context, e, i, s);
            break;
          default:
            if (!l)
              for (u = 1, l = Array(h - 1); u < h; u++) l[u - 1] = arguments[u];
            c[a].fn.apply(c[a].context, l);
        }
    }
    return !0;
  }),
  (sY.prototype.on = function (t, e, i) {
    return sF(this, t, e, i, !1);
  }),
  (sY.prototype.once = function (t, e, i) {
    return sF(this, t, e, i, !0);
  }),
  (sY.prototype.removeListener = function (t, e, i, s) {
    var r = sU ? sU + t : t;
    if (!this._events[r]) return this;
    if (!e) return sW(this, r), this;
    var n = this._events[r];
    if (n.fn)
      n.fn !== e || (s && !n.once) || (i && n.context !== i) || sW(this, r);
    else {
      for (var o = 0, l = [], a = n.length; o < a; o++)
        (n[o].fn !== e || (s && !n[o].once) || (i && n[o].context !== i)) &&
          l.push(n[o]);
      l.length ? (this._events[r] = 1 === l.length ? l[0] : l) : sW(this, r);
    }
    return this;
  }),
  (sY.prototype.removeAllListeners = function (t) {
    var e;
    return (
      t
        ? ((e = sU ? sU + t : t), this._events[e] && sW(this, e))
        : ((this._events = new sH()), (this._eventsCount = 0)),
      this
    );
  }),
  (sY.prototype.off = sY.prototype.removeListener),
  (sY.prototype.addListener = sY.prototype.on),
  (sY.prefixed = sU),
  (sY.EventEmitter = sY),
  (s$ = sY);
var sK = new WeakMap();
const sZ = ["error", "warn", "log", "info"];
let sX = "warn";
function sG(t) {
  if (sX && sZ.indexOf(t) <= sZ.indexOf(sX)) {
    for (
      var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), s = 1;
      s < e;
      s++
    )
      i[s - 1] = arguments[s];
    console[t](...i);
  }
}
function sQ(t) {
  return sZ.reduce((e, i) => ((e[i] = sG.bind(console, i, t)), e), {});
}
(sQ.level = (t) => {
  sX = t;
}),
  (sG.level = sQ.level);
const sJ = sQ("quill:events");
["selectionchange", "mousedown", "mouseup", "click"].forEach((t) => {
  document.addEventListener(t, function () {
    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    Array.from(document.querySelectorAll(".ql-container")).forEach((t) => {
      let i = sK.get(t);
      i && i.emitter && i.emitter.handleDOM(...e);
    });
  });
});
class s0 extends s$.EventEmitter {
  static events = {
    EDITOR_CHANGE: "editor-change",
    SCROLL_BEFORE_UPDATE: "scroll-before-update",
    SCROLL_BLOT_MOUNT: "scroll-blot-mount",
    SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
    SCROLL_OPTIMIZE: "scroll-optimize",
    SCROLL_UPDATE: "scroll-update",
    SCROLL_EMBED_UPDATE: "scroll-embed-update",
    SELECTION_CHANGE: "selection-change",
    TEXT_CHANGE: "text-change",
    COMPOSITION_BEFORE_START: "composition-before-start",
    COMPOSITION_START: "composition-start",
    COMPOSITION_BEFORE_END: "composition-before-end",
    COMPOSITION_END: "composition-end",
  };
  static sources = { API: "api", SILENT: "silent", USER: "user" };
  constructor() {
    super(), (this.domListeners = {}), this.on("error", sJ.error);
  }
  emit() {
    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return sJ.log.call(sJ, ...e), super.emit(...e);
  }
  handleDOM(t) {
    for (
      var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), s = 1;
      s < e;
      s++
    )
      i[s - 1] = arguments[s];
    (this.domListeners[t.type] || []).forEach((e) => {
      let { node: s, handler: r } = e;
      (t.target === s || s.contains(t.target)) && r(t, ...i);
    });
  }
  listenDOM(t, e, i) {
    this.domListeners[t] || (this.domListeners[t] = []),
      this.domListeners[t].push({ node: e, handler: i });
  }
}
const s1 = sQ("quill:selection");
class s2 {
  constructor(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    (this.index = t), (this.length = e);
  }
}
function s5(t, e) {
  try {
    e.parentNode;
  } catch (t) {
    return !1;
  }
  return t.contains(e);
}
var s3 = class {
  constructor(t, e) {
    (this.emitter = e),
      (this.scroll = t),
      (this.composing = !1),
      (this.mouseDown = !1),
      (this.root = this.scroll.domNode),
      (this.cursor = this.scroll.create("cursor", this)),
      (this.savedRange = new s2(0, 0)),
      (this.lastRange = this.savedRange),
      (this.lastNative = null),
      this.handleComposition(),
      this.handleDragging(),
      this.emitter.listenDOM("selectionchange", document, () => {
        this.mouseDown ||
          this.composing ||
          setTimeout(this.update.bind(this, s0.sources.USER), 1);
      }),
      this.emitter.on(s0.events.SCROLL_BEFORE_UPDATE, () => {
        if (!this.hasFocus()) return;
        let t = this.getNativeRange();
        null != t &&
          t.start.node !== this.cursor.textNode &&
          this.emitter.once(s0.events.SCROLL_UPDATE, (e, i) => {
            try {
              this.root.contains(t.start.node) &&
                this.root.contains(t.end.node) &&
                this.setNativeRange(
                  t.start.node,
                  t.start.offset,
                  t.end.node,
                  t.end.offset
                );
              let s = i.some(
                (t) =>
                  "characterData" === t.type ||
                  "childList" === t.type ||
                  ("attributes" === t.type && t.target === this.root)
              );
              this.update(s ? s0.sources.SILENT : e);
            } catch (t) {}
          });
      }),
      this.emitter.on(s0.events.SCROLL_OPTIMIZE, (t, e) => {
        if (e.range) {
          let {
            startNode: t,
            startOffset: i,
            endNode: s,
            endOffset: r,
          } = e.range;
          this.setNativeRange(t, i, s, r), this.update(s0.sources.SILENT);
        }
      }),
      this.update(s0.sources.SILENT);
  }
  handleComposition() {
    this.emitter.on(s0.events.COMPOSITION_BEFORE_START, () => {
      this.composing = !0;
    }),
      this.emitter.on(s0.events.COMPOSITION_END, () => {
        if (((this.composing = !1), this.cursor.parent)) {
          let t = this.cursor.restore();
          t &&
            setTimeout(() => {
              this.setNativeRange(
                t.startNode,
                t.startOffset,
                t.endNode,
                t.endOffset
              );
            }, 1);
        }
      });
  }
  handleDragging() {
    this.emitter.listenDOM("mousedown", document.body, () => {
      this.mouseDown = !0;
    }),
      this.emitter.listenDOM("mouseup", document.body, () => {
        (this.mouseDown = !1), this.update(s0.sources.USER);
      });
  }
  focus() {
    this.hasFocus() ||
      (this.root.focus({ preventScroll: !0 }), this.setRange(this.savedRange));
  }
  format(t, e) {
    this.scroll.update();
    let i = this.getNativeRange();
    if (!(null == i || !i.native.collapsed || this.scroll.query(t, eD.BLOCK))) {
      if (i.start.node !== this.cursor.textNode) {
        let t = this.scroll.find(i.start.node, !1);
        if (null == t) return;
        if (t instanceof eY) {
          let e = t.split(i.start.offset);
          t.parent.insertBefore(this.cursor, e);
        } else t.insertBefore(this.cursor, i.start.node);
        this.cursor.attach();
      }
      this.cursor.format(t, e),
        this.scroll.optimize(),
        this.setNativeRange(
          this.cursor.textNode,
          this.cursor.textNode.data.length
        ),
        this.update();
    }
  }
  getBounds(t) {
    let e,
      i,
      s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      r = this.scroll.length();
    s = Math.min((t = Math.min(t, r - 1)) + s, r - 1) - t;
    let [n, o] = this.scroll.leaf(t);
    if (null == n) return null;
    if (s > 0 && o === n.length()) {
      let [e] = this.scroll.leaf(t + 1);
      if (e) {
        let [i] = this.scroll.line(t),
          [s] = this.scroll.line(t + 1);
        i === s && ((n = e), (o = 0));
      }
    }
    [e, o] = n.position(o, !0);
    let l = document.createRange();
    if (s > 0)
      return (l.setStart(e, o), ([n, o] = this.scroll.leaf(t + s)), null == n)
        ? null
        : (([e, o] = n.position(o, !0)),
          l.setEnd(e, o),
          l.getBoundingClientRect());
    let a = "left";
    if (e instanceof Text) {
      if (!e.data.length) return null;
      o < e.data.length
        ? (l.setStart(e, o), l.setEnd(e, o + 1))
        : (l.setStart(e, o - 1), l.setEnd(e, o), (a = "right")),
        (i = l.getBoundingClientRect());
    } else {
      if (!(n.domNode instanceof Element)) return null;
      (i = n.domNode.getBoundingClientRect()), o > 0 && (a = "right");
    }
    return {
      bottom: i.top + i.height,
      height: i.height,
      left: i[a],
      right: i[a],
      top: i.top,
      width: 0,
    };
  }
  getNativeRange() {
    let t = document.getSelection();
    if (null == t || t.rangeCount <= 0) return null;
    let e = t.getRangeAt(0);
    if (null == e) return null;
    let i = this.normalizeNative(e);
    return s1.info("getNativeRange", i), i;
  }
  getRange() {
    let t = this.scroll.domNode;
    if ("isConnected" in t && !t.isConnected) return [null, null];
    let e = this.getNativeRange();
    return null == e ? [null, null] : [this.normalizedToRange(e), e];
  }
  hasFocus() {
    return (
      document.activeElement === this.root ||
      (null != document.activeElement && s5(this.root, document.activeElement))
    );
  }
  normalizedToRange(t) {
    let e = [[t.start.node, t.start.offset]];
    t.native.collapsed || e.push([t.end.node, t.end.offset]);
    let i = e.map((t) => {
        let [e, i] = t,
          s = this.scroll.find(e, !0),
          r = s.offset(this.scroll);
        return 0 === i
          ? r
          : s instanceof eY
          ? r + s.index(e, i)
          : r + s.length();
      }),
      s = Math.min(Math.max(...i), this.scroll.length() - 1),
      r = Math.min(s, ...i);
    return new s2(r, s - r);
  }
  normalizeNative(t) {
    if (
      !s5(this.root, t.startContainer) ||
      (!t.collapsed && !s5(this.root, t.endContainer))
    )
      return null;
    let e = {
      start: { node: t.startContainer, offset: t.startOffset },
      end: { node: t.endContainer, offset: t.endOffset },
      native: t,
    };
    return (
      [e.start, e.end].forEach((t) => {
        let { node: e, offset: i } = t;
        for (; !(e instanceof Text) && e.childNodes.length > 0; )
          if (e.childNodes.length > i) (e = e.childNodes[i]), (i = 0);
          else if (e.childNodes.length === i)
            (e = e.lastChild) instanceof Text
              ? (i = e.data.length)
              : (i =
                  e.childNodes.length > 0
                    ? e.childNodes.length
                    : e.childNodes.length + 1);
          else break;
        (t.node = e), (t.offset = i);
      }),
      e
    );
  }
  rangeToNative(t) {
    let e = this.scroll.length(),
      i = (t, i) => {
        t = Math.min(e - 1, t);
        let [s, r] = this.scroll.leaf(t);
        return s ? s.position(r, i) : [null, -1];
      };
    return [...i(t.index, !1), ...i(t.index + t.length, !0)];
  }
  setNativeRange(t, e) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
      s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e,
      r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    if (
      (s1.info("setNativeRange", t, e, i, s),
      null != t &&
        (null == this.root.parentNode ||
          null == t.parentNode ||
          null == i.parentNode))
    )
      return;
    let n = document.getSelection();
    if (null != n) {
      if (null != t) {
        this.hasFocus() || this.root.focus({ preventScroll: !0 });
        let { native: o } = this.getNativeRange() || {};
        if (
          null == o ||
          r ||
          t !== o.startContainer ||
          e !== o.startOffset ||
          i !== o.endContainer ||
          s !== o.endOffset
        ) {
          t instanceof Element &&
            "BR" === t.tagName &&
            ((e = Array.from(t.parentNode.childNodes).indexOf(t)),
            (t = t.parentNode)),
            i instanceof Element &&
              "BR" === i.tagName &&
              ((s = Array.from(i.parentNode.childNodes).indexOf(i)),
              (i = i.parentNode));
          let r = document.createRange();
          r.setStart(t, e), r.setEnd(i, s), n.removeAllRanges(), n.addRange(r);
        }
      } else n.removeAllRanges(), this.root.blur();
    }
  }
  setRange(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      i =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : s0.sources.API;
    if (
      ("string" == typeof e && ((i = e), (e = !1)),
      s1.info("setRange", t),
      null != t)
    ) {
      let i = this.rangeToNative(t);
      this.setNativeRange(...i, e);
    } else this.setNativeRange(null);
    this.update(i);
  }
  update() {
    let t =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : s0.sources.USER,
      e = this.lastRange,
      [i, s] = this.getRange();
    if (
      ((this.lastRange = i),
      (this.lastNative = s),
      null != this.lastRange && (this.savedRange = this.lastRange),
      !sO(e, this.lastRange))
    ) {
      if (
        !this.composing &&
        null != s &&
        s.native.collapsed &&
        s.start.node !== this.cursor.textNode
      ) {
        let t = this.cursor.restore();
        t &&
          this.setNativeRange(
            t.startNode,
            t.startOffset,
            t.endNode,
            t.endOffset
          );
      }
      let i = [s0.events.SELECTION_CHANGE, sd(this.lastRange), sd(e), t];
      this.emitter.emit(s0.events.EDITOR_CHANGE, ...i),
        t !== s0.sources.SILENT && this.emitter.emit(...i);
    }
  }
};
const s4 = /^[ -~]*$/;
function s6(t, e, i) {
  let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if ("html" in t && "function" == typeof t.html) return t.html(e, i);
  if (t instanceof sT)
    return sq(t.value().slice(e, e + i)).replaceAll(" ", "&nbsp;");
  if (t instanceof eG) {
    if ("list-container" === t.statics.blotName) {
      let s = [];
      return (
        t.children.forEachAt(e, i, (t, e, i) => {
          let r =
            "formats" in t && "function" == typeof t.formats ? t.formats() : {};
          s.push({
            child: t,
            offset: e,
            length: i,
            indent: r.indent || 0,
            type: r.list,
          });
        }),
        (function t(e, i, s) {
          if (0 === e.length) {
            let [e] = s8(s.pop());
            return i <= 0 ? `</li></${e}>` : `</li></${e}>${t([], i - 1, s)}`;
          }
          let [{ child: r, offset: n, length: o, indent: l, type: a }, ...c] =
              e,
            [h, u] = s8(a);
          if (l > i)
            return (s.push(a), l === i + 1)
              ? `<${h}><li${u}>${s6(r, n, o)}${t(c, l, s)}`
              : `<${h}><li>${t(e, i + 1, s)}`;
          let d = s[s.length - 1];
          if (l === i && a === d)
            return `</li><li${u}>${s6(r, n, o)}${t(c, l, s)}`;
          let [f] = s8(s.pop());
          return `</li></${f}>${t(e, i - 1, s)}`;
        })(s, -1, [])
      );
    }
    let r = [];
    if (
      (t.children.forEachAt(e, i, (t, e, i) => {
        r.push(s6(t, e, i));
      }),
      s || "list" === t.statics.blotName)
    )
      return r.join("");
    let { outerHTML: n, innerHTML: o } = t.domNode,
      [l, a] = n.split(`>${o}<`);
    return "<table" === l
      ? `<table style="border: 1px solid #000;">${r.join("")}<${a}`
      : `${l}>${r.join("")}<${a}`;
  }
  return t.domNode instanceof Element ? t.domNode.outerHTML : "";
}
function s8(t) {
  let e = "ordered" === t ? "ol" : "ul";
  switch (t) {
    case "checked":
      return [e, ' data-list="checked"'];
    case "unchecked":
      return [e, ' data-list="unchecked"'];
    default:
      return [e, ""];
  }
}
function s9(t) {
  return t.reduce((t, e) => {
    if ("string" == typeof e.insert) {
      let i = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
      return t.insert(i, e.attributes);
    }
    return t.push(e);
  }, new (Q(it))());
}
function s7(t, e) {
  let { index: i, length: s } = t;
  return new s2(i + e, s);
}
var rt = class {
    constructor(t) {
      (this.scroll = t), (this.delta = this.getDelta());
    }
    applyDelta(t) {
      this.scroll.update();
      let e = this.scroll.length();
      this.scroll.batchStart();
      let i = s9(t),
        s = new (Q(it))();
      return (
        (function (t) {
          let e = [];
          return (
            t.forEach((t) => {
              "string" == typeof t.insert
                ? t.insert.split("\n").forEach((i, s) => {
                    s && e.push({ insert: "\n", attributes: t.attributes }),
                      i && e.push({ insert: i, attributes: t.attributes });
                  })
                : e.push(t);
            }),
            e
          );
        })(i.ops.slice()).reduce((t, i) => {
          let r = (0, it.Op).length(i),
            n = i.attributes || {},
            o = !1,
            l = !1;
          if (null != i.insert) {
            if ((s.retain(r), "string" == typeof i.insert)) {
              let s = i.insert;
              (l =
                !s.endsWith("\n") &&
                (e <= t || !!this.scroll.descendant(sR, t)[0])),
                this.scroll.insertAt(t, s);
              let [r, o] = this.scroll.line(t),
                a = eq({}, sI(r));
              if (r instanceof sj) {
                let [t] = r.descendant(eY, o);
                t && (a = eq(a, sI(t)));
              }
              n = (0, it.AttributeMap).diff(a, n) || {};
            } else if ("object" == typeof i.insert) {
              let s = Object.keys(i.insert)[0];
              if (null == s) return t;
              let r = null != this.scroll.query(s, eD.INLINE);
              if (r) (e <= t || this.scroll.descendant(sR, t)[0]) && (l = !0);
              else if (t > 0) {
                let [e, i] = this.scroll.descendant(eY, t - 1);
                e instanceof sT
                  ? "\n" !== e.value()[i] && (o = !0)
                  : e instanceof e3 &&
                    e.statics.scope === eD.INLINE_BLOT &&
                    (o = !0);
              }
              if ((this.scroll.insertAt(t, s, i.insert[s]), r)) {
                let [e] = this.scroll.descendant(eY, t);
                if (e) {
                  let t = eq({}, sI(e));
                  n = (0, it.AttributeMap).diff(t, n) || {};
                }
              }
            }
            e += r;
          } else if (
            (s.push(i), null !== i.retain && "object" == typeof i.retain)
          ) {
            let e = Object.keys(i.retain)[0];
            if (null == e) return t;
            this.scroll.updateEmbedAt(t, e, i.retain[e]);
          }
          Object.keys(n).forEach((e) => {
            this.scroll.formatAt(t, r, e, n[e]);
          });
          let a = o ? 1 : 0,
            c = l ? 1 : 0;
          return (e += a + c), s.retain(a), s.delete(c), t + r + a + c;
        }, 0),
        s.reduce(
          (t, e) =>
            "number" == typeof e.delete
              ? (this.scroll.deleteAt(t, e.delete), t)
              : t + (0, it.Op).length(e),
          0
        ),
        this.scroll.batchEnd(),
        this.scroll.optimize(),
        this.update(i)
      );
    }
    deleteText(t, e) {
      return (
        this.scroll.deleteAt(t, e),
        this.update(new (Q(it))().retain(t).delete(e))
      );
    }
    formatLine(t, e) {
      let i =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      this.scroll.update(),
        Object.keys(i).forEach((s) => {
          this.scroll.lines(t, Math.max(e, 1)).forEach((t) => {
            t.format(s, i[s]);
          });
        }),
        this.scroll.optimize();
      let s = new (Q(it))().retain(t).retain(e, sd(i));
      return this.update(s);
    }
    formatText(t, e) {
      let i =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      Object.keys(i).forEach((s) => {
        this.scroll.formatAt(t, e, s, i[s]);
      });
      let s = new (Q(it))().retain(t).retain(e, sd(i));
      return this.update(s);
    }
    getContents(t, e) {
      return this.delta.slice(t, t + e);
    }
    getDelta() {
      return this.scroll
        .lines()
        .reduce((t, e) => t.concat(e.delta()), new (Q(it))());
    }
    getFormat(t) {
      let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        i = [],
        s = [];
      0 === e
        ? this.scroll.path(t).forEach((t) => {
            let [e] = t;
            e instanceof sj ? i.push(e) : e instanceof eY && s.push(e);
          })
        : ((i = this.scroll.lines(t, e)),
          (s = this.scroll.descendants(eY, t, e)));
      let [r, n] = [i, s].map((t) => {
        let e = t.shift();
        if (null == e) return {};
        let i = sI(e);
        for (; Object.keys(i).length > 0; ) {
          let e = t.shift();
          if (null == e) break;
          i = (function (t, e) {
            return Object.keys(e).reduce((i, s) => {
              if (null == t[s]) return i;
              let r = e[s];
              return (
                r === t[s]
                  ? (i[s] = r)
                  : Array.isArray(r)
                  ? 0 > r.indexOf(t[s])
                    ? (i[s] = r.concat([t[s]]))
                    : (i[s] = r)
                  : (i[s] = [r, t[s]]),
                i
              );
            }, {});
          })(sI(e), i);
        }
        return i;
      });
      return { ...r, ...n };
    }
    getHTML(t, e) {
      let [i, s] = this.scroll.line(t);
      if (i) {
        let r = i.length();
        return i.length() >= s + e && !(0 === s && e === r)
          ? s6(i, s, e, !0)
          : s6(this.scroll, t, e, !0);
      }
      return "";
    }
    getText(t, e) {
      return this.getContents(t, e)
        .filter((t) => "string" == typeof t.insert)
        .map((t) => t.insert)
        .join("");
    }
    insertContents(t, e) {
      let i = s9(e),
        s = new (Q(it))().retain(t).concat(i);
      return this.scroll.insertContents(t, i), this.update(s);
    }
    insertEmbed(t, e, i) {
      return (
        this.scroll.insertAt(t, e, i),
        this.update(new (Q(it))().retain(t).insert({ [e]: i }))
      );
    }
    insertText(t, e) {
      let i =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return (
        (e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n")),
        this.scroll.insertAt(t, e),
        Object.keys(i).forEach((s) => {
          this.scroll.formatAt(t, e.length, s, i[s]);
        }),
        this.update(new (Q(it))().retain(t).insert(e, sd(i)))
      );
    }
    isBlank() {
      if (0 === this.scroll.children.length) return !0;
      if (this.scroll.children.length > 1) return !1;
      let t = this.scroll.children.head;
      return (
        t?.statics.blotName === sj.blotName &&
        !(t.children.length > 1) &&
        t.children.head instanceof sL
      );
    }
    removeFormat(t, e) {
      let i = this.getText(t, e),
        [s, r] = this.scroll.line(t + e),
        n = 0,
        o = new (Q(it))();
      null != s &&
        ((n = s.length() - r),
        (o = s
          .delta()
          .slice(r, r + n - 1)
          .insert("\n")));
      let l = this.getContents(t, e + n).diff(
          new (Q(it))().insert(i).concat(o)
        ),
        a = new (Q(it))().retain(t).concat(l);
      return this.applyDelta(a);
    }
    update(t) {
      let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        i =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : void 0,
        s = this.delta;
      if (
        1 === e.length &&
        "characterData" === e[0].type &&
        e[0].target.data.match(s4) &&
        this.scroll.find(e[0].target)
      ) {
        let r = this.scroll.find(e[0].target),
          n = sI(r),
          o = r.offset(this.scroll),
          l = e[0].oldValue.replace(sP.CONTENTS, ""),
          a = new (Q(it))().insert(l),
          c = new (Q(it))().insert(r.value()),
          h = i && {
            oldRange: s7(i.oldRange, -o),
            newRange: s7(i.newRange, -o),
          };
        (t = new (Q(it))()
          .retain(o)
          .concat(a.diff(c, h))
          .reduce(
            (t, e) => (e.insert ? t.insert(e.insert, n) : t.push(e)),
            new (Q(it))()
          )),
          (this.delta = s.compose(t));
      } else
        (this.delta = this.getDelta()),
          (t && sO(s.compose(t), this.delta)) || (t = s.diff(this.delta, i));
      return t;
    }
  },
  re = class {
    static DEFAULTS = {};
    constructor(t) {
      let e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      (this.quill = t), (this.options = e);
    }
  },
  ri = class extends e3 {
    constructor(t, e) {
      super(t, e),
        (this.contentNode = document.createElement("span")),
        this.contentNode.setAttribute("contenteditable", "false"),
        Array.from(this.domNode.childNodes).forEach((t) => {
          this.contentNode.appendChild(t);
        }),
        (this.leftGuard = document.createTextNode("\uFEFF")),
        (this.rightGuard = document.createTextNode("\uFEFF")),
        this.domNode.appendChild(this.leftGuard),
        this.domNode.appendChild(this.contentNode),
        this.domNode.appendChild(this.rightGuard);
    }
    index(t, e) {
      return t === this.leftGuard
        ? 0
        : t === this.rightGuard
        ? 1
        : super.index(t, e);
    }
    restore(t) {
      let e,
        i = null,
        s = t.data.split("\uFEFF").join("");
      if (t === this.leftGuard) {
        if (this.prev instanceof sT) {
          let t = this.prev.length();
          this.prev.insertAt(t, s),
            (i = { startNode: this.prev.domNode, startOffset: t + s.length });
        } else
          (e = document.createTextNode(s)),
            this.parent.insertBefore(this.scroll.create(e), this),
            (i = { startNode: e, startOffset: s.length });
      } else
        t === this.rightGuard &&
          (this.next instanceof sT
            ? (this.next.insertAt(0, s),
              (i = { startNode: this.next.domNode, startOffset: s.length }))
            : ((e = document.createTextNode(s)),
              this.parent.insertBefore(this.scroll.create(e), this.next),
              (i = { startNode: e, startOffset: s.length })));
      return (t.data = "\uFEFF"), i;
    }
    update(t, e) {
      t.forEach((t) => {
        if (
          "characterData" === t.type &&
          (t.target === this.leftGuard || t.target === this.rightGuard)
        ) {
          let i = this.restore(t.target);
          i && (e.range = i);
        }
      });
    }
  },
  rs = class {
    isComposing = !1;
    constructor(t, e) {
      (this.scroll = t), (this.emitter = e), this.setupListeners();
    }
    setupListeners() {
      this.scroll.domNode.addEventListener("compositionstart", (t) => {
        this.isComposing || this.handleCompositionStart(t);
      }),
        this.scroll.domNode.addEventListener("compositionend", (t) => {
          this.isComposing &&
            queueMicrotask(() => {
              this.handleCompositionEnd(t);
            });
        });
    }
    handleCompositionStart(t) {
      let e = t.target instanceof Node ? this.scroll.find(t.target, !0) : null;
      !e ||
        e instanceof ri ||
        (this.emitter.emit(s0.events.COMPOSITION_BEFORE_START, t),
        this.scroll.batchStart(),
        this.emitter.emit(s0.events.COMPOSITION_START, t),
        (this.isComposing = !0));
    }
    handleCompositionEnd(t) {
      this.emitter.emit(s0.events.COMPOSITION_BEFORE_END, t),
        this.scroll.batchEnd(),
        this.emitter.emit(s0.events.COMPOSITION_END, t),
        (this.isComposing = !1);
    }
  };
class rr {
  static DEFAULTS = { modules: {} };
  static themes = { default: rr };
  modules = {};
  constructor(t, e) {
    (this.quill = t), (this.options = e);
  }
  init() {
    Object.keys(this.options.modules).forEach((t) => {
      null == this.modules[t] && this.addModule(t);
    });
  }
  addModule(t) {
    let e = this.quill.constructor.import(`modules/${t}`);
    return (
      (this.modules[t] = new e(this.quill, this.options.modules[t] || {})),
      this.modules[t]
    );
  }
}
var rn = rr;
const ro = (t) => t.parentElement || t.getRootNode().host || null,
  rl = (t) => {
    let e = t.getBoundingClientRect(),
      i = ("offsetWidth" in t && Math.abs(e.width) / t.offsetWidth) || 1,
      s = ("offsetHeight" in t && Math.abs(e.height) / t.offsetHeight) || 1;
    return {
      top: e.top,
      right: e.left + t.clientWidth * i,
      bottom: e.top + t.clientHeight * s,
      left: e.left,
    };
  },
  ra = (t) => {
    let e = parseInt(t, 10);
    return Number.isNaN(e) ? 0 : e;
  },
  rc = (t, e, i, s, r, n) =>
    t < i && e > s
      ? 0
      : t < i
      ? -(i - t + r)
      : e > s
      ? e - t > s - i
        ? t + r - i
        : e - s + n
      : 0;
var rh = (t, e) => {
  let i = t.ownerDocument,
    s = e,
    r = t;
  for (; r; ) {
    let t = r === i.body,
      e = t
        ? {
            top: 0,
            right:
              window.visualViewport?.width ?? i.documentElement.clientWidth,
            bottom:
              window.visualViewport?.height ?? i.documentElement.clientHeight,
            left: 0,
          }
        : rl(r),
      n = getComputedStyle(r),
      o = rc(
        s.left,
        s.right,
        e.left,
        e.right,
        ra(n.scrollPaddingLeft),
        ra(n.scrollPaddingRight)
      ),
      l = rc(
        s.top,
        s.bottom,
        e.top,
        e.bottom,
        ra(n.scrollPaddingTop),
        ra(n.scrollPaddingBottom)
      );
    if (o || l) {
      if (t) i.defaultView?.scrollBy(o, l);
      else {
        let { scrollLeft: t, scrollTop: e } = r;
        l && (r.scrollTop += l), o && (r.scrollLeft += o);
        let i = r.scrollLeft - t,
          n = r.scrollTop - e;
        s = {
          left: s.left - i,
          top: s.top - n,
          right: s.right - i,
          bottom: s.bottom - n,
        };
      }
    }
    r = t || "fixed" === n.position ? null : ro(r);
  }
};
const ru = ["block", "break", "cursor", "inline", "scroll", "text"];
var rd = (t, e, i) => {
  let s = new eI();
  return (
    ru.forEach((t) => {
      let i = e.query(t);
      i && s.register(i);
    }),
    t.forEach((t) => {
      let r = e.query(t);
      r ||
        i.error(
          `Cannot register "${t}" specified in "formats" config. Are you sure it was registered?`
        );
      let n = 0;
      for (; r; )
        if (
          (s.register(r),
          (r = "blotName" in r ? r.requiredContainer ?? null : null),
          (n += 1) > 100)
        ) {
          i.error(
            `Cycle detected in registering blot requiredContainer: "${t}"`
          );
          break;
        }
    }),
    s
  );
};
const rf = sQ("quill"),
  rp = new eM.Registry();
eM.ParentBlot.uiClass = "ql-ui";
class rm {
  static DEFAULTS = {
    bounds: null,
    modules: { clipboard: !0, keyboard: !0, history: !0, uploader: !0 },
    placeholder: "",
    readOnly: !1,
    registry: rp,
    theme: "default",
  };
  static events = s0.events;
  static sources = s0.sources;
  static version = "2.0.3";
  static imports = {
    delta: Q(it),
    parchment: eM,
    "core/module": re,
    "core/theme": rn,
  };
  static debug(t) {
    !0 === t && (t = "log"), sQ.level(t);
  }
  static find(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return sK.get(t) || rp.find(t, e);
  }
  static import(t) {
    return (
      null == this.imports[t] &&
        rf.error(`Cannot import ${t}. Are you sure it was registered?`),
      this.imports[t]
    );
  }
  static register() {
    if ("string" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
      let t = arguments.length <= 0 ? void 0 : arguments[0],
        e = !!(arguments.length <= 1 ? void 0 : arguments[1]),
        i = "attrName" in t ? t.attrName : t.blotName;
      "string" == typeof i
        ? this.register(`formats/${i}`, t, e)
        : Object.keys(t).forEach((i) => {
            this.register(i, t[i], e);
          });
    } else {
      let t = arguments.length <= 0 ? void 0 : arguments[0],
        e = arguments.length <= 1 ? void 0 : arguments[1],
        i = !!(arguments.length <= 2 ? void 0 : arguments[2]);
      null == this.imports[t] || i || rf.warn(`Overwriting ${t} with`, e),
        (this.imports[t] = e),
        (t.startsWith("blots/") || t.startsWith("formats/")) &&
          e &&
          "boolean" != typeof e &&
          "abstract" !== e.blotName &&
          rp.register(e),
        "function" == typeof e.register && e.register(rp);
    }
  }
  constructor(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (
      ((this.options = (function (t, e) {
        let i = rg(t);
        if (!i) throw Error("Invalid Quill container");
        let s =
          e.theme && e.theme !== rm.DEFAULTS.theme
            ? rm.import(`themes/${e.theme}`)
            : rn;
        if (!s) throw Error(`Invalid theme ${e.theme}. Did you register it?`);
        let { modules: r, ...n } = rm.DEFAULTS,
          { modules: o, ...l } = s.DEFAULTS,
          a = rb(e.modules);
        null != a &&
          a.toolbar &&
          a.toolbar.constructor !== Object &&
          (a = { ...a, toolbar: { container: a.toolbar } });
        let c = eq({}, rb(r), rb(o), a),
          h = { ...n, ...rv(l), ...rv(e) },
          u = e.registry;
        return (
          u
            ? e.formats &&
              rf.warn(
                'Ignoring "formats" option because "registry" is specified'
              )
            : (u = e.formats ? rd(e.formats, h.registry, rf) : h.registry),
          {
            ...h,
            registry: u,
            container: i,
            theme: s,
            modules: Object.entries(c).reduce((t, e) => {
              let [i, s] = e;
              if (!s) return t;
              let r = rm.import(`modules/${i}`);
              return null == r
                ? (rf.error(
                    `Cannot load ${i} module. Are you sure you registered it?`
                  ),
                  t)
                : { ...t, [i]: eq({}, r.DEFAULTS || {}, s) };
            }, {}),
            bounds: rg(h.bounds),
          }
        );
      })(t, e)),
      (this.container = this.options.container),
      null == this.container)
    ) {
      rf.error("Invalid Quill container", t);
      return;
    }
    this.options.debug && rm.debug(this.options.debug);
    let i = this.container.innerHTML.trim();
    this.container.classList.add("ql-container"),
      (this.container.innerHTML = ""),
      sK.set(this.container, this),
      (this.root = this.addContainer("ql-editor")),
      this.root.classList.add("ql-blank"),
      (this.emitter = new s0());
    let s = eM.ScrollBlot.blotName,
      r = this.options.registry.query(s);
    if (!r || !("blotName" in r))
      throw Error(`Cannot initialize Quill without "${s}" blot`);
    if (
      ((this.scroll = new r(this.options.registry, this.root, {
        emitter: this.emitter,
      })),
      (this.editor = new rt(this.scroll)),
      (this.selection = new s3(this.scroll, this.emitter)),
      (this.composition = new rs(this.scroll, this.emitter)),
      (this.theme = new this.options.theme(this, this.options)),
      (this.keyboard = this.theme.addModule("keyboard")),
      (this.clipboard = this.theme.addModule("clipboard")),
      (this.history = this.theme.addModule("history")),
      (this.uploader = this.theme.addModule("uploader")),
      this.theme.addModule("input"),
      this.theme.addModule("uiNode"),
      this.theme.init(),
      this.emitter.on(s0.events.EDITOR_CHANGE, (t) => {
        t === s0.events.TEXT_CHANGE &&
          this.root.classList.toggle("ql-blank", this.editor.isBlank());
      }),
      this.emitter.on(s0.events.SCROLL_UPDATE, (t, e) => {
        let i = this.selection.lastRange,
          [s] = this.selection.getRange(),
          r = i && s ? { oldRange: i, newRange: s } : void 0;
        ry.call(this, () => this.editor.update(null, e, r), t);
      }),
      this.emitter.on(s0.events.SCROLL_EMBED_UPDATE, (t, e) => {
        let i = this.selection.lastRange,
          [s] = this.selection.getRange(),
          r = i && s ? { oldRange: i, newRange: s } : void 0;
        ry.call(
          this,
          () => {
            let i = new (Q(it))()
              .retain(t.offset(this))
              .retain({ [t.statics.blotName]: e });
            return this.editor.update(i, [], r);
          },
          rm.sources.USER
        );
      }),
      i)
    ) {
      let t = this.clipboard.convert({ html: `${i}<p><br></p>`, text: "\n" });
      this.setContents(t);
    }
    this.history.clear(),
      this.options.placeholder &&
        this.root.setAttribute("data-placeholder", this.options.placeholder),
      this.options.readOnly && this.disable(),
      (this.allowReadOnlyEdits = !1);
  }
  addContainer(t) {
    let e =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ("string" == typeof t) {
      let e = t;
      (t = document.createElement("div")).classList.add(e);
    }
    return this.container.insertBefore(t, e), t;
  }
  blur() {
    this.selection.setRange(null);
  }
  deleteText(t, e, i) {
    return (
      ([t, e, , i] = rx(t, e, i)),
      ry.call(this, () => this.editor.deleteText(t, e), i, t, -1 * e)
    );
  }
  disable() {
    this.enable(!1);
  }
  editReadOnly(t) {
    this.allowReadOnlyEdits = !0;
    let e = t();
    return (this.allowReadOnlyEdits = !1), e;
  }
  enable() {
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    this.scroll.enable(t), this.container.classList.toggle("ql-disabled", !t);
  }
  focus() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this.selection.focus(), t.preventScroll || this.scrollSelectionIntoView();
  }
  format(t, e) {
    let i =
      arguments.length > 2 && void 0 !== arguments[2]
        ? arguments[2]
        : s0.sources.API;
    return ry.call(
      this,
      () => {
        let i = this.getSelection(!0),
          s = new (Q(it))();
        if (null == i) return s;
        if (this.scroll.query(t, eM.Scope.BLOCK))
          s = this.editor.formatLine(i.index, i.length, { [t]: e });
        else {
          if (0 === i.length) return this.selection.format(t, e), s;
          s = this.editor.formatText(i.index, i.length, { [t]: e });
        }
        return this.setSelection(i, s0.sources.SILENT), s;
      },
      i
    );
  }
  formatLine(t, e, i, s, r) {
    let n;
    return (
      ([t, e, n, r] = rx(t, e, i, s, r)),
      ry.call(this, () => this.editor.formatLine(t, e, n), r, t, 0)
    );
  }
  formatText(t, e, i, s, r) {
    let n;
    return (
      ([t, e, n, r] = rx(t, e, i, s, r)),
      ry.call(this, () => this.editor.formatText(t, e, n), r, t, 0)
    );
  }
  getBounds(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      i = null;
    if (
      !(i =
        "number" == typeof t
          ? this.selection.getBounds(t, e)
          : this.selection.getBounds(t.index, t.length))
    )
      return null;
    let s = this.container.getBoundingClientRect();
    return {
      bottom: i.bottom - s.top,
      height: i.height,
      left: i.left - s.left,
      right: i.right - s.left,
      top: i.top - s.top,
      width: i.width,
    };
  }
  getContents() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      e =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : this.getLength() - t;
    return ([t, e] = rx(t, e)), this.editor.getContents(t, e);
  }
  getFormat() {
    let t =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : this.getSelection(!0),
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return "number" == typeof t
      ? this.editor.getFormat(t, e)
      : this.editor.getFormat(t.index, t.length);
  }
  getIndex(t) {
    return t.offset(this.scroll);
  }
  getLength() {
    return this.scroll.length();
  }
  getLeaf(t) {
    return this.scroll.leaf(t);
  }
  getLine(t) {
    return this.scroll.line(t);
  }
  getLines() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      e =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : Number.MAX_VALUE;
    return "number" != typeof t
      ? this.scroll.lines(t.index, t.length)
      : this.scroll.lines(t, e);
  }
  getModule(t) {
    return this.theme.modules[t];
  }
  getSelection() {
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return t && this.focus(), this.update(), this.selection.getRange()[0];
  }
  getSemanticHTML() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      e = arguments.length > 1 ? arguments[1] : void 0;
    return (
      "number" == typeof t && (e = e ?? this.getLength() - t),
      ([t, e] = rx(t, e)),
      this.editor.getHTML(t, e)
    );
  }
  getText() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      e = arguments.length > 1 ? arguments[1] : void 0;
    return (
      "number" == typeof t && (e = e ?? this.getLength() - t),
      ([t, e] = rx(t, e)),
      this.editor.getText(t, e)
    );
  }
  hasFocus() {
    return this.selection.hasFocus();
  }
  insertEmbed(t, e, i) {
    let s =
      arguments.length > 3 && void 0 !== arguments[3]
        ? arguments[3]
        : rm.sources.API;
    return ry.call(this, () => this.editor.insertEmbed(t, e, i), s, t);
  }
  insertText(t, e, i, s, r) {
    let n;
    return (
      ([t, , n, r] = rx(t, 0, i, s, r)),
      ry.call(this, () => this.editor.insertText(t, e, n), r, t, e.length)
    );
  }
  isEnabled() {
    return this.scroll.isEnabled();
  }
  off() {
    return this.emitter.off(...arguments);
  }
  on() {
    return this.emitter.on(...arguments);
  }
  once() {
    return this.emitter.once(...arguments);
  }
  removeFormat(t, e, i) {
    return (
      ([t, e, , i] = rx(t, e, i)),
      ry.call(this, () => this.editor.removeFormat(t, e), i, t)
    );
  }
  scrollRectIntoView(t) {
    rh(this.root, t);
  }
  scrollIntoView() {
    console.warn(
      "Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead."
    ),
      this.scrollSelectionIntoView();
  }
  scrollSelectionIntoView() {
    let t = this.selection.lastRange,
      e = t && this.selection.getBounds(t.index, t.length);
    e && this.scrollRectIntoView(e);
  }
  setContents(t) {
    let e =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : s0.sources.API;
    return ry.call(
      this,
      () => {
        t = new (Q(it))(t);
        let e = this.getLength(),
          i = this.editor.deleteText(0, e),
          s = this.editor.insertContents(0, t),
          r = this.editor.deleteText(this.getLength() - 1, 1);
        return i.compose(s).compose(r);
      },
      e
    );
  }
  setSelection(t, e, i) {
    null == t
      ? this.selection.setRange(null, e || rm.sources.API)
      : (([t, e, , i] = rx(t, e, i)),
        this.selection.setRange(new s2(Math.max(0, t), e), i),
        i !== s0.sources.SILENT && this.scrollSelectionIntoView());
  }
  setText(t) {
    let e =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : s0.sources.API,
      i = new (Q(it))().insert(t);
    return this.setContents(i, e);
  }
  update() {
    let t =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : s0.sources.USER,
      e = this.scroll.update(t);
    return this.selection.update(t), e;
  }
  updateContents(t) {
    let e =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : s0.sources.API;
    return ry.call(
      this,
      () => ((t = new (Q(it))(t)), this.editor.applyDelta(t)),
      e,
      !0
    );
  }
}
function rg(t) {
  return "string" == typeof t ? document.querySelector(t) : t;
}
function rb(t) {
  return Object.entries(t ?? {}).reduce((t, e) => {
    let [i, s] = e;
    return { ...t, [i]: !0 === s ? {} : s };
  }, {});
}
function rv(t) {
  return Object.fromEntries(Object.entries(t).filter((t) => void 0 !== t[1]));
}
function ry(t, e, i, s) {
  if (!this.isEnabled() && e === s0.sources.USER && !this.allowReadOnlyEdits)
    return new (Q(it))();
  let r = null == i ? null : this.getSelection(),
    n = this.editor.delta,
    o = t();
  if (
    (null != r &&
      (!0 === i && (i = r.index),
      null == s ? (r = rE(r, o, e)) : 0 !== s && (r = rE(r, i, s, e)),
      this.setSelection(r, s0.sources.SILENT)),
    o.length() > 0)
  ) {
    let t = [s0.events.TEXT_CHANGE, o, n, e];
    this.emitter.emit(s0.events.EDITOR_CHANGE, ...t),
      e !== s0.sources.SILENT && this.emitter.emit(...t);
  }
  return o;
}
function rx(t, e, i, s, r) {
  let n = {};
  return (
    "number" == typeof t.index && "number" == typeof t.length
      ? ("number" != typeof e && ((r = s), (s = i), (i = e)),
        (e = t.length),
        (t = t.index))
      : "number" != typeof e && ((r = s), (s = i), (i = e), (e = 0)),
    "object" == typeof i
      ? ((n = i), (r = s))
      : "string" == typeof i && (null != s ? (n[i] = s) : (r = i)),
    [t, e, n, (r = r || s0.sources.API)]
  );
}
function rE(t, e, i, s) {
  let r, n;
  let o = "number" == typeof i ? i : 0;
  return null == t
    ? null
    : (e && "function" == typeof e.transformPosition
        ? ([r, n] = [t.index, t.index + t.length].map((t) =>
            e.transformPosition(t, s !== s0.sources.USER)
          ))
        : ([r, n] = [t.index, t.index + t.length].map((t) =>
            t < e || (t === e && s === s0.sources.USER)
              ? t
              : o >= 0
              ? t + o
              : Math.max(e, t + o)
          )),
      new s2(r, n - r));
}
var rw = class extends e5 {};
function rN(t) {
  return t instanceof sj || t instanceof sR;
}
function r_(t) {
  return "function" == typeof t.updateContent;
}
function rA(t, e, i) {
  i.reduce((e, i) => {
    let s = (0, it.Op).length(i),
      r = i.attributes || {};
    if (null != i.insert) {
      if ("string" == typeof i.insert) {
        let s = i.insert;
        t.insertAt(e, s);
        let [n] = t.descendant(eY, e),
          o = sI(n);
        r = (0, it.AttributeMap).diff(o, r) || {};
      } else if ("object" == typeof i.insert) {
        let s = Object.keys(i.insert)[0];
        if (null == s) return e;
        if (
          (t.insertAt(e, s, i.insert[s]), null != t.scroll.query(s, eD.INLINE))
        ) {
          let [i] = t.descendant(eY, e),
            s = sI(i);
          r = (0, it.AttributeMap).diff(s, r) || {};
        }
      }
    }
    return (
      Object.keys(r).forEach((i) => {
        t.formatAt(e, s, i, r[i]);
      }),
      e + s
    );
  }, e);
}
var rS = class extends e8 {
  static blotName = "scroll";
  static className = "ql-editor";
  static tagName = "DIV";
  static defaultChild = sj;
  static allowedChildren = [sj, sR, rw];
  constructor(t, e, i) {
    let { emitter: s } = i;
    super(t, e),
      (this.emitter = s),
      (this.batch = !1),
      this.optimize(),
      this.enable(),
      this.domNode.addEventListener("dragstart", (t) =>
        this.handleDragStart(t)
      );
  }
  batchStart() {
    Array.isArray(this.batch) || (this.batch = []);
  }
  batchEnd() {
    if (!this.batch) return;
    let t = this.batch;
    (this.batch = !1), this.update(t);
  }
  emitMount(t) {
    this.emitter.emit(s0.events.SCROLL_BLOT_MOUNT, t);
  }
  emitUnmount(t) {
    this.emitter.emit(s0.events.SCROLL_BLOT_UNMOUNT, t);
  }
  emitEmbedUpdate(t, e) {
    this.emitter.emit(s0.events.SCROLL_EMBED_UPDATE, t, e);
  }
  deleteAt(t, e) {
    let [i, s] = this.line(t),
      [r] = this.line(t + e);
    if ((super.deleteAt(t, e), null != r && i !== r && s > 0)) {
      if (i instanceof sR || r instanceof sR) {
        this.optimize();
        return;
      }
      let t = r.children.head instanceof sL ? null : r.children.head;
      i.moveChildren(r, t), i.remove();
    }
    this.optimize();
  }
  enable() {
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    this.domNode.setAttribute("contenteditable", t ? "true" : "false");
  }
  formatAt(t, e, i, s) {
    super.formatAt(t, e, i, s), this.optimize();
  }
  insertAt(t, e, i) {
    if (t >= this.length()) {
      if (null == i || null == this.scroll.query(e, eD.BLOCK)) {
        let t = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(t),
          null == i && e.endsWith("\n")
            ? t.insertAt(0, e.slice(0, -1), i)
            : t.insertAt(0, e, i);
      } else {
        let t = this.scroll.create(e, i);
        this.appendChild(t);
      }
    } else super.insertAt(t, e, i);
    this.optimize();
  }
  insertBefore(t, e) {
    if (t.statics.scope === eD.INLINE_BLOT) {
      let i = this.scroll.create(this.statics.defaultChild.blotName);
      i.appendChild(t), super.insertBefore(i, e);
    } else super.insertBefore(t, e);
  }
  insertContents(t, e) {
    let i = this.deltaToRenderBlocks(e.concat(new (Q(it))().insert("\n"))),
      s = i.pop();
    if (null == s) return;
    this.batchStart();
    let r = i.shift();
    if (r) {
      let e =
          "block" === r.type &&
          (0 === r.delta.length() ||
            (!this.descendant(sR, t)[0] && t < this.length())),
        i =
          "block" === r.type
            ? r.delta
            : new (Q(it))().insert({ [r.key]: r.value });
      rA(this, t, i);
      let s = "block" === r.type ? 1 : 0,
        n = t + i.length() + s;
      e && this.insertAt(n - 1, "\n");
      let o = sI(this.line(t)[0]),
        l = (0, it.AttributeMap).diff(o, r.attributes) || {};
      Object.keys(l).forEach((t) => {
        this.formatAt(n - 1, 1, t, l[t]);
      }),
        (t = n);
    }
    let [n, o] = this.children.find(t);
    i.length &&
      (n && ((n = n.split(o)), (o = 0)),
      i.forEach((t) => {
        if ("block" === t.type)
          rA(this.createBlock(t.attributes, n || void 0), 0, t.delta);
        else {
          let e = this.create(t.key, t.value);
          this.insertBefore(e, n || void 0),
            Object.keys(t.attributes).forEach((i) => {
              e.format(i, t.attributes[i]);
            });
        }
      })),
      "block" === s.type &&
        s.delta.length() &&
        rA(this, n ? n.offset(n.scroll) + o : this.length(), s.delta),
      this.batchEnd(),
      this.optimize();
  }
  isEnabled() {
    return "true" === this.domNode.getAttribute("contenteditable");
  }
  leaf(t) {
    let e = this.path(t).pop();
    if (!e) return [null, -1];
    let [i, s] = e;
    return i instanceof eY ? [i, s] : [null, -1];
  }
  line(t) {
    return t === this.length() ? this.line(t - 1) : this.descendant(rN, t);
  }
  lines() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      e =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : Number.MAX_VALUE,
      i = (t, e, s) => {
        let r = [],
          n = s;
        return (
          t.children.forEachAt(e, s, (t, e, s) => {
            rN(t) ? r.push(t) : t instanceof e5 && (r = r.concat(i(t, e, n))),
              (n -= s);
          }),
          r
        );
      };
    return i(this, t, e);
  }
  optimize() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    !this.batch &&
      (super.optimize(t, e),
      t.length > 0 && this.emitter.emit(s0.events.SCROLL_OPTIMIZE, t, e));
  }
  path(t) {
    return super.path(t).slice(1);
  }
  remove() {}
  update(t) {
    if (this.batch) {
      Array.isArray(t) && (this.batch = this.batch.concat(t));
      return;
    }
    let e = s0.sources.USER;
    "string" == typeof t && (e = t),
      Array.isArray(t) || (t = this.observer.takeRecords()),
      (t = t.filter((t) => {
        let { target: e } = t,
          i = this.find(e, !0);
        return i && !r_(i);
      })).length > 0 && this.emitter.emit(s0.events.SCROLL_BEFORE_UPDATE, e, t),
      super.update(t.concat([])),
      t.length > 0 && this.emitter.emit(s0.events.SCROLL_UPDATE, e, t);
  }
  updateEmbedAt(t, e, i) {
    let [s] = this.descendant((t) => t instanceof sR, t);
    s && s.statics.blotName === e && r_(s) && s.updateContent(i);
  }
  handleDragStart(t) {
    t.preventDefault();
  }
  deltaToRenderBlocks(t) {
    let e = [],
      i = new (Q(it))();
    return (
      t.forEach((t) => {
        let s = t?.insert;
        if (s) {
          if ("string" == typeof s) {
            let r = s.split("\n");
            r.slice(0, -1).forEach((s) => {
              i.insert(s, t.attributes),
                e.push({
                  type: "block",
                  delta: i,
                  attributes: t.attributes ?? {},
                }),
                (i = new (Q(it))());
            });
            let n = r[r.length - 1];
            n && i.insert(n, t.attributes);
          } else {
            let r = Object.keys(s)[0];
            if (!r) return;
            this.query(r, eD.INLINE)
              ? i.push(t)
              : (i.length() &&
                  e.push({ type: "block", delta: i, attributes: {} }),
                (i = new (Q(it))()),
                e.push({
                  type: "blockEmbed",
                  key: r,
                  value: s[r],
                  attributes: t.attributes ?? {},
                }));
          }
        }
      }),
      i.length() && e.push({ type: "block", delta: i, attributes: {} }),
      e
    );
  }
  createBlock(t, e) {
    let i;
    let s = {};
    Object.entries(t).forEach((t) => {
      let [e, r] = t;
      null != this.query(e, eD.BLOCK & eD.BLOT) ? (i = e) : (s[e] = r);
    });
    let r = this.create(
      i || this.statics.defaultChild.blotName,
      i ? t[i] : void 0
    );
    this.insertBefore(r, e || void 0);
    let n = r.length();
    return (
      Object.entries(s).forEach((t) => {
        let [e, i] = t;
        r.formatAt(0, n, e, i);
      }),
      r
    );
  }
};
const rk = { scope: eD.BLOCK, whitelist: ["right", "center", "justify"] },
  rO = new ej("align", "align", rk),
  rL = new e$("align", "ql-align", rk),
  rT = new eU("align", "text-align", rk);
class rC extends eU {
  value(t) {
    let e = super.value(t);
    if (!e.startsWith("rgb(")) return e;
    let i = (e = e.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""))
      .split(",")
      .map((t) => `00${parseInt(t, 10).toString(16)}`.slice(-2))
      .join("");
    return `#${i}`;
  }
}
const rq = new e$("color", "ql-color", { scope: eD.INLINE }),
  rM = new rC("color", "color", { scope: eD.INLINE }),
  rD = new e$("background", "ql-bg", { scope: eD.INLINE }),
  rj = new rC("background", "background-color", { scope: eD.INLINE });
class rR extends rw {
  static create(t) {
    let e = super.create(t);
    return e.setAttribute("spellcheck", "false"), e;
  }
  code(t, e) {
    return this.children
      .map((t) => (1 >= t.length() ? "" : t.domNode.innerText))
      .join("\n")
      .slice(t, t + e);
  }
  html(t, e) {
    return `<pre>
${sq(this.code(t, e))}
</pre>`;
  }
}
class rV extends sj {
  static TAB = "  ";
  static register() {
    rm.register(rR);
  }
}
class rI extends sD {}
(rI.blotName = "code"),
  (rI.tagName = "CODE"),
  (rV.blotName = "code-block"),
  (rV.className = "ql-code-block"),
  (rV.tagName = "DIV"),
  (rR.blotName = "code-block-container"),
  (rR.className = "ql-code-block-container"),
  (rR.tagName = "DIV"),
  (rR.allowedChildren = [rV]),
  (rV.allowedChildren = [sT, sL, sP]),
  (rV.requiredContainer = rR);
const rP = { scope: eD.BLOCK, whitelist: ["rtl"] },
  r$ = new ej("direction", "dir", rP),
  rB = new e$("direction", "ql-direction", rP),
  rU = new eU("direction", "direction", rP),
  rH = { scope: eD.INLINE, whitelist: ["serif", "monospace"] },
  rz = new e$("font", "ql-font", rH),
  rF = new (class extends eU {
    value(t) {
      return super.value(t).replace(/["']/g, "");
    }
  })("font", "font-family", rH),
  rW = new e$("size", "ql-size", {
    scope: eD.INLINE,
    whitelist: ["small", "large", "huge"],
  }),
  rY = new eU("size", "font-size", {
    scope: eD.INLINE,
    whitelist: ["10px", "18px", "32px"],
  }),
  rK = sQ("quill:keyboard"),
  rZ = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
class rX extends re {
  static match(t, e) {
    return (
      !["altKey", "ctrlKey", "metaKey", "shiftKey"].some(
        (i) => !!e[i] !== t[i] && null !== e[i]
      ) &&
      (e.key === t.key || e.key === t.which)
    );
  }
  constructor(t, e) {
    super(t, e),
      (this.bindings = {}),
      Object.keys(this.options.bindings).forEach((t) => {
        this.options.bindings[t] && this.addBinding(this.options.bindings[t]);
      }),
      this.addBinding({ key: "Enter", shiftKey: null }, this.handleEnter),
      this.addBinding(
        { key: "Enter", metaKey: null, ctrlKey: null, altKey: null },
        () => {}
      ),
      /Firefox/i.test(navigator.userAgent)
        ? (this.addBinding(
            { key: "Backspace" },
            { collapsed: !0 },
            this.handleBackspace
          ),
          this.addBinding(
            { key: "Delete" },
            { collapsed: !0 },
            this.handleDelete
          ))
        : (this.addBinding(
            { key: "Backspace" },
            { collapsed: !0, prefix: /^.?$/ },
            this.handleBackspace
          ),
          this.addBinding(
            { key: "Delete" },
            { collapsed: !0, suffix: /^.?$/ },
            this.handleDelete
          )),
      this.addBinding(
        { key: "Backspace" },
        { collapsed: !1 },
        this.handleDeleteRange
      ),
      this.addBinding(
        { key: "Delete" },
        { collapsed: !1 },
        this.handleDeleteRange
      ),
      this.addBinding(
        {
          key: "Backspace",
          altKey: null,
          ctrlKey: null,
          metaKey: null,
          shiftKey: null,
        },
        { collapsed: !0, offset: 0 },
        this.handleBackspace
      ),
      this.listen();
  }
  addBinding(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      s = (function (t) {
        if ("string" == typeof t || "number" == typeof t) t = { key: t };
        else {
          if ("object" != typeof t) return null;
          t = sd(t);
        }
        return t.shortKey && ((t[rZ] = t.shortKey), delete t.shortKey), t;
      })(t);
    if (null == s) {
      rK.warn("Attempted to add invalid keyboard binding", s);
      return;
    }
    "function" == typeof e && (e = { handler: e }),
      "function" == typeof i && (i = { handler: i }),
      (Array.isArray(s.key) ? s.key : [s.key]).forEach((t) => {
        let r = { ...s, key: t, ...e, ...i };
        (this.bindings[r.key] = this.bindings[r.key] || []),
          this.bindings[r.key].push(r);
      });
  }
  listen() {
    this.quill.root.addEventListener("keydown", (t) => {
      if (
        t.defaultPrevented ||
        t.isComposing ||
        (229 === t.keyCode && ("Enter" === t.key || "Backspace" === t.key))
      )
        return;
      let e = (this.bindings[t.key] || [])
        .concat(this.bindings[t.which] || [])
        .filter((e) => rX.match(t, e));
      if (0 === e.length) return;
      let i = rm.find(t.target, !0);
      if (i && i.scroll !== this.quill.scroll) return;
      let s = this.quill.getSelection();
      if (null == s || !this.quill.hasFocus()) return;
      let [r, n] = this.quill.getLine(s.index),
        [o, l] = this.quill.getLeaf(s.index),
        [a, c] =
          0 === s.length ? [o, l] : this.quill.getLeaf(s.index + s.length),
        h = o instanceof e7 ? o.value().slice(0, l) : "",
        u = a instanceof e7 ? a.value().slice(c) : "",
        d = {
          collapsed: 0 === s.length,
          empty: 0 === s.length && 1 >= r.length(),
          format: this.quill.getFormat(s),
          line: r,
          offset: n,
          prefix: h,
          suffix: u,
          event: t,
        };
      e.some((t) => {
        if (
          (null != t.collapsed && t.collapsed !== d.collapsed) ||
          (null != t.empty && t.empty !== d.empty) ||
          (null != t.offset && t.offset !== d.offset)
        )
          return !1;
        if (Array.isArray(t.format)) {
          if (t.format.every((t) => null == d.format[t])) return !1;
        } else if (
          "object" == typeof t.format &&
          !Object.keys(t.format).every((e) =>
            !0 === t.format[e]
              ? null != d.format[e]
              : !1 === t.format[e]
              ? null == d.format[e]
              : sO(t.format[e], d.format[e])
          )
        )
          return !1;
        return (
          !!(
            (null == t.prefix || t.prefix.test(d.prefix)) &&
            (null == t.suffix || t.suffix.test(d.suffix))
          ) && !0 !== t.handler.call(this, s, d, t)
        );
      }) && t.preventDefault();
    });
  }
  handleBackspace(t, e) {
    let i = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
    if (0 === t.index || 1 >= this.quill.getLength()) return;
    let s = {},
      [r] = this.quill.getLine(t.index),
      n = new (Q(it))().retain(t.index - i).delete(i);
    if (0 === e.offset) {
      let [e] = this.quill.getLine(t.index - 1);
      if (e && !("block" === e.statics.blotName && 1 >= e.length())) {
        let e = r.formats(),
          i = this.quill.getFormat(t.index - 1, 1);
        if (
          Object.keys((s = (0, it.AttributeMap).diff(e, i) || {})).length > 0
        ) {
          let e = new (Q(it))().retain(t.index + r.length() - 2).retain(1, s);
          n = n.compose(e);
        }
      }
    }
    this.quill.updateContents(n, rm.sources.USER), this.quill.focus();
  }
  handleDelete(t, e) {
    let i = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
    if (t.index >= this.quill.getLength() - i) return;
    let s = {},
      [r] = this.quill.getLine(t.index),
      n = new (Q(it))().retain(t.index).delete(i);
    if (e.offset >= r.length() - 1) {
      let [e] = this.quill.getLine(t.index + 1);
      if (e) {
        let i = r.formats(),
          o = this.quill.getFormat(t.index, 1);
        Object.keys((s = (0, it.AttributeMap).diff(i, o) || {})).length > 0 &&
          (n = n.retain(e.length() - 1).retain(1, s));
      }
    }
    this.quill.updateContents(n, rm.sources.USER), this.quill.focus();
  }
  handleDeleteRange(t) {
    r2({ range: t, quill: this.quill }), this.quill.focus();
  }
  handleEnter(t, e) {
    let i = Object.keys(e.format).reduce(
        (t, i) => (
          this.quill.scroll.query(i, eD.BLOCK) &&
            !Array.isArray(e.format[i]) &&
            (t[i] = e.format[i]),
          t
        ),
        {}
      ),
      s = new (Q(it))().retain(t.index).delete(t.length).insert("\n", i);
    this.quill.updateContents(s, rm.sources.USER),
      this.quill.setSelection(t.index + 1, rm.sources.SILENT),
      this.quill.focus();
  }
}
const rG = {
  bindings: {
    bold: r0("bold"),
    italic: r0("italic"),
    underline: r0("underline"),
    indent: {
      key: "Tab",
      format: ["blockquote", "indent", "list"],
      handler(t, e) {
        return (
          (!!e.collapsed && 0 !== e.offset) ||
          (this.quill.format("indent", "+1", rm.sources.USER), !1)
        );
      },
    },
    outdent: {
      key: "Tab",
      shiftKey: !0,
      format: ["blockquote", "indent", "list"],
      handler(t, e) {
        return (
          (!!e.collapsed && 0 !== e.offset) ||
          (this.quill.format("indent", "-1", rm.sources.USER), !1)
        );
      },
    },
    "outdent backspace": {
      key: "Backspace",
      collapsed: !0,
      shiftKey: null,
      metaKey: null,
      ctrlKey: null,
      altKey: null,
      format: ["indent", "list"],
      offset: 0,
      handler(t, e) {
        null != e.format.indent
          ? this.quill.format("indent", "-1", rm.sources.USER)
          : null != e.format.list &&
            this.quill.format("list", !1, rm.sources.USER);
      },
    },
    "indent code-block": rQ(!0),
    "outdent code-block": rQ(!1),
    "remove tab": {
      key: "Tab",
      shiftKey: !0,
      collapsed: !0,
      prefix: /\t$/,
      handler(t) {
        this.quill.deleteText(t.index - 1, 1, rm.sources.USER);
      },
    },
    tab: {
      key: "Tab",
      handler(t, e) {
        if (e.format.table) return !0;
        this.quill.history.cutoff();
        let i = new (Q(it))().retain(t.index).delete(t.length).insert("	");
        return (
          this.quill.updateContents(i, rm.sources.USER),
          this.quill.history.cutoff(),
          this.quill.setSelection(t.index + 1, rm.sources.SILENT),
          !1
        );
      },
    },
    "blockquote empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["blockquote"],
      empty: !0,
      handler() {
        this.quill.format("blockquote", !1, rm.sources.USER);
      },
    },
    "list empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["list"],
      empty: !0,
      handler(t, e) {
        let i = { list: !1 };
        e.format.indent && (i.indent = !1),
          this.quill.formatLine(t.index, t.length, i, rm.sources.USER);
      },
    },
    "checklist enter": {
      key: "Enter",
      collapsed: !0,
      format: { list: "checked" },
      handler(t) {
        let [e, i] = this.quill.getLine(t.index),
          s = { ...e.formats(), list: "checked" },
          r = new (Q(it))()
            .retain(t.index)
            .insert("\n", s)
            .retain(e.length() - i - 1)
            .retain(1, { list: "unchecked" });
        this.quill.updateContents(r, rm.sources.USER),
          this.quill.setSelection(t.index + 1, rm.sources.SILENT),
          this.quill.scrollSelectionIntoView();
      },
    },
    "header enter": {
      key: "Enter",
      collapsed: !0,
      format: ["header"],
      suffix: /^$/,
      handler(t, e) {
        let [i, s] = this.quill.getLine(t.index),
          r = new (Q(it))()
            .retain(t.index)
            .insert("\n", e.format)
            .retain(i.length() - s - 1)
            .retain(1, { header: null });
        this.quill.updateContents(r, rm.sources.USER),
          this.quill.setSelection(t.index + 1, rm.sources.SILENT),
          this.quill.scrollSelectionIntoView();
      },
    },
    "table backspace": {
      key: "Backspace",
      format: ["table"],
      collapsed: !0,
      offset: 0,
      handler() {},
    },
    "table delete": {
      key: "Delete",
      format: ["table"],
      collapsed: !0,
      suffix: /^$/,
      handler() {},
    },
    "table enter": {
      key: "Enter",
      shiftKey: null,
      format: ["table"],
      handler(t) {
        let e = this.quill.getModule("table");
        if (e) {
          let [i, s, r, n] = e.getTable(t),
            o =
              null == s.prev && null == s.next
                ? null == r.prev && null == r.next
                  ? 0 === n
                    ? -1
                    : 1
                  : null == r.prev
                  ? -1
                  : 1
                : null == s.prev
                ? -1
                : null == s.next
                ? 1
                : null;
          if (null == o) return;
          let l = i.offset();
          if (o < 0) {
            let e = new (Q(it))().retain(l).insert("\n");
            this.quill.updateContents(e, rm.sources.USER),
              this.quill.setSelection(t.index + 1, t.length, rm.sources.SILENT);
          } else if (o > 0) {
            l += i.length();
            let t = new (Q(it))().retain(l).insert("\n");
            this.quill.updateContents(t, rm.sources.USER),
              this.quill.setSelection(l, rm.sources.USER);
          }
        }
      },
    },
    "table tab": {
      key: "Tab",
      shiftKey: null,
      format: ["table"],
      handler(t, e) {
        let { event: i, line: s } = e,
          r = s.offset(this.quill.scroll);
        i.shiftKey
          ? this.quill.setSelection(r - 1, rm.sources.USER)
          : this.quill.setSelection(r + s.length(), rm.sources.USER);
      },
    },
    "list autofill": {
      key: " ",
      shiftKey: null,
      collapsed: !0,
      format: { "code-block": !1, blockquote: !1, table: !1 },
      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
      handler(t, e) {
        let i;
        if (null == this.quill.scroll.query("list")) return !0;
        let { length: s } = e.prefix,
          [r, n] = this.quill.getLine(t.index);
        if (n > s) return !0;
        switch (e.prefix.trim()) {
          case "[]":
          case "[ ]":
            i = "unchecked";
            break;
          case "[x]":
            i = "checked";
            break;
          case "-":
          case "*":
            i = "bullet";
            break;
          default:
            i = "ordered";
        }
        this.quill.insertText(t.index, " ", rm.sources.USER),
          this.quill.history.cutoff();
        let o = new (Q(it))()
          .retain(t.index - n)
          .delete(s + 1)
          .retain(r.length() - 2 - n)
          .retain(1, { list: i });
        return (
          this.quill.updateContents(o, rm.sources.USER),
          this.quill.history.cutoff(),
          this.quill.setSelection(t.index - s, rm.sources.SILENT),
          !1
        );
      },
    },
    "code exit": {
      key: "Enter",
      collapsed: !0,
      format: ["code-block"],
      prefix: /^$/,
      suffix: /^\s*$/,
      handler(t) {
        let [e, i] = this.quill.getLine(t.index),
          s = 2,
          r = e;
        for (; null != r && 1 >= r.length() && r.formats()["code-block"]; )
          if (((r = r.prev), (s -= 1) <= 0)) {
            let s = new (Q(it))()
              .retain(t.index + e.length() - i - 2)
              .retain(1, { "code-block": null })
              .delete(1);
            return (
              this.quill.updateContents(s, rm.sources.USER),
              this.quill.setSelection(t.index - 1, rm.sources.SILENT),
              !1
            );
          }
        return !0;
      },
    },
    "embed left": rJ("ArrowLeft", !1),
    "embed left shift": rJ("ArrowLeft", !0),
    "embed right": rJ("ArrowRight", !1),
    "embed right shift": rJ("ArrowRight", !0),
    "table down": r1(!1),
    "table up": r1(!0),
  },
};
function rQ(t) {
  return {
    key: "Tab",
    shiftKey: !t,
    format: { "code-block": !0 },
    handler(e, i) {
      let { event: s } = i,
        { TAB: r } = this.quill.scroll.query("code-block");
      if (0 === e.length && !s.shiftKey) {
        this.quill.insertText(e.index, r, rm.sources.USER),
          this.quill.setSelection(e.index + r.length, rm.sources.SILENT);
        return;
      }
      let n =
          0 === e.length
            ? this.quill.getLines(e.index, 1)
            : this.quill.getLines(e),
        { index: o, length: l } = e;
      n.forEach((e, i) => {
        t
          ? (e.insertAt(0, r), 0 === i ? (o += r.length) : (l += r.length))
          : e.domNode.textContent.startsWith(r) &&
            (e.deleteAt(0, r.length),
            0 === i ? (o -= r.length) : (l -= r.length));
      }),
        this.quill.update(rm.sources.USER),
        this.quill.setSelection(o, l, rm.sources.SILENT);
    },
  };
}
function rJ(t, e) {
  return {
    key: t,
    shiftKey: e,
    altKey: null,
    ["ArrowLeft" === t ? "prefix" : "suffix"]: /^$/,
    handler(i) {
      let { index: s } = i;
      "ArrowRight" === t && (s += i.length + 1);
      let [r] = this.quill.getLeaf(s);
      return (
        !(r instanceof e3) ||
        ("ArrowLeft" === t
          ? e
            ? this.quill.setSelection(
                i.index - 1,
                i.length + 1,
                rm.sources.USER
              )
            : this.quill.setSelection(i.index - 1, rm.sources.USER)
          : e
          ? this.quill.setSelection(i.index, i.length + 1, rm.sources.USER)
          : this.quill.setSelection(i.index + i.length + 1, rm.sources.USER),
        !1)
      );
    },
  };
}
function r0(t) {
  return {
    key: t[0],
    shortKey: !0,
    handler(e, i) {
      this.quill.format(t, !i.format[t], rm.sources.USER);
    },
  };
}
function r1(t) {
  return {
    key: t ? "ArrowUp" : "ArrowDown",
    collapsed: !0,
    format: ["table"],
    handler(e, i) {
      let s = t ? "prev" : "next",
        r = i.line,
        n = r.parent[s];
      if (null != n) {
        if ("table-row" === n.statics.blotName) {
          let t = n.children.head,
            e = r;
          for (; null != e.prev; ) (e = e.prev), (t = t.next);
          let s =
            t.offset(this.quill.scroll) + Math.min(i.offset, t.length() - 1);
          this.quill.setSelection(s, 0, rm.sources.USER);
        }
      } else {
        let e = r.table()[s];
        null != e &&
          (t
            ? this.quill.setSelection(
                e.offset(this.quill.scroll) + e.length() - 1,
                0,
                rm.sources.USER
              )
            : this.quill.setSelection(
                e.offset(this.quill.scroll),
                0,
                rm.sources.USER
              ));
      }
      return !1;
    },
  };
}
function r2(t) {
  let { quill: e, range: i } = t,
    s = e.getLines(i),
    r = {};
  if (s.length > 1) {
    let t = s[0].formats(),
      e = s[s.length - 1].formats();
    r = (0, it.AttributeMap).diff(e, t) || {};
  }
  e.deleteText(i, rm.sources.USER),
    Object.keys(r).length > 0 && e.formatLine(i.index, 1, r, rm.sources.USER),
    e.setSelection(i.index, rm.sources.SILENT);
}
rX.DEFAULTS = rG;
const r5 = /font-weight:\s*normal/,
  r3 = ["P", "OL", "UL"],
  r4 = (t) => t && r3.includes(t.tagName),
  r6 = (t) => {
    Array.from(t.querySelectorAll("br"))
      .filter((t) => r4(t.previousElementSibling) && r4(t.nextElementSibling))
      .forEach((t) => {
        t.parentNode?.removeChild(t);
      });
  },
  r8 = (t) => {
    Array.from(t.querySelectorAll('b[style*="font-weight"]'))
      .filter((t) => t.getAttribute("style")?.match(r5))
      .forEach((e) => {
        let i = t.createDocumentFragment();
        i.append(...e.childNodes), e.parentNode?.replaceChild(i, e);
      });
  },
  r9 = /\bmso-list:[^;]*ignore/i,
  r7 = /\bmso-list:[^;]*\bl(\d+)/i,
  nt = /\bmso-list:[^;]*\blevel(\d+)/i,
  ne = (t, e) => {
    let i = t.getAttribute("style"),
      s = i?.match(r7);
    if (!s) return null;
    let r = Number(s[1]),
      n = i?.match(nt),
      o = n ? Number(n[1]) : 1,
      l = RegExp(
        `@list l${r}:level${o}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`,
        "i"
      ),
      a = e.match(l);
    return {
      id: r,
      indent: o,
      type: a && "bullet" === a[1] ? "bullet" : "ordered",
      element: t,
    };
  },
  ni = (t) => {
    let e = Array.from(t.querySelectorAll("[style*=mso-list]")),
      i = [],
      s = [];
    e.forEach((t) => {
      (t.getAttribute("style") || "").match(r9) ? i.push(t) : s.push(t);
    }),
      i.forEach((t) => t.parentNode?.removeChild(t));
    let r = t.documentElement.innerHTML,
      n = s.map((t) => ne(t, r)).filter((t) => t);
    for (; n.length; ) {
      let t = [],
        e = n.shift();
      for (; e; )
        t.push(e),
          (e =
            n.length &&
            n[0]?.element === e.element.nextElementSibling &&
            n[0].id === e.id
              ? n.shift()
              : null);
      let i = document.createElement("ul");
      t.forEach((t) => {
        let e = document.createElement("li");
        e.setAttribute("data-list", t.type),
          t.indent > 1 && e.setAttribute("class", `ql-indent-${t.indent - 1}`),
          (e.innerHTML = t.element.innerHTML),
          i.appendChild(e);
      });
      let s = t[0]?.element,
        { parentNode: r } = s ?? {};
      s && r?.replaceChild(i, s),
        t.slice(1).forEach((t) => {
          let { element: e } = t;
          r?.removeChild(e);
        });
    }
  },
  ns = [
    function (t) {
      "urn:schemas-microsoft-com:office:word" ===
        t.documentElement.getAttribute("xmlns:w") && ni(t);
    },
    function (t) {
      t.querySelector('[id^="docs-internal-guid-"]') && (r8(t), r6(t));
    },
  ];
var nr = (t) => {
  t.documentElement &&
    ns.forEach((e) => {
      e(t);
    });
};
const nn = sQ("quill:clipboard"),
  no = [
    [
      Node.TEXT_NODE,
      function (t, e, i) {
        let s = t.data;
        if (t.parentElement?.tagName === "O:P") return e.insert(s.trim());
        if (
          !(function t(e) {
            return (
              null != e &&
              (nd.has(e) ||
                ("PRE" === e.tagName
                  ? nd.set(e, !0)
                  : nd.set(e, t(e.parentNode))),
              nd.get(e))
            );
          })(t)
        ) {
          if (
            0 === s.trim().length &&
            s.includes("\n") &&
            (!t.previousElementSibling ||
              !t.nextElementSibling ||
              nu(t.previousElementSibling, i) ||
              nu(t.nextElementSibling, i))
          )
            return e;
          (s = (s = s.replace(/[^\S\u00a0]/g, " ")).replace(/ {2,}/g, " ")),
            ((null == t.previousSibling &&
              null != t.parentElement &&
              nu(t.parentElement, i)) ||
              (t.previousSibling instanceof Element &&
                nu(t.previousSibling, i))) &&
              (s = s.replace(/^ /, "")),
            ((null == t.nextSibling &&
              null != t.parentElement &&
              nu(t.parentElement, i)) ||
              (t.nextSibling instanceof Element && nu(t.nextSibling, i))) &&
              (s = s.replace(/ $/, "")),
            (s = s.replaceAll(" ", " "));
        }
        return e.insert(s);
      },
    ],
    [Node.TEXT_NODE, nm],
    [
      "br",
      function (t, e) {
        return nh(e, "\n") || e.insert("\n"), e;
      },
    ],
    [Node.ELEMENT_NODE, nm],
    [
      Node.ELEMENT_NODE,
      function (t, e, i) {
        let s = i.query(t);
        if (null == s) return e;
        if (s.prototype instanceof e3) {
          let e = {},
            r = s.value(t);
          if (null != r)
            return (
              (e[s.blotName] = r), new (Q(it))().insert(e, s.formats(t, i))
            );
        } else if (
          (s.prototype instanceof e1 && !nh(e, "\n") && e.insert("\n"),
          "blotName" in s && "formats" in s && "function" == typeof s.formats)
        )
          return nc(e, s.blotName, s.formats(t, i), i);
        return e;
      },
    ],
    [
      Node.ELEMENT_NODE,
      function (t, e, i) {
        let s = ej.keys(t),
          r = e$.keys(t),
          n = eU.keys(t),
          o = {};
        return (
          s
            .concat(r)
            .concat(n)
            .forEach((e) => {
              let s = i.query(e, eD.ATTRIBUTE);
              (null != s && ((o[s.attrName] = s.value(t)), o[s.attrName])) ||
                (null != (s = nl[e]) &&
                  (s.attrName === e || s.keyName === e) &&
                  (o[s.attrName] = s.value(t) || void 0),
                null != (s = na[e]) &&
                  (s.attrName === e || s.keyName === e) &&
                  (o[(s = na[e]).attrName] = s.value(t) || void 0));
            }),
          Object.entries(o).reduce((t, e) => {
            let [s, r] = e;
            return nc(t, s, r, i);
          }, e)
        );
      },
    ],
    [
      Node.ELEMENT_NODE,
      function (t, e, i) {
        let s = {},
          r = t.style || {};
        return ("italic" === r.fontStyle && (s.italic = !0),
        "underline" === r.textDecoration && (s.underline = !0),
        "line-through" === r.textDecoration && (s.strike = !0),
        (r.fontWeight?.startsWith("bold") ||
          parseInt(r.fontWeight, 10) >= 700) &&
          (s.bold = !0),
        (e = Object.entries(s).reduce((t, e) => {
          let [s, r] = e;
          return nc(t, s, r, i);
        }, e)),
        parseFloat(r.textIndent || 0) > 0)
          ? new (Q(it))().insert("	").concat(e)
          : e;
      },
    ],
    [
      "li",
      function (t, e, i) {
        let s = i.query(t);
        if (null == s || "list" !== s.blotName || !nh(e, "\n")) return e;
        let r = -1,
          n = t.parentNode;
        for (; null != n; )
          ["OL", "UL"].includes(n.tagName) && (r += 1), (n = n.parentNode);
        return r <= 0
          ? e
          : e.reduce(
              (t, e) =>
                e.insert
                  ? e.attributes && "number" == typeof e.attributes.indent
                    ? t.push(e)
                    : t.insert(e.insert, { indent: r, ...(e.attributes || {}) })
                  : t,
              new (Q(it))()
            );
      },
    ],
    [
      "ol, ul",
      function (t, e, i) {
        let s = "OL" === t.tagName ? "ordered" : "bullet",
          r = t.getAttribute("data-checked");
        return (
          r && (s = "true" === r ? "checked" : "unchecked"), nc(e, "list", s, i)
        );
      },
    ],
    [
      "pre",
      function (t, e, i) {
        let s = i.query("code-block");
        return nc(
          e,
          "code-block",
          !s ||
            !("formats" in s) ||
            "function" != typeof s.formats ||
            s.formats(t, i),
          i
        );
      },
    ],
    [
      "tr",
      function (t, e, i) {
        let s =
          t.parentElement?.tagName === "TABLE"
            ? t.parentElement
            : t.parentElement?.parentElement;
        return null != s
          ? nc(
              e,
              "table",
              Array.from(s.querySelectorAll("tr")).indexOf(t) + 1,
              i
            )
          : e;
      },
    ],
    ["b", np("bold")],
    ["i", np("italic")],
    ["strike", np("strike")],
    [
      "style",
      function () {
        return new (Q(it))();
      },
    ],
  ],
  nl = [rO, r$].reduce((t, e) => ((t[e.keyName] = e), t), {}),
  na = [rT, rj, rM, rU, rF, rY].reduce((t, e) => ((t[e.keyName] = e), t), {});
function nc(t, e, i, s) {
  return s.query(e)
    ? t.reduce(
        (t, s) =>
          s.insert
            ? s.attributes && s.attributes[e]
              ? t.push(s)
              : t.insert(s.insert, {
                  ...(i ? { [e]: i } : {}),
                  ...s.attributes,
                })
            : t,
        new (Q(it))()
      )
    : t;
}
function nh(t, e) {
  let i = "";
  for (let s = t.ops.length - 1; s >= 0 && i.length < e.length; --s) {
    let e = t.ops[s];
    if ("string" != typeof e.insert) break;
    i = e.insert + i;
  }
  return i.slice(-1 * e.length) === e;
}
function nu(t, e) {
  if (!(t instanceof Element)) return !1;
  let i = e.query(t);
  return (
    (!i || !(i.prototype instanceof e3)) &&
    [
      "address",
      "article",
      "blockquote",
      "canvas",
      "dd",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "iframe",
      "li",
      "main",
      "nav",
      "ol",
      "output",
      "p",
      "pre",
      "section",
      "table",
      "td",
      "tr",
      "ul",
      "video",
    ].includes(t.tagName.toLowerCase())
  );
}
const nd = new WeakMap();
function nf(t, e, i, s, r) {
  return e.nodeType === e.TEXT_NODE
    ? s.reduce((i, s) => s(e, i, t), new (Q(it))())
    : e.nodeType === e.ELEMENT_NODE
    ? Array.from(e.childNodes || []).reduce((n, o) => {
        let l = nf(t, o, i, s, r);
        return (
          o.nodeType === e.ELEMENT_NODE &&
            ((l = i.reduce((e, i) => i(o, e, t), l)),
            (l = (r.get(o) || []).reduce((e, i) => i(o, e, t), l))),
          n.concat(l)
        );
      }, new (Q(it))())
    : new (Q(it))();
}
function np(t) {
  return (e, i, s) => nc(i, t, !0, s);
}
function nm(t, e, i) {
  if (!nh(e, "\n")) {
    if (
      nu(t, i) &&
      (t.childNodes.length > 0 || t instanceof HTMLParagraphElement)
    )
      return e.insert("\n");
    if (e.length() > 0 && t.nextSibling) {
      let s = t.nextSibling;
      for (; null != s; ) {
        if (nu(s, i)) return e.insert("\n");
        let t = i.query(s);
        if (t && t.prototype instanceof sR) return e.insert("\n");
        s = s.firstChild;
      }
    }
  }
  return e;
}
function ng(t, e) {
  let i = e;
  for (let e = t.length - 1; e >= 0; e -= 1) {
    let s = t[e];
    (t[e] = {
      delta: i.transform(s.delta, !0),
      range: s.range && nb(s.range, i),
    }),
      (i = s.delta.transform(i)),
      0 === t[e].delta.length() && t.splice(e, 1);
  }
}
function nb(t, e) {
  if (!t) return t;
  let i = e.transformPosition(t.index);
  return { index: i, length: e.transformPosition(t.index + t.length) - i };
}
class nv extends re {
  constructor(t, e) {
    super(t, e),
      t.root.addEventListener("drop", (e) => {
        e.preventDefault();
        let i = null;
        if (document.caretRangeFromPoint)
          i = document.caretRangeFromPoint(e.clientX, e.clientY);
        else if (document.caretPositionFromPoint) {
          let t = document.caretPositionFromPoint(e.clientX, e.clientY);
          (i = document.createRange()).setStart(t.offsetNode, t.offset),
            i.setEnd(t.offsetNode, t.offset);
        }
        let s = i && t.selection.normalizeNative(i);
        if (s) {
          let i = t.selection.normalizedToRange(s);
          e.dataTransfer?.files && this.upload(i, e.dataTransfer.files);
        }
      });
  }
  upload(t, e) {
    let i = [];
    Array.from(e).forEach((t) => {
      t && this.options.mimetypes?.includes(t.type) && i.push(t);
    }),
      i.length > 0 && this.options.handler.call(this, t, i);
  }
}
nv.DEFAULTS = {
  mimetypes: ["image/png", "image/jpeg"],
  handler(t, e) {
    this.quill.scroll.query("image") &&
      Promise.all(
        e.map(
          (t) =>
            new Promise((e) => {
              let i = new FileReader();
              (i.onload = () => {
                e(i.result);
              }),
                i.readAsDataURL(t);
            })
        )
      ).then((e) => {
        let i = e.reduce(
          (t, e) => t.insert({ image: e }),
          new (Q(it))().retain(t.index).delete(t.length)
        );
        this.quill.updateContents(i, s0.sources.USER),
          this.quill.setSelection(t.index + e.length, s0.sources.SILENT);
      });
  },
};
const ny = ["insertText", "insertReplacementText"];
var nx = class extends re {
  constructor(t, e) {
    super(t, e),
      t.root.addEventListener("beforeinput", (t) => {
        this.handleBeforeInput(t);
      }),
      /Android/i.test(navigator.userAgent) ||
        t.on(rm.events.COMPOSITION_BEFORE_START, () => {
          this.handleCompositionStart();
        });
  }
  deleteRange(t) {
    r2({ range: t, quill: this.quill });
  }
  replaceText(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    if (0 === t.length) return !1;
    if (e) {
      let i = this.quill.getFormat(t.index, 1);
      this.deleteRange(t),
        this.quill.updateContents(
          new (Q(it))().retain(t.index).insert(e, i),
          rm.sources.USER
        );
    } else this.deleteRange(t);
    return (
      this.quill.setSelection(t.index + e.length, 0, rm.sources.SILENT), !0
    );
  }
  handleBeforeInput(t) {
    if (
      this.quill.composition.isComposing ||
      t.defaultPrevented ||
      !ny.includes(t.inputType)
    )
      return;
    let e = t.getTargetRanges ? t.getTargetRanges()[0] : null;
    if (!e || !0 === e.collapsed) return;
    let i =
      "string" == typeof t.data
        ? t.data
        : t.dataTransfer?.types.includes("text/plain")
        ? t.dataTransfer.getData("text/plain")
        : null;
    if (null == i) return;
    let s = this.quill.selection.normalizeNative(e),
      r = s ? this.quill.selection.normalizedToRange(s) : null;
    r && this.replaceText(r, i) && t.preventDefault();
  }
  handleCompositionStart() {
    let t = this.quill.getSelection();
    t && this.replaceText(t);
  }
};
const nE = /Mac/i.test(navigator.platform),
  nw = (t) =>
    "ArrowLeft" === t.key ||
    "ArrowRight" === t.key ||
    "ArrowUp" === t.key ||
    "ArrowDown" === t.key ||
    "Home" === t.key ||
    (!!nE && "a" === t.key && !0 === t.ctrlKey);
var nN = class extends re {
  isListening = !1;
  selectionChangeDeadline = 0;
  constructor(t, e) {
    super(t, e), this.handleArrowKeys(), this.handleNavigationShortcuts();
  }
  handleArrowKeys() {
    this.quill.keyboard.addBinding({
      key: ["ArrowLeft", "ArrowRight"],
      offset: 0,
      shiftKey: null,
      handler(t, e) {
        let { line: i, event: s } = e;
        if (!(i instanceof eG) || !i.uiNode) return !0;
        let r = "rtl" === getComputedStyle(i.domNode).direction;
        return (
          (!!r && "ArrowRight" !== s.key) ||
          (!r && "ArrowLeft" !== s.key) ||
          (this.quill.setSelection(
            t.index - 1,
            t.length + (s.shiftKey ? 1 : 0),
            rm.sources.USER
          ),
          !1)
        );
      },
    });
  }
  handleNavigationShortcuts() {
    this.quill.root.addEventListener("keydown", (t) => {
      !t.defaultPrevented && nw(t) && this.ensureListeningToSelectionChange();
    });
  }
  ensureListeningToSelectionChange() {
    (this.selectionChangeDeadline = Date.now() + 100),
      this.isListening ||
        ((this.isListening = !0),
        document.addEventListener(
          "selectionchange",
          () => {
            (this.isListening = !1),
              Date.now() <= this.selectionChangeDeadline &&
                this.handleSelectionChange();
          },
          { once: !0 }
        ));
  }
  handleSelectionChange() {
    let t = document.getSelection();
    if (!t) return;
    let e = t.getRangeAt(0);
    if (!0 !== e.collapsed || 0 !== e.startOffset) return;
    let i = this.quill.scroll.find(e.startContainer);
    if (!(i instanceof eG) || !i.uiNode) return;
    let s = document.createRange();
    s.setStartAfter(i.uiNode),
      s.setEndAfter(i.uiNode),
      t.removeAllRanges(),
      t.addRange(s);
  }
};
rm.register({
  "blots/block": sj,
  "blots/block/embed": sR,
  "blots/break": sL,
  "blots/container": rw,
  "blots/cursor": sP,
  "blots/embed": ri,
  "blots/inline": sD,
  "blots/scroll": rS,
  "blots/text": sT,
  "modules/clipboard": class extends re {
    static DEFAULTS = { matchers: [] };
    constructor(t, e) {
      super(t, e),
        this.quill.root.addEventListener("copy", (t) =>
          this.onCaptureCopy(t, !1)
        ),
        this.quill.root.addEventListener("cut", (t) =>
          this.onCaptureCopy(t, !0)
        ),
        this.quill.root.addEventListener(
          "paste",
          this.onCapturePaste.bind(this)
        ),
        (this.matchers = []),
        no.concat(this.options.matchers ?? []).forEach((t) => {
          let [e, i] = t;
          this.addMatcher(e, i);
        });
    }
    addMatcher(t, e) {
      this.matchers.push([t, e]);
    }
    convert(t) {
      let { html: e, text: i } = t,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (s[rV.blotName])
        return new (Q(it))().insert(i || "", { [rV.blotName]: s[rV.blotName] });
      if (!e) return new (Q(it))().insert(i || "", s);
      let r = this.convertHTML(e);
      return nh(r, "\n") &&
        (null == r.ops[r.ops.length - 1].attributes || s.table)
        ? r.compose(new (Q(it))().retain(r.length() - 1).delete(1))
        : r;
    }
    normalizeHTML(t) {
      nr(t);
    }
    convertHTML(t) {
      let e = new DOMParser().parseFromString(t, "text/html");
      this.normalizeHTML(e);
      let i = e.body,
        s = new WeakMap(),
        [r, n] = this.prepareMatching(i, s);
      return nf(this.quill.scroll, i, r, n, s);
    }
    dangerouslyPasteHTML(t, e) {
      let i =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : rm.sources.API;
      if ("string" == typeof t) {
        let i = this.convert({ html: t, text: "" });
        this.quill.setContents(i, e),
          this.quill.setSelection(0, rm.sources.SILENT);
      } else {
        let s = this.convert({ html: e, text: "" });
        this.quill.updateContents(new (Q(it))().retain(t).concat(s), i),
          this.quill.setSelection(t + s.length(), rm.sources.SILENT);
      }
    }
    onCaptureCopy(t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (t.defaultPrevented) return;
      t.preventDefault();
      let [i] = this.quill.selection.getRange();
      if (null == i) return;
      let { html: s, text: r } = this.onCopy(i, e);
      t.clipboardData?.setData("text/plain", r),
        t.clipboardData?.setData("text/html", s),
        e && r2({ range: i, quill: this.quill });
    }
    normalizeURIList(t) {
      return t
        .split(/\r?\n/)
        .filter((t) => "#" !== t[0])
        .join("\n");
    }
    onCapturePaste(t) {
      if (t.defaultPrevented || !this.quill.isEnabled()) return;
      t.preventDefault();
      let e = this.quill.getSelection(!0);
      if (null == e) return;
      let i = t.clipboardData?.getData("text/html"),
        s = t.clipboardData?.getData("text/plain");
      if (!i && !s) {
        let e = t.clipboardData?.getData("text/uri-list");
        e && (s = this.normalizeURIList(e));
      }
      let r = Array.from(t.clipboardData?.files || []);
      if (!i && r.length > 0) {
        this.quill.uploader.upload(e, r);
        return;
      }
      if (i && r.length > 0) {
        let t = new DOMParser().parseFromString(i, "text/html");
        if (
          1 === t.body.childElementCount &&
          t.body.firstElementChild?.tagName === "IMG"
        ) {
          this.quill.uploader.upload(e, r);
          return;
        }
      }
      this.onPaste(e, { html: i, text: s });
    }
    onCopy(t) {
      let e = this.quill.getText(t);
      return { html: this.quill.getSemanticHTML(t), text: e };
    }
    onPaste(t, e) {
      let { text: i, html: s } = e,
        r = this.quill.getFormat(t.index),
        n = this.convert({ text: i, html: s }, r);
      nn.log("onPaste", n, { text: i, html: s });
      let o = new (Q(it))().retain(t.index).delete(t.length).concat(n);
      this.quill.updateContents(o, rm.sources.USER),
        this.quill.setSelection(o.length() - t.length, rm.sources.SILENT),
        this.quill.scrollSelectionIntoView();
    }
    prepareMatching(t, e) {
      let i = [],
        s = [];
      return (
        this.matchers.forEach((r) => {
          let [n, o] = r;
          switch (n) {
            case Node.TEXT_NODE:
              s.push(o);
              break;
            case Node.ELEMENT_NODE:
              i.push(o);
              break;
            default:
              Array.from(t.querySelectorAll(n)).forEach((t) => {
                if (e.has(t)) {
                  let i = e.get(t);
                  i?.push(o);
                } else e.set(t, [o]);
              });
          }
        }),
        [i, s]
      );
    }
  },
  "modules/history": class extends re {
    static DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: !1 };
    lastRecorded = 0;
    ignoreChange = !1;
    stack = { undo: [], redo: [] };
    currentRange = null;
    constructor(t, e) {
      super(t, e),
        this.quill.on(rm.events.EDITOR_CHANGE, (t, e, i, s) => {
          t === rm.events.SELECTION_CHANGE
            ? e && s !== rm.sources.SILENT && (this.currentRange = e)
            : t === rm.events.TEXT_CHANGE &&
              (this.ignoreChange ||
                (this.options.userOnly && s !== rm.sources.USER
                  ? this.transform(e)
                  : this.record(e, i)),
              (this.currentRange = nb(this.currentRange, e)));
        }),
        this.quill.keyboard.addBinding(
          { key: "z", shortKey: !0 },
          this.undo.bind(this)
        ),
        this.quill.keyboard.addBinding(
          { key: ["z", "Z"], shortKey: !0, shiftKey: !0 },
          this.redo.bind(this)
        ),
        /Win/i.test(navigator.platform) &&
          this.quill.keyboard.addBinding(
            { key: "y", shortKey: !0 },
            this.redo.bind(this)
          ),
        this.quill.root.addEventListener("beforeinput", (t) => {
          "historyUndo" === t.inputType
            ? (this.undo(), t.preventDefault())
            : "historyRedo" === t.inputType &&
              (this.redo(), t.preventDefault());
        });
    }
    change(t, e) {
      if (0 === this.stack[t].length) return;
      let i = this.stack[t].pop();
      if (!i) return;
      let s = this.quill.getContents(),
        r = i.delta.invert(s);
      this.stack[e].push({ delta: r, range: nb(i.range, r) }),
        (this.lastRecorded = 0),
        (this.ignoreChange = !0),
        this.quill.updateContents(i.delta, rm.sources.USER),
        (this.ignoreChange = !1),
        this.restoreSelection(i);
    }
    clear() {
      this.stack = { undo: [], redo: [] };
    }
    cutoff() {
      this.lastRecorded = 0;
    }
    record(t, e) {
      if (0 === t.ops.length) return;
      this.stack.redo = [];
      let i = t.invert(e),
        s = this.currentRange,
        r = Date.now();
      if (
        this.lastRecorded + this.options.delay > r &&
        this.stack.undo.length > 0
      ) {
        let t = this.stack.undo.pop();
        t && ((i = i.compose(t.delta)), (s = t.range));
      } else this.lastRecorded = r;
      0 !== i.length() &&
        (this.stack.undo.push({ delta: i, range: s }),
        this.stack.undo.length > this.options.maxStack &&
          this.stack.undo.shift());
    }
    redo() {
      this.change("redo", "undo");
    }
    transform(t) {
      ng(this.stack.undo, t), ng(this.stack.redo, t);
    }
    undo() {
      this.change("undo", "redo");
    }
    restoreSelection(t) {
      if (t.range) this.quill.setSelection(t.range, rm.sources.USER);
      else {
        let e = (function (t, e) {
          let i = e.reduce((t, e) => t + (e.delete || 0), 0),
            s = e.length() - i;
          return (
            (function (t, e) {
              let i = e.ops[e.ops.length - 1];
              return (
                null != i &&
                (null != i.insert
                  ? "string" == typeof i.insert && i.insert.endsWith("\n")
                  : null != i.attributes &&
                    Object.keys(i.attributes).some(
                      (e) => null != t.query(e, eD.BLOCK)
                    ))
              );
            })(t, e) && (s -= 1),
            s
          );
        })(this.quill.scroll, t.delta);
        this.quill.setSelection(e, rm.sources.USER);
      }
    }
  },
  "modules/keyboard": rX,
  "modules/uploader": nv,
  "modules/input": nx,
  "modules/uiNode": nN,
});
const n_ = new (class extends e$ {
  add(t, e) {
    let i = 0;
    if ("+1" === e || "-1" === e) {
      let s = this.value(t) || 0;
      i = "+1" === e ? s + 1 : s - 1;
    } else "number" == typeof e && (i = e);
    return 0 === i ? (this.remove(t), !0) : super.add(t, i.toString());
  }
  canAdd(t, e) {
    return super.canAdd(t, e) || super.canAdd(t, parseInt(e, 10));
  }
  value(t) {
    return parseInt(super.value(t), 10) || void 0;
  }
})("indent", "ql-indent", {
  scope: eD.BLOCK,
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8],
});
var nA = class extends sj {
    static blotName = "blockquote";
    static tagName = "blockquote";
  },
  nS = class extends sj {
    static blotName = "header";
    static tagName = ["H1", "H2", "H3", "H4", "H5", "H6"];
    static formats(t) {
      return this.tagName.indexOf(t.tagName) + 1;
    }
  };
class nk extends rw {}
(nk.blotName = "list-container"), (nk.tagName = "OL");
class nO extends sj {
  static create(t) {
    let e = super.create();
    return e.setAttribute("data-list", t), e;
  }
  static formats(t) {
    return t.getAttribute("data-list") || void 0;
  }
  static register() {
    rm.register(nk);
  }
  constructor(t, e) {
    super(t, e);
    let i = e.ownerDocument.createElement("span"),
      s = (i) => {
        if (!t.isEnabled()) return;
        let s = this.statics.formats(e, t);
        "checked" === s
          ? (this.format("list", "unchecked"), i.preventDefault())
          : "unchecked" === s &&
            (this.format("list", "checked"), i.preventDefault());
      };
    i.addEventListener("mousedown", s),
      i.addEventListener("touchstart", s),
      this.attachUI(i);
  }
  format(t, e) {
    t === this.statics.blotName && e
      ? this.domNode.setAttribute("data-list", e)
      : super.format(t, e);
  }
}
(nO.blotName = "list"),
  (nO.tagName = "LI"),
  (nk.allowedChildren = [nO]),
  (nO.requiredContainer = nk);
var nL = class extends sD {
  static blotName = "bold";
  static tagName = ["STRONG", "B"];
  static create() {
    return super.create();
  }
  static formats() {
    return !0;
  }
  optimize(t) {
    super.optimize(t),
      this.domNode.tagName !== this.statics.tagName[0] &&
        this.replaceWith(this.statics.blotName);
  }
};
class nT extends sD {
  static blotName = "link";
  static tagName = "A";
  static SANITIZED_URL = "about:blank";
  static PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel", "sms"];
  static create(t) {
    let e = super.create(t);
    return (
      e.setAttribute("href", this.sanitize(t)),
      e.setAttribute("rel", "noopener noreferrer"),
      e.setAttribute("target", "_blank"),
      e
    );
  }
  static formats(t) {
    return t.getAttribute("href");
  }
  static sanitize(t) {
    return nC(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL;
  }
  format(t, e) {
    t === this.statics.blotName && e
      ? this.domNode.setAttribute("href", this.constructor.sanitize(e))
      : super.format(t, e);
  }
}
function nC(t, e) {
  let i = document.createElement("a");
  i.href = t;
  let s = i.href.slice(0, i.href.indexOf(":"));
  return e.indexOf(s) > -1;
}
var nq = class extends sD {
    static blotName = "script";
    static tagName = ["SUB", "SUP"];
    static create(t) {
      return "super" === t
        ? document.createElement("sup")
        : "sub" === t
        ? document.createElement("sub")
        : super.create(t);
    }
    static formats(t) {
      return "SUB" === t.tagName
        ? "sub"
        : "SUP" === t.tagName
        ? "super"
        : void 0;
    }
  },
  nM = class extends sD {
    static blotName = "underline";
    static tagName = "U";
  },
  nD = class extends ri {
    static blotName = "formula";
    static className = "ql-formula";
    static tagName = "SPAN";
    static create(t) {
      if (null == window.katex) throw Error("Formula module requires KaTeX.");
      let e = super.create(t);
      return (
        "string" == typeof t &&
          (window.katex.render(t, e, { throwOnError: !1, errorColor: "#f00" }),
          e.setAttribute("data-value", t)),
        e
      );
    }
    static value(t) {
      return t.getAttribute("data-value");
    }
    html() {
      let { formula: t } = this.value();
      return `<span>${t}</span>`;
    }
  };
const nj = ["alt", "height", "width"];
var nR = class extends e3 {
  static blotName = "image";
  static tagName = "IMG";
  static create(t) {
    let e = super.create(t);
    return "string" == typeof t && e.setAttribute("src", this.sanitize(t)), e;
  }
  static formats(t) {
    return nj.reduce(
      (e, i) => (t.hasAttribute(i) && (e[i] = t.getAttribute(i)), e),
      {}
    );
  }
  static match(t) {
    return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t);
  }
  static sanitize(t) {
    return nC(t, ["http", "https", "data"]) ? t : "//:0";
  }
  static value(t) {
    return t.getAttribute("src");
  }
  format(t, e) {
    nj.indexOf(t) > -1
      ? e
        ? this.domNode.setAttribute(t, e)
        : this.domNode.removeAttribute(t)
      : super.format(t, e);
  }
};
const nV = ["height", "width"];
var nI = class extends sR {
  static blotName = "video";
  static className = "ql-video";
  static tagName = "IFRAME";
  static create(t) {
    let e = super.create(t);
    return (
      e.setAttribute("frameborder", "0"),
      e.setAttribute("allowfullscreen", "true"),
      e.setAttribute("src", this.sanitize(t)),
      e
    );
  }
  static formats(t) {
    return nV.reduce(
      (e, i) => (t.hasAttribute(i) && (e[i] = t.getAttribute(i)), e),
      {}
    );
  }
  static sanitize(t) {
    return nT.sanitize(t);
  }
  static value(t) {
    return t.getAttribute("src");
  }
  format(t, e) {
    nV.indexOf(t) > -1
      ? e
        ? this.domNode.setAttribute(t, e)
        : this.domNode.removeAttribute(t)
      : super.format(t, e);
  }
  html() {
    let { video: t } = this.value();
    return `<a href="${t}">${t}</a>`;
  }
};
const nP = new e$("code-token", "hljs", { scope: eD.INLINE });
class n$ extends sD {
  static formats(t, e) {
    for (; null != t && t !== e.domNode; ) {
      if (t.classList && t.classList.contains(rV.className))
        return super.formats(t, e);
      t = t.parentNode;
    }
  }
  constructor(t, e, i) {
    super(t, e, i), nP.add(this.domNode, i);
  }
  format(t, e) {
    t !== n$.blotName
      ? super.format(t, e)
      : e
      ? nP.add(this.domNode, e)
      : (nP.remove(this.domNode),
        this.domNode.classList.remove(this.statics.className));
  }
  optimize() {
    super.optimize(...arguments), nP.value(this.domNode) || this.unwrap();
  }
}
(n$.blotName = "code-token"), (n$.className = "ql-token");
class nB extends rV {
  static create(t) {
    let e = super.create(t);
    return "string" == typeof t && e.setAttribute("data-language", t), e;
  }
  static formats(t) {
    return t.getAttribute("data-language") || "plain";
  }
  static register() {}
  format(t, e) {
    t === this.statics.blotName && e
      ? this.domNode.setAttribute("data-language", e)
      : super.format(t, e);
  }
  replaceWith(t, e) {
    return (
      this.formatAt(0, this.length(), n$.blotName, !1), super.replaceWith(t, e)
    );
  }
}
class nU extends rR {
  attach() {
    super.attach(), (this.forceNext = !1), this.scroll.emitMount(this);
  }
  format(t, e) {
    t === nB.blotName &&
      ((this.forceNext = !0),
      this.children.forEach((i) => {
        i.format(t, e);
      }));
  }
  formatAt(t, e, i, s) {
    i === nB.blotName && (this.forceNext = !0), super.formatAt(t, e, i, s);
  }
  highlight(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == this.children.head) return;
    let i = Array.from(this.domNode.childNodes).filter(
        (t) => t !== this.uiNode
      ),
      s = `${i.map((t) => t.textContent).join("\n")}
`,
      r = nB.formats(this.children.head.domNode);
    if (e || this.forceNext || this.cachedText !== s) {
      if (s.trim().length > 0 || null == this.cachedText) {
        let e = this.children.reduce(
            (t, e) => t.concat(sV(e, !1)),
            new (Q(it))()
          ),
          i = t(s, r);
        e.diff(i).reduce((t, e) => {
          let { retain: i, attributes: s } = e;
          return i
            ? (s &&
                Object.keys(s).forEach((e) => {
                  [nB.blotName, n$.blotName].includes(e) &&
                    this.formatAt(t, i, e, s[e]);
                }),
              t + i)
            : t;
        }, 0);
      }
      (this.cachedText = s), (this.forceNext = !1);
    }
  }
  html(t, e) {
    let [i] = this.children.find(t),
      s = i ? nB.formats(i.domNode) : "plain";
    return `<pre data-language="${s}">
${sq(this.code(t, e))}
</pre>`;
  }
  optimize(t) {
    if (
      (super.optimize(t),
      null != this.parent && null != this.children.head && null != this.uiNode)
    ) {
      let t = nB.formats(this.children.head.domNode);
      t !== this.uiNode.value && (this.uiNode.value = t);
    }
  }
}
(nU.allowedChildren = [nB]),
  (nB.requiredContainer = nU),
  (nB.allowedChildren = [n$, sP, sT, sL]);
const nH = (t, e, i) =>
  "string" == typeof t.versionString &&
  parseInt(t.versionString.split(".")[0], 10) >= 11
    ? t.highlight(i, { language: e }).value
    : t.highlight(e, i).value;
class nz extends re {
  static register() {
    rm.register(n$, !0), rm.register(nB, !0), rm.register(nU, !0);
  }
  constructor(t, e) {
    if ((super(t, e), null == this.options.hljs))
      throw Error(
        "Syntax module requires highlight.js. Please include the library on the page before Quill."
      );
    (this.languages = this.options.languages.reduce((t, e) => {
      let { key: i } = e;
      return (t[i] = !0), t;
    }, {})),
      (this.highlightBlot = this.highlightBlot.bind(this)),
      this.initListener(),
      this.initTimer();
  }
  initListener() {
    this.quill.on(rm.events.SCROLL_BLOT_MOUNT, (t) => {
      if (!(t instanceof nU)) return;
      let e = this.quill.root.ownerDocument.createElement("select");
      this.options.languages.forEach((t) => {
        let { key: i, label: s } = t,
          r = e.ownerDocument.createElement("option");
        (r.textContent = s), r.setAttribute("value", i), e.appendChild(r);
      }),
        e.addEventListener("change", () => {
          t.format(nB.blotName, e.value),
            this.quill.root.focus(),
            this.highlight(t, !0);
        }),
        null == t.uiNode &&
          (t.attachUI(e),
          t.children.head && (e.value = nB.formats(t.children.head.domNode)));
    });
  }
  initTimer() {
    let t = null;
    this.quill.on(rm.events.SCROLL_OPTIMIZE, () => {
      t && clearTimeout(t),
        (t = setTimeout(() => {
          this.highlight(), (t = null);
        }, this.options.interval));
    });
  }
  highlight() {
    let t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
      e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this.quill.selection.composing) return;
    this.quill.update(rm.sources.USER);
    let i = this.quill.getSelection();
    (null == t ? this.quill.scroll.descendants(nU) : [t]).forEach((t) => {
      t.highlight(this.highlightBlot, e);
    }),
      this.quill.update(rm.sources.SILENT),
      null != i && this.quill.setSelection(i, rm.sources.SILENT);
  }
  highlightBlot(t) {
    let e =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "plain";
    if ("plain" === (e = this.languages[e] ? e : "plain"))
      return sq(t)
        .split("\n")
        .reduce(
          (t, i, s) => (
            0 !== s && t.insert("\n", { [rV.blotName]: e }), t.insert(i)
          ),
          new (Q(it))()
        );
    let i = this.quill.root.ownerDocument.createElement("div");
    return (
      i.classList.add(rV.className),
      (i.innerHTML = nH(this.options.hljs, e, t)),
      nf(
        this.quill.scroll,
        i,
        [
          (t, e) => {
            let i = nP.value(t);
            return i
              ? e.compose(
                  new (Q(it))().retain(e.length(), { [n$.blotName]: i })
                )
              : e;
          },
        ],
        [
          (t, i) =>
            t.data
              .split("\n")
              .reduce(
                (t, i, s) => (
                  0 !== s && t.insert("\n", { [rV.blotName]: e }), t.insert(i)
                ),
                i
              ),
        ],
        new WeakMap()
      )
    );
  }
}
nz.DEFAULTS = {
  hljs: window.hljs,
  interval: 1e3,
  languages: [
    { key: "plain", label: "Plain" },
    { key: "bash", label: "Bash" },
    { key: "cpp", label: "C++" },
    { key: "cs", label: "C#" },
    { key: "css", label: "CSS" },
    { key: "diff", label: "Diff" },
    { key: "xml", label: "HTML/XML" },
    { key: "java", label: "Java" },
    { key: "javascript", label: "JavaScript" },
    { key: "markdown", label: "Markdown" },
    { key: "php", label: "PHP" },
    { key: "python", label: "Python" },
    { key: "ruby", label: "Ruby" },
    { key: "sql", label: "SQL" },
  ],
};
class nF extends sj {
  static blotName = "table";
  static tagName = "TD";
  static create(t) {
    let e = super.create();
    return (
      t ? e.setAttribute("data-row", t) : e.setAttribute("data-row", nZ()), e
    );
  }
  static formats(t) {
    if (t.hasAttribute("data-row")) return t.getAttribute("data-row");
  }
  cellOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  format(t, e) {
    t === nF.blotName && e
      ? this.domNode.setAttribute("data-row", e)
      : super.format(t, e);
  }
  row() {
    return this.parent;
  }
  rowOffset() {
    return this.row() ? this.row().rowOffset() : -1;
  }
  table() {
    return this.row() && this.row().table();
  }
}
class nW extends rw {
  static blotName = "table-row";
  static tagName = "TR";
  checkMerge() {
    if (super.checkMerge() && null != this.next.children.head) {
      let t = this.children.head.formats(),
        e = this.children.tail.formats(),
        i = this.next.children.head.formats(),
        s = this.next.children.tail.formats();
      return t.table === e.table && t.table === i.table && t.table === s.table;
    }
    return !1;
  }
  optimize(t) {
    super.optimize(t),
      this.children.forEach((t) => {
        if (null == t.next) return;
        let e = t.formats(),
          i = t.next.formats();
        if (e.table !== i.table) {
          let e = this.splitAfter(t);
          e && e.optimize(), this.prev && this.prev.optimize();
        }
      });
  }
  rowOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  table() {
    return this.parent && this.parent.parent;
  }
}
class nY extends rw {
  static blotName = "table-body";
  static tagName = "TBODY";
}
class nK extends rw {
  static blotName = "table-container";
  static tagName = "TABLE";
  balanceCells() {
    let t = this.descendants(nW),
      e = t.reduce((t, e) => Math.max(e.children.length, t), 0);
    t.forEach((t) => {
      Array(e - t.children.length)
        .fill(0)
        .forEach(() => {
          let e;
          null != t.children.head && (e = nF.formats(t.children.head.domNode));
          let i = this.scroll.create(nF.blotName, e);
          t.appendChild(i), i.optimize();
        });
    });
  }
  cells(t) {
    return this.rows().map((e) => e.children.at(t));
  }
  deleteColumn(t) {
    let [e] = this.descendant(nY);
    null != e &&
      null != e.children.head &&
      e.children.forEach((e) => {
        let i = e.children.at(t);
        null != i && i.remove();
      });
  }
  insertColumn(t) {
    let [e] = this.descendant(nY);
    null != e &&
      null != e.children.head &&
      e.children.forEach((e) => {
        let i = e.children.at(t),
          s = nF.formats(e.children.head.domNode),
          r = this.scroll.create(nF.blotName, s);
        e.insertBefore(r, i);
      });
  }
  insertRow(t) {
    let [e] = this.descendant(nY);
    if (null == e || null == e.children.head) return;
    let i = nZ(),
      s = this.scroll.create(nW.blotName);
    e.children.head.children.forEach(() => {
      let t = this.scroll.create(nF.blotName, i);
      s.appendChild(t);
    });
    let r = e.children.at(t);
    e.insertBefore(s, r);
  }
  rows() {
    let t = this.children.head;
    return null == t ? [] : t.children.map((t) => t);
  }
}
function nZ() {
  let t = Math.random().toString(36).slice(2, 6);
  return `row-${t}`;
}
(nK.allowedChildren = [nY]),
  (nY.requiredContainer = nK),
  (nY.allowedChildren = [nW]),
  (nW.requiredContainer = nY),
  (nW.allowedChildren = [nF]),
  (nF.requiredContainer = nW);
var nX = class extends re {
  static register() {
    rm.register(nF), rm.register(nW), rm.register(nY), rm.register(nK);
  }
  constructor() {
    super(...arguments), this.listenBalanceCells();
  }
  balanceTables() {
    this.quill.scroll.descendants(nK).forEach((t) => {
      t.balanceCells();
    });
  }
  deleteColumn() {
    let [t, , e] = this.getTable();
    null != e &&
      (t.deleteColumn(e.cellOffset()), this.quill.update(rm.sources.USER));
  }
  deleteRow() {
    let [, t] = this.getTable();
    null != t && (t.remove(), this.quill.update(rm.sources.USER));
  }
  deleteTable() {
    let [t] = this.getTable();
    if (null == t) return;
    let e = t.offset();
    t.remove(),
      this.quill.update(rm.sources.USER),
      this.quill.setSelection(e, rm.sources.SILENT);
  }
  getTable() {
    let t =
      arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : this.quill.getSelection();
    if (null == t) return [null, null, null, -1];
    let [e, i] = this.quill.getLine(t.index);
    if (null == e || e.statics.blotName !== nF.blotName)
      return [null, null, null, -1];
    let s = e.parent;
    return [s.parent.parent, s, e, i];
  }
  insertColumn(t) {
    let e = this.quill.getSelection();
    if (!e) return;
    let [i, s, r] = this.getTable(e);
    if (null == r) return;
    let n = r.cellOffset();
    i.insertColumn(n + t), this.quill.update(rm.sources.USER);
    let o = s.rowOffset();
    0 === t && (o += 1),
      this.quill.setSelection(e.index + o, e.length, rm.sources.SILENT);
  }
  insertColumnLeft() {
    this.insertColumn(0);
  }
  insertColumnRight() {
    this.insertColumn(1);
  }
  insertRow(t) {
    let e = this.quill.getSelection();
    if (!e) return;
    let [i, s, r] = this.getTable(e);
    if (null == r) return;
    let n = s.rowOffset();
    i.insertRow(n + t),
      this.quill.update(rm.sources.USER),
      t > 0
        ? this.quill.setSelection(e, rm.sources.SILENT)
        : this.quill.setSelection(
            e.index + s.children.length,
            e.length,
            rm.sources.SILENT
          );
  }
  insertRowAbove() {
    this.insertRow(0);
  }
  insertRowBelow() {
    this.insertRow(1);
  }
  insertTable(t, e) {
    let i = this.quill.getSelection();
    if (null == i) return;
    let s = Array(t)
      .fill(0)
      .reduce((t) => {
        let i = Array(e).fill("\n").join("");
        return t.insert(i, { table: nZ() });
      }, new (Q(it))().retain(i.index));
    this.quill.updateContents(s, rm.sources.USER),
      this.quill.setSelection(i.index, rm.sources.SILENT),
      this.balanceTables();
  }
  listenBalanceCells() {
    this.quill.on(rm.events.SCROLL_OPTIMIZE, (t) => {
      t.some(
        (t) =>
          !!["TD", "TR", "TBODY", "TABLE"].includes(t.target.tagName) &&
          (this.quill.once(rm.events.TEXT_CHANGE, (t, e, i) => {
            i === rm.sources.USER && this.balanceTables();
          }),
          !0)
      );
    });
  }
};
const nG = sQ("quill:toolbar");
class nQ extends re {
  constructor(t, e) {
    if ((super(t, e), Array.isArray(this.options.container))) {
      var i;
      let e = document.createElement("div");
      e.setAttribute("role", "toolbar"),
        Array.isArray((i = this.options.container)[0]) || (i = [i]),
        i.forEach((t) => {
          let i = document.createElement("span");
          i.classList.add("ql-formats"),
            t.forEach((t) => {
              if ("string" == typeof t) nJ(i, t);
              else {
                let e = Object.keys(t)[0],
                  s = t[e];
                Array.isArray(s)
                  ? (function (t, e, i) {
                      let s = document.createElement("select");
                      s.classList.add(`ql-${e}`),
                        i.forEach((t) => {
                          let e = document.createElement("option");
                          !1 !== t
                            ? e.setAttribute("value", String(t))
                            : e.setAttribute("selected", "selected"),
                            s.appendChild(e);
                        }),
                        t.appendChild(s);
                    })(i, e, s)
                  : nJ(i, e, s);
              }
            }),
            e.appendChild(i);
        }),
        t.container?.parentNode?.insertBefore(e, t.container),
        (this.container = e);
    } else
      "string" == typeof this.options.container
        ? (this.container = document.querySelector(this.options.container))
        : (this.container = this.options.container);
    if (!(this.container instanceof HTMLElement)) {
      nG.error("Container required for toolbar", this.options);
      return;
    }
    this.container.classList.add("ql-toolbar"),
      (this.controls = []),
      (this.handlers = {}),
      this.options.handlers &&
        Object.keys(this.options.handlers).forEach((t) => {
          let e = this.options.handlers?.[t];
          e && this.addHandler(t, e);
        }),
      Array.from(this.container.querySelectorAll("button, select")).forEach(
        (t) => {
          this.attach(t);
        }
      ),
      this.quill.on(rm.events.EDITOR_CHANGE, () => {
        let [t] = this.quill.selection.getRange();
        this.update(t);
      });
  }
  addHandler(t, e) {
    this.handlers[t] = e;
  }
  attach(t) {
    let e = Array.from(t.classList).find((t) => 0 === t.indexOf("ql-"));
    if (!e) return;
    if (
      ((e = e.slice(3)),
      "BUTTON" === t.tagName && t.setAttribute("type", "button"),
      null == this.handlers[e] && null == this.quill.scroll.query(e))
    ) {
      nG.warn("ignoring attaching to nonexistent format", e, t);
      return;
    }
    let i = "SELECT" === t.tagName ? "change" : "click";
    t.addEventListener(i, (i) => {
      let s;
      if ("SELECT" === t.tagName) {
        if (t.selectedIndex < 0) return;
        let e = t.options[t.selectedIndex];
        s = !e.hasAttribute("selected") && (e.value || !1);
      } else
        (s =
          !t.classList.contains("ql-active") &&
          (t.value || !t.hasAttribute("value"))),
          i.preventDefault();
      this.quill.focus();
      let [r] = this.quill.selection.getRange();
      if (null != this.handlers[e]) this.handlers[e].call(this, s);
      else if (this.quill.scroll.query(e).prototype instanceof e3) {
        if (!(s = prompt(`Enter ${e}`))) return;
        this.quill.updateContents(
          new (Q(it))()
            .retain(r.index)
            .delete(r.length)
            .insert({ [e]: s }),
          rm.sources.USER
        );
      } else this.quill.format(e, s, rm.sources.USER);
      this.update(r);
    }),
      this.controls.push([e, t]);
  }
  update(t) {
    let e = null == t ? {} : this.quill.getFormat(t);
    this.controls.forEach((i) => {
      let [s, r] = i;
      if ("SELECT" === r.tagName) {
        let i = null;
        if (null == t) i = null;
        else if (null == e[s]) i = r.querySelector("option[selected]");
        else if (!Array.isArray(e[s])) {
          let t = e[s];
          "string" == typeof t && (t = t.replace(/"/g, '\\"')),
            (i = r.querySelector(`option[value="${t}"]`));
        }
        null == i
          ? ((r.value = ""), (r.selectedIndex = -1))
          : (i.selected = !0);
      } else if (null == t)
        r.classList.remove("ql-active"),
          r.setAttribute("aria-pressed", "false");
      else if (r.hasAttribute("value")) {
        let t = e[s],
          i =
            t === r.getAttribute("value") ||
            (null != t && t.toString() === r.getAttribute("value")) ||
            (null == t && !r.getAttribute("value"));
        r.classList.toggle("ql-active", i),
          r.setAttribute("aria-pressed", i.toString());
      } else {
        let t = null != e[s];
        r.classList.toggle("ql-active", t),
          r.setAttribute("aria-pressed", t.toString());
      }
    });
  }
}
function nJ(t, e, i) {
  let s = document.createElement("button");
  s.setAttribute("type", "button"),
    s.classList.add(`ql-${e}`),
    s.setAttribute("aria-pressed", "false"),
    null != i
      ? ((s.value = i), s.setAttribute("aria-label", `${e}: ${i}`))
      : s.setAttribute("aria-label", e),
    t.appendChild(s);
}
(nQ.DEFAULTS = {}),
  (nQ.DEFAULTS = {
    container: null,
    handlers: {
      clean() {
        let t = this.quill.getSelection();
        null != t &&
          (0 === t.length
            ? Object.keys(this.quill.getFormat()).forEach((t) => {
                null != this.quill.scroll.query(t, eD.INLINE) &&
                  this.quill.format(t, !1, rm.sources.USER);
              })
            : this.quill.removeFormat(t.index, t.length, rm.sources.USER));
      },
      direction(t) {
        let { align: e } = this.quill.getFormat();
        "rtl" === t && null == e
          ? this.quill.format("align", "right", rm.sources.USER)
          : t ||
            "right" !== e ||
            this.quill.format("align", !1, rm.sources.USER),
          this.quill.format("direction", t, rm.sources.USER);
      },
      indent(t) {
        let e = this.quill.getSelection(),
          i = this.quill.getFormat(e),
          s = parseInt(i.indent || 0, 10);
        if ("+1" === t || "-1" === t) {
          let e = "+1" === t ? 1 : -1;
          "rtl" === i.direction && (e *= -1),
            this.quill.format("indent", s + e, rm.sources.USER);
        }
      },
      link(t) {
        !0 === t && (t = prompt("Enter link URL:")),
          this.quill.format("link", t, rm.sources.USER);
      },
      list(t) {
        let e = this.quill.getSelection(),
          i = this.quill.getFormat(e);
        "check" === t
          ? "checked" === i.list || "unchecked" === i.list
            ? this.quill.format("list", !1, rm.sources.USER)
            : this.quill.format("list", "unchecked", rm.sources.USER)
          : this.quill.format("list", t, rm.sources.USER);
      },
    },
  });
const n0 =
  '<svg viewbox="0 0 18 18"><polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"/><polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"/><line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"/></svg>';
var n1 = {
  align: {
    "": '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"/></svg>',
    center:
      '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"/><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"/></svg>',
    right:
      '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"/></svg>',
    justify:
      '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"/></svg>',
  },
  background:
    '<svg viewbox="0 0 18 18"><g class="ql-fill ql-color-label"><polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"/><rect height="1" width="1" x="4" y="4"/><polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"/><rect height="1" width="1" x="2" y="6"/><rect height="1" width="1" x="3" y="5"/><rect height="1" width="1" x="4" y="7"/><polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"/><rect height="1" width="1" x="2" y="12"/><rect height="1" width="1" x="2" y="9"/><rect height="1" width="1" x="2" y="15"/><polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"/><rect height="1" width="1" x="3" y="8"/><path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"/><path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"/><path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"/><rect height="1" width="1" x="12" y="2"/><rect height="1" width="1" x="11" y="3"/><path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"/><rect height="1" width="1" x="2" y="3"/><rect height="1" width="1" x="6" y="2"/><rect height="1" width="1" x="3" y="2"/><rect height="1" width="1" x="5" y="3"/><rect height="1" width="1" x="9" y="2"/><rect height="1" width="1" x="15" y="14"/><polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"/><rect height="1" width="1" x="13" y="7"/><rect height="1" width="1" x="15" y="5"/><rect height="1" width="1" x="14" y="6"/><rect height="1" width="1" x="15" y="8"/><rect height="1" width="1" x="14" y="9"/><path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"/><rect height="1" width="1" x="14" y="3"/><polygon points="12 6.868 12 6 11.62 6 12 6.868"/><rect height="1" width="1" x="15" y="2"/><rect height="1" width="1" x="12" y="5"/><rect height="1" width="1" x="13" y="4"/><polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"/><rect height="1" width="1" x="9" y="14"/><rect height="1" width="1" x="8" y="15"/><path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"/><rect height="1" width="1" x="5" y="15"/><path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"/><rect height="1" width="1" x="11" y="15"/><path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"/><rect height="1" width="1" x="14" y="15"/><rect height="1" width="1" x="15" y="11"/></g><polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"/></svg>',
  blockquote:
    '<svg viewbox="0 0 18 18"><rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"/><rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"/><path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"/><path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"/></svg>',
  bold: '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/><path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/></svg>',
  clean:
    '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"/><line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"/><line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"/><line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"/></svg>',
  code: n0,
  "code-block": n0,
  color:
    '<svg viewbox="0 0 18 18"><line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"/><polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"/></svg>',
  direction: {
    "": '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"/><line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"/><path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"/><rect class="ql-fill" height="11" width="1" x="11" y="4"/><rect class="ql-fill" height="11" width="1" x="13" y="4"/></svg>',
    rtl: '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"/><line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"/><path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"/><rect class="ql-fill" height="11" width="1" x="5" y="4"/><rect class="ql-fill" height="11" width="1" x="7" y="4"/></svg>',
  },
  formula:
    '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"/><rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"/></svg>',
  header: {
    1: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/></svg>',
    2: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>',
    3: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>',
    4: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z"/></svg>',
    5: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>',
    6: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"/></svg>',
  },
  italic:
    '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"/><line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"/><line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"/></svg>',
  image:
    '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4"/><circle class="ql-fill" cx="6" cy="7" r="1"/><polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"/></svg>',
  indent: {
    "+1": '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"/></svg>',
    "-1": '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"/></svg>',
  },
  link: '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"/><path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>',
  list: {
    bullet:
      '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"/><line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"/></svg>',
    check:
      '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"/><polyline class="ql-stroke" points="3 4 4 5 6 3"/><line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"/><polyline class="ql-stroke" points="3 14 4 15 6 13"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="3 9 4 10 6 8"/></svg>',
    ordered:
      '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"/><line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"/><path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"/><path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"/><path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"/></svg>',
  },
  script: {
    sub: '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/><path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/></svg>',
    super:
      '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/><path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/></svg>',
  },
  strike:
    '<svg viewbox="0 0 18 18"><line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"/><path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"/><path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"/></svg>',
  table:
    '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="2" width="3" x="5" y="5"/><rect class="ql-fill" height="2" width="4" x="9" y="5"/><g class="ql-fill ql-transparent"><rect height="2" width="3" x="5" y="8"/><rect height="2" width="4" x="9" y="8"/><rect height="2" width="3" x="5" y="11"/><rect height="2" width="4" x="9" y="11"/></g></svg>',
  underline:
    '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"/></svg>',
  video:
    '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="12" width="1" x="5" y="3"/><rect class="ql-fill" height="12" width="1" x="12" y="3"/><rect class="ql-fill" height="2" width="8" x="5" y="8"/><rect class="ql-fill" height="1" width="3" x="3" y="5"/><rect class="ql-fill" height="1" width="3" x="3" y="7"/><rect class="ql-fill" height="1" width="3" x="3" y="10"/><rect class="ql-fill" height="1" width="3" x="3" y="12"/><rect class="ql-fill" height="1" width="3" x="12" y="5"/><rect class="ql-fill" height="1" width="3" x="12" y="7"/><rect class="ql-fill" height="1" width="3" x="12" y="10"/><rect class="ql-fill" height="1" width="3" x="12" y="12"/></svg>',
};
let n2 = 0;
function n5(t, e) {
  t.setAttribute(e, `${"true" !== t.getAttribute(e)}`);
}
var n3 = class {
    constructor(t) {
      (this.select = t),
        (this.container = document.createElement("span")),
        this.buildPicker(),
        (this.select.style.display = "none"),
        this.select.parentNode.insertBefore(this.container, this.select),
        this.label.addEventListener("mousedown", () => {
          this.togglePicker();
        }),
        this.label.addEventListener("keydown", (t) => {
          switch (t.key) {
            case "Enter":
              this.togglePicker();
              break;
            case "Escape":
              this.escape(), t.preventDefault();
          }
        }),
        this.select.addEventListener("change", this.update.bind(this));
    }
    togglePicker() {
      this.container.classList.toggle("ql-expanded"),
        n5(this.label, "aria-expanded"),
        n5(this.options, "aria-hidden");
    }
    buildItem(t) {
      let e = document.createElement("span");
      (e.tabIndex = "0"),
        e.setAttribute("role", "button"),
        e.classList.add("ql-picker-item");
      let i = t.getAttribute("value");
      return (
        i && e.setAttribute("data-value", i),
        t.textContent && e.setAttribute("data-label", t.textContent),
        e.addEventListener("click", () => {
          this.selectItem(e, !0);
        }),
        e.addEventListener("keydown", (t) => {
          switch (t.key) {
            case "Enter":
              this.selectItem(e, !0), t.preventDefault();
              break;
            case "Escape":
              this.escape(), t.preventDefault();
          }
        }),
        e
      );
    }
    buildLabel() {
      let t = document.createElement("span");
      return (
        t.classList.add("ql-picker-label"),
        (t.innerHTML =
          '<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>'),
        (t.tabIndex = "0"),
        t.setAttribute("role", "button"),
        t.setAttribute("aria-expanded", "false"),
        this.container.appendChild(t),
        t
      );
    }
    buildOptions() {
      let t = document.createElement("span");
      t.classList.add("ql-picker-options"),
        t.setAttribute("aria-hidden", "true"),
        (t.tabIndex = "-1"),
        (t.id = `ql-picker-options-${n2}`),
        (n2 += 1),
        this.label.setAttribute("aria-controls", t.id),
        (this.options = t),
        Array.from(this.select.options).forEach((e) => {
          let i = this.buildItem(e);
          t.appendChild(i), !0 === e.selected && this.selectItem(i);
        }),
        this.container.appendChild(t);
    }
    buildPicker() {
      Array.from(this.select.attributes).forEach((t) => {
        this.container.setAttribute(t.name, t.value);
      }),
        this.container.classList.add("ql-picker"),
        (this.label = this.buildLabel()),
        this.buildOptions();
    }
    escape() {
      this.close(), setTimeout(() => this.label.focus(), 1);
    }
    close() {
      this.container.classList.remove("ql-expanded"),
        this.label.setAttribute("aria-expanded", "false"),
        this.options.setAttribute("aria-hidden", "true");
    }
    selectItem(t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = this.container.querySelector(".ql-selected");
      t !== i &&
        (null != i && i.classList.remove("ql-selected"),
        null != t &&
          (t.classList.add("ql-selected"),
          (this.select.selectedIndex = Array.from(
            t.parentNode.children
          ).indexOf(t)),
          t.hasAttribute("data-value")
            ? this.label.setAttribute(
                "data-value",
                t.getAttribute("data-value")
              )
            : this.label.removeAttribute("data-value"),
          t.hasAttribute("data-label")
            ? this.label.setAttribute(
                "data-label",
                t.getAttribute("data-label")
              )
            : this.label.removeAttribute("data-label"),
          e && (this.select.dispatchEvent(new Event("change")), this.close())));
    }
    update() {
      let t;
      if (this.select.selectedIndex > -1) {
        let e =
          this.container.querySelector(".ql-picker-options").children[
            this.select.selectedIndex
          ];
        (t = this.select.options[this.select.selectedIndex]),
          this.selectItem(e);
      } else this.selectItem(null);
      let e = null != t && t !== this.select.querySelector("option[selected]");
      this.label.classList.toggle("ql-active", e);
    }
  },
  n4 = class extends n3 {
    constructor(t, e) {
      super(t),
        (this.label.innerHTML = e),
        this.container.classList.add("ql-color-picker"),
        Array.from(this.container.querySelectorAll(".ql-picker-item"))
          .slice(0, 7)
          .forEach((t) => {
            t.classList.add("ql-primary");
          });
    }
    buildItem(t) {
      let e = super.buildItem(t);
      return (e.style.backgroundColor = t.getAttribute("value") || ""), e;
    }
    selectItem(t, e) {
      super.selectItem(t, e);
      let i = this.label.querySelector(".ql-color-label"),
        s = (t && t.getAttribute("data-value")) || "";
      i && ("line" === i.tagName ? (i.style.stroke = s) : (i.style.fill = s));
    }
  },
  n6 = class extends n3 {
    constructor(t, e) {
      super(t),
        this.container.classList.add("ql-icon-picker"),
        Array.from(this.container.querySelectorAll(".ql-picker-item")).forEach(
          (t) => {
            t.innerHTML = e[t.getAttribute("data-value") || ""];
          }
        ),
        (this.defaultItem = this.container.querySelector(".ql-selected")),
        this.selectItem(this.defaultItem);
    }
    selectItem(t, e) {
      super.selectItem(t, e);
      let i = t || this.defaultItem;
      if (null != i) {
        if (this.label.innerHTML === i.innerHTML) return;
        this.label.innerHTML = i.innerHTML;
      }
    }
  };
const n8 = (t) => {
  let { overflowY: e } = getComputedStyle(t, null);
  return "visible" !== e && "clip" !== e;
};
var n9 = class {
  constructor(t, e) {
    (this.quill = t),
      (this.boundsContainer = e || document.body),
      (this.root = t.addContainer("ql-tooltip")),
      (this.root.innerHTML = this.constructor.TEMPLATE),
      n8(this.quill.root) &&
        this.quill.root.addEventListener("scroll", () => {
          this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;
        }),
      this.hide();
  }
  hide() {
    this.root.classList.add("ql-hidden");
  }
  position(t) {
    let e = t.left + t.width / 2 - this.root.offsetWidth / 2,
      i = t.bottom + this.quill.root.scrollTop;
    (this.root.style.left = `${e}px`),
      (this.root.style.top = `${i}px`),
      this.root.classList.remove("ql-flip");
    let s = this.boundsContainer.getBoundingClientRect(),
      r = this.root.getBoundingClientRect(),
      n = 0;
    if (
      (r.right > s.right &&
        ((n = s.right - r.right), (this.root.style.left = `${e + n}px`)),
      r.left < s.left &&
        ((n = s.left - r.left), (this.root.style.left = `${e + n}px`)),
      r.bottom > s.bottom)
    ) {
      let e = r.bottom - r.top,
        s = t.bottom - t.top + e;
      (this.root.style.top = `${i - s}px`), this.root.classList.add("ql-flip");
    }
    return n;
  }
  show() {
    this.root.classList.remove("ql-editing"),
      this.root.classList.remove("ql-hidden");
  }
};
const n7 = [!1, "center", "right", "justify"],
  ot = [
    "#000000",
    "#e60000",
    "#ff9900",
    "#ffff00",
    "#008a00",
    "#0066cc",
    "#9933ff",
    "#ffffff",
    "#facccc",
    "#ffebcc",
    "#ffffcc",
    "#cce8cc",
    "#cce0f5",
    "#ebd6ff",
    "#bbbbbb",
    "#f06666",
    "#ffc266",
    "#ffff66",
    "#66b966",
    "#66a3e0",
    "#c285ff",
    "#888888",
    "#a10000",
    "#b26b00",
    "#b2b200",
    "#006100",
    "#0047b2",
    "#6b24b2",
    "#444444",
    "#5c0000",
    "#663d00",
    "#666600",
    "#003700",
    "#002966",
    "#3d1466",
  ],
  oe = [!1, "serif", "monospace"],
  oi = ["1", "2", "3", !1],
  os = ["small", !1, "large", "huge"];
class or extends rn {
  constructor(t, e) {
    super(t, e);
    let i = (e) => {
      if (!document.body.contains(t.root)) {
        document.body.removeEventListener("click", i);
        return;
      }
      null == this.tooltip ||
        this.tooltip.root.contains(e.target) ||
        document.activeElement === this.tooltip.textbox ||
        this.quill.hasFocus() ||
        this.tooltip.hide(),
        null != this.pickers &&
          this.pickers.forEach((t) => {
            t.container.contains(e.target) || t.close();
          });
    };
    t.emitter.listenDOM("click", document.body, i);
  }
  addModule(t) {
    let e = super.addModule(t);
    return "toolbar" === t && this.extendToolbar(e), e;
  }
  buildButtons(t, e) {
    Array.from(t).forEach((t) => {
      (t.getAttribute("class") || "").split(/\s+/).forEach((i) => {
        if (i.startsWith("ql-") && null != e[(i = i.slice(3))]) {
          if ("direction" === i) t.innerHTML = e[i][""] + e[i].rtl;
          else if ("string" == typeof e[i]) t.innerHTML = e[i];
          else {
            let s = t.value || "";
            null != s && e[i][s] && (t.innerHTML = e[i][s]);
          }
        }
      });
    });
  }
  buildPickers(t, e) {
    (this.pickers = Array.from(t).map((t) => {
      if (
        t.classList.contains("ql-align") &&
        (null == t.querySelector("option") && oo(t, n7),
        "object" == typeof e.align)
      )
        return new n6(t, e.align);
      if (
        t.classList.contains("ql-background") ||
        t.classList.contains("ql-color")
      ) {
        let i = t.classList.contains("ql-background") ? "background" : "color";
        return (
          null == t.querySelector("option") &&
            oo(t, ot, "background" === i ? "#ffffff" : "#000000"),
          new n4(t, e[i])
        );
      }
      return (
        null == t.querySelector("option") &&
          (t.classList.contains("ql-font")
            ? oo(t, oe)
            : t.classList.contains("ql-header")
            ? oo(t, oi)
            : t.classList.contains("ql-size") && oo(t, os)),
        new n3(t)
      );
    })),
      this.quill.on(s0.events.EDITOR_CHANGE, () => {
        this.pickers.forEach((t) => {
          t.update();
        });
      });
  }
}
or.DEFAULTS = eq({}, rn.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        formula() {
          this.quill.theme.tooltip.edit("formula");
        },
        image() {
          let t = this.container.querySelector("input.ql-image[type=file]");
          null == t &&
            ((t = document.createElement("input")).setAttribute("type", "file"),
            t.setAttribute(
              "accept",
              this.quill.uploader.options.mimetypes.join(", ")
            ),
            t.classList.add("ql-image"),
            t.addEventListener("change", () => {
              let e = this.quill.getSelection(!0);
              this.quill.uploader.upload(e, t.files), (t.value = "");
            }),
            this.container.appendChild(t)),
            t.click();
        },
        video() {
          this.quill.theme.tooltip.edit("video");
        },
      },
    },
  },
});
class on extends n9 {
  constructor(t, e) {
    super(t, e),
      (this.textbox = this.root.querySelector('input[type="text"]')),
      this.listen();
  }
  listen() {
    this.textbox.addEventListener("keydown", (t) => {
      "Enter" === t.key
        ? (this.save(), t.preventDefault())
        : "Escape" === t.key && (this.cancel(), t.preventDefault());
    });
  }
  cancel() {
    this.hide(), this.restoreFocus();
  }
  edit() {
    let t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "link",
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (
      (this.root.classList.remove("ql-hidden"),
      this.root.classList.add("ql-editing"),
      null == this.textbox)
    )
      return;
    null != e
      ? (this.textbox.value = e)
      : t !== this.root.getAttribute("data-mode") && (this.textbox.value = "");
    let i = this.quill.getBounds(this.quill.selection.savedRange);
    null != i && this.position(i),
      this.textbox.select(),
      this.textbox.setAttribute(
        "placeholder",
        this.textbox.getAttribute(`data-${t}`) || ""
      ),
      this.root.setAttribute("data-mode", t);
  }
  restoreFocus() {
    this.quill.focus({ preventScroll: !0 });
  }
  save() {
    let { value: t } = this.textbox;
    switch (this.root.getAttribute("data-mode")) {
      case "link": {
        let { scrollTop: e } = this.quill.root;
        this.linkRange
          ? (this.quill.formatText(this.linkRange, "link", t, s0.sources.USER),
            delete this.linkRange)
          : (this.restoreFocus(),
            this.quill.format("link", t, s0.sources.USER)),
          (this.quill.root.scrollTop = e);
        break;
      }
      case "video":
        var e;
        let i;
        t = (i =
          (e = t).match(
            /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/
          ) ||
          e.match(
            /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/
          ))
          ? `${i[1] || "https"}://www.youtube.com/embed/${i[2]}?showinfo=0`
          : (i = e.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))
          ? `${i[1] || "https"}://player.vimeo.com/video/${i[2]}/`
          : e;
      case "formula": {
        if (!t) break;
        let e = this.quill.getSelection(!0);
        if (null != e) {
          let i = e.index + e.length;
          this.quill.insertEmbed(
            i,
            this.root.getAttribute("data-mode"),
            t,
            s0.sources.USER
          ),
            "formula" === this.root.getAttribute("data-mode") &&
              this.quill.insertText(i + 1, " ", s0.sources.USER),
            this.quill.setSelection(i + 2, s0.sources.USER);
        }
      }
    }
    (this.textbox.value = ""), this.hide();
  }
}
function oo(t, e) {
  let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  e.forEach((e) => {
    let s = document.createElement("option");
    e === i
      ? s.setAttribute("selected", "selected")
      : s.setAttribute("value", String(e)),
      t.appendChild(s);
  });
}
const ol = [
  ["bold", "italic", "link"],
  [{ header: 1 }, { header: 2 }, "blockquote"],
];
class oa extends on {
  static TEMPLATE =
    '<span class="ql-tooltip-arrow"></span><div class="ql-tooltip-editor"><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-close"></a></div>';
  constructor(t, e) {
    super(t, e),
      this.quill.on(s0.events.EDITOR_CHANGE, (t, e, i, s) => {
        if (t === s0.events.SELECTION_CHANGE) {
          if (null != e && e.length > 0 && s === s0.sources.USER) {
            this.show(),
              (this.root.style.left = "0px"),
              (this.root.style.width = ""),
              (this.root.style.width = `${this.root.offsetWidth}px`);
            let t = this.quill.getLines(e.index, e.length);
            if (1 === t.length) {
              let t = this.quill.getBounds(e);
              null != t && this.position(t);
            } else {
              let i = t[t.length - 1],
                s = this.quill.getIndex(i),
                r = Math.min(i.length() - 1, e.index + e.length - s),
                n = this.quill.getBounds(new s2(s, r));
              null != n && this.position(n);
            }
          } else
            document.activeElement !== this.textbox &&
              this.quill.hasFocus() &&
              this.hide();
        }
      });
  }
  listen() {
    super.listen(),
      this.root.querySelector(".ql-close").addEventListener("click", () => {
        this.root.classList.remove("ql-editing");
      }),
      this.quill.on(s0.events.SCROLL_OPTIMIZE, () => {
        setTimeout(() => {
          if (this.root.classList.contains("ql-hidden")) return;
          let t = this.quill.getSelection();
          if (null != t) {
            let e = this.quill.getBounds(t);
            null != e && this.position(e);
          }
        }, 1);
      });
  }
  cancel() {
    this.show();
  }
  position(t) {
    let e = super.position(t),
      i = this.root.querySelector(".ql-tooltip-arrow");
    return (
      (i.style.marginLeft = ""),
      0 !== e && (i.style.marginLeft = `${-1 * e - i.offsetWidth / 2}px`),
      e
    );
  }
}
class oc extends or {
  constructor(t, e) {
    null != e.modules.toolbar &&
      null == e.modules.toolbar.container &&
      (e.modules.toolbar.container = ol),
      super(t, e),
      this.quill.container.classList.add("ql-bubble");
  }
  extendToolbar(t) {
    (this.tooltip = new oa(this.quill, this.options.bounds)),
      null != t.container &&
        (this.tooltip.root.appendChild(t.container),
        this.buildButtons(t.container.querySelectorAll("button"), n1),
        this.buildPickers(t.container.querySelectorAll("select"), n1));
  }
}
oc.DEFAULTS = eq({}, or.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(t) {
          t
            ? this.quill.theme.tooltip.edit()
            : this.quill.format("link", !1, rm.sources.USER);
        },
      },
    },
  },
});
const oh = [
  [{ header: ["1", "2", "3", !1] }],
  ["bold", "italic", "underline", "link"],
  [{ list: "ordered" }, { list: "bullet" }],
  ["clean"],
];
class ou extends on {
  static TEMPLATE =
    '<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a>';
  preview = this.root.querySelector("a.ql-preview");
  listen() {
    super.listen(),
      this.root.querySelector("a.ql-action").addEventListener("click", (t) => {
        this.root.classList.contains("ql-editing")
          ? this.save()
          : this.edit("link", this.preview.textContent),
          t.preventDefault();
      }),
      this.root.querySelector("a.ql-remove").addEventListener("click", (t) => {
        if (null != this.linkRange) {
          let t = this.linkRange;
          this.restoreFocus(),
            this.quill.formatText(t, "link", !1, s0.sources.USER),
            delete this.linkRange;
        }
        t.preventDefault(), this.hide();
      }),
      this.quill.on(s0.events.SELECTION_CHANGE, (t, e, i) => {
        if (null != t) {
          if (0 === t.length && i === s0.sources.USER) {
            let [e, i] = this.quill.scroll.descendant(nT, t.index);
            if (null != e) {
              this.linkRange = new s2(t.index - i, e.length());
              let s = nT.formats(e.domNode);
              (this.preview.textContent = s),
                this.preview.setAttribute("href", s),
                this.show();
              let r = this.quill.getBounds(this.linkRange);
              null != r && this.position(r);
              return;
            }
          } else delete this.linkRange;
          this.hide();
        }
      });
  }
  show() {
    super.show(), this.root.removeAttribute("data-mode");
  }
}
class od extends or {
  constructor(t, e) {
    null != e.modules.toolbar &&
      null == e.modules.toolbar.container &&
      (e.modules.toolbar.container = oh),
      super(t, e),
      this.quill.container.classList.add("ql-snow");
  }
  extendToolbar(t) {
    null != t.container &&
      (t.container.classList.add("ql-snow"),
      this.buildButtons(t.container.querySelectorAll("button"), n1),
      this.buildPickers(t.container.querySelectorAll("select"), n1),
      (this.tooltip = new ou(this.quill, this.options.bounds)),
      t.container.querySelector(".ql-link") &&
        this.quill.keyboard.addBinding({ key: "k", shortKey: !0 }, (e, i) => {
          t.handlers.link.call(t, !i.format.link);
        }));
  }
}
(od.DEFAULTS = eq({}, or.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(t) {
          if (t) {
            let t = this.quill.getSelection();
            if (null == t || 0 === t.length) return;
            let e = this.quill.getText(t);
            /^\S+@\S+\.\S+$/.test(e) &&
              0 !== e.indexOf("mailto:") &&
              (e = `mailto:${e}`);
            let { tooltip: i } = this.quill.theme;
            i.edit("link", e);
          } else this.quill.format("link", !1, rm.sources.USER);
        },
      },
    },
  },
})),
  rm.register(
    {
      "attributors/attribute/direction": r$,
      "attributors/class/align": rL,
      "attributors/class/background": rD,
      "attributors/class/color": rq,
      "attributors/class/direction": rB,
      "attributors/class/font": rz,
      "attributors/class/size": rW,
      "attributors/style/align": rT,
      "attributors/style/background": rj,
      "attributors/style/color": rM,
      "attributors/style/direction": rU,
      "attributors/style/font": rF,
      "attributors/style/size": rY,
    },
    !0
  ),
  rm.register(
    {
      "formats/align": rL,
      "formats/direction": rB,
      "formats/indent": n_,
      "formats/background": rj,
      "formats/color": rM,
      "formats/font": rz,
      "formats/size": rW,
      "formats/blockquote": nA,
      "formats/code-block": rV,
      "formats/header": nS,
      "formats/list": nO,
      "formats/bold": nL,
      "formats/code": rI,
      "formats/italic": class extends nL {
        static blotName = "italic";
        static tagName = ["EM", "I"];
      },
      "formats/link": nT,
      "formats/script": nq,
      "formats/strike": class extends nL {
        static blotName = "strike";
        static tagName = ["S", "STRIKE"];
      },
      "formats/underline": nM,
      "formats/formula": nD,
      "formats/image": nR,
      "formats/video": nI,
      "modules/syntax": nz,
      "modules/table": nX,
      "modules/toolbar": nQ,
      "themes/bubble": oc,
      "themes/snow": od,
      "ui/icons": n1,
      "ui/picker": n3,
      "ui/icon-picker": n6,
      "ui/color-picker": n4,
      "ui/tooltip": n9,
    },
    !0
  );
var of = te("60Xwh");
function op(t) {
  return "object" == typeof t && "function" == typeof t.to;
}
function om(t) {
  t.parentElement.removeChild(t);
}
function og(t) {
  t.preventDefault();
}
function ob(t) {
  return "number" == typeof t && !isNaN(t) && isFinite(t);
}
function ov(t, e, i) {
  i > 0 &&
    (ow(t, e),
    setTimeout(function () {
      oN(t, e);
    }, i));
}
function oy(t) {
  return Math.max(Math.min(t, 100), 0);
}
function ox(t) {
  return Array.isArray(t) ? t : [t];
}
function oE(t) {
  var e = (t = String(t)).split(".");
  return e.length > 1 ? e[1].length : 0;
}
function ow(t, e) {
  t.classList && !/\s/.test(e) ? t.classList.add(e) : (t.className += " " + e);
}
function oN(t, e) {
  t.classList && !/\s/.test(e)
    ? t.classList.remove(e)
    : (t.className = t.className.replace(
        RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"),
        " "
      ));
}
function o_(t) {
  var e = void 0 !== window.pageXOffset,
    i = "CSS1Compat" === (t.compatMode || "");
  return {
    x: e
      ? window.pageXOffset
      : i
      ? t.documentElement.scrollLeft
      : t.body.scrollLeft,
    y: e
      ? window.pageYOffset
      : i
      ? t.documentElement.scrollTop
      : t.body.scrollTop,
  };
}
function oA(t, e, i) {
  return (100 * e) / (t[i + 1] - t[i]);
}
function oS(t, e) {
  for (var i = 1; t >= e[i]; ) i += 1;
  return i;
}
((u = Z || (Z = {})).Range = "range"),
  (u.Steps = "steps"),
  (u.Positions = "positions"),
  (u.Count = "count"),
  (u.Values = "values"),
  ((d = X || (X = {}))[(d.None = -1)] = "None"),
  (d[(d.NoValue = 0)] = "NoValue"),
  (d[(d.LargeValue = 1)] = "LargeValue"),
  (d[(d.SmallValue = 2)] = "SmallValue");
var ok = (function () {
    function t(t, e, i) {
      (this.xPct = []),
        (this.xVal = []),
        (this.xSteps = []),
        (this.xNumSteps = []),
        (this.xHighestCompleteStep = []),
        (this.xSteps = [i || !1]),
        (this.xNumSteps = [!1]),
        (this.snap = e);
      var s,
        r = [];
      for (
        Object.keys(t).forEach(function (e) {
          r.push([ox(t[e]), e]);
        }),
          r.sort(function (t, e) {
            return t[0][0] - e[0][0];
          }),
          s = 0;
        s < r.length;
        s++
      )
        this.handleEntryPoint(r[s][1], r[s][0]);
      for (
        s = 0, this.xNumSteps = this.xSteps.slice(0);
        s < this.xNumSteps.length;
        s++
      )
        this.handleStepPoint(s, this.xNumSteps[s]);
    }
    return (
      (t.prototype.getDistance = function (t) {
        for (var e = [], i = 0; i < this.xNumSteps.length - 1; i++)
          e[i] = oA(this.xVal, t, i);
        return e;
      }),
      (t.prototype.getAbsoluteDistance = function (t, e, i) {
        var s,
          r = 0;
        if (t < this.xPct[this.xPct.length - 1])
          for (; t > this.xPct[r + 1]; ) r++;
        else
          t === this.xPct[this.xPct.length - 1] && (r = this.xPct.length - 2);
        !i && t === this.xPct[r + 1] && r++, null === e && (e = []);
        var n = 1,
          o = e[r],
          l = 0,
          a = 0,
          c = 0,
          h = 0;
        for (
          s = i
            ? (t - this.xPct[r]) / (this.xPct[r + 1] - this.xPct[r])
            : (this.xPct[r + 1] - t) / (this.xPct[r + 1] - this.xPct[r]);
          o > 0;

        )
          (l = this.xPct[r + 1 + h] - this.xPct[r + h]),
            e[r + h] * n + 100 - 100 * s > 100
              ? ((a = l * s), (n = (o - 100 * s) / e[r + h]), (s = 1))
              : ((a = ((e[r + h] * l) / 100) * n), (n = 0)),
            i
              ? ((c -= a), this.xPct.length + h >= 1 && h--)
              : ((c += a), this.xPct.length - h >= 1 && h++),
            (o = e[r + h] * n);
        return t + c;
      }),
      (t.prototype.toStepping = function (t) {
        return (t = (function (t, e, i) {
          if (i >= t.slice(-1)[0]) return 100;
          var s,
            r = oS(i, t),
            n = t[r - 1],
            o = t[r],
            l = e[r - 1],
            a = e[r];
          return (
            l +
            oA((s = [n, o]), s[0] < 0 ? i + Math.abs(s[0]) : i - s[0], 0) /
              (100 / (a - l))
          );
        })(this.xVal, this.xPct, t));
      }),
      (t.prototype.fromStepping = function (t) {
        return (function (t, e, i) {
          if (i >= 100) return t.slice(-1)[0];
          var s,
            r = oS(i, e),
            n = t[r - 1],
            o = t[r],
            l = e[r - 1];
          return (
            ((i - l) * (100 / (e[r] - l)) * ((s = [n, o])[1] - s[0])) / 100 +
            s[0]
          );
        })(this.xVal, this.xPct, t);
      }),
      (t.prototype.getStep = function (t) {
        return (t = (function (t, e, i, s) {
          if (100 === s) return s;
          var r,
            n = oS(s, t),
            o = t[n - 1],
            l = t[n];
          return i
            ? s - o > (l - o) / 2
              ? l
              : o
            : e[n - 1]
            ? t[n - 1] + Math.round((s - t[n - 1]) / (r = e[n - 1])) * r
            : s;
        })(this.xPct, this.xSteps, this.snap, t));
      }),
      (t.prototype.getDefaultStep = function (t, e, i) {
        var s = oS(t, this.xPct);
        return (
          (100 === t || (e && t === this.xPct[s - 1])) &&
            (s = Math.max(s - 1, 1)),
          (this.xVal[s] - this.xVal[s - 1]) / i
        );
      }),
      (t.prototype.getNearbySteps = function (t) {
        var e = oS(t, this.xPct);
        return {
          stepBefore: {
            startValue: this.xVal[e - 2],
            step: this.xNumSteps[e - 2],
            highestStep: this.xHighestCompleteStep[e - 2],
          },
          thisStep: {
            startValue: this.xVal[e - 1],
            step: this.xNumSteps[e - 1],
            highestStep: this.xHighestCompleteStep[e - 1],
          },
          stepAfter: {
            startValue: this.xVal[e],
            step: this.xNumSteps[e],
            highestStep: this.xHighestCompleteStep[e],
          },
        };
      }),
      (t.prototype.countStepDecimals = function () {
        var t = this.xNumSteps.map(oE);
        return Math.max.apply(null, t);
      }),
      (t.prototype.hasNoSize = function () {
        return this.xVal[0] === this.xVal[this.xVal.length - 1];
      }),
      (t.prototype.convert = function (t) {
        return this.getStep(this.toStepping(t));
      }),
      (t.prototype.handleEntryPoint = function (t, e) {
        if (
          !ob((i = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t))) ||
          !ob(e[0])
        )
          throw Error("noUiSlider: 'range' value isn't numeric.");
        this.xPct.push(i), this.xVal.push(e[0]);
        var i,
          s = Number(e[1]);
        i ? this.xSteps.push(!isNaN(s) && s) : isNaN(s) || (this.xSteps[0] = s),
          this.xHighestCompleteStep.push(0);
      }),
      (t.prototype.handleStepPoint = function (t, e) {
        if (e) {
          if (this.xVal[t] === this.xVal[t + 1]) {
            this.xSteps[t] = this.xHighestCompleteStep[t] = this.xVal[t];
            return;
          }
          this.xSteps[t] =
            oA([this.xVal[t], this.xVal[t + 1]], e, 0) /
            ((i = this.xPct[t]), 100 / (this.xPct[t + 1] - i));
          var i,
            s = Math.ceil(
              Number(
                ((this.xVal[t + 1] - this.xVal[t]) / this.xNumSteps[t]).toFixed(
                  3
                )
              ) - 1
            ),
            r = this.xVal[t] + this.xNumSteps[t] * s;
          this.xHighestCompleteStep[t] = r;
        }
      }),
      t
    );
  })(),
  oO = {
    to: function (t) {
      return void 0 === t ? "" : t.toFixed(2);
    },
    from: Number,
  },
  oL = {
    target: "target",
    base: "base",
    origin: "origin",
    handle: "handle",
    handleLower: "handle-lower",
    handleUpper: "handle-upper",
    touchArea: "touch-area",
    horizontal: "horizontal",
    vertical: "vertical",
    background: "background",
    connect: "connect",
    connects: "connects",
    ltr: "ltr",
    rtl: "rtl",
    textDirectionLtr: "txt-dir-ltr",
    textDirectionRtl: "txt-dir-rtl",
    draggable: "draggable",
    drag: "state-drag",
    tap: "state-tap",
    active: "active",
    tooltip: "tooltip",
    pips: "pips",
    pipsHorizontal: "pips-horizontal",
    pipsVertical: "pips-vertical",
    marker: "marker",
    markerHorizontal: "marker-horizontal",
    markerVertical: "marker-vertical",
    markerNormal: "marker-normal",
    markerLarge: "marker-large",
    markerSub: "marker-sub",
    value: "value",
    valueHorizontal: "value-horizontal",
    valueVertical: "value-vertical",
    valueNormal: "value-normal",
    valueLarge: "value-large",
    valueSub: "value-sub",
  },
  oT = { tooltips: ".__tooltips", aria: ".__aria" };
function oC(t, e) {
  if (!ob(e)) throw Error("noUiSlider: 'step' is not numeric.");
  t.singleStep = e;
}
function oq(t, e) {
  if (!ob(e))
    throw Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
  t.keyboardPageMultiplier = e;
}
function oM(t, e) {
  if (!ob(e)) throw Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
  t.keyboardMultiplier = e;
}
function oD(t, e) {
  if (!ob(e)) throw Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
  t.keyboardDefaultStep = e;
}
function oj(t, e) {
  if ("object" != typeof e || Array.isArray(e))
    throw Error("noUiSlider: 'range' is not an object.");
  if (void 0 === e.min || void 0 === e.max)
    throw Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
  t.spectrum = new ok(e, t.snap || !1, t.singleStep);
}
function oR(t, e) {
  if (!Array.isArray((e = ox(e))) || !e.length)
    throw Error("noUiSlider: 'start' option is incorrect.");
  (t.handles = e.length), (t.start = e);
}
function oV(t, e) {
  if ("boolean" != typeof e)
    throw Error("noUiSlider: 'snap' option must be a boolean.");
  t.snap = e;
}
function oI(t, e) {
  if ("boolean" != typeof e)
    throw Error("noUiSlider: 'animate' option must be a boolean.");
  t.animate = e;
}
function oP(t, e) {
  if ("number" != typeof e)
    throw Error("noUiSlider: 'animationDuration' option must be a number.");
  t.animationDuration = e;
}
function o$(t, e) {
  var i,
    s = [!1];
  if (
    ("lower" === e ? (e = [!0, !1]) : "upper" === e && (e = [!1, !0]),
    !0 === e || !1 === e)
  ) {
    for (i = 1; i < t.handles; i++) s.push(e);
    s.push(!1);
  } else if (Array.isArray(e) && e.length && e.length === t.handles + 1) s = e;
  else throw Error("noUiSlider: 'connect' option doesn't match handle count.");
  t.connect = s;
}
function oB(t, e) {
  switch (e) {
    case "horizontal":
      t.ort = 0;
      break;
    case "vertical":
      t.ort = 1;
      break;
    default:
      throw Error("noUiSlider: 'orientation' option is invalid.");
  }
}
function oU(t, e) {
  if (!ob(e)) throw Error("noUiSlider: 'margin' option must be numeric.");
  0 !== e && (t.margin = t.spectrum.getDistance(e));
}
function oH(t, e) {
  if (!ob(e)) throw Error("noUiSlider: 'limit' option must be numeric.");
  if (((t.limit = t.spectrum.getDistance(e)), !t.limit || t.handles < 2))
    throw Error(
      "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles."
    );
}
function oz(t, e) {
  if (
    (!ob(e) && !Array.isArray(e)) ||
    (Array.isArray(e) && !(2 === e.length || ob(e[0]) || ob(e[1])))
  )
    throw Error(
      "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
    );
  if (0 !== e) {
    for (
      Array.isArray(e) || (e = [e, e]),
        t.padding = [
          t.spectrum.getDistance(e[0]),
          t.spectrum.getDistance(e[1]),
        ],
        i = 0;
      i < t.spectrum.xNumSteps.length - 1;
      i++
    )
      if (t.padding[0][i] < 0 || t.padding[1][i] < 0)
        throw Error(
          "noUiSlider: 'padding' option must be a positive number(s)."
        );
    var i,
      s = e[0] + e[1],
      r = t.spectrum.xVal[0];
    if (s / (t.spectrum.xVal[t.spectrum.xVal.length - 1] - r) > 1)
      throw Error(
        "noUiSlider: 'padding' option must not exceed 100% of the range."
      );
  }
}
function oF(t, e) {
  switch (e) {
    case "ltr":
      t.dir = 0;
      break;
    case "rtl":
      t.dir = 1;
      break;
    default:
      throw Error("noUiSlider: 'direction' option was not recognized.");
  }
}
function oW(t, e) {
  if ("string" != typeof e)
    throw Error("noUiSlider: 'behaviour' must be a string containing options.");
  var i = e.indexOf("tap") >= 0,
    s = e.indexOf("drag") >= 0,
    r = e.indexOf("fixed") >= 0,
    n = e.indexOf("snap") >= 0,
    o = e.indexOf("hover") >= 0,
    l = e.indexOf("unconstrained") >= 0,
    a = e.indexOf("invert-connects") >= 0,
    c = e.indexOf("drag-all") >= 0,
    h = e.indexOf("smooth-steps") >= 0;
  if (r) {
    if (2 !== t.handles)
      throw Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
    oU(t, t.start[1] - t.start[0]);
  }
  if (a && 2 !== t.handles)
    throw Error(
      "noUiSlider: 'invert-connects' behaviour must be used with 2 handles"
    );
  if (l && (t.margin || t.limit))
    throw Error(
      "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit"
    );
  t.events = {
    tap: i || n,
    drag: s,
    dragAll: c,
    smoothSteps: h,
    fixed: r,
    snap: n,
    hover: o,
    unconstrained: l,
    invertConnects: a,
  };
}
function oY(t, e) {
  if (!1 !== e) {
    if (!0 === e || op(e)) {
      t.tooltips = [];
      for (var i = 0; i < t.handles; i++) t.tooltips.push(e);
    } else {
      if ((e = ox(e)).length !== t.handles)
        throw Error("noUiSlider: must pass a formatter for all handles.");
      e.forEach(function (t) {
        if ("boolean" != typeof t && !op(t))
          throw Error(
            "noUiSlider: 'tooltips' must be passed a formatter or 'false'."
          );
      }),
        (t.tooltips = e);
    }
  }
}
function oK(t, e) {
  if (e.length !== t.handles)
    throw Error("noUiSlider: must pass a attributes for all handles.");
  t.handleAttributes = e;
}
function oZ(t, e) {
  if (!op(e)) throw Error("noUiSlider: 'ariaFormat' requires 'to' method.");
  t.ariaFormat = e;
}
function oX(t, e) {
  if (!(op(e) && "function" == typeof e.from))
    throw Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
  t.format = e;
}
function oG(t, e) {
  if ("boolean" != typeof e)
    throw Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
  t.keyboardSupport = e;
}
function oQ(t, e) {
  t.documentElement = e;
}
function oJ(t, e) {
  if ("string" != typeof e && !1 !== e)
    throw Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
  t.cssPrefix = e;
}
function o0(t, e) {
  if ("object" != typeof e)
    throw Error("noUiSlider: 'cssClasses' must be an object.");
  "string" == typeof t.cssPrefix
    ? ((t.cssClasses = {}),
      Object.keys(e).forEach(function (i) {
        t.cssClasses[i] = t.cssPrefix + e[i];
      }))
    : (t.cssClasses = e);
}
function o1(t) {
  var e = {
      margin: null,
      limit: null,
      padding: null,
      animate: !0,
      animationDuration: 300,
      ariaFormat: oO,
      format: oO,
    },
    i = {
      step: { r: !1, t: oC },
      keyboardPageMultiplier: { r: !1, t: oq },
      keyboardMultiplier: { r: !1, t: oM },
      keyboardDefaultStep: { r: !1, t: oD },
      start: { r: !0, t: oR },
      connect: { r: !0, t: o$ },
      direction: { r: !0, t: oF },
      snap: { r: !1, t: oV },
      animate: { r: !1, t: oI },
      animationDuration: { r: !1, t: oP },
      range: { r: !0, t: oj },
      orientation: { r: !1, t: oB },
      margin: { r: !1, t: oU },
      limit: { r: !1, t: oH },
      padding: { r: !1, t: oz },
      behaviour: { r: !0, t: oW },
      ariaFormat: { r: !1, t: oZ },
      format: { r: !1, t: oX },
      tooltips: { r: !1, t: oY },
      keyboardSupport: { r: !0, t: oG },
      documentElement: { r: !1, t: oQ },
      cssPrefix: { r: !0, t: oJ },
      cssClasses: { r: !0, t: o0 },
      handleAttributes: { r: !1, t: oK },
    },
    s = {
      connect: !1,
      direction: "ltr",
      behaviour: "tap",
      orientation: "horizontal",
      keyboardSupport: !0,
      cssPrefix: "noUi-",
      cssClasses: oL,
      keyboardPageMultiplier: 5,
      keyboardMultiplier: 1,
      keyboardDefaultStep: 10,
    };
  t.format && !t.ariaFormat && (t.ariaFormat = t.format),
    Object.keys(i).forEach(function (r) {
      if (!(null != t[r]) && void 0 === s[r]) {
        if (i[r].r) throw Error("noUiSlider: '" + r + "' is required.");
        return;
      }
      i[r].t(e, null != t[r] ? t[r] : s[r]);
    }),
    (e.pips = t.pips);
  var r = document.createElement("div"),
    n = void 0 !== r.style.msTransform,
    o = void 0 !== r.style.transform;
  return (
    (e.transformRule = o ? "transform" : n ? "msTransform" : "webkitTransform"),
    (e.style = [
      ["left", "top"],
      ["right", "bottom"],
    ][e.dir][e.ort]),
    e
  );
}
var o2 = {
  __spectrum: ok,
  cssClasses: oL,
  create: function (t, e) {
    if (!t || !t.nodeName)
      throw Error("noUiSlider: create requires a single element, got: " + t);
    if (t.noUiSlider)
      throw Error("noUiSlider: Slider was already initialized.");
    var i = (function (t, e, i) {
      var s,
        r,
        n,
        o,
        l,
        a,
        c = window.navigator.pointerEnabled
          ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
          : window.navigator.msPointerEnabled
          ? {
              start: "MSPointerDown",
              move: "MSPointerMove",
              end: "MSPointerUp",
            }
          : {
              start: "mousedown touchstart",
              move: "mousemove touchmove",
              end: "mouseup touchend",
            },
        h =
          window.CSS &&
          CSS.supports &&
          CSS.supports("touch-action", "none") &&
          (function () {
            var t = !1;
            try {
              var e = Object.defineProperty({}, "passive", {
                get: function () {
                  t = !0;
                },
              });
              window.addEventListener("test", null, e);
            } catch (t) {}
            return t;
          })(),
        u = e.spectrum,
        d = [],
        f = [],
        p = [],
        m = 0,
        g = {},
        b = !1,
        v = t.ownerDocument,
        y = e.documentElement || v.documentElement,
        x = v.body,
        E = "rtl" === v.dir || 1 === e.ort ? 0 : 100;
      function w(t, e) {
        var i = v.createElement("div");
        return e && ow(i, e), t.appendChild(i), i;
      }
      function N(t, i) {
        return !!i && w(t, e.cssClasses.connect);
      }
      function _(t, i) {
        return (
          !!e.tooltips &&
          !!e.tooltips[i] &&
          w(t.firstChild, e.cssClasses.tooltip)
        );
      }
      function A() {
        return t.hasAttribute("disabled");
      }
      function S(t) {
        return n[t].hasAttribute("disabled");
      }
      function k() {
        a &&
          (H("update" + oT.tooltips),
          a.forEach(function (t) {
            t && om(t);
          }),
          (a = null));
      }
      function O() {
        k(),
          (a = n.map(_)),
          U("update" + oT.tooltips, function (t, i, s) {
            if (a && e.tooltips && !1 !== a[i]) {
              var r = t[i];
              !0 !== e.tooltips[i] && (r = e.tooltips[i].to(s[i])),
                (a[i].innerHTML = r);
            }
          });
      }
      function L(t, e) {
        return t.map(function (t) {
          return u.fromStepping(e ? u.getStep(t) : t);
        });
      }
      function T() {
        l && (om(l), (l = null));
      }
      function C(i) {
        T();
        var s,
          r,
          n,
          o,
          a,
          c,
          h,
          d =
            ((s = (function (t) {
              if (t.mode === Z.Range || t.mode === Z.Steps) return u.xVal;
              if (t.mode === Z.Count) {
                if (t.values < 2)
                  throw Error(
                    "noUiSlider: 'values' (>= 2) required for mode 'count'."
                  );
                for (var e = t.values - 1, i = 100 / e, s = []; e--; )
                  s[e] = e * i;
                return s.push(100), L(s, t.stepped);
              }
              return t.mode === Z.Positions
                ? L(t.values, t.stepped)
                : t.mode === Z.Values
                ? t.stepped
                  ? t.values.map(function (t) {
                      return u.fromStepping(u.getStep(u.toStepping(t)));
                    })
                  : t.values
                : [];
            })(i)),
            (r = {}),
            (n = u.xVal[0]),
            (o = u.xVal[u.xVal.length - 1]),
            (a = !1),
            (c = !1),
            (h = 0),
            (s = s
              .slice()
              .sort(function (t, e) {
                return t - e;
              })
              .filter(function (t) {
                return !this[t] && (this[t] = !0);
              }, {}))[0] !== n && (s.unshift(n), (a = !0)),
            s[s.length - 1] !== o && (s.push(o), (c = !0)),
            s.forEach(function (t, e) {
              var n,
                o,
                l,
                d,
                f,
                p,
                m,
                g,
                b,
                v = s[e + 1],
                y = i.mode === Z.Steps;
              for (
                y && (n = u.xNumSteps[e]),
                  n || (n = v - t),
                  void 0 === v && (v = t),
                  n = Math.max(n, 1e-7),
                  o = t;
                o <= v;
                o = Number((o + n).toFixed(7))
              ) {
                for (
                  l = 1,
                    g = Math.round(
                      (f = (d = u.toStepping(o)) - h) / (i.density || 1)
                    ),
                    b = f / g;
                  l <= g;
                  l += 1
                )
                  r[(p = h + l * b).toFixed(5)] = [u.fromStepping(p), 0];
                (m =
                  s.indexOf(o) > -1
                    ? X.LargeValue
                    : y
                    ? X.SmallValue
                    : X.NoValue),
                  !e && a && o !== v && (m = 0),
                  (o === v && c) || (r[d.toFixed(5)] = [o, m]),
                  (h = d);
              }
            }),
            r),
          f = i.filter,
          p = i.format || {
            to: function (t) {
              return String(Math.round(t));
            },
          };
        return (l = t.appendChild(
          (function (t, i, s) {
            var r,
              n,
              o = v.createElement("div"),
              l =
                (((r = {})[X.None] = ""),
                (r[X.NoValue] = e.cssClasses.valueNormal),
                (r[X.LargeValue] = e.cssClasses.valueLarge),
                (r[X.SmallValue] = e.cssClasses.valueSub),
                r),
              a =
                (((n = {})[X.None] = ""),
                (n[X.NoValue] = e.cssClasses.markerNormal),
                (n[X.LargeValue] = e.cssClasses.markerLarge),
                (n[X.SmallValue] = e.cssClasses.markerSub),
                n),
              c = [e.cssClasses.valueHorizontal, e.cssClasses.valueVertical],
              h = [e.cssClasses.markerHorizontal, e.cssClasses.markerVertical];
            function u(t, i) {
              var s = i === e.cssClasses.value;
              return i + " " + (s ? c : h)[e.ort] + " " + (s ? l : a)[t];
            }
            return (
              ow(o, e.cssClasses.pips),
              ow(
                o,
                0 === e.ort
                  ? e.cssClasses.pipsHorizontal
                  : e.cssClasses.pipsVertical
              ),
              Object.keys(t).forEach(function (r) {
                !(function (t, r, n) {
                  if ((n = i ? i(r, n) : n) !== X.None) {
                    var l = w(o, !1);
                    (l.className = u(n, e.cssClasses.marker)),
                      (l.style[e.style] = t + "%"),
                      n > X.NoValue &&
                        (((l = w(o, !1)).className = u(n, e.cssClasses.value)),
                        l.setAttribute("data-value", String(r)),
                        (l.style[e.style] = t + "%"),
                        (l.innerHTML = String(s.to(r))));
                  }
                })(r, t[r][0], t[r][1]);
              }),
              o
            );
          })(d, f, p)
        ));
      }
      function q() {
        var t = s.getBoundingClientRect(),
          i = "offset" + ["Width", "Height"][e.ort];
        return 0 === e.ort ? t.width || s[i] : t.height || s[i];
      }
      function M(i, s, r, n) {
        var o = function (o) {
            var l,
              a = (function (t, e, i) {
                var s = 0 === t.type.indexOf("touch"),
                  r = 0 === t.type.indexOf("mouse"),
                  n = 0 === t.type.indexOf("pointer"),
                  o = 0,
                  l = 0;
                if (
                  (0 === t.type.indexOf("MSPointer") && (n = !0),
                  "mousedown" === t.type && !t.buttons && !t.touches)
                )
                  return !1;
                if (s) {
                  var a = function (e) {
                    var s = e.target;
                    return (
                      s === i ||
                      i.contains(s) ||
                      (t.composed && t.composedPath().shift() === i)
                    );
                  };
                  if ("touchstart" === t.type) {
                    var c = Array.prototype.filter.call(t.touches, a);
                    if (c.length > 1) return !1;
                    (o = c[0].pageX), (l = c[0].pageY);
                  } else {
                    var h = Array.prototype.find.call(t.changedTouches, a);
                    if (!h) return !1;
                    (o = h.pageX), (l = h.pageY);
                  }
                }
                return (
                  (e = e || o_(v)),
                  (r || n) && ((o = t.clientX + e.x), (l = t.clientY + e.y)),
                  (t.pageOffset = e),
                  (t.points = [o, l]),
                  (t.cursor = r || n),
                  t
                );
              })(o, n.pageOffset, n.target || s);
            if (
              !a ||
              (A() && !n.doNotReject) ||
              ((l = e.cssClasses.tap),
              ((t.classList
                ? t.classList.contains(l)
                : RegExp("\\b" + l + "\\b").test(t.className)) &&
                !n.doNotReject) ||
                (i === c.start && void 0 !== a.buttons && a.buttons > 1) ||
                (n.hover && a.buttons))
            )
              return !1;
            h || a.preventDefault(), (a.calcPoint = a.points[e.ort]), r(a, n);
          },
          l = [];
        return (
          i.split(" ").forEach(function (t) {
            s.addEventListener(t, o, !!h && { passive: !0 }), l.push([t, o]);
          }),
          l
        );
      }
      function D(t) {
        var i,
          r,
          n,
          o,
          l,
          a,
          c =
            (100 *
              (t -
                ((i = s),
                (r = e.ort),
                (n = i.getBoundingClientRect()),
                (l = (o = i.ownerDocument).documentElement),
                (a = o_(o)),
                /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) &&
                  (a.x = 0),
                r ? n.top + a.y - l.clientTop : n.left + a.x - l.clientLeft))) /
            q();
        return (c = oy(c)), e.dir ? 100 - c : c;
      }
      function j(t, e) {
        "mouseout" === t.type &&
          "HTML" === t.target.nodeName &&
          null === t.relatedTarget &&
          V(t, e);
      }
      function R(t, i) {
        if (
          -1 === navigator.appVersion.indexOf("MSIE 9") &&
          0 === t.buttons &&
          0 !== i.buttonsProperty
        )
          return V(t, i);
        var s = (e.dir ? -1 : 1) * (t.calcPoint - i.startCalcPoint),
          r = (100 * s) / i.baseSize;
        Y(s > 0, r, i.locations, i.handleNumbers, i.connect);
      }
      function V(i, s) {
        s.handle && (oN(s.handle, e.cssClasses.active), (m -= 1)),
          s.listeners.forEach(function (t) {
            y.removeEventListener(t[0], t[1]);
          }),
          0 === m &&
            (oN(t, e.cssClasses.drag),
            G(),
            i.cursor &&
              ((x.style.cursor = ""),
              x.removeEventListener("selectstart", og))),
          e.events.smoothSteps &&
            (s.handleNumbers.forEach(function (t) {
              Q(t, f[t], !0, !0, !1, !1);
            }),
            s.handleNumbers.forEach(function (t) {
              z("update", t);
            })),
          s.handleNumbers.forEach(function (t) {
            z("change", t), z("set", t), z("end", t);
          });
      }
      function I(i, s) {
        if (!s.handleNumbers.some(S)) {
          if (1 === s.handleNumbers.length) {
            var r;
            (r = n[s.handleNumbers[0]].children[0]),
              (m += 1),
              ow(r, e.cssClasses.active);
          }
          i.stopPropagation();
          var o = [],
            l = M(c.move, y, R, {
              target: i.target,
              handle: r,
              connect: s.connect,
              listeners: o,
              startCalcPoint: i.calcPoint,
              baseSize: q(),
              pageOffset: i.pageOffset,
              handleNumbers: s.handleNumbers,
              buttonsProperty: i.buttons,
              locations: f.slice(),
            }),
            a = M(c.end, y, V, {
              target: i.target,
              handle: r,
              listeners: o,
              doNotReject: !0,
              handleNumbers: s.handleNumbers,
            }),
            h = M("mouseout", y, j, {
              target: i.target,
              handle: r,
              listeners: o,
              doNotReject: !0,
              handleNumbers: s.handleNumbers,
            });
          o.push.apply(o, l.concat(a, h)),
            i.cursor &&
              ((x.style.cursor = getComputedStyle(i.target).cursor),
              n.length > 1 && ow(t, e.cssClasses.drag),
              x.addEventListener("selectstart", og, !1)),
            s.handleNumbers.forEach(function (t) {
              z("start", t);
            });
        }
      }
      function P(i) {
        i.stopPropagation();
        var s,
          r,
          o = D(i.calcPoint),
          l =
            ((s = 100),
            (r = !1),
            n.forEach(function (t, e) {
              if (!S(e)) {
                var i = f[e],
                  n = Math.abs(i - o),
                  l = 100 === n && 100 === s,
                  a = n < s,
                  c = n <= s && o > i;
                (a || c || l) && ((r = e), (s = n));
              }
            }),
            r);
        !1 !== l &&
          (e.events.snap || ov(t, e.cssClasses.tap, e.animationDuration),
          Q(l, o, !0, !0),
          G(),
          z("slide", l, !0),
          z("update", l, !0),
          e.events.snap
            ? I(i, { handleNumbers: [l] })
            : (z("change", l, !0), z("set", l, !0)));
      }
      function $(t) {
        var e = D(t.calcPoint),
          i = u.getStep(e),
          s = u.fromStepping(i);
        Object.keys(g).forEach(function (t) {
          "hover" === t.split(".")[0] &&
            g[t].forEach(function (t) {
              t.call(tn, s);
            });
        });
      }
      function B(t) {
        t.fixed ||
          n.forEach(function (t, e) {
            M(c.start, t.children[0], I, { handleNumbers: [e] });
          }),
          t.tap && M(c.start, s, P, {}),
          t.hover && M(c.move, s, $, { hover: !0 }),
          t.drag &&
            o.forEach(function (i, s) {
              if (!1 !== i && 0 !== s && s !== o.length - 1) {
                var r = n[s - 1],
                  l = n[s],
                  a = [i],
                  h = [r, l],
                  u = [s - 1, s];
                ow(i, e.cssClasses.draggable),
                  t.fixed && (a.push(r.children[0]), a.push(l.children[0])),
                  t.dragAll && ((h = n), (u = p)),
                  a.forEach(function (t) {
                    M(c.start, t, I, {
                      handles: h,
                      handleNumbers: u,
                      connect: i,
                    });
                  });
              }
            });
      }
      function U(t, e) {
        (g[t] = g[t] || []),
          g[t].push(e),
          "update" === t.split(".")[0] &&
            n.forEach(function (t, e) {
              z("update", e);
            });
      }
      function H(t) {
        var e = t && t.split(".")[0],
          i = e ? t.substring(e.length) : t;
        Object.keys(g).forEach(function (t) {
          var s = t.split(".")[0],
            r = t.substring(s.length);
          (e && e !== s) ||
            (i && i !== r) ||
            ((r === oT.aria || r === oT.tooltips) && i !== r) ||
            delete g[t];
        });
      }
      function z(t, i, s) {
        Object.keys(g).forEach(function (r) {
          t === r.split(".")[0] &&
            g[r].forEach(function (t) {
              t.call(
                tn,
                d.map(e.format.to),
                i,
                d.slice(),
                s || !1,
                f.slice(),
                tn
              );
            });
        });
      }
      function F(t, i, s, r, o, l, a) {
        return (
          n.length > 1 &&
            !e.events.unconstrained &&
            (r &&
              i > 0 &&
              (s = Math.max(s, u.getAbsoluteDistance(t[i - 1], e.margin, !1))),
            o &&
              i < n.length - 1 &&
              (s = Math.min(s, u.getAbsoluteDistance(t[i + 1], e.margin, !0)))),
          n.length > 1 &&
            e.limit &&
            (r &&
              i > 0 &&
              (s = Math.min(s, u.getAbsoluteDistance(t[i - 1], e.limit, !1))),
            o &&
              i < n.length - 1 &&
              (s = Math.max(s, u.getAbsoluteDistance(t[i + 1], e.limit, !0)))),
          e.padding &&
            (0 === i &&
              (s = Math.max(s, u.getAbsoluteDistance(0, e.padding[0], !1))),
            i === n.length - 1 &&
              (s = Math.min(s, u.getAbsoluteDistance(100, e.padding[1], !0)))),
          a || (s = u.getStep(s)),
          ((s = oy(s)) !== t[i] || !!l) && s
        );
      }
      function W(t, i) {
        var s = e.ort;
        return (s ? i : t) + ", " + (s ? t : i);
      }
      function Y(t, i, s, r, n) {
        var o = s.slice(),
          l = r[0],
          a = e.events.smoothSteps,
          c = [!t, t],
          h = [t, !t];
        (r = r.slice()),
          t && r.reverse(),
          r.length > 1
            ? r.forEach(function (t, e) {
                var s = F(o, t, o[t] + i, c[e], h[e], !1, a);
                !1 === s ? (i = 0) : ((i = s - o[t]), (o[t] = s));
              })
            : (c = h = [!0]);
        var u = !1;
        r.forEach(function (t, e) {
          u = Q(t, s[t] + i, c[e], h[e], !1, a) || u;
        }),
          u &&
            (r.forEach(function (t) {
              z("update", t), z("slide", t);
            }),
            void 0 != n && z("drag", l));
      }
      function K(t, i) {
        return e.dir ? 100 - t - i : t;
      }
      function G() {
        p.forEach(function (t) {
          var e = f[t] > 50 ? -1 : 1,
            i = 3 + (n.length + e * t);
          n[t].style.zIndex = String(i);
        });
      }
      function Q(t, i, s, r, o, l) {
        return (
          o || (i = F(f, t, i, s, r, !1, l)),
          !1 !== i &&
            ((function (t, i) {
              (f[t] = i), (d[t] = u.fromStepping(i));
              var s = "translate(" + W(K(i, 0) - E + "%", "0") + ")";
              if (
                ((n[t].style[e.transformRule] = s),
                e.events.invertConnects &&
                  f.length > 1 &&
                  !f.every(function (t, e, i) {
                    return 0 === e || t >= i[e - 1];
                  }) !== b)
              ) {
                (b = !b),
                  o$(
                    e,
                    e.connect.map(function (t) {
                      return !t;
                    })
                  ),
                  tr();
                return;
              }
              J(t), J(t + 1), b && (J(t - 1), J(t + 2));
            })(t, i),
            !0)
        );
      }
      function J(t) {
        if (o[t]) {
          var i = f.slice();
          b &&
            i.sort(function (t, e) {
              return t - e;
            });
          var s = 0,
            r = 100;
          0 !== t && (s = i[t - 1]), t !== o.length - 1 && (r = i[t]);
          var n = r - s,
            l = "translate(" + W(K(s, n) + "%", "0") + ")",
            a = "scale(" + W(n / 100, "1") + ")";
          o[t].style[e.transformRule] = l + " " + a;
        }
      }
      function tt(t, i) {
        return null === t || !1 === t || void 0 === t
          ? f[i]
          : ("number" == typeof t && (t = String(t)),
            !1 !== (t = e.format.from(t)) && (t = u.toStepping(t)),
            !1 === t || isNaN(t))
          ? f[i]
          : t;
      }
      function te(i, s, r) {
        var n = ox(i),
          o = void 0 === f[0];
        (s = void 0 === s || s),
          e.animate && !o && ov(t, e.cssClasses.tap, e.animationDuration),
          p.forEach(function (t) {
            Q(t, tt(n[t], t), !0, !1, r);
          });
        var l = 1 === p.length ? 0 : 1;
        if (o && u.hasNoSize() && ((r = !0), (f[0] = 0), p.length > 1)) {
          var a = 100 / (p.length - 1);
          p.forEach(function (t) {
            f[t] = t * a;
          });
        }
        for (; l < p.length; ++l)
          p.forEach(function (t) {
            Q(t, f[t], !0, !0, r);
          });
        G(),
          p.forEach(function (t) {
            z("update", t), null !== n[t] && s && z("set", t);
          });
      }
      function ti(t) {
        if ((void 0 === t && (t = !1), t))
          return 1 === d.length ? d[0] : d.slice(0);
        var i = d.map(e.format.to);
        return 1 === i.length ? i[0] : i;
      }
      function ts(t) {
        var i = f[t],
          s = u.getNearbySteps(i),
          r = d[t],
          n = s.thisStep.step,
          o = null;
        if (e.snap)
          return [
            r - s.stepBefore.startValue || null,
            s.stepAfter.startValue - r || null,
          ];
        !1 !== n &&
          r + n > s.stepAfter.startValue &&
          (n = s.stepAfter.startValue - r),
          (o =
            r > s.thisStep.startValue
              ? s.thisStep.step
              : !1 !== s.stepBefore.step && r - s.stepBefore.highestStep),
          100 === i ? (n = null) : 0 === i && (o = null);
        var l = u.countStepDecimals();
        return (
          null !== n && !1 !== n && (n = Number(n.toFixed(l))),
          null !== o && !1 !== o && (o = Number(o.toFixed(l))),
          [o, n]
        );
      }
      function tr() {
        for (; r.firstChild; ) r.removeChild(r.firstChild);
        for (var t = 0; t <= e.handles; t++) (o[t] = N(r, e.connect[t])), J(t);
        B({ drag: e.events.drag, fixed: !0 });
      }
      ow(t, e.cssClasses.target),
        0 === e.dir ? ow(t, e.cssClasses.ltr) : ow(t, e.cssClasses.rtl),
        0 === e.ort
          ? ow(t, e.cssClasses.horizontal)
          : ow(t, e.cssClasses.vertical),
        "rtl" === getComputedStyle(t).direction
          ? ow(t, e.cssClasses.textDirectionRtl)
          : ow(t, e.cssClasses.textDirectionLtr),
        (s = w(t, e.cssClasses.base)),
        (function (t, i) {
          (r = w(i, e.cssClasses.connects)),
            (n = []),
            (o = []).push(N(r, t[0]));
          for (var s = 0; s < e.handles; s++)
            n.push(
              (function (t, i) {
                var s = w(t, e.cssClasses.origin),
                  r = w(s, e.cssClasses.handle);
                if (
                  (w(r, e.cssClasses.touchArea),
                  r.setAttribute("data-handle", String(i)),
                  e.keyboardSupport &&
                    (r.setAttribute("tabindex", "0"),
                    r.addEventListener("keydown", function (t) {
                      return (function (t, i) {
                        if (A() || S(i)) return !1;
                        var s,
                          r = ["Left", "Right"],
                          n = ["Down", "Up"],
                          o = ["PageDown", "PageUp"];
                        e.dir && !e.ort
                          ? r.reverse()
                          : e.ort && !e.dir && (n.reverse(), o.reverse());
                        var l = t.key.replace("Arrow", ""),
                          a = l === o[0],
                          c = l === o[1],
                          h = l === n[0] || l === r[0] || a,
                          p = l === n[1] || l === r[1] || c,
                          m = "End" === l;
                        if (!h && !p && "Home" !== l && !m) return !0;
                        if ((t.preventDefault(), p || h)) {
                          var g = h ? 0 : 1,
                            b = ts(i)[g];
                          if (null === b) return !1;
                          !1 === b &&
                            (b = u.getDefaultStep(
                              f[i],
                              h,
                              e.keyboardDefaultStep
                            )),
                            c || a
                              ? (b *= e.keyboardPageMultiplier)
                              : (b *= e.keyboardMultiplier),
                            (b = (h ? -1 : 1) * (b = Math.max(b, 1e-7))),
                            (s = d[i] + b);
                        } else s = m ? e.spectrum.xVal[e.spectrum.xVal.length - 1] : e.spectrum.xVal[0];
                        return (
                          Q(i, u.toStepping(s), !0, !0),
                          z("slide", i),
                          z("update", i),
                          z("change", i),
                          z("set", i),
                          !1
                        );
                      })(t, i);
                    })),
                  void 0 !== e.handleAttributes)
                ) {
                  var n = e.handleAttributes[i];
                  Object.keys(n).forEach(function (t) {
                    r.setAttribute(t, n[t]);
                  });
                }
                return (
                  r.setAttribute("role", "slider"),
                  r.setAttribute(
                    "aria-orientation",
                    e.ort ? "vertical" : "horizontal"
                  ),
                  0 === i
                    ? ow(r, e.cssClasses.handleLower)
                    : i === e.handles - 1 && ow(r, e.cssClasses.handleUpper),
                  (s.handle = r),
                  s
                );
              })(i, s)
            ),
              (p[s] = s),
              o.push(N(r, t[s + 1]));
        })(e.connect, s),
        B(e.events),
        te(e.start),
        e.pips && C(e.pips),
        e.tooltips && O(),
        H("update" + oT.aria),
        U("update" + oT.aria, function (t, i, s, r, o) {
          p.forEach(function (t) {
            var i = n[t],
              r = F(f, t, 0, !0, !0, !0),
              l = F(f, t, 100, !0, !0, !0),
              a = o[t],
              c = String(e.ariaFormat.to(s[t]));
            (r = u.fromStepping(r).toFixed(1)),
              (l = u.fromStepping(l).toFixed(1)),
              (a = u.fromStepping(a).toFixed(1)),
              i.children[0].setAttribute("aria-valuemin", r),
              i.children[0].setAttribute("aria-valuemax", l),
              i.children[0].setAttribute("aria-valuenow", a),
              i.children[0].setAttribute("aria-valuetext", c);
          });
        });
      var tn = {
        destroy: function () {
          for (
            H(oT.aria),
              H(oT.tooltips),
              Object.keys(e.cssClasses).forEach(function (i) {
                oN(t, e.cssClasses[i]);
              });
            t.firstChild;

          )
            t.removeChild(t.firstChild);
          delete t.noUiSlider;
        },
        steps: function () {
          return p.map(ts);
        },
        on: U,
        off: H,
        get: ti,
        set: te,
        setHandle: function (t, e, i, s) {
          if (!((t = Number(t)) >= 0 && t < p.length))
            throw Error("noUiSlider: invalid handle number, got: " + t);
          Q(t, tt(e, t), !0, !0, s), z("update", t), i && z("set", t);
        },
        reset: function (t) {
          te(e.start, t);
        },
        disable: function (e) {
          null != e
            ? (n[e].setAttribute("disabled", ""),
              n[e].handle.removeAttribute("tabindex"))
            : (t.setAttribute("disabled", ""),
              n.forEach(function (t) {
                t.handle.removeAttribute("tabindex");
              }));
        },
        enable: function (e) {
          null != e
            ? (n[e].removeAttribute("disabled"),
              n[e].handle.setAttribute("tabindex", "0"))
            : (t.removeAttribute("disabled"),
              n.forEach(function (t) {
                t.removeAttribute("disabled"),
                  t.handle.setAttribute("tabindex", "0");
              }));
        },
        __moveHandles: function (t, e, i) {
          Y(t, e, f, i);
        },
        options: i,
        updateOptions: function (t, s) {
          var r = ti(),
            n = [
              "margin",
              "limit",
              "padding",
              "range",
              "animate",
              "snap",
              "step",
              "format",
              "pips",
              "tooltips",
              "connect",
            ];
          n.forEach(function (e) {
            void 0 !== t[e] && (i[e] = t[e]);
          });
          var o = o1(i);
          n.forEach(function (i) {
            void 0 !== t[i] && (e[i] = o[i]);
          }),
            (u = o.spectrum),
            (e.margin = o.margin),
            (e.limit = o.limit),
            (e.padding = o.padding),
            e.pips ? C(e.pips) : T(),
            e.tooltips ? O() : k(),
            (f = []),
            te(null != t.start ? t.start : r, s),
            t.connect && tr();
        },
        target: t,
        removePips: T,
        removeTooltips: k,
        getPositions: function () {
          return f.slice();
        },
        getTooltips: function () {
          return a;
        },
        getOrigins: function () {
          return n;
        },
        pips: C,
      };
      return tn;
    })(t, o1(e), e);
    return (t.noUiSlider = i), i;
  },
};
const o5 = (t, e = 0, i = 1) => (t > i ? i : t < e ? e : t),
  o3 = (t, e = 0, i = Math.pow(10, e)) => Math.round(i * t) / i,
  o4 = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
  o6 = (t) =>
    ("#" === t[0] && (t = t.substring(1)), t.length < 6)
      ? {
          r: parseInt(t[0] + t[0], 16),
          g: parseInt(t[1] + t[1], 16),
          b: parseInt(t[2] + t[2], 16),
          a: 4 === t.length ? o3(parseInt(t[3] + t[3], 16) / 255, 2) : 1,
        }
      : {
          r: parseInt(t.substring(0, 2), 16),
          g: parseInt(t.substring(2, 4), 16),
          b: parseInt(t.substring(4, 6), 16),
          a: 8 === t.length ? o3(parseInt(t.substring(6, 8), 16) / 255, 2) : 1,
        },
  o8 = (t, e = "deg") => Number(t) * (o4[e] || 1),
  o9 = ({ h: t, s: e, l: i, a: s }) => ({
    h: t,
    s: (e *= (i < 50 ? i : 100 - i) / 100) > 0 ? ((2 * e) / (i + e)) * 100 : 0,
    v: i + e,
    a: s,
  }),
  o7 = (t) => ln(ls(t)),
  lt = ({ h: t, s: e, v: i, a: s }) => {
    let r = ((200 - e) * i) / 100;
    return {
      h: o3(t),
      s: o3(
        r > 0 && r < 200 ? ((e * i) / 100 / (r <= 100 ? r : 200 - r)) * 100 : 0
      ),
      l: o3(r / 2),
      a: o3(s, 2),
    };
  },
  le = (t) => {
    let { h: e, s: i, l: s } = lt(t);
    return `hsl(${e}, ${i}%, ${s}%)`;
  },
  li = (t) => {
    let { h: e, s: i, l: s, a: r } = lt(t);
    return `hsla(${e}, ${i}%, ${s}%, ${r})`;
  },
  ls = ({ h: t, s: e, v: i, a: s }) => {
    let r = Math.floor((t = (t / 360) * 6)),
      n = (i /= 100) * (1 - (e /= 100)),
      o = i * (1 - (t - r) * e),
      l = i * (1 - (1 - t + r) * e),
      a = r % 6;
    return {
      r: o3(255 * [i, o, n, n, l, i][a]),
      g: o3(255 * [l, i, i, o, n, n][a]),
      b: o3(255 * [n, n, l, i, i, o][a]),
      a: o3(s, 2),
    };
  },
  lr = (t) => {
    let e = t.toString(16);
    return e.length < 2 ? "0" + e : e;
  },
  ln = ({ r: t, g: e, b: i, a: s }) => {
    let r = s < 1 ? lr(o3(255 * s)) : "";
    return "#" + lr(t) + lr(e) + lr(i) + r;
  },
  lo = ({ r: t, g: e, b: i, a: s }) => {
    let r = Math.max(t, e, i),
      n = r - Math.min(t, e, i),
      o = n
        ? r === t
          ? (e - i) / n
          : r === e
          ? 2 + (i - t) / n
          : 4 + (t - e) / n
        : 0;
    return {
      h: o3(60 * (o < 0 ? o + 6 : o)),
      s: o3(r ? (n / r) * 100 : 0),
      v: o3((r / 255) * 100),
      a: s,
    };
  },
  ll = (t, e) => {
    if (t === e) return !0;
    for (let i in t) if (t[i] !== e[i]) return !1;
    return !0;
  },
  la = (t, e) => t.replace(/\s/g, "") === e.replace(/\s/g, ""),
  lc = {},
  lh = (t) => {
    let e = lc[t];
    return (
      e ||
        (((e = document.createElement("template")).innerHTML = t), (lc[t] = e)),
      e
    );
  },
  lu = (t, e, i) => {
    t.dispatchEvent(new CustomEvent(e, { bubbles: !0, detail: i }));
  };
let ld = !1;
const lf = (t) => "touches" in t,
  lp = (t) => (!ld || !!lf(t)) && (ld || (ld = lf(t)), !0),
  lm = (t, e) => {
    let i = lf(e) ? e.touches[0] : e,
      s = t.el.getBoundingClientRect();
    lu(
      t.el,
      "move",
      t.getMove({
        x: o5((i.pageX - (s.left + window.pageXOffset)) / s.width),
        y: o5((i.pageY - (s.top + window.pageYOffset)) / s.height),
      })
    );
  },
  lg = (t, e) => {
    let i = e.keyCode;
    i > 40 ||
      (t.xy && i < 37) ||
      i < 33 ||
      (e.preventDefault(),
      lu(
        t.el,
        "move",
        t.getMove(
          {
            x:
              39 === i
                ? 0.01
                : 37 === i
                ? -0.01
                : 34 === i
                ? 0.05
                : 33 === i
                ? -0.05
                : 35 === i
                ? 1
                : 36 === i
                ? -1
                : 0,
            y: 40 === i ? 0.01 : 38 === i ? -0.01 : 0,
          },
          !0
        )
      ));
  };
class lb {
  constructor(t, e, i, s) {
    let r = lh(
      `<div role="slider" tabindex="0" part="${e}" ${i}><div part="${e}-pointer"></div></div>`
    );
    t.appendChild(r.content.cloneNode(!0));
    let n = t.querySelector(`[part=${e}]`);
    n.addEventListener("mousedown", this),
      n.addEventListener("touchstart", this),
      n.addEventListener("keydown", this),
      (this.el = n),
      (this.xy = s),
      (this.nodes = [n.firstChild, n]);
  }
  set dragging(t) {
    let e = t ? document.addEventListener : document.removeEventListener;
    e(ld ? "touchmove" : "mousemove", this),
      e(ld ? "touchend" : "mouseup", this);
  }
  handleEvent(t) {
    switch (t.type) {
      case "mousedown":
      case "touchstart":
        if ((t.preventDefault(), !lp(t) || (!ld && 0 != t.button))) return;
        this.el.focus(), lm(this, t), (this.dragging = !0);
        break;
      case "mousemove":
      case "touchmove":
        t.preventDefault(), lm(this, t);
        break;
      case "mouseup":
      case "touchend":
        this.dragging = !1;
        break;
      case "keydown":
        lg(this, t);
    }
  }
  style(t) {
    t.forEach((t, e) => {
      for (let i in t) this.nodes[e].style.setProperty(i, t[i]);
    });
  }
}
class lv extends lb {
  constructor(t) {
    super(
      t,
      "hue",
      'aria-label="Hue" aria-valuemin="0" aria-valuemax="360"',
      !1
    );
  }
  update({ h: t }) {
    (this.h = t),
      this.style([
        {
          left: `${(t / 360) * 100}%`,
          color: le({ h: t, s: 100, v: 100, a: 1 }),
        },
      ]),
      this.el.setAttribute("aria-valuenow", `${o3(t)}`);
  }
  getMove(t, e) {
    return { h: e ? o5(this.h + 360 * t.x, 0, 360) : 360 * t.x };
  }
}
class ly extends lb {
  constructor(t) {
    super(t, "saturation", 'aria-label="Color"', !0);
  }
  update(t) {
    (this.hsva = t),
      this.style([
        { top: `${100 - t.v}%`, left: `${t.s}%`, color: le(t) },
        { "background-color": le({ h: t.h, s: 100, v: 100, a: 1 }) },
      ]),
      this.el.setAttribute(
        "aria-valuetext",
        `Saturation ${o3(t.s)}%, Brightness ${o3(t.v)}%`
      );
  }
  getMove(t, e) {
    return {
      s: e ? o5(this.hsva.s + 100 * t.x, 0, 100) : 100 * t.x,
      v: e ? o5(this.hsva.v - 100 * t.y, 0, 100) : Math.round(100 - 100 * t.y),
    };
  }
}
const lx = Symbol("same"),
  lE = Symbol("color"),
  lw = Symbol("hsva"),
  lN = Symbol("update"),
  l_ = Symbol("parts"),
  lA = Symbol("css"),
  lS = Symbol("sliders");
class lk extends HTMLElement {
  static get observedAttributes() {
    return ["color"];
  }
  get [lA]() {
    return [
      ':host{display:flex;flex-direction:column;position:relative;width:200px;height:200px;user-select:none;-webkit-user-select:none;cursor:default}:host([hidden]){display:none!important}[role=slider]{position:relative;touch-action:none;user-select:none;-webkit-user-select:none;outline:0}[role=slider]:last-child{border-radius:0 0 8px 8px}[part$=pointer]{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;display:flex;place-content:center center;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}[part$=pointer]::after{content:"";width:100%;height:100%;border-radius:inherit;background-color:currentColor}[role=slider]:focus [part$=pointer]{transform:translate(-50%,-50%) scale(1.1)}',
      "[part=hue]{flex:0 0 24px;background:linear-gradient(to right,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}[part=hue-pointer]{top:50%;z-index:2}",
      "[part=saturation]{flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,rgba(255,255,255,0));box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part=saturation-pointer]{z-index:3}",
    ];
  }
  get [lS]() {
    return [ly, lv];
  }
  get color() {
    return this[lE];
  }
  set color(t) {
    if (!this[lx](t)) {
      let e = this.colorModel.toHsva(t);
      this[lN](e), (this[lE] = t);
    }
  }
  constructor() {
    super();
    let t = lh(`<style>${this[lA].join("")}</style>`),
      e = this.attachShadow({ mode: "open" });
    e.appendChild(t.content.cloneNode(!0)),
      e.addEventListener("move", this),
      (this[l_] = this[lS].map((t) => new t(e)));
  }
  connectedCallback() {
    if (this.hasOwnProperty("color")) {
      let t = this.color;
      delete this.color, (this.color = t);
    } else this.color || (this.color = this.colorModel.defaultColor);
  }
  attributeChangedCallback(t, e, i) {
    let s = this.colorModel.fromAttr(i);
    this[lx](s) || (this.color = s);
  }
  handleEvent(t) {
    let e;
    let i = this[lw],
      s = { ...i, ...t.detail };
    this[lN](s),
      ll(s, i) ||
        this[lx]((e = this.colorModel.fromHsva(s))) ||
        ((this[lE] = e), lu(this, "color-changed", { value: e }));
  }
  [lx](t) {
    return this.color && this.colorModel.equal(t, this.color);
  }
  [lN](t) {
    (this[lw] = t), this[l_].forEach((e) => e.update(t));
  }
}
const lO = {
  defaultColor: "#000",
  toHsva: (t) => lo(o6(t)),
  fromHsva: ({ h: t, s: e, v: i }) => o7({ h: t, s: e, v: i, a: 1 }),
  equal: (t, e) => t.toLowerCase() === e.toLowerCase() || ll(o6(t), o6(e)),
  fromAttr: (t) => t,
};
class lL extends lk {
  get colorModel() {
    return lO;
  }
}
customElements.define("hex-color-picker", class extends lL {});
const lT = {
  defaultColor: "hsl(0, 0%, 0%)",
  toHsva: (t) => {
    let e =
      /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
        t
      );
    return e
      ? o9({
          h: o8(e[1], e[2]),
          s: Number(e[3]),
          l: Number(e[4]),
          a: void 0 === e[5] ? 1 : Number(e[5]) / (e[6] ? 100 : 1),
        })
      : { h: 0, s: 0, v: 0, a: 1 };
  },
  fromHsva: le,
  equal: la,
  fromAttr: (t) => t,
};
class lC extends lk {
  get colorModel() {
    return lT;
  }
}
customElements.define("hsl-string-color-picker", class extends lC {});
class lq extends lb {
  constructor(t) {
    super(
      t,
      "alpha",
      'aria-label="Alpha" aria-valuemin="0" aria-valuemax="1"',
      !1
    );
  }
  update(t) {
    this.hsva = t;
    let e = li({ ...t, a: 0 }),
      i = li({ ...t, a: 1 }),
      s = 100 * t.a;
    this.style([
      { left: `${s}%`, color: li(t) },
      { "--gradient": `linear-gradient(90deg, ${e}, ${i}` },
    ]);
    let r = o3(s);
    this.el.setAttribute("aria-valuenow", `${r}`),
      this.el.setAttribute("aria-valuetext", `${r}%`);
  }
  getMove(t, e) {
    return { a: e ? o5(this.hsva.a + t.x) : t.x };
  }
}
class lM extends lk {
  get [lA]() {
    return [
      ...super[lA],
      '[part=alpha]{flex:0 0 24px}[part=alpha]::after{display:block;content:"";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;background-image:var(--gradient);box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part^=alpha]{background-color:#fff;background-image:url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><rect x="8" width="8" height="8"/><rect y="8" width="8" height="8"/></svg>\')}[part=alpha-pointer]{top:50%}',
    ];
  }
  get [lS]() {
    return [...super[lS], lq];
  }
}
const lD = {
  defaultColor: "rgba(0, 0, 0, 1)",
  toHsva: (t) => {
    let e =
      /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
        t
      );
    return e
      ? lo({
          r: Number(e[1]) / (e[2] ? 100 / 255 : 1),
          g: Number(e[3]) / (e[4] ? 100 / 255 : 1),
          b: Number(e[5]) / (e[6] ? 100 / 255 : 1),
          a: void 0 === e[7] ? 1 : Number(e[7]) / (e[8] ? 100 : 1),
        })
      : { h: 0, s: 0, v: 0, a: 1 };
  },
  fromHsva: (t) => {
    let { r: e, g: i, b: s, a: r } = ls(t);
    return `rgba(${e}, ${i}, ${s}, ${r})`;
  },
  equal: la,
  fromAttr: (t) => t,
};
class lj extends lM {
  get colorModel() {
    return lD;
  }
}
customElements.define("rgba-string-color-picker", class extends lj {});
const lR = (t, e, i = !1) => {
    let s = [
        ...(i ? ["Select"] : []),
        "Name",
        "Country",
        "Ext",
        "Start Date",
        "Completions (%)",
      ],
      r = [
        "USA",
        "India",
        "UK",
        "Canada",
        "Australia",
        "Germany",
        "France",
        "Italy",
        "Spain",
        "Japan",
        "China",
        "Brazil",
        "Russia",
        "South Africa",
        "Mexico",
        "Netherlands",
        "Sweden",
        "Norway",
        "Denmark",
        "Argentina",
        "South Korea",
        "Turkey",
        "Switzerland",
        "New Zealand",
        "Saudi Arabia",
      ],
      n = Array.from({ length: e }, () => ({
        Select: "",
        Name: `User ${Math.floor(1e3 * Math.random())}`,
        Country: r[Math.floor(Math.random() * r.length)],
        Ext: `${Math.floor(1e4 + 9e4 * Math.random())}`,
        "Start Date": `${String(Math.floor(1 + 28 * Math.random())).padStart(
          2,
          "0"
        )}/${String(Math.floor(1 + 12 * Math.random())).padStart(
          2,
          "0"
        )}/202${Math.floor(0 + 4 * Math.random())}`,
        "Completions (%)": `${Math.floor(50 + 50 * Math.random())}%`,
      })),
      o = document.createElement("thead"),
      l = document.createElement("tr");
    s.forEach((t) => {
      let e = document.createElement("th");
      (e.textContent = t), l.appendChild(e);
    }),
      o.appendChild(l),
      t.appendChild(o);
    let a = document.createElement("tbody");
    n.forEach((t) => {
      let e = document.createElement("tr");
      s.forEach((i) => {
        let s = document.createElement("td");
        (s.textContent = t[i]), e.appendChild(s);
      }),
        a.appendChild(e);
    }),
      t.appendChild(a);
  },
  lV = (t) => "[object Object]" === Object.prototype.toString.call(t),
  lI = (t, e) => {
    let i = document.createElement(t);
    if (e && "object" == typeof e)
      for (let t in e)
        "html" === t ? (i.innerHTML = e[t]) : i.setAttribute(t, e[t]);
    return i;
  },
  lP = (t) =>
    ["#text", "#comment"].includes(t.nodeName)
      ? t.data
      : t.childNodes
      ? t.childNodes.map((t) => lP(t)).join("")
      : "",
  l$ = (t) =>
    null == t
      ? ""
      : t.hasOwnProperty("text") || t.hasOwnProperty("data")
      ? t.text ?? l$(t.data)
      : t.hasOwnProperty("nodeName")
      ? lP(t)
      : String(t),
  lB = function (t, e) {
    let i = 0,
      s = 0;
    for (; i < t + 1; ) e[s].hidden || (i += 1), (s += 1);
    return s - 1;
  },
  lU = function (t) {
    let e = {};
    if (t) for (let i of t) e[i.name] = i.value;
    return e;
  },
  lH = (t) =>
    t
      ? t
          .trim()
          .split(" ")
          .map((t) => `.${t}`)
          .join("")
      : null,
  lz = (t, e) => !e?.split(" ").some((e) => !t.classList.contains(e)),
  lF = (t, e) => (t ? (e ? `${t} ${e}` : t) : e || ""),
  lW = function (t, e = 300) {
    let i;
    return (...s) => {
      clearTimeout(i), (i = window.setTimeout(() => t(), e));
    };
  };
var lY = function () {
  return (lY =
    Object.assign ||
    function (t) {
      for (var e, i = arguments, s = 1, r = arguments.length; s < r; s++)
        for (var n in (e = i[s]))
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t;
    }).apply(this, arguments);
};
function lK(t, e, i) {
  if (i || 2 == arguments.length)
    for (var s, r = 0, n = e.length; r < n; r++)
      (!s && r in e) ||
        (s || (s = Array.prototype.slice.call(e, 0, r)), (s[r] = e[r]));
  return t.concat(s || Array.prototype.slice.call(e));
}
"function" == typeof SuppressedError && SuppressedError;
var lZ = (function () {
  function t(t) {
    void 0 === t && (t = {});
    var e = this;
    Object.entries(t).forEach(function (t) {
      var i = t[0],
        s = t[1];
      return (e[i] = s);
    });
  }
  return (
    (t.prototype.toString = function () {
      return JSON.stringify(this);
    }),
    (t.prototype.setValue = function (t, e) {
      return (this[t] = e), this;
    }),
    t
  );
})();
function lX(t) {
  for (var e = arguments, i = [], s = 1; s < arguments.length; s++)
    i[s - 1] = e[s];
  return (
    null != t &&
    i.some(function (e) {
      var i, s;
      return (
        "function" ==
          typeof (null ===
            (s =
              null === (i = null == t ? void 0 : t.ownerDocument) ||
              void 0 === i
                ? void 0
                : i.defaultView) || void 0 === s
            ? void 0
            : s[e]) && t instanceof t.ownerDocument.defaultView[e]
      );
    })
  );
}
function lG(t, e, i) {
  var s;
  return (
    "#text" === t.nodeName
      ? (s = i.document.createTextNode(t.data))
      : "#comment" === t.nodeName
      ? (s = i.document.createComment(t.data))
      : (e
          ? ((s = i.document.createElementNS(
              "http://www.w3.org/2000/svg",
              t.nodeName
            )),
            "foreignObject" === t.nodeName && (e = !1))
          : "svg" === t.nodeName.toLowerCase()
          ? ((s = i.document.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg"
            )),
            (e = !0))
          : (s = i.document.createElement(t.nodeName)),
        t.attributes &&
          Object.entries(t.attributes).forEach(function (t) {
            var e = t[0],
              i = t[1];
            return s.setAttribute(e, i);
          }),
        t.childNodes &&
          t.childNodes.forEach(function (t) {
            return s.appendChild(lG(t, e, i));
          }),
        i.valueDiffing &&
          (t.value &&
            lX(
              s,
              "HTMLButtonElement",
              "HTMLDataElement",
              "HTMLInputElement",
              "HTMLLIElement",
              "HTMLMeterElement",
              "HTMLOptionElement",
              "HTMLProgressElement",
              "HTMLParamElement"
            ) &&
            (s.value = t.value),
          t.checked && lX(s, "HTMLInputElement") && (s.checked = t.checked),
          t.selected &&
            lX(s, "HTMLOptionElement") &&
            (s.selected = t.selected))),
    s
  );
}
var lQ = function (t, e) {
  for (e = e.slice(); e.length > 0; ) {
    var i = e.splice(0, 1)[0];
    t = t.childNodes[i];
  }
  return t;
};
function lJ(t, e, i) {
  var s,
    r,
    n,
    o,
    l = e[i._const.action],
    a = e[i._const.route];
  [i._const.addElement, i._const.addTextElement].includes(l) || (r = lQ(t, a));
  var c = { diff: e, node: r };
  if (i.preDiffApply(c)) return !0;
  switch (l) {
    case i._const.addAttribute:
      if (!r || !lX(r, "Element")) return !1;
      r.setAttribute(e[i._const.name], e[i._const.value]);
      break;
    case i._const.modifyAttribute:
      if (!r || !lX(r, "Element")) return !1;
      r.setAttribute(e[i._const.name], e[i._const.newValue]),
        lX(r, "HTMLInputElement") &&
          "value" === e[i._const.name] &&
          (r.value = e[i._const.newValue]);
      break;
    case i._const.removeAttribute:
      if (!r || !lX(r, "Element")) return !1;
      r.removeAttribute(e[i._const.name]);
      break;
    case i._const.modifyTextElement:
      if (!r || !lX(r, "Text")) return !1;
      i.textDiff(r, r.data, e[i._const.oldValue], e[i._const.newValue]),
        lX(r.parentNode, "HTMLTextAreaElement") &&
          (r.parentNode.value = e[i._const.newValue]);
      break;
    case i._const.modifyValue:
      if (!r || void 0 === r.value) return !1;
      r.value = e[i._const.newValue];
      break;
    case i._const.modifyComment:
      if (!r || !lX(r, "Comment")) return !1;
      i.textDiff(r, r.data, e[i._const.oldValue], e[i._const.newValue]);
      break;
    case i._const.modifyChecked:
      if (!r || void 0 === r.checked) return !1;
      r.checked = e[i._const.newValue];
      break;
    case i._const.modifySelected:
      if (!r || void 0 === r.selected) return !1;
      r.selected = e[i._const.newValue];
      break;
    case i._const.replaceElement:
      var h =
        "svg" === e[i._const.newValue].nodeName.toLowerCase() ||
        "http://www.w3.org/2000/svg" === r.parentNode.namespaceURI;
      r.parentNode.replaceChild(lG(e[i._const.newValue], h, i), r);
      break;
    case i._const.relocateGroup:
      lK([], Array(e[i._const.groupLength]), !0)
        .map(function () {
          return r.removeChild(r.childNodes[e[i._const.from]]);
        })
        .forEach(function (t, s) {
          0 === s && (o = r.childNodes[e[i._const.to]]),
            r.insertBefore(t, o || null);
        });
      break;
    case i._const.removeElement:
      r.parentNode.removeChild(r);
      break;
    case i._const.addElement:
      var u = (s = a.slice()).splice(s.length - 1, 1)[0];
      if (!lX((r = lQ(t, s)), "Element")) return !1;
      r.insertBefore(
        lG(
          e[i._const.element],
          "http://www.w3.org/2000/svg" === r.namespaceURI,
          i
        ),
        r.childNodes[u] || null
      );
      break;
    case i._const.removeTextElement:
      if (!r || 3 !== r.nodeType) return !1;
      var d = r.parentNode;
      d.removeChild(r), lX(d, "HTMLTextAreaElement") && (d.value = "");
      break;
    case i._const.addTextElement:
      if (
        ((u = (s = a.slice()).splice(s.length - 1, 1)[0]),
        (n = i.document.createTextNode(e[i._const.value])),
        !(r = lQ(t, s)).childNodes)
      )
        return !1;
      r.insertBefore(n, r.childNodes[u] || null),
        lX(r.parentNode, "HTMLTextAreaElement") &&
          (r.parentNode.value = e[i._const.value]);
      break;
    default:
      console.log("unknown action");
  }
  return i.postDiffApply({ diff: c.diff, node: c.node, newNode: n }), !0;
}
function l0(t, e, i) {
  var s = t[e];
  (t[e] = t[i]), (t[i] = s);
}
var l1 = function (t) {
    var e = [];
    return (
      e.push(t.nodeName),
      "#text" !== t.nodeName &&
        "#comment" !== t.nodeName &&
        t.attributes &&
        (t.attributes.class &&
          e.push(
            ""
              .concat(t.nodeName, ".")
              .concat(t.attributes.class.replace(/ /g, "."))
          ),
        t.attributes.id &&
          e.push("".concat(t.nodeName, "#").concat(t.attributes.id))),
      e
    );
  },
  l2 = function (t) {
    var e = {},
      i = {};
    return (
      t.forEach(function (t) {
        l1(t).forEach(function (t) {
          var s = t in e;
          s || t in i ? s && (delete e[t], (i[t] = !0)) : (e[t] = !0);
        });
      }),
      e
    );
  },
  l5 = function (t, e) {
    var i = l2(t),
      s = l2(e),
      r = {};
    return (
      Object.keys(i).forEach(function (t) {
        s[t] && (r[t] = !0);
      }),
      r
    );
  },
  l3 = function (t) {
    return (
      delete t.outerDone,
      delete t.innerDone,
      delete t.valueDone,
      !t.childNodes || t.childNodes.every(l3)
    );
  },
  l4 = function (t) {
    if (Object.prototype.hasOwnProperty.call(t, "data"))
      return {
        nodeName: "#text" === t.nodeName ? "#text" : "#comment",
        data: t.data,
      };
    var e = { nodeName: t.nodeName };
    return (
      Object.prototype.hasOwnProperty.call(t, "attributes") &&
        (e.attributes = lY({}, t.attributes)),
      Object.prototype.hasOwnProperty.call(t, "checked") &&
        (e.checked = t.checked),
      Object.prototype.hasOwnProperty.call(t, "value") && (e.value = t.value),
      Object.prototype.hasOwnProperty.call(t, "selected") &&
        (e.selected = t.selected),
      Object.prototype.hasOwnProperty.call(t, "childNodes") &&
        (e.childNodes = t.childNodes.map(function (t) {
          return l4(t);
        })),
      e
    );
  },
  l6 = function (t, e) {
    if (
      !["nodeName", "value", "checked", "selected", "data"].every(function (i) {
        return t[i] === e[i];
      })
    )
      return !1;
    if (Object.prototype.hasOwnProperty.call(t, "data")) return !0;
    if (!!t.attributes != !!e.attributes || !!t.childNodes != !!e.childNodes)
      return !1;
    if (t.attributes) {
      var i = Object.keys(t.attributes),
        s = Object.keys(e.attributes);
      if (
        i.length !== s.length ||
        !i.every(function (i) {
          return t.attributes[i] === e.attributes[i];
        })
      )
        return !1;
    }
    return (
      !t.childNodes ||
      (t.childNodes.length === e.childNodes.length &&
        !!t.childNodes.every(function (t, i) {
          return l6(t, e.childNodes[i]);
        }))
    );
  },
  l8 = function (t, e, i, s, r) {
    if ((void 0 === r && (r = !1), !t || !e || t.nodeName !== e.nodeName))
      return !1;
    if (["#text", "#comment"].includes(t.nodeName))
      return !!r || t.data === e.data;
    if (t.nodeName in i) return !0;
    if (t.attributes && e.attributes) {
      if (t.attributes.id) {
        if (t.attributes.id !== e.attributes.id) return !1;
        if ("".concat(t.nodeName, "#").concat(t.attributes.id) in i) return !0;
      }
      if (
        t.attributes.class &&
        t.attributes.class === e.attributes.class &&
        ""
          .concat(t.nodeName, ".")
          .concat(t.attributes.class.replace(/ /g, ".")) in i
      )
        return !0;
    }
    if (s) return !0;
    var n = t.childNodes ? t.childNodes.slice().reverse() : [],
      o = e.childNodes ? e.childNodes.slice().reverse() : [];
    if (n.length !== o.length) return !1;
    if (r)
      return n.every(function (t, e) {
        return t.nodeName === o[e].nodeName;
      });
    var l = l5(n, o);
    return n.every(function (t, e) {
      return l8(t, o[e], l, !0, !0);
    });
  },
  l9 = function (t, e) {
    return lK([], Array(t), !0).map(function () {
      return e;
    });
  },
  l7 = function (t, e) {
    for (
      var i = t.childNodes ? t.childNodes : [],
        s = e.childNodes ? e.childNodes : [],
        r = l9(i.length, !1),
        n = l9(s.length, !1),
        o = [],
        l = function () {
          return arguments[1];
        },
        a = !1;
      !a;

    )
      !(function () {
        var t = (function (t, e, i, s) {
          var r = 0,
            n = [],
            o = t.length,
            l = e.length,
            a = lK([], Array(o + 1), !0).map(function () {
              return [];
            }),
            c = l5(t, e),
            h = o === l;
          h &&
            t.some(function (t, i) {
              var s = l1(t),
                r = l1(e[i]);
              return s.length !== r.length
                ? ((h = !1), !0)
                : (s.some(function (t, e) {
                    if (t !== r[e]) return (h = !1), !0;
                  }),
                  !h || void 0);
            });
          for (var u = 0; u < o; u++)
            for (var d = t[u], f = 0; f < l; f++) {
              var p = e[f];
              i[u] || s[f] || !l8(d, p, c, h)
                ? (a[u + 1][f + 1] = 0)
                : ((a[u + 1][f + 1] = a[u][f] ? a[u][f] + 1 : 1),
                  a[u + 1][f + 1] >= r &&
                    ((r = a[u + 1][f + 1]), (n = [u + 1, f + 1])));
            }
          return (
            0 !== r && { oldValue: n[0] - r, newValue: n[1] - r, length: r }
          );
        })(i, s, r, n);
        t
          ? (o.push(t),
            lK([], Array(t.length), !0)
              .map(l)
              .forEach(function (e) {
                (r[t.oldValue + e] = !0), (n[t.newValue + e] = !0);
              }))
          : (a = !0);
      })();
    return (t.subsets = o), (t.subsetsAge = 100), o;
  },
  at = (function () {
    function t() {
      this.list = [];
    }
    return (
      (t.prototype.add = function (t) {
        var e;
        (e = this.list).push.apply(e, t);
      }),
      (t.prototype.forEach = function (t) {
        this.list.forEach(function (e) {
          return t(e);
        });
      }),
      t
    );
  })();
function ae(t, e) {
  var i,
    s,
    r = t;
  for (e = e.slice(); e.length > 0; )
    (s = e.splice(0, 1)[0]),
      (i = r),
      (r = r.childNodes ? r.childNodes[s] : void 0);
  return { node: r, parentNode: i, nodeIndex: s };
}
function ai(t, e) {
  void 0 === e && (e = { valueDiffing: !0 });
  var i = { nodeName: t.nodeName };
  return (
    lX(t, "Text", "Comment")
      ? (i.data = t.data)
      : (t.attributes &&
          t.attributes.length > 0 &&
          ((i.attributes = {}),
          Array.prototype.slice.call(t.attributes).forEach(function (t) {
            return (i.attributes[t.name] = t.value);
          })),
        t.childNodes &&
          t.childNodes.length > 0 &&
          ((i.childNodes = []),
          Array.prototype.slice.call(t.childNodes).forEach(function (t) {
            return i.childNodes.push(ai(t, e));
          })),
        e.valueDiffing &&
          (lX(t, "HTMLTextAreaElement") && (i.value = t.value),
          lX(t, "HTMLInputElement") &&
          ["radio", "checkbox"].includes(t.type.toLowerCase()) &&
          void 0 !== t.checked
            ? (i.checked = t.checked)
            : lX(
                t,
                "HTMLButtonElement",
                "HTMLDataElement",
                "HTMLInputElement",
                "HTMLLIElement",
                "HTMLMeterElement",
                "HTMLOptionElement",
                "HTMLProgressElement",
                "HTMLParamElement"
              ) && (i.value = t.value),
          lX(t, "HTMLOptionElement") && (i.selected = t.selected))),
    i
  );
}
var as =
    /<\s*\/*[a-zA-Z:_][a-zA-Z0-9:_\-.]*\s*(?:"[^"]*"['"]*|'[^']*'['"]*|[^'"/>])*\/*\s*>|<!--(?:.|\n|\r)*?-->/g,
  ar = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function an(t) {
  return t.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}
var ao = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    menuItem: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
  al = function (t, e) {
    var i = { nodeName: "", attributes: {} },
      s = !1,
      r = t.match(/<\/?([^\s]+?)[/\s>]/);
    if (
      r &&
      ((i.nodeName = e || "svg" === r[1] ? r[1] : r[1].toUpperCase()),
      (ao[r[1]] || "/" === t.charAt(t.length - 2)) && (s = !0),
      i.nodeName.startsWith("!--"))
    ) {
      var n = t.indexOf("--\x3e");
      return {
        type: "comment",
        node: { nodeName: "#comment", data: -1 !== n ? t.slice(4, n) : "" },
        voidElement: s,
      };
    }
    for (var o = new RegExp(ar), l = null, a = !1; !a; )
      if (null === (l = o.exec(t))) a = !0;
      else if (l[0].trim()) {
        if (l[1]) {
          var c = l[1].trim(),
            h = [c, ""];
          c.indexOf("=") > -1 && (h = c.split("=")),
            (i.attributes[h[0]] = h[1]),
            o.lastIndex--;
        } else
          l[2] &&
            (i.attributes[l[2]] = l[3].trim().substring(1, l[3].length - 1));
      }
    return { type: "tag", node: i, voidElement: s };
  },
  aa = function (t, e) {
    void 0 === e && (e = { valueDiffing: !0, caseSensitive: !1 });
    var i,
      s = [],
      r = -1,
      n = [],
      o = !1;
    if (0 !== t.indexOf("<")) {
      var l = t.indexOf("<");
      s.push({ nodeName: "#text", data: -1 === l ? t : t.substring(0, l) });
    }
    return (
      t.replace(as, function (l, a) {
        var c = "/" !== l.charAt(1),
          h = l.startsWith("\x3c!--"),
          u = a + l.length,
          d = t.charAt(u);
        if (h) {
          var f = al(l, e.caseSensitive).node;
          if (r < 0) return s.push(f), "";
          var p = n[r];
          return (
            p &&
              f.nodeName &&
              (p.node.childNodes || (p.node.childNodes = []),
              p.node.childNodes.push(f)),
            ""
          );
        }
        if (c) {
          if (
            ("svg" === (i = al(l, e.caseSensitive || o)).node.nodeName &&
              (o = !0),
            r++,
            !i.voidElement && d && "<" !== d)
          ) {
            i.node.childNodes || (i.node.childNodes = []);
            var m = an(t.slice(u, t.indexOf("<", u)));
            i.node.childNodes.push({ nodeName: "#text", data: m }),
              e.valueDiffing &&
                "TEXTAREA" === i.node.nodeName &&
                (i.node.value = m);
          }
          0 === r && i.node.nodeName && s.push(i.node);
          var g = n[r - 1];
          g &&
            i.node.nodeName &&
            (g.node.childNodes || (g.node.childNodes = []),
            g.node.childNodes.push(i.node)),
            (n[r] = i);
        }
        if (
          (!c || i.voidElement) &&
          (r > -1 &&
            (i.voidElement ||
              (e.caseSensitive && i.node.nodeName === l.slice(2, -1)) ||
              (!e.caseSensitive &&
                i.node.nodeName.toUpperCase() ===
                  l.slice(2, -1).toUpperCase())) &&
            --r > -1 &&
            ("svg" === i.node.nodeName && (o = !1), (i = n[r])),
          "<" !== d && d)
        ) {
          var b = -1 === r ? s : n[r].node.childNodes || [],
            v = t.indexOf("<", u);
          (m = an(t.slice(u, -1 === v ? void 0 : v))),
            b.push({ nodeName: "#text", data: m });
        }
        return "";
      }),
      s[0]
    );
  },
  ac = (function () {
    function t(t, e, i) {
      (this.options = i),
        (this.t1 =
          "undefined" != typeof Element && lX(t, "Element")
            ? ai(t, this.options)
            : "string" == typeof t
            ? aa(t, this.options)
            : JSON.parse(JSON.stringify(t))),
        (this.t2 =
          "undefined" != typeof Element && lX(e, "Element")
            ? ai(e, this.options)
            : "string" == typeof e
            ? aa(e, this.options)
            : JSON.parse(JSON.stringify(e))),
        (this.diffcount = 0),
        (this.foundAll = !1),
        this.debug &&
          ((this.t1Orig =
            "undefined" != typeof Element && lX(t, "Element")
              ? ai(t, this.options)
              : "string" == typeof t
              ? aa(t, this.options)
              : JSON.parse(JSON.stringify(t))),
          (this.t2Orig =
            "undefined" != typeof Element && lX(e, "Element")
              ? ai(e, this.options)
              : "string" == typeof e
              ? aa(e, this.options)
              : JSON.parse(JSON.stringify(e)))),
        (this.tracker = new at());
    }
    return (
      (t.prototype.init = function () {
        return this.findDiffs(this.t1, this.t2);
      }),
      (t.prototype.findDiffs = function (t, e) {
        var i;
        do {
          if (
            this.options.debug &&
            ((this.diffcount += 1), this.diffcount > this.options.diffcap)
          )
            throw Error(
              "surpassed diffcap:"
                .concat(JSON.stringify(this.t1Orig), " -> ")
                .concat(JSON.stringify(this.t2Orig))
            );
          0 === (i = this.findNextDiff(t, e, [])).length &&
            (l6(t, e) ||
              (this.foundAll
                ? console.error("Could not find remaining diffs!")
                : ((this.foundAll = !0),
                  l3(t),
                  (i = this.findNextDiff(t, e, []))))),
            i.length > 0 &&
              ((this.foundAll = !1),
              this.tracker.add(i),
              (function (t, e, i) {
                e.forEach(function (e) {
                  !(function (t, e, i) {
                    if (
                      ![i._const.addElement, i._const.addTextElement].includes(
                        e[i._const.action]
                      )
                    ) {
                      var s = ae(t, e[i._const.route]);
                      (n = s.node), (o = s.parentNode), (l = s.nodeIndex);
                    }
                    var r,
                      n,
                      o,
                      l,
                      a,
                      c,
                      h = [],
                      u = { diff: e, node: n };
                    if (!i.preVirtualDiffApply(u)) {
                      switch (e[i._const.action]) {
                        case i._const.addAttribute:
                          n.attributes || (n.attributes = {}),
                            (n.attributes[e[i._const.name]] =
                              e[i._const.value]),
                            "checked" === e[i._const.name]
                              ? (n.checked = !0)
                              : "selected" === e[i._const.name]
                              ? (n.selected = !0)
                              : "INPUT" === n.nodeName &&
                                "value" === e[i._const.name] &&
                                (n.value = e[i._const.value]);
                          break;
                        case i._const.modifyAttribute:
                          n.attributes[e[i._const.name]] = e[i._const.newValue];
                          break;
                        case i._const.removeAttribute:
                          delete n.attributes[e[i._const.name]],
                            0 === Object.keys(n.attributes).length &&
                              delete n.attributes,
                            "checked" === e[i._const.name]
                              ? (n.checked = !1)
                              : "selected" === e[i._const.name]
                              ? delete n.selected
                              : "INPUT" === n.nodeName &&
                                "value" === e[i._const.name] &&
                                delete n.value;
                          break;
                        case i._const.modifyTextElement:
                          (n.data = e[i._const.newValue]),
                            "TEXTAREA" === o.nodeName &&
                              (o.value = e[i._const.newValue]);
                          break;
                        case i._const.modifyValue:
                          n.value = e[i._const.newValue];
                          break;
                        case i._const.modifyComment:
                          n.data = e[i._const.newValue];
                          break;
                        case i._const.modifyChecked:
                          n.checked = e[i._const.newValue];
                          break;
                        case i._const.modifySelected:
                          n.selected = e[i._const.newValue];
                          break;
                        case i._const.replaceElement:
                          (a = l4(e[i._const.newValue])), (o.childNodes[l] = a);
                          break;
                        case i._const.relocateGroup:
                          n.childNodes
                            .splice(e[i._const.from], e[i._const.groupLength])
                            .reverse()
                            .forEach(function (t) {
                              return n.childNodes.splice(e[i._const.to], 0, t);
                            }),
                            n.subsets &&
                              n.subsets.forEach(function (t) {
                                if (
                                  e[i._const.from] < e[i._const.to] &&
                                  t.oldValue <= e[i._const.to] &&
                                  t.oldValue > e[i._const.from]
                                )
                                  (t.oldValue -= e[i._const.groupLength]),
                                    (s =
                                      t.oldValue + t.length - e[i._const.to]) >
                                      0 &&
                                      (h.push({
                                        oldValue:
                                          e[i._const.to] +
                                          e[i._const.groupLength],
                                        newValue: t.newValue + t.length - s,
                                        length: s,
                                      }),
                                      (t.length -= s));
                                else if (
                                  e[i._const.from] > e[i._const.to] &&
                                  t.oldValue > e[i._const.to] &&
                                  t.oldValue < e[i._const.from]
                                ) {
                                  var s;
                                  (t.oldValue += e[i._const.groupLength]),
                                    (s =
                                      t.oldValue + t.length - e[i._const.to]) >
                                      0 &&
                                      (h.push({
                                        oldValue:
                                          e[i._const.to] +
                                          e[i._const.groupLength],
                                        newValue: t.newValue + t.length - s,
                                        length: s,
                                      }),
                                      (t.length -= s));
                                } else
                                  t.oldValue === e[i._const.from] &&
                                    (t.oldValue = e[i._const.to]);
                              });
                          break;
                        case i._const.removeElement:
                          o.childNodes.splice(l, 1),
                            o.subsets &&
                              o.subsets.forEach(function (t) {
                                t.oldValue > l
                                  ? (t.oldValue -= 1)
                                  : t.oldValue === l
                                  ? (t.delete = !0)
                                  : t.oldValue < l &&
                                    t.oldValue + t.length > l &&
                                    (t.oldValue + t.length - 1 === l
                                      ? t.length--
                                      : (h.push({
                                          newValue: t.newValue + l - t.oldValue,
                                          oldValue: l,
                                          length: t.length - l + t.oldValue - 1,
                                        }),
                                        (t.length = l - t.oldValue)));
                              }),
                            (n = o);
                          break;
                        case i._const.addElement:
                          var d = (c = e[i._const.route].slice()).splice(
                            c.length - 1,
                            1
                          )[0];
                          (n =
                            null === (r = ae(t, c)) || void 0 === r
                              ? void 0
                              : r.node),
                            (a = l4(e[i._const.element])),
                            n.childNodes || (n.childNodes = []),
                            d >= n.childNodes.length
                              ? n.childNodes.push(a)
                              : n.childNodes.splice(d, 0, a),
                            n.subsets &&
                              n.subsets.forEach(function (t) {
                                if (t.oldValue >= d) t.oldValue += 1;
                                else if (
                                  t.oldValue < d &&
                                  t.oldValue + t.length > d
                                ) {
                                  var e = t.oldValue + t.length - d;
                                  h.push({
                                    newValue: t.newValue + t.length - e,
                                    oldValue: d + 1,
                                    length: e,
                                  }),
                                    (t.length -= e);
                                }
                              });
                          break;
                        case i._const.removeTextElement:
                          o.childNodes.splice(l, 1),
                            "TEXTAREA" === o.nodeName && delete o.value,
                            o.subsets &&
                              o.subsets.forEach(function (t) {
                                t.oldValue > l
                                  ? (t.oldValue -= 1)
                                  : t.oldValue === l
                                  ? (t.delete = !0)
                                  : t.oldValue < l &&
                                    t.oldValue + t.length > l &&
                                    (t.oldValue + t.length - 1 === l
                                      ? t.length--
                                      : (h.push({
                                          newValue: t.newValue + l - t.oldValue,
                                          oldValue: l,
                                          length: t.length - l + t.oldValue - 1,
                                        }),
                                        (t.length = l - t.oldValue)));
                              }),
                            (n = o);
                          break;
                        case i._const.addTextElement:
                          var f = (c = e[i._const.route].slice()).splice(
                            c.length - 1,
                            1
                          )[0];
                          (a = { nodeName: "#text", data: e[i._const.value] }),
                            (n = ae(t, c).node).childNodes ||
                              (n.childNodes = []),
                            f >= n.childNodes.length
                              ? n.childNodes.push(a)
                              : n.childNodes.splice(f, 0, a),
                            "TEXTAREA" === n.nodeName &&
                              (n.value = e[i._const.newValue]),
                            n.subsets &&
                              n.subsets.forEach(function (t) {
                                if (
                                  (t.oldValue >= f && (t.oldValue += 1),
                                  t.oldValue < f && t.oldValue + t.length > f)
                                ) {
                                  var e = t.oldValue + t.length - f;
                                  h.push({
                                    newValue: t.newValue + t.length - e,
                                    oldValue: f + 1,
                                    length: e,
                                  }),
                                    (t.length -= e);
                                }
                              });
                          break;
                        default:
                          console.log("unknown action");
                      }
                      n.subsets &&
                        ((n.subsets = n.subsets.filter(function (t) {
                          return !t.delete && t.oldValue !== t.newValue;
                        })),
                        h.length && (n.subsets = n.subsets.concat(h))),
                        i.postVirtualDiffApply({
                          node: u.node,
                          diff: u.diff,
                          newNode: a,
                        });
                    }
                  })(t, e, i);
                });
              })(t, i, this.options));
        } while (i.length > 0);
        return this.tracker.list;
      }),
      (t.prototype.findNextDiff = function (t, e, i) {
        var s, r;
        if (this.options.maxDepth && i.length > this.options.maxDepth)
          return [];
        if (!t.outerDone) {
          if (
            ((s = this.findOuterDiff(t, e, i)),
            this.options.filterOuterDiff &&
              (r = this.options.filterOuterDiff(t, e, s)) &&
              (s = r),
            s.length > 0)
          )
            return (t.outerDone = !0), s;
          t.outerDone = !0;
        }
        if (Object.prototype.hasOwnProperty.call(t, "data")) return [];
        if (!t.innerDone) {
          if ((s = this.findInnerDiff(t, e, i)).length > 0) return s;
          t.innerDone = !0;
        }
        if (this.options.valueDiffing && !t.valueDone) {
          if ((s = this.findValueDiff(t, e, i)).length > 0)
            return (t.valueDone = !0), s;
          t.valueDone = !0;
        }
        return [];
      }),
      (t.prototype.findOuterDiff = function (t, e, i) {
        var s,
          r,
          n,
          o,
          l,
          a,
          c = [];
        if (t.nodeName !== e.nodeName) {
          if (!i.length)
            throw Error("Top level nodes have to be of the same kind.");
          return [
            new lZ()
              .setValue(
                this.options._const.action,
                this.options._const.replaceElement
              )
              .setValue(this.options._const.oldValue, l4(t))
              .setValue(this.options._const.newValue, l4(e))
              .setValue(this.options._const.route, i),
          ];
        }
        if (
          i.length &&
          this.options.diffcap <
            Math.abs((t.childNodes || []).length - (e.childNodes || []).length)
        )
          return [
            new lZ()
              .setValue(
                this.options._const.action,
                this.options._const.replaceElement
              )
              .setValue(this.options._const.oldValue, l4(t))
              .setValue(this.options._const.newValue, l4(e))
              .setValue(this.options._const.route, i),
          ];
        if (
          Object.prototype.hasOwnProperty.call(t, "data") &&
          t.data !== e.data
        )
          return "#text" === t.nodeName
            ? [
                new lZ()
                  .setValue(
                    this.options._const.action,
                    this.options._const.modifyTextElement
                  )
                  .setValue(this.options._const.route, i)
                  .setValue(this.options._const.oldValue, t.data)
                  .setValue(this.options._const.newValue, e.data),
              ]
            : [
                new lZ()
                  .setValue(
                    this.options._const.action,
                    this.options._const.modifyComment
                  )
                  .setValue(this.options._const.route, i)
                  .setValue(this.options._const.oldValue, t.data)
                  .setValue(this.options._const.newValue, e.data),
              ];
        for (
          r = t.attributes ? Object.keys(t.attributes).sort() : [],
            n = e.attributes ? Object.keys(e.attributes).sort() : [],
            o = r.length,
            a = 0;
          a < o;
          a++
        )
          (s = r[a]),
            -1 === (l = n.indexOf(s))
              ? c.push(
                  new lZ()
                    .setValue(
                      this.options._const.action,
                      this.options._const.removeAttribute
                    )
                    .setValue(this.options._const.route, i)
                    .setValue(this.options._const.name, s)
                    .setValue(this.options._const.value, t.attributes[s])
                )
              : (n.splice(l, 1),
                t.attributes[s] !== e.attributes[s] &&
                  c.push(
                    new lZ()
                      .setValue(
                        this.options._const.action,
                        this.options._const.modifyAttribute
                      )
                      .setValue(this.options._const.route, i)
                      .setValue(this.options._const.name, s)
                      .setValue(this.options._const.oldValue, t.attributes[s])
                      .setValue(this.options._const.newValue, e.attributes[s])
                  ));
        for (o = n.length, a = 0; a < o; a++)
          (s = n[a]),
            c.push(
              new lZ()
                .setValue(
                  this.options._const.action,
                  this.options._const.addAttribute
                )
                .setValue(this.options._const.route, i)
                .setValue(this.options._const.name, s)
                .setValue(this.options._const.value, e.attributes[s])
            );
        return c;
      }),
      (t.prototype.findInnerDiff = function (t, e, i) {
        var s = t.childNodes ? t.childNodes.slice() : [],
          r = e.childNodes ? e.childNodes.slice() : [],
          n = Math.max(s.length, r.length),
          o = Math.abs(s.length - r.length),
          l = [],
          a = 0;
        if (!this.options.maxChildCount || n < this.options.maxChildCount) {
          var c = !!(t.subsets && t.subsetsAge--),
            h = c ? t.subsets : t.childNodes && e.childNodes ? l7(t, e) : [];
          if (
            h.length > 0 &&
            (l = this.attemptGroupRelocation(t, e, h, i, c)).length > 0
          )
            return l;
        }
        for (var u = 0; u < n; u += 1) {
          var d = s[u],
            f = r[u];
          o &&
            (d && !f
              ? ("#text" === d.nodeName
                  ? l.push(
                      new lZ()
                        .setValue(
                          this.options._const.action,
                          this.options._const.removeTextElement
                        )
                        .setValue(this.options._const.route, i.concat(a))
                        .setValue(this.options._const.value, d.data)
                    )
                  : l.push(
                      new lZ()
                        .setValue(
                          this.options._const.action,
                          this.options._const.removeElement
                        )
                        .setValue(this.options._const.route, i.concat(a))
                        .setValue(this.options._const.element, l4(d))
                    ),
                (a -= 1))
              : f &&
                !d &&
                ("#text" === f.nodeName
                  ? l.push(
                      new lZ()
                        .setValue(
                          this.options._const.action,
                          this.options._const.addTextElement
                        )
                        .setValue(this.options._const.route, i.concat(a))
                        .setValue(this.options._const.value, f.data)
                    )
                  : l.push(
                      new lZ()
                        .setValue(
                          this.options._const.action,
                          this.options._const.addElement
                        )
                        .setValue(this.options._const.route, i.concat(a))
                        .setValue(this.options._const.element, l4(f))
                    ))),
            d &&
              f &&
              (!this.options.maxChildCount || n < this.options.maxChildCount
                ? (l = l.concat(this.findNextDiff(d, f, i.concat(a))))
                : l6(d, f) ||
                  (s.length > r.length
                    ? ("#text" === d.nodeName
                        ? l.push(
                            new lZ()
                              .setValue(
                                this.options._const.action,
                                this.options._const.removeTextElement
                              )
                              .setValue(this.options._const.route, i.concat(a))
                              .setValue(this.options._const.value, d.data)
                          )
                        : l.push(
                            new lZ()
                              .setValue(
                                this.options._const.action,
                                this.options._const.removeElement
                              )
                              .setValue(this.options._const.element, l4(d))
                              .setValue(this.options._const.route, i.concat(a))
                          ),
                      s.splice(u, 1),
                      (u -= 1),
                      (a -= 1),
                      (o -= 1))
                    : s.length < r.length
                    ? ((l = l.concat([
                        new lZ()
                          .setValue(
                            this.options._const.action,
                            this.options._const.addElement
                          )
                          .setValue(this.options._const.element, l4(f))
                          .setValue(this.options._const.route, i.concat(a)),
                      ])),
                      s.splice(u, 0, l4(f)),
                      (o -= 1))
                    : (l = l.concat([
                        new lZ()
                          .setValue(
                            this.options._const.action,
                            this.options._const.replaceElement
                          )
                          .setValue(this.options._const.oldValue, l4(d))
                          .setValue(this.options._const.newValue, l4(f))
                          .setValue(this.options._const.route, i.concat(a)),
                      ])))),
            (a += 1);
        }
        return (t.innerDone = !0), l;
      }),
      (t.prototype.attemptGroupRelocation = function (t, e, i, s, r) {
        for (
          var n,
            o,
            l,
            a,
            c,
            h,
            u,
            d,
            f =
              ((n = t.childNodes ? l9(t.childNodes.length, !0) : []),
              (o = e.childNodes ? l9(e.childNodes.length, !0) : []),
              (l = 0),
              i.forEach(function (t) {
                for (
                  var e = t.oldValue + t.length,
                    i = t.newValue + t.length,
                    s = t.oldValue;
                  s < e;
                  s += 1
                )
                  n[s] = l;
                for (s = t.newValue; s < i; s += 1) o[s] = l;
                l += 1;
              }),
              { gaps1: n, gaps2: o }),
            p = f.gaps1,
            m = f.gaps2,
            g = t.childNodes.slice(),
            b = e.childNodes.slice(),
            v = Math.min(p.length, m.length),
            y = [],
            x = 0,
            E = 0;
          x < v;
          E += 1, x += 1
        )
          if (!r || (!0 !== p[x] && !0 !== m[x])) {
            if (!0 === p[E]) {
              if ("#text" === (u = g[E]).nodeName) {
                if ("#text" === b[x].nodeName) {
                  if (u.data !== b[x].data) {
                    for (
                      var w = E;
                      g.length > w + 1 && "#text" === g[w + 1].nodeName;

                    )
                      if (((w += 1), b[x].data === g[w].data)) {
                        d = !0;
                        break;
                      }
                    d ||
                      y.push(
                        new lZ()
                          .setValue(
                            this.options._const.action,
                            this.options._const.modifyTextElement
                          )
                          .setValue(this.options._const.route, s.concat(E))
                          .setValue(this.options._const.oldValue, u.data)
                          .setValue(this.options._const.newValue, b[x].data)
                      );
                  }
                } else
                  y.push(
                    new lZ()
                      .setValue(
                        this.options._const.action,
                        this.options._const.removeTextElement
                      )
                      .setValue(this.options._const.route, s.concat(E))
                      .setValue(this.options._const.value, u.data)
                  ),
                    p.splice(E, 1),
                    g.splice(E, 1),
                    (v = Math.min(p.length, m.length)),
                    (E -= 1),
                    (x -= 1);
              } else
                !0 === m[x]
                  ? y.push(
                      new lZ()
                        .setValue(
                          this.options._const.action,
                          this.options._const.replaceElement
                        )
                        .setValue(this.options._const.oldValue, l4(u))
                        .setValue(this.options._const.newValue, l4(b[x]))
                        .setValue(this.options._const.route, s.concat(E))
                    )
                  : (y.push(
                      new lZ()
                        .setValue(
                          this.options._const.action,
                          this.options._const.removeElement
                        )
                        .setValue(this.options._const.route, s.concat(E))
                        .setValue(this.options._const.element, l4(u))
                    ),
                    p.splice(E, 1),
                    g.splice(E, 1),
                    (v = Math.min(p.length, m.length)),
                    (E -= 1),
                    (x -= 1));
            } else if (!0 === m[x])
              "#text" === (u = b[x]).nodeName
                ? (y.push(
                    new lZ()
                      .setValue(
                        this.options._const.action,
                        this.options._const.addTextElement
                      )
                      .setValue(this.options._const.route, s.concat(E))
                      .setValue(this.options._const.value, u.data)
                  ),
                  p.splice(E, 0, !0),
                  g.splice(E, 0, { nodeName: "#text", data: u.data }))
                : (y.push(
                    new lZ()
                      .setValue(
                        this.options._const.action,
                        this.options._const.addElement
                      )
                      .setValue(this.options._const.route, s.concat(E))
                      .setValue(this.options._const.element, l4(u))
                  ),
                  p.splice(E, 0, !0),
                  g.splice(E, 0, l4(u))),
                (v = Math.min(p.length, m.length));
            else if (p[E] !== m[x]) {
              if (y.length > 0) return y;
              if (
                (c = Math.min((h = i[p[E]]).newValue, g.length - h.length)) !==
                h.oldValue
              ) {
                a = !1;
                for (var N = 0; N < h.length; N += 1)
                  l8(g[c + N], g[h.oldValue + N], {}, !1, !0) || (a = !0);
                if (a)
                  return [
                    new lZ()
                      .setValue(
                        this.options._const.action,
                        this.options._const.relocateGroup
                      )
                      .setValue(this.options._const.groupLength, h.length)
                      .setValue(this.options._const.from, h.oldValue)
                      .setValue(this.options._const.to, c)
                      .setValue(this.options._const.route, s),
                  ];
              }
            }
          }
        return y;
      }),
      (t.prototype.findValueDiff = function (t, e, i) {
        var s = [];
        return (
          t.selected !== e.selected &&
            s.push(
              new lZ()
                .setValue(
                  this.options._const.action,
                  this.options._const.modifySelected
                )
                .setValue(this.options._const.oldValue, t.selected)
                .setValue(this.options._const.newValue, e.selected)
                .setValue(this.options._const.route, i)
            ),
          (t.value || e.value) &&
            t.value !== e.value &&
            "OPTION" !== t.nodeName &&
            s.push(
              new lZ()
                .setValue(
                  this.options._const.action,
                  this.options._const.modifyValue
                )
                .setValue(this.options._const.oldValue, t.value || "")
                .setValue(this.options._const.newValue, e.value || "")
                .setValue(this.options._const.route, i)
            ),
          t.checked !== e.checked &&
            s.push(
              new lZ()
                .setValue(
                  this.options._const.action,
                  this.options._const.modifyChecked
                )
                .setValue(this.options._const.oldValue, t.checked)
                .setValue(this.options._const.newValue, e.checked)
                .setValue(this.options._const.route, i)
            ),
          s
        );
      }),
      t
    );
  })(),
  ah = {
    debug: !1,
    diffcap: 10,
    maxDepth: !1,
    maxChildCount: 50,
    valueDiffing: !0,
    textDiff: function (t, e, i, s) {
      t.data = s;
    },
    preVirtualDiffApply: function () {},
    postVirtualDiffApply: function () {},
    preDiffApply: function () {},
    postDiffApply: function () {},
    filterOuterDiff: null,
    compress: !1,
    _const: !1,
    document:
      !("undefined" == typeof window || !window.document) && window.document,
    components: [],
  },
  au = (function () {
    function t(t) {
      if (
        (void 0 === t && (t = {}),
        Object.entries(ah).forEach(function (e) {
          var i = e[0],
            s = e[1];
          Object.prototype.hasOwnProperty.call(t, i) || (t[i] = s);
        }),
        !t._const)
      ) {
        var e = [
            "addAttribute",
            "modifyAttribute",
            "removeAttribute",
            "modifyTextElement",
            "relocateGroup",
            "removeElement",
            "addElement",
            "removeTextElement",
            "addTextElement",
            "replaceElement",
            "modifyValue",
            "modifyChecked",
            "modifySelected",
            "modifyComment",
            "action",
            "route",
            "oldValue",
            "newValue",
            "element",
            "group",
            "groupLength",
            "from",
            "to",
            "name",
            "value",
            "data",
            "attributes",
            "nodeName",
            "childNodes",
            "checked",
            "selected",
          ],
          i = {};
        t.compress
          ? e.forEach(function (t, e) {
              return (i[t] = e);
            })
          : e.forEach(function (t) {
              return (i[t] = t);
            }),
          (t._const = i);
      }
      this.options = t;
    }
    return (
      (t.prototype.apply = function (t, e) {
        var i;
        return (
          (i = this.options),
          e.every(function (e) {
            return lJ(t, e, i);
          })
        );
      }),
      (t.prototype.undo = function (t, e) {
        var i, s;
        return (
          (i = e),
          (s = this.options),
          void ((i = i.slice()).reverse(),
          i.forEach(function (e) {
            !(function (t, e, i) {
              switch (e[i._const.action]) {
                case i._const.addAttribute:
                  (e[i._const.action] = i._const.removeAttribute), lJ(t, e, i);
                  break;
                case i._const.modifyAttribute:
                  l0(e, i._const.oldValue, i._const.newValue), lJ(t, e, i);
                  break;
                case i._const.removeAttribute:
                  (e[i._const.action] = i._const.addAttribute), lJ(t, e, i);
                  break;
                case i._const.modifyTextElement:
                case i._const.modifyValue:
                case i._const.modifyComment:
                case i._const.modifyChecked:
                case i._const.modifySelected:
                case i._const.replaceElement:
                  l0(e, i._const.oldValue, i._const.newValue), lJ(t, e, i);
                  break;
                case i._const.relocateGroup:
                  l0(e, i._const.from, i._const.to), lJ(t, e, i);
                  break;
                case i._const.removeElement:
                  (e[i._const.action] = i._const.addElement), lJ(t, e, i);
                  break;
                case i._const.addElement:
                  (e[i._const.action] = i._const.removeElement), lJ(t, e, i);
                  break;
                case i._const.removeTextElement:
                  (e[i._const.action] = i._const.addTextElement), lJ(t, e, i);
                  break;
                case i._const.addTextElement:
                  (e[i._const.action] = i._const.removeTextElement),
                    lJ(t, e, i);
                  break;
                default:
                  console.log("unknown action");
              }
            })(t, e, s);
          }))
        );
      }),
      (t.prototype.diff = function (t, e) {
        return new ac(t, e, this.options).init();
      }),
      t
    );
  })();
const ad = (
    t,
    e,
    i,
    {
      classes: s,
      format: r,
      hiddenHeader: n,
      sortable: o,
      scrollY: l,
      type: a,
    },
    { noColumnWidths: c, unhideHeader: h }
  ) => ({
    nodeName: "TR",
    childNodes: t
      .map((t, u) => {
        let d = e[u] || { type: a, format: r, sortable: !0, searchable: !0 };
        if (d.hidden) return;
        let f = t.attributes ? { ...t.attributes } : {};
        if (
          (d.sortable &&
            o &&
            (!l.length || h) &&
            (d.filter
              ? (f["data-filterable"] = "true")
              : (f["data-sortable"] = "true")),
          d.headerClass && (f.class = lF(f.class, d.headerClass)),
          i.sort && i.sort.column === u)
        ) {
          let t = "asc" === i.sort.dir ? s.ascending : s.descending;
          (f.class = lF(f.class, t)),
            (f["aria-sort"] =
              "asc" === i.sort.dir ? "ascending" : "descending");
        } else i.filters[u] && (f.class = lF(f.class, s.filterActive));
        if (i.widths[u] && !c) {
          let t = `width: ${i.widths[u]}%;`;
          f.style = lF(f.style, t);
        }
        l.length &&
          !h &&
          (f.style = lF(
            f.style,
            "padding-bottom: 0;padding-top: 0;border: 0;"
          ));
        let p =
          "html" === t.type
            ? t.data
            : [{ nodeName: "#text", data: t.text ?? String(t.data) }];
        return {
          nodeName: "TH",
          attributes: f,
          childNodes:
            (n || l.length) && !h
              ? [{ nodeName: "#text", data: "" }]
              : d.sortable && o
              ? [
                  {
                    nodeName: "BUTTON",
                    attributes: { class: d.filter ? s.filter : s.sorter },
                    childNodes: p,
                  },
                ]
              : p,
        };
      })
      .filter((t) => t),
  }),
  af = (
    t,
    e,
    i,
    s,
    r,
    n,
    {
      classes: o,
      hiddenHeader: l,
      header: a,
      footer: c,
      format: h,
      sortable: u,
      scrollY: d,
      type: f,
      rowRender: p,
      tabIndex: m,
    },
    { noColumnWidths: g, unhideHeader: b, renderHeader: v },
    y,
    x
  ) => {
    let E = {
      nodeName: "TABLE",
      attributes: { ...t },
      childNodes: [
        {
          nodeName: "TBODY",
          childNodes: i.map(({ row: t, index: e }) => {
            let i = {
              nodeName: "TR",
              attributes: { ...t.attributes, "data-index": String(e) },
              childNodes: t.cells
                .map((t, i) => {
                  let n = s[i] || {
                    type: f,
                    format: h,
                    sortable: !0,
                    searchable: !0,
                  };
                  if (n.hidden) return;
                  let o = {
                    nodeName: "TD",
                    attributes: t.attributes ? { ...t.attributes } : {},
                    childNodes:
                      "html" === n.type
                        ? t.data
                        : [{ nodeName: "#text", data: l$(t) }],
                  };
                  if (
                    (a ||
                      c ||
                      !r.widths[i] ||
                      g ||
                      (o.attributes.style = lF(
                        o.attributes.style,
                        `width: ${r.widths[i]}%;`
                      )),
                    n.cellClass &&
                      (o.attributes.class = lF(
                        o.attributes.class,
                        n.cellClass
                      )),
                    n.render)
                  ) {
                    let s = n.render(t.data, o, e, i);
                    if (s) {
                      if ("string" != typeof s) return s;
                      {
                        let t = aa(`<td>${s}</td>`);
                        1 === t.childNodes.length &&
                        ["#text", "#comment"].includes(t.childNodes[0].nodeName)
                          ? (o.childNodes[0].data = s)
                          : (o.childNodes = t.childNodes);
                      }
                    }
                  }
                  return o;
                })
                .filter((t) => t),
            };
            if (
              (e === n &&
                (i.attributes.class = lF(i.attributes.class, o.cursor)),
              p)
            ) {
              let s = p(t, i, e);
              if (s) {
                if ("string" != typeof s) return s;
                {
                  let t = aa(`<tr>${s}</tr>`);
                  !t.childNodes ||
                  (1 === t.childNodes.length &&
                    ["#text", "#comment"].includes(t.childNodes[0].nodeName))
                    ? (i.childNodes[0].data = s)
                    : (i.childNodes = t.childNodes);
                }
              }
            }
            return i;
          }),
        },
      ],
    };
    if (((E.attributes.class = lF(E.attributes.class, o.table)), a || c || v)) {
      let t = ad(
        e,
        s,
        r,
        { classes: o, hiddenHeader: l, sortable: u, scrollY: d },
        { noColumnWidths: g, unhideHeader: b }
      );
      if (a || v) {
        let e = { nodeName: "THEAD", childNodes: [t] };
        (d.length || l) && !b && (e.attributes = { style: "height: 0px;" }),
          E.childNodes.unshift(e);
      }
      if (c) {
        let e = { nodeName: "TFOOT", childNodes: [a ? structuredClone(t) : t] };
        (d.length || l) && !b && (e.attributes = { style: "height: 0px;" }),
          E.childNodes.push(e);
      }
    }
    return (
      y.forEach((t) => E.childNodes.push(t)),
      x.forEach((t) => E.childNodes.push(t)),
      !1 !== m && (E.attributes.tabindex = String(m)),
      E
    );
  };
function ap(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
"undefined" != typeof globalThis
  ? globalThis
  : "undefined" != typeof window
  ? window
  : void 0 !== G || ("undefined" != typeof self && self);
var am = ap(
    ({ exports: {} }.exports =
      ((f = "millisecond"),
      (p = "second"),
      (m = "minute"),
      (g = "hour"),
      (b = "week"),
      (v = "month"),
      (y = "quarter"),
      (x = "year"),
      (E = "date"),
      (w = "Invalid Date"),
      (N =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/),
      (_ =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g),
      (A = function (t, e, i) {
        var s = String(t);
        return !s || s.length >= e
          ? t
          : "" + Array(e + 1 - s.length).join(i) + t;
      }),
      ((k = {})[(S = "en")] = {
        name: "en",
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        ordinal: function (t) {
          var e = ["th", "st", "nd", "rd"],
            i = t % 100;
          return "[" + t + (e[(i - 20) % 10] || e[i] || "th") + "]";
        },
      }),
      (O = "$isDayjsObject"),
      (L = function (t) {
        return t instanceof M || !(!t || !t[O]);
      }),
      (T = function t(e, i, s) {
        var r;
        if (!e) return S;
        if ("string" == typeof e) {
          var n = e.toLowerCase();
          k[n] && (r = n), i && ((k[n] = i), (r = n));
          var o = e.split("-");
          if (!r && o.length > 1) return t(o[0]);
        } else {
          var l = e.name;
          (k[l] = e), (r = l);
        }
        return !s && r && (S = r), r || (!s && S);
      }),
      (C = function (t, e) {
        if (L(t)) return t.clone();
        var i = "object" == typeof e ? e : {};
        return (i.date = t), (i.args = arguments), new M(i);
      }),
      ((q = {
        s: A,
        z: function (t) {
          var e = -t.utcOffset(),
            i = Math.abs(e);
          return (
            (e <= 0 ? "+" : "-") +
            A(Math.floor(i / 60), 2, "0") +
            ":" +
            A(i % 60, 2, "0")
          );
        },
        m: function t(e, i) {
          if (e.date() < i.date()) return -t(i, e);
          var s = 12 * (i.year() - e.year()) + (i.month() - e.month()),
            r = e.clone().add(s, v),
            n = i - r < 0,
            o = e.clone().add(s + (n ? -1 : 1), v);
          return +(-(s + (i - r) / (n ? r - o : o - r)) || 0);
        },
        a: function (t) {
          return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function (t) {
          return (
            { M: v, y: x, w: b, d: "day", D: E, h: g, m: m, s: p, ms: f, Q: y }[
              t
            ] ||
            String(t || "")
              .toLowerCase()
              .replace(/s$/, "")
          );
        },
        u: function (t) {
          return void 0 === t;
        },
      }).l = T),
      (q.i = L),
      (q.w = function (t, e) {
        return C(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset });
      }),
      (D = (M = (function () {
        function t(t) {
          (this.$L = T(t.locale, null, !0)),
            this.parse(t),
            (this.$x = this.$x || t.x || {}),
            (this[O] = !0);
        }
        var e = t.prototype;
        return (
          (e.parse = function (t) {
            (this.$d = (function (t) {
              var e = t.date,
                i = t.utc;
              if (null === e) return new Date(NaN);
              if (q.u(e)) return new Date();
              if (e instanceof Date) return new Date(e);
              if ("string" == typeof e && !/Z$/i.test(e)) {
                var s = e.match(N);
                if (s) {
                  var r = s[2] - 1 || 0,
                    n = (s[7] || "0").substring(0, 3);
                  return i
                    ? new Date(
                        Date.UTC(
                          s[1],
                          r,
                          s[3] || 1,
                          s[4] || 0,
                          s[5] || 0,
                          s[6] || 0,
                          n
                        )
                      )
                    : new Date(
                        s[1],
                        r,
                        s[3] || 1,
                        s[4] || 0,
                        s[5] || 0,
                        s[6] || 0,
                        n
                      );
                }
              }
              return new Date(e);
            })(t)),
              this.init();
          }),
          (e.init = function () {
            var t = this.$d;
            (this.$y = t.getFullYear()),
              (this.$M = t.getMonth()),
              (this.$D = t.getDate()),
              (this.$W = t.getDay()),
              (this.$H = t.getHours()),
              (this.$m = t.getMinutes()),
              (this.$s = t.getSeconds()),
              (this.$ms = t.getMilliseconds());
          }),
          (e.$utils = function () {
            return q;
          }),
          (e.isValid = function () {
            return this.$d.toString() !== w;
          }),
          (e.isSame = function (t, e) {
            var i = C(t);
            return this.startOf(e) <= i && i <= this.endOf(e);
          }),
          (e.isAfter = function (t, e) {
            return C(t) < this.startOf(e);
          }),
          (e.isBefore = function (t, e) {
            return this.endOf(e) < C(t);
          }),
          (e.$g = function (t, e, i) {
            return q.u(t) ? this[e] : this.set(i, t);
          }),
          (e.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (e.valueOf = function () {
            return this.$d.getTime();
          }),
          (e.startOf = function (t, e) {
            var i = this,
              s = !!q.u(e) || e,
              r = q.p(t),
              n = function (t, e) {
                var r = q.w(
                  i.$u ? Date.UTC(i.$y, e, t) : new Date(i.$y, e, t),
                  i
                );
                return s ? r : r.endOf("day");
              },
              o = function (t, e) {
                return q.w(
                  i
                    .toDate()
                    [t].apply(
                      i.toDate("s"),
                      (s ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)
                    ),
                  i
                );
              },
              l = this.$W,
              a = this.$M,
              c = this.$D,
              h = "set" + (this.$u ? "UTC" : "");
            switch (r) {
              case x:
                return s ? n(1, 0) : n(31, 11);
              case v:
                return s ? n(1, a) : n(0, a + 1);
              case b:
                var u = this.$locale().weekStart || 0,
                  d = (l < u ? l + 7 : l) - u;
                return n(s ? c - d : c + (6 - d), a);
              case "day":
              case E:
                return o(h + "Hours", 0);
              case g:
                return o(h + "Minutes", 1);
              case m:
                return o(h + "Seconds", 2);
              case p:
                return o(h + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          (e.endOf = function (t) {
            return this.startOf(t, !1);
          }),
          (e.$set = function (t, e) {
            var i,
              s = q.p(t),
              r = "set" + (this.$u ? "UTC" : ""),
              n = (((i = {}).day = r + "Date"),
              (i[E] = r + "Date"),
              (i[v] = r + "Month"),
              (i[x] = r + "FullYear"),
              (i[g] = r + "Hours"),
              (i[m] = r + "Minutes"),
              (i[p] = r + "Seconds"),
              (i[f] = r + "Milliseconds"),
              i)[s],
              o = "day" === s ? this.$D + (e - this.$W) : e;
            if (s === v || s === x) {
              var l = this.clone().set(E, 1);
              l.$d[n](o),
                l.init(),
                (this.$d = l.set(E, Math.min(this.$D, l.daysInMonth())).$d);
            } else n && this.$d[n](o);
            return this.init(), this;
          }),
          (e.set = function (t, e) {
            return this.clone().$set(t, e);
          }),
          (e.get = function (t) {
            return this[q.p(t)]();
          }),
          (e.add = function (t, e) {
            var i,
              s = this;
            t = Number(t);
            var r = q.p(e),
              n = function (e) {
                var i = C(s);
                return q.w(i.date(i.date() + Math.round(e * t)), s);
              };
            if (r === v) return this.set(v, this.$M + t);
            if (r === x) return this.set(x, this.$y + t);
            if ("day" === r) return n(1);
            if (r === b) return n(7);
            var o =
                (((i = {})[m] = 6e4), (i[g] = 36e5), (i[p] = 1e3), i)[r] || 1,
              l = this.$d.getTime() + t * o;
            return q.w(l, this);
          }),
          (e.subtract = function (t, e) {
            return this.add(-1 * t, e);
          }),
          (e.format = function (t) {
            var e = this,
              i = this.$locale();
            if (!this.isValid()) return i.invalidDate || w;
            var s = t || "YYYY-MM-DDTHH:mm:ssZ",
              r = q.z(this),
              n = this.$H,
              o = this.$m,
              l = this.$M,
              a = i.weekdays,
              c = i.months,
              h = i.meridiem,
              u = function (t, i, r, n) {
                return (t && (t[i] || t(e, s))) || r[i].slice(0, n);
              },
              d = function (t) {
                return q.s(n % 12 || 12, t, "0");
              },
              f =
                h ||
                function (t, e, i) {
                  var s = t < 12 ? "AM" : "PM";
                  return i ? s.toLowerCase() : s;
                };
            return s.replace(_, function (t, s) {
              return (
                s ||
                (function (t) {
                  switch (t) {
                    case "YY":
                      return String(e.$y).slice(-2);
                    case "YYYY":
                      return q.s(e.$y, 4, "0");
                    case "M":
                      return l + 1;
                    case "MM":
                      return q.s(l + 1, 2, "0");
                    case "MMM":
                      return u(i.monthsShort, l, c, 3);
                    case "MMMM":
                      return u(c, l);
                    case "D":
                      return e.$D;
                    case "DD":
                      return q.s(e.$D, 2, "0");
                    case "d":
                      return String(e.$W);
                    case "dd":
                      return u(i.weekdaysMin, e.$W, a, 2);
                    case "ddd":
                      return u(i.weekdaysShort, e.$W, a, 3);
                    case "dddd":
                      return a[e.$W];
                    case "H":
                      return String(n);
                    case "HH":
                      return q.s(n, 2, "0");
                    case "h":
                      return d(1);
                    case "hh":
                      return d(2);
                    case "a":
                      return f(n, o, !0);
                    case "A":
                      return f(n, o, !1);
                    case "m":
                      return String(o);
                    case "mm":
                      return q.s(o, 2, "0");
                    case "s":
                      return String(e.$s);
                    case "ss":
                      return q.s(e.$s, 2, "0");
                    case "SSS":
                      return q.s(e.$ms, 3, "0");
                    case "Z":
                      return r;
                  }
                  return null;
                })(t) ||
                r.replace(":", "")
              );
            });
          }),
          (e.utcOffset = function () {
            return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
          }),
          (e.diff = function (t, e, i) {
            var s,
              r = this,
              n = q.p(e),
              o = C(t),
              l = (o.utcOffset() - this.utcOffset()) * 6e4,
              a = this - o,
              c = function () {
                return q.m(r, o);
              };
            switch (n) {
              case x:
                s = c() / 12;
                break;
              case v:
                s = c();
                break;
              case y:
                s = c() / 3;
                break;
              case b:
                s = (a - l) / 6048e5;
                break;
              case "day":
                s = (a - l) / 864e5;
                break;
              case g:
                s = a / 36e5;
                break;
              case m:
                s = a / 6e4;
                break;
              case p:
                s = a / 1e3;
                break;
              default:
                s = a;
            }
            return i ? s : q.a(s);
          }),
          (e.daysInMonth = function () {
            return this.endOf(v).$D;
          }),
          (e.$locale = function () {
            return k[this.$L];
          }),
          (e.locale = function (t, e) {
            if (!t) return this.$L;
            var i = this.clone(),
              s = T(t, e, !0);
            return s && (i.$L = s), i;
          }),
          (e.clone = function () {
            return q.w(this.$d, this);
          }),
          (e.toDate = function () {
            return new Date(this.valueOf());
          }),
          (e.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (e.toISOString = function () {
            return this.$d.toISOString();
          }),
          (e.toString = function () {
            return this.$d.toUTCString();
          }),
          t
        );
      })()).prototype),
      (C.prototype = D),
      [
        ["$ms", f],
        ["$s", p],
        ["$m", m],
        ["$H", g],
        ["$W", "day"],
        ["$M", v],
        ["$y", x],
        ["$D", E],
      ].forEach(function (t) {
        D[t[1]] = function (e) {
          return this.$g(e, t[0], t[1]);
        };
      }),
      (C.extend = function (t, e) {
        return t.$i || (t(e, M, C), (t.$i = !0)), C;
      }),
      (C.locale = T),
      (C.isDayjs = L),
      (C.unix = function (t) {
        return C(1e3 * t);
      }),
      (C.en = k[S]),
      (C.Ls = k),
      (C.p = {}),
      C))
  ),
  ag = ap(
    ({ exports: {} }.exports =
      ((j = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A",
      }),
      (R =
        /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g),
      (V = /\d\d/),
      (I = /\d\d?/),
      (P = /\d*[^-_:/,()\s\d]+/),
      ($ = {}),
      (B = function (t) {
        return (t = +t) + (t > 68 ? 1900 : 2e3);
      }),
      (U = function (t) {
        return function (e) {
          this[t] = +e;
        };
      }),
      (H = [
        /[+-]\d\d:?(\d\d)?|Z/,
        function (t) {
          (this.zone || (this.zone = {})).offset = (function (t) {
            if (!t || "Z" === t) return 0;
            var e = t.match(/([+-]|\d\d)/g),
              i = 60 * e[1] + (+e[2] || 0);
            return 0 === i ? 0 : "+" === e[0] ? -i : i;
          })(t);
        },
      ]),
      (z = function (t) {
        var e = $[t];
        return e && (e.indexOf ? e : e.s.concat(e.f));
      }),
      (F = function (t, e) {
        var i,
          s = $.meridiem;
        if (s) {
          for (var r = 1; r <= 24; r += 1)
            if (t.indexOf(s(r, 0, e)) > -1) {
              i = r > 12;
              break;
            }
        } else i = t === (e ? "pm" : "PM");
        return i;
      }),
      (W = {
        A: [
          P,
          function (t) {
            this.afternoon = F(t, !1);
          },
        ],
        a: [
          P,
          function (t) {
            this.afternoon = F(t, !0);
          },
        ],
        S: [
          /\d/,
          function (t) {
            this.milliseconds = 100 * +t;
          },
        ],
        SS: [
          V,
          function (t) {
            this.milliseconds = 10 * +t;
          },
        ],
        SSS: [
          /\d{3}/,
          function (t) {
            this.milliseconds = +t;
          },
        ],
        s: [I, U("seconds")],
        ss: [I, U("seconds")],
        m: [I, U("minutes")],
        mm: [I, U("minutes")],
        H: [I, U("hours")],
        h: [I, U("hours")],
        HH: [I, U("hours")],
        hh: [I, U("hours")],
        D: [I, U("day")],
        DD: [V, U("day")],
        Do: [
          P,
          function (t) {
            var e = $.ordinal,
              i = t.match(/\d+/);
            if (((this.day = i[0]), e))
              for (var s = 1; s <= 31; s += 1)
                e(s).replace(/\[|\]/g, "") === t && (this.day = s);
          },
        ],
        M: [I, U("month")],
        MM: [V, U("month")],
        MMM: [
          P,
          function (t) {
            var e = z("months"),
              i =
                (
                  z("monthsShort") ||
                  e.map(function (t) {
                    return t.slice(0, 3);
                  })
                ).indexOf(t) + 1;
            if (i < 1) throw Error();
            this.month = i % 12 || i;
          },
        ],
        MMMM: [
          P,
          function (t) {
            var e = z("months").indexOf(t) + 1;
            if (e < 1) throw Error();
            this.month = e % 12 || e;
          },
        ],
        Y: [/[+-]?\d+/, U("year")],
        YY: [
          V,
          function (t) {
            this.year = B(t);
          },
        ],
        YYYY: [/\d{4}/, U("year")],
        Z: H,
        ZZ: H,
      }),
      function (t, e, i) {
        (i.p.customParseFormat = !0),
          t && t.parseTwoDigitYear && (B = t.parseTwoDigitYear);
        var s = e.prototype,
          r = s.parse;
        s.parse = function (t) {
          var e = t.date,
            s = t.utc,
            n = t.args;
          this.$u = s;
          var o = n[1];
          if ("string" == typeof o) {
            var l = !0 === n[2],
              a = !0 === n[3],
              c = n[2];
            a && (c = n[2]),
              ($ = this.$locale()),
              !l && c && ($ = i.Ls[c]),
              (this.$d = (function (t, e, i) {
                try {
                  if (["x", "X"].indexOf(e) > -1)
                    return new Date(("X" === e ? 1e3 : 1) * t);
                  var s = (function (t) {
                      var e, i;
                      (e = t), (i = $ && $.formats);
                      for (
                        var s = (t = e.replace(
                            /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                            function (t, e, s) {
                              var r = s && s.toUpperCase();
                              return (
                                e ||
                                i[s] ||
                                j[s] ||
                                i[r].replace(
                                  /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                                  function (t, e, i) {
                                    return e || i.slice(1);
                                  }
                                )
                              );
                            }
                          )).match(R),
                          r = s.length,
                          n = 0;
                        n < r;
                        n += 1
                      ) {
                        var o = s[n],
                          l = W[o],
                          a = l && l[0],
                          c = l && l[1];
                        s[n] = c
                          ? { regex: a, parser: c }
                          : o.replace(/^\[|\]$/g, "");
                      }
                      return function (t) {
                        for (var e = {}, i = 0, n = 0; i < r; i += 1) {
                          var o = s[i];
                          if ("string" == typeof o) n += o.length;
                          else {
                            var l = o.regex,
                              a = o.parser,
                              c = t.slice(n),
                              h = l.exec(c)[0];
                            a.call(e, h), (t = t.replace(h, ""));
                          }
                        }
                        return (
                          (function (t) {
                            var e = t.afternoon;
                            if (void 0 !== e) {
                              var i = t.hours;
                              e
                                ? i < 12 && (t.hours += 12)
                                : 12 === i && (t.hours = 0),
                                delete t.afternoon;
                            }
                          })(e),
                          e
                        );
                      };
                    })(e)(t),
                    r = s.year,
                    n = s.month,
                    o = s.day,
                    l = s.hours,
                    a = s.minutes,
                    c = s.seconds,
                    h = s.milliseconds,
                    u = s.zone,
                    d = new Date(),
                    f = o || (r || n ? 1 : d.getDate()),
                    p = r || d.getFullYear(),
                    m = 0;
                  (r && !n) || (m = n > 0 ? n - 1 : d.getMonth());
                  var g = l || 0,
                    b = a || 0,
                    v = c || 0,
                    y = h || 0;
                  return u
                    ? new Date(
                        Date.UTC(p, m, f, g, b, v, y + 60 * u.offset * 1e3)
                      )
                    : i
                    ? new Date(Date.UTC(p, m, f, g, b, v, y))
                    : new Date(p, m, f, g, b, v, y);
                } catch (t) {
                  return new Date("");
                }
              })(e, o, s)),
              this.init(),
              c && !0 !== c && (this.$L = this.locale(c).$L),
              (l || a) && e != this.format(o) && (this.$d = new Date("")),
              ($ = {});
          } else if (o instanceof Array)
            for (var h = o.length, u = 1; u <= h; u += 1) {
              n[1] = o[u - 1];
              var d = i.apply(this, n);
              if (d.isValid()) {
                (this.$d = d.$d), (this.$L = d.$L), this.init();
                break;
              }
              u === h && (this.$d = new Date(""));
            }
          else r.call(this, t);
        };
      }))
  );
am.extend(ag);
const ab = (t, e) => {
    let i;
    if (e)
      switch (e) {
        case "ISO_8601":
          i = t;
          break;
        case "RFC_2822":
          i = am(t.slice(5), "DD MMM YYYY HH:mm:ss ZZ").unix();
          break;
        case "MYSQL":
          i = am(t, "YYYY-MM-DD hh:mm:ss").unix();
          break;
        case "UNIX":
          i = am(t).unix();
          break;
        default:
          i = am(t, e, !0).valueOf();
      }
    return i;
  },
  av = (t, e) => {
    if (
      t?.constructor === Object &&
      Object.prototype.hasOwnProperty.call(t, "data") &&
      !Object.keys(t).find(
        (t) => !["text", "order", "data", "attributes"].includes(t)
      )
    )
      return t;
    let i = { data: t };
    switch (e.type) {
      case "string":
        "string" != typeof t && ((i.text = String(i.data)), (i.order = i.text));
        break;
      case "date":
        e.format && (i.order = ab(String(i.data), e.format));
        break;
      case "number":
        (i.text = String(i.data)),
          (i.data = parseFloat(i.data)),
          (i.order = i.data);
        break;
      case "html": {
        let t = Array.isArray(i.data)
          ? { nodeName: "TD", childNodes: i.data }
          : aa(`<td>${String(i.data)}</td>`);
        i.data = t.childNodes || [];
        let e = lP(t);
        (i.text = e), (i.order = e);
        break;
      }
      case "boolean":
        "string" == typeof i.data && (i.data = i.data.toLowerCase().trim()),
          (i.data = !["false", !1, null, void 0, 0].includes(i.data)),
          (i.order = i.data ? 1 : 0),
          (i.text = String(i.data));
        break;
      case "other":
        (i.text = ""), (i.order = 0);
        break;
      default:
        i.text = JSON.stringify(i.data);
    }
    return i;
  },
  ay = (t) => {
    if (
      t instanceof Object &&
      t.constructor === Object &&
      t.hasOwnProperty("data") &&
      ("string" == typeof t.text || "string" == typeof t.data)
    )
      return t;
    let e = { data: t };
    if ("string" == typeof t) {
      if (t.length) {
        let i = aa(`<th>${t}</th>`);
        if (
          i.childNodes &&
          (1 !== i.childNodes.length || "#text" !== i.childNodes[0].nodeName)
        ) {
          (e.data = i.childNodes), (e.type = "html");
          let t = lP(i);
          e.text = t;
        }
      }
    } else
      [null, void 0].includes(t) ? (e.text = "") : (e.text = JSON.stringify(t));
    return e;
  },
  ax = (t, e, i, s, r) => {
    let n = { data: [], headings: [] };
    if (t.headings) n.headings = t.headings.map((t) => ay(t));
    else if (e?.tHead)
      n.headings = Array.from(e.tHead.querySelectorAll("th")).map((t, e) => {
        let n = ((t) => {
          let e;
          let i = ai(t, { valueDiffing: !1 });
          return (
            ((e =
              i.childNodes &&
              (1 !== i.childNodes.length ||
                "#text" !== i.childNodes[0].nodeName)
                ? { data: i.childNodes, type: "html", text: lP(i) }
                : { data: t.innerText, type: "string" }).attributes =
              i.attributes),
            e
          );
        })(t);
        i[e] || (i[e] = { type: s, format: r, searchable: !0, sortable: !0 });
        let o = i[e];
        return (
          ("false" !== t.dataset.sortable?.trim().toLowerCase() &&
            "false" !== t.dataset.sort?.trim().toLowerCase()) ||
            (o.sortable = !1),
          "false" === t.dataset.searchable?.trim().toLowerCase() &&
            (o.searchable = !1),
          ("true" !== t.dataset.hidden?.trim().toLowerCase() &&
            "true" !== t.getAttribute("hidden")?.trim().toLowerCase()) ||
            (o.hidden = !0),
          ["number", "string", "html", "date", "boolean", "other"].includes(
            t.dataset.type
          ) &&
            ((o.type = t.dataset.type),
            "date" === o.type &&
              t.dataset.format &&
              (o.format = t.dataset.format)),
          n
        );
      });
    else if (t.data?.length) {
      let e = t.data[0],
        i = Array.isArray(e) ? e : e.cells;
      n.headings = i.map((t) => ay(""));
    } else
      e?.tBodies.length &&
        (n.headings = Array.from(e.tBodies[0].rows[0].cells).map((t) =>
          ay("")
        ));
    for (let t = 0; t < n.headings.length; t++)
      i[t] || (i[t] = { type: s, format: r, sortable: !0, searchable: !0 });
    if (t.data) {
      let e = n.headings.map((t) => (t.data ? String(t.data) : t.text));
      n.data = t.data.map((t) => {
        let s, r;
        return (
          Array.isArray(t)
            ? ((s = {}), (r = t))
            : t.hasOwnProperty("cells") &&
              Object.keys(t).every((t) => ["cells", "attributes"].includes(t))
            ? ((s = t.attributes), (r = t.cells))
            : ((s = {}),
              (r = []),
              Object.entries(t).forEach(([t, i]) => {
                let s = e.indexOf(t);
                s > -1 && (r[s] = i);
              })),
          { attributes: s, cells: r.map((t, e) => av(t, i[e])) }
        );
      });
    } else
      e?.tBodies?.length &&
        (n.data = Array.from(e.tBodies[0].rows).map((t) => ({
          attributes: lU(t.attributes),
          cells: Array.from(t.cells).map((t, e) => {
            let s = t.dataset.content
              ? av(t.dataset.content, i[e])
              : ((t, e) => {
                  let i;
                  switch (e.type) {
                    case "string":
                      i = { data: t.innerText };
                      break;
                    case "date": {
                      let s = t.innerText;
                      i = { data: s, order: ab(s, e.format) };
                      break;
                    }
                    case "number": {
                      let e = parseFloat(t.innerText);
                      i = { data: e, order: e, text: t.innerText };
                      break;
                    }
                    case "boolean": {
                      let e = !["false", "0", "null", "undefined"].includes(
                        t.innerText.toLowerCase().trim()
                      );
                      i = { data: e, text: e ? "1" : "0", order: e ? 1 : 0 };
                      break;
                    }
                    default:
                      i = {
                        data: ai(t, { valueDiffing: !1 }).childNodes || [],
                        text: t.innerText,
                        order: t.innerText,
                      };
                  }
                  return (i.attributes = lU(t.attributes)), i;
                })(t, i[e]);
            return (
              t.dataset.order &&
                (s.order = isNaN(parseFloat(t.dataset.order))
                  ? t.dataset.order
                  : parseFloat(t.dataset.order)),
              s
            );
          }),
        })));
    if (n.data.length && n.data[0].cells.length !== n.headings.length)
      throw Error("Data heading length mismatch.");
    return n;
  };
class aE {
  cursor;
  dt;
  constructor(t) {
    (this.dt = t), (this.cursor = !1);
  }
  setCursor(t = !1) {
    if (t === this.cursor) return;
    let e = this.cursor;
    if (
      ((this.cursor = t),
      this.dt._renderTable(),
      !1 !== t && this.dt.options.scrollY)
    ) {
      let t = lH(this.dt.options.classes.cursor),
        e = this.dt.dom.querySelector(`tr${t}`);
      e && e.scrollIntoView({ block: "nearest" });
    }
    this.dt.emit("datatable.cursormove", this.cursor, e);
  }
  add(t) {
    if (!Array.isArray(t) || t.length < 1) return;
    let e = { cells: t.map((t, e) => av(t, this.dt.columns.settings[e])) };
    this.dt.data.data.push(e), (this.dt.hasRows = !0), this.dt.update(!0);
  }
  remove(t) {
    if (!Array.isArray(t)) return this.remove([t]);
    (this.dt.data.data = this.dt.data.data.filter((e, i) => !t.includes(i))),
      this.dt.data.data.length || (this.dt.hasRows = !1),
      this.dt.update(!0);
  }
  findRowIndex(t, e) {
    return this.dt.data.data.findIndex((i) =>
      l$(i.cells[t]).toLowerCase().includes(String(e).toLowerCase())
    );
  }
  findRow(t, e) {
    let i = this.findRowIndex(t, e);
    if (i < 0) return { index: -1, row: null, cols: [] };
    let s = this.dt.data.data[i],
      r = s.cells.map((t) => t.data);
    return { index: i, row: s, cols: r };
  }
  updateRow(t, e) {
    let i = { cells: e.map((t, e) => av(t, this.dt.columns.settings[e])) };
    this.dt.data.data.splice(t, 1, i), this.dt.update(!0);
  }
}
class aw {
  dt;
  settings;
  _state;
  constructor(t) {
    (this.dt = t), this.init();
  }
  init() {
    [this.settings, this._state] = ((t = [], e, i) => {
      let s = [],
        r = !1,
        n = [];
      return (
        t.forEach((t) => {
          (Array.isArray(t.select) ? t.select : [t.select]).forEach((o) => {
            s[o]
              ? t.type && (s[o].type = t.type)
              : (s[o] = { type: t.type || e, sortable: !0, searchable: !0 });
            let l = s[o];
            t.render && (l.render = t.render),
              t.format
                ? (l.format = t.format)
                : "date" === t.type && (l.format = i),
              t.cellClass && (l.cellClass = t.cellClass),
              t.headerClass && (l.headerClass = t.headerClass),
              t.locale && (l.locale = t.locale),
              !1 === t.sortable
                ? (l.sortable = !1)
                : (t.numeric && (l.numeric = t.numeric),
                  t.caseFirst && (l.caseFirst = t.caseFirst)),
              !1 === t.searchable
                ? (l.searchable = !1)
                : t.sensitivity && (l.sensitivity = t.sensitivity),
              (l.searchable || l.sortable) &&
                void 0 !== t.ignorePunctuation &&
                (l.ignorePunctuation = t.ignorePunctuation),
              t.searchMethod && (l.searchMethod = t.searchMethod),
              t.hidden && (l.hidden = !0),
              t.filter && (l.filter = t.filter),
              t.sortSequence && (l.sortSequence = t.sortSequence),
              t.sort &&
                (t.filter ? (n[o] = t.sort) : (r = { column: o, dir: t.sort })),
              void 0 !== t.searchItemSeparator &&
                (l.searchItemSeparator = t.searchItemSeparator);
          });
        }),
        [
          (s = s.map(
            (t) =>
              t || {
                type: e,
                format: "date" === e ? i : void 0,
                sortable: !0,
                searchable: !0,
              }
          )),
          { filters: n, sort: r, widths: [] },
        ]
      );
    })(this.dt.options.columns, this.dt.options.type, this.dt.options.format);
  }
  get(t) {
    return t < 0 || t >= this.size() ? null : { ...this.settings[t] };
  }
  size() {
    return this.settings.length;
  }
  swap(t) {
    if (2 === t.length) {
      let e = this.dt.data.headings.map((t, e) => e),
        i = t[0],
        s = t[1],
        r = e[s];
      return (e[s] = e[i]), (e[i] = r), this.order(e);
    }
  }
  order(t) {
    (this.dt.data.headings = t.map((t) => this.dt.data.headings[t])),
      this.dt.data.data.forEach((e) => (e.cells = t.map((t) => e.cells[t]))),
      (this.settings = t.map((t) => this.settings[t])),
      this.dt.update();
  }
  hide(t) {
    Array.isArray(t) || (t = [t]),
      t.length &&
        (t.forEach((t) => {
          this.settings[t] || (this.settings[t] = { type: "string" }),
            (this.settings[t].hidden = !0);
        }),
        this.dt.update());
  }
  show(t) {
    Array.isArray(t) || (t = [t]),
      t.length &&
        (t.forEach((t) => {
          this.settings[t] ||
            (this.settings[t] = { type: "string", sortable: !0 }),
            delete this.settings[t].hidden;
        }),
        this.dt.update());
  }
  visible(t) {
    return (
      void 0 === t && (t = [...Array(this.dt.data.headings.length).keys()]),
      Array.isArray(t)
        ? t.map((t) => !this.settings[t]?.hidden)
        : !this.settings[t]?.hidden
    );
  }
  add(t) {
    let e = this.dt.data.headings.length;
    if (
      ((this.dt.data.headings = this.dt.data.headings.concat([ay(t.heading)])),
      this.dt.data.data.forEach((e, i) => {
        e.cells = e.cells.concat([av(t.data[i], t)]);
      }),
      (this.settings[e] = {
        type: t.type || "string",
        sortable: !0,
        searchable: !0,
      }),
      t.type || t.format || t.sortable || t.render || t.filter)
    ) {
      let i = this.settings[e];
      t.render && (i.render = t.render),
        t.format && (i.format = t.format),
        t.cellClass && (i.cellClass = t.cellClass),
        t.headerClass && (i.headerClass = t.headerClass),
        t.locale && (i.locale = t.locale),
        !1 === t.sortable
          ? (i.sortable = !1)
          : (t.numeric && (i.numeric = t.numeric),
            t.caseFirst && (i.caseFirst = t.caseFirst)),
        !1 === t.searchable
          ? (i.searchable = !1)
          : t.sensitivity && (i.sensitivity = t.sensitivity),
        (i.searchable || i.sortable) &&
          t.ignorePunctuation &&
          (i.ignorePunctuation = t.ignorePunctuation),
        t.hidden && (i.hidden = !0),
        t.filter && (i.filter = t.filter),
        t.sortSequence && (i.sortSequence = t.sortSequence);
    }
    this.dt.update(!0);
  }
  remove(t) {
    Array.isArray(t) || (t = [t]),
      (this.dt.data.headings = this.dt.data.headings.filter(
        (e, i) => !t.includes(i)
      )),
      this.dt.data.data.forEach(
        (e) => (e.cells = e.cells.filter((e, i) => !t.includes(i)))
      ),
      this.dt.update(!0);
  }
  filter(t, e = !1) {
    let i;
    if (!this.settings[t]?.filter?.length) return;
    let s = this._state.filters[t];
    if (s) {
      let e = !1;
      i = this.settings[t].filter.find((t) => !!e || (t === s && (e = !0), !1));
    } else {
      let e = this.settings[t].filter;
      i = e ? e[0] : void 0;
    }
    i ? (this._state.filters[t] = i) : s && (this._state.filters[t] = void 0),
      (this.dt._currentPage = 1),
      this.dt.update(),
      e || this.dt.emit("datatable.filter", t, i);
  }
  sort(t, e, i = !1) {
    let s = this.settings[t];
    if ((i || this.dt.emit("datatable.sorting", t, e), !e)) {
      let i =
          !(!this._state.sort || this._state.sort.column !== t) &&
          this._state.sort?.dir,
        r = s?.sortSequence || ["asc", "desc"];
      if (i) {
        let t = r.indexOf(i);
        e = -1 === t ? r[0] || "asc" : t === r.length - 1 ? r[0] : r[t + 1];
      } else e = r.length ? r[0] : "asc";
    }
    let r =
      !!["string", "html"].includes(s.type) &&
      new Intl.Collator(s.locale || this.dt.options.locale, {
        usage: "sort",
        numeric: s.numeric || this.dt.options.numeric,
        caseFirst: s.caseFirst || this.dt.options.caseFirst,
        ignorePunctuation:
          s.ignorePunctuation || this.dt.options.ignorePunctuation,
      });
    this.dt.data.data.sort((i, s) => {
      let n = i.cells[t],
        o = s.cells[t],
        l = n.order ?? l$(n),
        a = o.order ?? l$(o);
      if ("desc" === e) {
        let t = l;
        (l = a), (a = t);
      }
      return r && "number" != typeof l && "number" != typeof a
        ? r.compare(String(l), String(a))
        : l < a
        ? -1
        : l > a
        ? 1
        : 0;
    }),
      (this._state.sort = { column: t, dir: e }),
      this.dt._searchQueries.length
        ? (this.dt.multiSearch(this.dt._searchQueries),
          this.dt.emit("datatable.sort", t, e))
        : i ||
          ((this.dt._currentPage = 1),
          this.dt.update(),
          this.dt.emit("datatable.sort", t, e));
  }
  _measureWidths() {
    let t = this.dt.data.headings.filter((t, e) => !this.settings[e]?.hidden);
    if (
      (this.dt.options.scrollY.length || this.dt.options.fixedColumns) &&
      t?.length
    ) {
      this._state.widths = [];
      let t = { noPaging: !0 };
      if (this.dt.options.header || this.dt.options.footer) {
        this.dt.options.scrollY.length && (t.unhideHeader = !0),
          this.dt.headerDOM &&
            this.dt.headerDOM.parentElement.removeChild(this.dt.headerDOM),
          (t.noColumnWidths = !0),
          this.dt._renderTable(t);
        let e = Array.from(
            this.dt.dom
              .querySelector("thead, tfoot")
              ?.firstElementChild?.querySelectorAll("th") || []
          ),
          i = 0,
          s = this.dt.data.headings.map((t, s) => {
            if (this.settings[s]?.hidden) return 0;
            let r = e[i].offsetWidth;
            return (i += 1), r;
          }),
          r = s.reduce((t, e) => t + e, 0);
        this._state.widths = s.map((t) => (t / r) * 100);
      } else {
        (t.renderHeader = !0), this.dt._renderTable(t);
        let e = Array.from(
            this.dt.dom
              .querySelector("thead, tfoot")
              ?.firstElementChild?.querySelectorAll("th") || []
          ),
          i = 0,
          s = this.dt.data.headings.map((t, s) => {
            if (this.settings[s]?.hidden) return 0;
            let r = e[i].offsetWidth;
            return (i += 1), r;
          }),
          r = s.reduce((t, e) => t + e, 0);
        this._state.widths = s.map((t) => (t / r) * 100);
      }
      this.dt._renderTable();
    }
  }
}
const aN = {
    sortable: !0,
    locale: "en",
    numeric: !0,
    caseFirst: "false",
    searchable: !0,
    sensitivity: "base",
    ignorePunctuation: !0,
    destroyable: !0,
    searchItemSeparator: "",
    searchQuerySeparator: " ",
    searchAnd: !1,
    searchMethod: !1,
    data: {},
    type: "html",
    format: "YYYY-MM-DD",
    columns: [],
    paging: !0,
    perPage: 10,
    perPageSelect: [5, 10, 15, 20, 25],
    nextPrev: !0,
    firstLast: !1,
    prevText: "‹",
    nextText: "›",
    firstText: "«",
    lastText: "»",
    ellipsisText: "…",
    truncatePager: !0,
    pagerDelta: 2,
    scrollY: "",
    fixedColumns: !0,
    fixedHeight: !1,
    footer: !1,
    header: !0,
    hiddenHeader: !1,
    caption: void 0,
    rowNavigation: !1,
    tabIndex: !1,
    pagerRender: !1,
    rowRender: !1,
    tableRender: !1,
    diffDomOptions: { valueDiffing: !1 },
    labels: {
      placeholder: "Search...",
      searchTitle: "Search within table",
      perPage: "entries per page",
      pageTitle: "Page {page}",
      noRows: "No entries found",
      noResults: "No results match your search query",
      info: "Showing {start} to {end} of {rows} entries",
    },
    template: (t, e) => `<div class='${t.classes.top}'>
    ${
      t.paging && t.perPageSelect
        ? `<div class='${t.classes.dropdown}'>
            <label>
                <select class='${t.classes.selector}' name="per-page"></select> ${t.labels.perPage}
            </label>
        </div>`
        : ""
    }
    ${
      t.searchable
        ? `<div class='${t.classes.search}'>
            <input class='${t.classes.input}' placeholder='${
            t.labels.placeholder
          }' type='search' name="search" title='${t.labels.searchTitle}'${
            e.id ? ` aria-controls="${e.id}"` : ""
          }>
        </div>`
        : ""
    }
</div>
<div class='${t.classes.container}'${
      t.scrollY.length ? ` style='height: ${t.scrollY}; overflow-Y: auto;'` : ""
    }></div>
<div class='${t.classes.bottom}'>
    ${t.paging ? `<div class='${t.classes.info}'></div>` : ""}
    <nav class='${t.classes.pagination}'></nav>
</div>`,
    classes: {
      active: "datatable-active",
      ascending: "datatable-ascending",
      bottom: "datatable-bottom",
      container: "datatable-container",
      cursor: "datatable-cursor",
      descending: "datatable-descending",
      disabled: "datatable-disabled",
      dropdown: "datatable-dropdown",
      ellipsis: "datatable-ellipsis",
      filter: "datatable-filter",
      filterActive: "datatable-filter-active",
      empty: "datatable-empty",
      headercontainer: "datatable-headercontainer",
      hidden: "datatable-hidden",
      info: "datatable-info",
      input: "datatable-input",
      loading: "datatable-loading",
      pagination: "datatable-pagination",
      paginationList: "datatable-pagination-list",
      paginationListItem: "datatable-pagination-list-item",
      paginationListItemLink: "datatable-pagination-list-item-link",
      search: "datatable-search",
      selector: "datatable-selector",
      sorter: "datatable-sorter",
      table: "datatable-table",
      top: "datatable-top",
      wrapper: "datatable-wrapper",
    },
  },
  a_ = (t, e, i, s = {}) => ({
    nodeName: "LI",
    attributes: {
      class:
        s.active && !s.hidden
          ? `${i.classes.paginationListItem} ${i.classes.active}`
          : s.hidden
          ? `${i.classes.paginationListItem} ${i.classes.hidden} ${i.classes.disabled}`
          : i.classes.paginationListItem,
    },
    childNodes: [
      {
        nodeName: "BUTTON",
        attributes: {
          "data-page": String(t),
          class: i.classes.paginationListItemLink,
          "aria-label": i.labels.pageTitle.replace("{page}", String(t)),
        },
        childNodes: [{ nodeName: "#text", data: e }],
      },
    ],
  }),
  aA = (t, e, i, s, r) => {
    let n = [];
    if ((r.firstLast && n.push(a_(1, r.firstText, r)), r.nextPrev)) {
      let e = t ? 1 : i - 1;
      n.push(a_(e, r.prevText, r, { hidden: t }));
    }
    let o = [...Array(s).keys()].map((t) =>
      a_(t + 1, String(t + 1), r, { active: t === i - 1 })
    );
    if (
      (r.truncatePager &&
        (o = ((t, e, i, s) => {
          let r;
          let n = s.pagerDelta,
            o = s.classes,
            l = s.ellipsisText,
            a = 2 * n,
            c = e - n,
            h = e + n;
          e < 4 - n + a
            ? (h = 3 + a)
            : e > i - (3 - n + a) && (c = i - (2 + a));
          let u = [];
          for (let e = 1; e <= i; e++)
            if (1 == e || e == i || (e >= c && e <= h)) {
              let i = t[e - 1];
              u.push(i);
            }
          let d = [];
          return (
            u.forEach((e) => {
              let i = parseInt(e.childNodes[0].attributes["data-page"], 10);
              if (r) {
                let e = parseInt(r.childNodes[0].attributes["data-page"], 10);
                if (i - e == 2) d.push(t[e]);
                else if (i - e != 1) {
                  let t = {
                    nodeName: "LI",
                    attributes: {
                      class: `${o.paginationListItem} ${o.ellipsis} ${o.disabled}`,
                    },
                    childNodes: [
                      {
                        nodeName: "BUTTON",
                        attributes: { class: o.paginationListItemLink },
                        childNodes: [{ nodeName: "#text", data: l }],
                      },
                    ],
                  };
                  d.push(t);
                }
              }
              d.push(e), (r = e);
            }),
            d
          );
        })(o, i, s, r)),
      (n = n.concat(o)),
      r.nextPrev)
    ) {
      let t = e ? s : i + 1;
      n.push(a_(t, r.nextText, r, { hidden: e }));
    }
    return (
      r.firstLast && n.push(a_(s, r.lastText, r)),
      {
        nodeName: "UL",
        attributes: { class: r.classes.paginationList },
        childNodes: o.length > 1 ? n : [],
      }
    );
  };
class aS {
  columns;
  containerDOM;
  _currentPage;
  data;
  _dd;
  dom;
  _events;
  hasHeadings;
  hasRows;
  headerDOM;
  _initialHTML;
  initialized;
  _label;
  lastPage;
  _listeners;
  onFirstPage;
  onLastPage;
  options;
  _pagerDOMs;
  _virtualPagerDOM;
  pages;
  _rect;
  rows;
  _searchData;
  _searchQueries;
  _tableAttributes;
  _tableFooters;
  _tableCaptions;
  totalPages;
  _virtualDOM;
  _virtualHeaderDOM;
  wrapperDOM;
  constructor(t, e = {}) {
    let i = "string" == typeof t ? document.querySelector(t) : t;
    i instanceof HTMLTableElement
      ? (this.dom = i)
      : ((this.dom = document.createElement("table")), i.appendChild(this.dom));
    let s = { ...aN.diffDomOptions, ...e.diffDomOptions },
      r = { ...aN.labels, ...e.labels },
      n = { ...aN.classes, ...e.classes };
    (this.options = { ...aN, ...e, diffDomOptions: s, labels: r, classes: n }),
      (this._initialHTML = this.options.destroyable ? i.outerHTML : ""),
      this.options.tabIndex
        ? (this.dom.tabIndex = this.options.tabIndex)
        : this.options.rowNavigation &&
          -1 === this.dom.tabIndex &&
          (this.dom.tabIndex = 0),
      (this._listeners = { onResize: () => this._onResize() }),
      (this._dd = new au(this.options.diffDomOptions || {})),
      (this.initialized = !1),
      (this._events = {}),
      (this._currentPage = 0),
      (this.onFirstPage = !0),
      (this.hasHeadings = !1),
      (this.hasRows = !1),
      (this._searchQueries = []),
      this.init();
  }
  init() {
    if (this.initialized || lz(this.dom, this.options.classes.table)) return !1;
    (this._virtualDOM = ai(this.dom, this.options.diffDomOptions || {})),
      (this._tableAttributes = { ...this._virtualDOM.attributes }),
      (this._tableFooters =
        this._virtualDOM.childNodes?.filter((t) => "TFOOT" === t.nodeName) ??
        []),
      (this._tableCaptions =
        this._virtualDOM.childNodes?.filter((t) => "CAPTION" === t.nodeName) ??
        []),
      void 0 !== this.options.caption &&
        this._tableCaptions.push({
          nodeName: "CAPTION",
          childNodes: [{ nodeName: "#text", data: this.options.caption }],
        }),
      (this.rows = new aE(this)),
      (this.columns = new aw(this)),
      (this.data = ax(
        this.options.data,
        this.dom,
        this.columns.settings,
        this.options.type,
        this.options.format
      )),
      this._render(),
      setTimeout(() => {
        this.emit("datatable.init"), (this.initialized = !0);
      }, 10);
  }
  _render() {
    (this.wrapperDOM = lI("div", {
      class: `${this.options.classes.wrapper} ${this.options.classes.loading}`,
    })),
      (this.wrapperDOM.innerHTML = this.options.template(
        this.options,
        this.dom
      ));
    let t = lH(this.options.classes.selector),
      e = this.wrapperDOM.querySelector(`select${t}`);
    e && this.options.paging && this.options.perPageSelect
      ? this.options.perPageSelect.forEach((t) => {
          let [i, s] = Array.isArray(t) ? [t[0], t[1]] : [String(t), t],
            r = s === this.options.perPage,
            n = new Option(i, String(s), r, r);
          e.appendChild(n);
        })
      : e && e.parentElement.removeChild(e);
    let i = lH(this.options.classes.container);
    (this.containerDOM = this.wrapperDOM.querySelector(i)),
      (this._pagerDOMs = []);
    let s = lH(this.options.classes.pagination);
    Array.from(this.wrapperDOM.querySelectorAll(s)).forEach((t) => {
      t instanceof HTMLElement &&
        ((t.innerHTML = `<ul class="${this.options.classes.paginationList}"></ul>`),
        this._pagerDOMs.push(t.firstElementChild));
    }),
      (this._virtualPagerDOM = {
        nodeName: "UL",
        attributes: { class: this.options.classes.paginationList },
      });
    let r = lH(this.options.classes.info);
    (this._label = this.wrapperDOM.querySelector(r)),
      this.dom.parentElement.replaceChild(this.wrapperDOM, this.dom),
      this.containerDOM.appendChild(this.dom),
      (this._rect = this.dom.getBoundingClientRect()),
      this._fixHeight(),
      this.options.header || this.wrapperDOM.classList.add("no-header"),
      this.options.footer || this.wrapperDOM.classList.add("no-footer"),
      this.options.sortable && this.wrapperDOM.classList.add("sortable"),
      this.options.searchable && this.wrapperDOM.classList.add("searchable"),
      this.options.fixedHeight && this.wrapperDOM.classList.add("fixed-height"),
      this.options.fixedColumns &&
        this.wrapperDOM.classList.add("fixed-columns"),
      this._bindEvents(),
      this.columns._state.sort &&
        this.columns.sort(
          this.columns._state.sort.column,
          this.columns._state.sort.dir,
          !0
        ),
      this.update(!0);
  }
  _renderTable(t = {}) {
    let e;
    e =
      (this.options.paging ||
        this._searchQueries.length ||
        this.columns._state.filters.length) &&
      this._currentPage &&
      this.pages.length &&
      !t.noPaging
        ? this.pages[this._currentPage - 1]
        : this.data.data.map((t, e) => ({ row: t, index: e }));
    let i = af(
      this._tableAttributes,
      this.data.headings,
      e,
      this.columns.settings,
      this.columns._state,
      this.rows.cursor,
      this.options,
      t,
      this._tableFooters,
      this._tableCaptions
    );
    if (this.options.tableRender) {
      let t = this.options.tableRender(this.data, i, "main");
      t && (i = t);
    }
    let s = this._dd.diff(this._virtualDOM, i);
    this._dd.apply(this.dom, s), (this._virtualDOM = i);
  }
  _renderPage(t = !1) {
    this.hasRows && this.totalPages
      ? (this._currentPage > this.totalPages && (this._currentPage = 1),
        this._renderTable(),
        (this.onFirstPage = 1 === this._currentPage),
        (this.onLastPage = this._currentPage === this.lastPage))
      : this.setMessage(this.options.labels.noRows);
    let e,
      i = 0,
      s = 0,
      r = 0;
    if (
      (this.totalPages &&
        ((r =
          (s = (i = this._currentPage - 1) * this.options.perPage) +
          this.pages[i].length),
        (s += 1),
        (e = this._searchQueries.length
          ? this._searchData.length
          : this.data.data.length)),
      this._label && this.options.labels.info.length)
    ) {
      let t = this.options.labels.info
        .replace("{start}", String(s))
        .replace("{end}", String(r))
        .replace("{page}", String(this._currentPage))
        .replace("{pages}", String(this.totalPages))
        .replace("{rows}", String(e));
      this._label.innerHTML = e ? t : "";
    }
    if (
      (1 == this._currentPage && this._fixHeight(),
      this.options.rowNavigation &&
        this._currentPage &&
        (!this.rows.cursor ||
          !this.pages[this._currentPage - 1].find(
            (t) => t.index === this.rows.cursor
          )))
    ) {
      let e = this.pages[this._currentPage - 1];
      e.length &&
        (t
          ? this.rows.setCursor(e[e.length - 1].index)
          : this.rows.setCursor(e[0].index));
    }
  }
  _renderPagers() {
    if (!this.options.paging) return;
    let t = aA(
      this.onFirstPage,
      this.onLastPage,
      this._currentPage,
      this.totalPages,
      this.options
    );
    if (this.options.pagerRender) {
      let e = this.options.pagerRender(
        [this.onFirstPage, this.onLastPage, this._currentPage, this.totalPages],
        t
      );
      e && (t = e);
    }
    let e = this._dd.diff(this._virtualPagerDOM, t);
    this._pagerDOMs.forEach((t) => {
      this._dd.apply(t, e);
    }),
      (this._virtualPagerDOM = t);
  }
  _renderSeparateHeader() {
    let t = this.dom.parentElement;
    this.headerDOM ||
      ((this.headerDOM = document.createElement("div")),
      (this._virtualHeaderDOM = { nodeName: "DIV" })),
      t.parentElement.insertBefore(this.headerDOM, t);
    let e = {
      nodeName: "TABLE",
      attributes: this._tableAttributes,
      childNodes: [
        {
          nodeName: "THEAD",
          childNodes: [
            ad(
              this.data.headings,
              this.columns.settings,
              this.columns._state,
              this.options,
              { unhideHeader: !0 }
            ),
          ],
        },
      ],
    };
    if (
      ((e.attributes.class = lF(
        e.attributes.class,
        this.options.classes.table
      )),
      this.options.tableRender)
    ) {
      let t = this.options.tableRender(this.data, e, "header");
      t && (e = t);
    }
    let i = {
        nodeName: "DIV",
        attributes: { class: this.options.classes.headercontainer },
        childNodes: [e],
      },
      s = this._dd.diff(this._virtualHeaderDOM, i);
    this._dd.apply(this.headerDOM, s), (this._virtualHeaderDOM = i);
    let r = this.headerDOM.firstElementChild.clientWidth - this.dom.clientWidth;
    if (r) {
      let t = structuredClone(this._virtualHeaderDOM);
      t.attributes.style = `padding-right: ${r}px;`;
      let e = this._dd.diff(this._virtualHeaderDOM, t);
      this._dd.apply(this.headerDOM, e), (this._virtualHeaderDOM = t);
    }
    t.scrollHeight > t.clientHeight && (t.style.overflowY = "scroll");
  }
  _bindEvents() {
    if (this.options.perPageSelect) {
      let t = lH(this.options.classes.selector),
        e = this.wrapperDOM.querySelector(t);
      e &&
        e instanceof HTMLSelectElement &&
        e.addEventListener(
          "change",
          () => {
            this.emit("datatable.perpage:before", this.options.perPage),
              (this.options.perPage = parseInt(e.value, 10)),
              this.update(),
              this._fixHeight(),
              this.emit("datatable.perpage", this.options.perPage);
          },
          !1
        );
    }
    this.options.searchable &&
      this.wrapperDOM.addEventListener("input", (t) => {
        let e = lH(this.options.classes.input),
          i = t.target;
        if (!(i instanceof HTMLInputElement && i.matches(e))) return;
        t.preventDefault();
        let s = [];
        if (
          (Array.from(this.wrapperDOM.querySelectorAll(e))
            .filter((t) => t.value.length)
            .forEach((t) => {
              let e = t.dataset.and || this.options.searchAnd,
                i =
                  t.dataset.querySeparator || this.options.searchQuerySeparator
                    ? t.value.split(this.options.searchQuerySeparator)
                    : [t.value];
              e
                ? i.forEach((e) => {
                    t.dataset.columns
                      ? s.push({
                          terms: [e],
                          columns: JSON.parse(t.dataset.columns),
                        })
                      : s.push({ terms: [e], columns: void 0 });
                  })
                : t.dataset.columns
                ? s.push({ terms: i, columns: JSON.parse(t.dataset.columns) })
                : s.push({ terms: i, columns: void 0 });
            }),
          1 === s.length && 1 === s[0].terms.length)
        ) {
          let t = s[0];
          this.search(t.terms[0], t.columns);
        } else this.multiSearch(s);
      }),
      this.wrapperDOM.addEventListener(
        "click",
        (t) => {
          let e = t.target.closest("a, button");
          if (e) {
            if (e.hasAttribute("data-page"))
              this.page(parseInt(e.getAttribute("data-page"), 10)),
                t.preventDefault();
            else if (lz(e, this.options.classes.sorter)) {
              let i = lB(
                Array.from(e.parentElement.parentElement.children).indexOf(
                  e.parentElement
                ),
                this.columns.settings
              );
              this.columns.sort(i), t.preventDefault();
            } else if (lz(e, this.options.classes.filter)) {
              let i = lB(
                Array.from(e.parentElement.parentElement.children).indexOf(
                  e.parentElement
                ),
                this.columns.settings
              );
              this.columns.filter(i), t.preventDefault();
            }
          }
        },
        !1
      ),
      this.options.rowNavigation
        ? (this.dom.addEventListener("keydown", (t) => {
            if ("ArrowUp" === t.key) {
              let e;
              t.preventDefault(),
                t.stopPropagation(),
                this.pages[this._currentPage - 1].find(
                  (t) => t.index === this.rows.cursor || ((e = t), !1)
                ),
                e
                  ? this.rows.setCursor(e.index)
                  : this.onFirstPage || this.page(this._currentPage - 1, !0);
            } else if ("ArrowDown" === t.key) {
              let e;
              t.preventDefault(), t.stopPropagation();
              let i = this.pages[this._currentPage - 1].find(
                (t) => !!e || (t.index === this.rows.cursor && (e = !0), !1)
              );
              i
                ? this.rows.setCursor(i.index)
                : this.onLastPage || this.page(this._currentPage + 1);
            } else
              ["Enter", " "].includes(t.key) &&
                this.emit("datatable.selectrow", this.rows.cursor, t);
          }),
          this.dom.addEventListener("mousedown", (t) => {
            let e = t.target;
            if (e instanceof Element && this.dom.matches(":focus")) {
              let i = Array.from(this.dom.querySelectorAll("tbody > tr")).find(
                (t) => t.contains(e)
              );
              i &&
                i instanceof HTMLElement &&
                this.emit(
                  "datatable.selectrow",
                  parseInt(i.dataset.index, 10),
                  t
                );
            }
          }))
        : this.dom.addEventListener("mousedown", (t) => {
            let e = t.target;
            if (!(e instanceof Element)) return;
            let i = Array.from(this.dom.querySelectorAll("tbody > tr")).find(
              (t) => t.contains(e)
            );
            i &&
              i instanceof HTMLElement &&
              this.emit(
                "datatable.selectrow",
                parseInt(i.dataset.index, 10),
                t
              );
          }),
      window.addEventListener("resize", this._listeners.onResize);
  }
  _onResize = lW(() => {
    (this._rect = this.containerDOM.getBoundingClientRect()),
      this._rect.width && this.update(!0);
  }, 250);
  destroy() {
    if (this.options.destroyable) {
      if (this.wrapperDOM) {
        let t = this.wrapperDOM.parentElement;
        if (t) {
          let e = lI("div");
          e.innerHTML = this._initialHTML;
          let i = e.firstElementChild;
          t.replaceChild(i, this.wrapperDOM), (this.dom = i);
        } else
          this.options.classes.table
            ?.split(" ")
            .forEach((t) => this.wrapperDOM.classList.remove(t));
      }
      window.removeEventListener("resize", this._listeners.onResize),
        (this.initialized = !1);
    }
  }
  update(t = !1) {
    this.emit("datatable.update:before"),
      t &&
        (this.columns._measureWidths(),
        (this.hasRows = !!this.data.data.length),
        (this.hasHeadings = !!this.data.headings.length)),
      this.options.classes.empty
        ?.split(" ")
        .forEach((t) => this.wrapperDOM.classList.remove(t)),
      this._paginate(),
      this._renderPage(),
      this._renderPagers(),
      this.options.scrollY.length && this._renderSeparateHeader(),
      this.emit("datatable.update");
  }
  _paginate() {
    let t = this.data.data.map((t, e) => ({ row: t, index: e }));
    return (
      this._searchQueries.length &&
        ((t = []),
        this._searchData.forEach((e) =>
          t.push({ index: e, row: this.data.data[e] })
        )),
      this.columns._state.filters.length &&
        this.columns._state.filters.forEach((e, i) => {
          e &&
            (t = t.filter((t) => {
              let s = t.row.cells[i];
              return "function" == typeof e ? e(s.data) : l$(s) === e;
            }));
        }),
      this.options.paging && this.options.perPage > 0
        ? (this.pages = t
            .map((e, i) =>
              i % this.options.perPage == 0
                ? t.slice(i, i + this.options.perPage)
                : null
            )
            .filter((t) => t))
        : (this.pages = [t]),
      (this.totalPages = this.lastPage = this.pages.length),
      this._currentPage || (this._currentPage = 1),
      this.totalPages
    );
  }
  _fixHeight() {
    this.options.fixedHeight &&
      ((this.containerDOM.style.height = null),
      (this._rect = this.containerDOM.getBoundingClientRect()),
      (this.containerDOM.style.height = `${this._rect.height}px`));
  }
  search(t, e, i = "search") {
    if ((this.emit("datatable.search:before", t, this._searchData), !t.length))
      return (
        (this._currentPage = 1),
        (this._searchQueries = []),
        (this._searchData = []),
        this.update(),
        this.emit("datatable.search", "", []),
        this.wrapperDOM.classList.remove("search-results"),
        !1
      );
    this.multiSearch([{ terms: [t], columns: e || void 0 }], i),
      this.emit("datatable.search", t, this._searchData);
  }
  multiSearch(t, e = "search") {
    if (!this.hasRows) return !1;
    (this._currentPage = 1), (this._searchData = []);
    let i = t
      .map((t) => ({
        columns: t.columns,
        terms: t.terms.map((t) => t.trim()).filter((t) => t),
        source: e,
      }))
      .filter((t) => t.terms.length);
    if (
      (this.emit("datatable.multisearch:before", i, this._searchData),
      e.length &&
        (i = i.concat(this._searchQueries.filter((t) => t.source !== e))),
      (this._searchQueries = i),
      !i.length)
    )
      return (
        this.update(),
        this.emit("datatable.multisearch", i, this._searchData),
        this.wrapperDOM.classList.remove("search-results"),
        !1
      );
    let s = i.map((t) =>
      this.columns.settings.map((e, i) => {
        if (e.hidden || !e.searchable || (t.columns && !t.columns.includes(i)))
          return !1;
        let s = t.terms,
          r = e.sensitivity || this.options.sensitivity;
        return (
          ["base", "accent"].includes(r) && (s = s.map((t) => t.toLowerCase())),
          ["base", "case"].includes(r) &&
            (s = s.map((t) =>
              t.normalize("NFD").replace(/\p{Diacritic}/gu, "")
            )),
          (e.ignorePunctuation ?? this.options.ignorePunctuation) &&
            (s = s.map((t) => t.replace(/[.,/#!$%^&*;:{}=-_`~()]/g, ""))),
          s
        );
      })
    );
    this.data.data.forEach((t, e) => {
      let r = t.cells.map((t, e) => {
        let i = this.columns.settings[e];
        if (i.searchMethod || this.options.searchMethod) return t;
        let s = l$(t).trim();
        if (s.length) {
          let t = i.sensitivity || this.options.sensitivity;
          ["base", "accent"].includes(t) && (s = s.toLowerCase()),
            ["base", "case"].includes(t) &&
              (s = s.normalize("NFD").replace(/\p{Diacritic}/gu, "")),
            (i.ignorePunctuation ?? this.options.ignorePunctuation) &&
              (s = s.replace(/[.,/#!$%^&*;:{}=-_`~()]/g, ""));
        }
        let r = i.searchItemSeparator || this.options.searchItemSeparator;
        return r ? s.split(r) : [s];
      });
      s.every((e, s) =>
        e.find((e, n) => {
          if (!e) return !1;
          let o =
            this.columns.settings[n].searchMethod || this.options.searchMethod;
          return o
            ? o(e, r[n], t, n, i[s].source)
            : e.find((t) => r[n].find((e) => e.includes(t)));
        })
      ) && this._searchData.push(e);
    }),
      this.wrapperDOM.classList.add("search-results"),
      this._searchData.length
        ? this.update()
        : (this.wrapperDOM.classList.remove("search-results"),
          this.setMessage(this.options.labels.noResults)),
      this.emit("datatable.multisearch", i, this._searchData);
  }
  page(t, e = !1) {
    return (
      this.emit("datatable.page:before", t),
      t !== this._currentPage &&
        (isNaN(t) || (this._currentPage = t),
        !(t > this.pages.length || t < 0) &&
          (this._renderPage(e),
          this._renderPagers(),
          void this.emit("datatable.page", t)))
    );
  }
  insert(t) {
    let e = [];
    if (Array.isArray(t)) {
      let i = this.data.headings.map((t) => (t.data ? String(t.data) : t.text));
      t.forEach((t, s) => {
        let r = [];
        Object.entries(t).forEach(([t, e]) => {
          let n = i.indexOf(t);
          n > -1
            ? (r[n] = av(e, this.columns.settings[n]))
            : this.hasHeadings ||
              this.hasRows ||
              0 !== s ||
              ((r[i.length] = av(e, this.columns.settings[i.length])),
              i.push(t),
              this.data.headings.push(ay(t)));
        }),
          e.push({ cells: r });
      });
    } else
      lV(t) &&
        (!t.headings || this.hasHeadings || this.hasRows
          ? t.data &&
            Array.isArray(t.data) &&
            (e = t.data.map((t) => {
              let e, i;
              return (
                Array.isArray(t)
                  ? ((e = {}), (i = t))
                  : ((e = t.attributes), (i = t.cells)),
                {
                  attributes: e,
                  cells: i.map((t, e) => av(t, this.columns.settings[e])),
                }
              );
            }))
          : (this.data = ax(
              t,
              void 0,
              this.columns.settings,
              this.options.type,
              this.options.format
            )));
    e.length && e.forEach((t) => this.data.data.push(t)),
      (this.hasHeadings = !!this.data.headings.length),
      this.columns._state.sort &&
        this.columns.sort(
          this.columns._state.sort.column,
          this.columns._state.sort.dir,
          !0
        ),
      this.update(!0);
  }
  refresh() {
    if ((this.emit("datatable.refresh:before"), this.options.searchable)) {
      let t = lH(this.options.classes.input);
      Array.from(this.wrapperDOM.querySelectorAll(t)).forEach(
        (t) => (t.value = "")
      ),
        (this._searchQueries = []);
    }
    (this._currentPage = 1),
      (this.onFirstPage = !0),
      this.update(!0),
      this.emit("datatable.refresh");
  }
  print() {
    let t = lI("table"),
      e = af(
        this._tableAttributes,
        this.data.headings,
        this.data.data.map((t, e) => ({ row: t, index: e })),
        this.columns.settings,
        this.columns._state,
        !1,
        this.options,
        { noColumnWidths: !0, unhideHeader: !0 },
        this._tableFooters,
        this._tableCaptions
      );
    if (this.options.tableRender) {
      let t = this.options.tableRender(this.data, e, "print");
      t && (e = t);
    }
    let i = this._dd.diff({ nodeName: "TABLE" }, e);
    this._dd.apply(t, i);
    let s = window.open();
    s.document.body.appendChild(t), s.print();
  }
  setMessage(t) {
    let e =
      this.data.headings.filter((t, e) => !this.columns.settings[e]?.hidden)
        .length || 1;
    this.options.classes.empty
      ?.split(" ")
      .forEach((t) => this.wrapperDOM.classList.add(t)),
      this._label && (this._label.innerHTML = ""),
      (this.totalPages = 0),
      this._renderPagers();
    let i = {
      nodeName: "TABLE",
      attributes: this._tableAttributes,
      childNodes: [
        {
          nodeName: "THEAD",
          childNodes: [
            ad(
              this.data.headings,
              this.columns.settings,
              this.columns._state,
              this.options,
              {}
            ),
          ],
        },
        {
          nodeName: "TBODY",
          childNodes: [
            {
              nodeName: "TR",
              childNodes: [
                {
                  nodeName: "TD",
                  attributes: {
                    class: this.options.classes.empty,
                    colspan: String(e),
                  },
                  childNodes: [{ nodeName: "#text", data: t }],
                },
              ],
            },
          ],
        },
      ],
    };
    if (
      (this._tableFooters.forEach((t) => i.childNodes.push(t)),
      this._tableCaptions.forEach((t) => i.childNodes.push(t)),
      (i.attributes.class = lF(i.attributes.class, this.options.classes.table)),
      this.options.tableRender)
    ) {
      let t = this.options.tableRender(this.data, i, "message");
      t && (i = t);
    }
    let s = this._dd.diff(this._virtualDOM, i);
    this._dd.apply(this.dom, s), (this._virtualDOM = i);
  }
  on(t, e) {
    (this._events[t] = this._events[t] || []), this._events[t].push(e);
  }
  off(t, e) {
    t in this._events != !1 &&
      this._events[t].splice(this._events[t].indexOf(e), 1);
  }
  emit(t, ...e) {
    if (t in this._events != !1)
      for (let i = 0; i < this._events[t].length; i++) this._events[t][i](...e);
  }
}
const ak = function (t, e = {}) {
    let i;
    if ((!t.hasHeadings && !t.hasRows) || !lV(e)) return !1;
    let s = {
        download: !0,
        skipColumn: [],
        lineDelimiter: "\n",
        columnDelimiter: ",",
        ...e,
      },
      r = (e) => !s.skipColumn.includes(e) && !t.columns.settings[e]?.hidden,
      n = t.data.headings.filter((t, e) => r(e)).map((t) => t.text ?? t.data);
    if (s.selection) {
      if (Array.isArray(s.selection)) {
        i = [];
        for (let e = 0; e < s.selection.length; e++)
          i = i.concat(t.pages[s.selection[e] - 1].map((t) => t.row));
      } else i = t.pages[s.selection - 1].map((t) => t.row);
    } else i = t.data.data;
    let o = [];
    if (
      ((o[0] = n),
      (o = o.concat(
        i.map((t) => t.cells.filter((t, e) => r(e)).map((t) => l$(t)))
      )).length)
    ) {
      let t = "";
      if (
        (o.forEach((e) => {
          e.forEach((e) => {
            "string" == typeof e &&
              (e = (e = (e = (e = (e = e.trim()).replace(
                /\s{2,}/g,
                " "
              )).replace(/\n/g, "  ")).replace(/"/g, '""')).replace(
                /#/g,
                "%23"
              )).includes(",") &&
              (e = `"${e}"`),
              (t += e + s.columnDelimiter);
          }),
            (t = t.trim().substring(0, t.length - 1) + s.lineDelimiter);
        }),
        (t = t.trim().substring(0, t.length - 1)),
        s.download)
      ) {
        let e = document.createElement("a");
        (e.href = encodeURI(`data:text/csv;charset=utf-8,${t}`)),
          (e.download = `${s.filename || "datatable_export"}.csv`),
          document.body.appendChild(e),
          e.click(),
          document.body.removeChild(e);
      }
      return t;
    }
    return !1;
  },
  aO = function (t, e = {}) {
    let i;
    if ((!t.hasHeadings && !t.hasRows) || !lV(e)) return !1;
    let s = { download: !0, skipColumn: [], replacer: null, space: 4, ...e },
      r = (e) => !s.skipColumn.includes(e) && !t.columns.settings[e]?.hidden;
    if (s.selection) {
      if (Array.isArray(s.selection)) {
        i = [];
        for (let e = 0; e < s.selection.length; e++)
          i = i.concat(t.pages[s.selection[e] - 1].map((t) => t.row));
      } else i = t.pages[s.selection - 1].map((t) => t.row);
    } else i = t.data.data;
    let n = i.map((t) => t.cells.filter((t, e) => r(e)).map((t) => l$(t))),
      o = t.data.headings
        .filter((t, e) => r(e))
        .map((t) => t.text ?? String(t.data));
    if (n.length) {
      let t = [];
      n.forEach((e, i) => {
        (t[i] = t[i] || {}),
          e.forEach((e, s) => {
            t[i][o[s]] = e;
          });
      });
      let e = JSON.stringify(t, s.replacer, s.space);
      if (s.download) {
        let t = new Blob([e], { type: "data:application/json;charset=utf-8" }),
          i = URL.createObjectURL(t),
          r = document.createElement("a");
        (r.href = i),
          (r.download = `${s.filename || "datatable_export"}.json`),
          document.body.appendChild(r),
          r.click(),
          document.body.removeChild(r),
          URL.revokeObjectURL(i);
      }
      return e;
    }
    return !1;
  },
  aL = function (t, e = {}) {
    if ((!t.hasHeadings && !t.hasRows) || !lV(e)) return !1;
    let i = { download: !0, skipColumn: [], tableName: "myTable", ...e },
      s = (e) => !i.skipColumn.includes(e) && !t.columns.settings[e]?.hidden,
      r = [];
    if (i.selection) {
      if (Array.isArray(i.selection))
        for (let e = 0; e < i.selection.length; e++)
          r = r.concat(t.pages[i.selection[e] - 1].map((t) => t.row));
      else r = t.pages[i.selection - 1].map((t) => t.row);
    } else r = t.data.data;
    let n = r.map((t) => t.cells.filter((t, e) => s(e)).map((t) => l$(t))),
      o = t.data.headings
        .filter((t, e) => s(e))
        .map((t) => t.text ?? String(t.data));
    if (n.length) {
      let t = `INSERT INTO \`${i.tableName}\` (`;
      if (
        (o.forEach((e) => {
          t += `\`${e}\`,`;
        }),
        (t = t.trim().substring(0, t.length - 1) + ") VALUES "),
        n.forEach((e) => {
          (t += "("),
            e.forEach((e) => {
              t += "string" == typeof e ? `"${e}",` : `${e},`;
            }),
            (t = t.trim().substring(0, t.length - 1) + "),");
        }),
        (t = t.trim().substring(0, t.length - 1) + ";"),
        i.download && (t = `data:application/sql;charset=utf-8,${t}`),
        i.download)
      ) {
        let e = document.createElement("a");
        (e.href = encodeURI(t)),
          (e.download = `${i.filename || "datatable_export"}.sql`),
          document.body.appendChild(e),
          e.click(),
          document.body.removeChild(e);
      }
      return t;
    }
    return !1;
  },
  aT = function (t, e = {}) {
    let i;
    if ((!t.hasHeadings && !t.hasRows) || !lV(e)) return !1;
    let s = {
        download: !0,
        skipColumn: [],
        lineDelimiter: "\n",
        columnDelimiter: ",",
        ...e,
      },
      r = (e) => !s.skipColumn.includes(e) && !t.columns.settings[e]?.hidden,
      n = t.data.headings.filter((t, e) => r(e)).map((t) => t.text ?? t.data);
    if (s.selection) {
      if (Array.isArray(s.selection)) {
        i = [];
        for (let e = 0; e < s.selection.length; e++)
          i = i.concat(t.pages[s.selection[e] - 1].map((t) => t.row));
      } else i = t.pages[s.selection - 1].map((t) => t.row);
    } else i = t.data.data;
    let o = [];
    if (
      ((o[0] = n),
      (o = o.concat(
        i.map((t) => t.cells.filter((t, e) => r(e)).map((t) => l$(t)))
      )).length)
    ) {
      let t = "";
      if (
        (o.forEach((e) => {
          e.forEach((e) => {
            "string" == typeof e &&
              (e = (e = (e = (e = (e = e.trim()).replace(
                /\s{2,}/g,
                " "
              )).replace(/\n/g, "  ")).replace(/"/g, '""')).replace(
                /#/g,
                "%23"
              )).includes(",") &&
              (e = `"${e}"`),
              (t += e + s.columnDelimiter);
          }),
            (t = t.trim().substring(0, t.length - 1) + s.lineDelimiter);
        }),
        (t = t.trim().substring(0, t.length - 1)),
        s.download && (t = `data:text/csv;charset=utf-8,${t}`),
        s.download)
      ) {
        let e = document.createElement("a");
        (e.href = encodeURI(t)),
          (e.download = `${s.filename || "datatable_export"}.txt`),
          document.body.appendChild(e),
          e.click(),
          document.body.removeChild(e);
      }
      return t;
    }
    return !1;
  },
  aC = function (t, e = {}) {
    let i = { ...e };
    i.download = !1;
    let s = ak(t, i);
    if (!s) return !1;
    let r = { download: !0, lineDelimiter: "\n", columnDelimiter: ";", ...i },
      n = Array(
        t.data.headings.filter((e, i) => !t.columns.settings[i]?.hidden).length
      )
        .fill("-")
        .join(r.columnDelimiter),
      o = `${n}${r.lineDelimiter}${s}${r.lineDelimiter}${n}`;
    if (e.download) {
      let t = document.createElement("a");
      (t.href = encodeURI(`data:text/csv;charset=utf-8,${o}`)),
        (t.download = `${r.filename || "datatable_export"}.txt`),
        document.body.appendChild(t),
        t.click(),
        document.body.removeChild(t);
    }
    return o;
  };
var aq = {},
  aM = {};
aM = function (t) {
  var e = typeof t;
  return null != t && ("object" == e || "function" == e);
};
var aD = {},
  aj = {},
  aR = {};
aR = "object" == typeof G && G && G.Object === Object && G;
var aV = "object" == typeof self && self && self.Object === Object && self;
(aj = aR || aV || Function("return this")()),
  (aD = function () {
    return aj.Date.now();
  });
var aI = {},
  aP = {},
  a$ = {},
  aB = /\s/;
a$ = function (t) {
  for (var e = t.length; e-- && aB.test(t.charAt(e)); );
  return e;
};
var aU = /^\s+/;
aP = function (t) {
  return t ? t.slice(0, a$(t) + 1).replace(aU, "") : t;
};
var aH = {},
  az = {},
  aF = {};
aF = aj.Symbol;
var aW = {},
  aY = Object.prototype,
  aK = aY.hasOwnProperty,
  aZ = aY.toString,
  aX = aF ? aF.toStringTag : void 0;
aW = function (t) {
  var e = aK.call(t, aX),
    i = t[aX];
  try {
    t[aX] = void 0;
    var s = !0;
  } catch (t) {}
  var r = aZ.call(t);
  return s && (e ? (t[aX] = i) : delete t[aX]), r;
};
var aG = {},
  aQ = Object.prototype.toString;
aG = function (t) {
  return aQ.call(t);
};
var aJ = aF ? aF.toStringTag : void 0;
az = function (t) {
  return null == t
    ? void 0 === t
      ? "[object Undefined]"
      : "[object Null]"
    : aJ && aJ in Object(t)
    ? aW(t)
    : aG(t);
};
var a0 = {};
(a0 = function (t) {
  return null != t && "object" == typeof t;
}),
  (aH = function (t) {
    return "symbol" == typeof t || (a0(t) && "[object Symbol]" == az(t));
  });
var a1 = 0 / 0,
  a2 = /^[-+]0x[0-9a-f]+$/i,
  a5 = /^0b[01]+$/i,
  a3 = /^0o[0-7]+$/i,
  a4 = parseInt;
aI = function (t) {
  if ("number" == typeof t) return t;
  if (aH(t)) return a1;
  if (aM(t)) {
    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
    t = aM(e) ? e + "" : e;
  }
  if ("string" != typeof t) return 0 === t ? t : +t;
  t = aP(t);
  var i = a5.test(t);
  return i || a3.test(t) ? a4(t.slice(2), i ? 2 : 8) : a2.test(t) ? a1 : +t;
};
var a6 = Math.max,
  a8 = Math.min;
aq = function (t, e, i) {
  var s,
    r,
    n,
    o,
    l,
    a,
    c = 0,
    h = !1,
    u = !1,
    d = !0;
  if ("function" != typeof t) throw TypeError("Expected a function");
  function f(e) {
    var i = s,
      n = r;
    return (s = r = void 0), (c = e), (o = t.apply(n, i));
  }
  function p(t) {
    var i = t - a,
      s = t - c;
    return void 0 === a || i >= e || i < 0 || (u && s >= n);
  }
  function m() {
    var t,
      i,
      s,
      r = aD();
    if (p(r)) return g(r);
    l = setTimeout(
      m,
      ((t = r - a), (i = r - c), (s = e - t), u ? a8(s, n - i) : s)
    );
  }
  function g(t) {
    return ((l = void 0), d && s) ? f(t) : ((s = r = void 0), o);
  }
  function b() {
    var t,
      i = aD(),
      n = p(i);
    if (((s = arguments), (r = this), (a = i), n)) {
      if (void 0 === l)
        return (c = t = a), (l = setTimeout(m, e)), h ? f(t) : o;
      if (u) return clearTimeout(l), (l = setTimeout(m, e)), f(a);
    }
    return void 0 === l && (l = setTimeout(m, e)), o;
  }
  return (
    (e = aI(e) || 0),
    aM(i) &&
      ((h = !!i.leading),
      (n = (u = "maxWait" in i) ? a6(aI(i.maxWait) || 0, e) : n),
      (d = "trailing" in i ? !!i.trailing : d)),
    (b.cancel = function () {
      void 0 !== l && clearTimeout(l), (c = 0), (s = a = r = l = void 0);
    }),
    (b.flush = function () {
      return void 0 === l ? o : g(aD());
    }),
    b
  );
};
var a9 = {};
a9 = function (t, e, i) {
  var s = !0,
    r = !0;
  if ("function" != typeof t) throw TypeError("Expected a function");
  return (
    aM(i) &&
      ((s = "leading" in i ? !!i.leading : s),
      (r = "trailing" in i ? !!i.trailing : r)),
    aq(t, e, { leading: s, maxWait: e, trailing: r })
  );
};
var a7 = function () {
  return (a7 =
    Object.assign ||
    function (t) {
      for (var e, i = 1, s = arguments.length; i < s; i++)
        for (var r in (e = arguments[i]))
          Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      return t;
    }).apply(this, arguments);
};
function ct(t) {
  return t && t.ownerDocument && t.ownerDocument.defaultView
    ? t.ownerDocument.defaultView
    : window;
}
function ce(t) {
  return t && t.ownerDocument ? t.ownerDocument : document;
}
var ci = function (t) {
  return Array.prototype.reduce.call(
    t,
    function (t, e) {
      var i = e.name.match(/data-simplebar-(.+)/);
      if (i) {
        var s = i[1].replace(/\W+(.)/g, function (t, e) {
          return e.toUpperCase();
        });
        switch (e.value) {
          case "true":
          case void 0:
            t[s] = !0;
            break;
          case "false":
            t[s] = !1;
            break;
          default:
            t[s] = e.value;
        }
      }
      return t;
    },
    {}
  );
};
function cs(t, e) {
  var i;
  t && (i = t.classList).add.apply(i, e.split(" "));
}
function cr(t, e) {
  t &&
    e.split(" ").forEach(function (e) {
      t.classList.remove(e);
    });
}
function cn(t) {
  return ".".concat(t.split(" ").join("."));
}
var co = !!(
    "undefined" != typeof window &&
    window.document &&
    window.document.createElement
  ),
  cl = Object.freeze({
    __proto__: null,
    addClasses: cs,
    canUseDOM: co,
    classNamesToQuery: cn,
    getElementDocument: ce,
    getElementWindow: ct,
    getOptions: ci,
    removeClasses: cr,
  }),
  ca = null,
  cc = null;
function ch() {
  if (null === ca) {
    if ("undefined" == typeof document) return (ca = 0);
    var t = document.body,
      e = document.createElement("div");
    e.classList.add("simplebar-hide-scrollbar"), t.appendChild(e);
    var i = e.getBoundingClientRect().right;
    t.removeChild(e), (ca = i);
  }
  return ca;
}
co &&
  window.addEventListener("resize", function () {
    cc !== window.devicePixelRatio &&
      ((cc = window.devicePixelRatio), (ca = null));
  });
var cu = (function () {
    function t(e, i) {
      void 0 === i && (i = {});
      var s = this;
      if (
        ((this.removePreventClickId = null),
        (this.minScrollbarWidth = 20),
        (this.stopScrollDelay = 175),
        (this.isScrolling = !1),
        (this.isMouseEntering = !1),
        (this.isDragging = !1),
        (this.scrollXTicking = !1),
        (this.scrollYTicking = !1),
        (this.wrapperEl = null),
        (this.contentWrapperEl = null),
        (this.contentEl = null),
        (this.offsetEl = null),
        (this.maskEl = null),
        (this.placeholderEl = null),
        (this.heightAutoObserverWrapperEl = null),
        (this.heightAutoObserverEl = null),
        (this.rtlHelpers = null),
        (this.scrollbarWidth = 0),
        (this.resizeObserver = null),
        (this.mutationObserver = null),
        (this.elStyles = null),
        (this.isRtl = null),
        (this.mouseX = 0),
        (this.mouseY = 0),
        (this.onMouseMove = function () {}),
        (this.onWindowResize = function () {}),
        (this.onStopScrolling = function () {}),
        (this.onMouseEntered = function () {}),
        (this.onScroll = function () {
          var t = ct(s.el);
          s.scrollXTicking ||
            (t.requestAnimationFrame(s.scrollX), (s.scrollXTicking = !0)),
            s.scrollYTicking ||
              (t.requestAnimationFrame(s.scrollY), (s.scrollYTicking = !0)),
            s.isScrolling ||
              ((s.isScrolling = !0), cs(s.el, s.classNames.scrolling)),
            s.showScrollbar("x"),
            s.showScrollbar("y"),
            s.onStopScrolling();
        }),
        (this.scrollX = function () {
          s.axis.x.isOverflowing && s.positionScrollbar("x"),
            (s.scrollXTicking = !1);
        }),
        (this.scrollY = function () {
          s.axis.y.isOverflowing && s.positionScrollbar("y"),
            (s.scrollYTicking = !1);
        }),
        (this._onStopScrolling = function () {
          cr(s.el, s.classNames.scrolling),
            s.options.autoHide && (s.hideScrollbar("x"), s.hideScrollbar("y")),
            (s.isScrolling = !1);
        }),
        (this.onMouseEnter = function () {
          s.isMouseEntering ||
            (cs(s.el, s.classNames.mouseEntered),
            s.showScrollbar("x"),
            s.showScrollbar("y"),
            (s.isMouseEntering = !0)),
            s.onMouseEntered();
        }),
        (this._onMouseEntered = function () {
          cr(s.el, s.classNames.mouseEntered),
            s.options.autoHide && (s.hideScrollbar("x"), s.hideScrollbar("y")),
            (s.isMouseEntering = !1);
        }),
        (this._onMouseMove = function (t) {
          (s.mouseX = t.clientX),
            (s.mouseY = t.clientY),
            (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
              s.onMouseMoveForAxis("x"),
            (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
              s.onMouseMoveForAxis("y");
        }),
        (this.onMouseLeave = function () {
          s.onMouseMove.cancel(),
            (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
              s.onMouseLeaveForAxis("x"),
            (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
              s.onMouseLeaveForAxis("y"),
            (s.mouseX = -1),
            (s.mouseY = -1);
        }),
        (this._onWindowResize = function () {
          (s.scrollbarWidth = s.getScrollbarWidth()), s.hideNativeScrollbar();
        }),
        (this.onPointerEvent = function (t) {
          var e, i;
          s.axis.x.track.el &&
            s.axis.y.track.el &&
            s.axis.x.scrollbar.el &&
            s.axis.y.scrollbar.el &&
            ((s.axis.x.track.rect = s.axis.x.track.el.getBoundingClientRect()),
            (s.axis.y.track.rect = s.axis.y.track.el.getBoundingClientRect()),
            (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
              (e = s.isWithinBounds(s.axis.x.track.rect)),
            (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
              (i = s.isWithinBounds(s.axis.y.track.rect)),
            (e || i) &&
              (t.stopPropagation(),
              "pointerdown" === t.type &&
                "touch" !== t.pointerType &&
                (e &&
                  ((s.axis.x.scrollbar.rect =
                    s.axis.x.scrollbar.el.getBoundingClientRect()),
                  s.isWithinBounds(s.axis.x.scrollbar.rect)
                    ? s.onDragStart(t, "x")
                    : s.onTrackClick(t, "x")),
                i &&
                  ((s.axis.y.scrollbar.rect =
                    s.axis.y.scrollbar.el.getBoundingClientRect()),
                  s.isWithinBounds(s.axis.y.scrollbar.rect)
                    ? s.onDragStart(t, "y")
                    : s.onTrackClick(t, "y")))));
        }),
        (this.drag = function (e) {
          if (s.draggedAxis && s.contentWrapperEl) {
            var i,
              r,
              n,
              o,
              l,
              a,
              c,
              h,
              u,
              d,
              f,
              p = s.axis[s.draggedAxis].track,
              m =
                null !==
                  (r =
                    null === (i = p.rect) || void 0 === i
                      ? void 0
                      : i[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== r
                  ? r
                  : 0,
              g = s.axis[s.draggedAxis].scrollbar,
              b =
                null !==
                  (o =
                    null === (n = s.contentWrapperEl) || void 0 === n
                      ? void 0
                      : n[s.axis[s.draggedAxis].scrollSizeAttr]) && void 0 !== o
                  ? o
                  : 0,
              v = parseInt(
                null !==
                  (a =
                    null === (l = s.elStyles) || void 0 === l
                      ? void 0
                      : l[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== a
                  ? a
                  : "0px",
                10
              );
            e.preventDefault(), e.stopPropagation();
            var y =
                ("y" === s.draggedAxis ? e.pageY : e.pageX) -
                (null !==
                  (h =
                    null === (c = p.rect) || void 0 === c
                      ? void 0
                      : c[s.axis[s.draggedAxis].offsetAttr]) && void 0 !== h
                  ? h
                  : 0) -
                s.axis[s.draggedAxis].dragOffset,
              x =
                ((y =
                  "x" === s.draggedAxis && s.isRtl
                    ? (null !==
                        (d =
                          null === (u = p.rect) || void 0 === u
                            ? void 0
                            : u[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== d
                        ? d
                        : 0) -
                      g.size -
                      y
                    : y) /
                  (m - g.size)) *
                (b - v);
            "x" === s.draggedAxis &&
              s.isRtl &&
              (x = (
                null === (f = t.getRtlHelpers()) || void 0 === f
                  ? void 0
                  : f.isScrollingToNegative
              )
                ? -x
                : x),
              (s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr] = x);
          }
        }),
        (this.onEndDrag = function (t) {
          s.isDragging = !1;
          var e = ce(s.el),
            i = ct(s.el);
          t.preventDefault(),
            t.stopPropagation(),
            cr(s.el, s.classNames.dragging),
            s.onStopScrolling(),
            e.removeEventListener("mousemove", s.drag, !0),
            e.removeEventListener("mouseup", s.onEndDrag, !0),
            (s.removePreventClickId = i.setTimeout(function () {
              e.removeEventListener("click", s.preventClick, !0),
                e.removeEventListener("dblclick", s.preventClick, !0),
                (s.removePreventClickId = null);
            }));
        }),
        (this.preventClick = function (t) {
          t.preventDefault(), t.stopPropagation();
        }),
        (this.el = e),
        (this.options = a7(a7({}, t.defaultOptions), i)),
        (this.classNames = a7(
          a7({}, t.defaultOptions.classNames),
          i.classNames
        )),
        (this.axis = {
          x: {
            scrollOffsetAttr: "scrollLeft",
            sizeAttr: "width",
            scrollSizeAttr: "scrollWidth",
            offsetSizeAttr: "offsetWidth",
            offsetAttr: "left",
            overflowAttr: "overflowX",
            dragOffset: 0,
            isOverflowing: !0,
            forceVisible: !1,
            track: { size: null, el: null, rect: null, isVisible: !1 },
            scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
          },
          y: {
            scrollOffsetAttr: "scrollTop",
            sizeAttr: "height",
            scrollSizeAttr: "scrollHeight",
            offsetSizeAttr: "offsetHeight",
            offsetAttr: "top",
            overflowAttr: "overflowY",
            dragOffset: 0,
            isOverflowing: !0,
            forceVisible: !1,
            track: { size: null, el: null, rect: null, isVisible: !1 },
            scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
          },
        }),
        "object" != typeof this.el || !this.el.nodeName)
      )
        throw Error(
          "Argument passed to SimpleBar must be an HTML element instead of ".concat(
            this.el
          )
        );
      (this.onMouseMove = Q(a9)(this._onMouseMove, 64)),
        (this.onWindowResize = Q(aq)(this._onWindowResize, 64, {
          leading: !0,
        })),
        (this.onStopScrolling = Q(aq)(
          this._onStopScrolling,
          this.stopScrollDelay
        )),
        (this.onMouseEntered = Q(aq)(
          this._onMouseEntered,
          this.stopScrollDelay
        )),
        this.init();
    }
    return (
      (t.getRtlHelpers = function () {
        if (t.rtlHelpers) return t.rtlHelpers;
        var e = document.createElement("div");
        e.innerHTML =
          '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
        var i = e.firstElementChild,
          s = null == i ? void 0 : i.firstElementChild;
        if (!s) return null;
        document.body.appendChild(i), (i.scrollLeft = 0);
        var r = t.getOffset(i),
          n = t.getOffset(s);
        i.scrollLeft = -999;
        var o = t.getOffset(s);
        return (
          document.body.removeChild(i),
          (t.rtlHelpers = {
            isScrollOriginAtZero: r.left !== n.left,
            isScrollingToNegative: n.left !== o.left,
          }),
          t.rtlHelpers
        );
      }),
      (t.prototype.getScrollbarWidth = function () {
        try {
          if (
            (this.contentWrapperEl &&
              "none" ===
                getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
                  .display) ||
            "scrollbarWidth" in document.documentElement.style ||
            "-ms-overflow-style" in document.documentElement.style
          )
            return 0;
          return ch();
        } catch (t) {
          return ch();
        }
      }),
      (t.getOffset = function (t) {
        var e = t.getBoundingClientRect(),
          i = ce(t),
          s = ct(t);
        return {
          top: e.top + (s.pageYOffset || i.documentElement.scrollTop),
          left: e.left + (s.pageXOffset || i.documentElement.scrollLeft),
        };
      }),
      (t.prototype.init = function () {
        co &&
          (this.initDOM(),
          (this.rtlHelpers = t.getRtlHelpers()),
          (this.scrollbarWidth = this.getScrollbarWidth()),
          this.recalculate(),
          this.initListeners());
      }),
      (t.prototype.initDOM = function () {
        var t, e;
        (this.wrapperEl = this.el.querySelector(cn(this.classNames.wrapper))),
          (this.contentWrapperEl =
            this.options.scrollableNode ||
            this.el.querySelector(cn(this.classNames.contentWrapper))),
          (this.contentEl =
            this.options.contentNode ||
            this.el.querySelector(cn(this.classNames.contentEl))),
          (this.offsetEl = this.el.querySelector(cn(this.classNames.offset))),
          (this.maskEl = this.el.querySelector(cn(this.classNames.mask))),
          (this.placeholderEl = this.findChild(
            this.wrapperEl,
            cn(this.classNames.placeholder)
          )),
          (this.heightAutoObserverWrapperEl = this.el.querySelector(
            cn(this.classNames.heightAutoObserverWrapperEl)
          )),
          (this.heightAutoObserverEl = this.el.querySelector(
            cn(this.classNames.heightAutoObserverEl)
          )),
          (this.axis.x.track.el = this.findChild(
            this.el,
            ""
              .concat(cn(this.classNames.track))
              .concat(cn(this.classNames.horizontal))
          )),
          (this.axis.y.track.el = this.findChild(
            this.el,
            ""
              .concat(cn(this.classNames.track))
              .concat(cn(this.classNames.vertical))
          )),
          (this.axis.x.scrollbar.el =
            (null === (t = this.axis.x.track.el) || void 0 === t
              ? void 0
              : t.querySelector(cn(this.classNames.scrollbar))) || null),
          (this.axis.y.scrollbar.el =
            (null === (e = this.axis.y.track.el) || void 0 === e
              ? void 0
              : e.querySelector(cn(this.classNames.scrollbar))) || null),
          this.options.autoHide ||
            (cs(this.axis.x.scrollbar.el, this.classNames.visible),
            cs(this.axis.y.scrollbar.el, this.classNames.visible));
      }),
      (t.prototype.initListeners = function () {
        var t,
          e = this,
          i = ct(this.el);
        if (
          (this.el.addEventListener("mouseenter", this.onMouseEnter),
          this.el.addEventListener("pointerdown", this.onPointerEvent, !0),
          this.el.addEventListener("mousemove", this.onMouseMove),
          this.el.addEventListener("mouseleave", this.onMouseLeave),
          null === (t = this.contentWrapperEl) ||
            void 0 === t ||
            t.addEventListener("scroll", this.onScroll),
          i.addEventListener("resize", this.onWindowResize),
          this.contentEl)
        ) {
          if (window.ResizeObserver) {
            var s = !1,
              r = i.ResizeObserver || ResizeObserver;
            (this.resizeObserver = new r(function () {
              s &&
                i.requestAnimationFrame(function () {
                  e.recalculate();
                });
            })),
              this.resizeObserver.observe(this.el),
              this.resizeObserver.observe(this.contentEl),
              i.requestAnimationFrame(function () {
                s = !0;
              });
          }
          (this.mutationObserver = new i.MutationObserver(function () {
            i.requestAnimationFrame(function () {
              e.recalculate();
            });
          })),
            this.mutationObserver.observe(this.contentEl, {
              childList: !0,
              subtree: !0,
              characterData: !0,
            });
        }
      }),
      (t.prototype.recalculate = function () {
        if (
          this.heightAutoObserverEl &&
          this.contentEl &&
          this.contentWrapperEl &&
          this.wrapperEl &&
          this.placeholderEl
        ) {
          var t = ct(this.el);
          (this.elStyles = t.getComputedStyle(this.el)),
            (this.isRtl = "rtl" === this.elStyles.direction);
          var e = this.contentEl.offsetWidth,
            i = this.heightAutoObserverEl.offsetHeight <= 1,
            s = this.heightAutoObserverEl.offsetWidth <= 1 || e > 0,
            r = this.contentWrapperEl.offsetWidth,
            n = this.elStyles.overflowX,
            o = this.elStyles.overflowY;
          (this.contentEl.style.padding = ""
            .concat(this.elStyles.paddingTop, " ")
            .concat(this.elStyles.paddingRight, " ")
            .concat(this.elStyles.paddingBottom, " ")
            .concat(this.elStyles.paddingLeft)),
            (this.wrapperEl.style.margin = "-"
              .concat(this.elStyles.paddingTop, " -")
              .concat(this.elStyles.paddingRight, " -")
              .concat(this.elStyles.paddingBottom, " -")
              .concat(this.elStyles.paddingLeft));
          var l = this.contentEl.scrollHeight,
            a = this.contentEl.scrollWidth;
          (this.contentWrapperEl.style.height = i ? "auto" : "100%"),
            (this.placeholderEl.style.width = s
              ? "".concat(e || a, "px")
              : "auto"),
            (this.placeholderEl.style.height = "".concat(l, "px"));
          var c = this.contentWrapperEl.offsetHeight;
          (this.axis.x.isOverflowing = 0 !== e && a > e),
            (this.axis.y.isOverflowing = l > c),
            (this.axis.x.isOverflowing =
              "hidden" !== n && this.axis.x.isOverflowing),
            (this.axis.y.isOverflowing =
              "hidden" !== o && this.axis.y.isOverflowing),
            (this.axis.x.forceVisible =
              "x" === this.options.forceVisible ||
              !0 === this.options.forceVisible),
            (this.axis.y.forceVisible =
              "y" === this.options.forceVisible ||
              !0 === this.options.forceVisible),
            this.hideNativeScrollbar();
          var h = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
            u = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
          (this.axis.x.isOverflowing = this.axis.x.isOverflowing && a > r - u),
            (this.axis.y.isOverflowing =
              this.axis.y.isOverflowing && l > c - h),
            (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
            (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
            this.axis.x.scrollbar.el &&
              (this.axis.x.scrollbar.el.style.width = "".concat(
                this.axis.x.scrollbar.size,
                "px"
              )),
            this.axis.y.scrollbar.el &&
              (this.axis.y.scrollbar.el.style.height = "".concat(
                this.axis.y.scrollbar.size,
                "px"
              )),
            this.positionScrollbar("x"),
            this.positionScrollbar("y"),
            this.toggleTrackVisibility("x"),
            this.toggleTrackVisibility("y");
        }
      }),
      (t.prototype.getScrollbarSize = function (t) {
        if (
          (void 0 === t && (t = "y"),
          !this.axis[t].isOverflowing || !this.contentEl)
        )
          return 0;
        var e,
          i,
          s,
          r = this.contentEl[this.axis[t].scrollSizeAttr],
          n =
            null !==
              (i =
                null === (e = this.axis[t].track.el) || void 0 === e
                  ? void 0
                  : e[this.axis[t].offsetSizeAttr]) && void 0 !== i
              ? i
              : 0;
        return (
          (s = Math.max(~~((n / r) * n), this.options.scrollbarMinSize)),
          this.options.scrollbarMaxSize &&
            (s = Math.min(s, this.options.scrollbarMaxSize)),
          s
        );
      }),
      (t.prototype.positionScrollbar = function (e) {
        void 0 === e && (e = "y");
        var i,
          s,
          r,
          n = this.axis[e].scrollbar;
        if (
          this.axis[e].isOverflowing &&
          this.contentWrapperEl &&
          n.el &&
          this.elStyles
        ) {
          var o = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
            l =
              (null === (i = this.axis[e].track.el) || void 0 === i
                ? void 0
                : i[this.axis[e].offsetSizeAttr]) || 0,
            a = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
            c = this.contentWrapperEl[this.axis[e].scrollOffsetAttr];
          (c =
            "x" === e &&
            this.isRtl &&
            (null === (s = t.getRtlHelpers()) || void 0 === s
              ? void 0
              : s.isScrollOriginAtZero)
              ? -c
              : c),
            "x" === e &&
              this.isRtl &&
              (c = (
                null === (r = t.getRtlHelpers()) || void 0 === r
                  ? void 0
                  : r.isScrollingToNegative
              )
                ? c
                : -c);
          var h = c / (o - a),
            u = ~~((l - n.size) * h);
          (u = "x" === e && this.isRtl ? -u + (l - n.size) : u),
            (n.el.style.transform =
              "x" === e
                ? "translate3d(".concat(u, "px, 0, 0)")
                : "translate3d(0, ".concat(u, "px, 0)"));
        }
      }),
      (t.prototype.toggleTrackVisibility = function (t) {
        void 0 === t && (t = "y");
        var e = this.axis[t].track.el,
          i = this.axis[t].scrollbar.el;
        e &&
          i &&
          this.contentWrapperEl &&
          (this.axis[t].isOverflowing || this.axis[t].forceVisible
            ? ((e.style.visibility = "visible"),
              (this.contentWrapperEl.style[this.axis[t].overflowAttr] =
                "scroll"),
              this.el.classList.add(
                "".concat(this.classNames.scrollable, "-").concat(t)
              ))
            : ((e.style.visibility = "hidden"),
              (this.contentWrapperEl.style[this.axis[t].overflowAttr] =
                "hidden"),
              this.el.classList.remove(
                "".concat(this.classNames.scrollable, "-").concat(t)
              )),
          this.axis[t].isOverflowing
            ? (i.style.display = "block")
            : (i.style.display = "none"));
      }),
      (t.prototype.showScrollbar = function (t) {
        void 0 === t && (t = "y"),
          this.axis[t].isOverflowing &&
            !this.axis[t].scrollbar.isVisible &&
            (cs(this.axis[t].scrollbar.el, this.classNames.visible),
            (this.axis[t].scrollbar.isVisible = !0));
      }),
      (t.prototype.hideScrollbar = function (t) {
        void 0 === t && (t = "y"),
          !this.isDragging &&
            this.axis[t].isOverflowing &&
            this.axis[t].scrollbar.isVisible &&
            (cr(this.axis[t].scrollbar.el, this.classNames.visible),
            (this.axis[t].scrollbar.isVisible = !1));
      }),
      (t.prototype.hideNativeScrollbar = function () {
        this.offsetEl &&
          ((this.offsetEl.style[this.isRtl ? "left" : "right"] =
            this.axis.y.isOverflowing || this.axis.y.forceVisible
              ? "-".concat(this.scrollbarWidth, "px")
              : "0px"),
          (this.offsetEl.style.bottom =
            this.axis.x.isOverflowing || this.axis.x.forceVisible
              ? "-".concat(this.scrollbarWidth, "px")
              : "0px"));
      }),
      (t.prototype.onMouseMoveForAxis = function (t) {
        void 0 === t && (t = "y");
        var e = this.axis[t];
        e.track.el &&
          e.scrollbar.el &&
          ((e.track.rect = e.track.el.getBoundingClientRect()),
          (e.scrollbar.rect = e.scrollbar.el.getBoundingClientRect()),
          this.isWithinBounds(e.track.rect)
            ? (this.showScrollbar(t),
              cs(e.track.el, this.classNames.hover),
              this.isWithinBounds(e.scrollbar.rect)
                ? cs(e.scrollbar.el, this.classNames.hover)
                : cr(e.scrollbar.el, this.classNames.hover))
            : (cr(e.track.el, this.classNames.hover),
              this.options.autoHide && this.hideScrollbar(t)));
      }),
      (t.prototype.onMouseLeaveForAxis = function (t) {
        void 0 === t && (t = "y"),
          cr(this.axis[t].track.el, this.classNames.hover),
          cr(this.axis[t].scrollbar.el, this.classNames.hover),
          this.options.autoHide && this.hideScrollbar(t);
      }),
      (t.prototype.onDragStart = function (t, e) {
        void 0 === e && (e = "y"), (this.isDragging = !0);
        var i,
          s = ce(this.el),
          r = ct(this.el),
          n = this.axis[e].scrollbar,
          o = "y" === e ? t.pageY : t.pageX;
        (this.axis[e].dragOffset =
          o -
          ((null === (i = n.rect) || void 0 === i
            ? void 0
            : i[this.axis[e].offsetAttr]) || 0)),
          (this.draggedAxis = e),
          cs(this.el, this.classNames.dragging),
          s.addEventListener("mousemove", this.drag, !0),
          s.addEventListener("mouseup", this.onEndDrag, !0),
          null === this.removePreventClickId
            ? (s.addEventListener("click", this.preventClick, !0),
              s.addEventListener("dblclick", this.preventClick, !0))
            : (r.clearTimeout(this.removePreventClickId),
              (this.removePreventClickId = null));
      }),
      (t.prototype.onTrackClick = function (t, e) {
        var i,
          s,
          r,
          n,
          o = this;
        void 0 === e && (e = "y");
        var l = this.axis[e];
        if (
          this.options.clickOnTrack &&
          l.scrollbar.el &&
          this.contentWrapperEl
        ) {
          t.preventDefault();
          var a = ct(this.el);
          this.axis[e].scrollbar.rect = l.scrollbar.el.getBoundingClientRect();
          var c =
              null !==
                (s =
                  null === (i = this.axis[e].scrollbar.rect) || void 0 === i
                    ? void 0
                    : i[this.axis[e].offsetAttr]) && void 0 !== s
                ? s
                : 0,
            h = parseInt(
              null !==
                (n =
                  null === (r = this.elStyles) || void 0 === r
                    ? void 0
                    : r[this.axis[e].sizeAttr]) && void 0 !== n
                ? n
                : "0px",
              10
            ),
            u = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
            d = ("y" === e ? this.mouseY - c : this.mouseX - c) < 0 ? -1 : 1,
            f = -1 === d ? u - h : u + h,
            p = function () {
              o.contentWrapperEl &&
                (-1 === d
                  ? u > f &&
                    ((u -= 40),
                    (o.contentWrapperEl[o.axis[e].scrollOffsetAttr] = u),
                    a.requestAnimationFrame(p))
                  : u < f &&
                    ((u += 40),
                    (o.contentWrapperEl[o.axis[e].scrollOffsetAttr] = u),
                    a.requestAnimationFrame(p)));
            };
          p();
        }
      }),
      (t.prototype.getContentElement = function () {
        return this.contentEl;
      }),
      (t.prototype.getScrollElement = function () {
        return this.contentWrapperEl;
      }),
      (t.prototype.removeListeners = function () {
        var t = ct(this.el);
        this.el.removeEventListener("mouseenter", this.onMouseEnter),
          this.el.removeEventListener("pointerdown", this.onPointerEvent, !0),
          this.el.removeEventListener("mousemove", this.onMouseMove),
          this.el.removeEventListener("mouseleave", this.onMouseLeave),
          this.contentWrapperEl &&
            this.contentWrapperEl.removeEventListener("scroll", this.onScroll),
          t.removeEventListener("resize", this.onWindowResize),
          this.mutationObserver && this.mutationObserver.disconnect(),
          this.resizeObserver && this.resizeObserver.disconnect(),
          this.onMouseMove.cancel(),
          this.onWindowResize.cancel(),
          this.onStopScrolling.cancel(),
          this.onMouseEntered.cancel();
      }),
      (t.prototype.unMount = function () {
        this.removeListeners();
      }),
      (t.prototype.isWithinBounds = function (t) {
        return (
          this.mouseX >= t.left &&
          this.mouseX <= t.left + t.width &&
          this.mouseY >= t.top &&
          this.mouseY <= t.top + t.height
        );
      }),
      (t.prototype.findChild = function (t, e) {
        var i =
          t.matches ||
          t.webkitMatchesSelector ||
          t.mozMatchesSelector ||
          t.msMatchesSelector;
        return Array.prototype.filter.call(t.children, function (t) {
          return i.call(t, e);
        })[0];
      }),
      (t.rtlHelpers = null),
      (t.defaultOptions = {
        forceVisible: !1,
        clickOnTrack: !0,
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        ariaLabel: "scrollable content",
        tabIndex: 0,
        classNames: {
          contentEl: "simplebar-content",
          contentWrapper: "simplebar-content-wrapper",
          offset: "simplebar-offset",
          mask: "simplebar-mask",
          wrapper: "simplebar-wrapper",
          placeholder: "simplebar-placeholder",
          scrollbar: "simplebar-scrollbar",
          track: "simplebar-track",
          heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
          heightAutoObserverEl: "simplebar-height-auto-observer",
          visible: "simplebar-visible",
          horizontal: "simplebar-horizontal",
          vertical: "simplebar-vertical",
          hover: "simplebar-hover",
          dragging: "simplebar-dragging",
          scrolling: "simplebar-scrolling",
          scrollable: "simplebar-scrollable",
          mouseEntered: "simplebar-mouse-entered",
        },
        scrollableNode: null,
        contentNode: null,
        autoHide: !0,
      }),
      (t.getOptions = ci),
      (t.helpers = cl),
      t
    );
  })(),
  cd = function (t, e) {
    return (cd =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      })(t, e);
  },
  cf = cu.helpers,
  cp = cf.getOptions,
  cm = cf.addClasses,
  cg = cf.canUseDOM,
  cb = (function (t) {
    function e() {
      for (var i = [], s = 0; s < arguments.length; s++) i[s] = arguments[s];
      var r = t.apply(this, i) || this;
      return e.instances.set(i[0], r), r;
    }
    return (
      !(function (t, e) {
        if ("function" != typeof e && null !== e)
          throw TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function i() {
          this.constructor = t;
        }
        cd(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((i.prototype = e.prototype), new i()));
      })(e, t),
      (e.initDOMLoadedElements = function () {
        document.removeEventListener(
          "DOMContentLoaded",
          this.initDOMLoadedElements
        ),
          window.removeEventListener("load", this.initDOMLoadedElements),
          Array.prototype.forEach.call(
            document.querySelectorAll("[data-simplebar]"),
            function (t) {
              "init" === t.getAttribute("data-simplebar") ||
                e.instances.has(t) ||
                new e(t, cp(t.attributes));
            }
          );
      }),
      (e.removeObserver = function () {
        var t;
        null === (t = e.globalObserver) || void 0 === t || t.disconnect();
      }),
      (e.prototype.initDOM = function () {
        var t,
          e,
          i,
          s = this;
        if (
          !Array.prototype.filter.call(this.el.children, function (t) {
            return t.classList.contains(s.classNames.wrapper);
          }).length
        ) {
          for (
            this.wrapperEl = document.createElement("div"),
              this.contentWrapperEl = document.createElement("div"),
              this.offsetEl = document.createElement("div"),
              this.maskEl = document.createElement("div"),
              this.contentEl = document.createElement("div"),
              this.placeholderEl = document.createElement("div"),
              this.heightAutoObserverWrapperEl = document.createElement("div"),
              this.heightAutoObserverEl = document.createElement("div"),
              cm(this.wrapperEl, this.classNames.wrapper),
              cm(this.contentWrapperEl, this.classNames.contentWrapper),
              cm(this.offsetEl, this.classNames.offset),
              cm(this.maskEl, this.classNames.mask),
              cm(this.contentEl, this.classNames.contentEl),
              cm(this.placeholderEl, this.classNames.placeholder),
              cm(
                this.heightAutoObserverWrapperEl,
                this.classNames.heightAutoObserverWrapperEl
              ),
              cm(
                this.heightAutoObserverEl,
                this.classNames.heightAutoObserverEl
              );
            this.el.firstChild;

          )
            this.contentEl.appendChild(this.el.firstChild);
          this.contentWrapperEl.appendChild(this.contentEl),
            this.offsetEl.appendChild(this.contentWrapperEl),
            this.maskEl.appendChild(this.offsetEl),
            this.heightAutoObserverWrapperEl.appendChild(
              this.heightAutoObserverEl
            ),
            this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
            this.wrapperEl.appendChild(this.maskEl),
            this.wrapperEl.appendChild(this.placeholderEl),
            this.el.appendChild(this.wrapperEl),
            null === (t = this.contentWrapperEl) ||
              void 0 === t ||
              t.setAttribute("tabindex", this.options.tabIndex.toString()),
            null === (e = this.contentWrapperEl) ||
              void 0 === e ||
              e.setAttribute("role", "region"),
            null === (i = this.contentWrapperEl) ||
              void 0 === i ||
              i.setAttribute("aria-label", this.options.ariaLabel);
        }
        if (!this.axis.x.track.el || !this.axis.y.track.el) {
          var r = document.createElement("div"),
            n = document.createElement("div");
          cm(r, this.classNames.track),
            cm(n, this.classNames.scrollbar),
            r.appendChild(n),
            (this.axis.x.track.el = r.cloneNode(!0)),
            cm(this.axis.x.track.el, this.classNames.horizontal),
            (this.axis.y.track.el = r.cloneNode(!0)),
            cm(this.axis.y.track.el, this.classNames.vertical),
            this.el.appendChild(this.axis.x.track.el),
            this.el.appendChild(this.axis.y.track.el);
        }
        cu.prototype.initDOM.call(this),
          this.el.setAttribute("data-simplebar", "init");
      }),
      (e.prototype.unMount = function () {
        cu.prototype.unMount.call(this), e.instances.delete(this.el);
      }),
      (e.initHtmlApi = function () {
        (this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
          "undefined" != typeof MutationObserver &&
            ((this.globalObserver = new MutationObserver(e.handleMutations)),
            this.globalObserver.observe(document, {
              childList: !0,
              subtree: !0,
            })),
          "complete" !== document.readyState &&
          ("loading" === document.readyState ||
            document.documentElement.doScroll)
            ? (document.addEventListener(
                "DOMContentLoaded",
                this.initDOMLoadedElements
              ),
              window.addEventListener("load", this.initDOMLoadedElements))
            : window.setTimeout(this.initDOMLoadedElements);
      }),
      (e.handleMutations = function (t) {
        t.forEach(function (t) {
          t.addedNodes.forEach(function (t) {
            1 === t.nodeType &&
              (t.hasAttribute("data-simplebar")
                ? !e.instances.has(t) &&
                  document.documentElement.contains(t) &&
                  new e(t, cp(t.attributes))
                : t.querySelectorAll("[data-simplebar]").forEach(function (t) {
                    "init" !== t.getAttribute("data-simplebar") &&
                      !e.instances.has(t) &&
                      document.documentElement.contains(t) &&
                      new e(t, cp(t.attributes));
                  }));
          }),
            t.removedNodes.forEach(function (t) {
              var i;
              1 === t.nodeType &&
                ("init" === t.getAttribute("data-simplebar")
                  ? document.documentElement.contains(t) ||
                    null === (i = e.instances.get(t)) ||
                    void 0 === i ||
                    i.unMount()
                  : Array.prototype.forEach.call(
                      t.querySelectorAll('[data-simplebar="init"]'),
                      function (t) {
                        var i;
                        document.documentElement.contains(t) ||
                          null === (i = e.instances.get(t)) ||
                          void 0 === i ||
                          i.unMount();
                      }
                    ));
            });
        });
      }),
      (e.instances = new WeakMap()),
      e
    );
  })(cu);
cg && cb.initHtmlApi(),
  te("60Xwh"),
  [...document.querySelectorAll('[data-bs-toggle="popover"]')].map(
    (t) => new of.Popover(t)
  ),
  [...document.querySelectorAll('[data-bs-toggle="tooltip"]')].map(
    (t) => new of.Tooltip(t)
  ),
  document.querySelectorAll(".date-picker").forEach((t) => {
    new ts.Datepicker(t, {
      todayHighlight: !0,
      buttonClass: "btn",
      nextArrow: "<i class='ph ph-arrow-right'></i>",
      prevArrow: "<i class='ph ph-arrow-left'></i>",
    });
  }),
  document.querySelectorAll(".date-range-picker").forEach((t) => {
    new ts.DateRangePicker(t, {
      buttonClass: "btn",
      nextArrow: "<i class='ph ph-arrow-right'></i>",
      prevArrow: "<i class='ph ph-arrow-left'></i>",
      clearButton: !0,
      todayButton: !0,
    });
  }),
  (() => {
    let t = document.querySelectorAll(".quill-inner"),
      e = rm.import("ui/icons");
    (e.bold = '<i class="ph ph-text-b"></i>'),
      (e.italic = '<i class="ph ph-text-italic"></i>'),
      (e.underline = '<i class="ph ph-text-underline"></i>'),
      (e.link = '<i class="ph ph-link"></i>'),
      (e.image = '<i class="ph ph-image"></i>'),
      (e.list.ordered = '<i class="ph ph-list-numbers"></i>'),
      (e.list.bullet = '<i class="ph ph-list-bullets"></i>'),
      t.length > 0 &&
        t.forEach((t) => {
          let e = t.getAttribute("data-placeholder");
          new rm(t, {
            modules: {
              toolbar: [
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image"],
              ],
            },
            placeholder: e,
            theme: "snow",
          });
        });
  })(),
  (() => {
    let t = document.getElementById("slider-basic"),
      e = document.getElementById("slider-range");
    if (
      (t &&
        (o2.create(t, {
          start: [20],
          connect: "lower",
          range: { min: 0, max: 100 },
        }),
        t.noUiSlider.on("update", function (t, e) {
          document.getElementById("slider-basic-input").value = t[e];
        })),
      e)
    ) {
      let t = [
        document.getElementById("slider-range-upper-input"),
        document.getElementById("slider-range-lower-input"),
      ];
      o2.create(e, {
        start: [30, 70],
        connect: !0,
        range: { min: 0, max: 100 },
      }),
        e.noUiSlider.on("update", function (e, i) {
          t[i].value = e[i];
        });
    }
  })(),
  (() => {
    let t = document.querySelector("hex-color-picker"),
      e = document.getElementById("hex-input"),
      i = document.querySelector("hsl-string-color-picker"),
      s = document.getElementById("hsl-input"),
      r = document.querySelector("rgba-string-color-picker"),
      n = document.getElementById("rgba-input");
    t &&
      t.addEventListener("color-changed", (t) => {
        let i = t.detail.value;
        e.value = i;
      }),
      i &&
        i.addEventListener("color-changed", (t) => {
          let e = t.detail.value;
          s.value = e;
        }),
      r &&
        r.addEventListener("color-changed", (t) => {
          let e = t.detail.value;
          n.value = e;
        });
  })(),
  (() => {
    let t = document.getElementById("datatable-basic");
    lR(t, 100),
      setTimeout(() => {
        new aS(t);
      });
  })(),
  (() => {
    let t;
    let e = document.getElementById("datatable-export");
    lR(e, 100),
      setTimeout(() => {
        t = new aS(e);
      }),
      document.getElementById("export-csv").addEventListener("click", () => {
        ak(t, { download: !0, lineDelimiter: "\n", columnDelimiter: ";" });
      }),
      document.getElementById("export-sql").addEventListener("click", () => {
        aL(t, { download: !0, tableName: "export_table" });
      }),
      document.getElementById("export-txt").addEventListener("click", () => {
        aT(t, { download: !0 });
      }),
      document.getElementById("export-json").addEventListener("click", () => {
        aO(t, { download: !0, space: 3 });
      }),
      document.getElementById("export-custom").addEventListener("click", () => {
        aC(t, { download: !0 });
      });
  })(),
  (() => {
    let t = document.getElementById("datatable-filter");
    lR(t, 100),
      setTimeout(() => {
        window.dt = new aS(t, {
          perPageSelect: [10, 50, ["All", -1]],
          columns: [
            { select: 2, sortSequence: ["desc", "asc"] },
            { select: 3, sortSequence: ["desc"] },
          ],
          tableRender: (t, e, i) => {
            if ("print" === i) return e;
            let s = e.childNodes[0],
              r = {
                nodeName: "TR",
                childNodes: s.childNodes[0].childNodes.map((t, e) => ({
                  nodeName: "TH",
                  childNodes: [
                    {
                      nodeName: "INPUT",
                      attributes: {
                        class: "datatable-input",
                        type: "search",
                        "data-columns": `[${e}]`,
                        placeHolder: "Search...",
                      },
                    },
                  ],
                })),
              };
            return s.childNodes.push(r), e;
          },
        });
      });
  })(),
  (() => {
    let t = document.getElementById("datatable-toggle");
    lR(t, 100, !0);
    let e = new aS(t, {
      rowRender: (t, e, i) => (
        e.attributes || (e.attributes = {}),
        (e.attributes["data-name"] = t.cells[1].data[0].data),
        e
      ),
      columns: [
        {
          select: 0,
          sortable: !1,
          render: (t, e, i, s) =>
            `<span class="checkbox fs-2 ph ${
              t ? "ph-square" : "ph-check-square"
            }"></span>`,
        },
      ],
    });
    e.dom.addEventListener("click", (t) => {
      if (t.target.matches("span.checkbox")) {
        t.preventDefault(), t.stopPropagation();
        let i = t.target.parentElement.parentElement.dataset.name,
          s = parseInt(t.target.parentElement.parentElement.dataset.index, 10),
          r = e.data.data[s].cells[0],
          n = r.data;
        (r.data = !n),
          e.update(),
          setTimeout(
            () => alert(`"${i}" has been ${n ? "checked" : "unchecked"}.`),
            10
          );
      }
    }),
      (window.datatable = e);
  })(),
  (() => {
    let t = document.getElementById("datatable-scroll");
    lR(t, 100),
      setTimeout(() => {
        new aS(t, {
          paging: !1,
          scrollY: "30vh",
          rowNavigation: !0,
          tabIndex: 1,
        });
      });
  })();
//# sourceMappingURL=vendor.39feb43f.js.map

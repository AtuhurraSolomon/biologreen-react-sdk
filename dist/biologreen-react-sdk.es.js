import { useState as cs, useRef as ls, useEffect as fs, useCallback as bf } from "react";
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var Su = function(r, t) {
  return (Su = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var o in n) n.hasOwnProperty(o) && (e[o] = n[o]);
  })(r, t);
};
function Ct(r, t) {
  function e() {
    this.constructor = r;
  }
  Su(r, t), r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
function $(r, t, e, n) {
  return new (e || (e = Promise))(function(o, a) {
    function i(c) {
      try {
        u(n.next(c));
      } catch (l) {
        a(l);
      }
    }
    function s(c) {
      try {
        u(n.throw(c));
      } catch (l) {
        a(l);
      }
    }
    function u(c) {
      c.done ? o(c.value) : new e(function(l) {
        l(c.value);
      }).then(i, s);
    }
    u((n = n.apply(r, [])).next());
  });
}
function Y(r, t) {
  var e, n, o, a, i = { label: 0, sent: function() {
    if (1 & o[0]) throw o[1];
    return o[1];
  }, trys: [], ops: [] };
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(c) {
      return function(l) {
        if (e) throw new TypeError("Generator is already executing.");
        for (; i; ) try {
          if (e = 1, n && (o = 2 & l[0] ? n.return : l[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, l[1])).done) return o;
          switch (n = 0, o && (l = [2 & l[0], o.value]), l[0]) {
            case 0:
            case 1:
              o = l;
              break;
            case 4:
              return i.label++, { value: l[1], done: !1 };
            case 5:
              i.label++, n = l[1], l = [0];
              continue;
            case 7:
              l = i.ops.pop(), i.trys.pop();
              continue;
            default:
              if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                i = 0;
                continue;
              }
              if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
                i.label = l[1];
                break;
              }
              if (l[0] === 6 && i.label < o[1]) {
                i.label = o[1], o = l;
                break;
              }
              if (o && i.label < o[2]) {
                i.label = o[2], i.ops.push(l);
                break;
              }
              o[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          l = t.call(r, i);
        } catch (f) {
          l = [6, f], n = 0;
        } finally {
          e = o = 0;
        }
        if (5 & l[0]) throw l[1];
        return { value: l[0] ? l[1] : void 0, done: !0 };
      }([u, c]);
    };
  }
}
var xf = function() {
  function r(t) {
    this.global = t, this.flags = {}, this.flagRegistry = {}, this.urlFlags = {}, this.populateURLFlags();
  }
  return r.prototype.setPlatform = function(t, e) {
    this.platform != null && console.warn("Platform " + this.platformName + " has already been set. Overwriting the platform with " + e + "."), this.platformName = t, this.platform = e;
  }, r.prototype.registerFlag = function(t, e, n) {
    if (this.flagRegistry[t] = { evaluationFn: e, setHook: n }, this.urlFlags[t] != null) {
      var o = this.urlFlags[t];
      console.warn("Setting feature override from URL " + t + ": " + o + "."), this.set(t, o);
    }
  }, r.prototype.get = function(t) {
    return t in this.flags ? this.flags[t] : (this.flags[t] = this.evaluateFlag(t), this.flags[t]);
  }, r.prototype.getNumber = function(t) {
    return this.get(t);
  }, r.prototype.getBool = function(t) {
    return this.get(t);
  }, r.prototype.getFlags = function() {
    return this.flags;
  }, Object.defineProperty(r.prototype, "features", { get: function() {
    return this.flags;
  }, enumerable: !0, configurable: !0 }), r.prototype.set = function(t, e) {
    if (this.flagRegistry[t] == null) throw new Error("Cannot set flag " + t + " as it has not been registered.");
    this.flags[t] = e, this.flagRegistry[t].setHook != null && this.flagRegistry[t].setHook(e);
  }, r.prototype.evaluateFlag = function(t) {
    if (this.flagRegistry[t] == null) throw new Error("Cannot evaluate flag '" + t + "': no evaluation function found.");
    return this.flagRegistry[t].evaluationFn();
  }, r.prototype.setFlags = function(t) {
    this.flags = Object.assign({}, t);
  }, r.prototype.reset = function() {
    this.flags = {}, this.urlFlags = {}, this.populateURLFlags();
  }, r.prototype.populateURLFlags = function() {
    var t = this;
    if (this.global !== void 0 && this.global.location !== void 0 && this.global.location.search !== void 0) {
      var e, n, o = (e = this.global.location.search, n = {}, e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, function(a) {
        for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
        return wf(n, i[0], i[1]), i.join("=");
      }), n);
      "tfjsflags" in o && o.tfjsflags.split(",").forEach(function(a) {
        var i = a.split(":"), s = i[0], u = i[1];
        t.urlFlags[s] = function(c, l) {
          if ((l = l.toLowerCase()) === "true" || l === "false") return l === "true";
          if ("" + +l === l) return +l;
          throw new Error("Could not parse value flag value " + l + " for flag " + c + ".");
        }(s, u);
      });
    }
  }, r;
}();
function wf(r, t, e) {
  r[decodeURIComponent(t)] = decodeURIComponent(e || "");
}
function M() {
  return Iu;
}
var Iu = null, Zr = /* @__PURE__ */ new Map(), ka = /* @__PURE__ */ new Map();
function ku(r, t) {
  var e = Du(r, t);
  return Zr.get(e);
}
function Cf(r) {
  return ka.get(r);
}
function hs(r) {
  for (var t = Zr.entries(), e = []; ; ) {
    var n = t.next(), o = n.done, a = n.value;
    if (o) break;
    var i = a[0], s = a[1];
    i.split("_")[0] === r && e.push(s);
  }
  return e;
}
function Au(r) {
  var t = r.kernelName, e = r.backendName, n = Du(t, e);
  if (Zr.has(n)) throw new Error("The kernel '" + t + "' for backend '" + e + "' is already registered");
  Zr.set(n, r);
}
function Ef(r) {
  var t = r.kernelName;
  ka.has(t) && console.warn("Overriding the gradient for '" + t + "'"), ka.set(t, r);
}
function Du(r, t) {
  return t + "_" + r;
}
function Aa(r, t, e) {
  return Math.max(r, Math.min(t, e));
}
function Tu(r) {
  return r % 2 == 0 ? r : r + 1;
}
function _f(r) {
  for (var t = 0, e = 0; e < r.length; e++) t += r[e];
  return t;
}
function _(r, t) {
  if (!r) throw new Error(typeof t == "string" ? t : t());
}
function xe(r, t, e) {
  e === void 0 && (e = ""), _(Ve(r, t), function() {
    return e + " Shapes " + r + " and " + t + " must match";
  });
}
function tr(r) {
  _(r != null, function() {
    return "The input to the tensor constructor must be a non-null value.";
  });
}
function Jn(r, t, e) {
  if (t === void 0 && (t = []), e === void 0 && (e = !1), t == null && (t = []), Array.isArray(r) || Ot(r) && !e) for (var n = 0; n < r.length; ++n) Jn(r[n], t, e);
  else t.push(r);
  return t;
}
function J(r) {
  if (r.length === 0) return 1;
  for (var t = r[0], e = 1; e < r.length; e++) t *= r[e];
  return t;
}
function Ve(r, t) {
  if (r === t) return !0;
  if (r == null || t == null || r.length !== t.length) return !1;
  for (var e = 0; e < r.length; e++) if (r[e] !== t[e]) return !1;
  return !0;
}
function Ne(r) {
  return r % 1 == 0;
}
function Rf(r) {
  if (Math.tanh != null) return Math.tanh(r);
  if (r === 1 / 0) return 1;
  if (r === -1 / 0) return -1;
  var t = Math.exp(2 * r);
  return (t - 1) / (t + 1);
}
function Da(r) {
  var t = Math.ceil(Math.sqrt(r));
  return [t, Math.ceil(r / t)];
}
function Hn(r, t) {
  return t <= r.length ? r : r + " ".repeat(t - r.length);
}
function ps(r, t, e) {
  return t === void 0 && (t = function(n) {
    return 0;
  }), new Promise(function(n, o) {
    var a = 0, i = function() {
      if (r()) n();
      else {
        a++;
        var s = t(a);
        e != null && a >= e ? o() : setTimeout(i, s);
      }
    };
    i();
  });
}
function Sf(r, t) {
  for (var e = 1, n = -1, o = 0; o < r.length; ++o) if (r[o] >= 0) e *= r[o];
  else if (r[o] === -1) {
    if (n !== -1) throw Error("Shapes can only have 1 implicit size. Found -1 at dim " + n + " and dim " + o);
    n = o;
  } else if (r[o] < 0) throw Error("Shapes can not be < 0. Found " + r[o] + " at dim " + o);
  if (n === -1) {
    if (t > 0 && t !== e) throw Error("Size(" + t + ") must match the product of shape " + r);
    return r;
  }
  if (e === 0) throw Error("Cannot infer the missing size in [" + r + "] when there are 0 elements");
  if (t % e != 0) throw Error("The implicit shape can't be a fractional number. Got " + t + " / " + e);
  var a = r.slice();
  return a[n] = t / e, a;
}
function Ue(r, t) {
  var e = t.length;
  return _((r = r == null ? t.map(function(n, o) {
    return o;
  }) : [].concat(r)).every(function(n) {
    return n >= -e && n < e;
  }), function() {
    return "All values in axis param must be in range [-" + e + ", " + e + ") but got axis " + r;
  }), _(r.every(function(n) {
    return Ne(n);
  }), function() {
    return "All values in axis param must be integers but got axis " + r;
  }), r.map(function(n) {
    return n < 0 ? e + n : n;
  });
}
function yn(r, t) {
  for (var e = [], n = [], o = t != null && Array.isArray(t) && t.length === 0, a = t == null || o ? null : Ue(t, r).sort(), i = 0, s = 0; s < r.length; ++s) {
    if (a != null) {
      if (a[i] === s && r[s] !== 1) throw new Error("Can't squeeze axis " + s + " since its dim '" + r[s] + "' is not 1");
      (a[i] == null || a[i] > s) && r[s] === 1 && (e.push(r[s]), n.push(s)), a[i] <= s && i++;
    }
    r[s] !== 1 && (e.push(r[s]), n.push(s));
  }
  return { newShape: e, keptDims: n };
}
function pr(r, t) {
  var e = null;
  if (r == null || r === "float32") e = new Float32Array(t);
  else if (r === "int32") e = new Int32Array(t);
  else {
    if (r !== "bool") throw new Error("Unknown data type " + r);
    e = new Uint8Array(t);
  }
  return e;
}
function eo(r, t) {
  var e = null;
  if (r == null || r === "float32") e = new Float32Array(t);
  else if (r === "int32") e = new Int32Array(t);
  else if (r === "bool") e = new Uint8Array(t);
  else {
    if (r !== "string") throw new Error("Unknown data type " + r);
    e = new Array(t);
  }
  return e;
}
function If(r, t) {
  for (var e = 0; e < r.length; e++) {
    var n = r[e];
    if (isNaN(n) || !isFinite(n)) throw Error("A tensor of type " + t + " being uploaded contains " + n + ".");
  }
}
function kf(r) {
  return r === "bool" || r === "complex64" || r === "float32" || r === "int32" || r === "string";
}
function Af(r, t) {
  return t !== "complex64" && (t !== "float32" || r === "complex64") && (t !== "int32" || r === "float32" || r === "complex64") && (t !== "bool" || r !== "bool");
}
function Ot(r) {
  return r instanceof Float32Array || r instanceof Int32Array || r instanceof Uint8Array;
}
function Nu(r) {
  if (r === "float32" || r === "int32") return 4;
  if (r === "complex64") return 8;
  if (r === "bool") return 1;
  throw new Error("Unknown dtype " + r);
}
function Df(r) {
  if (r == null) return 0;
  var t = 0;
  return r.forEach(function(e) {
    return t += e.length;
  }), t;
}
function ri(r) {
  return typeof r == "string" || r instanceof String;
}
function Tf(r) {
  return typeof r == "boolean";
}
function Nf(r) {
  return typeof r == "number";
}
function wr(r) {
  return Array.isArray(r) ? wr(r[0]) : r instanceof Float32Array ? "float32" : r instanceof Int32Array || r instanceof Uint8Array ? "int32" : Nf(r) ? "float32" : ri(r) ? "string" : Tf(r) ? "bool" : "float32";
}
function Ta(r) {
  return !!(r && r.constructor && r.call && r.apply);
}
function Na(r, t) {
  for (var e = t; e < r; ++e) if (r % e == 0) return e;
  return r;
}
function Mt(r) {
  var t = r.length;
  if (t < 2) return [];
  var e = new Array(t - 1);
  e[t - 2] = r[t - 1];
  for (var n = t - 3; n >= 0; --n) e[n] = e[n + 1] * r[n + 1];
  return e;
}
function Fu(r, t, e) {
  if (t === "string") throw new Error("Cannot convert a string[] to a TypedArray");
  if (Array.isArray(r) && (r = Jn(r)), e && If(r, t), function(a, i) {
    return a instanceof Float32Array && i === "float32" || a instanceof Int32Array && i === "int32" || a instanceof Uint8Array && i === "bool";
  }(r, t)) return r;
  if (t == null || t === "float32" || t === "complex64") return new Float32Array(r);
  if (t === "int32") return new Int32Array(r);
  if (t === "bool") {
    for (var n = new Uint8Array(r.length), o = 0; o < n.length; ++o) Math.round(r[o]) !== 0 && (n[o] = 1);
    return n;
  }
  throw new Error("Unknown data type " + t);
}
function ds(r, t) {
  if (r.length === 0) return t[0];
  var e = r.reduce(function(n, o) {
    return n * o;
  });
  if (e === 0) return [];
  if (e !== t.length) throw new Error("[" + r + "] does not match the input size.");
  return function n(o, a, i) {
    var s = new Array();
    if (a.length === 1) for (var u = a[0], c = 0; c < u; c++) s[c] = i[o + c];
    else {
      u = a[0];
      var l = a.slice(1), f = l.reduce(function(h, p) {
        return h * p;
      });
      for (c = 0; c < u; c++) s[c] = n(o + c * f, l, i);
    }
    return s;
  }(0, r, t);
}
function Pu(r, t) {
  for (var e = Cr(r, t), n = 0; n < e.length; n++) e[n] = 1;
  return e;
}
function Cr(r, t) {
  if (t == null || t === "float32" || t === "complex64") return new Float32Array(r);
  if (t === "int32") return new Int32Array(r);
  if (t === "bool") return new Uint8Array(r);
  throw new Error("Unknown data type " + t);
}
function Tt() {
  return M().platform.now();
}
function Ou(r) {
  r.forEach(function(t) {
    _(Number.isInteger(t) && t >= 0, function() {
      return "Tensor must have a shape comprised of positive integers but got shape [" + r + "].";
    });
  });
}
function Ff(r, t) {
  return t === void 0 && (t = "utf-8"), t = t || "utf-8", M().platform.encode(r, t);
}
function to(r, t) {
  return t === void 0 && (t = "utf-8"), t = t || "utf-8", M().platform.decode(r, t);
}
function vs(r, t, e) {
  if (t === 0) return 0;
  if (t === 1) return r[0];
  for (var n = r[r.length - 1], o = 0; o < r.length - 1; ++o) n += e[o] * r[o];
  return n;
}
function Pf(r, t, e) {
  if (t === 0) return [];
  if (t === 1) return [r];
  for (var n = new Array(t), o = 0; o < n.length - 1; ++o) n[o] = Math.floor(r / e[o]), r -= n[o] * e[o];
  return n[n.length - 1] = r, n;
}
var Of = function() {
  function r(t, e) {
    this.backendTimer = t, this.logger = e, e == null && (this.logger = new Mf());
  }
  return r.prototype.profileKernel = function(t, e, n) {
    var o, a = this, i = this.backendTimer.time(function() {
      o = n();
    });
    return o.forEach(function(s) {
      s.data().then(function(u) {
        (function(c, l, f) {
          if (l !== "float32") return !1;
          for (var h = 0; h < c.length; h++) {
            var p = c[h];
            if (isNaN(p) || !isFinite(p)) return console.warn("Found " + p + " in the result of '" + f + "'"), !0;
          }
        })(u, s.dtype, t), i.then(function(c) {
          var l = "";
          c.getExtraProfileInfo != null && (l = c.getExtraProfileInfo()), a.logger.logKernelProfile(t, s, u, c.kernelMs, e, l);
        });
      });
    }), o;
  }, r;
}(), Mf = function() {
  function r() {
  }
  return r.prototype.logKernelProfile = function(t, e, n, o, a, i) {
    var s = typeof o == "number" ? Hn(o + "ms", 9) : o.error, u = Hn(t, 25), c = e.rank, l = e.size, f = Hn(e.shape.toString(), 14), h = "";
    for (var p in a) {
      var d = a[p].shape || e.shape, m = d.length;
      h += p + ": " + m + "D " + (m > 0 ? d : "") + " ";
    }
    console.log("%c" + u + "	%c" + s + "	%c" + c + "D " + f + "	%c" + l + "	%c" + h + "	%c" + i, "font-weight:bold", "color:red", "color:blue", "color: orange", "color: green", "color: steelblue");
  }, r;
}(), ms = 20, ar = 3, Qo = 7;
function Bf(r, t, e, n) {
  var o = Mt(t), a = function(c, l, f, h) {
    var p = J(l), d = h[h.length - 1], m = new Array(d).fill(0), v = l.length, g = f === "complex64" ? sr(c) : c;
    if (v > 1) for (var y = 0; y < p / d; y++) for (var x = y * d, b = 0; b < d; b++) m[b] = Math.max(m[b], ir(g[x + b], 0, f).length);
    return m;
  }(r, t, e, o), i = t.length, s = function c(l, f, h, p, d, m) {
    m === void 0 && (m = !0);
    var v = h === "complex64" ? 2 : 1, g = f[0], y = f.length;
    if (y === 0)
      return h === "complex64" ? [ir(sr(l)[0], 0, h)] : h === "bool" ? [Mu(l[0])] : [l[0].toString()];
    if (y === 1) {
      if (g > ms) {
        var x = ar * v, b = Array.from(l.slice(0, x)), w = Array.from(l.slice((g - ar) * v, g * v));
        return h === "complex64" && (b = sr(b), w = sr(w)), ["[" + b.map(function(L, V) {
          return ir(L, d[V], h);
        }).join(", ") + ", ..., " + w.map(function(L, V) {
          return ir(L, d[g - ar + V], h);
        }).join(", ") + "]"];
      }
      return ["[" + (h === "complex64" ? sr(l) : Array.from(l)).map(function(L, V) {
        return ir(L, d[V], h);
      }).join(", ") + "]"];
    }
    var C = f.slice(1), k = p.slice(1), I = p[0] * v, R = [];
    if (g > ms) {
      for (var S = 0; S < ar; S++) {
        var N = (D = S * I) + I;
        R.push.apply(R, c(l.slice(D, N), C, h, k, d, !1));
      }
      for (R.push("..."), S = g - ar; S < g; S++)
        N = (D = S * I) + I, R.push.apply(R, c(l.slice(D, N), C, h, k, d, S === g - 1));
    } else for (S = 0; S < g; S++) {
      var D;
      N = (D = S * I) + I, R.push.apply(R, c(l.slice(D, N), C, h, k, d, S === g - 1));
    }
    var W = y === 2 ? "," : "";
    for (R[0] = "[" + R[0] + W, S = 1; S < R.length - 1; S++) R[S] = " " + R[S] + W;
    var B = `,
`;
    for (S = 2; S < y; S++) B += `
`;
    return R[R.length - 1] = " " + R[R.length - 1] + "]" + (m ? "" : B), R;
  }(r, t, e, o, a), u = ["Tensor"];
  return n && (u.push("  dtype: " + e), u.push("  rank: " + i), u.push("  shape: [" + t + "]"), u.push("  values:")), u.push(s.map(function(c) {
    return "    " + c;
  }).join(`
`)), u.join(`
`);
}
function ir(r, t, e) {
  return Hn(Array.isArray(r) ? parseFloat(r[0].toFixed(Qo)) + " + " + parseFloat(r[1].toFixed(Qo)) + "j" : ri(r) ? "'" + r + "'" : e === "bool" ? Mu(r) : parseFloat(r.toFixed(Qo)).toString(), t);
}
function Mu(r) {
  return r === 0 ? "false" : "true";
}
function sr(r) {
  for (var t = [], e = 0; e < r.length; e += 2) t.push([r[e], r[e + 1]]);
  return t;
}
var dr = function() {
  function r(t, e, n) {
    var o = this;
    if (this.dtype = e, this.shape = t.slice(), this.size = J(t), n != null) {
      var a = n.length;
      _(a === this.size, function() {
        return "Length of values '" + a + "' does not match the size inferred by the shape '" + o.size + "'.";
      });
    }
    if (e === "complex64") throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");
    this.values = n || eo(e, this.size), this.strides = Mt(t);
  }
  return r.prototype.set = function(t) {
    for (var e = this, n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
    n.length === 0 && (n = [0]), _(n.length === this.rank, function() {
      return "The number of provided coordinates (" + n.length + ") must match the rank (" + e.rank + ")";
    });
    var a = this.locToIndex(n);
    this.values[a] = t;
  }, r.prototype.get = function() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    t.length === 0 && (t = [0]);
    for (var n = 0, o = 0, a = t; o < a.length; o++) {
      var i = a[o];
      if (i < 0 || i >= this.shape[n]) {
        var s = "Requested out of range element at " + t + ".   Buffer shape=" + this.shape;
        throw new Error(s);
      }
      n++;
    }
    for (var u = t[t.length - 1], c = 0; c < t.length - 1; ++c) u += this.strides[c] * t[c];
    return this.values[u];
  }, r.prototype.locToIndex = function(t) {
    if (this.rank === 0) return 0;
    if (this.rank === 1) return t[0];
    for (var e = t[t.length - 1], n = 0; n < t.length - 1; ++n) e += this.strides[n] * t[n];
    return e;
  }, r.prototype.indexToLoc = function(t) {
    if (this.rank === 0) return [];
    if (this.rank === 1) return [t];
    for (var e = new Array(this.shape.length), n = 0; n < e.length - 1; ++n) e[n] = Math.floor(t / this.strides[n]), t -= e[n] * this.strides[n];
    return e[e.length - 1] = t, e;
  }, Object.defineProperty(r.prototype, "rank", { get: function() {
    return this.shape.length;
  }, enumerable: !0, configurable: !0 }), r.prototype.toTensor = function() {
    return Nt().makeTensor(this.values, this.shape, this.dtype);
  }, r;
}(), Nt = null, P = null, Bu = null, Se = function() {
  function r(t, e, n, o) {
    this.kept = !1, this.isDisposedInternal = !1, this.shape = t.slice(), this.dtype = e || "float32", this.size = J(t), this.strides = Mt(t), this.dataId = n, this.id = o, this.rankType = this.rank < 5 ? this.rank.toString() : "higher";
  }
  return r.prototype.flatten = function() {
    return this.throwIfDisposed(), this.as1D();
  }, r.prototype.asScalar = function() {
    return this.throwIfDisposed(), _(this.size === 1, function() {
      return "The array must have only 1 element.";
    }), this.reshape([]);
  }, r.prototype.as1D = function() {
    return this.throwIfDisposed(), this.reshape([this.size]);
  }, r.prototype.as2D = function(t, e) {
    return this.throwIfDisposed(), this.reshape([t, e]);
  }, r.prototype.as3D = function(t, e, n) {
    return this.throwIfDisposed(), this.reshape([t, e, n]);
  }, r.prototype.as4D = function(t, e, n, o) {
    return this.throwIfDisposed(), this.reshape([t, e, n, o]);
  }, r.prototype.as5D = function(t, e, n, o, a) {
    return this.throwIfDisposed(), this.reshape([t, e, n, o, a]);
  }, r.prototype.asType = function(t) {
    return this.throwIfDisposed(), P.cast(this, t);
  }, Object.defineProperty(r.prototype, "rank", { get: function() {
    return this.shape.length;
  }, enumerable: !0, configurable: !0 }), r.prototype.buffer = function() {
    return $(this, void 0, void 0, function() {
      var t;
      return Y(this, function(e) {
        switch (e.label) {
          case 0:
            return [4, this.data()];
          case 1:
            return t = e.sent(), [2, P.buffer(this.shape, this.dtype, t)];
        }
      });
    });
  }, r.prototype.bufferSync = function() {
    return P.buffer(this.shape, this.dtype, this.dataSync());
  }, r.prototype.array = function() {
    return $(this, void 0, void 0, function() {
      var t;
      return Y(this, function(e) {
        switch (e.label) {
          case 0:
            return [4, this.data()];
          case 1:
            return t = e.sent(), [2, ds(this.shape, t)];
        }
      });
    });
  }, r.prototype.arraySync = function() {
    return ds(this.shape, this.dataSync());
  }, r.prototype.data = function() {
    return $(this, void 0, void 0, function() {
      var t, e;
      return Y(this, function(n) {
        switch (n.label) {
          case 0:
            return this.throwIfDisposed(), t = Nt().read(this.dataId), this.dtype !== "string" ? [3, 2] : [4, t];
          case 1:
            e = n.sent();
            try {
              return [2, e.map(function(o) {
                return to(o);
              })];
            } catch {
              throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().");
            }
            n.label = 2;
          case 2:
            return [2, t];
        }
      });
    });
  }, r.prototype.dataSync = function() {
    this.throwIfDisposed();
    var t = Nt().readSync(this.dataId);
    if (this.dtype === "string") try {
      return t.map(function(e) {
        return to(e);
      });
    } catch {
      throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().");
    }
    return t;
  }, r.prototype.bytes = function() {
    return $(this, void 0, void 0, function() {
      var t;
      return Y(this, function(e) {
        switch (e.label) {
          case 0:
            return this.throwIfDisposed(), [4, Nt().read(this.dataId)];
          case 1:
            return t = e.sent(), this.dtype === "string" ? [2, t] : [2, new Uint8Array(t.buffer)];
        }
      });
    });
  }, r.prototype.dispose = function() {
    this.isDisposed || (Nt().disposeTensor(this), this.isDisposedInternal = !0);
  }, Object.defineProperty(r.prototype, "isDisposed", { get: function() {
    return this.isDisposedInternal;
  }, enumerable: !0, configurable: !0 }), r.prototype.throwIfDisposed = function() {
    if (this.isDisposed) throw new Error("Tensor is disposed.");
  }, r.prototype.toFloat = function() {
    return this.asType("float32");
  }, r.prototype.toInt = function() {
    return this.asType("int32");
  }, r.prototype.toBool = function() {
    return this.asType("bool");
  }, r.prototype.print = function(t) {
    return t === void 0 && (t = !1), P.print(this, t);
  }, r.prototype.reshape = function(t) {
    return this.throwIfDisposed(), P.reshape(this, t);
  }, r.prototype.reshapeAs = function(t) {
    return this.throwIfDisposed(), this.reshape(t.shape);
  }, r.prototype.expandDims = function(t) {
    return t === void 0 && (t = 0), P.expandDims(this, t);
  }, r.prototype.cumsum = function(t, e, n) {
    return t === void 0 && (t = 0), e === void 0 && (e = !1), n === void 0 && (n = !1), P.cumsum(this, t, e, n);
  }, r.prototype.squeeze = function(t) {
    return this.throwIfDisposed(), P.squeeze(this, t);
  }, r.prototype.clone = function() {
    return this.throwIfDisposed(), P.clone(this);
  }, r.prototype.oneHot = function(t, e, n) {
    return this.throwIfDisposed(), P.oneHot(this, t, e, n);
  }, r.prototype.toString = function(t) {
    return t === void 0 && (t = !1), Bf(this.dataSync(), this.shape, this.dtype, t);
  }, r.prototype.tile = function(t) {
    return this.throwIfDisposed(), P.tile(this, t);
  }, r.prototype.gather = function(t, e) {
    return e === void 0 && (e = 0), this.throwIfDisposed(), P.gather(this, t, e);
  }, r.prototype.matMul = function(t, e, n) {
    return e === void 0 && (e = !1), n === void 0 && (n = !1), this.throwIfDisposed(), P.matMul(this, t, e, n);
  }, r.prototype.dot = function(t) {
    return this.throwIfDisposed(), P.dot(this, t);
  }, r.prototype.norm = function(t, e, n) {
    return t === void 0 && (t = "euclidean"), e === void 0 && (e = null), n === void 0 && (n = !1), this.throwIfDisposed(), P.norm(this, t, e, n);
  }, r.prototype.slice = function(t, e) {
    return this.throwIfDisposed(), P.slice(this, t, e);
  }, r.prototype.reverse = function(t) {
    return this.throwIfDisposed(), P.reverse(this, t);
  }, r.prototype.concat = function(t, e) {
    return e === void 0 && (e = 0), this.throwIfDisposed(), t instanceof r && (t = [t]), P.concat([this].concat(t), e);
  }, r.prototype.split = function(t, e) {
    return e === void 0 && (e = 0), this.throwIfDisposed(), P.split(this, t, e);
  }, r.prototype.stack = function(t, e) {
    return e === void 0 && (e = 0), P.stack([this, t], e);
  }, r.prototype.unstack = function(t) {
    return t === void 0 && (t = 0), P.unstack(this, t);
  }, r.prototype.pad = function(t, e) {
    return e === void 0 && (e = 0), P.pad(this, t, e);
  }, r.prototype.batchNormalization = function(t, e, n, o, a) {
    return n === void 0 && (n = 1e-3), Bu("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"), this.batchNorm(t, e, a, o, n);
  }, r.prototype.batchNorm = function(t, e, n, o, a) {
    return a === void 0 && (a = 1e-3), this.throwIfDisposed(), P.batchNorm(this, t, e, n, o, a);
  }, r.prototype.all = function(t, e) {
    return t === void 0 && (t = null), e === void 0 && (e = !1), this.throwIfDisposed(), P.all(this, t, e);
  }, r.prototype.any = function(t, e) {
    return t === void 0 && (t = null), e === void 0 && (e = !1), this.throwIfDisposed(), P.any(this, t, e);
  }, r.prototype.logSumExp = function(t, e) {
    return t === void 0 && (t = null), e === void 0 && (e = !1), this.throwIfDisposed(), P.logSumExp(this, t, e);
  }, r.prototype.sum = function(t, e) {
    return t === void 0 && (t = null), e === void 0 && (e = !1), this.throwIfDisposed(), P.sum(this, t, e);
  }, r.prototype.prod = function(t, e) {
    return t === void 0 && (t = null), e === void 0 && (e = !1), this.throwIfDisposed(), P.prod(this, t, e);
  }, r.prototype.mean = function(t, e) {
    return t === void 0 && (t = null), e === void 0 && (e = !1), this.throwIfDisposed(), P.mean(this, t, e);
  }, r.prototype.min = function(t, e) {
    return t === void 0 && (t = null), e === void 0 && (e = !1), this.throwIfDisposed(), P.min(this, t, e);
  }, r.prototype.max = function(t, e) {
    return t === void 0 && (t = null), e === void 0 && (e = !1), this.throwIfDisposed(), P.max(this, t, e);
  }, r.prototype.argMin = function(t) {
    return t === void 0 && (t = null), this.throwIfDisposed(), P.argMin(this, t);
  }, r.prototype.argMax = function(t) {
    return t === void 0 && (t = null), this.throwIfDisposed(), P.argMax(this, t);
  }, r.prototype.cast = function(t) {
    return this.throwIfDisposed(), P.cast(this, t);
  }, r.prototype.add = function(t) {
    return this.throwIfDisposed(), P.add(this, t);
  }, r.prototype.addStrict = function(t) {
    return this.throwIfDisposed(), P.addStrict(this, t);
  }, r.prototype.atan2 = function(t) {
    return this.throwIfDisposed(), P.atan2(this, t);
  }, r.prototype.sub = function(t) {
    return this.throwIfDisposed(), P.sub(this, t);
  }, r.prototype.subStrict = function(t) {
    return this.throwIfDisposed(), P.subStrict(this, t);
  }, r.prototype.pow = function(t) {
    return this.throwIfDisposed(), P.pow(this, t);
  }, r.prototype.powStrict = function(t) {
    return this.throwIfDisposed(), P.powStrict(this, t);
  }, r.prototype.mul = function(t) {
    return this.throwIfDisposed(), P.mul(this, t);
  }, r.prototype.mulStrict = function(t) {
    return this.throwIfDisposed(), P.mulStrict(this, t);
  }, r.prototype.div = function(t) {
    return this.throwIfDisposed(), P.div(this, t);
  }, r.prototype.divNoNan = function(t) {
    return this.throwIfDisposed(), P.divNoNan(this, t);
  }, r.prototype.floorDiv = function(t) {
    return this.throwIfDisposed(), P.floorDiv(this, t);
  }, r.prototype.divStrict = function(t) {
    return this.throwIfDisposed(), P.divStrict(this, t);
  }, r.prototype.minimum = function(t) {
    return this.throwIfDisposed(), P.minimum(this, t);
  }, r.prototype.minimumStrict = function(t) {
    return this.throwIfDisposed(), P.minimumStrict(this, t);
  }, r.prototype.maximum = function(t) {
    return this.throwIfDisposed(), P.maximum(this, t);
  }, r.prototype.maximumStrict = function(t) {
    return this.throwIfDisposed(), P.maximumStrict(this, t);
  }, r.prototype.mod = function(t) {
    return this.throwIfDisposed(), P.mod(this, t);
  }, r.prototype.modStrict = function(t) {
    return this.throwIfDisposed(), P.modStrict(this, t);
  }, r.prototype.squaredDifferenceStrict = function(t) {
    return this.throwIfDisposed(), P.squaredDifferenceStrict(this, t);
  }, r.prototype.transpose = function(t) {
    return this.throwIfDisposed(), P.transpose(this, t);
  }, r.prototype.notEqual = function(t) {
    return this.throwIfDisposed(), P.notEqual(this, t);
  }, r.prototype.notEqualStrict = function(t) {
    return this.throwIfDisposed(), P.notEqualStrict(this, t);
  }, r.prototype.less = function(t) {
    return this.throwIfDisposed(), P.less(this, t);
  }, r.prototype.lessStrict = function(t) {
    return this.throwIfDisposed(), P.lessStrict(this, t);
  }, r.prototype.equal = function(t) {
    return this.throwIfDisposed(), P.equal(this, t);
  }, r.prototype.equalStrict = function(t) {
    return this.throwIfDisposed(), P.equalStrict(this, t);
  }, r.prototype.lessEqual = function(t) {
    return this.throwIfDisposed(), P.lessEqual(this, t);
  }, r.prototype.lessEqualStrict = function(t) {
    return this.throwIfDisposed(), P.lessEqualStrict(this, t);
  }, r.prototype.greater = function(t) {
    return this.throwIfDisposed(), P.greater(this, t);
  }, r.prototype.greaterStrict = function(t) {
    return this.throwIfDisposed(), P.greaterStrict(this, t);
  }, r.prototype.greaterEqual = function(t) {
    return this.throwIfDisposed(), P.greaterEqual(this, t);
  }, r.prototype.greaterEqualStrict = function(t) {
    return this.throwIfDisposed(), P.greaterEqualStrict(this, t);
  }, r.prototype.logicalAnd = function(t) {
    return this.throwIfDisposed(), P.logicalAnd(this, t);
  }, r.prototype.logicalOr = function(t) {
    return this.throwIfDisposed(), P.logicalOr(this, t);
  }, r.prototype.logicalNot = function() {
    return this.throwIfDisposed(), P.logicalNot(this);
  }, r.prototype.logicalXor = function(t) {
    return this.throwIfDisposed(), P.logicalXor(this, t);
  }, r.prototype.where = function(t, e) {
    return this.throwIfDisposed(), P.where(t, this, e);
  }, r.prototype.neg = function() {
    return this.throwIfDisposed(), P.neg(this);
  }, r.prototype.ceil = function() {
    return this.throwIfDisposed(), P.ceil(this);
  }, r.prototype.floor = function() {
    return this.throwIfDisposed(), P.floor(this);
  }, r.prototype.sign = function() {
    return this.throwIfDisposed(), P.sign(this);
  }, r.prototype.isNaN = function() {
    return this.throwIfDisposed(), P.isNaN(this);
  }, r.prototype.isInf = function() {
    return this.throwIfDisposed(), P.isInf(this);
  }, r.prototype.isFinite = function() {
    return this.throwIfDisposed(), P.isFinite(this);
  }, r.prototype.exp = function() {
    return this.throwIfDisposed(), P.exp(this);
  }, r.prototype.expm1 = function() {
    return this.throwIfDisposed(), P.expm1(this);
  }, r.prototype.log = function() {
    return this.throwIfDisposed(), P.log(this);
  }, r.prototype.log1p = function() {
    return this.throwIfDisposed(), P.log1p(this);
  }, r.prototype.sqrt = function() {
    return this.throwIfDisposed(), P.sqrt(this);
  }, r.prototype.rsqrt = function() {
    return this.throwIfDisposed(), P.rsqrt(this);
  }, r.prototype.square = function() {
    return this.throwIfDisposed(), P.square(this);
  }, r.prototype.reciprocal = function() {
    return this.throwIfDisposed(), P.reciprocal(this);
  }, r.prototype.abs = function() {
    return this.throwIfDisposed(), P.abs(this);
  }, r.prototype.clipByValue = function(t, e) {
    return this.throwIfDisposed(), P.clipByValue(this, t, e);
  }, r.prototype.relu = function() {
    return this.throwIfDisposed(), P.relu(this);
  }, r.prototype.relu6 = function() {
    return this.throwIfDisposed(), P.relu6(this);
  }, r.prototype.elu = function() {
    return this.throwIfDisposed(), P.elu(this);
  }, r.prototype.selu = function() {
    return this.throwIfDisposed(), P.selu(this);
  }, r.prototype.leakyRelu = function(t) {
    return t === void 0 && (t = 0.2), this.throwIfDisposed(), P.leakyRelu(this, t);
  }, r.prototype.prelu = function(t) {
    return this.throwIfDisposed(), P.prelu(this, t);
  }, r.prototype.sigmoid = function() {
    return this.throwIfDisposed(), P.sigmoid(this);
  }, r.prototype.logSigmoid = function() {
    return this.throwIfDisposed(), P.logSigmoid(this);
  }, r.prototype.softplus = function() {
    return this.throwIfDisposed(), P.softplus(this);
  }, r.prototype.zerosLike = function() {
    return this.throwIfDisposed(), P.zerosLike(this);
  }, r.prototype.onesLike = function() {
    return this.throwIfDisposed(), P.onesLike(this);
  }, r.prototype.sin = function() {
    return this.throwIfDisposed(), P.sin(this);
  }, r.prototype.cos = function() {
    return this.throwIfDisposed(), P.cos(this);
  }, r.prototype.tan = function() {
    return this.throwIfDisposed(), P.tan(this);
  }, r.prototype.asin = function() {
    return this.throwIfDisposed(), P.asin(this);
  }, r.prototype.acos = function() {
    return this.throwIfDisposed(), P.acos(this);
  }, r.prototype.atan = function() {
    return this.throwIfDisposed(), P.atan(this);
  }, r.prototype.sinh = function() {
    return this.throwIfDisposed(), P.sinh(this);
  }, r.prototype.cosh = function() {
    return this.throwIfDisposed(), P.cosh(this);
  }, r.prototype.tanh = function() {
    return this.throwIfDisposed(), P.tanh(this);
  }, r.prototype.asinh = function() {
    return this.throwIfDisposed(), P.asinh(this);
  }, r.prototype.acosh = function() {
    return this.throwIfDisposed(), P.acosh(this);
  }, r.prototype.atanh = function() {
    return this.throwIfDisposed(), P.atanh(this);
  }, r.prototype.erf = function() {
    return this.throwIfDisposed(), P.erf(this);
  }, r.prototype.round = function() {
    return this.throwIfDisposed(), P.round(this);
  }, r.prototype.step = function(t) {
    return t === void 0 && (t = 0), this.throwIfDisposed(), P.step(this, t);
  }, r.prototype.softmax = function(t) {
    return t === void 0 && (t = -1), this.throwIfDisposed(), P.softmax(this, t);
  }, r.prototype.logSoftmax = function(t) {
    return t === void 0 && (t = -1), this.throwIfDisposed(), P.logSoftmax(this, t);
  }, r.prototype.resizeBilinear = function(t, e) {
    return e === void 0 && (e = !1), this.throwIfDisposed(), P.image.resizeBilinear(this, t, e);
  }, r.prototype.resizeNearestNeighbor = function(t, e) {
    return e === void 0 && (e = !1), this.throwIfDisposed(), P.image.resizeNearestNeighbor(this, t, e);
  }, r.prototype.conv1d = function(t, e, n, o, a, i) {
    return o === void 0 && (o = "NWC"), a === void 0 && (a = 1), this.throwIfDisposed(), P.conv1d(this, t, e, n, o, a, i);
  }, r.prototype.conv2d = function(t, e, n, o, a, i) {
    return o === void 0 && (o = "NHWC"), a === void 0 && (a = [1, 1]), this.throwIfDisposed(), P.conv2d(this, t, e, n, o, a, i);
  }, r.prototype.conv2dTranspose = function(t, e, n, o, a) {
    return this.throwIfDisposed(), P.conv2dTranspose(this, t, e, n, o, a);
  }, r.prototype.depthwiseConv2D = function(t, e, n, o, a, i) {
    return o === void 0 && (o = "NHWC"), a === void 0 && (a = [1, 1]), this.throwIfDisposed(), P.depthwiseConv2d(this, t, e, n, o, a, i);
  }, r.prototype.separableConv2d = function(t, e, n, o, a, i) {
    return a === void 0 && (a = [1, 1]), i === void 0 && (i = "NHWC"), this.throwIfDisposed(), P.separableConv2d(this, t, e, n, o, a, i);
  }, r.prototype.avgPool = function(t, e, n, o) {
    return this.throwIfDisposed(), P.avgPool(this, t, e, n, o);
  }, r.prototype.maxPool = function(t, e, n, o) {
    return this.throwIfDisposed(), P.maxPool(this, t, e, n, o);
  }, r.prototype.localResponseNormalization = function(t, e, n, o) {
    return t === void 0 && (t = 5), e === void 0 && (e = 1), n === void 0 && (n = 1), o === void 0 && (o = 0.5), P.localResponseNormalization(this, t, e, n, o);
  }, r.prototype.pool = function(t, e, n, o, a) {
    return this.throwIfDisposed(), P.pool(this, t, e, n, o, a);
  }, r.prototype.variable = function(t, e, n) {
    return t === void 0 && (t = !0), this.throwIfDisposed(), Nt().makeVariable(this, t, e, n);
  }, r.prototype.unsortedSegmentSum = function(t, e) {
    return this.throwIfDisposed(), P.unsortedSegmentSum(this, t, e);
  }, r.prototype.batchToSpaceND = function(t, e) {
    return this.throwIfDisposed(), P.batchToSpaceND(this, t, e);
  }, r.prototype.spaceToBatchND = function(t, e) {
    return this.throwIfDisposed(), P.spaceToBatchND(this, t, e);
  }, r.prototype.topk = function(t, e) {
    return t === void 0 && (t = 1), e === void 0 && (e = !0), this.throwIfDisposed(), P.topk(this, t, e);
  }, r.prototype.stridedSlice = function(t, e, n, o, a, i, s, u) {
    return o === void 0 && (o = 0), a === void 0 && (a = 0), i === void 0 && (i = 0), s === void 0 && (s = 0), u === void 0 && (u = 0), this.throwIfDisposed(), P.stridedSlice(this, t, e, n, o, a, i, s, u);
  }, r.prototype.depthToSpace = function(t, e) {
    return this.throwIfDisposed(), P.depthToSpace(this, t, e);
  }, r.prototype.fft = function() {
    return this.throwIfDisposed(), P.spectral.fft(this);
  }, r.prototype.ifft = function() {
    return this.throwIfDisposed(), P.spectral.ifft(this);
  }, r.prototype.rfft = function() {
    return this.throwIfDisposed(), P.spectral.rfft(this);
  }, r.prototype.irfft = function() {
    return this.throwIfDisposed(), P.spectral.irfft(this);
  }, r;
}();
Object.defineProperty(Se, Symbol.hasInstance, { value: function(r) {
  return !!r && r.dataId != null && r.shape != null && r.dtype != null;
} });
var gs, Fa, Pa, Oa, Ma, Qn = function(r) {
  function t(e, n, o, a) {
    var i = r.call(this, e.shape, e.dtype, e.dataId, a) || this;
    return i.trainable = n, i.name = o, i;
  }
  return Ct(t, r), t.prototype.assign = function(e) {
    if (e.dtype !== this.dtype) throw new Error("dtype of the new value (" + e.dtype + ") and previous value (" + this.dtype + ") must match");
    if (!Ve(e.shape, this.shape)) throw new Error("shape of the new value (" + e.shape + ") and previous value (" + this.shape + ") must match");
    Nt().disposeTensor(this), this.dataId = e.dataId, Nt().incRef(this, null);
  }, t.prototype.dispose = function() {
    Nt().disposeVariable(this), this.isDisposedInternal = !0;
  }, t;
}(Se);
Object.defineProperty(Qn, Symbol.hasInstance, { value: function(r) {
  return r instanceof Se && r.assign != null && r.assign instanceof Function;
} }), function(r) {
  r.R0 = "R0", r.R1 = "R1", r.R2 = "R2", r.R3 = "R3", r.R4 = "R4", r.R5 = "R5", r.R6 = "R6";
}(gs || (gs = {})), function(r) {
  r.float32 = "float32", r.int32 = "int32", r.bool = "int32", r.complex64 = "complex64";
}(Fa || (Fa = {})), function(r) {
  r.float32 = "float32", r.int32 = "int32", r.bool = "bool", r.complex64 = "complex64";
}(Pa || (Pa = {})), function(r) {
  r.float32 = "float32", r.int32 = "float32", r.bool = "float32", r.complex64 = "complex64";
}(Oa || (Oa = {})), function(r) {
  r.float32 = "complex64", r.int32 = "complex64", r.bool = "complex64", r.complex64 = "complex64";
}(Ma || (Ma = {}));
var Lf = { float32: Oa, int32: Fa, bool: Pa, complex64: Ma };
function qe(r, t) {
  if (r === "string" || t === "string") {
    if (r === "string" && t === "string") return "string";
    throw new Error("Can not upcast " + r + " with " + t);
  }
  return Lf[r][t];
}
function Zo(r) {
  return qe(r, "int32");
}
function ke(r, t) {
  if (r.dtype === t.dtype) return [r, t];
  var e = qe(r.dtype, t.dtype);
  return [r.cast(e), t.cast(e)];
}
function Wf(r, t) {
  _(r.dtype === t.dtype, function() {
    return "The dtypes of the first(" + r.dtype + ") and second(" + t.dtype + ") input must match";
  });
}
function Lu(r) {
  var t = [];
  return function e(n, o, a) {
    if (n != null) {
      if (n instanceof Se) return void o.push(n);
      if (i = n, !(!Array.isArray(i) && typeof i != "object")) {
        var i, s = n;
        for (var u in s) {
          var c = s[u];
          a.has(c) || (a.add(c), e(c, o, a));
        }
      }
    }
  }(r, t, /* @__PURE__ */ new Set()), t;
}
var ea, ys = function() {
  function r() {
    this.registeredVariables = {}, this.nextTapeNodeId = 0, this.numBytes = 0, this.numTensors = 0, this.numStringTensors = 0, this.numDataBuffers = 0, this.gradientDepth = 0, this.kernelDepth = 0, this.scopeStack = [], this.numDataMovesStack = [], this.nextScopeId = 0, this.tensorInfo = /* @__PURE__ */ new WeakMap(), this.profiling = !1, this.activeProfile = { newBytes: 0, newTensors: 0, peakBytes: 0, kernels: [], result: null };
  }
  return r.prototype.dispose = function() {
    for (var t in this.registeredVariables) this.registeredVariables[t].dispose();
  }, r;
}(), Uf = function() {
  function r(t) {
    this.ENV = t, this.registry = {}, this.registryFactory = {}, this.pendingBackendInitId = 0, this.state = new ys();
  }
  return r.prototype.ready = function() {
    return $(this, void 0, void 0, function() {
      var t, e, n;
      return Y(this, function(o) {
        switch (o.label) {
          case 0:
            if (this.pendingBackendInit != null) return [2, this.pendingBackendInit.then(function() {
            })];
            if (this.backendInstance != null) return [2];
            t = this.getSortedBackends(), e = 0, o.label = 1;
          case 1:
            return e < t.length ? (n = t[e], [4, this.initializeBackend(n).success]) : [3, 5];
          case 2:
            return o.sent() ? [4, this.setBackend(n)] : [3, 4];
          case 3:
            return o.sent(), [2];
          case 4:
            return e++, [3, 1];
          case 5:
            throw new Error("Could not initialize any backends, all backend initializations failed.");
        }
      });
    });
  }, Object.defineProperty(r.prototype, "backend", { get: function() {
    if (this.pendingBackendInit != null) throw new Error("Backend '" + this.backendName + "' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");
    if (this.backendInstance == null) {
      var t = this.initializeBackendsAndReturnBest(), e = t.name;
      if (t.asyncInit) throw new Error("The highest priority backend '" + e + "' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");
      this.setBackend(e);
    }
    return this.backendInstance;
  }, enumerable: !0, configurable: !0 }), r.prototype.backendNames = function() {
    return Object.keys(this.registryFactory);
  }, r.prototype.findBackend = function(t) {
    return !(t in this.registry) && (!(t in this.registryFactory) || this.initializeBackend(t).asyncInit) ? null : this.registry[t];
  }, r.prototype.findBackendFactory = function(t) {
    return t in this.registryFactory ? this.registryFactory[t].factory : null;
  }, r.prototype.registerBackend = function(t, e, n) {
    return n === void 0 && (n = 1), t in this.registryFactory ? (console.warn(t + " backend was already registered. Reusing existing backend factory."), !1) : (this.registryFactory[t] = { factory: e, priority: n }, !0);
  }, r.prototype.setBackend = function(t) {
    return $(this, void 0, void 0, function() {
      var e, n, o;
      return Y(this, function(a) {
        switch (a.label) {
          case 0:
            if (this.registryFactory[t] == null) throw new Error("Backend name '" + t + "' not found in registry");
            return this.backendName = t, this.registry[t] != null ? [3, 4] : (this.backendInstance = null, e = this.initializeBackend(t), n = e.success, e.asyncInit ? [4, n] : [3, 2]);
          case 1:
            return o = a.sent(), [3, 3];
          case 2:
            o = n, a.label = 3;
          case 3:
            if (!o) return [2, !1];
            a.label = 4;
          case 4:
            return this.backendInstance = this.registry[t], this.setupRegisteredKernels(), this.profiler = new Of(this.backendInstance), [2, !0];
        }
      });
    });
  }, r.prototype.setupRegisteredKernels = function() {
    var t = this;
    hs(this.backendName).forEach(function(e) {
      e.setupFunc != null && e.setupFunc(t.backendInstance);
    });
  }, r.prototype.disposeRegisteredKernels = function(t) {
    var e = this;
    hs(t).forEach(function(n) {
      n.disposeFunc != null && n.disposeFunc(e.registry[t]);
    });
  }, r.prototype.initializeBackend = function(t) {
    var e = this, n = this.registryFactory[t];
    if (n == null) throw new Error("Cannot initialize backend " + t + ", no registration found.");
    try {
      var o = n.factory();
      if (Promise.resolve(o) === o) {
        var a = ++this.pendingBackendInitId, i = o.then(function(s) {
          return !(a < e.pendingBackendInitId) && (e.registry[t] = s, e.pendingBackendInit = null, !0);
        }).catch(function(s) {
          return !(a < e.pendingBackendInitId) && (e.pendingBackendInit = null, console.warn("Initialization of backend " + t + " failed"), console.warn(s.stack || s.message), !1);
        });
        return this.pendingBackendInit = i, { success: i, asyncInit: !0 };
      }
      return this.registry[t] = o, { success: !0, asyncInit: !1 };
    } catch (s) {
      return console.warn("Initialization of backend " + t + " failed"), console.warn(s.stack || s.message), { success: !1, asyncInit: !1 };
    }
  }, r.prototype.removeBackend = function(t) {
    if (!(t in this.registryFactory)) throw new Error(t + " backend not found in registry");
    this.backendName === t && this.pendingBackendInit != null && this.pendingBackendInitId++, t in this.registry && (this.disposeRegisteredKernels(t), this.registry[t].dispose(), delete this.registry[t]), delete this.registryFactory[t], this.backendName === t && (this.pendingBackendInit = null, this.backendName = null, this.backendInstance = null);
  }, r.prototype.getSortedBackends = function() {
    var t = this;
    if (Object.keys(this.registryFactory).length === 0) throw new Error("No backend found in registry.");
    return Object.keys(this.registryFactory).sort(function(e, n) {
      return t.registryFactory[n].priority - t.registryFactory[e].priority;
    });
  }, r.prototype.initializeBackendsAndReturnBest = function() {
    for (var t = this.getSortedBackends(), e = 0; e < t.length; e++) {
      var n = t[e], o = this.initializeBackend(n), a = o.success, i = o.asyncInit;
      if (i || a) return { name: n, asyncInit: i };
    }
    throw new Error("Could not initialize any backends, all backend initializations failed.");
  }, r.prototype.moveData = function(t, e) {
    var n = this.state.tensorInfo.get(e), o = n.backend, a = this.readSync(e);
    o.disposeData(e), n.backend = t, t.move(e, a, n.shape, n.dtype), this.shouldCheckForMemLeaks() && this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1]++;
  }, r.prototype.tidy = function(t, e) {
    var n, o = this, a = null;
    if (e == null) {
      if (typeof t != "function") throw new Error("Please provide a function to tidy()");
      e = t;
    } else {
      if (typeof t != "string" && !(t instanceof String)) throw new Error("When calling with two arguments, the first argument to tidy() must be a string");
      if (typeof e != "function") throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");
      a = t;
    }
    return this.scopedRun(function() {
      return o.startScope(a);
    }, function() {
      return o.endScope(n);
    }, function() {
      return (n = e()) instanceof Promise && console.error("Cannot return a Promise inside of tidy."), n;
    });
  }, r.prototype.scopedRun = function(t, e, n) {
    t();
    try {
      var o = n();
      return e(), o;
    } catch (a) {
      throw e(), a;
    }
  }, r.prototype.nextTensorId = function() {
    return r.nextTensorId++;
  }, r.prototype.nextVariableId = function() {
    return r.nextVariableId++;
  }, r.prototype.clone = function(t) {
    var e = this.makeTensorFromDataId(t.dataId, t.shape, t.dtype), n = { x: t };
    return this.addTapeNode(this.state.activeScope.name, n, [e], function(o) {
      return { x: function() {
        return o.toFloat();
      } };
    }, []), e;
  }, r.prototype.runKernel = function(t, e, n, o, a) {
    return this.runKernelFunc(null, e, null, t, n, o, a);
  }, r.prototype.shouldCheckForMemLeaks = function() {
    return this.ENV.getBool("IS_TEST");
  }, r.prototype.checkKernelForMemLeak = function(t, e, n) {
    var o = this.backend.numDataIds(), a = 0;
    n.forEach(function(u) {
      a += u.dtype === "complex64" ? 3 : 1;
    });
    var i = this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1], s = o - e - a - i;
    if (s > 0) throw new Error("Backend '" + this.backendName + "' has an internal memory leak (" + s + " data ids) after running '" + t + "'");
  }, r.prototype.runKernelFunc = function(t, e, n, o, a, i, s) {
    var u, c = this;
    i === void 0 && (i = []), s === void 0 && (s = []);
    var l = [], f = this.isTapeOn();
    o == null && (o = this.state.activeScope != null ? this.state.activeScope.name : "");
    var h, p = function(y) {
      f && (l = y.map(function(x) {
        return c.keep(c.clone(x));
      }));
    }, d = this.state.numBytes, m = this.state.numTensors;
    this.shouldCheckForMemLeaks() && this.state.numDataMovesStack.push(0);
    var v, g = ku(o, this.backendName);
    return h = g != null ? function() {
      var y = c.backend.numDataIds();
      v = g.kernelFunc({ inputs: e, attrs: a, backend: c.backend });
      var x = Array.isArray(v) ? v : [v];
      c.shouldCheckForMemLeaks() && c.checkKernelForMemLeak(o, y, x);
      var b = x.map(function(C) {
        var k = C.dataId, I = C.shape, R = C.dtype;
        return c.makeTensorFromDataId(k, I, R);
      }), w = b.filter(function(C, k) {
        return s[k];
      });
      return p((i || []).slice().concat(w)), b;
    } : function() {
      var y = c.backend.numDataIds();
      v = c.tidy(function() {
        return t(c.backend, p);
      });
      var x = Array.isArray(v) ? v : [v];
      return c.shouldCheckForMemLeaks() && c.checkKernelForMemLeak(o, y, x), x;
    }, this.scopedRun(function() {
      return c.state.kernelDepth++;
    }, function() {
      return c.state.kernelDepth--;
    }, function() {
      u = c.ENV.getBool("DEBUG") ? c.profiler.profileKernel(o, e, function() {
        return h();
      }) : h();
    }), f && this.addTapeNode(o, e, u, n, l), this.state.profiling && this.state.activeProfile.kernels.push({ name: o, bytesAdded: this.state.numBytes - d, totalBytesSnapshot: this.state.numBytes, tensorsAdded: this.state.numTensors - m, totalTensorsSnapshot: this.state.numTensors, inputShapes: Object.keys(e).map(function(y) {
      return e[y].shape;
    }), outputShapes: u.map(function(y) {
      return y.shape;
    }) }), Array.isArray(v) ? u : u[0];
  }, r.prototype.makeTensor = function(t, e, n, o) {
    if (t == null) throw new Error("Values passed to engine.makeTensor() are null");
    n = n || "float32", o = o || this.backend;
    var a = t;
    n === "string" && ri(t[0]) && (a = t.map(function(l) {
      return Ff(l);
    }));
    var i = o.write(a, e, n), s = new Se(e, n, i, this.nextTensorId());
    if (this.incRef(s, o), n === "string") {
      var u = this.state.tensorInfo.get(i), c = Df(a);
      this.state.numBytes += c - u.bytes, u.bytes = c;
    }
    return s;
  }, r.prototype.makeTensorFromDataId = function(t, e, n, o) {
    var a = new Se(e, n = n || "float32", t, this.nextTensorId());
    return this.incRef(a, o), a;
  }, r.prototype.makeVariable = function(t, e, n, o) {
    e === void 0 && (e = !0), n = n || this.nextVariableId().toString(), o != null && o !== t.dtype && (t = t.asType(o));
    var a = new Qn(t, e, n, this.nextTensorId());
    if (this.state.registeredVariables[a.name] != null) throw new Error("Variable with name " + a.name + " was already registered");
    return this.state.registeredVariables[a.name] = a, this.incRef(a, this.backend), a;
  }, r.prototype.incRef = function(t, e) {
    var n = this.state.tensorInfo.has(t.dataId) ? this.state.tensorInfo.get(t.dataId).refCount : 0;
    if (this.state.numTensors++, t.dtype === "string" && this.state.numStringTensors++, n === 0) {
      this.state.numDataBuffers++;
      var o = 0;
      t.dtype !== "complex64" && t.dtype !== "string" && (o = t.size * Nu(t.dtype)), this.state.tensorInfo.set(t.dataId, { backend: e || this.backend, dtype: t.dtype, shape: t.shape, bytes: o, refCount: 0 }), this.state.numBytes += o;
    }
    this.state.tensorInfo.get(t.dataId).refCount++, t instanceof Qn || this.track(t);
  }, r.prototype.disposeTensor = function(t) {
    if (this.state.tensorInfo.has(t.dataId)) {
      this.state.numTensors--, t.dtype === "string" && this.state.numStringTensors--;
      var e = this.state.tensorInfo.get(t.dataId);
      e.refCount <= 1 ? (t.dtype !== "complex64" && (this.state.numBytes -= e.bytes), this.state.numDataBuffers--, e.backend.disposeData(t.dataId), this.state.tensorInfo.delete(t.dataId)) : this.state.tensorInfo.get(t.dataId).refCount--;
    }
  }, r.prototype.disposeVariables = function() {
    for (var t in this.state.registeredVariables) {
      var e = this.state.registeredVariables[t];
      this.disposeVariable(e);
    }
  }, r.prototype.disposeVariable = function(t) {
    this.disposeTensor(t), this.state.registeredVariables[t.name] != null && delete this.state.registeredVariables[t.name];
  }, r.prototype.memory = function() {
    var t = this.backend.memory();
    return t.numTensors = this.state.numTensors, t.numDataBuffers = this.state.numDataBuffers, t.numBytes = this.state.numBytes, this.state.numStringTensors > 0 && (t.unreliable = !0, t.reasons == null && (t.reasons = []), t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")), t;
  }, r.prototype.profile = function(t) {
    return $(this, void 0, void 0, function() {
      var e, n;
      return Y(this, function(o) {
        return this.state.profiling = !0, e = this.state.numBytes, n = this.state.numTensors, this.state.activeProfile.kernels = [], this.state.activeProfile.result = t(), this.state.profiling = !1, this.state.activeProfile.peakBytes = Math.max.apply(Math, this.state.activeProfile.kernels.map(function(a) {
          return a.totalBytesSnapshot;
        })), this.state.activeProfile.newBytes = this.state.numBytes - e, this.state.activeProfile.newTensors = this.state.numTensors - n, [2, this.state.activeProfile];
      });
    });
  }, r.prototype.isTapeOn = function() {
    return this.state.gradientDepth > 0 && this.state.kernelDepth === 0;
  }, r.prototype.addTapeNode = function(t, e, n, o, a) {
    var i = this, s = { id: this.state.nextTapeNodeId++, kernelName: t, inputs: e, outputs: n, saved: a }, u = Cf(t);
    u != null && (o = u.gradFunc), o != null && (s.gradient = function(c) {
      return c = c.map(function(l, f) {
        if (l == null) {
          var h = n[f], p = Cr(h.size, h.dtype);
          return i.makeTensor(p, h.shape, h.dtype);
        }
        return l;
      }), o(c.length > 1 ? c : c[0], a);
    }), this.state.activeTape.push(s);
  }, r.prototype.keep = function(t) {
    return t.kept = !0, t;
  }, r.prototype.startTape = function() {
    this.state.gradientDepth === 0 && (this.state.activeTape = []), this.state.gradientDepth++;
  }, r.prototype.endTape = function() {
    this.state.gradientDepth--;
  }, r.prototype.startScope = function(t) {
    var e = { track: [], name: "unnamed scope", id: this.state.nextScopeId++ };
    t && (e.name = t), this.state.scopeStack.push(e), this.state.activeScope = e;
  }, r.prototype.endScope = function(t) {
    for (var e = this, n = Lu(t), o = new Set(n.map(function(u) {
      return u.id;
    })), a = 0; a < this.state.activeScope.track.length; a++) {
      var i = this.state.activeScope.track[a];
      i.kept || o.has(i.id) || i.dispose();
    }
    var s = this.state.scopeStack.pop();
    this.state.activeScope = this.state.scopeStack.length === 0 ? null : this.state.scopeStack[this.state.scopeStack.length - 1], n.forEach(function(u) {
      u.kept || u.scopeId !== s.id || e.track(u);
    });
  }, r.prototype.gradients = function(t, e, n, o) {
    var a = this;
    if (o === void 0 && (o = !1), _(e.length > 0, function() {
      return "gradients() received an empty list of xs.";
    }), n != null && n.dtype !== "float32") throw new Error("dy must have 'float32' dtype, but has '" + n.dtype + "'");
    var i = this.scopedRun(function() {
      return a.startTape();
    }, function() {
      return a.endTape();
    }, function() {
      return a.tidy("forward", t);
    });
    _(i instanceof Se, function() {
      return "The result y returned by f() must be a tensor.";
    });
    var s = function(u, c, l) {
      for (var f = {}, h = {}, p = 0; p < c.length; p++) f[c[p].id] = !0;
      for (p = 0; p < u.length; p++) {
        var d = (C = u[p]).inputs;
        for (var m in d) {
          for (var v = d[m], g = !1, y = 0; y < c.length; y++) if (f[v.id]) {
            C.outputs.forEach(function(S) {
              return f[S.id] = !0;
            }), g = !0, h[C.id] = !0;
            break;
          }
          if (g) break;
        }
      }
      var x = {};
      x[l.id] = !0;
      var b = {};
      for (p = u.length - 1; p >= 0; p--) for (d = (C = u[p]).inputs, y = 0; y < C.outputs.length; y++) if (x[C.outputs[y].id]) {
        for (var m in d) x[d[m].id] = !0, b[C.id] = !0;
        break;
      }
      var w = [];
      for (p = 0; p < u.length; p++) {
        var C;
        if (h[(C = u[p]).id] && b[C.id]) {
          var k = {};
          for (var m in C.inputs) {
            var I = C.inputs[m];
            f[I.id] && (k[m] = I);
          }
          var R = Object.assign({}, C);
          R.inputs = k, R.outputs = C.outputs, w.push(R);
        }
      }
      return w;
    }(this.state.activeTape, e, i);
    if (!o && s.length === 0 && e.length > 0) throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");
    return this.tidy("backward", function() {
      var u, c, l = {};
      l[i.id] = n ?? (u = i.shape, c = Pu(J(u), "float32"), T.makeTensor(c, u, "float32")), function(h, p, d) {
        for (var m = function(g) {
          var y = p[g], x = [];
          if (y.outputs.forEach(function(k) {
            var I = h[k.id];
            I != null ? x.push(I) : x.push(null);
          }), y.gradient == null) throw new Error("Cannot compute gradient: gradient function not found for " + y.kernelName + ".");
          var b = y.gradient(x), w = function(k) {
            if (!(k in b)) throw new Error("Cannot backprop through input " + k + ". Available gradients found: " + Object.keys(b) + ".");
            var I = d(function() {
              return b[k]();
            });
            if (I.dtype !== "float32") throw new Error("Error in gradient for op " + y.kernelName + ". The gradient of input " + k + " must have 'float32' dtype, but has '" + I.dtype + "'");
            var R = y.inputs[k];
            if (!Ve(I.shape, R.shape)) throw new Error("Error in gradient for op " + y.kernelName + ". The gradient of input '" + k + "' has shape '" + I.shape + "', which does not match the shape of the input '" + R.shape + "'");
            if (h[R.id] == null) h[R.id] = I;
            else {
              var S = h[R.id];
              h[R.id] = S.add(I), S.dispose();
            }
          };
          for (var C in y.inputs) w(C);
        }, v = p.length - 1; v >= 0; v--) m(v);
      }(l, s, function(h) {
        return a.tidy(h);
      });
      var f = e.map(function(h) {
        return l[h.id];
      });
      return a.state.gradientDepth === 0 && (a.state.activeTape.forEach(function(h) {
        for (var p = 0, d = h.saved; p < d.length; p++)
          d[p].dispose();
      }), a.state.activeTape = null), { value: i, grads: f };
    });
  }, r.prototype.customGrad = function(t) {
    var e = this;
    return _(Ta(t), function() {
      return "The f passed in customGrad(f) must be a function.";
    }), function() {
      for (var n, o = [], a = 0; a < arguments.length; a++) o[a] = arguments[a];
      _(o.every(function(s) {
        return s instanceof Se;
      }), function() {
        return "The args passed in customGrad(f)(x1, x2,...) must all be tensors";
      });
      var i = {};
      return o.forEach(function(s, u) {
        i[u] = s;
      }), e.runKernelFunc(function(s, u) {
        return _((n = t.apply(void 0, o.concat([u]))).value instanceof Se, function() {
          return "The function f passed in customGrad(f) must return an object where `obj.value` is a tensor";
        }), _(Ta(n.gradFunc), function() {
          return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function.";
        }), n.value;
      }, i, function(s, u) {
        var c = n.gradFunc(s, u), l = Array.isArray(c) ? c : [c];
        _(l.length === o.length, function() {
          return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...).";
        }), _(l.every(function(h) {
          return h instanceof Se;
        }), function() {
          return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.";
        });
        var f = {};
        return l.forEach(function(h, p) {
          f[p] = function() {
            return h;
          };
        }), f;
      });
    };
  }, r.prototype.readSync = function(t) {
    return this.state.tensorInfo.get(t).backend.readSync(t);
  }, r.prototype.read = function(t) {
    return this.state.tensorInfo.get(t).backend.read(t);
  }, r.prototype.time = function(t) {
    return $(this, void 0, void 0, function() {
      var e, n;
      return Y(this, function(o) {
        switch (o.label) {
          case 0:
            return e = Tt(), [4, this.backend.time(t)];
          case 1:
            return (n = o.sent()).wallMs = Tt() - e, [2, n];
        }
      });
    });
  }, r.prototype.track = function(t) {
    return this.state.activeScope != null && (t.scopeId = this.state.activeScope.id, this.state.activeScope.track.push(t)), t;
  }, Object.defineProperty(r.prototype, "registeredVariables", { get: function() {
    return this.state.registeredVariables;
  }, enumerable: !0, configurable: !0 }), r.prototype.reset = function() {
    for (var t in this.pendingBackendInitId++, this.state.dispose(), this.ENV.reset(), this.state = new ys(), this.registry) this.disposeRegisteredKernels(t), this.registry[t].dispose(), delete this.registry[t];
    this.backendName = null, this.backendInstance = null, this.pendingBackendInit = null;
  }, r.nextTensorId = 0, r.nextVariableId = 0, r;
}(), T = function() {
  var r = function() {
    if (ea == null) {
      var e = void 0;
      if (typeof window < "u") e = window;
      else if (typeof global < "u") e = global;
      else if (typeof process < "u") e = process;
      else {
        if (typeof self > "u") throw new Error("Could not find a global object");
        e = self;
      }
      ea = e;
    }
    return ea;
  }();
  if (r._tfengine == null) {
    var t = new xf(r);
    r._tfengine = new Uf(t);
  }
  return function(e) {
    Iu = e;
  }(r._tfengine.ENV), Nt = function() {
    return r._tfengine;
  }, r._tfengine;
}();
function Wu() {
  return typeof window < "u" && window.document != null || typeof WorkerGlobalScope < "u";
}
var jt = M();
jt.registerFlag("DEBUG", function() {
  return !1;
}, function(r) {
  r && console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.");
}), jt.registerFlag("IS_BROWSER", function() {
  return Wu();
}), jt.registerFlag("IS_NODE", function() {
  return typeof process < "u" && process.versions !== void 0 && process.versions.node !== void 0;
}), jt.registerFlag("IS_CHROME", function() {
  return typeof navigator < "u" && navigator != null && navigator.userAgent != null && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
}), jt.registerFlag("PROD", function() {
  return !1;
}), jt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY", function() {
  return jt.getBool("DEBUG");
}), jt.registerFlag("DEPRECATION_WARNINGS_ENABLED", function() {
  return !0;
}), jt.registerFlag("IS_TEST", function() {
  return !1;
});
var vr, lt, ct, mn = {}, ta = { alpha: !1, antialias: !1, premultipliedAlpha: !1, preserveDrawingBuffer: !1, depth: !1, stencil: !1, failIfMajorPerformanceCaveat: !0 };
function zf(r, t) {
  mn[r] = t;
}
function Wt(r) {
  r in mn || (mn[r] = function(e) {
    if (e !== 1 && e !== 2) throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");
    var n = function(o) {
      if (typeof OffscreenCanvas < "u" && o === 2) return new OffscreenCanvas(300, 150);
      if (typeof document < "u") return document.createElement("canvas");
      throw new Error("Cannot create a canvas in this context");
    }(e);
    return n.addEventListener("webglcontextlost", function(o) {
      o.preventDefault(), delete mn[e];
    }, !1), e === 1 ? n.getContext("webgl", ta) || n.getContext("experimental-webgl", ta) : n.getContext("webgl2", ta);
  }(r));
  var t = mn[r];
  return t.isContextLost() ? (delete mn[r], Wt(r)) : (t.disable(t.DEPTH_TEST), t.disable(t.STENCIL_TEST), t.disable(t.BLEND), t.disable(t.DITHER), t.disable(t.POLYGON_OFFSET_FILL), t.disable(t.SAMPLE_COVERAGE), t.enable(t.SCISSOR_TEST), t.enable(t.CULL_FACE), t.cullFace(t.BACK), mn[r]);
}
function Ro(r, t) {
  return [t, r];
}
function lr(r) {
  var t = J(r);
  return Da(Math.ceil(t / 4));
}
function Er(r, t) {
  return [Math.max(1, Math.ceil(t / 2)), Math.max(1, Math.ceil(r / 2))];
}
function oi(r, t) {
  var e, n, o, a, i, s, u, c, l, f = r;
  return M().getNumber("WEBGL_VERSION") === 2 ? (e = f.R32F, n = f.R16F, o = f.RGBA16F, a = f.RGBA32F, i = f.RED, s = 4, u = 1, c = f.HALF_FLOAT, l = f.FLOAT) : (e = r.RGBA, n = r.RGBA, o = r.RGBA, a = f.RGBA, i = r.RGBA, s = 4, u = 4, c = t != null ? t.HALF_FLOAT_OES : null, l = r.FLOAT), { internalFormatFloat: e, internalFormatHalfFloat: n, internalFormatPackedHalfFloat: o, internalFormatPackedFloat: a, textureFormatFloat: i, downloadTextureFormat: r.RGBA, downloadUnpackNumChannels: s, defaultNumChannels: u, textureTypeHalfFloat: c, textureTypeFloat: l };
}
function Q(r, t, e) {
  var n = e();
  return t && function(o) {
    var a = o.getError();
    if (a !== o.NO_ERROR) throw new Error("WebGL Error: " + qf(o, a));
  }(r), n;
}
(function(r) {
  r[r.DENSE = 0] = "DENSE", r[r.SHARED_BATCH = 1] = "SHARED_BATCH";
})(vr || (vr = {})), function(r) {
  r[r.RENDER = 0] = "RENDER", r[r.UPLOAD = 1] = "UPLOAD", r[r.PIXELS = 2] = "PIXELS", r[r.DOWNLOAD = 3] = "DOWNLOAD";
}(lt || (lt = {})), function(r) {
  r[r.UNPACKED_FLOAT16 = 0] = "UNPACKED_FLOAT16", r[r.UNPACKED_FLOAT32 = 1] = "UNPACKED_FLOAT32", r[r.PACKED_4X1_UNSIGNED_BYTE = 2] = "PACKED_4X1_UNSIGNED_BYTE", r[r.PACKED_2X2_FLOAT32 = 3] = "PACKED_2X2_FLOAT32", r[r.PACKED_2X2_FLOAT16 = 4] = "PACKED_2X2_FLOAT16";
}(ct || (ct = {}));
var Vf = 596e-10, Hf = 65504;
function Gf(r) {
  return !!(M().getBool("WEBGL_RENDER_FLOAT32_ENABLED") || r === 0 || Vf < Math.abs(r) && Math.abs(r) < Hf);
}
function qf(r, t) {
  switch (t) {
    case r.NO_ERROR:
      return "NO_ERROR";
    case r.INVALID_ENUM:
      return "INVALID_ENUM";
    case r.INVALID_VALUE:
      return "INVALID_VALUE";
    case r.INVALID_OPERATION:
      return "INVALID_OPERATION";
    case r.INVALID_FRAMEBUFFER_OPERATION:
      return "INVALID_FRAMEBUFFER_OPERATION";
    case r.OUT_OF_MEMORY:
      return "OUT_OF_MEMORY";
    case r.CONTEXT_LOST_WEBGL:
      return "CONTEXT_LOST_WEBGL";
    default:
      return "Unknown error code " + t;
  }
}
function Or(r, t, e) {
  return $t(r, t, function() {
    return r.getExtension(e);
  }, 'Extension "' + e + '" not supported on this browser.');
}
function jf(r, t, e) {
  var n = $t(r, t, function() {
    return r.createShader(r.VERTEX_SHADER);
  }, "Unable to create vertex WebGLShader.");
  if (Q(r, t, function() {
    return r.shaderSource(n, e);
  }), Q(r, t, function() {
    return r.compileShader(n);
  }), r.getShaderParameter(n, r.COMPILE_STATUS) === !1) throw console.log(r.getShaderInfoLog(n)), new Error("Failed to compile vertex shader.");
  return n;
}
function Kf(r, t, e) {
  var n = $t(r, t, function() {
    return r.createShader(r.FRAGMENT_SHADER);
  }, "Unable to create fragment WebGLShader.");
  if (Q(r, t, function() {
    return r.shaderSource(n, e);
  }), Q(r, t, function() {
    return r.compileShader(n);
  }), r.getShaderParameter(n, r.COMPILE_STATUS) === !1) throw function(o, a) {
    var i = Xf.exec(a);
    if (i == null) return console.log("Couldn't parse line number in error: " + a), void console.log(o);
    for (var s = +i[1], u = o.split(`
`), c = u.length.toString().length + 2, l = u.map(function(v, g) {
      return Hn((g + 1).toString(), c) + v;
    }), f = 0, h = 0; h < l.length; h++) f = Math.max(l[h].length, f);
    var p = l.slice(0, s - 1), d = l.slice(s - 1, s), m = l.slice(s);
    console.log(p.join(`
`)), console.log(a.split(`
`)[0]), console.log("%c " + Hn(d[0], f), "border:1px solid red; background-color:#e3d2d2; color:#a61717"), console.log(m.join(`
`));
  }(e, r.getShaderInfoLog(n)), new Error("Failed to compile fragment shader.");
  return n;
}
var na, ra, Xf = /ERROR: [0-9]+:([0-9]+):/g;
function $f(r, t) {
  return $t(r, t, function() {
    return r.createProgram();
  }, "Unable to create WebGLProgram.");
}
function Yf(r, t, e) {
  if (Q(r, t, function() {
    return r.linkProgram(e);
  }), r.getProgramParameter(e, r.LINK_STATUS) === !1) throw console.log(r.getProgramInfoLog(e)), new Error("Failed to link vertex and fragment shaders.");
}
function oa(r, t, e) {
  if (Q(r, t, function() {
    return r.validateProgram(e);
  }), r.getProgramParameter(e, r.VALIDATE_STATUS) === !1) throw console.log(r.getProgramInfoLog(e)), new Error("Shader program validation failed.");
}
function Jf(r, t, e) {
  var n = $t(r, t, function() {
    return r.createBuffer();
  }, "Unable to create WebGLBuffer");
  return Q(r, t, function() {
    return r.bindBuffer(r.ARRAY_BUFFER, n);
  }), Q(r, t, function() {
    return r.bufferData(r.ARRAY_BUFFER, e, r.STATIC_DRAW);
  }), n;
}
function Qf(r, t, e) {
  var n = $t(r, t, function() {
    return r.createBuffer();
  }, "Unable to create WebGLBuffer");
  return Q(r, t, function() {
    return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, n);
  }), Q(r, t, function() {
    return r.bufferData(r.ELEMENT_ARRAY_BUFFER, e, r.STATIC_DRAW);
  }), n;
}
function Zf(r, t) {
  return $t(r, t, function() {
    return r.createTexture();
  }, "Unable to create WebGLTexture.");
}
function eh(r, t) {
  var e = M().getNumber("WEBGL_MAX_TEXTURE_SIZE");
  if (r <= 0 || t <= 0) {
    var n = "[" + r + "x" + t + "]";
    throw new Error("Requested texture size " + n + " is invalid.");
  }
  if (r > e || t > e)
    throw n = "[" + r + "x" + t + "]", new Error("Requested texture size " + n + " greater than WebGL maximum on this browser / GPU " + ("[" + e + "x" + e + "]") + ".");
}
function th(r, t) {
  return $t(r, t, function() {
    return r.createFramebuffer();
  }, "Unable to create WebGLFramebuffer.");
}
function bs(r, t, e, n, o, a, i, s) {
  var u = r.getAttribLocation(e, n);
  return u !== -1 && (Q(r, t, function() {
    return r.bindBuffer(r.ARRAY_BUFFER, o);
  }), Q(r, t, function() {
    return r.vertexAttribPointer(u, a, r.FLOAT, !1, i, s);
  }), Q(r, t, function() {
    return r.enableVertexAttribArray(u);
  }), !0);
}
function nh(r, t, e, n) {
  sh(r, n), Q(r, t, function() {
    return r.activeTexture(r.TEXTURE0 + n);
  }), Q(r, t, function() {
    return r.bindTexture(r.TEXTURE_2D, e);
  });
}
function rh(r, t, e, n) {
  return $t(r, t, function() {
    return r.getUniformLocation(e, n);
  }, 'uniform "' + n + '" not present in program.');
}
function oh(r, t, e) {
  return r.getUniformLocation(t, e);
}
function ah(r, t, e, n, o, a) {
  Q(r, t, function() {
    return nh(r, t, n, a);
  }), Q(r, t, function() {
    return r.uniform1i(o, a);
  });
}
function aa(r, t, e, n) {
  Q(r, t, function() {
    return r.bindFramebuffer(r.FRAMEBUFFER, n);
  }), Q(r, t, function() {
    return r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, e, 0);
  });
}
function xs(r, t, e) {
  Q(r, t, function() {
    return r.bindFramebuffer(r.FRAMEBUFFER, e);
  }), Q(r, t, function() {
    return r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, null, 0);
  });
}
function Mr(r) {
  var t = r.checkFramebufferStatus(r.FRAMEBUFFER);
  if (t !== r.FRAMEBUFFER_COMPLETE) throw new Error("Error binding framebuffer: " + ih(r, t));
}
function ih(r, t) {
  switch (t) {
    case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
      return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
    case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
      return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
    case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
      return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
    case r.FRAMEBUFFER_UNSUPPORTED:
      return "FRAMEBUFFER_UNSUPPORTED";
    default:
      return "unknown error " + t;
  }
}
function $t(r, t, e, n) {
  var o = Q(r, t, function() {
    return e();
  });
  if (o == null) throw new Error(n);
  return o;
}
function sh(r, t) {
  var e = r.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1, n = t + r.TEXTURE0;
  if (n < r.TEXTURE0 || n > e) throw new Error("textureUnit must be in " + ("[gl.TEXTURE0, gl.TEXTURE" + e + "]") + ".");
}
function no(r, t) {
  return t === void 0 && (t = 2), J(r.slice(0, r.length - t));
}
function ro(r) {
  if (r.length === 0) throw Error("Cannot get rows and columns of an empty shape array.");
  return [r.length > 1 ? r[r.length - 2] : 1, r[r.length - 1]];
}
function ia(r) {
  var t = [1, 1, 1];
  return r.length === 0 || r.length === 1 && r[0] === 1 || (t = [no(r)].concat(ro(r))), t;
}
function uh(r, t) {
  var e;
  t === void 0 && (t = !1);
  var n = M().getNumber("WEBGL_MAX_TEXTURE_SIZE");
  if (t && (n *= 2, (r = r.map(function(c, l) {
    return l >= r.length - 2 ? Tu(r[l]) : r[l];
  })).length === 1 && (r = [2, r[0]])), r.length !== 2) {
    var o = yn(r);
    r = o.newShape;
  }
  var a = J(r);
  if (r.length <= 1 && a <= n) return [1, a];
  if (r.length === 2 && r[0] <= n && r[1] <= n) return r;
  if (r.length === 3 && r[0] * r[1] <= n && r[2] <= n) return [r[0] * r[1], r[2]];
  if (r.length === 3 && r[0] <= n && r[1] * r[2] <= n) return [r[0], r[1] * r[2]];
  if (r.length === 4 && r[0] * r[1] * r[2] <= n && r[3] <= n) return [r[0] * r[1] * r[2], r[3]];
  if (r.length === 4 && r[0] <= n && r[1] * r[2] * r[3] <= n) return [r[0], r[1] * r[2] * r[3]];
  if (t) {
    var i = no(r), s = 2, u = 2;
    return r.length && (s = (e = ro(r))[0], u = e[1]), Da(a = i * (s / 2) * (u / 2)).map(function(c) {
      return 2 * c;
    });
  }
  return Da(a);
}
function Br(r) {
  return r % 2 == 0;
}
function Lr(r, t) {
  if (Ve(r = r.slice(-2), t = t.slice(-2)) || !r.length || !t.length || r[0] === 0 || r[1] === 0 || t[0] === 0 || t[1] === 0) return !0;
  if (r.length !== t.length) {
    var e = r.slice(-1)[0], n = t.slice(-1)[0];
    if (e === n || Br(e) && Br(n) && (r[0] === 1 || t[0] === 1)) return !0;
  }
  return r[1] === t[1] && Br(r[0]) && Br(t[0]);
}
function ch(r) {
  if (na == null) {
    var t = Wt(r);
    na = t.getParameter(t.MAX_TEXTURE_SIZE);
  }
  return na;
}
function lh(r) {
  if (ra == null) {
    var t = Wt(r);
    ra = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
  }
  return Math.min(16, ra);
}
function fh(r) {
  if (r === 0) return 0;
  var t = Wt(r);
  return gt(t, "EXT_disjoint_timer_query_webgl2") && r === 2 ? 2 : gt(t, "EXT_disjoint_timer_query") ? 1 : 0;
}
function gt(r, t) {
  return r.getExtension(t) != null;
}
function ws(r) {
  try {
    if (Wt(r) != null) return !0;
  } catch {
    return !1;
  }
  return !1;
}
function hh(r) {
  if (r === 0) return !1;
  var t = Wt(r);
  if (r === 1) {
    if (!gt(t, "OES_texture_float")) return !1;
  } else if (!gt(t, "EXT_color_buffer_float")) return !1;
  return Ba(t);
}
function ph(r) {
  if (r === 0) return !1;
  var t = Wt(r);
  if (r !== 1) {
    if (gt(t, "EXT_color_buffer_float")) return Ba(t);
    if (gt(t, "EXT_color_buffer_half_float")) {
      var e = t.getExtension("EXT_color_buffer_half_float");
      return function(n, o) {
        var a = oi(n, o), i = n.createTexture();
        n.bindTexture(n.TEXTURE_2D, i), n.texImage2D(n.TEXTURE_2D, 0, a.internalFormatHalfFloat, 1, 1, 0, a.textureFormatFloat, a.textureTypeHalfFloat, null);
        var s = n.createFramebuffer();
        n.bindFramebuffer(n.FRAMEBUFFER, s), n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, i, 0);
        var u = n.checkFramebufferStatus(n.FRAMEBUFFER) === n.FRAMEBUFFER_COMPLETE;
        return n.bindTexture(n.TEXTURE_2D, null), n.bindFramebuffer(n.FRAMEBUFFER, null), n.deleteTexture(i), n.deleteFramebuffer(s), u;
      }(t, e);
    }
    return !1;
  }
  return !!gt(t, "OES_texture_float") && !!gt(t, "WEBGL_color_buffer_float") && Ba(t);
}
function Ba(r) {
  var t = oi(r), e = r.createTexture();
  r.bindTexture(r.TEXTURE_2D, e), r.texImage2D(r.TEXTURE_2D, 0, t.internalFormatFloat, 1, 1, 0, t.textureFormatFloat, t.textureTypeFloat, null);
  var n = r.createFramebuffer();
  r.bindFramebuffer(r.FRAMEBUFFER, n), r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, e, 0);
  var o = r.checkFramebufferStatus(r.FRAMEBUFFER) === r.FRAMEBUFFER_COMPLETE;
  return r.bindTexture(r.TEXTURE_2D, null), r.bindFramebuffer(r.FRAMEBUFFER, null), r.deleteTexture(e), r.deleteFramebuffer(n), o;
}
function dh(r) {
  return r === 2 && Wt(r).fenceSync != null;
}
var re = M();
function Uu(r) {
  M().getBool("DEPRECATION_WARNINGS_ENABLED") && console.warn(r + " You can disable deprecation warnings with tf.disableDeprecationWarnings().");
}
function X(r, t) {
  return T.tidy(r, t);
}
function nt(r) {
  Lu(r).forEach(function(t) {
    return t.dispose();
  });
}
function vh(r) {
  return T.keep(r);
}
function oo() {
  for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
  M().getBool("IS_TEST") || console.warn.apply(console, r);
}
function hn(r, t) {
  var e = r;
  if (Ot(r)) return t === "string" ? [] : [r.length];
  if (!Array.isArray(r)) return [];
  for (var n = []; Array.isArray(e) || Ot(e) && t !== "string"; ) n.push(e.length), e = e[0];
  return Array.isArray(r) && M().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY") && function o(a, i, s) {
    if (s = s || [], !Array.isArray(a) && !Ot(a)) return void _(i.length === 0, function() {
      return "Element arr[" + s.join("][") + "] is a primitive, but should be an array/TypedArray of " + i[0] + " elements";
    });
    _(i.length > 0, function() {
      return "Element arr[" + s.join("][") + "] should be a primitive, but is an array of " + a.length + " elements";
    }), _(a.length === i[0], function() {
      return "Element arr[" + s.join("][") + "] should have " + i[0] + " elements, but has " + a.length + " elements";
    });
    for (var u = i.slice(1), c = 0; c < a.length; ++c) o(a[c], u, s.concat(c));
  }(r, n, []), n;
}
function Cs(r, t, e, n) {
  if (r != null && (r !== "numeric" && r !== t || r === "numeric" && t === "string")) throw new Error("Argument '" + e + "' passed to '" + n + "' must be " + r + " tensor, but got " + t + " tensor");
}
function E(r, t, e, n) {
  if (n === void 0 && (n = "numeric"), r instanceof Se) return Cs(n, r.dtype, t, e), r;
  var o = wr(r);
  if (o !== "string" && ["bool", "int32", "float32"].indexOf(n) >= 0 && (o = n), Cs(n, o, t, e), r == null || !Ot(r) && !Array.isArray(r) && typeof r != "number" && typeof r != "boolean" && typeof r != "string") {
    var a = r == null ? "null" : r.constructor.name;
    throw new Error("Argument '" + t + "' passed to '" + e + "' must be a Tensor or TensorLike, but got '" + a + "'");
  }
  var i = hn(r, o);
  Ot(r) || Array.isArray(r) || (r = [r]);
  var s = o !== "string" ? Fu(r, o, M().getBool("DEBUG")) : Jn(r, [], !0);
  return T.makeTensor(s, i, o);
}
function ao(r, t, e, n) {
  if (n === void 0 && (n = "numeric"), !Array.isArray(r)) throw new Error("Argument " + t + " passed to " + e + " must be a `Tensor[]` or `TensorLike[]`");
  return r.map(function(o, a) {
    return E(o, t + "[" + a + "]", e);
  }, n);
}
function zu(r, t) {
  for (var e = 0; e < r.length; ++e) if (r[r.length - e - 1] !== t - 1 - e) return !1;
  return !0;
}
function mh(r, t, e) {
  for (var n = r.length + t.length, o = [], a = 0, i = 0, s = 0; s < n; s++) e.indexOf(s) === -1 ? o.push(r[a++]) : o.push(t[i++]);
  return o;
}
function Ke(r, t) {
  for (var e = [], n = r.length, o = 0; o < n; o++) t.indexOf(o) === -1 && e.push(r[o]);
  return [e, t.map(function(a) {
    return r[a];
  })];
}
function at(r, t) {
  return mh(r, t.map(function(e) {
    return 1;
  }), t);
}
function ut(r, t, e) {
  _(zu(t, e), function() {
    return r + " supports only inner-most axes for now. Got axes " + t + " and rank-" + e + " input.";
  });
}
function Ut(r, t) {
  if (zu(r, t)) return null;
  for (var e = [], n = 0; n < t; ++n) r.indexOf(n) === -1 && e.push(n);
  return r.forEach(function(o) {
    return e.push(o);
  }), e;
}
function ai(r) {
  return r.map(function(t, e) {
    return [e, t];
  }).sort(function(t, e) {
    return t[1] - e[1];
  }).map(function(t) {
    return t[0];
  });
}
function zt(r, t) {
  for (var e = [], n = t - r; n < t; ++n) e.push(n);
  return e;
}
function gh(r, t) {
  var e = r[0].length;
  r.forEach(function(o, a) {
    _(o.length === e, function() {
      return "Error in concat" + e + "D: rank of tensors[" + a + "] must be the same as the rank of the rest (" + e + ")";
    });
  }), _(t >= 0 && t < e, function() {
    return "Error in concat" + e + "D: axis must be between 0 and " + (e - 1) + ".";
  });
  var n = r[0];
  r.forEach(function(o, a) {
    for (var i = 0; i < e; i++) _(i === t || o[i] === n[i], function() {
      return "Error in concat" + e + "D: Shape of tensors[" + a + "] (" + o + ") does not match the shape of the rest (" + n + ") along the non-concatenated axis " + a + ".";
    });
  });
}
function Zn(r, t) {
  for (var e = r[0].slice(), n = 1; n < r.length; n++) e[t] += r[n][t];
  return e;
}
function A(r) {
  var t = Object.keys(r);
  if (t.length !== 1) throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with " + t.length + " keys.");
  var e = t[0], n = r[e];
  e.endsWith("_") && (e = e.substring(0, e.length - 1));
  var o = function() {
    for (var a = [], i = 0; i < arguments.length; i++) a[i] = arguments[i];
    T.startScope(e);
    try {
      var s = n.apply(void 0, a);
      return s instanceof Promise && console.error("Cannot return a Promise inside of tidy."), T.endScope(s), s;
    } catch (u) {
      throw T.endScope(null), u;
    }
  };
  return Object.defineProperty(o, "name", { value: e, configurable: !0 }), o;
}
re.registerFlag("HAS_WEBGL", function() {
  return re.getNumber("WEBGL_VERSION") > 0;
}), re.registerFlag("WEBGL_VERSION", function() {
  return ws(2) ? 2 : ws(1) ? 1 : 0;
}), re.registerFlag("WEBGL_BUFFER_SUPPORTED", function() {
  return re.get("WEBGL_VERSION") === 2;
}), re.registerFlag("WEBGL_CPU_FORWARD", function() {
  return !0;
}), re.registerFlag("WEBGL_FORCE_F16_TEXTURES", function() {
  return !1;
}), re.registerFlag("WEBGL_PACK", function() {
  return re.getBool("HAS_WEBGL");
}), re.registerFlag("WEBGL_PACK_NORMALIZATION", function() {
  return re.getBool("WEBGL_PACK");
}), re.registerFlag("WEBGL_PACK_CLIP", function() {
  return re.getBool("WEBGL_PACK");
}), re.registerFlag("WEBGL_PACK_DEPTHWISECONV", function() {
  return !1;
}), re.registerFlag("WEBGL_PACK_BINARY_OPERATIONS", function() {
  return re.getBool("WEBGL_PACK");
}), re.registerFlag("WEBGL_PACK_UNARY_OPERATIONS", function() {
  return re.getBool("WEBGL_PACK");
}), re.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS", function() {
  return re.getBool("WEBGL_PACK");
}), re.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS", function() {
  return re.getBool("WEBGL_PACK");
}), re.registerFlag("WEBGL_PACK_REDUCE", function() {
  return re.getBool("WEBGL_PACK");
}), re.registerFlag("WEBGL_LAZILY_UNPACK", function() {
  return re.getBool("WEBGL_PACK");
}), re.registerFlag("WEBGL_CONV_IM2COL", function() {
  return re.getBool("WEBGL_PACK");
}), re.registerFlag("WEBGL_MAX_TEXTURE_SIZE", function() {
  return ch(re.getNumber("WEBGL_VERSION"));
}), re.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER", function() {
  return lh(re.getNumber("WEBGL_VERSION"));
}), re.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION", function() {
  var r = re.getNumber("WEBGL_VERSION");
  return r === 0 ? 0 : fh(r);
}), re.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE", function() {
  return re.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") > 0 && (r = navigator.userAgent || navigator.vendor || window.opera, !(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0, 4))));
  var r;
}), re.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE", function() {
  return hh(re.getNumber("WEBGL_VERSION"));
}), re.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED", function() {
  return !re.getBool("WEBGL_FORCE_F16_TEXTURES") && re.getBool("WEBGL_RENDER_FLOAT32_CAPABLE");
}), re.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED", function() {
  return ph(re.getNumber("WEBGL_VERSION"));
}), re.registerFlag("WEBGL_FENCE_API_ENABLED", function() {
  return dh(re.getNumber("WEBGL_VERSION"));
}), re.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM", function() {
  return re.getBool("WEBGL_RENDER_FLOAT32_ENABLED") ? 4 : 0;
}), Bu = Uu;
var Ge = A({ complex_: function(r, t) {
  var e = E(r, "real", "complex"), n = E(t, "imag", "complex");
  return xe(e.shape, n.shape, "real and imag shapes, " + e.shape + " and " + n.shape + ", must match in call to tf.complex()."), T.runKernelFunc(function(o) {
    return o.complex(e, n);
  }, { $real: e, $imag: n });
} }), mt = A({ real_: function(r) {
  var t = E(r, "input", "real");
  return T.runKernelFunc(function(e) {
    return e.real(t);
  }, { $input: t });
} }), Ft = A({ imag_: function(r) {
  var t = E(r, "input", "imag");
  return T.runKernelFunc(function(e) {
    return e.imag(t);
  }, { $input: t });
} });
function je(r, t, e) {
  return pn(r, t, hn(r, e), e);
}
function pn(r, t, e, n) {
  if (n == null && (n = wr(r)), n === "complex64") throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");
  if (!Ot(r) && !Array.isArray(r) && typeof r != "number" && typeof r != "boolean" && typeof r != "string") throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");
  if (t != null) {
    Ou(t);
    var o = J(t), a = J(e);
    _(o === a, function() {
      return "Based on the provided shape, [" + t + "], the tensor should have " + o + " values but has " + a;
    });
    for (var i = 0; i < e.length; ++i) {
      var s = e[i], u = i !== e.length - 1 || s !== J(t.slice(i));
      _(e[i] === t[i] || !u, function() {
        return "Error creating a new Tensor. Inferred shape (" + e + ") does not match the provided shape (" + t + "). ";
      });
    }
  }
  return Ot(r) || Array.isArray(r) || (r = [r]), t = t || e, r = n !== "string" ? Fu(r, n, M().getBool("DEBUG")) : Jn(r, [], !0), T.makeTensor(r, t, n);
}
function j(r, t) {
  if ((Ot(r) && t !== "string" || Array.isArray(r)) && t !== "complex64") throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");
  if (t === "string" && Ot(r) && !(r instanceof Uint8Array)) throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");
  return pn(r, [], [], t);
}
function Pe(r, t) {
  tr(r);
  var e = hn(r, t);
  if (e.length !== 1) throw new Error("tensor1d() requires values to be a flat/TypedArray");
  return pn(r, null, e, t);
}
function sn(r, t, e) {
  if (tr(r), t != null && t.length !== 2) throw new Error("tensor2d() requires shape to have two numbers");
  var n = hn(r, e);
  if (n.length !== 2 && n.length !== 1) throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");
  if (n.length === 1 && t == null) throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");
  return pn(r, t, n, e);
}
function ii(r, t, e) {
  if (tr(r), t != null && t.length !== 3) throw new Error("tensor3d() requires shape to have three numbers");
  var n = hn(r, e);
  if (n.length !== 3 && n.length !== 1) throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");
  if (n.length === 1 && t == null) throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");
  return pn(r, t, n, e);
}
function et(r, t, e) {
  if (tr(r), t != null && t.length !== 4) throw new Error("tensor4d() requires shape to have four numbers");
  var n = hn(r, e);
  if (n.length !== 4 && n.length !== 1) throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");
  if (n.length === 1 && t == null) throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");
  return pn(r, t, n, e);
}
function yh(r, t, e) {
  if (tr(r), t != null && t.length !== 5) throw new Error("tensor5d() requires shape to have five numbers");
  var n = hn(r, e);
  if (n.length !== 5 && n.length !== 1) throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");
  if (n.length === 1 && t == null) throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");
  return pn(r, t, n, e);
}
function bh(r, t, e) {
  if (tr(r), t != null && t.length !== 6) throw new Error("tensor6d() requires shape to have six numbers");
  var n = hn(r, e);
  if (n.length !== 6 && n.length !== 1) throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");
  if (n.length === 1 && t == null) throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");
  return pn(r, t = t || n, n, e);
}
function xh(r, t, e, n) {
  return t === void 0 && (t = !0), T.makeVariable(r, t, e, n);
}
function nr(r, t) {
  if (t === void 0 && (t = "float32"), t === "complex64") {
    var e = nr(r, "float32"), n = Ee(r, "float32");
    return Ge(e, n);
  }
  var o = Pu(J(r), t);
  return T.makeTensor(o, r, t);
}
function Ee(r, t) {
  if (t === void 0 && (t = "float32"), t === "complex64") {
    var e = Ee(r, "float32"), n = Ee(r, "float32");
    return Ge(e, n);
  }
  var o = Cr(J(r), t);
  return T.makeTensor(o, r, t);
}
function Bt(r, t, e) {
  return T.runKernelFunc(function(n) {
    return n.fill(r, t, e);
  }, {});
}
function wh(r, t, e) {
  if (e <= 0) throw new Error("The number of values should be positive.");
  return T.runKernelFunc(function(n) {
    return n.linspace(r, t, e);
  }, {});
}
function io(r, t, e, n) {
  if (e === void 0 && (e = 1), n === void 0 && (n = "float32"), e === 0) throw new Error("Cannot have a step of zero");
  if (r === t || r < t && e < 0 || t < r && e > 1) return Ee([0], n);
  var o = Cr(Math.abs(Math.ceil((t - r) / e)), n);
  t < r && e === 1 && (e = -1), o[0] = r;
  for (var a = 1; a < o.length; a++) o[a] = o[a - 1] + e;
  return Pe(o, n);
}
var Vu = A({ onesLike_: function(r) {
  var t = E(r, "x", "onesLike");
  if (t.dtype === "complex64") {
    var e = Vu(mt(t)), n = ge(Ft(t));
    return Ge(e, n);
  }
  return T.runKernelFunc(function(o) {
    return o.onesLike(t);
  }, { $x: t }, function(o, a) {
    return { $x: function() {
      return ge(o);
    } };
  });
} }), ge = A({ zerosLike_: function(r) {
  var t = E(r, "x", "zerosLike");
  return T.runKernelFunc(function(e) {
    return e.zerosLike(t);
  }, { $x: t }, function(e, n) {
    return { $x: function() {
      return ge(e);
    } };
  });
} }), Me = A({ concat_: function(r, t) {
  t === void 0 && (t = 0), _(r.length >= 1, function() {
    return "Pass at least one tensor to concat";
  });
  var e = ao(r, "tensors", "concat");
  e[0].dtype === "complex64" && e.forEach(function(s) {
    if (s.dtype !== "complex64") throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ` + s.dtype + ". ");
  }), t = Ue(t, e[0].shape)[0];
  var n = Zn(e.map(function(s) {
    return s.shape;
  }), t);
  if (J(n) === 0) return je([], n);
  if ((e = e.filter(function(s) {
    return s.size > 0;
  })).length === 1) return e[0];
  var o = e.map(function(s) {
    return s.shape;
  });
  gh(o, t);
  var a = e, i = { axis: t };
  return T.runKernelFunc(function(s) {
    return s.concat(e, t);
  }, a, function(s) {
    var u = o.map(function(c) {
      return c[t];
    });
    return si(s, u, t).map(function(c) {
      return function() {
        return c;
      };
    });
  }, "Concat", i);
} }), Ch = A({ concat1d_: function(r) {
  return Me(r, 0);
} }), Eh = A({ concat2d_: function(r, t) {
  return Me(r, t);
} }), _h = A({ concat3d_: function(r, t) {
  return Me(r, t);
} }), Rh = A({ concat4d_: function(r, t) {
  return Me(r, t);
} }), si = A({ split_: function(r, t, e) {
  e === void 0 && (e = 0);
  var n, o = E(r, "x", "split");
  return e = Ue(e, o.shape)[0], typeof t == "number" ? (_(o.shape[e] % t == 0, function() {
    return "Number of splits must evenly divide the axis.";
  }), n = new Array(t).fill(o.shape[e] / t)) : (_(o.shape[e] === t.reduce(function(a, i) {
    return a + i;
  }), function() {
    return "The sum of sizes must match the size of the axis dimension.";
  }), n = t), T.runKernelFunc(function(a) {
    return a.split(o, n, e);
  }, { $x: o }, function(a) {
    return { $x: function() {
      return Me(a, e);
    } };
  });
} });
function In(r, t) {
  return r(t = { exports: {} }, t.exports), t.exports;
}
var Sh = In(function(r) {
  (function(t, e, n) {
    function o(s) {
      var u, c = this, l = (u = 4022871197, function(f) {
        f = f.toString();
        for (var h = 0; h < f.length; h++) {
          var p = 0.02519603282416938 * (u += f.charCodeAt(h));
          p -= u = p >>> 0, u = (p *= u) >>> 0, u += 4294967296 * (p -= u);
        }
        return 23283064365386963e-26 * (u >>> 0);
      });
      c.next = function() {
        var f = 2091639 * c.s0 + 23283064365386963e-26 * c.c;
        return c.s0 = c.s1, c.s1 = c.s2, c.s2 = f - (c.c = 0 | f);
      }, c.c = 1, c.s0 = l(" "), c.s1 = l(" "), c.s2 = l(" "), c.s0 -= l(s), c.s0 < 0 && (c.s0 += 1), c.s1 -= l(s), c.s1 < 0 && (c.s1 += 1), c.s2 -= l(s), c.s2 < 0 && (c.s2 += 1), l = null;
    }
    function a(s, u) {
      return u.c = s.c, u.s0 = s.s0, u.s1 = s.s1, u.s2 = s.s2, u;
    }
    function i(s, u) {
      var c = new o(s), l = u && u.state, f = c.next;
      return f.int32 = function() {
        return 4294967296 * c.next() | 0;
      }, f.double = function() {
        return f() + 11102230246251565e-32 * (2097152 * f() | 0);
      }, f.quick = f, l && (typeof l == "object" && a(l, c), f.state = function() {
        return a(c, {});
      }), f;
    }
    e && e.exports ? e.exports = i : this.alea = i;
  })(0, r);
}), Ih = In(function(r) {
  (function(t, e, n) {
    function o(s) {
      var u = this, c = "";
      u.x = 0, u.y = 0, u.z = 0, u.w = 0, u.next = function() {
        var f = u.x ^ u.x << 11;
        return u.x = u.y, u.y = u.z, u.z = u.w, u.w ^= u.w >>> 19 ^ f ^ f >>> 8;
      }, s === (0 | s) ? u.x = s : c += s;
      for (var l = 0; l < c.length + 64; l++) u.x ^= 0 | c.charCodeAt(l), u.next();
    }
    function a(s, u) {
      return u.x = s.x, u.y = s.y, u.z = s.z, u.w = s.w, u;
    }
    function i(s, u) {
      var c = new o(s), l = u && u.state, f = function() {
        return (c.next() >>> 0) / 4294967296;
      };
      return f.double = function() {
        do
          var h = ((c.next() >>> 11) + (c.next() >>> 0) / 4294967296) / 2097152;
        while (h === 0);
        return h;
      }, f.int32 = c.next, f.quick = f, l && (typeof l == "object" && a(l, c), f.state = function() {
        return a(c, {});
      }), f;
    }
    e && e.exports ? e.exports = i : this.xor128 = i;
  })(0, r);
}), kh = In(function(r) {
  (function(t, e, n) {
    function o(s) {
      var u = this, c = "";
      u.next = function() {
        var f = u.x ^ u.x >>> 2;
        return u.x = u.y, u.y = u.z, u.z = u.w, u.w = u.v, (u.d = u.d + 362437 | 0) + (u.v = u.v ^ u.v << 4 ^ f ^ f << 1) | 0;
      }, u.x = 0, u.y = 0, u.z = 0, u.w = 0, u.v = 0, s === (0 | s) ? u.x = s : c += s;
      for (var l = 0; l < c.length + 64; l++) u.x ^= 0 | c.charCodeAt(l), l == c.length && (u.d = u.x << 10 ^ u.x >>> 4), u.next();
    }
    function a(s, u) {
      return u.x = s.x, u.y = s.y, u.z = s.z, u.w = s.w, u.v = s.v, u.d = s.d, u;
    }
    function i(s, u) {
      var c = new o(s), l = u && u.state, f = function() {
        return (c.next() >>> 0) / 4294967296;
      };
      return f.double = function() {
        do
          var h = ((c.next() >>> 11) + (c.next() >>> 0) / 4294967296) / 2097152;
        while (h === 0);
        return h;
      }, f.int32 = c.next, f.quick = f, l && (typeof l == "object" && a(l, c), f.state = function() {
        return a(c, {});
      }), f;
    }
    e && e.exports ? e.exports = i : this.xorwow = i;
  })(0, r);
}), Ah = In(function(r) {
  (function(t, e, n) {
    function o(s) {
      var u = this;
      u.next = function() {
        var c, l, f = u.x, h = u.i;
        return c = f[h], l = (c ^= c >>> 7) ^ c << 24, l ^= (c = f[h + 1 & 7]) ^ c >>> 10, l ^= (c = f[h + 3 & 7]) ^ c >>> 3, l ^= (c = f[h + 4 & 7]) ^ c << 7, c = f[h + 7 & 7], l ^= (c ^= c << 13) ^ c << 9, f[h] = l, u.i = h + 1 & 7, l;
      }, function(c, l) {
        var f, h = [];
        if (l === (0 | l)) h[0] = l;
        else for (l = "" + l, f = 0; f < l.length; ++f) h[7 & f] = h[7 & f] << 15 ^ l.charCodeAt(f) + h[f + 1 & 7] << 13;
        for (; h.length < 8; ) h.push(0);
        for (f = 0; f < 8 && h[f] === 0; ++f) ;
        for (f == 8 ? h[7] = -1 : h[f], c.x = h, c.i = 0, f = 256; f > 0; --f) c.next();
      }(u, s);
    }
    function a(s, u) {
      return u.x = s.x.slice(), u.i = s.i, u;
    }
    function i(s, u) {
      s == null && (s = +/* @__PURE__ */ new Date());
      var c = new o(s), l = u && u.state, f = function() {
        return (c.next() >>> 0) / 4294967296;
      };
      return f.double = function() {
        do
          var h = ((c.next() >>> 11) + (c.next() >>> 0) / 4294967296) / 2097152;
        while (h === 0);
        return h;
      }, f.int32 = c.next, f.quick = f, l && (l.x && a(l, c), f.state = function() {
        return a(c, {});
      }), f;
    }
    e && e.exports ? e.exports = i : this.xorshift7 = i;
  })(0, r);
}), Dh = In(function(r) {
  (function(t, e, n) {
    function o(s) {
      var u = this;
      u.next = function() {
        var c, l, f = u.w, h = u.X, p = u.i;
        return u.w = f = f + 1640531527 | 0, l = h[p + 34 & 127], c = h[p = p + 1 & 127], l ^= l << 13, c ^= c << 17, l ^= l >>> 15, c ^= c >>> 12, l = h[p] = l ^ c, u.i = p, l + (f ^ f >>> 16) | 0;
      }, function(c, l) {
        var f, h, p, d, m, v = [], g = 128;
        for (l === (0 | l) ? (h = l, l = null) : (l += "\0", h = 0, g = Math.max(g, l.length)), p = 0, d = -32; d < g; ++d) l && (h ^= l.charCodeAt((d + 32) % l.length)), d === 0 && (m = h), h ^= h << 10, h ^= h >>> 15, h ^= h << 4, h ^= h >>> 13, d >= 0 && (m = m + 1640531527 | 0, p = (f = v[127 & d] ^= h + m) == 0 ? p + 1 : 0);
        for (p >= 128 && (v[127 & (l && l.length || 0)] = -1), p = 127, d = 512; d > 0; --d) h = v[p + 34 & 127], f = v[p = p + 1 & 127], h ^= h << 13, f ^= f << 17, h ^= h >>> 15, f ^= f >>> 12, v[p] = h ^ f;
        c.w = m, c.X = v, c.i = p;
      }(u, s);
    }
    function a(s, u) {
      return u.i = s.i, u.w = s.w, u.X = s.X.slice(), u;
    }
    function i(s, u) {
      s == null && (s = +/* @__PURE__ */ new Date());
      var c = new o(s), l = u && u.state, f = function() {
        return (c.next() >>> 0) / 4294967296;
      };
      return f.double = function() {
        do
          var h = ((c.next() >>> 11) + (c.next() >>> 0) / 4294967296) / 2097152;
        while (h === 0);
        return h;
      }, f.int32 = c.next, f.quick = f, l && (l.X && a(l, c), f.state = function() {
        return a(c, {});
      }), f;
    }
    e && e.exports ? e.exports = i : this.xor4096 = i;
  })(0, r);
}), Th = In(function(r) {
  (function(t, e, n) {
    function o(s) {
      var u = this, c = "";
      u.next = function() {
        var f = u.b, h = u.c, p = u.d, d = u.a;
        return f = f << 25 ^ f >>> 7 ^ h, h = h - p | 0, p = p << 24 ^ p >>> 8 ^ d, d = d - f | 0, u.b = f = f << 20 ^ f >>> 12 ^ h, u.c = h = h - p | 0, u.d = p << 16 ^ h >>> 16 ^ d, u.a = d - f | 0;
      }, u.a = 0, u.b = 0, u.c = -1640531527, u.d = 1367130551, s === Math.floor(s) ? (u.a = s / 4294967296 | 0, u.b = 0 | s) : c += s;
      for (var l = 0; l < c.length + 20; l++) u.b ^= 0 | c.charCodeAt(l), u.next();
    }
    function a(s, u) {
      return u.a = s.a, u.b = s.b, u.c = s.c, u.d = s.d, u;
    }
    function i(s, u) {
      var c = new o(s), l = u && u.state, f = function() {
        return (c.next() >>> 0) / 4294967296;
      };
      return f.double = function() {
        do
          var h = ((c.next() >>> 11) + (c.next() >>> 0) / 4294967296) / 2097152;
        while (h === 0);
        return h;
      }, f.int32 = c.next, f.quick = f, l && (typeof l == "object" && a(l, c), f.state = function() {
        return a(c, {});
      }), f;
    }
    e && e.exports ? e.exports = i : this.tychei = i;
  })(0, r);
}), gn = In(function(r) {
  (function(t, e) {
    var n, o = this, a = 256, i = 6, s = "random", u = e.pow(a, i), c = e.pow(2, 52), l = 2 * c, f = a - 1;
    function h(g, y, x) {
      var b = [], w = m(function I(R, S) {
        var N, D = [], W = typeof R;
        if (S && W == "object") for (N in R) try {
          D.push(I(R[N], S - 1));
        } catch {
        }
        return D.length ? D : W == "string" ? R : R + "\0";
      }((y = y == 1 ? { entropy: !0 } : y || {}).entropy ? [g, v(t)] : g ?? function() {
        try {
          var I;
          return n && (I = n.randomBytes) ? I = I(a) : (I = new Uint8Array(a), (o.crypto || o.msCrypto).getRandomValues(I)), v(I);
        } catch {
          var R = o.navigator, S = R && R.plugins;
          return [+/* @__PURE__ */ new Date(), o, S, o.screen, v(t)];
        }
      }(), 3), b), C = new p(b), k = function() {
        for (var I = C.g(i), R = u, S = 0; I < c; ) I = (I + S) * a, R *= a, S = C.g(1);
        for (; I >= l; ) I /= 2, R /= 2, S >>>= 1;
        return (I + S) / R;
      };
      return k.int32 = function() {
        return 0 | C.g(4);
      }, k.quick = function() {
        return C.g(4) / 4294967296;
      }, k.double = k, m(v(C.S), t), (y.pass || x || function(I, R, S, N) {
        return N && (N.S && d(N, C), I.state = function() {
          return d(C, {});
        }), S ? (e[s] = I, R) : I;
      })(k, w, "global" in y ? y.global : this == e, y.state);
    }
    function p(g) {
      var y, x = g.length, b = this, w = 0, C = b.i = b.j = 0, k = b.S = [];
      for (x || (g = [x++]); w < a; ) k[w] = w++;
      for (w = 0; w < a; w++) k[w] = k[C = f & C + g[w % x] + (y = k[w])], k[C] = y;
      (b.g = function(I) {
        for (var R, S = 0, N = b.i, D = b.j, W = b.S; I--; ) R = W[N = f & N + 1], S = S * a + W[f & (W[N] = W[D = f & D + R]) + (W[D] = R)];
        return b.i = N, b.j = D, S;
      })(a);
    }
    function d(g, y) {
      return y.i = g.i, y.j = g.j, y.S = g.S.slice(), y;
    }
    function m(g, y) {
      for (var x, b = g + "", w = 0; w < b.length; ) y[f & w] = f & (x ^= 19 * y[f & w]) + b.charCodeAt(w++);
      return v(y);
    }
    function v(g) {
      return String.fromCharCode.apply(0, g);
    }
    if (e["seed" + s] = h, m(e.random(), t), r.exports) {
      r.exports = h;
      try {
        n = require("crypto");
      } catch {
      }
    }
  })([], Math);
});
gn.alea = Sh, gn.xor128 = Ih, gn.xorwow = kh, gn.xorshift7 = Ah, gn.xor4096 = Dh, gn.tychei = Th;
var So = gn.alea, ui = function() {
  function r(t, e, n, o, a) {
    this.mean = t, this.stdDev = e, this.dtype = n, this.nextVal = NaN, this.truncated = o, this.truncated && (this.upper = this.mean + 2 * this.stdDev, this.lower = this.mean - 2 * this.stdDev);
    var i = a || Math.random();
    this.random = So(i.toString());
  }
  return r.prototype.nextValue = function() {
    if (!isNaN(this.nextVal)) {
      var t = this.nextVal;
      return this.nextVal = NaN, t;
    }
    for (var e, n, o = !1; !o; ) {
      var a = void 0, i = void 0, s = void 0;
      do
        s = (a = 2 * this.random() - 1) * a + (i = 2 * this.random() - 1) * i;
      while (s >= 1 || s === 0);
      var u = Math.sqrt(-2 * Math.log(s) / s);
      e = this.mean + this.stdDev * a * u, n = this.mean + this.stdDev * i * u, this.truncated && !this.isValidTruncated(e) || (o = !0);
    }
    return this.truncated && !this.isValidTruncated(n) || (this.nextVal = this.convertValue(n)), this.convertValue(e);
  }, r.prototype.convertValue = function(t) {
    return this.dtype == null || this.dtype === "float32" ? t : Math.round(t);
  }, r.prototype.isValidTruncated = function(t) {
    return t <= this.upper && t >= this.lower;
  }, r;
}(), Nh = function() {
  function r(t, e, n, o) {
    this.alpha = t, this.beta = 1 / e, this.dtype = n;
    var a = o || Math.random();
    this.randu = So(a.toString()), this.randn = new ui(0, 1, n, !1, this.randu()), this.d = t < 1 ? t + 2 / 3 : t - 1 / 3, this.c = 1 / Math.sqrt(9 * this.d);
  }
  return r.prototype.nextValue = function() {
    for (var t, e, n, o, a, i; ; ) {
      do
        o = this.randn.nextValue(), i = 1 + this.c * o;
      while (i <= 0);
      if (i *= i * i, e = 1 - 0.331 * (t = o * o) * t, n = 0.5 * t + this.d * (1 - i + Math.log(i)), (a = this.randu()) < e || Math.log(a) < n) break;
    }
    return i = 1 / this.beta * this.d * i, this.alpha < 1 && (i *= Math.pow(this.randu(), 1 / this.alpha)), this.convertValue(i);
  }, r.prototype.convertValue = function(t) {
    return this.dtype === "float32" ? t : Math.round(t);
  }, r;
}(), Fh = function() {
  function r(t, e, n, o) {
    var a = this;
    if (t === void 0 && (t = 0), e === void 0 && (e = 1), this.canReturnFloat = function() {
      return a.dtype == null || a.dtype === "float32";
    }, this.min = t, this.range = e - t, this.dtype = n, o == null && (o = Math.random()), typeof o == "number" && (o = o.toString()), !this.canReturnFloat() && this.range <= 1) throw new Error("The difference between " + t + " - " + e + " <= 1 and dtype is not float");
    this.random = So(o);
  }
  return r.prototype.convertValue = function(t) {
    return this.canReturnFloat() ? t : Math.round(t);
  }, r.prototype.nextValue = function() {
    return this.convertValue(this.min + this.range * this.random());
  }, r;
}();
function ae(r, t, e) {
  return t === void 0 && (t = "float32"), t = t || "float32", Ou(r), new dr(r, t, e);
}
function Ph(r, t) {
  t === void 0 && (t = !1), console.log(r.toString(t));
}
var Hu = A({ batchToSpaceND_: function(r, t, e) {
  var n = E(r, "x", "batchToSpaceND"), o = t.reduce(function(a, i) {
    return a * i;
  });
  return _(n.rank >= 1 + t.length, function() {
    return "input rank is " + n.rank + " but should be > than blockShape.length " + t.length;
  }), _(e.length === t.length, function() {
    return "crops.length is " + e.length + " but should be equal to blockShape.length  " + t.length;
  }), _(n.shape[0] % o == 0, function() {
    return "input tensor batch is " + n.shape[0] + " but is not divisible by the product of the elements of blockShape " + t.join(" * ") + " === " + o;
  }), T.runKernelFunc(function(a) {
    return a.batchToSpaceND(n, t, e);
  }, { $x: n }, function(a) {
    return { $x: function() {
      return a.spaceToBatchND(t, e);
    } };
  });
} }), Oh = A({ broadcastTo_: function(r, t) {
  var e = E(r, "broadcastTo", "x"), n = e.shape;
  if (t.some(function(u) {
    return !(u > 0) || u % 1 != 0;
  })) throw new Error("broadcastTo(): Invalid broadcast shape [" + t + "].");
  if (t.length < e.rank) throw new Error("broadcastTo(): shape.length=" + t.length + " < input.rank=" + e.rank + ".");
  if (t.length > e.rank) {
    for (var o = e.shape.slice(); o.length < t.length; ) o.unshift(1);
    e = e.reshape(o);
  }
  for (var a = Array.from(t), i = t.length - 1; i >= 0; i--) if (e.shape[i] === t[i]) a[i] = 1;
  else if (e.shape[i] !== 1) throw new Error("broadcastTo(): [" + n + "] cannot be broadcast to [" + t + "].");
  var s = a.map(function(u, c) {
    return u > 1 ? c : -1;
  }).filter(function(u) {
    return u >= 0;
  });
  return s.length === 0 ? e.clone() : T.runKernelFunc(function(u) {
    return u.tile(e, a);
  }, { input: e }, function(u) {
    return { input: function() {
      return u.sum(s, !0);
    } };
  });
} }), Mh = A({ cast_: function(r, t) {
  var e = E(r, "x", "cast");
  if (!kf(t)) throw new Error("Failed to cast to unknown dtype " + t);
  if (t === "string" && e.dtype !== "string" || t !== "string" && e.dtype === "string") throw new Error("Only strings can be casted to strings");
  var n = { dtype: t };
  return T.runKernelFunc(function(o) {
    return o.cast(e, t);
  }, { x: e }, function(o) {
    return { x: function() {
      return o.clone();
    } };
  }, "Cast", n);
} }), Bh = A({ clone_: function(r) {
  var t = E(r, "x", "clone", null);
  return T.runKernelFunc(function() {
    return T.makeTensorFromDataId(t.dataId, t.shape, t.dtype);
  }, { $x: t }, function(e) {
    return { $x: function() {
      return e.toFloat();
    } };
  });
} }), Lh = A({ cumsum_: function(r, t, e, n) {
  t === void 0 && (t = 0), e === void 0 && (e = !1), n === void 0 && (n = !1);
  var o = E(r, "x", "cumsum"), a = Ut([t |= 0], o.rank), i = o;
  a != null && (i = o.transpose(a));
  var s = zt(1, o.rank)[0], u = T.runKernelFunc(function(c) {
    return c.cumsum(i, s, e, n);
  }, { permutedX: i }, function(c) {
    return { permutedX: function() {
      return c.cumsum(t, e, !n);
    } };
  });
  return a != null && (u = u.transpose(a)), u;
} }), Wh = A({ depthToSpace_: function(r, t, e) {
  e === void 0 && (e = "NHWC");
  var n = E(r, "x", "depthToSpace"), o = e === "NHWC" ? n.shape[1] : n.shape[2], a = e === "NHWC" ? n.shape[2] : n.shape[3], i = e === "NHWC" ? n.shape[3] : n.shape[1];
  return _(o * t >= 0, function() {
    return `Negative dimension size caused by overflow when multiplying
      ` + o + " and " + t + `  for depthToSpace with input shape
      ` + n.shape;
  }), _(a * t >= 0, function() {
    return `Negative dimension size caused by overflow when multiplying
      ` + a + " and " + t + ` for depthToSpace with input shape
          ` + n.shape;
  }), _(i % (t * t) == 0, function() {
    return "Dimension size must be evenly divisible by " + t * t + " but is " + i + " for depthToSpace with input shape " + n.shape;
  }), T.runKernelFunc(function(s) {
    return s.depthToSpace(n, t, e);
  }, { $x: n });
} }), vt = A({ expandDims_: function(r, t) {
  t === void 0 && (t = 0);
  var e = E(r, "x", "expandDims", null);
  _(t <= e.rank, function() {
    return "Axis must be <= rank of the tensor";
  });
  var n = e.shape.slice();
  return t < 0 && (_(-(e.rank + 1) <= t, function() {
    return "Axis must be in the interval [" + -(e.rank + 1) + ", " + e.rank + "]";
  }), t = e.rank + t + 1), n.splice(t, 0, 1), xt(e, n);
} }), Gu = A({ eye_: function(r, t, e, n) {
  n === void 0 && (n = "float32"), t == null && (t = r);
  for (var o = ae([r, t], n), a = r <= t ? r : t, i = 0; i < a; ++i) o.set(1, i, i);
  var s = o.toTensor().as2D(r, t);
  if (e == null) return s;
  if (e.length === 1) return Gn(vt(s, 0), [e[0], 1, 1]);
  if (e.length === 2) return Gn(vt(vt(s, 0), 0), [e[0], e[1], 1, 1]);
  if (e.length === 3) return Gn(vt(vt(vt(s, 0), 0), 0), [e[0], e[1], e[2], 1, 1]);
  throw new Error("eye() currently supports only 1D and 2D batchShapes, but received " + e.length + "D.");
} }), Uh = A({ multinomial_: function(r, t, e, n) {
  n === void 0 && (n = !1);
  var o = E(r, "logits", "multinomial"), a = o.size, i = o.rank;
  if (a < 2) throw new Error("Error in multinomial: you need at least 2 outcomes, but got " + a + ".");
  if (i > 2) throw new Error("Rank of probabilities must be 1 or 2, but is " + i);
  e = e || Math.random();
  var s = i === 1 ? o.as2D(1, -1) : o, u = T.runKernelFunc(function(c) {
    return c.multinomial(s, n, t, e);
  }, { logits2D: s });
  return i === 1 ? u.as1D() : u;
} }), La = A({ oneHot_: function(r, t, e, n) {
  if (e === void 0 && (e = 1), n === void 0 && (n = 0), t < 2) throw new Error("Error in oneHot: depth must be >=2, but it is " + t);
  var o = E(r, "indices", "oneHot", "int32"), a = o.shape.concat([t]);
  return o = o.flatten(), T.runKernelFunc(function(i) {
    return i.oneHot(o, t, e, n);
  }, { $indices: o }, function(i) {
    return { $indices: function() {
      return Ee(o.shape, "float32");
    } };
  }).reshape(a);
} }), kn = A({ pad_: function(r, t, e) {
  e === void 0 && (e = 0);
  var n = E(r, "x", "pad");
  if (n.rank === 0) throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");
  var o = { paddings: t, constantValue: e };
  return T.runKernelFunc(function(a) {
    return a.pad(n, t, e);
  }, { x: n }, function(a) {
    var i = t.map(function(s) {
      return s[0];
    });
    return { x: function() {
      return a.slice(i, n.shape);
    } };
  }, "PadV2", o);
} }), zh = A({ pad1d_: function(r, t, e) {
  return e === void 0 && (e = 0), _(t.length === 2, function() {
    return "Invalid number of paddings. Must be length of 2.";
  }), kn(r, [t], e);
} }), Vh = A({ pad2d_: function(r, t, e) {
  return e === void 0 && (e = 0), _(t.length === 2 && t[0].length === 2 && t[1].length === 2, function() {
    return "Invalid number of paddings. Must be length of 2 each.";
  }), kn(r, t, e);
} }), Hh = A({ pad3d_: function(r, t, e) {
  return e === void 0 && (e = 0), _(t.length === 3 && t[0].length === 2 && t[1].length === 2 && t[2].length === 2, function() {
    return "Invalid number of paddings. Must be length of 2 each.";
  }), kn(r, t, e);
} }), Gh = A({ pad4d_: function(r, t, e) {
  return e === void 0 && (e = 0), _(t.length === 4 && t[0].length === 2 && t[1].length === 2 && t[2].length === 2 && t[3].length === 2, function() {
    return "Invalid number of paddings. Must be length of 2 each.";
  }), kn(r, t, e);
} }), qh = A({ rand_: function(r, t, e) {
  var n = J(r), o = null;
  if (e == null || e === "float32") o = new Float32Array(n);
  else if (e === "int32") o = new Int32Array(n);
  else {
    if (e !== "bool") throw new Error("Unknown data type " + e);
    o = new Uint8Array(n);
  }
  for (var a = 0; a < n; a++) o[a] = t();
  return T.makeTensor(o, r, e);
} }), jh = A({ randomNormal_: function(r, t, e, n, o) {
  if (t === void 0 && (t = 0), e === void 0 && (e = 1), n != null && n === "bool") throw new Error("Unsupported data type " + n);
  for (var a = new ui(t, e, n, !1, o), i = ae(r, n), s = 0; s < i.values.length; s++) i.values[s] = a.nextValue();
  return i.toTensor();
} }), Kh = A({ randomGamma_: function(r, t, e, n, o) {
  if (e === void 0 && (e = 1), n === void 0 && (n = "float32"), e == null && (e = 1), n == null && (n = "float32"), n !== "float32" && n !== "int32") throw new Error("Unsupported data type " + n);
  for (var a = new Nh(t, e, n, o), i = ae(r, n), s = 0; s < i.values.length; s++) i.values[s] = a.nextValue();
  return i.toTensor();
} }), qu = A({ randomUniform_: function(r, t, e, n, o) {
  t === void 0 && (t = 0), e === void 0 && (e = 1), n === void 0 && (n = "float32");
  for (var a = ae(r, n), i = new Fh(t, e, null, o), s = 0; s < a.values.length; s++) a.values[s] = i.nextValue();
  return a.toTensor();
} }), xt = A({ reshape_: function(r, t) {
  var e = E(r, "x", "reshape", null);
  t = Sf(t, e.size), _(e.size === J(t), function() {
    return "new shape and old shape must have the same number of elements.";
  });
  var n = { shape: t };
  return T.runKernelFunc(function(o) {
    return o.reshape(e, t);
  }, { x: e }, function(o) {
    return { x: function() {
      return o.reshape(e.shape);
    } };
  }, "Reshape", n);
} }), ju = A({ spaceToBatchND_: function(r, t, e) {
  var n = E(r, "x", "spaceToBatchND");
  return _(n.rank >= 1 + t.length, function() {
    return "input rank " + n.rank + " should be > than [blockShape] " + t.length;
  }), _(e.length === t.length, function() {
    return "paddings.shape[0] " + e.length + " must be equal to [blockShape] " + t.length;
  }), _(n.shape.reduce(function(o, a, i) {
    return i > 0 && i <= t.length ? o && (a + e[i - 1][0] + e[i - 1][1]) % t[i - 1] == 0 : o;
  }, !0), function() {
    return "input spatial dimensions " + n.shape.slice(1) + " with paddings " + e.toString() + " must be divisible by blockShapes " + t.toString();
  }), T.runKernelFunc(function(o) {
    return o.spaceToBatchND(n, t, e);
  }, { $x: n }, function(o) {
    return { $x: function() {
      return o.batchToSpaceND(t, e);
    } };
  });
} }), Ku = A({ squeeze_: function(r, t) {
  var e = E(r, "x", "squeeze");
  return xt(e, yn(e.shape, t).newShape);
} }), dt = A({ stack_: function(r, t) {
  t === void 0 && (t = 0);
  var e = ao(r, "tensors", "stack");
  if (_(e.length >= 1, function() {
    return "Pass at least one tensor to tf.stack";
  }), e.length === 1) return e[0].expandDims(t);
  var n = e[0].rank, o = e[0].shape, a = e[0].dtype;
  _(t <= n, function() {
    return "Axis must be <= rank of the tensor";
  }), e.forEach(function(s) {
    xe(o, s.shape, "All tensors passed to stack must have matching shapes");
  }), e.forEach(function(s) {
    _(a === s.dtype, function() {
      return "All tensors passed to stack must have matching dtypes";
    });
  });
  var i = e.map(function(s) {
    return s.expandDims(t);
  });
  return Me(i, t);
} }), Gn = A({ tile_: function(r, t) {
  var e = E(r, "x", "tile", null);
  _(e.rank === t.length, function() {
    return "Error in transpose: rank of input " + e.rank + " must match length of reps " + t + ".";
  });
  var n = [e], o = { reps: t };
  return T.runKernelFunc(function(a, i) {
    var s = a.tile(e, t);
    return i([e]), s;
  }, { x: e }, function(a, i) {
    var s = i[0];
    return { x: function() {
      var u = ge(s);
      if (s.rank === 1) for (var c = 0; c < t[0]; ++c) u = u.add(a.slice([c * s.shape[0]], [s.shape[0]]));
      else if (s.rank === 2) for (c = 0; c < t[0]; ++c) for (var l = 0; l < t[1]; ++l) u = u.add(a.slice([c * s.shape[0], l * s.shape[1]], [s.shape[0], s.shape[1]]));
      else if (s.rank === 3) for (c = 0; c < t[0]; ++c) for (l = 0; l < t[1]; ++l) for (var f = 0; f < t[2]; ++f) u = u.add(a.slice([c * s.shape[0], l * s.shape[1], f * s.shape[2]], [s.shape[0], s.shape[1], s.shape[2]]));
      else {
        if (s.rank !== 4) throw new Error("Gradient for tile operation is not implemented for rank-" + s.rank + " tensors yet.");
        for (c = 0; c < t[0]; ++c) for (l = 0; l < t[1]; ++l) for (f = 0; f < t[2]; ++f) for (var h = 0; h < t[3]; ++h) u = u.add(a.slice([c * s.shape[0], l * s.shape[1], f * s.shape[2], h * s.shape[3]], [s.shape[0], s.shape[1], s.shape[2], s.shape[3]]));
      }
      return u;
    } };
  }, "Tile", o, n);
} }), Xh = A({ truncatedNormal_: function(r, t, e, n, o) {
  if (t === void 0 && (t = 0), e === void 0 && (e = 1), n != null && n === "bool") throw new Error("Unsupported data type " + n);
  for (var a = new ui(t, e, n, !0, o), i = ae(r, n), s = 0; s < i.values.length; s++) i.values[s] = a.nextValue();
  return i.toTensor();
} }), Be = A({ unstack_: function(r, t) {
  t === void 0 && (t = 0), t = t || 0;
  var e = E(r, "x", "unstack");
  _(t >= -e.shape.length && t < e.shape.length, function() {
    return "Axis = " + t + " is not in [-" + e.shape.length + ", " + e.shape.length + ")";
  }), t < 0 && (t += e.shape.length);
  var n = { axis: t };
  return T.runKernelFunc(function(o) {
    return o.unstack(e, t);
  }, { x: e }, function(o) {
    return { x: function() {
      return dt(o, t);
    } };
  }, "Unpack", n);
} }), $h = function(r, t) {
  return $(this, void 0, void 0, function() {
    var e, n, o, a, i, s, u, c, l, f;
    return Y(this, function(h) {
      switch (h.label) {
        case 0:
          return e = E(r, "x", "setdiff1d"), n = E(t, "y", "setdiff1d"), _(e.dtype === n.dtype, function() {
            return "x and y should have the same dtype, but got x (" + e.dtype + ") and y (" + n.dtype + ").";
          }), _(e.rank === 1, function() {
            return "x should be 1D tensor, but got x (" + e.shape + ").";
          }), _(n.rank === 1, function() {
            return "y should be 1D tensor, but got y (" + n.shape + ").";
          }), [4, e.data()];
        case 1:
          return o = h.sent(), [4, n.data()];
        case 2:
          for (a = h.sent(), i = new Set(a), s = 0, l = 0; l < o.length; l++) i.has(o[l]) || s++;
          for (u = new dr([s], e.dtype), c = new dr([s], "int32"), l = 0, f = 0; l < o.length; l++) i.has(o[l]) || (u.values[f] = o[l], c.values[f] = l, f++);
          return [2, [u.toTensor(), c.toTensor()]];
      }
    });
  });
};
function so(r, t, e, n) {
  n === void 0 && (n = !0);
  var o = [];
  if (n) (o = o.concat(t.slice(0))).push(r[0] / e), o = o.concat(r.slice(1));
  else {
    o = o.concat(r[0]);
    for (var a = t.length, i = 0; i < a; ++i) o = o.concat([r[i + 1] / t[i], t[i]]);
    o = o.concat(r.slice(a + 1));
  }
  return o;
}
function uo(r, t, e) {
  e === void 0 && (e = !0);
  var n = [];
  if (e) {
    n.push(t);
    for (var o = t + 1; o < r; ++o) o <= 2 * t ? (n.push(o), n.push(o - (t + 1))) : n.push(o);
  } else {
    var a = [], i = [];
    for (o = 1; o < r; ++o) o >= 2 * t + 1 || o % 2 == 1 ? i.push(o) : a.push(o);
    n.push.apply(n, a), n.push(0), n.push.apply(n, i);
  }
  return n;
}
function co(r, t, e, n) {
  n === void 0 && (n = !0);
  var o = [];
  n ? o.push(r[0] / e) : o.push(r[0] * e);
  for (var a = 1; a < r.length; ++a) a <= t.length ? n ? o.push(t[a - 1] * r[a]) : o.push(r[a] / t[a - 1]) : o.push(r[a]);
  return o;
}
function Xu(r, t) {
  for (var e = [0], n = 0; n < t; ++n) e.push(r[n][0]);
  return e;
}
function $u(r, t, e) {
  for (var n = r.slice(0, 1), o = 0; o < e; ++o) n.push(r[o + 1] - t[o][0] - t[o][1]);
  return n;
}
function Yu(r, t) {
  if (r.rank < 1) throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was " + r.rank + ".");
  if (t.rank < 1) throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was " + t.rank + ".");
  if (t.dtype !== "int32") throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was " + t.dtype + ".");
  if (t.shape[t.rank - 1] > r.rank) throw new Error("index innermost dimension length must be <= tensor rank; saw: " + t.shape[t.rank - 1] + " vs. " + r.rank);
  if (r.size === 0) throw new Error("Requested more than 0 entries, but input is empty. Input shape: " + r.shape + ".");
  for (var e = t.shape, n = e[e.length - 1], o = 1, a = 0; a < e.length - 1; ++a) o *= e[a];
  var i = r.shape, s = e.slice();
  s.pop();
  var u = 1;
  for (a = n; a < r.rank; ++a) u *= i[a], s.push(i[a]);
  var c = Mt(r.shape).map(function(l) {
    return l / u;
  }).concat([1]).slice(0, n);
  return [s, o, u, c];
}
var Ju = 30;
function sa(r) {
  return r <= Ju ? r : Na(r, Math.floor(Math.sqrt(r)));
}
function Yh(r, t, e) {
  var n = t.rank > 1 ? t.shape[t.rank - 1] : 1, o = t.rank > 1 ? t.rank - 1 : 1, a = "Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: " + e.shape + ", indices.shape: " + t.shape + ", shape: " + r + ", sliceDim: " + n + ", and batchDim: " + o + ".";
  if (e.rank < o) throw new Error(a + " update.rank < " + o + ". ");
  if (r.length < n + (e.rank - o)) throw new Error(a + " Output shape length < " + (n + (e.rank - o)));
  if (e.rank !== o + r.length - n) throw new Error(a + " update.rank != " + (o + r.length - n));
  for (var i = 0; i < o; ++i) if (e.shape[i] !== t.shape[i]) throw new Error(a + " updates.shape[" + i + "] (" + e.shape[i] + ") != indices.shape[" + i + "] (" + t.shape[i] + ").");
  for (i = 0; i < e.rank - o; ++i) if (e.shape[i + o] !== r[i + n]) throw new Error(a + " updates.shape[" + (i + o) + "] (" + e.shape[i + o] + ") != shape[" + (i + o) + "] (" + r[i + o] + ")");
}
function Jh(r, t, e) {
  if (t.rank < 1) throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was " + t.rank + ".");
  if (r.rank < 1) throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was " + r.rank + ".");
  if (t.dtype !== "int32") throw new Error("The dtype of 'indices' should be int32, but got dtype: " + t.dtype);
  if (e.length < 1) throw new Error("Output rank must be greater or equal to 1, but got shape: " + e);
  if (e.length === 0) {
    if (t.size === 0) throw new Error("Indices specified for empty output. indices shape: " + t.shape);
    if (r.size === 0) throw new Error("Updates specified for empty output. updates shape: " + r.shape);
  }
  Yh(e, t, r);
}
function lo(r, t, e) {
  for (var n = t.shape.length, o = n > 1 ? t.shape[n - 1] : 1, a = e.length, i = 1, s = o; s < a; ++s) i *= e[s];
  var u = o < 1 ? 1 : o;
  return { sliceRank: o, numUpdates: J(t.shape) / u, sliceSize: i, strides: Mt(e.slice(0, o)).concat([1]), outputSize: J(e) };
}
function Qh(r, t, e) {
  _(r.rank === t.length, function() {
    return "Error in slice" + r.rank + "D: Length of begin " + t + " must match the rank of the array (" + r.rank + ").";
  }), _(r.rank === e.length, function() {
    return "Error in slice" + r.rank + "D: Length of size " + e + " must match the rank of the array (" + r.rank + ").";
  });
  for (var n = function(a) {
    _(t[a] + e[a] <= r.shape[a], function() {
      return "Error in slice" + r.rank + "D: begin[" + a + "] + size[" + a + "] (" + (t[a] + e[a]) + ") would overflow input.shape[" + a + "] (" + r.shape[a] + ")";
    });
  }, o = 0; o < r.rank; ++o) n(o);
}
function Es(r) {
  for (var t = [], e = 0; r > 0; ) 1 & r && t.push(e), r /= 2, e++;
  return t;
}
function ci(r, t, e) {
  for (var n = [], o = 0; o < r.length; o++) n[o] = Math.ceil((t[o] - r[o]) / e[o]);
  return n;
}
function Zh(r, t, e, n, o) {
  var a = t[o], i = e[o] || 1;
  (r & 1 << o || a == null) && (a = i > 0 ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER);
  var s = n[o];
  return a < 0 && (a += s), a = Aa(0, a, s - 1);
}
function ep(r, t, e, n, o) {
  var a = t[o], i = e[o] || 1;
  (r & 1 << o || a == null) && (a = i > 0 ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
  var s = n[o];
  return a < 0 && (a += s), a = i > 0 ? Aa(0, a, s) : Aa(-1, a, s - 1);
}
function Qu(r, t, e) {
  for (var n = e.length, o = 0; o < e.length; o++) if (e[o] > 1) {
    n = o;
    break;
  }
  for (o = n + 1; o < e.length; o++) if (t[o] > 0 || e[o] !== r[o]) return !1;
  return !0;
}
function Zu(r, t) {
  for (var e = r.length > 0 ? r[r.length - 1] : 1, n = 0; n < r.length - 1; n++) e += r[n] * t[n];
  return e;
}
function tp(r, t) {
  _(Ta(r), function() {
    return "The f passed in variableGrads(f) must be a function";
  }), _(t == null || Array.isArray(t) && t.every(function(l) {
    return l instanceof Qn;
  }), function() {
    return "The varList passed in variableGrads(f, varList) must be an array of variables";
  });
  var e = t != null;
  if (!e) for (var n in t = [], T.registeredVariables) t.push(T.registeredVariables[n]);
  var o = e ? t.filter(function(l) {
    return !l.trainable;
  }) : null, a = t.length;
  _((t = t.filter(function(l) {
    return l.trainable;
  })).length > 0, function() {
    return "variableGrads() expects at least one of the input variables to be trainable, but none of the " + a + " variables is trainable.";
  });
  var i = T.gradients(r, t, null, !0), s = i.value, u = i.grads;
  _(u.some(function(l) {
    return l != null;
  }), function() {
    return "Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().";
  }), _(s.rank === 0, function() {
    return "The f passed in variableGrads(f) must return a scalar, but it returned a rank-" + s.rank + " tensor";
  });
  var c = {};
  return t.forEach(function(l, f) {
    u[f] != null && (c[l.name] = u[f]);
  }), o != null && o.forEach(function(l) {
    return c[l.name] = null;
  }), { value: s, grads: c };
}
function Io(r) {
  return T.customGrad(r);
}
var Yt = A({ softmax_: function(r, t) {
  t === void 0 && (t = -1);
  var e = E(r, "logits", "softmax", "float32");
  if (t === -1 && (t = e.rank - 1), t !== e.rank - 1) throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank " + e.rank + " and dim was " + t);
  return T.runKernelFunc(function(n, o) {
    var a = n.softmax(e, t);
    return o([a]), a;
  }, { logits: e }, function(n, o) {
    var a = o[0], i = n.mul(a);
    return { logits: function() {
      return i.sub(i.sum([t], !0).mul(a));
    } };
  }, "Softmax", { dim: t }, [], [!0]);
} }), np = A({ logSoftmax_: function(r, t) {
  t === void 0 && (t = -1);
  var e = E(r, "logits", "logSoftmax");
  if (t === -1 && (t = e.rank - 1), t !== e.rank - 1) throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank " + e.rank + " and axis was " + t);
  return Io(function(n, o) {
    var a = n.max(t, !0), i = n.sub(a), s = i.toFloat().sub(i.exp().sum(t, !0).log());
    return o([s]), { value: s, gradFunc: function(u, c) {
      var l = c[0].exp();
      return u.sub(u.sum(t, !0).mul(l));
    } };
  })(e);
} }), ec = function() {
  function r(t, e) {
    this.backend = t, this.dataMover = e, this.data = /* @__PURE__ */ new WeakMap(), this.dataIdsCount = 0;
  }
  return r.prototype.get = function(t) {
    return this.data.has(t) || this.dataMover.moveData(this.backend, t), this.data.get(t);
  }, r.prototype.set = function(t, e) {
    this.dataIdsCount++, this.data.set(t, e);
  }, r.prototype.has = function(t) {
    return this.data.has(t);
  }, r.prototype.delete = function(t) {
    return this.dataIdsCount--, this.data.delete(t);
  }, r.prototype.numDataIds = function() {
    return this.dataIdsCount;
  }, r;
}(), tc = function() {
  function r() {
  }
  return r.prototype.time = function(t) {
    return F("time");
  }, r.prototype.read = function(t) {
    return F("read");
  }, r.prototype.readSync = function(t) {
    return F("readSync");
  }, r.prototype.numDataIds = function() {
    return F("numDataIds");
  }, r.prototype.disposeData = function(t) {
    return F("disposeData");
  }, r.prototype.write = function(t, e, n) {
    return F("write");
  }, r.prototype.move = function(t, e, n, o) {
    return F("move");
  }, r.prototype.memory = function() {
    return F("memory");
  }, r.prototype.floatPrecision = function() {
    return F("floatPrecision");
  }, r.prototype.epsilon = function() {
    return this.floatPrecision() === 32 ? 1e-7 : 1e-4;
  }, r.prototype.batchMatMul = function(t, e, n, o) {
    return F("batchMatMul");
  }, r.prototype.fusedBatchMatMul = function(t) {
    return t.a, t.b, t.transposeA, t.transposeB, t.bias, t.activation, t.preluActivationWeights, F("fusedBatchMatMul");
  }, r.prototype.slice = function(t, e, n) {
    return F("slice");
  }, r.prototype.stridedSlice = function(t, e, n, o) {
    return F("stridedSlice");
  }, r.prototype.unstack = function(t, e) {
    return F("unstack");
  }, r.prototype.reverse = function(t, e) {
    return F("reverse");
  }, r.prototype.concat = function(t, e) {
    return F("concat");
  }, r.prototype.neg = function(t) {
    return F("neg");
  }, r.prototype.add = function(t, e) {
    return F("add");
  }, r.prototype.addN = function(t) {
    return F("addN");
  }, r.prototype.subtract = function(t, e) {
    return F("subtract");
  }, r.prototype.multiply = function(t, e) {
    return F("multiply");
  }, r.prototype.realDivide = function(t, e) {
    return F("realDivide");
  }, r.prototype.floorDiv = function(t, e) {
    return F("floorDiv");
  }, r.prototype.sum = function(t, e) {
    return F("sum");
  }, r.prototype.prod = function(t, e) {
    return F("prod");
  }, r.prototype.unsortedSegmentSum = function(t, e, n) {
    return F("unsortedSegmentSum");
  }, r.prototype.argMin = function(t, e) {
    return F("argMin");
  }, r.prototype.argMax = function(t, e) {
    return F("argMax");
  }, r.prototype.equal = function(t, e) {
    return F("equal");
  }, r.prototype.notEqual = function(t, e) {
    return F("notEqual");
  }, r.prototype.less = function(t, e) {
    return F("less");
  }, r.prototype.lessEqual = function(t, e) {
    return F("lessEqual");
  }, r.prototype.greater = function(t, e) {
    return F("greater");
  }, r.prototype.greaterEqual = function(t, e) {
    return F("greaterEqual");
  }, r.prototype.logicalNot = function(t) {
    return F("logicalNot");
  }, r.prototype.logicalAnd = function(t, e) {
    return F("logicalAnd");
  }, r.prototype.logicalOr = function(t, e) {
    return F("logicalOr");
  }, r.prototype.where = function(t) {
    return F("where");
  }, r.prototype.select = function(t, e, n) {
    return F("select");
  }, r.prototype.topk = function(t, e, n) {
    return F("topk");
  }, r.prototype.min = function(t, e) {
    return F("min");
  }, r.prototype.minimum = function(t, e) {
    return F("minimum");
  }, r.prototype.mod = function(t, e) {
    return F("mod");
  }, r.prototype.max = function(t, e) {
    return F("max");
  }, r.prototype.maximum = function(t, e) {
    return F("maximum");
  }, r.prototype.all = function(t, e) {
    return F("all");
  }, r.prototype.any = function(t, e) {
    return F("any");
  }, r.prototype.squaredDifference = function(t, e) {
    return F("squaredDifference");
  }, r.prototype.ceil = function(t) {
    return F("ceil");
  }, r.prototype.floor = function(t) {
    return F("floor");
  }, r.prototype.round = function(t) {
    return F("round");
  }, r.prototype.sign = function(t) {
    return F("sign");
  }, r.prototype.isNaN = function(t) {
    return F("isNaN");
  }, r.prototype.isInf = function(t) {
    return F("isInf");
  }, r.prototype.isFinite = function(t) {
    return F("isFinite");
  }, r.prototype.pow = function(t, e) {
    return F("pow");
  }, r.prototype.exp = function(t) {
    return F("exp");
  }, r.prototype.expm1 = function(t) {
    return F("expm1");
  }, r.prototype.softmax = function(t, e) {
    return F("softmax");
  }, r.prototype.log = function(t) {
    return F("log");
  }, r.prototype.log1p = function(t) {
    return F("log1p");
  }, r.prototype.sqrt = function(t) {
    return F("sqrt");
  }, r.prototype.rsqrt = function(t) {
    return F("rsqrt");
  }, r.prototype.square = function(t) {
    return F("square");
  }, r.prototype.reciprocal = function(t) {
    return F("reciprocal");
  }, r.prototype.relu = function(t) {
    return F("relu");
  }, r.prototype.relu6 = function(t) {
    return F("relu6");
  }, r.prototype.prelu = function(t, e) {
    return F("prelu");
  }, r.prototype.elu = function(t) {
    return F("elu");
  }, r.prototype.eluDer = function(t, e) {
    return F("eluDer");
  }, r.prototype.selu = function(t) {
    return F("selu");
  }, r.prototype.int = function(t) {
    return F("int");
  }, r.prototype.clip = function(t, e, n) {
    return F("clip");
  }, r.prototype.abs = function(t) {
    return F("abs");
  }, r.prototype.complexAbs = function(t) {
    return F("complexAbs");
  }, r.prototype.sigmoid = function(t) {
    return F("sigmoid");
  }, r.prototype.softplus = function(t) {
    return F("softplus");
  }, r.prototype.sin = function(t) {
    return F("sin");
  }, r.prototype.cos = function(t) {
    return F("cos");
  }, r.prototype.tan = function(t) {
    return F("tan");
  }, r.prototype.asin = function(t) {
    return F("asin");
  }, r.prototype.acos = function(t) {
    return F("acos");
  }, r.prototype.atan = function(t) {
    return F("atan");
  }, r.prototype.atan2 = function(t, e) {
    return F("atan2");
  }, r.prototype.sinh = function(t) {
    return F("sinh");
  }, r.prototype.cosh = function(t) {
    return F("cosh");
  }, r.prototype.tanh = function(t) {
    return F("tanh");
  }, r.prototype.asinh = function(t) {
    return F("asinh");
  }, r.prototype.acosh = function(t) {
    return F("acosh");
  }, r.prototype.atanh = function(t) {
    return F("atanh");
  }, r.prototype.erf = function(t) {
    return F("erf");
  }, r.prototype.step = function(t, e) {
    return F("step");
  }, r.prototype.fusedConv2d = function(t) {
    return t.input, t.filter, t.convInfo, t.bias, t.activation, t.preluActivationWeights, F("fusedConv2d");
  }, r.prototype.conv2d = function(t, e, n) {
    return F("conv2d");
  }, r.prototype.conv2dDerInput = function(t, e, n) {
    return F("conv2dDerInput");
  }, r.prototype.conv2dDerFilter = function(t, e, n) {
    return F("conv2dDerFilter");
  }, r.prototype.fusedDepthwiseConv2D = function(t) {
    return t.input, t.filter, t.convInfo, t.bias, t.activation, t.preluActivationWeights, F("fusedDepthwiseConv2D");
  }, r.prototype.depthwiseConv2D = function(t, e, n) {
    return F("depthwiseConv2D");
  }, r.prototype.depthwiseConv2DDerInput = function(t, e, n) {
    return F("depthwiseConv2DDerInput");
  }, r.prototype.depthwiseConv2DDerFilter = function(t, e, n) {
    return F("depthwiseConv2DDerFilter");
  }, r.prototype.conv3d = function(t, e, n) {
    return F("conv3d");
  }, r.prototype.conv3dDerInput = function(t, e, n) {
    return F("conv3dDerInput");
  }, r.prototype.conv3dDerFilter = function(t, e, n) {
    return F("conv3dDerFilter");
  }, r.prototype.maxPool = function(t, e) {
    return F("maxPool");
  }, r.prototype.maxPoolBackprop = function(t, e, n, o) {
    return F("maxPoolBackprop");
  }, r.prototype.avgPool = function(t, e) {
    return F("avgPool");
  }, r.prototype.avgPoolBackprop = function(t, e, n) {
    return F("avgPoolBackprop");
  }, r.prototype.avgPool3d = function(t, e) {
    return F("avgPool3d");
  }, r.prototype.avgPool3dBackprop = function(t, e, n) {
    return F("avgPool3dBackprop");
  }, r.prototype.maxPool3d = function(t, e) {
    return F("maxPool3d");
  }, r.prototype.maxPool3dBackprop = function(t, e, n, o) {
    return F("maxPool3dBackprop");
  }, r.prototype.reshape = function(t, e) {
    return F("reshape");
  }, r.prototype.cast = function(t, e) {
    return F("cast");
  }, r.prototype.tile = function(t, e) {
    return F("tile");
  }, r.prototype.pad = function(t, e, n) {
    return F("pad");
  }, r.prototype.transpose = function(t, e) {
    return F("transpose");
  }, r.prototype.gather = function(t, e, n) {
    return F("gather");
  }, r.prototype.gatherND = function(t, e) {
    return F("gatherND");
  }, r.prototype.scatterND = function(t, e, n) {
    return F("scatterND");
  }, r.prototype.batchToSpaceND = function(t, e, n) {
    return F("batchToSpaceND");
  }, r.prototype.spaceToBatchND = function(t, e, n) {
    return F("spaceToBatchND");
  }, r.prototype.resizeBilinear = function(t, e, n, o) {
    return F("resizeBilinear");
  }, r.prototype.resizeBilinearBackprop = function(t, e, n) {
    return F("resizeBilinearBackprop");
  }, r.prototype.resizeNearestNeighbor = function(t, e, n, o) {
    return F("resizeNearestNeighbor");
  }, r.prototype.resizeNearestNeighborBackprop = function(t, e, n) {
    return F("resizeNearestNeighborBackprop");
  }, r.prototype.batchNormalization = function(t, e, n, o, a, i) {
    return F("batchNormalization");
  }, r.prototype.localResponseNormalization4D = function(t, e, n, o, a) {
    return F("localResponseNormalization4D");
  }, r.prototype.LRNGrad = function(t, e, n, o, a, i, s) {
    return F("LRNGrad");
  }, r.prototype.multinomial = function(t, e, n, o) {
    return F("multinomial");
  }, r.prototype.oneHot = function(t, e, n, o) {
    return F("oneHot");
  }, r.prototype.cumsum = function(t, e, n, o) {
    return F("cumsum");
  }, r.prototype.nonMaxSuppression = function(t, e, n, o, a) {
    return F("nonMaxSuppression");
  }, r.prototype.fft = function(t) {
    return F("fft");
  }, r.prototype.ifft = function(t) {
    return F("ifft");
  }, r.prototype.complex = function(t, e) {
    return F("complex");
  }, r.prototype.real = function(t) {
    return F("real");
  }, r.prototype.imag = function(t) {
    return F("imag");
  }, r.prototype.cropAndResize = function(t, e, n, o, a, i) {
    return F("cropAndResize");
  }, r.prototype.depthToSpace = function(t, e, n) {
    return F("depthToSpace");
  }, r.prototype.split = function(t, e, n) {
    return F("split");
  }, r.prototype.sparseToDense = function(t, e, n, o) {
    return F("sparseToDense");
  }, r.prototype.diag = function(t) {
    return F("diag");
  }, r.prototype.fill = function(t, e, n) {
    return F("fill");
  }, r.prototype.onesLike = function(t) {
    return F("onesLike");
  }, r.prototype.zerosLike = function(t) {
    return F("zerosLike");
  }, r.prototype.linspace = function(t, e, n) {
    return F("linspace");
  }, r.prototype.dispose = function() {
    return F("dispose");
  }, r;
}();
function F(r) {
  throw new Error("'" + r + "' not yet implemented or not found in the registry. Did you forget to import the kernel?");
}
function on(r, t) {
  for (var e = r.length, n = [], o = 0; o < e; o++) {
    var a = e - 1 - o, i = r[a] || 1;
    (t[t.length - 1 - o] || 1) > 1 && i === 1 && n.unshift(a);
  }
  return n;
}
function Le(r, t) {
  for (var e = [], n = 0; n < t.length; n++) {
    var o = r[r.length - n - 1], a = t.length - n - 1, i = t[a];
    (o == null || o === 1 && i > 1) && e.unshift(a);
  }
  return e;
}
function he(r, t) {
  for (var e = [], n = Math.max(r.length, t.length), o = 0; o < n; o++) {
    var a = r[r.length - o - 1];
    a == null && (a = 1);
    var i = t[t.length - o - 1];
    if (i == null && (i = 1), a === 1) e.unshift(i);
    else if (i === 1) e.unshift(a);
    else {
      if (a !== i) throw Error("Operands could not be broadcast together with shapes " + r + " and " + t + ".");
      e.unshift(a);
    }
  }
  return e;
}
function mr(r, t, e, n, o, a, i) {
  i === void 0 && (i = "channelsLast");
  var s, u = po(t), c = u[0], l = u[1];
  if (i === "channelsLast") s = [c, l, r[3], r[3]];
  else {
    if (i !== "channelsFirst") throw new Error("Unknown dataFormat " + i);
    s = [c, l, r[1], r[1]];
  }
  return An(r, s, e, n, o, a, !1, i);
}
function fo(r, t, e, n, o, a, i) {
  i === void 0 && (i = "NDHWC");
  var s, u, c = Wa(t), l = c[0], f = c[1], h = c[2];
  if (i === "NDHWC") u = "channelsLast", s = [l, f, h, r[4], r[4]];
  else {
    if (i !== "NCDHW") throw new Error("Unknown dataFormat " + i);
    u = "channelsFirst", s = [l, f, h, r[1], r[1]];
  }
  return ho(r, s, e, n, o, !1, u, a);
}
function An(r, t, e, n, o, a, i, s) {
  i === void 0 && (i = !1), s === void 0 && (s = "channelsLast");
  var u = [-1, -1, -1, -1], c = u[0], l = u[1], f = u[2], h = u[3];
  if (s === "channelsLast") c = r[0], l = r[1], f = r[2], h = r[3];
  else {
    if (s !== "channelsFirst") throw new Error("Unknown dataFormat " + s);
    c = r[0], h = r[1], l = r[2], f = r[3];
  }
  var p, d = t[0], m = t[1], v = t[3], g = po(e), y = g[0], x = g[1], b = po(n), w = b[0], C = b[1], k = qn(d, w), I = qn(m, C), R = function(B, L, V, z, U, G, q, K) {
    var te, ne, ue;
    if (typeof B == "number") {
      te = { top: B, bottom: B, left: B, right: B, type: B === 0 ? "VALID" : "NUMBER" };
      var ce = function(de, we, ye, Ae, _e) {
        Ae == null && (Ae = nc(de, we, ye));
        var Re = de[0], Rt = de[1], St = fr((Re - we + 2 * Ae) / ye + 1, _e);
        _(Ne(St), function() {
          return "The output # of rows (" + St + ") must be an integer. Change the stride and/or zero pad parameters";
        });
        var st = fr((Rt - we + 2 * Ae) / ye + 1, _e);
        return _(Ne(st), function() {
          return "The output # of columns (" + st + ") must be an integer. Change the stride and/or zero pad parameters";
        }), [St, st];
      }([L, V], G, z, B, K);
      ne = ce[0], ue = ce[1];
    } else if (B === "same") {
      ne = Math.ceil(L / z), ue = Math.ceil(V / U);
      var fe = Math.max(0, (ne - 1) * z + G - L), ve = Math.max(0, (ue - 1) * U + q - V), pe = Math.floor(fe / 2), me = fe - pe, Te = Math.floor(ve / 2);
      te = { top: pe, bottom: me, left: Te, right: ve - Te, type: "SAME" };
    } else {
      if (B !== "valid") throw Error("Unknown padding parameter: " + B);
      te = { top: 0, bottom: 0, left: 0, right: 0, type: "VALID" }, ne = Math.ceil((L - G + 1) / z), ue = Math.ceil((V - q + 1) / U);
    }
    return { padInfo: te, outHeight: ne, outWidth: ue };
  }(o, l, f, y, x, k, I, a), S = R.padInfo, N = R.outHeight, D = R.outWidth, W = i ? v * h : v;
  return s === "channelsFirst" ? p = [c, W, N, D] : s === "channelsLast" && (p = [c, N, D, W]), { batchSize: c, dataFormat: s, inHeight: l, inWidth: f, inChannels: h, outHeight: N, outWidth: D, outChannels: W, padInfo: S, strideHeight: y, strideWidth: x, filterHeight: d, filterWidth: m, effectiveFilterHeight: k, effectiveFilterWidth: I, dilationHeight: w, dilationWidth: C, inShape: r, outShape: p, filterShape: t };
}
function ho(r, t, e, n, o, a, i, s) {
  a === void 0 && (a = !1), i === void 0 && (i = "channelsLast");
  var u = [-1, -1, -1, -1, -1], c = u[0], l = u[1], f = u[2], h = u[3], p = u[4];
  if (i === "channelsLast") c = r[0], l = r[1], f = r[2], h = r[3], p = r[4];
  else {
    if (i !== "channelsFirst") throw new Error("Unknown dataFormat " + i);
    c = r[0], p = r[1], l = r[2], f = r[3], h = r[4];
  }
  var d, m = t[0], v = t[1], g = t[2], y = t[4], x = Wa(e), b = x[0], w = x[1], C = x[2], k = Wa(n), I = k[0], R = k[1], S = k[2], N = qn(m, I), D = qn(v, R), W = qn(g, S), B = function(q, K, te, ne, ue, ce, fe, ve, pe, me, Te) {
    var de, we, ye, Ae;
    if (typeof q == "number") {
      de = { top: q, bottom: q, left: q, right: q, front: q, back: q, type: q === 0 ? "VALID" : "NUMBER" };
      var _e = function(Fn, qt, Ko, Pn, It, Xo) {
        It == null && (It = nc(Fn, qt, Pn));
        var mf = Fn[0], gf = Fn[1], yf = Fn[2], $o = fr((mf - qt + 2 * It) / Pn + 1, Xo);
        _(Ne($o), function() {
          return "The output # of depths (" + $o + ") must be an integer. Change the stride and/or zero pad parameters";
        });
        var Yo = fr((gf - qt + 2 * It) / Pn + 1, Xo);
        _(Ne(Yo), function() {
          return "The output # of rows (" + Yo + ") must be an integer. Change the stride and/or zero pad parameters";
        });
        var Jo = fr((yf - qt + 2 * It) / Pn + 1, Xo);
        return _(Ne(Jo), function() {
          return "The output # of columns (" + Jo + ") must be an integer. Change the stride and/or zero pad parameters";
        }), [$o, Yo, Jo, Ko];
      }([K, te, ne, 1], ve, 1, ue, q, Te);
      we = _e[0], ye = _e[1], Ae = _e[2];
    } else if (q === "same") {
      we = Math.ceil(K / ue), ye = Math.ceil(te / ce), Ae = Math.ceil(ne / fe);
      var Re = (we - 1) * ue + ve - K, Rt = (ye - 1) * ce + pe - te, St = (Ae - 1) * fe + me - ne, st = Math.floor(Re / 2), Nn = Re - st, Ht = Math.floor(Rt / 2), tn = Rt - Ht, Gt = Math.floor(St / 2);
      de = { top: Ht, bottom: tn, left: Gt, right: St - Gt, front: st, back: Nn, type: "SAME" };
    } else {
      if (q !== "valid") throw Error("Unknown padding parameter: " + q);
      de = { top: 0, bottom: 0, left: 0, right: 0, front: 0, back: 0, type: "VALID" }, we = Math.ceil((K - ve + 1) / ue), ye = Math.ceil((te - pe + 1) / ce), Ae = Math.ceil((ne - me + 1) / fe);
    }
    return { padInfo: de, outDepth: we, outHeight: ye, outWidth: Ae };
  }(o, l, f, h, b, w, C, N, D, W, s), L = B.padInfo, V = B.outDepth, z = B.outHeight, U = B.outWidth, G = a ? y * p : y;
  return i === "channelsFirst" ? d = [c, G, V, z, U] : i === "channelsLast" && (d = [c, V, z, U, G]), { batchSize: c, dataFormat: i, inDepth: l, inHeight: f, inWidth: h, inChannels: p, outDepth: V, outHeight: z, outWidth: U, outChannels: G, padInfo: L, strideDepth: b, strideHeight: w, strideWidth: C, filterDepth: m, filterHeight: v, filterWidth: g, effectiveFilterDepth: N, effectiveFilterHeight: D, effectiveFilterWidth: W, dilationDepth: I, dilationHeight: R, dilationWidth: S, inShape: r, outShape: d, filterShape: t };
}
function nc(r, t, e, n) {
  n === void 0 && (n = 1);
  var o = qn(t, n);
  return Math.floor((r[0] * (e - 1) - e + o) / 2);
}
function po(r) {
  return typeof r == "number" ? [r, r, r] : r.length === 2 ? [r[0], r[1], 1] : r;
}
function Wa(r) {
  return typeof r == "number" ? [r, r, r] : r;
}
function qn(r, t) {
  return t <= 1 ? r : r + (r - 1) * (t - 1);
}
function fr(r, t) {
  if (!t) return r;
  switch (t) {
    case "round":
      return Math.round(r);
    case "ceil":
      return Math.ceil(r);
    case "floor":
      return Math.floor(r);
    default:
      throw new Error("Unknown roundingMode " + t);
  }
}
function er(r) {
  var t = po(r), e = t[0], n = t[1], o = t[2];
  return e === 1 && n === 1 && o === 1;
}
function it(r, t) {
  return er(r) || er(t);
}
function li(r) {
  if (r === "NHWC") return "channelsLast";
  if (r === "NCHW") return "channelsFirst";
  throw new Error("Unknown dataFormat " + r);
}
function rc(r, t, e) {
  if (t === "complex64") {
    if (r.dtype === "complex64") return r.clone();
    var n = Ee(r.shape), o = r.toFloat(), a = e.complex(o, n);
    return n.dispose(), o.dispose(), a;
  }
  if (!Af(r.dtype, t)) return T.makeTensorFromDataId(r.dataId, r.shape, t);
  if (r.dtype === "complex64") {
    var i = e.real(r);
    return a = i.cast(t), i.dispose(), a;
  }
  if (t === "int32") return e.int(r);
  if (t === "bool") {
    var s = j(0, r.dtype);
    return a = e.notEqual(r, s), s.dispose(), a;
  }
  throw new Error("Error in Cast: failed to cast " + r.dtype + " to " + t);
}
function Ua(r, t) {
  return T.makeTensorFromDataId(r.dataId, t, r.dtype);
}
function oc(r, t, e) {
  var n = (t - r) / (e - 1), o = Cr(e, "float32");
  o[0] = r;
  for (var a = 1; a < o.length; a++) o[a] = o[a - 1] + n;
  return Pe(o, "float32");
}
function za(r, t) {
  if (r.length !== t.length) throw new Error("Cannot merge real and imag arrays of different lengths. real:" + r.length + ", imag: " + t.length + ".");
  for (var e = new Float32Array(2 * r.length), n = 0; n < e.length; n += 2) e[n] = r[n / 2], e[n + 1] = t[n / 2];
  return e;
}
function _s(r, t) {
  return { real: r[2 * t], imag: r[2 * t + 1] };
}
function rp(r, t, e, n) {
  r[2 * n] = t, r[2 * n + 1] = e;
}
function op(r, t, e) {
  var n = (e ? 2 : -2) * Math.PI * (r / t);
  return { real: Math.cos(n), imag: Math.sin(n) };
}
function ap(r, t, e) {
  var n = function(a, i, s) {
    return function(u, c, l) {
      for (var f = 0, h = u.length, p = 0, d = !1; f < h; ) {
        var m = l(c, u[p = f + (h - f >>> 1)]);
        m > 0 ? f = p + 1 : (h = p, d = !m);
      }
      return d ? f : -f - 1;
    }(a, i, s || ip);
  }(r, t, e), o = n < 0 ? -(n + 1) : n;
  r.splice(o, 0, t);
}
function ip(r, t) {
  return r > t ? 1 : r < t ? -1 : 0;
}
function fi(r, t, e, n, o) {
  return ac(r, t, e, n, o, 0).selectedIndices;
}
function hi(r, t, e, n, o, a) {
  var i = ac(r, t, e, n, o, a);
  return i.numValidOutputs.dispose(), { selectedIndices: i.selectedIndices, selectedScores: i.selectedScores };
}
function ac(r, t, e, n, o, a, i, s) {
  s === void 0 && (s = !1);
  for (var u = Array.from(t).map(function(b, w) {
    return { score: b, boxIndex: w, suppressBeginIndex: 0 };
  }).filter(function(b) {
    return b.score > o;
  }).sort(Rs), c = a > 0 ? -0.5 / a : 0, l = [], f = []; l.length < e && u.length > 0; ) {
    var h = u.pop(), p = h.score, d = h.boxIndex, m = h.suppressBeginIndex;
    if (p < o) break;
    for (var v = !1, g = l.length - 1; g >= m; --g) {
      var y = sp(r, d, l[g]);
      if (y >= n) {
        v = !0;
        break;
      }
      if (h.score = h.score * up(n, c, y), h.score <= o) break;
    }
    h.suppressBeginIndex = l.length, v || (h.score === p ? (l.push(d), f.push(h.score)) : h.score > o && ap(u, h, Rs));
  }
  var x = l.length;
  return s && (l.fill(0, x), f.fill(0, x)), { selectedIndices: Pe(l, "int32"), selectedScores: Pe(f, "float32"), numValidOutputs: j(x, "int32") };
}
function sp(r, t, e) {
  var n = r.subarray(4 * t, 4 * t + 4), o = r.subarray(4 * e, 4 * e + 4), a = Math.min(n[0], n[2]), i = Math.min(n[1], n[3]), s = Math.max(n[0], n[2]), u = Math.max(n[1], n[3]), c = Math.min(o[0], o[2]), l = Math.min(o[1], o[3]), f = Math.max(o[0], o[2]), h = Math.max(o[1], o[3]), p = (s - a) * (u - i), d = (f - c) * (h - l);
  if (p <= 0 || d <= 0) return 0;
  var m = Math.max(a, c), v = Math.max(i, l), g = Math.min(s, f), y = Math.min(u, h), x = Math.max(g - m, 0) * Math.max(y - v, 0);
  return x / (p + d - x);
}
function up(r, t, e) {
  var n = Math.exp(t * e * e);
  return e <= r ? n : 0;
}
function Rs(r, t) {
  return r.score - t.score || r.score === t.score && t.boxIndex - r.boxIndex;
}
function ic(r, t, e) {
  var n = new Array(r.rank).fill(0), o = r.shape.slice();
  return t.map(function(a) {
    o[e] = a;
    var i = r.slice(n, o);
    return n[e] += a, i;
  });
}
function sc(r, t) {
  for (var e = new Array(r.rank), n = 0; n < e.length; n++) e[n] = r.shape[n] * t[n];
  var o = ae(e, r.dtype);
  for (n = 0; n < o.values.length; ++n) {
    for (var a = o.indexToLoc(n), i = new Array(r.rank), s = 0; s < i.length; s++) i[s] = a[s] % r.shape[s];
    var u = r.locToIndex(i);
    o.values[n] = r.values[u];
  }
  return o.toTensor();
}
function uc(r, t, e, n, o) {
  for (var a = t[t.length - 1], i = [r.length / a, a], s = i[0], u = i[1], c = pr(e, s * n), l = pr("int32", s * n), f = 0; f < s; f++) {
    for (var h = f * u, p = r.subarray(h, h + u), d = [], m = 0; m < p.length; m++) d.push({ value: p[m], index: m });
    d.sort(function(b, w) {
      return w.value - b.value;
    });
    var v = f * n, g = c.subarray(v, v + n), y = l.subarray(v, v + n);
    for (m = 0; m < n; m++) g[m] = d[m].value, y[m] = d[m].index;
  }
  var x = t.slice();
  return x[x.length - 1] = n, [je(c, x, e), je(l, x, "int32")];
}
function pi(r, t) {
  for (var e = [], n = 0; n < t.length; n++) t[n] && e.push(n);
  var o = ae(r, "int32"), a = ae([e.length, r.length], "int32");
  for (n = 0; n < e.length; n++) {
    var i = o.indexToLoc(e[n]), s = n * r.length;
    a.values.set(i, s);
  }
  return a.toTensor();
}
var cp = function(r, t) {
  this.outputShape = [], this.outputShape = r, this.variableNames = t.map(function(o, a) {
    return "T" + a;
  });
  var e = [];
  this.variableNames.forEach(function(o) {
    e.push("float v" + o + " = get" + o + "AtOutCoords();");
  });
  var n = this.variableNames.map(function(o) {
    return "v" + o;
  }).join(" + ");
  this.userCode = `
      void main() {
        ` + e.join(`
        `) + `

        float result = ` + n + `;
        setOutput(result);
      }
    `;
}, lp = function(r, t) {
  this.outputShape = [], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = r, this.variableNames = t.map(function(o, a) {
    return "T" + a;
  });
  var e = [];
  this.variableNames.forEach(function(o) {
    e.push("vec4 v" + o + " = get" + o + "AtOutCoords();");
  });
  var n = this.variableNames.map(function(o) {
    return "v" + o;
  }).join(" + ");
  this.userCode = `
      void main() {
        ` + e.join(`
        `) + `

        vec4 result = ` + n + `;
        setOutput(result);
      }
    `;
}, fp = function(r, t, e) {
  this.variableNames = ["A"];
  var n = r.windowSize, o = r.batchSize, a = r.inSize, i = Math.ceil(a / n);
  e || this.variableNames.push("bestIndicesA"), this.outputShape = [o, i];
  var s = t === "max" ? ">" : "<", u = e ? "inOffset + i;" : "round(getBestIndicesA(batch, inOffset + i));";
  this.userCode = `
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ` + n + `;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ` + n + `; i++) {
          int inIdx = ` + u + `;
          float candidate = getA(batch, inIdx);
          if (candidate ` + s + ` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `;
};
function cc(r, t) {
  return ["x", "y", "z", "w", "u", "v"].slice(0, t).map(function(e) {
    return r + "." + e;
  });
}
function tt(r, t) {
  return t === 1 ? [r] : cc(r, t);
}
function $e() {
  var r, t, e, n, o, a, i, s, u, c;
  return M().getNumber("WEBGL_VERSION") === 2 ? (r = "#version 300 es", t = "in", e = "out", n = "in", o = "texture", a = "outputColor", i = "out vec4 outputColor;", s = `
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `, u = "", c = `
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `) : (r = "", t = "attribute", e = "varying", n = "varying", o = "texture2D", a = "gl_FragColor", i = "", s = `
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `, u = `
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `, c = `
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `), { version: r, attribute: t, varyingVs: e, varyingFs: n, texture2D: o, output: a, defineOutput: i, defineSpecialNaN: s, defineSpecialInf: u, defineRound: c };
}
function bn(r, t, e) {
  e === void 0 && (e = "index");
  var n = Mt(t);
  return n.map(function(o, a) {
    return "int " + r[a] + " = " + e + " / " + o + "; " + (a === n.length - 1 ? "int " + r[a + 1] + " = " + e + " - " + r[a] + " * " + o : "index -= " + r[a] + " * " + o) + ";";
  }).join("");
}
function di(r) {
  var t = Mt(r).map(function(e) {
    return e.toString();
  });
  return `
  int getFlatIndex(ivec3 coords) {
    return coords.x * ` + t[0] + " + coords.y * " + t[1] + ` + coords.z;
  }
`;
}
var lc = `
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;
function hp(r, t, e, n) {
  var o = [];
  r.forEach(function(p) {
    var d = J(p.shapeInfo.logicalShape);
    p.shapeInfo.isUniform ? o.push("uniform float " + p.name + (d > 1 ? "[" + d + "]" : "") + ";") : (o.push("uniform sampler2D " + p.name + ";"), o.push("uniform int offset" + p.name + ";"));
  });
  var a, i, s = o.join(`
`), u = r.map(function(p) {
    return function(d, m, v) {
      v === void 0 && (v = !1);
      var g = "";
      g += v ? fc(d) : Wn(d);
      var y = d.shapeInfo.logicalShape, x = m.logicalShape;
      return y.length <= x.length && (g += v ? function(b, w) {
        var C, k = b.name, I = k.charAt(0).toUpperCase() + k.slice(1), R = "get" + I + "AtOutCoords", S = b.shapeInfo.logicalShape.length, N = w.logicalShape.length, D = on(b.shapeInfo.logicalShape, w.logicalShape), W = Ce(N), B = N - S, L = ["x", "y", "z", "w", "u", "v"];
        C = S === 0 ? "" : N < 2 && D.length >= 1 ? "coords = 0;" : D.map(function(te) {
          return "coords." + L[te + B] + " = 0;";
        }).join(`
`);
        var V = "";
        V = N < 2 && S > 0 ? "coords" : b.shapeInfo.logicalShape.map(function(te, ne) {
          return "coords." + L[ne + B];
        }).join(", ");
        var z = "return outputValue;", U = J(b.shapeInfo.logicalShape) === 1, G = J(w.logicalShape) === 1;
        if (S !== 1 || U || G) {
          if (U && !G) z = N === 1 ? `
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      ` : `
        return vec4(outputValue.x);
      `;
          else if (D.length) {
            var q = S - 2, K = S - 1;
            D.indexOf(q) > -1 && D.indexOf(K) > -1 ? z = "return vec4(outputValue.x);" : D.indexOf(q) > -1 ? z = "return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);" : D.indexOf(K) > -1 && (z = "return vec4(outputValue.xx, outputValue.zz);");
          }
        } else z = `
      return vec4(outputValue.xy, outputValue.xy);
    `;
        return `
    vec4 ` + R + `() {
      ` + W + ` coords = getOutputCoords();
      ` + C + `
      vec4 outputValue = get` + I + "(" + V + `);
      ` + z + `
    }
  `;
      }(d, m) : function(b, w) {
        var C = b.name, k = C.charAt(0).toUpperCase() + C.slice(1), I = "get" + k + "AtOutCoords", R = w.texShape, S = b.shapeInfo.texShape, N = b.shapeInfo.logicalShape.length, D = w.logicalShape.length;
        if (!b.shapeInfo.isUniform && N === D && b.shapeInfo.flatOffset == null && Ve(S, R)) return `
      float ` + I + `() {
        return sampleTexture(` + C + `, resultUV);
      }
    `;
        var W, B = Ce(D), L = on(b.shapeInfo.logicalShape, w.logicalShape), V = D - N, z = ["x", "y", "z", "w", "u", "v"];
        W = N === 0 ? "" : D < 2 && L.length >= 1 ? "coords = 0;" : L.map(function(G) {
          return "coords." + z[G + V] + " = 0;";
        }).join(`
`);
        var U = "";
        return U = D < 2 && N > 0 ? "coords" : b.shapeInfo.logicalShape.map(function(G, q) {
          return "coords." + z[q + V];
        }).join(", "), `
    float ` + I + `() {
      ` + B + ` coords = getOutputCoords();
      ` + W + `
      return get` + k + "(" + U + `);
    }
  `;
      }(d, m)), g;
    }(p, t, n);
  }).join(`
`), c = t.texShape, l = $e(), f = function(p) {
    return `
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ` + p.texture2D + `(textureSampler, uv).r;
    }
  `;
  }(l), h = function(p) {
    return p.version + `
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ` + p.varyingFs + ` vec2 resultUV;
    ` + p.defineOutput + `
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ` + p.defineSpecialNaN + `
    ` + p.defineSpecialInf + `
    ` + p.defineRound + `

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ` + pp + `
    ` + dp + `
    ` + vp + `
  `;
  }(l);
  return t.isPacked ? (a = function(p, d) {
    switch (p.length) {
      case 0:
        return `
    int getOutputCoords() {
      return 0;
    }
  `;
      case 1:
        return function(b, w) {
          var C = [Math.ceil(w[0] / 2), Math.ceil(w[1] / 2)];
          return C[0] === 1 ? `
      int getOutputCoords() {
        return 2 * int(resultUV.x * ` + C[1] + `.0);
      }
    ` : C[1] === 1 ? `
      int getOutputCoords() {
        return 2 * int(resultUV.y * ` + C[0] + `.0);
      }
    ` : `
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(` + C[0] + ", " + C[1] + `));
      return 2 * (resTexRC.x * ` + C[1] + ` + resTexRC.y);
    }
  `;
        }(0, d);
      case 2:
        return function(b, w) {
          var C = [Math.ceil(w[0] / 2), Math.ceil(w[1] / 2)];
          if (Ve(b, w)) return `
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(` + C[0] + ", " + C[1] + `));
      }
    `;
          var k = Math.ceil(b[1] / 2);
          return `
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(` + C[0] + ", " + C[1] + `));

      int index = resTexRC.x * ` + C[1] + ` + resTexRC.y;
      int r = 2 * (index / ` + k + `);
      int c = imod(index, ` + k + `) * 2;

      return ivec2(r, c);
    }
  `;
        }(p, d);
      case 3:
        return m = p, v = d, g = [Math.ceil(v[0] / 2), Math.ceil(v[1] / 2)], y = Math.ceil(m[2] / 2), x = y * Math.ceil(m[1] / 2), `
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(` + g[0] + ", " + g[1] + `));
      int index = resTexRC.x * ` + g[1] + ` + resTexRC.y;

      int b = index / ` + x + `;
      index -= b * ` + x + `;

      int r = 2 * (index / ` + y + `);
      int c = imod(index, ` + y + `) * 2;

      return ivec3(b, r, c);
    }
  `;
      default:
        return function(b, w) {
          for (var C = [Math.ceil(w[0] / 2), Math.ceil(w[1] / 2)], k = Math.ceil(b[b.length - 1] / 2), I = k * Math.ceil(b[b.length - 2] / 2), R = I, S = "", N = "b, r, c", D = 2; D < b.length - 1; D++) R *= b[b.length - D - 1], S = `
      int b` + D + " = index / " + R + `;
      index -= b` + D + " * " + R + `;
    ` + S, N = "b" + D + ", " + N;
          return `
    ivec` + b.length + ` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(` + C[0] + ", " + C[1] + `));
      int index = resTexRC.x * ` + C[1] + ` + resTexRC.y;

      ` + S + `

      int b = index / ` + I + `;
      index -= b * ` + I + `;

      int r = 2 * (index / ` + k + `);
      int c = imod(index, ` + k + `) * 2;

      return ivec` + b.length + "(" + N + `);
    }
  `;
        }(p, d);
    }
    var m, v, g, y, x;
  }(t.logicalShape, c), i = function(p) {
    return `
    void setOutput(vec4 val) {
      ` + p.output + ` = val;
    }
  `;
  }(l)) : (a = function(p, d) {
    switch (p.length) {
      case 0:
        return `
    int getOutputCoords() {
      return 0;
    }
  `;
      case 1:
        return function(g, y) {
          return y[0] === 1 ? `
      int getOutputCoords() {
        return int(resultUV.x * ` + y[1] + `.0);
      }
    ` : y[1] === 1 ? `
      int getOutputCoords() {
        return int(resultUV.y * ` + y[0] + `.0);
      }
    ` : `
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(` + y[0] + ", " + y[1] + `));
      return resTexRC.x * ` + y[1] + ` + resTexRC.y;
    }
  `;
        }(0, d);
      case 2:
        return function(g, y) {
          return Ve(g, y) ? `
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(` + y[0] + ", " + y[1] + `));
      }
    ` : g[1] === 1 ? `
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(` + y[0] + ", " + y[1] + `));
        int index = resTexRC.x * ` + y[1] + ` + resTexRC.y;
        return ivec2(index, 0);
      }
    ` : g[0] === 1 ? `
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(` + y[0] + ", " + y[1] + `));
        int index = resTexRC.x * ` + y[1] + ` + resTexRC.y;
        return ivec2(0, index);
      }
    ` : `
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(` + y[0] + ", " + y[1] + `));
      int index = resTexRC.x * ` + y[1] + ` + resTexRC.y;
      int r = index / ` + g[1] + `;
      int c = index - r * ` + g[1] + `;
      return ivec2(r, c);
    }
  `;
        }(p, d);
      case 3:
        return m = d, v = bn(["r", "c", "d"], p), `
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(` + m[0] + ", " + m[1] + `));
      int index = resTexRC.x * ` + m[1] + ` + resTexRC.y;
      ` + v + `
      return ivec3(r, c, d);
    }
  `;
      case 4:
        return function(g, y) {
          var x = bn(["r", "c", "d", "d2"], g);
          return `
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(` + y[0] + ", " + y[1] + `));
      int index = resTexRC.x * ` + y[1] + ` + resTexRC.y;
      ` + x + `
      return ivec4(r, c, d, d2);
    }
  `;
        }(p, d);
      case 5:
        return function(g, y) {
          var x = bn(["r", "c", "d", "d2", "d3"], g);
          return `
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(` + y[0] + `,
                             ` + y[1] + `));

      int index = resTexRC.x * ` + y[1] + ` + resTexRC.y;

      ` + x + `

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `;
        }(p, d);
      case 6:
        return function(g, y) {
          var x = bn(["r", "c", "d", "d2", "d3", "d4"], g);
          return `
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(` + y[0] + ", " + y[1] + `));
      int index = resTexRC.x * ` + y[1] + ` + resTexRC.y;

      ` + x + `

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `;
        }(p, d);
      default:
        throw new Error(p.length + "-D output sampling is not yet supported");
    }
    var m, v;
  }(t.logicalShape, c), i = function(p) {
    return `
    void setOutput(float val) {
      ` + p.output + ` = vec4(val, 0, 0, 0);
    }
  `;
  }(l)), n && (h += mp), [h, f, i, s, a, u, e].join(`
`);
}
function Wn(r) {
  var t = r.shapeInfo.logicalShape;
  switch (t.length) {
    case 0:
      return function(e) {
        var n = e.name, o = "get" + n.charAt(0).toUpperCase() + n.slice(1);
        if (e.shapeInfo.isUniform) return "float " + o + "() {return " + n + ";}";
        var a = e.shapeInfo.texShape, i = a[0], s = a[1];
        if (i === 1 && s === 1) return `
      float ` + o + `() {
        return sampleTexture(` + n + `, halfCR);
      }
    `;
        var u = e.shapeInfo.texShape, c = u[0], l = u[1], f = vn(n);
        return `
    float ` + o + `() {
      vec2 uv = uvFromFlat(` + c + ", " + l + ", " + f + `);
      return sampleTexture(` + n + `, uv);
    }
  `;
      }(r);
    case 1:
      return function(e) {
        var n = e.name, o = "get" + n.charAt(0).toUpperCase() + n.slice(1);
        if (e.shapeInfo.isUniform) return `
      float ` + o + `(int index) {
        ` + On(e) + `
      }
    `;
        var a = e.shapeInfo.texShape, i = a[0], s = a[1];
        if (s === 1 && i === 1) return `
      float ` + o + `(int index) {
        return sampleTexture(` + n + `, halfCR);
      }
    `;
        var u = vn(n);
        return s === 1 ? `
      float ` + o + `(int index) {
        vec2 uv = vec2(0.5, (float(index + ` + u + ") + 0.5) / " + i + `.0);
        return sampleTexture(` + n + `, uv);
      }
    ` : i === 1 ? `
      float ` + o + `(int index) {
        vec2 uv = vec2((float(index + ` + u + ") + 0.5) / " + s + `.0, 0.5);
        return sampleTexture(` + n + `, uv);
      }
    ` : `
    float ` + o + `(int index) {
      vec2 uv = uvFromFlat(` + i + ", " + s + ", index + " + u + `);
      return sampleTexture(` + n + `, uv);
    }
  `;
      }(r);
    case 2:
      return function(e) {
        var n = e.shapeInfo.logicalShape, o = e.name, a = "get" + o.charAt(0).toUpperCase() + o.slice(1), i = e.shapeInfo.texShape;
        if (i != null && Ve(n, i)) {
          var s = i[0], u = i[1];
          return `
    float ` + a + `(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(` + u + ".0, " + s + `.0);
      return sampleTexture(` + o + `, uv);
    }
  `;
        }
        var c = yn(n), l = c.newShape, f = c.keptDims, h = l;
        if (h.length < n.length) {
          var p = Un(e, h);
          return `
      ` + Wn(p) + `
      float ` + a + `(int row, int col) {
        return ` + a + "(" + zn(["row", "col"], f) + `);
      }
    `;
        }
        if (e.shapeInfo.isUniform) return `
      float ` + a + `(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(` + n[1] + `, 1)));
        ` + On(e) + `
      }
    `;
        var d = i[0], m = i[1], v = vn(o);
        return m === 1 ? `
    float ` + a + `(int row, int col) {
      float index = dot(vec3(row, col, ` + v + "), vec3(" + n[1] + `, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ` + d + `.0);
      return sampleTexture(` + o + `, uv);
    }
  ` : d === 1 ? `
    float ` + a + `(int row, int col) {
      float index = dot(vec3(row, col, ` + v + "), vec3(" + n[1] + `, 1, 1));
      vec2 uv = vec2((index + 0.5) / ` + m + `.0, 0.5);
      return sampleTexture(` + o + `, uv);
    }
  ` : `
  float ` + a + `(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ` + n[1] + " + col + " + v + `;
    vec2 uv = uvFromFlat(` + d + ", " + m + `, index);
    return sampleTexture(` + o + `, uv);
  }
`;
      }(r);
    case 3:
      return function(e) {
        var n = e.shapeInfo.logicalShape, o = e.name, a = "get" + o.charAt(0).toUpperCase() + o.slice(1), i = n[1] * n[2], s = n[2], u = yn(n), c = u.newShape, l = u.keptDims, f = c;
        if (f.length < n.length) {
          var h = Un(e, f);
          return `
        ` + Wn(h) + `
        float ` + a + `(int row, int col, int depth) {
          return ` + a + "(" + zn(["row", "col", "depth"], l) + `);
        }
      `;
        }
        if (e.shapeInfo.isUniform) return `
      float ` + a + `(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(` + i + ", " + s + `, 1)));
        ` + On(e) + `
      }
    `;
        var p = e.shapeInfo.texShape, d = p[0], m = p[1], v = e.shapeInfo.flatOffset;
        if (m === i && v == null) return `
        float ` + a + `(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(` + s + `, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(` + m + ".0, " + d + `.0);
          return sampleTexture(` + o + `, uv);
        }
      `;
        if (m === s && v == null) return `
    float ` + a + `(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(` + n[1] + `, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(` + m + ".0, " + d + `.0);
      return sampleTexture(` + o + `, uv);
    }
  `;
        var g = vn(o);
        return `
      float ` + a + `(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ` + i + " + col * " + s + " + depth + " + g + `;
        vec2 uv = uvFromFlat(` + d + ", " + m + `, index);
        return sampleTexture(` + o + `, uv);
      }
  `;
      }(r);
    case 4:
      return function(e) {
        var n = e.shapeInfo.logicalShape, o = e.name, a = "get" + o.charAt(0).toUpperCase() + o.slice(1), i = n[3], s = n[2] * i, u = n[1] * s, c = yn(n), l = c.newShape, f = c.keptDims;
        if (l.length < n.length) {
          var h = Un(e, l);
          return `
      ` + Wn(h) + `
      float ` + a + `(int row, int col, int depth, int depth2) {
        return ` + a + "(" + zn(["row", "col", "depth", "depth2"], f) + `);
      }
    `;
        }
        if (e.shapeInfo.isUniform) return `
      float ` + a + `(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(` + u + ", " + s + ", " + i + `, 1)));
        ` + On(e) + `
      }
    `;
        var p = e.shapeInfo.flatOffset, d = e.shapeInfo.texShape, m = d[0], v = d[1];
        if (v === u && p == null) return `
      float ` + a + `(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(` + s + ", " + i + `, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(` + v + ".0, " + m + `.0);
        return sampleTexture(` + o + `, uv);
      }
    `;
        if (v === i && p == null) return `
      float ` + a + `(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(` + n[1] * n[2] + ", " + n[2] + `, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(` + v + ".0, " + m + `.0);
        return sampleTexture(` + o + `, uv);
      }
    `;
        var g = vn(o);
        return `
    float ` + a + `(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ` + u + " + col * " + s + ` +
          depth * ` + i + ` + depth2;
      vec2 uv = uvFromFlat(` + m + ", " + v + ", index + " + g + `);
      return sampleTexture(` + o + `, uv);
    }
  `;
      }(r);
    case 5:
      return function(e) {
        var n = e.shapeInfo.logicalShape, o = e.name, a = "get" + o.charAt(0).toUpperCase() + o.slice(1), i = n[4], s = n[3] * i, u = n[2] * s, c = n[1] * u, l = yn(n), f = l.newShape, h = l.keptDims;
        if (f.length < n.length) {
          var p = Un(e, f);
          return `
      ` + Wn(p) + `
      float ` + a + `(int row, int col, int depth, int depth2, int depth3) {
        return ` + a + "(" + zn(["row", "col", "depth", "depth2", "depth3"], h) + `);
      }
    `;
        }
        if (e.shapeInfo.isUniform) return `
      float ` + a + `(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(` + c + ", " + u + ", " + s + ", " + i + `)) +
          depth3;
        ` + On(e) + `
      }
    `;
        var d = e.shapeInfo.flatOffset, m = e.shapeInfo.texShape, v = m[0], g = m[1];
        if (g === c && d == null) return `
      float ` + a + `(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(` + u + ", " + s + ", " + i + `, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(` + g + ".0, " + v + `.0);
        return sampleTexture(` + o + `, uv);
      }
    `;
        if (g === i && d == null) return `
      float ` + a + `(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(` + n[1] * n[2] * n[3] + `,
               ` + n[2] * n[3] + ", " + n[3] + `, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(` + g + ".0, " + v + `.0);
        return sampleTexture(` + o + `, uv);
      }
    `;
        var y = vn(o);
        return `
    float ` + a + `(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ` + c + " + col * " + u + " + depth * " + s + ` +
          depth2 * ` + i + " + depth3 + " + y + `;
      vec2 uv = uvFromFlat(` + v + ", " + g + `, index);
      return sampleTexture(` + o + `, uv);
    }
  `;
      }(r);
    case 6:
      return function(e) {
        var n = e.shapeInfo.logicalShape, o = e.name, a = "get" + o.charAt(0).toUpperCase() + o.slice(1), i = yn(n), s = i.newShape, u = i.keptDims;
        if (s.length < n.length) {
          var c = Un(e, s);
          return `
      ` + Wn(c) + `
      float ` + a + `(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ` + a + "(" + zn(["row", "col", "depth", "depth2", "depth3", "depth4"], u) + `);
      }
    `;
        }
        var l = n[5], f = n[4] * l, h = n[3] * f, p = n[2] * h, d = n[1] * p;
        if (e.shapeInfo.isUniform) return `
      float ` + a + `(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(` + d + ", " + p + ", " + h + ", " + f + `)) +
          dot(
            vec2(depth3, depth4),
            vec2(` + l + `, 1)));
        ` + On(e) + `
      }
    `;
        var m = e.shapeInfo.flatOffset, v = e.shapeInfo.texShape, g = v[0], y = v[1];
        if (y === d && m == null) return `
      float ` + a + `(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(` + p + ", " + h + ", " + f + ", " + l + `)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(` + y + ".0, " + g + `.0);
        return sampleTexture(` + o + `, uv);
      }
    `;
        if (y === l && m == null) return `
      float ` + a + `(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(` + n[1] * n[2] * n[3] * n[4] + `,
               ` + n[2] * n[3] * n[4] + `,
               ` + n[3] * n[4] + `,
               ` + n[4] + `)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(` + y + ".0, " + g + `.0);
        return sampleTexture(` + o + `, uv);
      }
    `;
        var x = vn(o);
        return `
    float ` + a + `(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ` + d + " + col * " + p + " + depth * " + h + ` +
          depth2 * ` + f + " + depth3 * " + l + " + depth4 + " + x + `;
      vec2 uv = uvFromFlat(` + g + ", " + y + `, index);
      return sampleTexture(` + o + `, uv);
    }
  `;
      }(r);
    default:
      throw new Error(t.length + "-D input sampling is not yet supported");
  }
}
function fc(r) {
  var t, e, n;
  switch (r.shapeInfo.logicalShape.length) {
    case 0:
      return t = r.name, e = "get" + t.charAt(0).toUpperCase() + t.slice(1), n = $e(), `
    vec4 ` + e + `() {
      return ` + n.texture2D + "(" + t + `, halfCR);
    }
  `;
    case 1:
      return function(o) {
        var a = o.name, i = "get" + a.charAt(0).toUpperCase() + a.slice(1), s = o.shapeInfo.texShape, u = [Math.ceil(s[0] / 2), Math.ceil(s[1] / 2)], c = $e();
        return `
    vec4 ` + i + `(int index) {
      vec2 uv = packedUVfrom1D(
        ` + u[0] + ", " + u[1] + `, index);
      return ` + c.texture2D + "(" + a + `, uv);
    }
  `;
      }(r);
    case 2:
      return function(o) {
        var a = o.shapeInfo.logicalShape, i = o.name, s = "get" + i.charAt(0).toUpperCase() + i.slice(1), u = o.shapeInfo.texShape, c = u[0], l = u[1], f = $e();
        if (u != null && Ve(a, u)) return `
      vec4 ` + s + `(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(` + l + ".0, " + c + `.0);

        return ` + f.texture2D + "(" + i + `, uv);
      }
    `;
        var h = [Math.ceil(u[0] / 2), Math.ceil(u[1] / 2)], p = Math.ceil(a[1] / 2);
        return `
    vec4 ` + s + `(int row, int col) {
      vec2 uv = packedUVfrom2D(` + p + ", " + h[0] + ", " + h[1] + `, row, col);
      return ` + f.texture2D + "(" + i + `, uv);
    }
  `;
      }(r);
    case 3:
      return function(o) {
        var a = o.shapeInfo.logicalShape, i = o.name, s = "get" + i.charAt(0).toUpperCase() + i.slice(1), u = o.shapeInfo.texShape, c = [Math.ceil(u[0] / 2), Math.ceil(u[1] / 2)];
        if (a[0] === 1) {
          var l = a.slice(1), f = Un(o, l);
          return `
        ` + fc(f) + `
        vec4 ` + s + `(int b, int row, int col) {
          return ` + s + "(" + zn(["b", "row", "col"], [1, 2]) + `);
        }
      `;
        }
        var h = c[0], p = c[1], d = Math.ceil(a[2] / 2), m = d * Math.ceil(a[1] / 2), v = $e();
        return `
    vec4 ` + s + `(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ` + h + ", " + p + ", " + m + ", " + d + `, b, row, col);
      return ` + v.texture2D + "(" + i + `, uv);
    }
  `;
      }(r);
    default:
      return function(o) {
        for (var a = o.shapeInfo.logicalShape, i = a.length, s = o.name, u = "get" + s.charAt(0).toUpperCase() + s.slice(1), c = o.shapeInfo.texShape, l = [Math.ceil(c[0] / 2), Math.ceil(c[1] / 2)], f = l[0], h = l[1], p = Math.ceil(a[i - 1] / 2), d = p * Math.ceil(a[i - 2] / 2), m = "int b, int row, int col", v = "b * " + d + " + (row / 2) * " + p + " + (col / 2)", g = 2; g < i - 1; g++) m = "int b" + g + ", " + m, d *= a[i - g - 1], v = "b" + g + " * " + d + " + " + v;
        var y = $e();
        return `
    vec4 ` + u + "(" + m + `) {
      int index = ` + v + `;
      int texR = index / ` + h + `;
      int texC = index - texR * ` + h + `;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(` + h + ", " + f + `);
      return ` + y.texture2D + "(" + s + `, uv);
    }
  `;
      }(r);
  }
}
var pp = `
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`, dp = `
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`, vp = `
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`, mp = `
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;
function vn(r) {
  return "offset" + r;
}
function On(r) {
  var t = r.name, e = J(r.shapeInfo.logicalShape);
  return e < 2 ? "return " + t + ";" : `
    for (int i = 0; i < ` + e + `; i++) {
      if (i == index) {
        return ` + t + `[i];
      }
    }
  `;
}
function Ce(r) {
  if (r <= 1) return "int";
  if (r === 2) return "ivec2";
  if (r === 3) return "ivec3";
  if (r === 4) return "ivec4";
  if (r === 5) return "ivec5";
  if (r === 6) return "ivec6";
  throw Error("GPU for rank " + r + " is not yet supported");
}
function Un(r, t) {
  var e = JSON.parse(JSON.stringify(r));
  return e.shapeInfo.logicalShape = t, e;
}
function zn(r, t) {
  return t.map(function(e) {
    return r[e];
  }).join(", ");
}
var gp = function(r, t, e, n) {
  this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, _(r.length > 2, function() {
    return "Packed arg" + (e.charAt(0).toUpperCase() + e.slice(1)) + " supports only inputs with rank above 2.";
  });
  var o = r[r.length - 1], a = Math.ceil(o / t);
  this.outputShape = r.slice(0, -1), a > 1 && this.outputShape.push(a), n || this.variableNames.push("bestIndicesA");
  var i, s, u = this.outputShape, c = u.length, l = Ce(c), f = tt("coords", c);
  if (a === 1) {
    var h = Ce(s = c + 1);
    i = `
        ` + h + " sourceLocR = " + h + "(" + f.join() + `, 0);
        ++` + f[c - 1] + `;
        ` + h + " sourceLocG = " + h + "(" + f.join() + `, 0);
        ++` + f[c - 2] + `;
        ` + h + " sourceLocA = " + h + "(" + f.join() + `, 0);
        --` + f[c - 1] + `;
        ` + h + " sourceLocB = " + h + "(" + f.join() + `, 0);
        --` + f[c - 2] + ";";
  } else s = c, i = `
        ` + l + ` sourceLocR = coords;
        ++` + f[c - 1] + `;
        ` + l + ` sourceLocG = coords;
        ++` + f[c - 2] + `;
        ` + l + ` sourceLocA = coords;
        --` + f[c - 1] + `;
        ` + l + ` sourceLocB = coords;
        --` + f[c - 2] + ";";
  var p = ["x", "y", "z", "w", "u", "v"].slice(0, s), d = "." + p[s - 1], m = p.map(function(I) {
    return "int " + I;
  }), v = tt("sourceLocR", s - 1).concat("inIdx.r"), g = tt("sourceLocG", s - 1).concat("inIdx.g"), y = tt("sourceLocB", s - 1).concat("inIdx.b"), x = tt("sourceLocA", s - 1).concat("inIdx.a"), b = e === "max" ? "greaterThan" : "lessThan", w = n ? "" : `
          inIdx = round(vec4(getBestIndicesAChannel(` + v.join() + `),
                             getBestIndicesAChannel(` + g.join() + `),
                             getBestIndicesAChannel(` + y.join() + `),
                             getBestIndicesAChannel(` + x.join() + ")));", C = `vec4(
            getAChannel(` + v.join() + `),
            hasNextCol ? getAChannel(` + g.join() + `) : 0.,
            hasNextRow ? getAChannel(` + y.join() + `) : 0.,
            hasNextRow && hasNextCol ? getAChannel(` + x.join() + ") : 0.)", k = n ? "" : `
      float getBestIndicesAChannel(` + m.join() + `) {
        return getChannel(getBestIndicesA(` + p.join() + `),
                                          vec2(` + p.slice(-2).join() + `));
      }`;
  this.userCode = `
      float getAChannel(` + m.join() + `) {
        return getChannel(getA(` + p.join() + `),
                               vec2(` + p.slice(-2).join() + `));
      }
      ` + k + `
      void main() {
        ` + l + ` coords = getOutputCoords();
        bool hasNextCol = ` + f[c - 1] + " < " + (u[c - 1] - 1) + `;
        bool hasNextRow = ` + f[c - 2] + " < " + (u[c - 2] - 1) + `;
        ` + i + `
        ivec4 srcIdx = ivec4(sourceLocR` + d + ", sourceLocG" + d + `,
          sourceLocB` + d + ", sourceLocA" + d + ") * " + t + `;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ` + C + `;

        for (int i = 0; i < ` + t + `; i++) {
          inIdx = srcIdx;
          ` + w + `
          vec4 candidate = ` + C + `;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(` + b + `(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `;
}, yp = function(r) {
  this.variableNames = ["dy"], this.outputShape = r.inShape;
  var t = r.filterHeight, e = r.filterWidth, n = r.strideHeight, o = r.strideWidth, a = r.dilationHeight, i = r.dilationWidth, s = r.effectiveFilterHeight, u = r.effectiveFilterWidth, c = s - 1 - r.padInfo.top, l = u - 1 - r.padInfo.left, f = 1 / (t * e);
  this.userCode = `
      const ivec2 pads = ivec2(` + c + ", " + l + `);
      const float avgMultiplier = float(` + f + `);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ` + s + `;
            wR += ` + a + `) {
          float dyR = float(dyRCorner + wR) / ` + n + `.0;

          if (dyR < 0.0 || dyR >= ` + r.outHeight + `.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ` + u + `;
            wC+= ` + i + `) {
            float dyC = float(dyCCorner + wC) / ` + o + `.0;

            if (dyC < 0.0 || dyC >= ` + r.outWidth + `.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `;
}, bp = function(r) {
  this.variableNames = ["dy"], this.outputShape = r.inShape;
  var t = r.filterDepth, e = r.filterHeight, n = r.filterWidth, o = r.strideDepth, a = r.strideHeight, i = r.strideWidth, s = r.dilationDepth, u = r.dilationHeight, c = r.dilationWidth, l = r.effectiveFilterDepth, f = r.effectiveFilterHeight, h = r.effectiveFilterWidth, p = l - 1 - r.padInfo.front, d = f - 1 - r.padInfo.top, m = h - 1 - r.padInfo.left, v = 1 / (t * e * n);
  this.userCode = `
      const ivec3 pads = ivec3(` + p + ", " + d + ", " + m + `);
      const float avgMultiplier = float(` + v + `);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ` + l + `;
            wD += ` + s + `) {
          float dyD = float(dyDCorner + wD) / ` + o + `.0;

          if (dyD < 0.0 || dyD >= ` + r.outDepth + `.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ` + f + `;
              wR += ` + u + `) {
            float dyR = float(dyRCorner + wR) / ` + a + `.0;

            if (dyR < 0.0 || dyR >= ` + r.outHeight + `.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ` + h + `;
                wC += ` + c + `) {
              float dyC = float(dyCCorner + wC) / ` + i + `.0;

              if (dyC < 0.0 || dyC >= ` + r.outWidth + `.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `;
}, xp = function(r, t, e, n, o, a) {
  this.outputShape = [], this.variableNames = ["x", "mean", "variance"], he(r, t), he(r, e);
  var i = "0.0";
  n != null && (he(r, n), this.variableNames.push("offset"), i = "getOffsetAtOutCoords()");
  var s = "1.0";
  o != null && (he(r, o), this.variableNames.push("scale"), s = "getScaleAtOutCoords()"), this.outputShape = r, this.userCode = `
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ` + i + `;
        float scale = ` + s + `;
        float inv = scale * inversesqrt(variance + float(` + a + `));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `;
}, wp = function(r, t, e, n, o, a) {
  this.packedInputs = !0, this.packedOutput = !0, this.variableNames = ["x", "mean", "variance"], he(r, t), he(r, e);
  var i = "vec4(0.0)";
  n != null && (he(r, n), this.variableNames.push("offset"), i = "getOffsetAtOutCoords()");
  var s = "vec4(1.0)";
  o != null && (he(r, o), this.variableNames.push("scale"), s = "getScaleAtOutCoords()"), this.outputShape = r, this.userCode = `
      void main() {
        vec4 offset = ` + i + `;
        vec4 scale = ` + s + `;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(` + a + `));

        setOutput((x - mean) * inv + offset);
      }
    `;
}, Cp = "return areal * breal - aimag * bimag;", Ep = "return areal * bimag + aimag * breal;", Ss = function(r, t, e) {
  this.variableNames = ["AReal", "AImag", "BReal", "BImag"], this.outputShape = he(t, e), this.userCode = `
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ` + r + `
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `;
}, ua = "return a + b;", ca = "return a - b;", Is = "return a * b;", hc = "return (a < 0.) ? b * a : a;", De = function(r, t, e) {
  this.variableNames = ["A", "B"], this.outputShape = he(t, e), this.userCode = `
      float binaryOperation(float a, float b) {
        ` + r + `
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `;
}, pc = `
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`, Kt = function(r, t, e, n) {
  n === void 0 && (n = !1), this.variableNames = ["A", "B"], this.supportsBroadcasting = !0, this.packedInputs = !0, this.packedOutput = !0, this.outputShape = he(t, e);
  var o = this.outputShape.length, a = "";
  if (n) if (o === 0 || J(this.outputShape) === 1) a = `
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;
  else if (a = `
          ` + Ce(o) + ` coords = getOutputCoords();
        `, o === 1) a += `
            result.y = (coords + 1) >= ` + this.outputShape[0] + ` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;
  else {
    var i = tt("coords", o);
    a += `
            bool nextRowOutOfBounds =
              (` + i[o - 2] + " + 1) >= " + this.outputShape[o - 2] + `;
            bool nextColOutOfBounds =
              (` + i[o - 1] + " + 1) >= " + this.outputShape[o - 1] + `;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `;
  }
  this.userCode = `
      vec4 binaryOperation(vec4 a, vec4 b) {
        ` + r + `
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ` + a + `

        setOutput(result);
      }
    `;
}, _p = function() {
  function r(t) {
    this.variableNames = ["A"], this.outputShape = t, this.userCode = `
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `;
  }
  return r.prototype.getCustomSetupFunc = function(t, e) {
    var n = this;
    return function(o, a) {
      n.minLoc == null && (n.minLoc = o.getUniformLocationNoThrow(a, "minVal"), n.maxLoc = o.getUniformLocationNoThrow(a, "maxVal")), o.gl.uniform1f(n.minLoc, t), o.gl.uniform1f(n.maxLoc, e);
    };
  }, r;
}(), Rp = function() {
  function r(t) {
    this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = t, this.userCode = `
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `;
  }
  return r.prototype.getCustomSetupFunc = function(t, e) {
    var n = this;
    return function(o, a) {
      n.minLoc == null && (n.minLoc = o.getUniformLocationNoThrow(a, "minVal"), n.maxLoc = o.getUniformLocationNoThrow(a, "maxVal")), o.gl.uniform1f(n.minLoc, t), o.gl.uniform1f(n.maxLoc, e);
    };
  }, r;
}(), Sp = function(r) {
  this.variableNames = ["real", "imag"], this.outputShape = r, this.userCode = `
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `;
}, Ip = function(r) {
  this.outputShape = [], this.outputShape = Zn(r, 1), this.variableNames = r.map(function(s, u) {
    return "T" + u;
  });
  var t = new Array(r.length - 1);
  t[0] = r[0][1];
  for (var e = 1; e < t.length; e++) t[e] = t[e - 1] + r[e][1];
  var n = ["if (yC < " + t[0] + ") setOutput(getT0(yR, yC));"];
  for (e = 1; e < t.length; e++) {
    var o = t[e - 1];
    n.push("else if (yC < " + t[e] + ") setOutput(getT" + e + "(yR, yC-" + o + "));");
  }
  var a = t.length, i = t[t.length - 1];
  n.push("else setOutput(getT" + a + "(yR, yC-" + i + "));"), this.userCode = `
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ` + n.join(`
        `) + `
      }
    `;
}, kp = function(r, t) {
  this.packedInputs = !0, this.packedOutput = !0, this.outputShape = [], this.outputShape = Zn(r, t);
  var e = this.outputShape, n = e.length, o = Ce(n), a = tt("coords", n), i = ["x", "y", "z", "w", "u", "v"].slice(0, n);
  this.variableNames = r.map(function(v, g) {
    return "T" + g;
  });
  var s = new Array(r.length - 1);
  s[0] = r[0][t];
  for (var u = 1; u < s.length; u++) s[u] = s[u - 1] + r[u][t];
  var c = i[t], l = i.slice(-2), f = i.join(), h = "if (" + c + " < " + s[0] + `) {
        return getChannel(
            getT0(` + f + "), vec2(" + l.join() + `));
        }`;
  for (u = 1; u < s.length; u++) {
    var p = s[u - 1];
    h += `
        if (` + c + " < " + s[u] + "  && " + c + " >= " + s[u - 1] + `) {
          return getChannel(
            getT` + u + "(" + Wr(i, c, p) + `),
            vec2(` + Wr(l, c, p) + `));
        }`;
  }
  var d = s.length, m = s[s.length - 1];
  h += `
        return getChannel(
          getT` + d + "(" + Wr(i, c, m) + `),
          vec2(` + Wr(l, c, m) + "));", this.userCode = `
      float getValue(` + i.map(function(v) {
    return "int " + v;
  }) + `) {
        ` + h + `
      }

      void main() {
        ` + o + ` coords = getOutputCoords();
        vec4 result = vec4(getValue(` + a + `), 0., 0., 0.);

        ` + a[n - 1] + " = " + a[n - 1] + ` + 1;
        if (` + a[n - 1] + " < " + e[n - 1] + `) {
          result.g = getValue(` + a + `);
        }

        ` + a[n - 2] + " = " + a[n - 2] + ` + 1;
        if (` + a[n - 2] + " < " + e[n - 2] + `) {
          result.a = getValue(` + a + `);
        }

        ` + a[n - 1] + " = " + a[n - 1] + ` - 1;
        if (` + a[n - 2] + " < " + e[n - 2] + ` &&
            ` + a[n - 1] + " < " + e[n - 1] + `) {
          result.b = getValue(` + a + `);
        }
        setOutput(result);
      }
    `;
};
function Wr(r, t, e) {
  var n = r.indexOf(t);
  return r.map(function(o, a) {
    return a === n ? o + " - " + e : o;
  }).join();
}
var Ap = function(r) {
  this.variableNames = ["x", "dy"], this.outputShape = r.filterShape;
  var t = r.strideHeight, e = r.strideWidth, n = r.padInfo.top, o = r.padInfo.left, a = r.dataFormat === "channelsLast";
  this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ` + r.batchSize + `; b++) {
          for (int yR = 0; yR < ` + r.outHeight + `; yR++) {
            int xR = wR + yR * ` + t + " - " + n + `;

            if (xR < 0 || xR >= ` + r.inHeight + `) {
              continue;
            }

            for (int yC = 0; yC < ` + r.outWidth + `; yC++) {
              int xC = wC + yC * ` + e + " - " + o + `;

              if (xC < 0 || xC >= ` + r.inWidth + `) {
                continue;
              }

              if (` + a + `) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `;
}, Dp = function(r) {
  this.variableNames = ["dy", "W"], this.outputShape = r.inShape;
  var t = r.filterHeight, e = r.filterWidth, n = r.strideHeight, o = r.strideWidth, a = r.dataFormat === "channelsLast", i = t - 1 - r.padInfo.top, s = e - 1 - r.padInfo.left, u = a ? 1 : 2, c = a ? 2 : 3, l = a ? 3 : 1;
  this.userCode = `
      const ivec2 pads = ivec2(` + i + ", " + s + `);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[` + l + `];

        ivec2 dyCorner = ivec2(coords[` + u + "], coords[" + c + `]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ` + t + `; wR++) {
          float dyR = float(dyRCorner + wR) / ` + n + `.0;

          if (dyR < 0.0 || dyR >= ` + r.outHeight + `.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ` + t + ` - 1 - wR;

          for (int wC = 0; wC < ` + e + `; wC++) {
            float dyC = float(dyCCorner + wC) / ` + o + `.0;

            if (dyC < 0.0 || dyC >= ` + r.outWidth + `.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ` + e + ` - 1 - wC;

            for (int d2 = 0; d2 < ` + r.outChannels + `; d2++) {

              if (` + a + `) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `;
}, Tp = function(r) {
  this.variableNames = ["x", "dy"], this.outputShape = r.filterShape;
  var t = r.strideDepth, e = r.strideHeight, n = r.strideWidth, o = r.padInfo.front, a = r.padInfo.top, i = r.padInfo.left;
  this.userCode = `
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ` + r.batchSize + `; b++) {
          for (int yF = 0; yF < ` + r.outDepth + `; yF++) {
            int xF = wF + yF * ` + t + " - " + o + `;

            if (xF < 0 || xF >= ` + r.inDepth + `) {
              continue;
            }

            for (int yR = 0; yR < ` + r.outHeight + `; yR++) {
              int xR = wR + yR * ` + e + " - " + a + `;

              if (xR < 0 || xR >= ` + r.inHeight + `) {
                continue;
              }

              for (int yC = 0; yC < ` + r.outWidth + `; yC++) {
                int xC = wC + yC * ` + n + " - " + i + `;

                if (xC < 0 || xC >= ` + r.inWidth + `) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `;
}, Np = function(r) {
  this.variableNames = ["dy", "W"], this.outputShape = r.inShape;
  var t = r.filterDepth, e = r.filterHeight, n = r.filterWidth, o = r.strideDepth, a = r.strideHeight, i = r.strideWidth, s = t - 1 - r.padInfo.front, u = e - 1 - r.padInfo.top, c = n - 1 - r.padInfo.left;
  this.userCode = `
      const ivec3 pads = ivec3(` + s + ", " + u + ", " + c + `);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ` + t + `; wF++) {
          float dyF = float(dyFCorner + wF) / ` + o + `.0;

          if (dyF < 0.0 || dyF >= ` + r.outDepth + `.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ` + t + ` - 1 - wF;

          for (int wR = 0; wR < ` + e + `; wR++) {
            float dyR = float(dyRCorner + wR) / ` + a + `.0;

            if (dyR < 0.0 || dyR >= ` + r.outHeight + `.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ` + e + ` - 1 - wR;

            for (int wC = 0; wC < ` + n + `; wC++) {
              float dyC = float(dyCCorner + wC) / ` + i + `.0;

              if (dyC < 0.0 || dyC >= ` + r.outWidth + `.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ` + n + ` - 1 - wC;

              for (int d2 = 0; d2 < ` + r.outChannels + `; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `;
}, Fp = function(r) {
  this.variableNames = ["x", "dy"], this.outputShape = r.filterShape;
  var t = r.strideHeight, e = r.strideWidth, n = r.padInfo.top, o = r.padInfo.left, a = r.outChannels / r.inChannels;
  this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ` + a + ` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ` + r.batchSize + `; b++) {
          for (int yR = 0; yR < ` + r.outHeight + `; yR++) {
            int xR = wR + yR * ` + t + " - " + n + `;

            if (xR < 0 || xR >= ` + r.inHeight + `) {
              continue;
            }

            for (int yC = 0; yC < ` + r.outWidth + `; yC++) {
              int xC = wC + yC * ` + e + " - " + o + `;

              if (xC < 0 || xC >= ` + r.inWidth + `) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `;
}, Pp = function(r) {
  this.variableNames = ["dy", "W"], this.outputShape = r.inShape;
  var t = r.filterHeight, e = r.filterWidth, n = r.strideHeight, o = r.strideWidth, a = t - 1 - r.padInfo.top, i = e - 1 - r.padInfo.left, s = r.outChannels / r.inChannels;
  this.userCode = `
      const ivec2 pads = ivec2(` + a + ", " + i + `);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ` + t + `; wR++) {
          float dyR = float(dyRCorner + wR) / ` + n + `.0;

          if (dyR < 0.0 || dyR >= ` + r.outHeight + `.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ` + t + ` - 1 - wR;

          for (int wC = 0; wC < ` + e + `; wC++) {
            float dyC = float(dyCCorner + wC) / ` + o + `.0;

            if (dyC < 0.0 || dyC >= ` + r.outWidth + `.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ` + e + ` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ` + s + `; dm++) {
              int d2 = d1 * ` + s + ` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `;
}, ks = function(r, t, e, n) {
  t === void 0 && (t = !1), e === void 0 && (e = null), n === void 0 && (n = !1), this.variableNames = ["x", "W"], this.outputShape = r.outShape;
  var o = r.padInfo.top, a = r.padInfo.left, i = r.strideHeight, s = r.strideWidth, u = r.dilationHeight, c = r.dilationWidth, l = r.filterHeight, f = r.filterWidth, h = 4 * Math.floor(r.inChannels / 4), p = r.inChannels % 4, d = r.dataFormat === "channelsLast", m = d ? 1 : 2, v = d ? 2 : 3, g = d ? 3 : 1, y = "", x = "";
  e && (y = n ? `float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ` + e + `
        }` : `
          float activation(float x) {
            ` + e + `
          }
        `, x = "result = activation(result);");
  var b = t ? "result += getBiasAtOutCoords();" : "";
  t && this.variableNames.push("bias"), n && this.variableNames.push("preluActivationWeights"), this.userCode = `
      ` + y + `

      const ivec2 strides = ivec2(` + i + ", " + s + `);
      const ivec2 pads = ivec2(` + o + ", " + a + `);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[` + g + `];

        ivec2 xRCCorner =
            ivec2(coords[` + m + "], coords[" + v + `]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ` + l + `; wR++) {
          int xR = xRCorner + wR * ` + u + `;

          if (xR < 0 || xR >= ` + r.inHeight + `) {
            continue;
          }

          for (int wC = 0; wC < ` + f + `; wC++) {
            int xC = xCCorner + wC * ` + c + `;

            if (xC < 0 || xC >= ` + r.inWidth + `) {
              continue;
            }

            for (int d1 = 0; d1 < ` + h + `; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (` + d + `) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (` + (p === 1) + `) {

              if (` + d + `) {
                dotProd +=
                    getX(batch, xR, xC, ` + h + `) *
                    getW(wR, wC, ` + h + `, d2);
              } else {
                dotProd +=
                    getX(batch, ` + h + `, xR, xC) *
                    getW(wR, wC, ` + h + `, d2);
              }

            } else if (` + (p === 2) + `) {
              vec2 wValues = vec2(
                getW(wR, wC, ` + h + `, d2),
                getW(wR, wC, ` + h + ` + 1, d2)
              );

              if (` + d + `) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ` + h + `),
                  getX(batch, xR, xC, ` + h + ` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ` + h + `, xR, xC),
                  getX(batch, ` + h + ` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (` + (p === 3) + `) {
              vec3 wValues = vec3(
                getW(wR, wC, ` + h + `, d2),
                getW(wR, wC, ` + h + ` + 1, d2),
                getW(wR, wC, ` + h + ` + 2, d2)
              );

              if (` + d + `) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ` + h + `),
                  getX(batch, xR, xC, ` + h + ` + 1),
                  getX(batch, xR, xC, ` + h + ` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ` + h + `, xR, xC),
                  getX(batch, ` + h + ` + 1, xR, xC),
                  getX(batch, ` + h + ` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ` + b + `
        ` + x + `
        setOutput(result);
      }
    `;
}, Op = function(r) {
  this.variableNames = ["x", "W"], this.outputShape = r.outShape;
  var t = r.padInfo.front, e = r.padInfo.top, n = r.padInfo.left, o = r.strideDepth, a = r.strideHeight, i = r.strideWidth, s = r.dilationDepth, u = r.dilationHeight, c = r.dilationWidth, l = r.filterDepth, f = r.filterHeight, h = r.filterWidth, p = 4 * Math.floor(r.inChannels / 4), d = r.inChannels % 4;
  this.userCode = `
      const ivec3 strides = ivec3(` + o + ", " + a + ", " + i + `);
      const ivec3 pads = ivec3(` + t + ", " + e + ", " + n + `);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ` + l + `; wF++) {
          int xF = xFCorner + wF * ` + s + `;

          if (xF < 0 || xF >= ` + r.inDepth + `) {
            continue;
          }

          for (int wR = 0; wR < ` + f + `; wR++) {
            int xR = xRCorner + wR * ` + u + `;

            if (xR < 0 || xR >= ` + r.inHeight + `) {
              continue;
            }

            for (int wC = 0; wC < ` + h + `; wC++) {
              int xC = xCCorner + wC * ` + c + `;

              if (xC < 0 || xC >= ` + r.inWidth + `) {
                continue;
              }

              for (int d1 = 0; d1 < ` + p + `; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (` + (d === 1) + `) {
                dotProd +=
                  getX(batch, xF, xR, xC, ` + p + `) *
                  getW(wF, wR, wC, ` + p + `, d2);
              } else if (` + (d === 2) + `) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ` + p + `),
                  getX(batch, xF, xR, xC, ` + p + ` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ` + p + `, d2),
                  getW(wF, wR, wC, ` + p + ` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (` + (d === 3) + `) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ` + p + `),
                  getX(batch, xF, xR, xC, ` + p + ` + 1),
                  getX(batch, xF, xR, xC, ` + p + ` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ` + p + `, d2),
                  getW(wF, wR, wC, ` + p + ` + 1, d2),
                  getW(wF, wR, wC, ` + p + ` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `;
}, As = function(r, t, e, n) {
  t === void 0 && (t = !1), e === void 0 && (e = null), n === void 0 && (n = !1), this.variableNames = ["x", "W"], this.outputShape = r.outShape;
  var o = r.inHeight, a = r.inWidth, i = r.padInfo.top, s = r.padInfo.left, u = r.strideHeight, c = r.strideWidth, l = r.dilationHeight, f = r.dilationWidth, h = r.filterHeight, p = r.filterWidth, d = r.outChannels / r.inChannels, m = "", v = "";
  e && (m = n ? `float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ` + e + `
        }` : `
          float activation(float x) {
            ` + e + `
          }
        `, v = "result = activation(result);");
  var g = t ? "result += getBiasAtOutCoords();" : "";
  t && this.variableNames.push("bias"), n && this.variableNames.push("preluActivationWeights"), this.userCode = `
      ` + m + `

      const ivec2 strides = ivec2(` + u + ", " + c + `);
      const ivec2 pads = ivec2(` + i + ", " + s + `);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ` + d + `;
        int q = d2 - d1 * ` + d + `;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ` + h + `; wR++) {
          int xR = xRCorner + wR * ` + l + `;

          if (xR < 0 || xR >= ` + o + `) {
            continue;
          }

          for (int wC = 0; wC < ` + p + `; wC++) {
            int xC = xCCorner + wC * ` + f + `;

            if (xC < 0 || xC >= ` + a + `) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ` + g + `
        ` + v + `
        setOutput(result);
      }
    `;
}, Ds = function(r, t, e, n) {
  t === void 0 && (t = !1), e === void 0 && (e = null), n === void 0 && (n = !1), this.variableNames = ["x", "W"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = r.outShape;
  for (var o = r.inHeight, a = r.inWidth, i = r.padInfo.top, s = r.padInfo.left, u = r.strideHeight, c = r.strideWidth, l = r.dilationHeight, f = r.dilationWidth, h = r.filterHeight, p = r.filterWidth, d = p, m = "int xR; int xC; int xCOffset;", v = 0; v < h; v++) for (var g = 0; g < p; g++) m += `
          vec4 xTexelR` + v + "C" + 2 * g + ` = vec4(0.);
          vec4 wR` + v + "C" + g + ` = vec4(0.);
          vec4 xR` + v + "C" + g + " = vec4(0.);";
  for (v = 0; v < h; v++) for (var y = 0; y < d; y++) {
    if (m += `
          xR = xRCorner + ` + v * l + `;
          xC = xCCorner + ` + (g = 2 * y) * f + `;
        `, c === 1) {
      if (g < p && (m += s % 2 == 1 ? `
                xCOffset = xC + 1;
                if(xR >= 0 && xR < ` + o + " && xCOffset >= 0 && xCOffset < " + a + `) {
                  xTexelR` + v + "C" + g + ` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= ` + a + `) {
                    xTexelR` + v + "C" + g + `.zw = vec2(0.);
                  }
                } else {
                  xTexelR` + v + "C" + g + ` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < ` + o + " && xCOffset >= 0 && xCOffset < " + a + `) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= ` + a + `) {
                    previous.zw = vec2(0.);
                  }

                  xR` + v + "C" + g + " = vec4(previous.zw, xTexelR" + v + "C" + g + `.xy);
                } else {
                  xR` + v + "C" + g + " = vec4(0, 0, xTexelR" + v + "C" + g + `.xy);
                }
              ` : `
                if(xR >= 0 && xR < ` + o + " && xC >= 0 && xC < " + a + `) {
                  xTexelR` + v + "C" + g + ` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR` + v + "C" + g + ` = vec4(0.);
                }

                xR` + v + "C" + g + " = xTexelR" + v + "C" + g + `;
              `, g + 1 < p)) {
        var x = s % 2 == 0 ? Tu(f) : f;
        f % 2 == 0 && s % 2 == 1 || f % 2 != 0 && s % 2 != 1 ? (m += `
                  xCOffset = xC + ` + s % 2 + " + " + x + `;

                  if(xR >= 0 && xR < ` + o + ` &&
                    xCOffset >= 0 && xCOffset < ` + a + `) {
                    xTexelR` + v + "C" + (g + 2) + ` = getX(batch, xR, xCOffset, d1);
                  }
                `, f > 1 && (m += `
                    xCOffset -= 2;
                    if(xR >= 0 && xR < ` + o + ` &&
                      xCOffset >= 0 && xCOffset < ` + a + `) {
                      xTexelR` + v + "C" + g + ` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR` + v + "C" + g + ` = vec4(0.);
                    }
                  `), m += `
                  xR` + v + "C" + (g + 1) + ` = vec4(
                    xTexelR` + v + "C" + g + ".zw, xTexelR" + v + "C" + (g + 2) + `.xy);
                `) : m += `
                  xCOffset = xC + ` + x + `;

                  if(xR >= 0 && xR < ` + o + ` &&
                    xCOffset >= 0 && xCOffset < ` + a + `) {
                    xTexelR` + v + "C" + (g + 2) + ` = getX(batch, xR, xCOffset, d1);
                  }

                  xR` + v + "C" + (g + 1) + " = xTexelR" + v + "C" + (g + 2) + `;
                `;
      }
    } else g < p && (m += `
              if(xR >= 0 && xR < ` + o + `) {
            `, s % 2 == 1 ? (m += `
                xCOffset = xC + 1 - ` + c + `;
                if(xCOffset >= 0 && xCOffset < ` + a + `) {
                  xTexelR` + v + "C" + g + ` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR` + v + "C" + g + ` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < ` + a + `) {
                  xTexelR` + v + "C" + (g + 2) + ` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR` + v + "C" + (g + 2) + ` = vec4(0.);
                }

                xR` + v + "C" + g + ` = vec4(
                  xTexelR` + v + "C" + g + ".zw, xTexelR" + v + "C" + (g + 2) + `.zw);
              `, g + 1 < p && (m += `
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + ` + c + `;
                  if(xCOffset >= 0 && xCOffset < ` + a + `) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR` + v + "C" + (g + 1) + " = vec4(xTexelR" + v + "C" + (g + 2) + `.xy, final.xy);
                `)) : (m += `
                if(xC >= 0 && xC < ` + a + `) {
                  xTexelR` + v + "C" + g + ` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR` + v + "C" + g + ` = vec4(0.);
                }

                xCOffset = xC + ` + c + `;
                if(xCOffset >= 0 && xCOffset < ` + a + `) {
                  xTexelR` + v + "C" + (g + 2) + ` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR` + v + "C" + (g + 2) + ` = vec4(0.);
                }

                xR` + v + "C" + g + ` = vec4(
                  xTexelR` + v + "C" + g + ".xy, xTexelR" + v + "C" + (g + 2) + `.xy);
              `, g + 1 < p && (m += `
                  xR` + v + "C" + (g + 1) + ` = vec4(
                    xTexelR` + v + "C" + g + ".zw, xTexelR" + v + "C" + (g + 2) + `.zw);
                `)), m += "}");
    g < p && (m += `
            vec4 wTexelR` + v + "C" + g + " = getW(" + v + ", " + g + `, d1, q);
            wR` + v + "C" + g + " = vec4(wTexelR" + v + "C" + g + ".xz, wTexelR" + v + "C" + g + `.xz);
          `, g + 1 < p && (m += `
              vec4 wTexelR` + v + "C" + (g + 1) + " = getW(" + v + ", " + (g + 1) + `, d1, q);
              wR` + v + "C" + (g + 1) + ` =
                vec4(wTexelR` + v + "C" + (g + 1) + ".xz, wTexelR" + v + "C" + (g + 1) + ".xz);"));
  }
  for (v = 0; v < h; v++) for (g = 0; g < p; g++) m += "dotProd += xR" + v + "C" + g + " * wR" + v + "C" + g + ";";
  var b = "", w = "";
  e && (b = n ? `vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ` + e + `
        }` : `vec4 activation(vec4 x) {
          ` + e + `
        }`, w = "result = activation(result);");
  var C = t ? "result += getBiasAtOutCoords();" : "";
  t && this.variableNames.push("bias"), n && this.variableNames.push("preluActivationWeights"), this.userCode = `
      ` + b + `

      const ivec2 strides = ivec2(` + u + ", " + c + `);
      const ivec2 pads = ivec2(` + i + ", " + s + `);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        ` + m + `

        vec4 result = dotProd;
        ` + C + `
        ` + w + `
        setOutput(result);
      }
    `;
}, Mp = function(r, t, e, n, o) {
  this.variableNames = ["Image", "Boxes", "BoxInd"], this.outputShape = [];
  var a = r[0], i = r[1], s = r[2], u = r[3], c = t[0], l = e[0], f = e[1];
  this.outputShape = [c, l, f, u];
  var h = n === "bilinear" ? 1 : 0, p = [i - 1 + ".0", s - 1 + ".0"], d = p[0], m = p[1], v = l > 1 ? ["" + (i - 1) / (l - 1), "(y2-y1) * height_ratio", "y1*" + d + " + float(y)*(height_scale)"] : ["0.0", "0.0", "0.5 * (y1+y2) * " + d], g = v[0], y = v[1], x = v[2], b = f > 1 ? ["" + (s - 1) / (f - 1), "(x2-x1) * width_ratio", "x1*" + m + " + float(x)*(width_scale)"] : ["0.0", "0.0", "0.5 * (x1+x2) * " + m], w = b[0], C = b[1], k = b[2];
  this.userCode = `
      const float height_ratio = float(` + g + `);
      const float width_ratio = float(` + w + `);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ` + a + `) {
          return;
        }

        float height_scale = ` + y + `;
        float width_scale = ` + C + `;

        float in_y = ` + x + `;
        if( in_y < 0.0 || in_y > ` + d + ` ) {
          setOutput(float(` + o + `));
          return;
        }
        float in_x = ` + k + `;
        if( in_x < 0.0 || in_x > ` + m + ` ) {
          setOutput(float(` + o + `));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(` + h + ` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `;
}, Bp = function(r, t, e) {
  this.variableNames = ["x"], this.outputShape = r;
  var n = r.length, o = r[r.length - 1], a = e ? "<" : ">";
  this.userCode = `
      int getIndex(int i) {
        ` + (e ? "return " + o + " -i - 1;" : "return i;") + `
      }

      void main() {
        ` + Ce(n) + ` coords = getOutputCoords();
        int end = ` + Ts(n, "coords") + `;
        float val = 0.0;
        for (int i = ` + o + ` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx ` + a + ` end) {
            continue;
          }
          if (idx == end && ` + t + `) {
            continue;
          }
          ` + Ts(n, "coords") + ` = idx;
          val += getX(` + function(i, s) {
    if (i === 1) return "" + s;
    if (i === 2) return s + ".x, " + s + ".y";
    if (i === 3) return s + ".x, " + s + ".y, " + s + ".z";
    if (i === 4) return s + ".x, " + s + ".y, " + s + ".z, " + s + ".w";
    throw Error("Cumulative sum for rank " + i + " is not yet supported");
  }(n, "coords") + `);
        }
        setOutput(val);
      }
    `;
};
function Ts(r, t) {
  if (r === 1) return "" + t;
  if (r === 2) return t + ".y";
  if (r === 3) return t + ".z";
  if (r === 4) return t + ".w";
  throw Error("Cumulative sum for rank " + r + " is not yet supported");
}
var Lp = function(r) {
  this.variableNames = ["A"], this.packedInputs = !1, this.packedOutput = !0, this.outPackingScheme = vr.DENSE;
  var t = lr(r), e = $e();
  this.outputShape = r, this.userCode = `
      ivec3 outCoordsFromFlatIndex(int index) {
        ` + bn(["r", "c", "d"], r) + `
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(` + t[0] + ", " + t[1] + `));
        int index = 4 * (resTexRC.x * ` + t[1] + ` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ` + e.output + ` = result;
      }
    `;
}, Wp = function(r) {
  this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, this.outPackingScheme = vr.DENSE;
  var t = lr(r), e = $e();
  this.outputShape = r, this.userCode = `
      ivec3 outCoordsFromFlatIndex(int index) {
        ` + bn(["r", "c", "d"], r) + `
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(` + t[0] + ", " + t[1] + `));
        int index = 4 * (resTexRC.x * ` + t[1] + ` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ` + e.output + ` = result;
      }
    `;
}, Up = function() {
  function r(t, e, n) {
    this.variableNames = ["x"], this.outputShape = [], this.outputShape = t, this.blockSize = e, this.dataFormat = n, this.userCode = `
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ` + this.getHeightCoordString() + `;
      int w = ` + this.getWidthCoordString() + `;
      int d = ` + this.getDepthCoordString() + `;

      int in_h = h / ` + e + `;
      int offset_h = imod(h, ` + e + `);
      int in_w = w / ` + e + `;
      int offset_w = imod(w, ` + e + `);
      int offset_d = (offset_h * ` + e + ` + offset_w) *
        ` + this.getOutputDepthSize() + `;
      int in_d = d + offset_d;

      float result = ` + this.getInputSamplingString() + `;
      setOutput(result);
    }
  `;
  }
  return r.prototype.getHeightCoordString = function() {
    return this.dataFormat === "NHWC" ? "coords[1]" : "coords[2]";
  }, r.prototype.getWidthCoordString = function() {
    return this.dataFormat === "NHWC" ? "coords[2]" : "coords[3]";
  }, r.prototype.getDepthCoordString = function() {
    return this.dataFormat === "NHWC" ? "coords[3]" : "coords[1]";
  }, r.prototype.getOutputDepthSize = function() {
    return this.dataFormat === "NHWC" ? this.outputShape[3] : this.outputShape[1];
  }, r.prototype.getInputSamplingString = function() {
    return this.dataFormat === "NHWC" ? "getX(b, in_h, in_w, in_d)" : "getX(b, in_d, in_h, in_w)";
  }, r;
}(), zp = function(r) {
  this.variableNames = ["X"], this.outputShape = [r, r], this.userCode = `
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `;
}, Vp = function(r) {
  this.variableNames = ["A"], this.outTexUsage = lt.DOWNLOAD;
  var t = $e();
  this.outputShape = r, this.userCode = `
      ` + lc + `

      void main() {
        float x = getAAtOutCoords();
        ` + t.output + ` = encode_float(x);
      }
    `;
}, Hp = function(r) {
  this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !1, this.outTexUsage = lt.DOWNLOAD;
  var t = $e();
  this.outputShape = r, this.userCode = `
      ` + lc + `

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ` + t.output + ` = encode_float(x);
      }
    `;
}, Gp = function(r, t, e) {
  e === void 0 && (e = !1), this.variableNames = ["A"];
  var n = $e(), o = t[0], a = t[1];
  this.outputShape = r;
  var i = "result";
  e && (i = "floor(result * 255. + 0.5)"), this.userCode = `
      ` + di(r) + `

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / ` + a + `;
        int c = imod(flatIndex, ` + a + `);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(` + a + ".0, " + o + `.0);
        vec4 values = ` + n.texture2D + `(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        ` + n.output + " = vec4(" + i + `, 0., 0., 0.);
      }
    `;
}, qp = function(r, t, e) {
  e === void 0 && (e = !1), this.variableNames = ["A"], this.packedInputs = !1, this.packedOutput = !0;
  var n = $e(), o = t[0], a = t[1];
  this.outputShape = r;
  var i = "", s = "result";
  e && (s = "floor(result * 255. + 0.5)");
  for (var u = 0; u <= 1; u++) for (var c = 0; c <= 1; c++) {
    var l = 2 * u + c;
    i += `
          localCoords = coords;
          if(localCoords[2] + ` + c + " < " + r[2] + `) {
            localCoords[2] += ` + c + `;
            if(localCoords[1] + ` + u + " < " + r[1] + `) {
              localCoords[1] += ` + u + `;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / ` + a + `;
              c = imod(flatIndex, ` + a + `);
              uv = (vec2(c, r) + halfCR) / vec2(` + a + ".0, " + o + `.0);
              values = ` + n.texture2D + `(A, uv);

              if(offset == 0) {
                result[` + l + `] = values[0];
              } else if(offset == 1) {
                result[` + l + `] = values[1];
              } else if(offset == 2) {
                result[` + l + `] = values[2];
              } else {
                result[` + l + `] = values[3];
              }
            }
          }
        `;
  }
  this.userCode = `
      ` + di(r) + `

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        ` + i + `

        ` + n.output + " = " + s + `;
      }
    `;
}, jp = "return real * expR - imag * expI;", Kp = "return real * expI + imag * expR;", Ns = function(r, t, e) {
  this.variableNames = ["real", "imag"];
  var n = t[1];
  this.outputShape = t;
  var o = e ? "2.0 * " + Math.PI : "-2.0 * " + Math.PI, a = e ? n + ".0" : "1.0";
  this.userCode = `
      const float exponentMultiplier = ` + o + `;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ` + r + `
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(` + n + `);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ` + n + `; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ` + a + `;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `;
}, Xp = function() {
  function r(t, e) {
    this.outputShape = [], this.variableNames = ["x"], this.outputShape = t, this.userCode = `
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `;
  }
  return r.prototype.getCustomSetupFunc = function(t) {
    var e = this;
    return function(n, o) {
      e.valueLoc == null && (e.valueLoc = n.getUniformLocationNoThrow(o, "value")), n.gl.uniform1f(e.valueLoc, t);
    };
  }, r;
}(), $p = function(r, t, e) {
  this.variableNames = ["A", "indices"];
  var n = r.slice();
  n[e] = t, this.outputShape = n, this.rank = n.length;
  var o = Ce(this.rank), a = function(i, s) {
    var u = i.length;
    if (u > 4) throw Error("Gather for rank " + u + " is not yet supported");
    if (u === 1) return "int(getIndices(resRC))";
    for (var c = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], l = [], f = 0; f < i.length; f++) f === s ? l.push("int(getIndices(" + c[f] + "))") : l.push("" + c[f]);
    return l.join();
  }(r, e);
  this.userCode = `
      void main() {
        ` + o + ` resRC = getOutputCoords();
        setOutput(getA(` + a + `));
      }
    `;
}, Yp = function(r, t, e) {
  this.sliceDim = r, this.strides = t, this.variableNames = ["x", "indices"], this.outputShape = e;
  var n = Ce(t.length), o = Ce(e.length), a = this.sliceDim > 1 ? "strides[j]" : "strides";
  this.userCode = `
        ` + n + " strides = " + n + "(" + this.strides + `);
         void main() {
          ` + o + ` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < ` + this.sliceDim + `; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * ` + a + `;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `;
};
function Jp(r, t) {
  var e = $e();
  return jf(r, t, e.version + `
    precision highp float;
    ` + e.attribute + ` vec3 clipSpacePos;
    ` + e.attribute + ` vec2 uv;
    ` + e.varyingVs + ` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`);
}
function Qp(r, t) {
  return Jf(r, t, new Float32Array([-1, 1, 0, 0, 1, -1, -1, 0, 0, 0, 1, 1, 0, 1, 1, 1, -1, 0, 1, 0]));
}
function Zp(r, t) {
  return Qf(r, t, new Uint16Array([0, 1, 2, 2, 1, 3]));
}
function _r(r, t, e, n, o, a, i) {
  eh(e, n);
  var s = Zf(r, t), u = r.TEXTURE_2D;
  return Q(r, t, function() {
    return r.bindTexture(u, s);
  }), Q(r, t, function() {
    return r.texParameteri(u, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE);
  }), Q(r, t, function() {
    return r.texParameteri(u, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE);
  }), Q(r, t, function() {
    return r.texParameteri(u, r.TEXTURE_MIN_FILTER, r.NEAREST);
  }), Q(r, t, function() {
    return r.texParameteri(u, r.TEXTURE_MAG_FILTER, r.NEAREST);
  }), Q(r, t, function() {
    return r.texImage2D(u, 0, o, e, n, 0, a, i, null);
  }), Q(r, t, function() {
    return r.bindTexture(r.TEXTURE_2D, null);
  }), s;
}
function ed(r, t, e, n, o) {
  var a = Ro(e, n);
  return _r(r, t, a[0], a[1], o.internalFormatFloat, o.textureFormatFloat, r.FLOAT);
}
function td(r, t, e, n, o) {
  var a = Ro(e, n);
  return _r(r, t, a[0], a[1], o.internalFormatHalfFloat, o.textureFormatFloat, o.textureTypeHalfFloat);
}
function nd(r, t, e, n, o) {
  var a = Ro(e, n);
  return _r(r, t, a[0], a[1], r.RGBA, r.RGBA, r.UNSIGNED_BYTE);
}
function rd(r, t, e, n, o) {
  var a = Er(e, n);
  return _r(r, t, a[0], a[1], o.internalFormatPackedFloat, r.RGBA, r.FLOAT);
}
function od(r, t, e, n, o) {
  var a = Er(e, n);
  return _r(r, t, a[0], a[1], o.internalFormatPackedHalfFloat, r.RGBA, o.textureTypeHalfFloat);
}
function ad(r, t, e, n) {
  return Q(r, t, function() {
    return r.bindBuffer(r.ARRAY_BUFFER, n);
  }), bs(r, t, e, "clipSpacePos", n, 3, 20, 0) && bs(r, t, e, "uv", n, 2, 20, 12);
}
function id(r, t, e, n, o, a, i) {
  var s, u, c;
  Q(r, t, function() {
    return r.bindTexture(r.TEXTURE_2D, e);
  }), a instanceof Uint8Array ? (s = new Uint8Array(n * o * 4), u = r.UNSIGNED_BYTE, c = r.RGBA) : (s = new Float32Array(n * o * 4), u = r.FLOAT, c = i.internalFormatPackedFloat), s.set(a), Q(r, t, function() {
    return r.texImage2D(r.TEXTURE_2D, 0, c, n, o, 0, r.RGBA, u, s);
  }), Q(r, t, function() {
    return r.bindTexture(r.TEXTURE_2D, null);
  });
}
function sd(r, t, e, n) {
  Q(r, t, function() {
    return r.bindTexture(r.TEXTURE_2D, e);
  }), n.data instanceof Uint8Array ? Q(r, t, function() {
    return r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, n.width, n.height, 0, r.RGBA, r.UNSIGNED_BYTE, n.data);
  }) : Q(r, t, function() {
    return r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, n);
  }), Q(r, t, function() {
    return r.bindTexture(r.TEXTURE_2D, null);
  });
}
function ud(r, t, e, n, o) {
  var a = r.createBuffer();
  Q(r, t, function() {
    return r.bindBuffer(r.PIXEL_PACK_BUFFER, a);
  });
  var i = 16 * e * n;
  return Q(r, t, function() {
    return r.bufferData(r.PIXEL_PACK_BUFFER, i, r.STREAM_READ);
  }), Q(r, t, function() {
    return r.readPixels(0, 0, n, e, r.RGBA, r.FLOAT, 0);
  }), Q(r, t, function() {
    return r.bindBuffer(r.PIXEL_PACK_BUFFER, null);
  }), a;
}
function cd(r, t, e) {
  var n = r, o = new Float32Array(e);
  return n.bindBuffer(n.PIXEL_PACK_BUFFER, t), n.getBufferSubData(n.PIXEL_PACK_BUFFER, 0, o), n.bindBuffer(n.PIXEL_PACK_BUFFER, null), o;
}
function ld(r, t, e, n, o) {
  var a = Ro(e, n), i = a[0], s = a[1], u = new Uint8Array(e * n * 4);
  return Q(r, t, function() {
    return r.readPixels(0, 0, i, s, o.downloadTextureFormat, r.UNSIGNED_BYTE, u);
  }), new Float32Array(u.buffer);
}
function fd(r, t, e, n, o, a, i, s) {
  var u = r, c = new Float32Array(function(l, f) {
    var h = Er(l, f);
    return h[0] * h[1] * 4;
  }(a, i));
  return u.bindBuffer(u.PIXEL_PACK_BUFFER, t), u.getBufferSubData(u.PIXEL_PACK_BUFFER, 0, c), u.bindBuffer(u.PIXEL_PACK_BUFFER, null), c;
}
function hd(r, t, e, n) {
  var o = new Float32Array(e * n * 4);
  return Q(r, t, function() {
    return r.readPixels(0, 0, n, e, r.RGBA, r.FLOAT, o);
  }), o;
}
var pd = function() {
  function r(t) {
    this.outputTexture = null, this.program = null, this.disposed = !1, this.vertexAttrsAreBound = !1, this.itemsToPoll = [];
    var e = M().getNumber("WEBGL_VERSION");
    t != null ? (this.gl = t, zf(e, t)) : this.gl = Wt(e);
    var n = "WEBGL_color_buffer_float";
    if (M().getNumber("WEBGL_VERSION") === 1) {
      if (this.textureFloatExtension = Or(this.gl, this.debug, "OES_texture_float"), gt(this.gl, "OES_texture_half_float")) this.textureHalfFloatExtension = Or(this.gl, this.debug, "OES_texture_half_float");
      else if (M().get("WEBGL_FORCE_F16_TEXTURES")) throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");
      if (this.colorBufferFloatExtension = this.gl.getExtension(n), gt(this.gl, "EXT_color_buffer_half_float")) this.colorBufferHalfFloatExtension = Or(this.gl, this.debug, "EXT_color_buffer_half_float");
      else if (M().get("WEBGL_FORCE_F16_TEXTURES")) throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");
    } else if (n = "EXT_color_buffer_float", gt(this.gl, n)) this.colorBufferFloatExtension = this.gl.getExtension(n);
    else {
      if (!gt(this.gl, "EXT_color_buffer_half_float")) throw new Error("GL context does not support color renderable floats");
      this.colorBufferHalfFloatExtension = this.gl.getExtension("EXT_color_buffer_half_float");
    }
    this.vertexBuffer = Qp(this.gl, this.debug), this.indexBuffer = Zp(this.gl, this.debug), this.framebuffer = th(this.gl, this.debug), this.textureConfig = oi(this.gl, this.textureHalfFloatExtension);
  }
  return Object.defineProperty(r.prototype, "debug", { get: function() {
    return M().getBool("DEBUG");
  }, enumerable: !0, configurable: !0 }), r.prototype.dispose = function() {
    var t = this;
    if (!this.disposed) {
      this.program != null && console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."), this.outputTexture != null && console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");
      var e = this.gl;
      Q(e, this.debug, function() {
        return e.finish();
      }), Q(e, this.debug, function() {
        return e.bindFramebuffer(e.FRAMEBUFFER, null);
      }), Q(e, this.debug, function() {
        return e.deleteFramebuffer(t.framebuffer);
      }), Q(e, this.debug, function() {
        return e.bindBuffer(e.ARRAY_BUFFER, null);
      }), Q(e, this.debug, function() {
        return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null);
      }), Q(e, this.debug, function() {
        return e.deleteBuffer(t.indexBuffer);
      }), this.disposed = !0;
    }
  }, r.prototype.createFloat32MatrixTexture = function(t, e) {
    return this.throwIfDisposed(), ed(this.gl, this.debug, t, e, this.textureConfig);
  }, r.prototype.createFloat16MatrixTexture = function(t, e) {
    return this.throwIfDisposed(), td(this.gl, this.debug, t, e, this.textureConfig);
  }, r.prototype.createUnsignedBytesMatrixTexture = function(t, e) {
    return this.throwIfDisposed(), nd(this.gl, this.debug, t, e, this.textureConfig);
  }, r.prototype.uploadPixelDataToTexture = function(t, e) {
    this.throwIfDisposed(), sd(this.gl, this.debug, t, e);
  }, r.prototype.uploadDenseMatrixToTexture = function(t, e, n, o) {
    this.throwIfDisposed(), id(this.gl, this.debug, t, e, n, o, this.textureConfig);
  }, r.prototype.createFloat16PackedMatrixTexture = function(t, e) {
    return this.throwIfDisposed(), od(this.gl, this.debug, t, e, this.textureConfig);
  }, r.prototype.createPackedMatrixTexture = function(t, e) {
    return this.throwIfDisposed(), rd(this.gl, this.debug, t, e, this.textureConfig);
  }, r.prototype.deleteMatrixTexture = function(t) {
    var e = this;
    this.throwIfDisposed(), this.outputTexture === t && (xs(this.gl, this.debug, this.framebuffer), this.outputTexture = null), Q(this.gl, this.debug, function() {
      return e.gl.deleteTexture(t);
    });
  }, r.prototype.downloadByteEncodedFloatMatrixFromOutputTexture = function(t, e, n) {
    var o = this;
    return this.downloadMatrixDriver(t, function() {
      return ld(o.gl, o.debug, e, n, o.textureConfig);
    });
  }, r.prototype.downloadPackedMatrixFromBuffer = function(t, e, n, o, a, i) {
    return fd(this.gl, t, 0, 0, 0, a, i, this.textureConfig);
  }, r.prototype.downloadFloat32MatrixFromBuffer = function(t, e) {
    return cd(this.gl, t, e);
  }, r.prototype.createBufferFromTexture = function(t, e, n) {
    this.bindTextureToFrameBuffer(t);
    var o = ud(this.gl, this.debug, e, n, this.textureConfig);
    return this.unbindTextureToFrameBuffer(), o;
  }, r.prototype.createAndWaitForFence = function() {
    var t = this.createFence(this.gl);
    return this.pollFence(t);
  }, r.prototype.createFence = function(t) {
    var e, n, o = this;
    if (M().getBool("WEBGL_FENCE_API_ENABLED")) {
      var a = t, i = a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE, 0);
      t.flush(), n = function() {
        var s = a.clientWaitSync(i, 0, 0);
        return s === a.ALREADY_SIGNALED || s === a.CONDITION_SATISFIED;
      }, e = i;
    } else M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") > 0 ? (e = this.beginQuery(), this.endQuery(), n = function() {
      return o.isQueryAvailable(e, M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"));
    }) : n = function() {
      return !0;
    };
    return { query: e, isFencePassed: n };
  }, r.prototype.downloadMatrixFromPackedTexture = function(t, e, n) {
    var o = this;
    return this.downloadMatrixDriver(t, function() {
      return hd(o.gl, o.debug, e, n);
    });
  }, r.prototype.createProgram = function(t) {
    this.throwIfDisposed();
    var e = this.gl, n = Kf(e, this.debug, t), o = Jp(e, this.debug), a = $f(e, this.debug);
    return Q(e, this.debug, function() {
      return e.attachShader(a, o);
    }), Q(e, this.debug, function() {
      return e.attachShader(a, n);
    }), Yf(e, this.debug, a), this.debug && oa(e, this.debug, a), this.vertexAttrsAreBound || (this.setProgram(a), this.vertexAttrsAreBound = ad(e, this.debug, this.program, this.vertexBuffer)), a;
  }, r.prototype.deleteProgram = function(t) {
    var e = this;
    this.throwIfDisposed(), t === this.program && (this.program = null), t != null && Q(this.gl, this.debug, function() {
      return e.gl.deleteProgram(t);
    });
  }, r.prototype.setProgram = function(t) {
    var e = this;
    this.throwIfDisposed(), this.program = t, this.program != null && this.debug && oa(this.gl, this.debug, this.program), Q(this.gl, this.debug, function() {
      return e.gl.useProgram(t);
    });
  }, r.prototype.getUniformLocation = function(t, e, n) {
    return n === void 0 && (n = !0), this.throwIfDisposed(), n ? rh(this.gl, this.debug, t, e) : oh(this.gl, t, e);
  }, r.prototype.getAttributeLocation = function(t, e) {
    var n = this;
    return this.throwIfDisposed(), Q(this.gl, this.debug, function() {
      return n.gl.getAttribLocation(t, e);
    });
  }, r.prototype.getUniformLocationNoThrow = function(t, e) {
    return this.throwIfDisposed(), this.gl.getUniformLocation(t, e);
  }, r.prototype.setInputMatrixTexture = function(t, e, n) {
    this.throwIfDisposed(), this.throwIfNoProgram(), ah(this.gl, this.debug, this.program, t, e, n);
  }, r.prototype.setOutputMatrixTexture = function(t, e, n) {
    this.setOutputMatrixTextureDriver(t, n, e);
  }, r.prototype.setOutputPackedMatrixTexture = function(t, e, n) {
    this.throwIfDisposed();
    var o = Er(e, n), a = o[0], i = o[1];
    this.setOutputMatrixTextureDriver(t, a, i);
  }, r.prototype.setOutputMatrixWriteRegion = function(t, e, n, o) {
    this.setOutputMatrixWriteRegionDriver(n, t, o, e);
  }, r.prototype.setOutputPackedMatrixWriteRegion = function(t, e, n, o) {
    throw new Error("setOutputPackedMatrixWriteRegion not implemented.");
  }, r.prototype.debugValidate = function() {
    this.program != null && oa(this.gl, this.debug, this.program), Mr(this.gl);
  }, r.prototype.executeProgram = function() {
    this.throwIfDisposed(), this.throwIfNoProgram();
    var t = this.gl;
    this.debug && this.debugValidate(), Q(t, this.debug, function() {
      return t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0);
    });
  }, r.prototype.blockUntilAllProgramsCompleted = function() {
    var t = this;
    this.throwIfDisposed(), Q(this.gl, this.debug, function() {
      return t.gl.finish();
    });
  }, r.prototype.getQueryTimerExtension = function() {
    return this.disjointQueryTimerExtension == null && (this.disjointQueryTimerExtension = Or(this.gl, this.debug, M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") === 2 ? "EXT_disjoint_timer_query_webgl2" : "EXT_disjoint_timer_query")), this.disjointQueryTimerExtension;
  }, r.prototype.getQueryTimerExtensionWebGL2 = function() {
    return this.getQueryTimerExtension();
  }, r.prototype.getQueryTimerExtensionWebGL1 = function() {
    return this.getQueryTimerExtension();
  }, r.prototype.beginQuery = function() {
    if (M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") === 2) {
      var t = this.gl, e = this.getQueryTimerExtensionWebGL2(), n = t.createQuery();
      return t.beginQuery(e.TIME_ELAPSED_EXT, n), n;
    }
    var o = this.getQueryTimerExtensionWebGL1(), a = o.createQueryEXT();
    return o.beginQueryEXT(o.TIME_ELAPSED_EXT, a), a;
  }, r.prototype.endQuery = function() {
    if (M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") !== 2) {
      var t = this.getQueryTimerExtensionWebGL1();
      t.endQueryEXT(t.TIME_ELAPSED_EXT);
    } else {
      var e = this.gl, n = this.getQueryTimerExtensionWebGL2();
      e.endQuery(n.TIME_ELAPSED_EXT);
    }
  }, r.prototype.waitForQueryAndGetTime = function(t) {
    return $(this, void 0, void 0, function() {
      var e = this;
      return Y(this, function(n) {
        switch (n.label) {
          case 0:
            return [4, ps(function() {
              return e.disposed || e.isQueryAvailable(t, M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"));
            })];
          case 1:
            return n.sent(), [2, this.getQueryTime(t, M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))];
        }
      });
    });
  }, r.prototype.getQueryTime = function(t, e) {
    if (e === 0) return null;
    if (e === 2) {
      var n = this.gl;
      return n.getQueryParameter(t, n.QUERY_RESULT) / 1e6;
    }
    var o = this.getQueryTimerExtensionWebGL1();
    return o.getQueryObjectEXT(t, o.QUERY_RESULT_EXT) / 1e6;
  }, r.prototype.isQueryAvailable = function(t, e) {
    if (e === 0) return !0;
    if (e === 2) {
      var n = this.gl, o = this.getQueryTimerExtensionWebGL2(), a = n.getQueryParameter(t, n.QUERY_RESULT_AVAILABLE);
      return this.disjoint == null && (this.disjoint = this.gl.getParameter(o.GPU_DISJOINT_EXT)), a && !this.disjoint;
    }
    return a = (o = this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t, o.QUERY_RESULT_AVAILABLE_EXT), this.disjoint == null && (this.disjoint = this.gl.getParameter(o.GPU_DISJOINT_EXT)), a && !this.disjoint;
  }, r.prototype.pollFence = function(t) {
    var e = this;
    return new Promise(function(n) {
      e.addItemToPoll(function() {
        return t.isFencePassed();
      }, function() {
        return n();
      });
    });
  }, r.prototype.pollItems = function() {
    for (var t = function(n) {
      for (var o = 0; o < n.length && n[o](); ++o)
        ;
      return o - 1;
    }(this.itemsToPoll.map(function(n) {
      return n.isDoneFn;
    })), e = 0; e <= t; ++e)
      (0, this.itemsToPoll[e].resolveFn)();
    this.itemsToPoll = this.itemsToPoll.slice(t + 1);
  }, r.prototype.addItemToPoll = function(t, e) {
    var n = this;
    this.itemsToPoll.push({ isDoneFn: t, resolveFn: e }), this.itemsToPoll.length > 1 || ps(function() {
      return n.pollItems(), n.itemsToPoll.length === 0;
    });
  }, r.prototype.bindTextureToFrameBuffer = function(t) {
    this.throwIfDisposed(), aa(this.gl, this.debug, t, this.framebuffer), this.debug && Mr(this.gl);
  }, r.prototype.unbindTextureToFrameBuffer = function() {
    this.outputTexture != null ? (aa(this.gl, this.debug, this.outputTexture, this.framebuffer), this.debug && Mr(this.gl)) : xs(this.gl, this.debug, this.framebuffer);
  }, r.prototype.downloadMatrixDriver = function(t, e) {
    this.bindTextureToFrameBuffer(t);
    var n = e();
    return this.unbindTextureToFrameBuffer(), n;
  }, r.prototype.setOutputMatrixTextureDriver = function(t, e, n) {
    this.throwIfDisposed();
    var o = this.gl;
    aa(o, this.debug, t, this.framebuffer), this.debug && Mr(o), this.outputTexture = t, Q(o, this.debug, function() {
      return o.viewport(0, 0, e, n);
    }), Q(o, this.debug, function() {
      return o.scissor(0, 0, e, n);
    });
  }, r.prototype.setOutputMatrixWriteRegionDriver = function(t, e, n, o) {
    var a = this;
    this.throwIfDisposed(), Q(this.gl, this.debug, function() {
      return a.gl.scissor(t, e, n, o);
    });
  }, r.prototype.throwIfDisposed = function() {
    if (this.disposed) throw new Error("Attempted to use disposed GPGPUContext.");
  }, r.prototype.throwIfNoProgram = function() {
    if (this.program == null) throw new Error("No GPU program is currently set.");
  }, r;
}();
function Fs(r, t) {
  if (r.length !== t.length) throw Error("Binary was compiled with " + r.length + " inputs, but was executed with " + t.length + " inputs");
  r.forEach(function(e, n) {
    var o = e.logicalShape, a = t[n], i = a.shape;
    if (!Ve(o, i)) throw Error("Binary was compiled with different shapes than the current args. Shapes " + o + " and " + i + " must match");
    if (!e.isUniform || !a.isUniform) {
      var s = e.texShape, u = a.isUniform ? null : a.texData.texShape;
      if (!Ve(s, u)) throw Error("Binary was compiled with different texture shapes than the current args. Shape " + s + " and " + u + " must match");
    }
  });
}
var dd = function(r, t, e) {
  this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = r;
  for (var n = e.filterWidth, o = e.inChannels, a = e.strideWidth, i = e.strideHeight, s = e.padInfo, u = e.outWidth, c = e.dilationWidth, l = e.dilationHeight, f = e.dataFormat, h = s.left, p = s.top, d = o * n, m = $e(), v = f === "channelsLast", g = v ? 0 : 1, y = v ? 1 : 2, x = "", b = 0; b <= 1; b++) for (var w = 0; w <= 1; w++) x += `
          blockIndex = rc.y + ` + w + `;
          pos = rc.x + ` + b + `;

          if(blockIndex < ` + r[1] + " && pos < " + r[0] + `) {
            offsetY = int(blockIndex / (` + u + ")) * " + i + " - " + p + `;
            d0 = offsetY + ` + l + " * (pos / " + d + `);

            if(d0 < ` + t[g] + ` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), ` + u + ".) * " + a + ". - " + h + `.);
              d1 = offsetX + ` + c + " * (int(mod(float(pos), " + d + ".) / " + o + `.));

              if(d1 < ` + t[y] + ` && d1 >= 0) {

                ch = int(mod(float(pos), ` + o + `.));

                if (` + v + `) {
                  innerDims = vec2(d1, ch);
                  result[` + (2 * b + w) + `] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[` + (2 * b + w) + `] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;
  this.userCode = `
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ` + x + `

        ` + m.output + ` = result;
      }
    `;
}, vd = function(r, t, e, n, o) {
  this.variableNames = ["x"], this.outputShape = [];
  var a, i = t, s = r[3] - 1;
  this.outputShape = r;
  var u = "float(" + e + ") + float(" + n + ") * sum";
  a = o === 0.5 ? "inversesqrt(" + u + ")" : o === 1 ? "1.0/(" + u + ")" : "exp(log(" + u + ") * float(-" + o + "));", this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -` + i + "; j <= " + i + `; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ` + s + `) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ` + a + `;
        setOutput(val);
      }
    `;
}, md = function(r, t, e, n, o) {
  this.variableNames = ["inputImage", "outputImage", "dy"], this.outputShape = [], this.outputShape = r, this.depth = r[3], this.depthRadius = t, this.bias = e, this.alpha = n, this.beta = o, this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ` + this.depth + `; ++d) {
          int depthBegin = int(max(0.0, float(d - ` + t + `)));
          int depthEnd = int(min(float(` + this.depth + `),
              float(d + ` + t + ` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ` + this.depth + `;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(` + n + ") * norm + float(" + e + `);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(` + n + `)
                * float(` + o + `)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ` + o + `);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `;
}, gd = function(r, t, e, n, o) {
  this.variableNames = ["x"], this.outputShape = [], this.packedInputs = !0, this.packedOutput = !0;
  var a, i = t, s = r[3] - 1;
  this.outputShape = r;
  var u = "float(" + e + ") + float(" + n + ") * sum";
  a = o === 0.5 ? "inversesqrt(" + u + ")" : o === 1 ? "1.0/(" + u + ")" : "exp(log(" + u + ") * float(-" + o + "));", this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ` + this.outputShape[3] + `;
        bool hasNextRow = c < ` + this.outputShape[2] + `;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ` + i + `;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ` + i + "; j <= " + i + `; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(` + s + `));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ` + a + `;
        setOutput(result);
      }
    `;
}, yd = function(r) {
  this.variableNames = ["dy", "maxPos"], this.outputShape = r.inShape;
  var t = r.strideHeight, e = r.strideWidth, n = r.dilationHeight, o = r.effectiveFilterHeight, a = r.effectiveFilterWidth, i = o - 1 - r.padInfo.top, s = a - 1 - r.padInfo.left, u = o * a - 1;
  this.userCode = `
      const ivec2 pads = ivec2(` + i + ", " + s + `);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ` + o + `;
          wR += ` + n + `) {
          float dyR = float(dyRCorner + wR) / ` + t + `.0;

          if (dyR < 0.0 || dyR >= ` + r.outHeight + `.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ` + a + `; wC++) {
            float dyC = float(dyCCorner + wC) / ` + e + `.0;

            if (dyC < 0.0 || dyC >= ` + r.outWidth + `.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ` + u + ` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ` + a + ` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `;
}, bd = function(r) {
  this.variableNames = ["dy", "maxPos"], this.outputShape = r.inShape;
  var t = r.strideDepth, e = r.strideHeight, n = r.strideWidth, o = r.dilationDepth, a = r.dilationHeight, i = r.dilationWidth, s = r.effectiveFilterDepth, u = r.effectiveFilterHeight, c = r.effectiveFilterWidth, l = s - 1 - r.padInfo.front, f = u - 1 - r.padInfo.top, h = c - 1 - r.padInfo.left, p = s * u * c - 1;
  this.userCode = `
      const ivec3 pads = ivec3(` + l + ", " + f + ", " + h + `);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ` + s + `;
           wD += ` + o + `) {
          float dyD = float(dyDCorner + wD) / ` + t + `.0;

          if (dyD < 0.0 || dyD >= ` + r.outDepth + `.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ` + u + `;
              wR += ` + a + `) {
            float dyR = float(dyRCorner + wR) / ` + e + `.0;

            if (dyR < 0.0 || dyR >= ` + r.outHeight + `.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ` + c + `;
                wC += ` + i + `) {
              float dyC = float(dyCCorner + wC) / ` + n + `.0;

              if (dyC < 0.0 || dyC >= ` + r.outWidth + `.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ` + p + ` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ` + u + " * " + c + ` +
                  wR * ` + c + ` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `;
}, la = function(r, t, e, n, o, a, i) {
  e === void 0 && (e = !1), n === void 0 && (n = !1), o === void 0 && (o = !1), a === void 0 && (a = null), i === void 0 && (i = !1), this.variableNames = ["matrixA", "matrixB"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = t;
  var s = e ? r[1] : r[2], u = Math.ceil(s / 2), c = e ? "i * 2, rc.y" : "rc.y, i * 2", l = n ? "rc.z, i * 2" : "i * 2, rc.z", f = e ? ["a.xxyy", "a.zzww"] : ["a.xxzz", "a.yyww"], h = n ? ["b.xzxz", "b.ywyw"] : ["b.xyxy", "b.zwzw"], p = "", d = "";
  a && (p = i ? `vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ` + a + `
        }` : `vec4 activation(vec4 x) {
          ` + a + `
        }`, d = "result = activation(result);");
  var m = o ? "result += getBiasAtOutCoords();" : "";
  o && this.variableNames.push("bias"), i && this.variableNames.push("preluActivationWeights"), this.userCode = `
      ` + p + `

      const float sharedDimension = ` + u + `.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < ` + u + `; i++) {
          vec4 a = getMatrixA(rc.x, ` + c + `);
          vec4 b = getMatrixB(rc.x, ` + l + `);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (` + f[0] + " * " + h[0] + `);
          result += (` + f[1] + " * " + h[1] + `);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ` + m + `

        ` + d + `

        setOutput(result);
      }
    `;
}, xd = function() {
  function r(t, e, n) {
    this.variableNames = ["probs"], this.outputShape = [t, n], this.userCode = `
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ` + (e - 1) + `; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(` + (e - 1) + `));
      }
    `;
  }
  return r.prototype.getCustomSetupFunc = function(t) {
    var e = this;
    return function(n, o) {
      e.seedLoc == null && (e.seedLoc = n.getUniformLocation(o, "seed")), n.gl.uniform1f(e.seedLoc, t);
    };
  }, r;
}(), wd = function(r, t, e, n) {
  this.variableNames = ["indices"], this.outputShape = [r, t], this.userCode = `
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(` + n + "), float(" + e + `),
                      float(index == coords.y)));
      }
    `;
}, Cd = function(r) {
  this.variableNames = ["A"], this.packedInputs = !1, this.packedOutput = !0, this.outputShape = r;
  var t = r.length;
  if (t === 0) this.userCode = `
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;
  else {
    var e = tt("rc", t), n = Ce(t), o = function(s, u, c) {
      if (s === 1) return "rc > " + u[0];
      for (var l = "", f = s - 2; f < s; f++) l += c[f] + " >= " + u[f], f < s - 1 && (l += "||");
      return l;
    }(t, r, e), a = function(s, u, c, l) {
      if (s === 1) return "";
      var f = l.slice(-2);
      return `
    int r = ` + f[0] + `;
    int c = ` + f[1] + `;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= ` + u + `;
    bool rEdge = rp1 >= ` + c + `;
  `;
    }(t, r[r.length - 1], r[r.length - 2], e), i = function(s, u) {
      var c = s.length, l = function(f, h) {
        for (var p = [], d = 0; d <= 1; d++) for (var m = 0; m <= 1; m++) {
          for (var v = (d === 0 ? "r" : "rp1") + ", " + (m === 0 ? "c" : "cp1"), g = 2; g < f; g++) v = h[h.length - 1 - g] + "," + v;
          p.push(v);
        }
        return p;
      }(c, u);
      return c === 1 ? `getA(rc),
            rc + 1 >= ` + s[0] + ` ? 0. : getA(rc + 1),
            0, 0` : "getA(" + l[0] + `),
          cEdge ? 0. : getA(` + l[1] + `),
          rEdge ? 0. : getA(` + l[2] + `),
          rEdge || cEdge ? 0. : getA(` + l[3] + ")";
    }(r, e);
    this.userCode = `
        void main() {
          ` + n + ` rc = getOutputCoords();

          if(` + o + `) {
            setOutput(vec4(0));
          } else {
            ` + a + `

            setOutput(vec4(` + i + `));
          }
        }
      `;
  }
}, Ed = function(r, t, e) {
  this.variableNames = ["x"], this.outputShape = t.map(function(u, c) {
    return u[0] + r[c] + u[1];
  });
  var n = r.length, o = Ce(n), a = t.map(function(u) {
    return u[0];
  }).join(","), i = t.map(function(u, c) {
    return u[0] + r[c];
  }).join(","), s = ["coords[0]", "coords[1]", "coords[2]", "coords[3]"].slice(0, n);
  this.userCode = n !== 1 ? `
      ` + o + " start = " + o + "(" + a + `);
      ` + o + " end = " + o + "(" + i + `);

      void main() {
        ` + o + ` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(` + e + `));
        } else {
          ` + o + ` coords = outC - start;
          setOutput(getX(` + s + `));
        }
      }
    ` : `
        int start = ` + a + `;
        int end = ` + i + `;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(` + e + `));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;
}, _d = function(r, t, e) {
  this.variableNames = ["x"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = t.map(function(v, g) {
    return v[0] + r[g] + v[1];
  });
  for (var n = r.length, o = Ce(n), a = t.map(function(v) {
    return v[0];
  }).join(","), i = t.map(function(v, g) {
    return v[0] + r[g];
  }).join(","), s = tt("rc", n), u = tt("source", n), c = s[n - 1] + " < " + this.outputShape[n - 1], l = n === 1 ? "source" : "vec2(" + u.slice(-2).join() + ")", f = [o + " rc = outputLoc;", s[n - 1] + ` += 1;
       if(` + c + `) {
      `, n === 1 ? "" : `}
       rc = outputLoc;
       ` + s[n - 2] + ` += 1;
       if(` + s[n - 2] + " < " + this.outputShape[n - 2] + ") {", n === 1 ? "" : "  " + s[n - 1] + ` += 1;
         if(` + c + ") {"], h = n === 1 ? "rc < start || rc >= end" : "any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))", p = "", d = 0, m = n === 1 ? 2 : 4; d < m; d++) p += `
        ` + f[d] + `
        if (` + h + `) {
          result[` + d + "] = float(" + e + `);
        } else {
          ` + o + ` source = rc - start;
          result[` + d + "] = getChannel(getX(" + u.join() + "), " + l + `);
        }
      `;
  p += n === 1 ? "} " : "}}", this.userCode = `
      const ` + o + " start = " + o + "(" + a + `);
      const ` + o + " end = " + o + "(" + i + `);

      void main() {
        ` + o + ` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ` + p + `
        setOutput(result);
      }
    `;
}, fa = function(r, t, e) {
  if (this.variableNames = ["x"], t === "avg" && e) throw new Error("Cannot compute positions for average pool.");
  var n = r.filterWidth, o = r.strideHeight, a = r.strideWidth, i = r.dilationHeight, s = r.dilationWidth, u = r.effectiveFilterHeight, c = r.effectiveFilterWidth, l = r.padInfo.top, f = r.padInfo.left;
  this.outputShape = r.outShape;
  var h = t === "avg", p = "0.0";
  if (h || (p = "-1.0 / 1e-20"), e) this.userCode = `
        const ivec2 strides = ivec2(` + o + ", " + a + `);
        const ivec2 pads = ivec2(` + l + ", " + f + `);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ` + u + `;
              wR += ` + i + `) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ` + r.inHeight + `) {
              continue;
            }

            for (int wC = 0; wC < ` + c + `;
                wC += ` + s + `) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ` + r.inWidth + `) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * ` + c + ` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;
  else {
    var d = t + "(" + t + "(" + t + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
    t === "avg" && (d = "avgValue / count");
    var m = 4 * Math.floor(n / 4), v = n % 4, g = `
      if (` + h + `) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;
    this.userCode = `
      const ivec2 strides = ivec2(` + o + ", " + a + `);
      const ivec2 pads = ivec2(` + l + ", " + f + `);
      const float initializationValue = ` + p + `;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ` + r.inWidth + `) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(` + p + `);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ` + u + `;
            wR += ` + i + `) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ` + r.inHeight + `) {
            continue;
          }

          for (int wC = 0; wC < ` + m + `; wC += 4) {
            int xC = xCCorner + wC * ` + s + `;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ` + s + `, d),
              getValue(batch, xR, xC + 2 * ` + s + `, d),
              getValue(batch, xR, xC + 3 * ` + s + `, d)
            );

            ` + g + `
          }

          int xC = xCCorner + ` + m + `;
          if (` + (v === 1) + `) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ` + g + `
          } else if (` + (v === 2) + `) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ` + s + `, d),
              initializationValue,
              initializationValue
            );

            ` + g + `
          } else if (` + (v === 3) + `) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ` + s + `, d),
              getValue(batch, xR, xC + 2 * ` + s + `, d),
              initializationValue
            );

            ` + g + `
          }
        }
        setOutput(` + d + `);
      }
    `;
  }
}, ha = function(r, t, e) {
  if (this.variableNames = ["x"], t === "avg" && e) throw new Error("Cannot compute positions for average pool.");
  var n = r.filterWidth, o = r.strideDepth, a = r.strideHeight, i = r.strideWidth, s = r.dilationDepth, u = r.dilationHeight, c = r.dilationWidth, l = r.effectiveFilterDepth, f = r.effectiveFilterHeight, h = r.effectiveFilterWidth, p = r.padInfo.front, d = r.padInfo.top, m = r.padInfo.left;
  this.outputShape = r.outShape;
  var v = t === "avg", g = "0.0";
  if (v || (g = "-1.0 / 1e-20"), e) this.userCode = `
        const ivec3 strides =
            ivec3(` + o + ", " + a + ", " + i + `);
        const ivec3 pads = ivec3(` + p + ", " + d + ", " + m + `);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ` + l + `;
              wD += ` + s + `) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ` + r.inDepth + `) {
              continue;
            }

            for (int wR = 0; wR < ` + f + `;
                wR += ` + u + `) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ` + r.inHeight + `) {
                continue;
              }

              for (int wC = 0; wC < ` + h + `;
                  wC += ` + c + `) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ` + r.inWidth + `) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * ` + f + " * " + h + ` +
                      wR * ` + h + ` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;
  else {
    var y = t + "(" + t + "(" + t + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
    t === "avg" && (y = "avgValue / count");
    var x = 4 * Math.floor(n / 4), b = n % 4, w = `
      if (` + v + `) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;
    this.userCode = `
      const ivec3 strides =
        ivec3(` + o + ", " + a + ", " + i + `);
      const ivec3 pads = ivec3(` + p + ", " + d + ", " + m + `);
      const float initializationValue = ` + g + `;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ` + r.inWidth + `) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(` + g + `);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ` + l + `;
            wD += ` + s + `) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ` + r.inDepth + `) {
            continue;
          }

          for (int wR = 0; wR < ` + f + `;
            wR += ` + u + `) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ` + r.inHeight + `) {
              continue;
            }

            for (int wC = 0; wC < ` + x + `; wC += 4) {
              int xC = xCCorner + wC * ` + c + `;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ` + c + `, ch),
                getValue(batch, xD, xR, xC + 2 * ` + c + `, ch),
                getValue(batch, xD, xR, xC + 3 * ` + c + `, ch)
              );

              ` + w + `
            }

            int xC = xCCorner + ` + x + `;
            if (` + (b === 1) + `) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ` + w + `
            } else if (` + (b === 2) + `) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ` + c + `, ch),
                initializationValue,
                initializationValue
              );

              ` + w + `
            } else if (` + (b === 3) + `) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ` + c + `, ch),
                getValue(batch, xD, xR, xC + 2 * ` + c + `, ch),
                initializationValue
              );

              ` + w + `
            }
          }
          setOutput(` + y + `);
        }
      }
    `;
  }
}, Rd = function(r, t) {
  this.variableNames = ["x"];
  var e = r.windowSize, n = r.batchSize, o = r.inSize, a = Math.ceil(o / e);
  this.outputShape = [n, a];
  var i = "0.0", s = "";
  t === "prod" ? i = "1.0" : t === "min" ? (i = "1.0 / 1e-20", s = "min") : t === "max" && (i = "-1.0 / 1e-20", s = "max");
  var u = t + "(" + t + "(" + t + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
  t === "sum" ? u = "sumValue" : t === "prod" ? u = "prodValue" : t === "all" ? u = "allValue" : t === "any" && (u = "anyValue");
  var c = 4 * Math.floor(e / 4), l = e % 4, f = `
      if (` + (t === "sum") + `) {
        sumValue += dot(values, ones);
      } else if (` + (t === "prod") + `) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ` + s + `(values, minMaxValue);
      }
    `, h = "vec4";
  t === "all" ? (i = "1.0", f = `
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `, h = "bvec4") : t === "any" && (i = "0.0", f = `
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `, h = "bvec4");
  var p = "";
  o % e > 0 && (p = `
        if (inIdx < 0 || inIdx >= ` + o + `) {
          return initializationValue;
        }
      `), this.userCode = `
      const float initializationValue = ` + i + `;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ` + p + `
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ` + e + `;

        vec4 minMaxValue = vec4(` + i + `);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ` + c + `; i += 4) {
          int inIdx = inOffset + i;
          ` + h + " values = " + h + `(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ` + f + `
        }

        int inIdx = inOffset + ` + c + `;
        if (` + (l === 1) + `) {
          ` + h + " values = " + h + `(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ` + f + `
        } else if (` + (l === 2) + `) {
          ` + h + " values = " + h + `(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ` + f + `
        } else if (` + (l === 3) + `) {
          ` + h + " values = " + h + `(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ` + f + `
        }
        setOutput(` + u + `);
      }
    `;
}, Sd = function(r, t) {
  this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = r;
  for (var e = "", n = 0; n < 4; n++) {
    var o = "thisRC = rc;";
    n % 2 == 1 && (o += "thisRC.z += 1;"), n > 1 && (o += "thisRC.y += 1;"), e += `
        ` + o + `
        ` + (n > 0 ? "if(thisRC.y < rows && thisRC.z < cols){" : "") + `
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[` + n + `] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ` + (n > 0 ? "}" : "") + `
      `;
  }
  this.userCode = `
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ` + bn(["r", "c", "d"], t) + `
      return ivec3(r, c, d);
    }
  
      ` + di(r) + `

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ` + r[1] + `;
        int cols = ` + r[2] + `;

        ` + e + `

        setOutput(result);
      }
    `;
}, Id = function(r, t, e) {
  this.variableNames = ["dy"], this.outputShape = [], this.outputShape = t.shape;
  var n = t.shape, o = n[1], a = n[2], i = r.shape, s = i[1], u = i[2], c = [e && s > 1 ? o - 1 : o, e && u > 1 ? a - 1 : a], l = [e && s > 1 ? s - 1 : s, e && u > 1 ? u - 1 : u], f = c[0] / l[0], h = c[1] / l[1], p = 1 / f, d = 1 / h, m = 2 * Math.ceil(p) + 2, v = 2 * Math.ceil(d) + 2;
  this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(` + f + `);
        const float widthScale = float(` + h + `);

        const float invHeightScale = float(` + p + `);
        const float invWidthScale = float(` + d + `);

        const int winHeight = int(` + m + `);
        const int winWidth = int(` + v + `);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ` + s + `) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ` + u + `) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ` + (o - 1) + `.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ` + (a - 1) + `.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `;
}, kd = function(r, t, e, n) {
  this.variableNames = ["A"], this.outputShape = [];
  var o = r[0], a = r[1], i = r[2], s = r[3];
  this.outputShape = [o, t, e, s];
  var u = [n && t > 1 ? a - 1 : a, n && e > 1 ? i - 1 : i], c = [n && t > 1 ? t - 1 : t, n && e > 1 ? e - 1 : e];
  this.userCode = `
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ` + u[0] / c[0] + `,
          ` + u[1] / c[1] + `);
      const vec2 inputShapeRC = vec2(` + a + ".0, " + i + `.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `;
}, Ad = function(r, t, e, n) {
  this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = [];
  var o = r[0], a = r[1], i = r[2], s = r[3];
  this.outputShape = [o, t, e, s];
  var u = [n && t > 1 ? a - 1 : a, n && e > 1 ? i - 1 : i], c = [n && t > 1 ? t - 1 : t, n && e > 1 ? e - 1 : e];
  this.userCode = `
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ` + u[0] / c[0] + `,
          ` + u[1] / c[1] + `,
          ` + u[1] / c[1] + `);
      const vec3 inputShapeRC = vec3(` + a + ".0, " + i + `.0,
                                     ` + i + `.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ` + (s - 1) + `;
        bool hasNextRow = coords.z < ` + (e - 1) + `;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `;
}, Dd = function(r, t, e) {
  this.variableNames = ["dy"], this.outputShape = [], this.outputShape = t.shape;
  var n = t.shape, o = n[1], a = n[2], i = r.shape, s = i[1], u = i[2], c = [e && s > 1 ? o - 1 : o, e && u > 1 ? a - 1 : a], l = [e && s > 1 ? s - 1 : s, e && u > 1 ? u - 1 : u], f = c[0] / l[0], h = c[1] / l[1], p = 1 / f, d = 1 / h, m = 2 * Math.ceil(p) + 2, v = 2 * Math.ceil(d) + 2;
  this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(` + f + `);
        const float widthScale = float(` + h + `);

        const float invHeightScale = float(` + p + `);
        const float invWidthScale = float(` + d + `);

        const int winHeight = int(` + m + `);
        const int winWidth = int(` + v + `);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ` + s + `) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ` + u + `) {
              continue;
            }

            float sourceFracRow =
              float(` + c[0] + `) *
                (float(dyR) / float(` + l[0] + `));

            float sourceFracCol =
                float(` + c[1] + `) *
                  (float(dyC) / float(` + l[1] + `));

            int sourceNearestRow = int(min(
                float(int(` + o + `) - 1),
                ` + e + ` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(` + a + `) - 1),
                ` + e + ` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `;
}, Td = function(r, t, e, n) {
  this.variableNames = ["A"], this.outputShape = [];
  var o = r[0], a = r[1], i = r[2], s = r[3];
  this.outputShape = [o, t, e, s];
  var u = [n && t > 1 ? a - 1 : a, n && e > 1 ? i - 1 : i], c = [n && t > 1 ? t - 1 : t, n && e > 1 ? e - 1 : e], l = n ? "0.5" : "0.0";
  this.userCode = `
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ` + u[0] / c[0] + `,
          ` + u[1] / c[1] + `);
      const vec2 inputShapeRC = vec2(` + a + ".0, " + i + `.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ` + l + `)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `;
}, Nd = function(r, t) {
  this.variableNames = ["x"];
  var e = r.length;
  if (e > 4) throw new Error("WebGL backend: Reverse of rank-" + e + " tensor is not yet supported");
  if (this.outputShape = r, e !== 1) {
    var n = r.map(function(a, i) {
      return function(s) {
        return t.indexOf(s) !== -1 && r[s] !== 1 ? r[s] + " - coords[" + s + "] - 1" : "coords[" + s + "]";
      }(i);
    }).join(","), o = Ce(e);
    this.userCode = `
      void main() {
        ` + o + ` coords = getOutputCoords();
        setOutput(getX(` + n + `));
      }
    `;
  } else this.userCode = `
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(` + r[0] + ` - coord - 1));
        }
      `;
}, Fd = function(r, t) {
  this.variableNames = ["x"], this.packedInputs = !0, this.packedOutput = !0;
  var e = r.length;
  if (e > 4) throw new Error("WebGL backend: Reverse of rank-" + e + " tensor is not yet supported");
  this.outputShape = r;
  var n = tt("rc", e), o = n[e - 1] + " + 1 < " + this.outputShape[e - 1], a = n[e - 2] + " + 1 < " + this.outputShape[e - 2], i = Ce(e);
  function s(u) {
    var c = r.map(function(l, f) {
      return function(h, p) {
        return t.indexOf(h) !== -1 && r[h] !== 1 ? r[h] + " - " + p[h] + " - 1" : "" + p[h];
      }(f, u);
    });
    return "getChannel(getX(" + c.join(",") + "), vec2(" + c.slice(-2).join(",") + "))";
  }
  this.userCode = e === 1 ? `
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(` + r[0] + ` - rc - 1),
            ` + r[0] + ` - rc - 1);
          if(` + o + `){
              result.g = getChannel(getX(` + r[0] + ` - (rc  + 1) - 1),
                ` + r[0] + ` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      ` : `
        void main() {
          ` + i + ` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ` + function(u) {
    return s(u);
  }(n.slice()) + `;
          if(` + o + `){
            result.g = ` + function(u) {
    return u[e - 1] = "(" + u[e - 1] + " + 1)", s(u);
  }(n.slice()) + `;
          }
          if(` + a + `) {
            result.b = ` + function(u) {
    return u[e - 2] = "(" + u[e - 2] + " + 1)", s(u);
  }(n.slice()) + `;
            if(` + o + `) {
              result.a = ` + function(u) {
    return u[e - 1] = "(" + u[e - 1] + " + 1)", u[e - 2] = "(" + u[e - 2] + " + 1)", s(u);
  }(n.slice()) + `;
            }
          }
          setOutput(result);
        }
    `;
}, Ps = function(r, t, e, n, o, a, i) {
  this.variableNames = ["updates", "indices", "defaultValue"], this.outputShape = a;
  var s = Ce(o.length), u = Ce(a.length), c = "";
  e === 1 ? c = "i" : e === 2 && (c = "i, j");
  var l = "getIndices(" + c + ")", f = "";
  n === 1 ? f = "i" : n === 2 && (f = "i, coords[1]");
  var h = "getUpdates(" + f + ")", p = t > 1 ? "strides[j]" : "strides";
  this.userCode = `
        ` + s + " strides = " + s + "(" + o + `);

        void main() {
          ` + u + ` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ` + r + `; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ` + t + `; j++) {
              int index = round(` + l + `);
              flattenedIndex += index * ` + p + `;
            }
            if (flattenedIndex == coords[0]) {
              sum += ` + h + `;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `;
}, Pd = function(r, t) {
  this.variableNames = ["x", "segmentIds"];
  var e = r.windowSize, n = r.batchSize, o = r.inSize, a = r.numSegments, i = a * Math.ceil(o / e);
  this.outputShape = [n, i];
  var s = 4 * Math.floor(e / 4), u = e % 4, c = `
        sumValue += dot(values, segFilter);
    `, l = "";
  o % e > 0 && (l = `
        if (inIdx < 0 || inIdx >= ` + o + `) {
          return initializationValue;
        }
      `);
  var f = "";
  o % e > 0 && (f = `
        if (inIdx < 0 || inIdx >= ` + o + `) {
          return -1.0;
        }
      `), this.userCode = `
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        ` + l + `
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ` + f + `
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ` + a + ")) * float(" + e + `));
        int currentSeg = int(mod(float(outIdx), float(` + a + `)));

        float sumValue = 0.0;

        for (int i = 0; i < ` + s + `; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ` + c + `
        }

        int inIdx = inOffset + ` + s + `;
        if (` + (u === 1) + `) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ` + c + `
        } else if (` + (u === 2) + `) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ` + c + `
        } else if (` + (u === 3) + `) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ` + c + `
        }
        setOutput(sumValue);
      }
    `;
}, Od = function(r, t, e) {
  var n, o;
  if (this.variableNames = ["c", "a", "b"], this.outputShape = t, e > 4) throw Error("Where for rank " + e + " is not yet supported");
  if (e === 1) o = "resRC", n = "resRC";
  else {
    for (var a = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], i = [], s = [], u = 0; u < t.length; u++) s.push("" + a[u]), u < r && i.push("" + a[u]);
    n = i.join(), o = s.join();
  }
  var c = Ce(e);
  this.userCode = `
      void main() {
        ` + c + ` resRC = getOutputCoords();
        float cVal = getC(` + n + `);
        if (cVal >= 1.0) {
          setOutput(getA(` + o + `));
        } else {
          setOutput(getB(` + o + `));
        }
      }
    `;
}, Md = function() {
  function r(t) {
    this.variableNames = ["source"], this.outputShape = t, this.rank = t.length;
    var e, n = Ce(this.rank), o = "uniform int start[" + this.rank + "];", a = function(i) {
      if (i === 1) return "sourceLoc";
      if (i <= 6) return pa.slice(0, i).map(function(s) {
        return "sourceLoc." + s;
      }).join(",");
      throw Error("Slicing for rank " + i + " is not yet supported");
    }(this.rank);
    e = `
        ` + n + ` sourceLoc;
        ` + n + ` coords = getOutputCoords();
        ` + t.map(function(i, s) {
      return "sourceLoc." + pa[s] + " = start[" + s + "] + coords." + pa[s] + ";";
    }).join(`
`) + `
      `, this.userCode = `
      ` + o + `
      void main() {
        ` + e + `
        setOutput(getSource(` + a + `));
      }
    `;
  }
  return r.prototype.getCustomSetupFunc = function(t) {
    var e = this;
    if (t.length !== this.rank) throw Error("The rank (" + this.rank + ") of the program must match the length of start (" + t.length + ")");
    return function(n, o) {
      e.startLoc == null && (e.startLoc = n.getUniformLocationNoThrow(o, "start"), e.startLoc == null) || n.gl.uniform1iv(e.startLoc, t);
    };
  }, r;
}(), pa = ["x", "y", "z", "w", "u", "v"], Bd = function() {
  function r(t) {
    this.variableNames = ["source"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = t, this.rank = t.length;
    var e = Ce(this.rank), n = tt("coords", this.rank), o = tt("sourceLoc", this.rank), a = this.rank === 1 ? "sourceLoc" : "vec2(" + o.slice(-2).join() + ")", i = "getChannel(getSource(" + o.join() + "), " + a + ")", s = `
      result.x = ` + i + `;
      if (++` + n[this.rank - 1] + " < " + t[this.rank - 1] + `) {
        ++` + o[this.rank - 1] + `;
        result.y = ` + i + `;
        --` + o[this.rank - 1] + `;
      }
    `, u = this.rank === 1 ? "" : `
      --` + n[this.rank - 1] + `;
      if (++` + n[this.rank - 2] + " < " + t[this.rank - 2] + `) {
        ++` + o[this.rank - 2] + `;
        result.z = ` + i + `;
        if (++` + n[this.rank - 1] + " < " + t[this.rank - 1] + `) {
          ++` + o[this.rank - 1] + `;
          result.w = ` + i + `;
        }
      }
    `, c = this.rank <= 4 ? `sourceLoc = coords +
            ` + e + "(" + t.map(function(l, f) {
      return "start[" + f + "]";
    }).join() + ");" : t.map(function(l, f) {
      return o[f] + " = " + n[f] + " + start[" + f + "];";
    }).join(`
`);
    this.userCode = `
      uniform int start[` + this.rank + `];
      void main() {
        ` + e + ` coords = getOutputCoords();
        ` + e + ` sourceLoc;
        ` + c + `
        vec4 result = vec4(0.);
        ` + s + `
        ` + u + `
        setOutput(result);
      }
    `;
  }
  return r.prototype.getCustomSetupFunc = function(t) {
    var e = this;
    if (t.length !== this.rank) throw Error("The rank (" + this.rank + ") of the program must match the length of start (" + t.length + ")");
    return function(n, o) {
      e.startLoc == null && (e.startLoc = n.getUniformLocationNoThrow(o, "start"), e.startLoc == null) || n.gl.uniform1iv(e.startLoc, t);
    };
  }, r;
}(), Ld = function(r, t, e) {
  this.variableNames = ["x"], this.outputShape = e;
  var n = e.length, o = Ce(e.length), a = Ce(e.length), i = "";
  if (n === 1) i = "coords * strides + begin";
  else {
    var s = 0;
    i = e.map(function(u, c) {
      return s++, e.length === 1 ? "coords * strides[" + c + "] + begin[" + c + "]" : "coords[" + (s - 1) + "] * strides[" + c + "] + begin[" + c + "]";
    }).join(",");
  }
  this.userCode = `
      ` + o + " begin = " + o + "(" + r + `);
      ` + o + " strides = " + o + "(" + t + `);

      void main() {
        ` + a + ` coords = getOutputCoords();
        setOutput(getX(` + i + `));
      }
    `;
}, Wd = function() {
  function r(t) {
    this.gpgpu = t, this.numUsedTextures = 0, this.numFreeTextures = 0, this.freeTextures = {}, this.logEnabled = !1, this.usedTextures = {};
  }
  return r.prototype.acquireTexture = function(t, e, n) {
    var o, a = Os(e, n), i = Ms(t, a, n);
    if (i in this.freeTextures || (this.freeTextures[i] = []), i in this.usedTextures || (this.usedTextures[i] = []), this.freeTextures[i].length > 0) {
      this.numFreeTextures--, this.numUsedTextures++, this.log();
      var s = this.freeTextures[i].shift();
      return this.usedTextures[i].push(s), s;
    }
    return this.numUsedTextures++, this.log(), a === ct.PACKED_2X2_FLOAT32 ? o = this.gpgpu.createPackedMatrixTexture(t[0], t[1]) : a === ct.PACKED_2X2_FLOAT16 ? o = this.gpgpu.createFloat16PackedMatrixTexture(t[0], t[1]) : a === ct.UNPACKED_FLOAT32 ? o = this.gpgpu.createFloat32MatrixTexture(t[0], t[1]) : a === ct.UNPACKED_FLOAT16 ? o = this.gpgpu.createFloat16MatrixTexture(t[0], t[1]) : a === ct.PACKED_4X1_UNSIGNED_BYTE && (o = this.gpgpu.createUnsignedBytesMatrixTexture(t[0], t[1])), this.usedTextures[i].push(o), o;
  }, r.prototype.releaseTexture = function(t, e, n, o) {
    if (this.freeTextures != null) {
      var a = Ms(e, Os(n, o), o);
      a in this.freeTextures || (this.freeTextures[a] = []), this.freeTextures[a].push(t), this.numFreeTextures++, this.numUsedTextures--;
      var i = this.usedTextures[a], s = i.indexOf(t);
      if (s < 0) throw new Error("Cannot release a texture that was never provided by this texture manager");
      i.splice(s, 1), this.log();
    }
  }, r.prototype.log = function() {
    if (this.logEnabled) {
      var t = this.numFreeTextures + this.numUsedTextures;
      console.log("Free/Used", this.numFreeTextures + " / " + this.numUsedTextures, "(" + t + ")");
    }
  }, r.prototype.getNumUsedTextures = function() {
    return this.numUsedTextures;
  }, r.prototype.getNumFreeTextures = function() {
    return this.numFreeTextures;
  }, r.prototype.dispose = function() {
    var t = this;
    if (this.freeTextures != null) {
      for (var e in this.freeTextures) this.freeTextures[e].forEach(function(n) {
        t.gpgpu.deleteMatrixTexture(n);
      });
      for (var e in this.usedTextures) this.usedTextures[e].forEach(function(o) {
        t.gpgpu.deleteMatrixTexture(o);
      });
      this.freeTextures = null, this.usedTextures = null, this.numUsedTextures = 0, this.numFreeTextures = 0;
    }
  }, r;
}();
function Os(r, t) {
  if (r === lt.UPLOAD) return ct.PACKED_2X2_FLOAT32;
  if (r === lt.RENDER || r == null) return function(e) {
    return M().getBool("WEBGL_RENDER_FLOAT32_ENABLED") ? e ? ct.PACKED_2X2_FLOAT32 : ct.UNPACKED_FLOAT32 : e ? ct.PACKED_2X2_FLOAT16 : ct.UNPACKED_FLOAT16;
  }(t);
  if (r === lt.DOWNLOAD || r === lt.PIXELS) return ct.PACKED_4X1_UNSIGNED_BYTE;
  throw new Error("Unknown logical texture type " + r);
}
function Ms(r, t, e) {
  return r[0] + "_" + r[1] + "_" + t + "_" + e;
}
var Ud = function(r, t) {
  this.variableNames = ["A"];
  for (var e = new Array(r.length), n = 0; n < e.length; n++) e[n] = r[n] * t[n];
  this.outputShape = e, this.rank = e.length;
  var o = Ce(this.rank), a = function(i) {
    var s = i.length;
    if (s > 5) throw Error("Tile for rank " + s + " is not yet supported");
    if (s === 1) return "imod(resRC, " + i[0] + ")";
    for (var u = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u"], c = [], l = 0; l < i.length; l++) c.push("imod(" + u[l] + ", " + i[l] + ")");
    return c.join();
  }(r);
  this.userCode = `
      void main() {
        ` + o + ` resRC = getOutputCoords();
        setOutput(getA(` + a + `));
      }
    `;
}, zd = function(r, t) {
  this.variableNames = ["A"];
  for (var e = new Array(r.length), n = 0; n < e.length; n++) e[n] = r[t[n]];
  this.outputShape = e, this.rank = e.length;
  var o = Ce(this.rank), a = function(i) {
    var s = i.length;
    if (s > 6) throw Error("Transpose for rank " + s + " is not yet supported");
    for (var u = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u", "resRC.v"], c = new Array(s), l = 0; l < i.length; l++) c[i[l]] = u[l];
    return c.join();
  }(t);
  this.userCode = `
    void main() {
      ` + o + ` resRC = getOutputCoords();
      setOutput(getA(` + a + `));
    }
    `;
}, Vd = function(r, t) {
  this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0;
  for (var e = new Array(r.length), n = 0; n < e.length; n++) e[n] = r[t[n]];
  if (this.outputShape = e, this.rank = e.length, this.rank > 6) throw Error("Packed transpose for rank " + this.rank + " is not yet supported.");
  var o = Ce(this.rank), a = cc("rc", this.rank), i = new Array(this.rank);
  for (n = 0; n < t.length; n++) i[t[n]] = a[n];
  var s = "vec2(" + i.slice(-2).join() + ")", u = "++" + a[this.rank - 1] + " < " + e[this.rank - 1], c = "getChannel(getA(" + i.join() + "), " + s + ")";
  this.userCode = `
    void main() {
      ` + o + ` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ` + c + `;
      if(` + u + `) {
        result[1] = ` + c + `;
      }
      --` + a[this.rank - 1] + `;
      if(++` + a[this.rank - 2] + " < " + e[this.rank - 2] + `) {
        result[2] = ` + c + `;
        if(` + u + `) {
          result[3] = ` + c + `;
        }
      }
      setOutput(result);
    }
    `;
}, vi = 1.7580993408473768, mi = 1.0507009873554805, se = function(r, t) {
  this.variableNames = ["A"], this.outputShape = r, this.userCode = `
      float unaryOperation(float x) {
        ` + t + `
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `;
}, Et = "if (isnan(x)) return x;", Hd = "return x;", Bs = "return abs(x);", dc = Et + `
  return (x < 0.0) ? 0.0 : x;
`, vc = Et + `
  return (x < 0.0) ? 0.0 : min(6.0, x);
`, mc = "return (x >= 0.0) ? x : (exp(x) - 1.0);", Gd = `
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ` + vi + `;
  float scale = ` + mi + `;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`, Ls = "return -x;", Ws = "return ceil(x);", Us = "return floor(x);", zs = "return exp(x);", Vs = "return exp(x) - 1.0;", qd = Et + `
  return sin(x);
`, jd = Et + `
  return cos(x);
`, Kd = Et + `
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`, Xd = Et + `
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`, $d = Et + `
  return atan(x);
`, Yd = Et + "return log(x + sqrt(x * x + 1.0));", Jd = Et + `
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`, Qd = Et + `
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`, Ur = "return x;", Zd = "return x;", gc = `
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`, yc = `
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`, bc = `
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`, ur = function(r, t) {
  this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = r, this.userCode = `
      vec4 unaryOperation(vec4 x) {
        ` + t + `
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `;
}, ev = function(r) {
  this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !1, this.outputShape = r;
  var t = r.length, e = tt("rc", t), n = Ce(t), o = function(s, u) {
    if (s === 1) return "rc";
    for (var c = "", l = 0; l < s; l++) c += u[l], l < s - 1 && (c += ",");
    return c;
  }(t, e), a = e.slice(-2), i = t <= 1 ? "rc" : "vec2(" + a.join(",") + ")";
  this.userCode = `
      void main() {
        ` + n + ` rc = getOutputCoords();
        vec4 packedInput = getA(` + o + `);

        setOutput(getChannel(packedInput, ` + i + `));
      }
    `;
}, zr = {};
function Vr(r, t) {
  if (t === void 0 && (t = !1), r === "linear") return t ? Zd : Hd;
  if (r === "relu") return t ? gc : dc;
  if (r === "elu") return t ? bc : mc;
  if (r === "relu6") return t ? yc : vc;
  if (r === "prelu") return t ? pc : hc;
  throw new Error("Activation " + r + " has not been implemented for the WebGL backend.");
}
var tv = 600, nv = function(r) {
  function t(e) {
    var n, o = r.call(this) || this;
    if (o.pendingRead = /* @__PURE__ */ new WeakMap(), o.pendingDisposal = /* @__PURE__ */ new WeakSet(), o.dataRefCount = /* @__PURE__ */ new WeakMap(), o.numBytesInGPU = 0, o.uploadWaitMs = 0, o.downloadWaitMs = 0, o.warnedAboutMemory = !1, o.pendingDeletes = 0, o.disposed = !1, !M().getBool("HAS_WEBGL")) throw new Error("WebGL is not supported on this device");
    if (e == null) {
      var a = Wt(M().getNumber("WEBGL_VERSION"));
      o.binaryCache = ((n = M().getNumber("WEBGL_VERSION")) in zr || (zr[n] = {}), zr[n]), o.gpgpu = new pd(a), o.canvas = a.canvas, o.gpgpuCreatedLocally = !0;
    } else o.gpgpu = e, o.binaryCache = {}, o.gpgpuCreatedLocally = !1, o.canvas = e.gl.canvas;
    return o.textureManager = new Wd(o.gpgpu), o.numMBBeforeWarning = M().global.screen == null ? 1024 : M().global.screen.height * M().global.screen.width * window.devicePixelRatio * tv / 1024 / 1024, o.texData = new ec(o, T), o;
  }
  return Ct(t, r), t.prototype.numDataIds = function() {
    return this.texData.numDataIds() + (this.cpuBackend ? this.cpuBackend.numDataIds() : 0) - this.pendingDeletes;
  }, t.prototype.write = function(e, n, o) {
    if (M().getBool("DEBUG") && this.checkNumericalProblems(e), o === "complex64" && e != null) throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");
    var a = {};
    return this.texData.set(a, { shape: n, dtype: o, values: e, usage: lt.UPLOAD }), a;
  }, t.prototype.move = function(e, n, o, a) {
    if (M().getBool("DEBUG") && this.checkNumericalProblems(n), a === "complex64") throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");
    this.texData.set(e, { shape: o, dtype: a, values: n, usage: lt.UPLOAD });
  }, t.prototype.readSync = function(e) {
    var n = this.texData.get(e), o = n.values, a = n.dtype, i = n.complexTensors, s = n.slice, u = n.shape, c = n.isPacked;
    if (s != null) {
      var l = void 0;
      l = c ? new ur(u, Ur) : new se(u, Ur);
      var f = this.runWebGLProgram(l, [{ dataId: e, shape: u, dtype: a }], a), h = this.readSync(f.dataId);
      return this.disposeData(f.dataId), h;
    }
    if (o != null) return this.convertAndCacheOnCPU(e);
    if (a === "string") return o;
    var p, d, m = this.activeTimers != null;
    return m && (p = Tt()), a === "complex64" ? d = za(i.real.dataSync(), i.imag.dataSync()) : d = this.getValuesFromTexture(e), m && (this.downloadWaitMs += Tt() - p), this.convertAndCacheOnCPU(e, d);
  }, t.prototype.read = function(e) {
    return $(this, void 0, void 0, function() {
      var n, o, a, i, s, u, c, l, f, h, p, d, m, v, g, y, x, b, w, C, k, I;
      return Y(this, function(R) {
        switch (R.label) {
          case 0:
            if (this.pendingRead.has(e)) return n = this.pendingRead.get(e), [2, new Promise(function(S) {
              return n.push(S);
            })];
            if (o = this.texData.get(e), a = o.values, i = o.shape, s = o.slice, u = o.dtype, c = o.complexTensors, l = o.isPacked, s != null) return f = void 0, f = l ? new ur(i, Ur) : new se(i, Ur), h = this.runWebGLProgram(f, [{ dataId: e, shape: i, dtype: u }], u), p = this.read(h.dataId), this.disposeData(h.dataId), [2, p];
            if (a != null) return [2, this.convertAndCacheOnCPU(e)];
            if (!M().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED") && M().getNumber("WEBGL_VERSION") === 2) throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");
            return d = null, u !== "complex64" && M().get("WEBGL_BUFFER_SUPPORTED") && (m = this.decode(e), v = this.texData.get(m.dataId), d = (I = this.gpgpu).createBufferFromTexture.apply(I, [v.texture].concat(lr(i)))), this.pendingRead.set(e, []), u === "complex64" ? [3, 2] : [4, this.gpgpu.createAndWaitForFence()];
          case 1:
            R.sent(), R.label = 2;
          case 2:
            return u !== "complex64" ? [3, 4] : [4, Promise.all([c.real.data(), c.imag.data()])];
          case 3:
            return y = R.sent(), x = y[0], b = y[1], g = za(x, b), [3, 5];
          case 4:
            d == null ? g = this.getValuesFromTexture(e) : (w = J(i), g = this.gpgpu.downloadFloat32MatrixFromBuffer(d, w)), R.label = 5;
          case 5:
            return m != null && this.disposeData(m.dataId), C = this.convertAndCacheOnCPU(e, g), k = this.pendingRead.get(e), this.pendingRead.delete(e), k.forEach(function(S) {
              return S(C);
            }), this.pendingDisposal.has(e) && (this.pendingDisposal.delete(e), this.disposeData(e), this.pendingDeletes--), [2, C];
        }
      });
    });
  }, t.prototype.checkNumericalProblems = function(e) {
    if (e != null) for (var n = 0; n < e.length; n++) {
      var o = e[n];
      if (!Gf(o))
        throw M().getBool("WEBGL_RENDER_FLOAT32_CAPABLE") ? Error("The value " + o + " cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'") : Error("The value " + o + " cannot be represented on this device.");
    }
  }, t.prototype.getValuesFromTexture = function(e) {
    var n, o = this.texData.get(e), a = o.shape, i = o.dtype, s = o.isPacked, u = J(a);
    if (M().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")) {
      var c = this.decode(e), l = this.texData.get(c.dataId), f = (n = this.gpgpu).downloadMatrixFromPackedTexture.apply(n, [l.texture].concat(lr(a))).subarray(0, u);
      return this.disposeData(c.dataId), f;
    }
    var h = M().getBool("WEBGL_PACK") && s === !0, p = h ? ia(a) : a, d = h ? new Hp(p) : new Vp(p), m = this.runWebGLProgram(d, [{ shape: p, dtype: i, dataId: e }], "float32"), v = this.texData.get(m.dataId), g = this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture, v.texShape[0], v.texShape[1]).subarray(0, u);
    return this.disposeData(m.dataId), g;
  }, t.prototype.time = function(e) {
    return $(this, void 0, void 0, function() {
      var n, o, a, i, s, u, c;
      return Y(this, function(l) {
        switch (l.label) {
          case 0:
            return n = this.activeTimers, o = [], a = !1, this.programTimersStack == null ? (this.programTimersStack = o, a = !0) : this.activeTimers.push(o), this.activeTimers = o, e(), i = Jn(this.activeTimers.map(function(f) {
              return f.query;
            })).filter(function(f) {
              return f != null;
            }), s = Jn(this.activeTimers.map(function(f) {
              return f.name;
            })).filter(function(f) {
              return f != null;
            }), this.activeTimers = n, a && (this.programTimersStack = null), u = { uploadWaitMs: this.uploadWaitMs, downloadWaitMs: this.downloadWaitMs, kernelMs: null, wallMs: null }, M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? [4, Promise.all(i)] : [3, 2];
          case 1:
            return c = l.sent(), u.kernelMs = _f(c), u.getExtraProfileInfo = function() {
              return c.map(function(f, h) {
                return { name: s[h], ms: f };
              }).map(function(f) {
                return f.name + ": " + f.ms;
              }).join(", ");
            }, [3, 3];
          case 2:
            u.kernelMs = { error: "WebGL query timers are not supported in this environment." }, l.label = 3;
          case 3:
            return this.uploadWaitMs = 0, this.downloadWaitMs = 0, [2, u];
        }
      });
    });
  }, t.prototype.memory = function() {
    return { unreliable: !1, numBytesInGPU: this.numBytesInGPU };
  }, t.prototype.startTimer = function() {
    return M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? this.gpgpu.beginQuery() : { startMs: Tt(), endMs: null };
  }, t.prototype.endTimer = function(e) {
    return M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? (this.gpgpu.endQuery(), e) : (e.endMs = Tt(), e);
  }, t.prototype.getQueryTime = function(e) {
    return $(this, void 0, void 0, function() {
      var n;
      return Y(this, function(o) {
        return M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? [2, this.gpgpu.waitForQueryAndGetTime(e)] : [2, (n = e).endMs - n.startMs];
      });
    });
  }, t.prototype.disposeData = function(e) {
    if (!this.pendingDisposal.has(e)) {
      if (this.pendingRead.has(e)) return this.pendingDisposal.add(e), void this.pendingDeletes++;
      if (this.texData.has(e)) {
        this.releaseGPUData(e);
        var n = this.texData.get(e).complexTensors;
        n != null && (n.real.dispose(), n.imag.dispose()), this.texData.delete(e);
      }
    }
  }, t.prototype.releaseGPUData = function(e) {
    var n = this.texData.get(e), o = n.texture, a = n.dtype, i = n.texShape, s = n.usage, u = n.isPacked, c = n.slice, l = c && c.origDataId || e, f = this.dataRefCount.get(l);
    f > 1 ? this.dataRefCount.set(l, f - 1) : (this.dataRefCount.delete(l), o != null && (this.numBytesInGPU -= this.computeBytes(i, a), this.textureManager.releaseTexture(o, i, s, u)));
    var h = this.texData.get(e);
    h.texture = null, h.texShape = null, h.isPacked = !1, h.slice = null;
  }, t.prototype.getTexture = function(e) {
    return this.uploadToGPU(e), this.texData.get(e).texture;
  }, t.prototype.getDataInfo = function(e) {
    return this.texData.get(e);
  }, t.prototype.getCPUBackend = function() {
    return M().getBool("WEBGL_CPU_FORWARD") ? (this.cpuBackend == null && (this.cpuBackend = T.findBackend("cpu")), this.cpuBackend) : null;
  }, t.prototype.shouldExecuteOnCPU = function(e, n) {
    var o = this;
    return n === void 0 && (n = 128), this.getCPUBackend() != null && e.every(function(a) {
      return o.texData.get(a.dataId).texture == null && a.size < n;
    });
  }, t.prototype.getGPGPUContext = function() {
    return this.gpgpu;
  }, t.prototype.complex = function(e, n) {
    var o = this.makeOutput(e.shape, "complex64");
    return this.texData.get(o.dataId).complexTensors = { real: T.keep(e.clone()), imag: T.keep(n.clone()) }, o;
  }, t.prototype.real = function(e) {
    return this.texData.get(e.dataId).complexTensors.real.clone();
  }, t.prototype.imag = function(e) {
    return this.texData.get(e.dataId).complexTensors.imag.clone();
  }, t.prototype.slice = function(e, n, o) {
    if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.slice(e, n, o);
    if (J(o) === 0) return je([], o, e.dtype);
    var a = this.texData.get(e.dataId).isPacked, i = Qu(e.shape, n, o);
    if (a || !i) {
      var s = M().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new Bd(o) : new Md(o), u = s.getCustomSetupFunc(n);
      return this.compileAndRun(s, [e], null, u);
    }
    return this.uploadToGPU(e.dataId), this.shallowSlice(e, n, o);
  }, t.prototype.shallowSlice = function(e, n, o) {
    var a = this.texData.get(e.dataId), i = this.makeOutput(o, e.dtype), s = this.texData.get(i.dataId);
    Object.assign(s, a), s.shape = o, s.dtype = e.dtype;
    var u = Zu(n, e.strides);
    a.slice && (u += a.slice.flatOffset), s.slice = { flatOffset: u, origDataId: a.slice && a.slice.origDataId || e.dataId };
    var c = this.dataRefCount.get(s.slice.origDataId) || 1;
    return this.dataRefCount.set(s.slice.origDataId, c + 1), i;
  }, t.prototype.stridedSlice = function(e, n, o, a) {
    if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.stridedSlice(e, n, o, a);
    var i = ci(n, o, a);
    if (i.some(function(u) {
      return u === 0;
    })) return je([], i);
    var s = new Ld(n, a, i);
    return this.compileAndRun(s, [e]);
  }, t.prototype.reverse = function(e, n) {
    var o = M().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new Fd(e.shape, n) : new Nd(e.shape, n);
    return this.compileAndRun(o, [e]);
  }, t.prototype.concat = function(e, n) {
    if (e[0].dtype === "complex64") {
      var o = e.map(function(p) {
        return mt(p);
      }), a = e.map(function(p) {
        return Ft(p);
      });
      return Ge(this.concat(o, n), this.concat(a, n));
    }
    if (this.shouldExecuteOnCPU(e)) return this.cpuBackend.concat(e, n);
    if (e.length === 1) return e[0];
    if (e.length > M().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")) {
      var i = Math.floor(e.length / 2), s = this.concat(e.slice(0, i), n), u = this.concat(e.slice(i), n);
      return this.concat([s, u], n);
    }
    if (M().getBool("WEBGL_PACK_ARRAY_OPERATIONS") && e[0].rank > 1) {
      var c = new kp(e.map(function(p) {
        return p.shape;
      }), n);
      return this.compileAndRun(c, e);
    }
    var l = Zn(e.map(function(p) {
      return p.shape;
    }), n), f = e.map(function(p) {
      return p.as2D(-1, J(p.shape.slice(n)));
    }), h = new Ip(f.map(function(p) {
      return p.shape;
    }));
    return this.compileAndRun(h, f).reshape(l);
  }, t.prototype.neg = function(e) {
    if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.neg(e);
    if (M().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(e, Ls, e.dtype);
    var n = new se(e.shape, Ls);
    return this.compileAndRun(n, [e]);
  }, t.prototype.batchMatMul = function(e, n, o, a) {
    var i = o ? e.shape[2] : e.shape[1], s = a ? n.shape[1] : n.shape[2], u = o ? e.shape[1] : e.shape[2], c = e.shape[0];
    if ((i === 1 || s === 1) && u > 1e3) {
      o && (e = e.transpose([0, 2, 1])), a && (n = n.transpose([0, 2, 1]));
      var l = s === 1 ? e : e.as3D(c, u, 1), f = s === 1 ? 2 : 1, h = s === 1 ? n.as3D(c, 1, u) : n;
      return this.multiply(l, h).sum(f, !0);
    }
    var p = qe(e.dtype, n.dtype), d = new la(e.shape, [c, i, s], o, a);
    return this.compileAndRun(d, [e, n], p);
  }, t.prototype.fusedBatchMatMul = function(e) {
    var n = e.a, o = e.b, a = e.transposeA, i = e.transposeB, s = e.bias, u = e.activation, c = e.preluActivationWeights, l = a ? n.shape[2] : n.shape[1], f = i ? o.shape[1] : o.shape[2], h = n.shape[0], p = qe(n.dtype, o.dtype), d = s != null, m = c != null, v = u ? Vr(u, !0) : null, g = new la(n.shape, [h, l, f], a, i, d, v, m), y = [n, o];
    return s && y.push(s), c && y.push(c), this.compileAndRun(g, y, p);
  }, t.prototype.multiply = function(e, n) {
    if (e.dtype === "complex64") {
      var o = this.texData.get(e.dataId), a = this.texData.get(n.dataId), i = new Ss(Cp, e.shape, n.shape), s = new Ss(Ep, e.shape, n.shape), u = [this.makeComplexComponentTensorInfo(e, o.complexTensors.real), this.makeComplexComponentTensorInfo(e, o.complexTensors.imag), this.makeComplexComponentTensorInfo(n, a.complexTensors.real), this.makeComplexComponentTensorInfo(n, a.complexTensors.imag)], c = this.compileAndRun(i, u), l = this.compileAndRun(s, u), f = this.complex(c, l);
      return c.dispose(), l.dispose(), f;
    }
    if (this.shouldExecuteOnCPU([e, n])) return this.cpuBackend.multiply(e, n);
    if (M().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(e, n, Is, e.dtype);
    var h = new De(Is, e.shape, n.shape);
    return this.compileAndRun(h, [e, n], e.dtype);
  }, t.prototype.batchNormalization = function(e, n, o, a, i, s) {
    var u = [e, n, o], c = null;
    s != null && (c = s.shape, u.push(s));
    var l = null;
    if (i != null && (l = i.shape, u.push(i)), M().getBool("WEBGL_PACK_NORMALIZATION")) {
      var f = new wp(e.shape, n.shape, o.shape, c, l, a);
      return this.compileAndRun(f, u);
    }
    var h = new xp(e.shape, n.shape, o.shape, c, l, a);
    return this.compileAndRun(h, u);
  }, t.prototype.localResponseNormalization4D = function(e, n, o, a, i) {
    var s = M().getBool("WEBGL_PACK_NORMALIZATION") ? new gd(e.shape, n, o, a, i) : new vd(e.shape, n, o, a, i);
    return this.compileAndRun(s, [e]);
  }, t.prototype.LRNGrad = function(e, n, o, a, i, s, u) {
    var c = new md(n.shape, a, i, s, u);
    return this.compileAndRun(c, [n, o, e]);
  }, t.prototype.tile = function(e, n) {
    if (e.dtype === "string") {
      var o = this.readSync(e.dataId).map(function(i) {
        return to(i);
      });
      return sc(ae(e.shape, e.dtype, o), n);
    }
    var a = new Ud(e.shape, n);
    return this.compileAndRun(a, [e]);
  }, t.prototype.pad = function(e, n, o) {
    var a = M().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new _d(e.shape, n, o) : new Ed(e.shape, n, o);
    return this.compileAndRun(a, [e]);
  }, t.prototype.transpose = function(e, n) {
    if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.transpose(e, n);
    var o = M().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new Vd(e.shape, n) : new zd(e.shape, n);
    return this.compileAndRun(o, [e]);
  }, t.prototype.gather = function(e, n, o) {
    if (this.shouldExecuteOnCPU([e, n])) return this.cpuBackend.gather(e, n, o);
    var a = new $p(e.shape, n.size, o);
    return this.compileAndRun(a, [e, n]);
  }, t.prototype.batchToSpaceND = function(e, n, o) {
    _(e.rank <= 4, function() {
      return "batchToSpaceND for rank > 4 with a WebGL backend not implemented yet";
    });
    var a = n.reduce(function(f, h) {
      return f * h;
    }), i = so(e.shape, n, a), s = uo(i.length, n.length), u = co(e.shape, n, a), c = Xu(o, n.length), l = $u(u, o, n.length);
    return e.reshape(i).transpose(s).reshape(u).slice(c, l);
  }, t.prototype.spaceToBatchND = function(e, n, o) {
    _(e.rank <= 4, function() {
      return "spaceToBatchND for rank > 4 with a WebGL backend not implemented yet";
    });
    var a = n.reduce(function(h, p) {
      return h * p;
    }), i = [[0, 0]];
    i.push.apply(i, o);
    for (var s = 1 + n.length; s < e.shape.length; ++s) i.push([0, 0]);
    var u = e.pad(i), c = so(u.shape, n, a, !1), l = uo(c.length, n.length, !1), f = co(u.shape, n, a, !1);
    return u.reshape(c).transpose(l).reshape(f);
  }, t.prototype.reduce = function(e, n, o) {
    var a = e.shape[0], i = e.shape[1], s = sa(i), u = new Rd({ windowSize: s, inSize: i, batchSize: a }, n), c = this.compileAndRun(u, [e], o);
    return c.shape[1] === 1 ? c : this.reduce(c, n, o);
  }, t.prototype.argReduce = function(e, n, o) {
    o === void 0 && (o = null);
    var a = e.shape[0], i = e.shape[1];
    o != null && (a = o.shape[0], i = o.shape[1]);
    var s = sa(i), u = new fp({ windowSize: s, inSize: i, batchSize: a }, n, o == null), c = [e];
    o != null && c.push(o);
    var l = this.compileAndRun(u, c, "int32");
    return l.shape[1] === 1 ? l : this.argReduce(e, n, l);
  }, t.prototype.argReducePacked = function(e, n, o) {
    o === void 0 && (o = null);
    var a = o != null ? o.shape : e.shape, i = sa(a[a.length - 1]), s = new gp(a, i, n, o == null), u = o == null ? [e] : [e, o], c = this.compileAndRun(s, u, "int32");
    return c.rank === e.rank ? this.argReducePacked(e, n, c) : c;
  }, t.prototype.sum = function(e, n) {
    ut("sum", n, e.rank);
    var o = Ke(e.shape, n), a = o[0], i = J(o[1]), s = e.as2D(-1, i), u = Zo(e.dtype);
    return this.reduce(s, "sum", u).reshape(a);
  }, t.prototype.prod = function(e, n) {
    if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.prod(e, n);
    var o = Ke(e.shape, n), a = o[0], i = J(o[1]), s = e.as2D(-1, i), u = Zo(e.dtype);
    return this.reduce(s, "prod", u).reshape(a);
  }, t.prototype.unsortedSegmentSum = function(e, n, o) {
    var a = 0, i = Ut([a], e.rank), s = e;
    i != null && (s = e.transpose(i), a = zt(1, e.rank)[0]);
    var u = function(p, d, m) {
      for (var v = [], g = p.length, y = 0; y < g; y++) y !== d ? v.push(p[y]) : v.push(m);
      return v;
    }(s.shape, a, o), c = J([s.shape[a]]), l = s.as2D(-1, c), f = Zo(e.dtype), h = this.segOpCompute(l, "unsortedSegmentSum", n, f, o).reshape(u);
    return i != null && (h = h.transpose(ai(i))), h;
  }, t.prototype.segOpCompute = function(e, n, o, a, i) {
    var s = e.shape[0], u = e.shape[1], c = function(h, p) {
      var d, m = !1;
      for (h <= Ju ? (d = h, m = !0) : d = Na(h, Math.floor(Math.sqrt(h))); !m; ) d > p || d === h ? m = !0 : d = Na(h, d + 1);
      return d;
    }(u, i), l = new Pd({ windowSize: c, inSize: u, batchSize: s, numSegments: i }), f = this.compileAndRun(l, [e, o], a);
    return f.shape[1] === i ? f : (o = io(0, i).tile([u / c]), this.segOpCompute(f, n, o, a, i));
  }, t.prototype.argMinMaxReduce = function(e, n, o) {
    var a = [n];
    if (ut("arg" + o.charAt(0).toUpperCase() + o.slice(1), a, e.rank), !M().getBool("WEBGL_PACK_REDUCE") || e.rank <= 2) {
      var i = Ke(e.shape, a), s = i[0], u = J(i[1]), c = e.as2D(-1, u);
      return this.argReduce(c, o).reshape(s);
    }
    return this.argReducePacked(e, o);
  }, t.prototype.argMin = function(e, n) {
    return this.argMinMaxReduce(e, n, "min");
  }, t.prototype.argMax = function(e, n) {
    return this.argMinMaxReduce(e, n, "max");
  }, t.prototype.cumsum = function(e, n, o, a) {
    if (n !== e.rank - 1) throw new Error("WebGL cumsum shader expects an inner-most axis=" + (e.rank - 1) + " but got axis=" + n);
    var i = new Bp(e.shape, o, a);
    return this.compileAndRun(i, [e]);
  }, t.prototype.equal = function(e, n) {
    if (M().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(e, n, `
  return vec4(equal(a, b));
`, "bool");
    var o = new De("return float(a == b);", e.shape, n.shape);
    return this.compileAndRun(o, [e, n], "bool");
  }, t.prototype.notEqual = function(e, n) {
    if (M().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(e, n, `
  return vec4(notEqual(a, b));
`, "bool");
    var o = new De("return float(a != b);", e.shape, n.shape);
    return this.compileAndRun(o, [e, n], "bool");
  }, t.prototype.less = function(e, n) {
    if (this.shouldExecuteOnCPU([e, n])) return this.cpuBackend.less(e, n);
    if (M().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(e, n, `
  return vec4(lessThan(a, b));
`, "bool");
    var o = new De("return float(a < b);", e.shape, n.shape);
    return this.compileAndRun(o, [e, n], "bool");
  }, t.prototype.lessEqual = function(e, n) {
    if (M().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(e, n, `
  return vec4(lessThanEqual(a, b));
`, "bool");
    var o = new De("return float(a <= b);", e.shape, n.shape);
    return this.compileAndRun(o, [e, n], "bool");
  }, t.prototype.greater = function(e, n) {
    if (this.shouldExecuteOnCPU([e, n])) return this.cpuBackend.greater(e, n);
    if (M().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(e, n, `
  return vec4(greaterThan(a, b));
`, "bool");
    var o = new De("return float(a > b);", e.shape, n.shape);
    return this.compileAndRun(o, [e, n], "bool");
  }, t.prototype.greaterEqual = function(e, n) {
    if (M().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(e, n, `
  return vec4(greaterThanEqual(a, b));
`, "bool");
    var o = new De("return float(a >= b);", e.shape, n.shape);
    return this.compileAndRun(o, [e, n], "bool");
  }, t.prototype.logicalNot = function(e) {
    var n = new se(e.shape, "return float(!(x >= 1.0));");
    return this.compileAndRun(n, [e]);
  }, t.prototype.logicalAnd = function(e, n) {
    if (M().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(e, n, `
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`, "bool");
    var o = new De("return float(a >= 1.0 && b >= 1.0);", e.shape, n.shape);
    return this.compileAndRun(o, [e, n], "bool");
  }, t.prototype.logicalOr = function(e, n) {
    if (M().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(e, n, `
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`, "bool");
    var o = new De("return float(a >= 1.0 || b >= 1.0);", e.shape, n.shape);
    return this.compileAndRun(o, [e, n], "bool");
  }, t.prototype.select = function(e, n, o) {
    var a = new Od(e.rank, n.shape, n.rank);
    return this.compileAndRun(a, [e, n, o], qe(n.dtype, o.dtype));
  }, t.prototype.where = function(e) {
    oo("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");
    var n = e.dataSync();
    return pi(e.shape, n);
  }, t.prototype.topk = function(e, n, o) {
    return uc(e.dataSync(), e.shape, e.dtype, n);
  }, t.prototype.min = function(e, n) {
    ut("min", n, e.rank);
    var o = Ke(e.shape, n), a = o[0], i = J(o[1]), s = e.as2D(-1, i);
    return this.reduce(s, "min", s.dtype).reshape(a);
  }, t.prototype.minimum = function(e, n) {
    if (this.shouldExecuteOnCPU([e, n])) return this.cpuBackend.minimum(e, n);
    var o = M().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new Kt(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`, e.shape, n.shape) : new De(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`, e.shape, n.shape);
    return this.compileAndRun(o, [e, n]);
  }, t.prototype.mod = function(e, n) {
    var o = M().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new Kt(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`, e.shape, n.shape) : new De(`if (b == 0.0) return NAN;
  return mod(a, b);`, e.shape, n.shape);
    return this.compileAndRun(o, [e, n]);
  }, t.prototype.max = function(e, n) {
    if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.max(e, n);
    ut("max", n, e.rank);
    var o = Ke(e.shape, n), a = o[0], i = J(o[1]), s = e.as2D(-1, i);
    return this.reduce(s, "max", s.dtype).reshape(a);
  }, t.prototype.maximum = function(e, n) {
    if (this.shouldExecuteOnCPU([e, n])) return this.cpuBackend.maximum(e, n);
    var o = M().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new Kt(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`, e.shape, n.shape) : new De(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`, e.shape, n.shape);
    return this.compileAndRun(o, [e, n]);
  }, t.prototype.all = function(e, n) {
    ut("all", n, e.rank);
    var o = Ke(e.shape, n), a = o[0], i = J(o[1]), s = e.as2D(-1, i);
    return this.reduce(s, "all", s.dtype).reshape(a);
  }, t.prototype.any = function(e, n) {
    ut("any", n, e.rank);
    var o = Ke(e.shape, n), a = o[0], i = J(o[1]), s = e.as2D(-1, i);
    return this.reduce(s, "any", s.dtype).reshape(a);
  }, t.prototype.realDivide = function(e, n) {
    if (M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
      return this.packedBinaryOp(e, n, `
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`, "float32", !0);
    var o = new De(`
if (a == b) {
  return 1.0;
};
return a / b;`, e.shape, n.shape);
    return this.compileAndRun(o, [e, n], "float32");
  }, t.prototype.floorDiv = function(e, n) {
    if (M().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(e, n, `
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`, "int32");
    var o = new De(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`, e.shape, n.shape);
    return this.compileAndRun(o, [e, n], "int32");
  }, t.prototype.add = function(e, n) {
    if (e.dtype === "complex64" && n.dtype === "complex64") return this.complexSeparableBinaryOp(e, n, ua);
    if (this.shouldExecuteOnCPU([e, n])) return this.cpuBackend.add(e, n);
    var o = qe(e.dtype, n.dtype);
    if (M().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(e, n, ua, o);
    var a = new De(ua, e.shape, n.shape);
    return this.compileAndRun(a, [e, n], o);
  }, t.prototype.packedUnaryOp = function(e, n, o) {
    var a = new ur(e.shape, n);
    return this.compileAndRun(a, [e], o);
  }, t.prototype.packedBinaryOp = function(e, n, o, a, i) {
    i === void 0 && (i = !1);
    var s = new Kt(o, e.shape, n.shape, i);
    return this.compileAndRun(s, [e, n], a);
  }, t.prototype.complexSeparableBinaryOp = function(e, n, o) {
    var a = this, i = this.texData.get(e.dataId), s = this.texData.get(n.dataId), u = [[i.complexTensors.real, s.complexTensors.real], [i.complexTensors.imag, s.complexTensors.imag]].map(function(h) {
      var p = h[0], d = h[1], m = a.makeComplexComponentTensorInfo(e, p), v = a.makeComplexComponentTensorInfo(n, d), g = new De(o, e.shape, n.shape);
      return a.compileAndRun(g, [m, v], qe(p.dtype, d.dtype));
    }), c = u[0], l = u[1], f = this.complex(c, l);
    return c.dispose(), l.dispose(), f;
  }, t.prototype.makeComplexComponentTensorInfo = function(e, n) {
    return { dataId: n.dataId, dtype: n.dtype, shape: e.shape };
  }, t.prototype.addN = function(e) {
    if (e.length === 1) return e[0];
    if (e.length > M().get("WEBGL_MAX_TEXTURES_IN_SHADER")) {
      var n = Math.floor(e.length / 2), o = this.addN(e.slice(0, n)), a = this.addN(e.slice(n));
      return this.addN([o, a]);
    }
    var i = e.map(function(c) {
      return c.dtype;
    }).reduce(function(c, l) {
      return qe(c, l);
    }), s = e.map(function(c) {
      return c.shape;
    }), u = M().getBool("WEBGL_PACK") ? new lp(e[0].shape, s) : new cp(e[0].shape, s);
    return this.compileAndRun(u, e, i);
  }, t.prototype.subtract = function(e, n) {
    if (e.dtype === "complex64" && n.dtype === "complex64") return this.complexSeparableBinaryOp(e, n, ca);
    if (this.shouldExecuteOnCPU([e, n])) return this.cpuBackend.subtract(e, n);
    var o = qe(e.dtype, n.dtype);
    if (M().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(e, n, ca, e.dtype);
    var a = new De(ca, e.shape, n.shape);
    return this.compileAndRun(a, [e, n], o);
  }, t.prototype.pow = function(e, n) {
    var o = M().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new Kt(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`, e.shape, n.shape) : new De(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`, e.shape, n.shape), a = qe(e.dtype, n.dtype);
    return this.compileAndRun(o, [e, n], a);
  }, t.prototype.ceil = function(e) {
    if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.ceil(e);
    if (M().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(e, Ws, e.dtype);
    var n = new se(e.shape, Ws);
    return this.compileAndRun(n, [e]);
  }, t.prototype.floor = function(e) {
    if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.floor(e);
    if (M().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(e, Us, e.dtype);
    var n = new se(e.shape, Us);
    return this.compileAndRun(n, [e]);
  }, t.prototype.sign = function(e) {
    var n = new se(e.shape, `
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);
    return this.compileAndRun(n, [e]);
  }, t.prototype.isNaN = function(e) {
    var n = new se(e.shape, "return float(isnan(x));");
    return this.compileAndRun(n, [e], "bool");
  }, t.prototype.isInf = function(e) {
    var n = new se(e.shape, "return float(isinf(x));");
    return this.compileAndRun(n, [e], "bool");
  }, t.prototype.isFinite = function(e) {
    var n = new se(e.shape, "return float(!isnan(x) && !isinf(x));");
    return this.compileAndRun(n, [e], "bool");
  }, t.prototype.round = function(e) {
    var n = new se(e.shape, `
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);
    return this.compileAndRun(n, [e]);
  }, t.prototype.exp = function(e) {
    if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.exp(e);
    if (M().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(e, zs, e.dtype);
    var n = new se(e.shape, zs);
    return this.compileAndRun(n, [e]);
  }, t.prototype.expm1 = function(e) {
    if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.expm1(e);
    if (M().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(e, Vs, e.dtype);
    var n = new se(e.shape, Vs);
    return this.compileAndRun(n, [e]);
  }, t.prototype.softmax = function(e, n) {
    var o = Ue([n], e.shape), a = this.max(e, o), i = at(a.shape, o), s = this.subtract(e, a.reshape(i)), u = this.exp(s), c = this.sum(u, o).reshape(i);
    return this.realDivide(u, c);
  }, t.prototype.log = function(e) {
    if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.log(e);
    if (M().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(e, `
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`, e.dtype);
    var n = new se(e.shape, `if (x < 0.0) return NAN;
  return log(x);`);
    return this.compileAndRun(n, [e]);
  }, t.prototype.log1p = function(e) {
    var n = new se(e.shape, "return log(1.0 + x);");
    return this.compileAndRun(n, [e]);
  }, t.prototype.sqrt = function(e) {
    var n = new se(e.shape, "return sqrt(x);");
    return this.compileAndRun(n, [e]);
  }, t.prototype.rsqrt = function(e) {
    if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.rsqrt(e);
    var n = new se(e.shape, "return inversesqrt(x);");
    return this.compileAndRun(n, [e]);
  }, t.prototype.reciprocal = function(e) {
    var n = new se(e.shape, "return 1.0 / x;");
    return this.compileAndRun(n, [e]);
  }, t.prototype.relu = function(e) {
    var n;
    return n = M().getBool("WEBGL_PACK") ? new ur(e.shape, gc) : new se(e.shape, dc), this.compileAndRun(n, [e]);
  }, t.prototype.relu6 = function(e) {
    var n;
    return n = M().getBool("WEBGL_PACK") ? new ur(e.shape, yc) : new se(e.shape, vc), this.compileAndRun(n, [e]);
  }, t.prototype.prelu = function(e, n) {
    var o = M().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new Kt(pc, e.shape, n.shape) : new De(hc, e.shape, n.shape);
    return this.compileAndRun(o, [e, n]);
  }, t.prototype.elu = function(e) {
    if (M().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(e, bc, e.dtype);
    var n = new se(e.shape, mc);
    return this.compileAndRun(n, [e]);
  }, t.prototype.eluDer = function(e, n) {
    var o = M().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new Kt(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`, e.shape, n.shape) : new De("return (b >= 1.0) ? a : a * (b + 1.0);", e.shape, n.shape);
    return this.compileAndRun(o, [e, n]);
  }, t.prototype.selu = function(e) {
    var n = new se(e.shape, Gd);
    return this.compileAndRun(n, [e]);
  }, t.prototype.int = function(e) {
    var n = new se(e.shape, "return float(int(x));");
    return this.compileAndRun(n, [e], "int32");
  }, t.prototype.clip = function(e, n, o) {
    var a, i = (a = M().getBool("WEBGL_PACK_CLIP") ? new Rp(e.shape) : new _p(e.shape)).getCustomSetupFunc(n, o);
    return this.compileAndRun(a, [e], null, i);
  }, t.prototype.abs = function(e) {
    if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.abs(e);
    if (M().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(e, Bs, e.dtype);
    var n = new se(e.shape, Bs);
    return this.compileAndRun(n, [e]);
  }, t.prototype.complexAbs = function(e) {
    var n = this.texData.get(e.dataId), o = new Sp(e.shape), a = [this.makeComplexComponentTensorInfo(e, n.complexTensors.real), this.makeComplexComponentTensorInfo(e, n.complexTensors.imag)];
    return this.compileAndRun(o, a);
  }, t.prototype.sigmoid = function(e) {
    var n = new se(e.shape, "return 1.0 / (1.0 + exp(-1.0 * x));");
    return this.compileAndRun(n, [e]);
  }, t.prototype.softplus = function(e) {
    var n = new se(e.shape, `
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);
    return this.compileAndRun(n, [e]);
  }, t.prototype.sin = function(e) {
    var n = new se(e.shape, qd);
    return this.compileAndRun(n, [e]);
  }, t.prototype.cos = function(e) {
    var n = new se(e.shape, jd);
    return this.compileAndRun(n, [e]);
  }, t.prototype.tan = function(e) {
    var n = new se(e.shape, "return tan(x);");
    return this.compileAndRun(n, [e]);
  }, t.prototype.asin = function(e) {
    var n = new se(e.shape, Kd);
    return this.compileAndRun(n, [e]);
  }, t.prototype.acos = function(e) {
    var n = new se(e.shape, Xd);
    return this.compileAndRun(n, [e]);
  }, t.prototype.atan = function(e) {
    var n = new se(e.shape, $d);
    return this.compileAndRun(n, [e]);
  }, t.prototype.atan2 = function(e, n) {
    var o = M().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new Kt(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`, e.shape, n.shape) : new De(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`, e.shape, n.shape);
    return this.compileAndRun(o, [e, n]);
  }, t.prototype.sinh = function(e) {
    var n = new se(e.shape, `
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);
    return this.compileAndRun(n, [e]);
  }, t.prototype.cosh = function(e) {
    var n = new se(e.shape, `
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);
    return this.compileAndRun(n, [e]);
  }, t.prototype.tanh = function(e) {
    var n = new se(e.shape, `
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);
    return this.compileAndRun(n, [e]);
  }, t.prototype.asinh = function(e) {
    var n = new se(e.shape, Yd);
    return this.compileAndRun(n, [e]);
  }, t.prototype.acosh = function(e) {
    var n = new se(e.shape, Jd);
    return this.compileAndRun(n, [e]);
  }, t.prototype.atanh = function(e) {
    var n = new se(e.shape, Qd);
    return this.compileAndRun(n, [e]);
  }, t.prototype.erf = function(e) {
    var n = new se(e.shape, `
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);
    return this.compileAndRun(n, [e]);
  }, t.prototype.step = function(e, n) {
    var o = new se(e.shape, function(a) {
      return a === void 0 && (a = 0), Et + `
    return x > 0.0 ? 1.0 : float(` + a + `);
  `;
    }(n));
    return this.compileAndRun(o, [e]);
  }, t.prototype.conv2dByMatMul = function(e, n, o, a, i, s) {
    var u = e.shape, c = this.texData.get(e.dataId), l = o.inChannels, f = u[0] * u[1] * u[2], h = o.outChannels, p = o.dataFormat === "channelsLast", d = (f === 1 || h === 1) && l > 1e3, m = u[2] % 2 != 0 && !!c.isPacked;
    if (d || !M().getBool("WEBGL_LAZILY_UNPACK") || !M().getBool("WEBGL_PACK_BINARY_OPERATIONS") || !m) {
      var v = p ? u[0] * u[1] * u[2] : u[0] * u[2] * u[3], g = this.reshape(e, [1, v, o.inChannels]), y = this.reshape(n, [1, o.inChannels, o.outChannels]);
      return this.reshape(this.fusedBatchMatMul({ a: g, b: y, transposeA: !1, transposeB: !1, bias: a, activation: i, preluActivationWeights: s }), o.outShape);
    }
    var x = p ? u[0] * u[1] * (u[2] + 1) : u[0] * u[2] * (u[3] + 1), b = { dataId: e.dataId, shape: [1, x, o.inChannels], dtype: e.dtype }, w = c.shape;
    c.shape = c.shape.slice(), c.shape[c.shape.length - 2]++, _(Lr(c.shape, b.shape), function() {
      return "packed reshape " + c.shape + " to " + b.shape + " isn't free";
    });
    var C = this.reshape(n, [1, o.inChannels, o.outChannels]), k = this.fusedBatchMatMul({ a: b, b: C, transposeA: !1, transposeB: !1, bias: a, activation: i, preluActivationWeights: s }), I = this.texData.get(k.dataId);
    return _(I.isPacked, function() {
      return "batchMatMul result is expected to be packed";
    }), c.shape = w, I.shape = o.outShape, T.makeTensorFromDataId(k.dataId, o.outShape, k.dtype);
  }, t.prototype.conv2dWithIm2Row = function(e, n, o, a, i, s) {
    var u = o.filterWidth, c = o.filterHeight, l = o.inChannels, f = o.outWidth, h = o.outHeight, p = o.dataFormat === "channelsLast", d = u * c * l, m = h * f, v = [d, m], g = e.squeeze([0]), y = n.reshape([1, d, -1]), x = new dd(v, g.shape, o), b = this.compileAndRun(x, [g]).reshape([1, v[0], v[1]]), w = a != null, C = s != null, k = i ? Vr(i, !0) : null, I = new la(b.shape, [1, m, o.outChannels], !0, !1, w, k, C), R = [b, y];
    a && R.push(a), C && R.push(s);
    var S = this.compileAndRun(I, R);
    return p ? S.reshape([1, h, f, o.outChannels]) : S.reshape([1, o.outChannels, h, f]);
  }, t.prototype.fusedConv2d = function(e) {
    var n = e.input, o = e.filter, a = e.convInfo, i = e.bias, s = e.activation, u = e.preluActivationWeights;
    if (a.filterHeight === 1 && a.filterWidth === 1 && a.dilationHeight === 1 && a.dilationWidth === 1 && a.strideHeight === 1 && a.strideWidth === 1 && (a.padInfo.type === "SAME" || a.padInfo.type === "VALID")) return this.conv2dByMatMul(n, o, a, i, s, u);
    if (M().getBool("WEBGL_CONV_IM2COL") && n.shape[0] === 1) return this.conv2dWithIm2Row(n, o, a, i, s, u);
    var c = i != null, l = u != null, f = s ? Vr(s, !1) : null, h = new ks(a, c, f, l), p = [n, o];
    return i && p.push(i), u && p.push(u), this.compileAndRun(h, p);
  }, t.prototype.conv2d = function(e, n, o) {
    if (o.filterHeight === 1 && o.filterWidth === 1 && o.dilationHeight === 1 && o.dilationWidth === 1 && o.strideHeight === 1 && o.strideWidth === 1 && (o.padInfo.type === "SAME" || o.padInfo.type === "VALID")) return this.conv2dByMatMul(e, n, o);
    if (M().getBool("WEBGL_CONV_IM2COL") && e.shape[0] === 1) return this.conv2dWithIm2Row(e, n, o);
    var a = new ks(o);
    return this.compileAndRun(a, [e, n]);
  }, t.prototype.conv2dDerInput = function(e, n, o) {
    var a = new Dp(o);
    return this.compileAndRun(a, [e, n]);
  }, t.prototype.conv2dDerFilter = function(e, n, o) {
    var a = new Ap(o);
    return this.compileAndRun(a, [e, n]);
  }, t.prototype.fusedDepthwiseConv2D = function(e) {
    var n, o = e.input, a = e.filter, i = e.convInfo, s = e.bias, u = e.activation, c = e.preluActivationWeights, l = M().getBool("WEBGL_PACK_DEPTHWISECONV") && i.strideWidth <= 2 && i.outChannels / i.inChannels == 1, f = u ? Vr(u, l) : null, h = [o, a], p = s != null, d = c != null;
    return p && h.push(s), d && h.push(c), l ? (n = new Ds(i, p, f, d), this.compileAndRun(n, h)) : (n = new As(i, p, f, d), this.compileAndRun(n, h));
  }, t.prototype.depthwiseConv2D = function(e, n, o) {
    var a;
    return M().getBool("WEBGL_PACK_DEPTHWISECONV") && o.strideWidth <= 2 && o.outChannels / o.inChannels == 1 ? (a = new Ds(o), this.compileAndRun(a, [e, n])) : (a = new As(o), this.compileAndRun(a, [e, n]));
  }, t.prototype.depthwiseConv2DDerInput = function(e, n, o) {
    var a = new Pp(o);
    return this.compileAndRun(a, [e, n]);
  }, t.prototype.depthwiseConv2DDerFilter = function(e, n, o) {
    var a = new Fp(o);
    return this.compileAndRun(a, [e, n]);
  }, t.prototype.conv3d = function(e, n, o) {
    var a = new Op(o);
    return this.compileAndRun(a, [e, n]);
  }, t.prototype.conv3dDerInput = function(e, n, o) {
    var a = new Np(o);
    return this.compileAndRun(a, [e, n]);
  }, t.prototype.conv3dDerFilter = function(e, n, o) {
    var a = new Tp(o);
    return this.compileAndRun(a, [e, n]);
  }, t.prototype.maxPool = function(e, n) {
    var o = new fa(n, "max", !1);
    return this.compileAndRun(o, [e]);
  }, t.prototype.avgPool = function(e, n) {
    var o = new fa(n, "avg", !1);
    return this.compileAndRun(o, [e], "float32");
  }, t.prototype.maxPoolBackprop = function(e, n, o, a) {
    var i = new fa(a, "max", !0), s = this.compileAndRun(i, [n]), u = new yd(a), c = this.compileAndRun(u, [e, s], n.dtype);
    return s.dispose(), c;
  }, t.prototype.avgPoolBackprop = function(e, n, o) {
    var a = new yp(o);
    return this.compileAndRun(a, [e], n.dtype);
  }, t.prototype.cast = function(e, n) {
    return rc(e, n, this);
  }, t.prototype.unstack = function(e, n) {
    for (var o = e.shape[n], a = new Array(e.rank - 1), i = 0, s = 0; s < e.rank; s++) s !== n && (a[i++] = e.shape[s]);
    var u = new Array(e.rank).fill(0), c = e.shape.slice();
    c[n] = 1;
    var l = new Array(o);
    for (s = 0; s < l.length; s++) u[n] = s, l[s] = this.slice(e, u, c).reshape(a);
    return l;
  }, t.prototype.avgPool3d = function(e, n) {
    var o = new ha(n, "avg", !1);
    return this.compileAndRun(o, [e], "float32");
  }, t.prototype.avgPool3dBackprop = function(e, n, o) {
    var a = new bp(o);
    return this.compileAndRun(a, [e], n.dtype);
  }, t.prototype.maxPool3d = function(e, n) {
    var o = new ha(n, "max", !1);
    return this.compileAndRun(o, [e], "float32");
  }, t.prototype.maxPool3dBackprop = function(e, n, o, a) {
    var i = new ha(a, "max", !0), s = this.compileAndRun(i, [n]), u = new bd(a), c = this.compileAndRun(u, [e, s], n.dtype);
    return s.dispose(), c;
  }, t.prototype.reshape = function(e, n) {
    var o = this.texData.get(e.dataId);
    if (o.isPacked && !Lr(e.shape, n) && (o.texture === null || !Lr(o.shape, n))) {
      var a = this.packedReshape(e, n);
      return T.makeTensorFromDataId(a.dataId, a.shape, a.dtype);
    }
    return Ua(e, n);
  }, t.prototype.resizeBilinear = function(e, n, o, a) {
    var i = M().getBool("WEBGL_PACK_IMAGE_OPERATIONS") ? new Ad(e.shape, n, o, a) : new kd(e.shape, n, o, a);
    return this.compileAndRun(i, [e], "float32");
  }, t.prototype.resizeBilinearBackprop = function(e, n, o) {
    var a = new Id(e, n, o);
    return this.compileAndRun(a, [e]);
  }, t.prototype.resizeNearestNeighbor = function(e, n, o, a) {
    var i = new Td(e.shape, n, o, a);
    return this.compileAndRun(i, [e]);
  }, t.prototype.resizeNearestNeighborBackprop = function(e, n, o) {
    var a = new Dd(e, n, o);
    return this.compileAndRun(a, [e]);
  }, t.prototype.multinomial = function(e, n, o, a) {
    var i = n ? e : Yt(e), s = i.shape[0], u = i.shape[1], c = new xd(s, u, o), l = c.getCustomSetupFunc(a);
    return this.compileAndRun(c, [i], "int32", l);
  }, t.prototype.oneHot = function(e, n, o, a) {
    var i = new wd(e.size, n, o, a);
    return this.compileAndRun(i, [e]);
  }, t.prototype.diag = function(e) {
    var n = new zp(e.size);
    return this.compileAndRun(n, [e]);
  }, t.prototype.nonMaxSuppression = function(e, n, o, a, i) {
    return oo("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"), fi(e.dataSync(), n.dataSync(), o, a, i);
  }, t.prototype.cropAndResize = function(e, n, o, a, i, s) {
    var u = new Mp(e.shape, n.shape, a, i, s);
    return this.compileAndRun(u, [e, n, o], "float32");
  }, t.prototype.depthToSpace = function(e, n, o) {
    _(n > 1, function() {
      return "blockSize should be > 1 for depthToSpace, but was: " + n;
    });
    var a = e.shape[0], i = o === "NHWC" ? e.shape[1] : e.shape[2], s = o === "NHWC" ? e.shape[2] : e.shape[3], u = o === "NHWC" ? e.shape[3] : e.shape[1], c = i * n, l = s * n, f = u / (n * n), h = new Up(o === "NHWC" ? [a, c, l, f] : [a, f, c, l], n, o);
    return this.compileAndRun(h, [e]);
  }, t.prototype.split = function(e, n, o) {
    return ic(e, n, o);
  }, t.prototype.scatterND = function(e, n, o) {
    var a = lo(0, e, o), i = a.sliceRank, s = a.numUpdates, u = a.sliceSize, c = a.strides, l = a.outputSize, f = [l / u, u], h = e.reshape([s, i]), p = n.reshape([s, u]);
    if (l === 0) return Ua(je([]), o);
    var d = j(0), m = new Ps(s, i, h.rank, p.rank, c, f);
    return this.compileAndRun(m, [p, h, d]).reshape(o);
  }, t.prototype.sparseToDense = function(e, n, o, a) {
    var i = lo(0, e, o), s = i.sliceRank, u = i.numUpdates, c = i.strides, l = i.outputSize, f = new Ps(u, s, e.rank, n.rank, c, [l, 1]);
    return this.compileAndRun(f, [n, e, a]).reshape(o);
  }, t.prototype.fft = function(e) {
    return this.fftImpl(e, !1);
  }, t.prototype.ifft = function(e) {
    return this.fftImpl(e, !0);
  }, t.prototype.fftImpl = function(e, n) {
    var o = this.texData.get(e.dataId), a = new Ns(jp, e.shape, n), i = new Ns(Kp, e.shape, n), s = [this.makeComplexComponentTensorInfo(e, o.complexTensors.real), this.makeComplexComponentTensorInfo(e, o.complexTensors.imag)], u = this.compileAndRun(a, s), c = this.compileAndRun(i, s), l = this.complex(u, c).as2D(e.shape[0], e.shape[1]);
    return u.dispose(), c.dispose(), l;
  }, t.prototype.gatherND = function(e, n) {
    var o = n.shape, a = o[o.length - 1], i = Yu(e, n), s = i[0], u = i[1], c = i[2], l = i[3], f = n.reshape([u, a]), h = e.reshape([e.size / c, c]), p = new Yp(a, l, [u, c]);
    return this.compileAndRun(p, [h, f]).reshape(s);
  }, t.prototype.fill = function(e, n, o) {
    if ((o = o || wr(n)) === "string") {
      var a = eo(o, J(e));
      return a.fill(n), T.makeTensor(a, e, o, this);
    }
    var i = new Xp(e, n), s = i.getCustomSetupFunc(n);
    return this.compileAndRun(i, [], o, s);
  }, t.prototype.onesLike = function(e) {
    if (e.dtype === "string") throw new Error("onesLike is not supported under string dtype");
    return this.fill(e.shape, 1, e.dtype);
  }, t.prototype.zerosLike = function(e) {
    return this.fill(e.shape, e.dtype === "string" ? "" : 0, e.dtype);
  }, t.prototype.linspace = function(e, n, o) {
    return oc(e, n, o);
  }, t.prototype.makeTensorInfo = function(e, n) {
    var o = this.write(null, e, n);
    return this.texData.get(o).usage = null, { dataId: o, shape: e, dtype: n };
  }, t.prototype.makeOutput = function(e, n) {
    var o = this.makeTensorInfo(e, n).dataId;
    return T.makeTensorFromDataId(o, e, n, this);
  }, t.prototype.unpackTensor = function(e) {
    var n = new ev(e.shape);
    return this.runWebGLProgram(n, [e], e.dtype);
  }, t.prototype.packTensor = function(e) {
    var n = new Cd(e.shape);
    return this.runWebGLProgram(n, [e], e.dtype, null, !0);
  }, t.prototype.packedReshape = function(e, n) {
    var o = [no(e.shape)].concat(ro(e.shape)), a = { dtype: e.dtype, shape: o, dataId: e.dataId }, i = [no(n)].concat(ro(n)), s = new Sd(i, o), u = this.runWebGLProgram(s, [a], e.dtype, null, !0);
    return { dataId: u.dataId, shape: n, dtype: u.dtype };
  }, t.prototype.decode = function(e) {
    var n, o = this.texData.get(e), a = o.isPacked, i = o.shape, s = o.dtype, u = ia(i);
    return n = a ? new Wp(u) : new Lp(u), { dtype: s, shape: i, dataId: this.runWebGLProgram(n, [{ shape: u, dtype: s, dataId: e }], s, null, !0).dataId };
  }, t.prototype.runWebGLProgram = function(e, n, o, a, i) {
    var s = this;
    i === void 0 && (i = !1);
    var u = this.makeTensorInfo(e.outputShape, o), c = this.texData.get(u.dataId);
    if (e.packedOutput && (c.isPacked = !0), e.outPackingScheme === vr.DENSE) {
      var l = lr(e.outputShape);
      c.texShape = l.map(function(x) {
        return 2 * x;
      });
    }
    if (e.outTexUsage != null && (c.usage = e.outTexUsage), J(u.shape) === 0) return c.values = pr(u.dtype, 0), u;
    var f = [], h = n.map(function(x) {
      if (x.dtype === "complex64") throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");
      var b = s.texData.get(x.dataId);
      if (b.texture == null) {
        if (!e.packedInputs && J(x.shape) <= M().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM")) return { shape: x.shape, texData: null, isUniform: !0, uniformValues: b.values };
        e.packedInputs && (b.isPacked = !0, b.shape = x.shape);
      } else if (!!b.isPacked != !!e.packedInputs) x = b.isPacked ? s.unpackTensor(x) : s.packTensor(x), f.push(x), b = s.texData.get(x.dataId);
      else if (b.isPacked && !Lr(b.shape, x.shape)) {
        var w = x, C = x.shape;
        x.shape = b.shape, x = s.packedReshape(x, C), f.push(x), b = s.texData.get(x.dataId), w.shape = C;
      }
      return s.uploadToGPU(x.dataId), { shape: x.shape, texData: b, isUniform: !1 };
    });
    this.uploadToGPU(u.dataId);
    var p, d = { shape: u.shape, texData: c, isUniform: !1 }, m = function(x, b, w) {
      var C = "";
      b.concat(w).forEach(function(R) {
        var S = R.texData != null && R.texData.slice != null && R.texData.slice.flatOffset > 0, N = R.isUniform ? "uniform" : R.texData.texShape;
        C += R.shape + "_" + N + "_" + S;
      });
      var k = x.userCode, I = x.constructor.name;
      return I += "_" + C + "_" + k;
    }(e, h, d), v = this.getAndSaveBinary(m, function() {
      return function(x, b, w, C) {
        var k = b.userCode, I = w.map(function(U, G) {
          var q = { logicalShape: U.shape, texShape: U.isUniform ? null : U.texData.texShape, isUniform: U.isUniform, isPacked: !U.isUniform && U.texData.isPacked, flatOffset: null };
          return U.texData != null && U.texData.slice != null && U.texData.slice.flatOffset > 0 && (q.flatOffset = U.texData.slice.flatOffset), { name: b.variableNames[G], shapeInfo: q };
        }), R = I.map(function(U) {
          return U.shapeInfo;
        }), S = { logicalShape: C.shape, texShape: C.texData.texShape, isUniform: !1, isPacked: C.texData.isPacked, flatOffset: null }, N = hp(I, S, k, b.packedInputs), D = x.createProgram(N), W = null, B = x.getUniformLocation(D, "NAN", !1);
        M().getNumber("WEBGL_VERSION") === 1 && (W = x.getUniformLocation(D, "INFINITY", !1));
        for (var L = {}, V = 0; V < b.variableNames.length; V++) {
          var z = b.variableNames[V];
          L[z] = x.getUniformLocation(D, z, !1), L["offset" + z] = x.getUniformLocation(D, "offset" + z, !1);
        }
        return { program: b, source: N, webGLProgram: D, uniformLocations: L, inShapeInfos: R, outShapeInfo: S, infLoc: W, nanLoc: B };
      }(s.gpgpu, e, h, d);
    }), g = this.activeTimers != null;
    if (g && (p = this.startTimer()), function(x, b, w, C, k) {
      Fs(b.inShapeInfos, w), Fs([b.outShapeInfo], [C]);
      var I = C.texData.texture, R = C.texData.texShape;
      C.texData.isPacked ? x.setOutputPackedMatrixTexture(I, R[0], R[1]) : x.setOutputMatrixTexture(I, R[0], R[1]), x.setProgram(b.webGLProgram), M().getNumber("WEBGL_VERSION") === 1 && b.infLoc !== null && x.gl.uniform1f(b.infLoc, 1 / 0), b.nanLoc !== null && x.gl.uniform1f(b.nanLoc, NaN), w.forEach(function(S, N) {
        var D = b.program.variableNames[N], W = b.uniformLocations[D], B = b.uniformLocations["offset" + D];
        if (W != null) if (S.isUniform) if (J(S.shape) < 2) x.gl.uniform1f(W, S.uniformValues[0]);
        else {
          var L = S.uniformValues;
          L instanceof Float32Array || (L = new Float32Array(L)), x.gl.uniform1fv(W, L);
        }
        else S.texData.slice != null && B != null && x.gl.uniform1i(B, S.texData.slice.flatOffset), x.setInputMatrixTexture(S.texData.texture, W, N);
      }), k != null && k(x, b.webGLProgram), x.executeProgram();
    }(this.gpgpu, v, h, d, a), f.forEach(function(x) {
      return s.disposeData(x.dataId);
    }), g && (p = this.endTimer(p), this.activeTimers.push({ name: e.constructor.name, query: this.getQueryTime(p) })), !M().getBool("WEBGL_LAZILY_UNPACK") && c.isPacked && i === !1) {
      var y = this.unpackTensor(u);
      return this.disposeData(u.dataId), y;
    }
    return u;
  }, t.prototype.compileAndRun = function(e, n, o, a, i) {
    i === void 0 && (i = !1), o = o || n[0].dtype;
    var s = this.runWebGLProgram(e, n, o, a, i);
    return T.makeTensorFromDataId(s.dataId, s.shape, s.dtype);
  }, t.prototype.getAndSaveBinary = function(e, n) {
    return e in this.binaryCache || (this.binaryCache[e] = n()), this.binaryCache[e];
  }, t.prototype.getTextureManager = function() {
    return this.textureManager;
  }, t.prototype.dispose = function() {
    var e = this;
    this.disposed || (M().getBool("IS_TEST") || Object.keys(this.binaryCache).forEach(function(n) {
      e.gpgpu.deleteProgram(e.binaryCache[n].webGLProgram), delete e.binaryCache[n];
    }), this.textureManager.dispose(), this.canvas != null && typeof HTMLCanvasElement < "u" && this.canvas instanceof HTMLCanvasElement ? this.canvas.remove() : this.canvas = null, this.gpgpuCreatedLocally && (this.gpgpu.program = null, this.gpgpu.dispose()), this.disposed = !0);
  }, t.prototype.floatPrecision = function() {
    var e = this;
    return this.floatPrecisionValue == null && (this.floatPrecisionValue = X(function() {
      if (!M().get("WEBGL_RENDER_FLOAT32_ENABLED")) {
        var n = M().getBool("DEBUG");
        M().set("DEBUG", !1);
        var o = e.abs(j(1e-8)).dataSync()[0];
        if (M().set("DEBUG", n), o > 0) return 32;
      }
      return 16;
    })), this.floatPrecisionValue;
  }, t.prototype.epsilon = function() {
    return this.floatPrecision() === 32 ? 1e-7 : 1e-4;
  }, t.prototype.uploadToGPU = function(e) {
    var n, o = this.texData.get(e), a = o.shape, i = o.dtype, s = o.values, u = o.texture, c = o.usage, l = o.isPacked;
    if (u == null) {
      var f, h = this.activeTimers != null;
      h && (f = Tt());
      var p = o.texShape;
      if (p == null && (p = uh(a, l), o.texShape = p), s != null) {
        var d = ia(a), m = void 0, v = p[1], g = p[0], y = s instanceof Uint8Array;
        l ? (v = (n = Er(p[0], p[1]))[0], g = n[1], m = new qp(d, [g, v], y)) : m = new Gp(d, [g, v], y);
        var x = this.makeTensorInfo([g, v], i);
        this.texData.get(x.dataId).usage = y ? lt.PIXELS : lt.UPLOAD, this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(x.dataId), v, g, s);
        var b = this.runWebGLProgram(m, [x], i, null, !0), w = this.texData.get(b.dataId);
        o.texture = w.texture, o.texShape = w.texShape, o.isPacked = w.isPacked, o.usage = w.usage, this.disposeData(x.dataId), this.texData.delete(b.dataId), o.values = null, h && (this.uploadWaitMs += Tt() - f);
      } else {
        var C = this.acquireTexture(p, c, i, l);
        o.texture = C;
      }
    }
  }, t.prototype.convertAndCacheOnCPU = function(e, n) {
    var o = this.texData.get(e), a = o.dtype;
    return this.releaseGPUData(e), n != null && (o.values = function(i, s) {
      if (s === "float32" || s === "complex64") return i;
      if (s === "int32" || s === "bool") {
        for (var u = s === "int32" ? new Int32Array(i.length) : new Uint8Array(i.length), c = 0; c < u.length; ++c) u[c] = Math.round(i[c]);
        return u;
      }
      throw new Error("Unknown dtype " + s);
    }(n, a)), o.values;
  }, t.prototype.acquireTexture = function(e, n, o, a) {
    if (this.numBytesInGPU += this.computeBytes(e, o), !this.warnedAboutMemory && this.numBytesInGPU > 1024 * this.numMBBeforeWarning * 1024) {
      var i = (this.numBytesInGPU / 1024 / 1024).toFixed(2);
      this.warnedAboutMemory = !0, console.warn("High memory usage in GPU: " + i + " MB, most likely due to a memory leak");
    }
    return this.textureManager.acquireTexture(e, n, a);
  }, t.prototype.computeBytes = function(e, n) {
    return e[0] * e[1] * Nu(n);
  }, t;
}(tc);
Wu() && T.registerBackend("webgl", function() {
  return new nv();
}, 2);
var rv = A({ square_: function(r) {
  var t = E(r, "x", "square"), e = [t];
  return T.runKernelFunc(function(n, o) {
    return o([t]), n.square(t);
  }, { x: t }, null, "Square", {}, e, []);
} }), gr = "SquaredDifference", xc = A({ squaredDifference_: function(r, t) {
  var e, n = E(r, "a", "squaredDifference"), o = E(t, "b", "squaredDifference");
  e = ke(n, o), n = e[0], o = e[1], he(n.shape, o.shape);
  var a = { a: n, b: o }, i = [n, o];
  return T.runKernelFunc(function(s, u) {
    var c = s.squaredDifference(n, o);
    return u([n, o]), c;
  }, a, function(s, u) {
    var c = u[0], l = u[1], f = j(2);
    return { a: function() {
      return s.mul(c.sub(l).mul(f));
    }, b: function() {
      return s.mul(l.sub(c).mul(f));
    } };
  }, gr, {}, i, []);
} }), ov = A({ abs_: function(r) {
  var t = E(r, "x", "abs");
  return t.dtype === "complex64" ? T.runKernelFunc(function(e) {
    return e.complexAbs(t);
  }, { $x: t }) : T.runKernelFunc(function(e, n) {
    var o = e.abs(t);
    return n([t]), o;
  }, { x: t }, function(e, n) {
    var o = n[0];
    return { x: function() {
      return e.mul(o.toFloat().step(-1));
    } };
  }, "Abs");
} }), av = A({ acos_: function(r) {
  var t = E(r, "x", "acos");
  return T.runKernelFunc(function(e, n) {
    var o = e.acos(t);
    return n([t]), o;
  }, { $x: t }, function(e, n) {
    var o = n[0];
    return { $x: function() {
      return e.divStrict(j(1).sub(o.toFloat().square()).sqrt()).neg();
    } };
  });
} }), iv = A({ acosh_: function(r) {
  var t = E(r, "x", "acosh");
  return T.runKernelFunc(function(e, n) {
    var o = e.acosh(t);
    return n([t]), o;
  }, { $x: t }, function(e, n) {
    var o = n[0];
    return { $x: function() {
      return e.divStrict(o.toFloat().square().sub(1).sqrt());
    } };
  });
} }), sv = A({ asin_: function(r) {
  var t = E(r, "x", "asin");
  return T.runKernelFunc(function(e, n) {
    var o = e.asin(t);
    return n([t]), o;
  }, { $x: t }, function(e, n) {
    var o = n[0];
    return { $x: function() {
      return e.divStrict(j(1).sub(o.toFloat().square()).sqrt());
    } };
  });
} }), uv = A({ asinh_: function(r) {
  var t = E(r, "x", "asinh");
  return T.runKernelFunc(function(e, n) {
    var o = e.asinh(t);
    return n([t]), o;
  }, { $x: t }, function(e, n) {
    var o = n[0];
    return { $x: function() {
      return e.divStrict(j(1).add(o.toFloat().square()).sqrt());
    } };
  });
} }), cv = A({ atan_: function(r) {
  var t = E(r, "x", "atan");
  return T.runKernelFunc(function(e, n) {
    var o = e.atan(t);
    return n([t]), o;
  }, { $x: t }, function(e, n) {
    var o = n[0];
    return { $x: function() {
      return e.div(o.toFloat().square().add(1));
    } };
  });
} }), lv = A({ atanh_: function(r) {
  var t = E(r, "x", "atanh");
  return T.runKernelFunc(function(e, n) {
    var o = e.atanh(t);
    return n([t]), o;
  }, { $x: t }, function(e, n) {
    var o = n[0];
    return { $x: function() {
      return e.div(j(1).sub(o.toFloat().square()));
    } };
  });
} }), fv = A({ ceil_: function(r) {
  var t = E(r, "x", "ceil");
  return T.runKernelFunc(function(e) {
    return e.ceil(t);
  }, { $x: t }, function(e) {
    return { $x: function() {
      return ge(e);
    } };
  });
} }), gi = A({ clipByValue_: function(r, t, e) {
  var n = E(r, "x", "clipByValue");
  _(t <= e, function() {
    return "Error in clip: min (" + t + ") must be less than or equal to max (" + e + ").";
  });
  var o = [n], a = { min: t, max: e };
  return T.runKernelFunc(function(i, s) {
    var u = i.clip(n, t, e);
    return s([n]), u;
  }, { x: n }, function(i, s) {
    var u = s[0];
    return { x: function() {
      return i.where(u.greaterEqual(t).logicalAnd(u.lessEqual(e)), ge(i));
    } };
  }, "ClipByValue", a, o);
} }), hv = A({ cos_: function(r) {
  var t = E(r, "x", "cos"), e = [t];
  return T.runKernelFunc(function(n, o) {
    var a = n.cos(t);
    return o([t]), a;
  }, { x: t }, function(n, o) {
    var a = o[0];
    return { x: function() {
      return a.toFloat().sin().neg().mul(n);
    } };
  }, "Cos", {}, e);
} }), pv = A({ cosh_: function(r) {
  var t = E(r, "x", "cosh");
  return T.runKernelFunc(function(e, n) {
    var o = e.cosh(t);
    return n([t]), o;
  }, { $x: t }, function(e, n) {
    var o = n[0];
    return { $x: function() {
      return o.toFloat().sinh().mulStrict(e);
    } };
  });
} }), dv = A({ erf_: function(r) {
  var t = E(r, "x", "erf");
  return _(t.dtype === "int32" || t.dtype === "float32", function() {
    return "Input dtype must be `int32` or `float32`.";
  }), t.dtype === "int32" && (t = t.toFloat()), T.runKernelFunc(function(e, n) {
    var o = e.erf(t);
    return n([t]), o;
  }, { $x: t }, function(e, n) {
    var o = n[0];
    return { $x: function() {
      return e.mul(o.square().neg().exp().mul(2 / Math.sqrt(Math.PI)));
    } };
  });
} }), Va = A({ exp_: function(r) {
  var t = E(r, "x", "exp");
  return T.runKernelFunc(function(e, n) {
    var o = e.exp(t);
    return n([o]), o;
  }, { x: t }, function(e, n) {
    return { x: function() {
      return e.mulStrict(n[0]);
    } };
  }, "Exp", {}, [], [!0]);
} }), vv = A({ expm1_: function(r) {
  var t = E(r, "x", "expm1");
  return T.runKernelFunc(function(e, n) {
    var o = e.expm1(t);
    return n([t]), o;
  }, { $x: t }, function(e, n) {
    var o = n[0];
    return { $x: function() {
      return e.mul(o.exp());
    } };
  });
} }), mv = A({ floor_: function(r) {
  var t = E(r, "x", "floor");
  return T.runKernelFunc(function(e) {
    return e.floor(t);
  }, { $x: t }, function(e) {
    return { $x: function() {
      return ge(e);
    } };
  });
} }), gv = A({ log_: function(r) {
  var t = E(r, "x", "log"), e = [t];
  return T.runKernelFunc(function(n, o) {
    var a = n.log(t);
    return o([t]), a;
  }, { x: t }, function(n, o) {
    var a = o[0];
    return { x: function() {
      return n.div(a.toFloat());
    } };
  }, "Log", {}, e);
} }), yv = A({ log1p_: function(r) {
  var t = E(r, "x", "log1p");
  return T.runKernelFunc(function(e, n) {
    var o = e.log1p(t);
    return n([t]), o;
  }, { $x: t }, function(e, n) {
    var o = n[0];
    return { $x: function() {
      return e.div(o.add(1));
    } };
  });
} }), bv = A({ logSigmoid_: function(r) {
  var t = E(r, "x", "logSigmoid");
  return T.runKernelFunc(function(e, n) {
    var o = e.softplus(t.neg()).neg();
    return n([t]), o;
  }, { $x: t }, function(e, n) {
    var o = n[0];
    return { $x: function() {
      return e.mul(o.neg().sigmoid());
    } };
  });
} }), vo = A({ neg_: function(r) {
  var t = E(r, "x", "neg"), e = [t];
  return T.runKernelFunc(function(n) {
    return n.neg(t);
  }, { x: t }, function(n) {
    return { x: function() {
      return n.neg();
    } };
  }, "Neg", {}, e);
} }), xv = A({ reciprocal_: function(r) {
  var t = E(r, "x", "reciprocal");
  return T.runKernelFunc(function(e, n) {
    var o = e.reciprocal(t);
    return n([t]), o;
  }, { $x: t }, function(e, n) {
    var o = n[0];
    return { $x: function() {
      return e.div(o.square().neg());
    } };
  });
} }), wv = A({ round_: function(r) {
  var t = E(r, "x", "round");
  return T.runKernelFunc(function(e) {
    return e.round(t);
  }, { $x: t }, function(e) {
    return { $x: function() {
      return ge(e);
    } };
  });
} }), wc = A({ rsqrt_: function(r) {
  var t = E(r, "x", "rsqrt"), e = [t];
  return T.runKernelFunc(function(n, o) {
    var a = n.rsqrt(t);
    return o([t]), a;
  }, { x: t }, function(n, o) {
    var a = o[0];
    return { x: function() {
      return n.div(a.pow(1.5).mul(2)).neg();
    } };
  }, "Rsqrt", {}, e);
} }), Cc = A({ sigmoid_: function(r) {
  var t = E(r, "x", "sigmoid");
  return T.runKernelFunc(function(e, n) {
    var o = e.sigmoid(t);
    return n([o]), o;
  }, { x: t }, function(e, n) {
    var o = n[0];
    return { x: function() {
      return e.mul(o.mul(j(1).sub(o)));
    } };
  }, "Sigmoid");
} }), Cv = A({ sign_: function(r) {
  var t = E(r, "x", "sign");
  return T.runKernelFunc(function(e) {
    return e.sign(t);
  }, { $x: t }, function(e) {
    return { $x: function() {
      return ge(e);
    } };
  });
} }), Ev = A({ isNaN_: function(r) {
  var t = E(r, "x", "isNaN");
  return T.runKernelFunc(function(e) {
    return e.isNaN(t);
  }, { $x: t }, function(e) {
    return { $x: function() {
      return ge(e);
    } };
  });
} }), _v = A({ isInf_: function(r) {
  var t = E(r, "x", "isInf");
  return T.runKernelFunc(function(e) {
    return e.isInf(t);
  }, { $x: t }, function(e) {
    return { $x: function() {
      return ge(e);
    } };
  });
} }), Rv = A({ isFinite_: function(r) {
  var t = E(r, "x", "isFinite");
  return T.runKernelFunc(function(e) {
    return e.isFinite(t);
  }, { $x: t }, function(e) {
    return { $x: function() {
      return ge(e);
    } };
  });
} }), Sv = A({ sin_: function(r) {
  var t = E(r, "x", "sin"), e = [t];
  return T.runKernelFunc(function(n, o) {
    var a = n.sin(t);
    return o([t]), a;
  }, { x: t }, function(n, o) {
    var a = o[0];
    return { x: function() {
      return a.toFloat().cos().mul(n);
    } };
  }, "Sin", {}, e);
} }), Iv = A({ sinh_: function(r) {
  var t = E(r, "x", "sinh");
  return T.runKernelFunc(function(e, n) {
    var o = e.sinh(t);
    return n([t]), o;
  }, { $x: t }, function(e, n) {
    var o = n[0];
    return { $x: function() {
      return o.toFloat().cosh().mulStrict(e);
    } };
  });
} }), kv = A({ softplus_: function(r) {
  var t = E(r, "x", "softplus");
  return T.runKernelFunc(function(e, n) {
    var o = e.softplus(t);
    return n([t]), o;
  }, { $x: t }, function(e, n) {
    var o = n[0];
    return { $x: function() {
      return e.mul(o.sigmoid());
    } };
  });
} }), Av = A({ sqrt_: function(r) {
  var t = E(r, "x", "sqrt");
  return T.runKernelFunc(function(e, n) {
    var o = e.sqrt(t);
    return n([t]), o;
  }, { $x: t }, function(e, n) {
    var o = n[0];
    return { $x: function() {
      return e.div(o.toFloat().sqrt().mul(2));
    } };
  });
} }), Dv = A({ step_: function(r, t) {
  t === void 0 && (t = 0);
  var e = E(r, "x", "step");
  return T.runKernelFunc(function(n) {
    return n.step(e, t);
  }, { $x: e }, function(n) {
    return { $x: function() {
      return ge(n);
    } };
  });
} }), Tv = A({ tan_: function(r) {
  var t = E(r, "x", "tan");
  return T.runKernelFunc(function(e, n) {
    var o = e.tan(t);
    return n([t]), o;
  }, { $x: t }, function(e, n) {
    var o = n[0];
    return { $x: function() {
      return e.div(o.cos().square());
    } };
  });
} }), Nv = A({ tanh_: function(r) {
  var t = E(r, "x", "tanh");
  return T.runKernelFunc(function(e, n) {
    var o = e.tanh(t);
    return n([o]), o;
  }, { x: t }, function(e, n) {
    var o = n[0];
    return { x: function() {
      return j(1).sub(o.square()).mulStrict(e);
    } };
  }, "Tanh", {}, null, [!0]);
} });
function Ec(r, t, e, n, o, a) {
  var i, s, u = E(r, "x", "batchNorm"), c = E(t, "mean", "batchNorm"), l = E(e, "variance", "batchNorm");
  return o != null && (i = E(o, "scale", "batchNorm")), n != null && (s = E(n, "offset", "batchNorm")), _(u.rank === 2, function() {
    return "Error in batchNorm3D: x must be rank 3 but got rank " + u.rank + ".";
  }), _(c.rank === 2 || c.rank === 1, function() {
    return "Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank " + c.rank + ".";
  }), _(l.rank === 2 || l.rank === 1, function() {
    return "Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank " + l.rank + ".";
  }), i != null && _(i.rank === 2 || i.rank === 1, function() {
    return "Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank " + i.rank + ".";
  }), s != null && _(s.rank === 2 || s.rank === 1, function() {
    return "Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank " + s.rank + ".";
  }), Rr(u, c, l, s, i, a);
}
function _c(r, t, e, n, o, a) {
  var i, s, u = E(r, "x", "batchNorm"), c = E(t, "mean", "batchNorm"), l = E(e, "variance", "batchNorm");
  return o != null && (i = E(o, "scale", "batchNorm")), n != null && (s = E(n, "offset", "batchNorm")), _(u.rank === 3, function() {
    return "Error in batchNorm3D: x must be rank 3 but got rank " + u.rank + ".";
  }), _(c.rank === 3 || c.rank === 1, function() {
    return "Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank " + c.rank + ".";
  }), _(l.rank === 3 || l.rank === 1, function() {
    return "Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank " + l.rank + ".";
  }), i != null && _(i.rank === 3 || i.rank === 1, function() {
    return "Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank " + i.rank + ".";
  }), s != null && _(s.rank === 3 || s.rank === 1, function() {
    return "Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank " + s.rank + ".";
  }), Rr(u, c, l, s, i, a);
}
function Rc(r, t, e, n, o, a) {
  var i, s, u = E(r, "x", "batchNorm"), c = E(t, "mean", "batchNorm"), l = E(e, "variance", "batchNorm");
  return o != null && (i = E(o, "scale", "batchNorm")), n != null && (s = E(n, "offset", "batchNorm")), _(u.rank === 4, function() {
    return "Error in batchNorm4D: x must be rank 4 but got rank " + u.rank + ".";
  }), _(c.rank === 4 || c.rank === 1, function() {
    return "Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank " + c.rank + ".";
  }), _(l.rank === 4 || l.rank === 1, function() {
    return "Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank " + l.rank + ".";
  }), i != null && _(i.rank === 4 || i.rank === 1, function() {
    return "Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank " + i.rank + ".";
  }), s != null && _(s.rank === 4 || s.rank === 1, function() {
    return "Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank " + s.rank + ".";
  }), Rr(u, c, l, s, i, a);
}
function Rr(r, t, e, n, o, a) {
  a == null && (a = 1e-3);
  var i, s, u, c = E(r, "x", "batchNorm"), l = E(t, "mean", "batchNorm"), f = E(e, "variance", "batchNorm");
  o != null && (i = E(o, "scale", "batchNorm")), n != null && (s = E(n, "offset", "batchNorm")), _(l.rank === f.rank, function() {
    return "Batch normalization gradient requires mean and variance to have equal ranks.";
  }), _(s == null || l.rank === s.rank, function() {
    return "Batch normalization gradient requires mean and offset to have equal ranks.";
  }), _(i == null || l.rank === i.rank, function() {
    return "Batch normalization gradient requires mean and scale to have equal ranks.";
  }), u = c.rank === 0 || c.rank === 1 ? c.as4D(1, 1, 1, c.size) : c.rank === 2 ? c.as4D(1, 1, c.shape[0], c.shape[1]) : c.rank === 3 ? c.as4D(1, c.shape[0], c.shape[1], c.shape[2]) : c;
  var h = [c, l, f, i];
  return T.runKernelFunc(function(p, d) {
    var m = p.batchNormalization(u, Hr(l), Hr(f), a, Hr(i), Hr(s));
    return d([c, l, f, i]), m;
  }, { x: c, mean: l, variance: f, scale: i, offset: s }, function(p, d) {
    var m = d, v = m[0], g = m[1], y = m[2], x = m[3], b = x ?? j(1), w = Le(g.shape, u.shape), C = [];
    if (g.rank === 1) {
      for (var k = 0; k < u.shape.length - 1; ++k) C.push(u.shape[k]);
      C.push(1);
    }
    var I = v.sub(g), R = p.mul(b), S = wc(y.add(j(a))), N = S.mul(S).mul(S).mul(j(-0.5));
    return { x: function() {
      return g.rank === 1 ? p.mul(Gn(S.as4D(1, 1, 1, g.shape[0]), C)).mul(b).reshape(v.shape) : p.mul(S).mul(b).reshape(v.shape);
    }, mean: function() {
      var D = S.mul(j(-1)).mul(R);
      return g.rank === 1 && (D = D.sum(w)), D.reshape(g.shape);
    }, variance: function() {
      var D = N.mul(I).mul(R);
      return g.rank === 1 && (D = D.sum(w)), D.reshape(g.shape);
    }, scale: function() {
      var D = I.mul(S), W = p.mul(D);
      return g.rank === 1 && (W = W.sum(w)), W.reshape(g.shape);
    }, offset: function() {
      var D = p;
      return g.rank === 1 && (D = D.sum(w)), D.reshape(g.shape);
    } };
  }, "BatchNormalization", { varianceEpsilon: a }, h).reshape(c.shape);
}
function Hr(r) {
  return r == null ? null : r.rank === 0 ? r.as1D() : r.rank === 1 ? r : r.rank === 2 ? r.as4D(1, 1, r.shape[0], r.shape[1]) : r.rank === 3 ? r.as4D(1, r.shape[0], r.shape[1], r.shape[2]) : r;
}
function ko() {
  Uu("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon");
}
var Fv = A({ batchNormalization2d_: function(r, t, e, n, o, a) {
  return n === void 0 && (n = 1e-3), ko(), Ec(r, t, e, a, o, n);
} }), Pv = A({ batchNormalization3d_: function(r, t, e, n, o, a) {
  return n === void 0 && (n = 1e-3), ko(), _c(r, t, e, a, o, n);
} }), Ov = A({ batchNormalization4d_: function(r, t, e, n, o, a) {
  return n === void 0 && (n = 1e-3), ko(), Rc(r, t, e, a, o, n);
} }), Mv = A({ batchNormalization_: function(r, t, e, n, o, a) {
  return n === void 0 && (n = 1e-3), ko(), Rr(r, t, e, a, o, n);
} }), Sc = A({ batchNorm_: Rr }), Bv = A({ batchNorm2d_: Ec }), Lv = A({ batchNorm3d_: _c }), Wv = A({ batchNorm4d_: Rc }), Ao = A({ logicalAnd_: function(r, t) {
  var e = E(r, "a", "logicalAnd", "bool"), n = E(t, "b", "logicalAnd", "bool");
  return he(e.shape, n.shape), T.runKernelFunc(function(o) {
    return o.logicalAnd(e, n);
  }, { a: e, b: n }, null, "LogicalAnd");
} }), Uv = A({ logicalNot_: function(r) {
  var t = E(r, "x", "logicalNot", "bool");
  return T.runKernelFunc(function(e) {
    return e.logicalNot(t);
  }, { $x: t });
} }), Ic = A({ logicalOr_: function(r, t) {
  var e = E(r, "a", "logicalOr", "bool"), n = E(t, "b", "logicalOr", "bool");
  return he(e.shape, n.shape), T.runKernelFunc(function(o) {
    return o.logicalOr(e, n);
  }, { $a: e, $b: n });
} }), zv = A({ logicalXor_: function(r, t) {
  var e = E(r, "a", "logicalXor", "bool"), n = E(t, "b", "logicalXor", "bool");
  return he(e.shape, n.shape), Ic(r, t).logicalAnd(Ao(r, t).logicalNot());
} }), _n = A({ where_: function(r, t, e) {
  var n = E(t, "a", "where"), o = E(e, "b", "where"), a = E(r, "condition", "where", "bool");
  return xe(n.shape, o.shape, "Error in where: "), a.rank === 1 ? _(a.shape[0] === n.shape[0], function() {
    return "The first dimension of `a` must match the size of `condition`.";
  }) : xe(a.shape, o.shape, "Error in where: "), T.runKernelFunc(function(i, s) {
    var u = i.select(a, n, o);
    return s([a]), u;
  }, { $condition: a, $a: n, $b: o }, function(i, s) {
    var u = s[0];
    return { $condition: function() {
      return ge(u).toFloat();
    }, $a: function() {
      return i.mul(u.cast(i.dtype));
    }, $b: function() {
      return i.mul(u.logicalNot().cast(i.dtype));
    } };
  });
} }), kc = function(r) {
  return $(this, void 0, void 0, function() {
    var t, e, n;
    return Y(this, function(o) {
      switch (o.label) {
        case 0:
          return [4, (t = E(r, "condition", "whereAsync", "bool")).data()];
        case 1:
          return e = o.sent(), n = pi(t.shape, e), r !== t && t.dispose(), [2, n];
      }
    });
  });
}, le = A({ add_: function(r, t) {
  var e, n = E(r, "a", "add"), o = E(t, "b", "add");
  e = ke(n, o), n = e[0], o = e[1];
  var a = he(n.shape, o.shape);
  return T.runKernelFunc(function(i) {
    return i.add(n, o);
  }, { a: n, b: o }, function(i) {
    return { a: function() {
      var s = i, u = Le(n.shape, a);
      return u.length > 0 && (s = s.sum(u)), s.reshape(n.shape);
    }, b: function() {
      var s = i, u = Le(o.shape, a);
      return u.length > 0 && (s = s.sum(u)), s.reshape(o.shape);
    } };
  }, "Add");
} }), Vv = A({ addN_: function(r) {
  _(Array.isArray(r), function() {
    return "The argument passed to tf.addN() must be a list of tensors";
  }), _(r.length >= 1, function() {
    return "Must pass at least one tensor to tf.addN(), but got " + r.length;
  });
  var t = r.map(function(o, a) {
    return E(o, "tensors" + a, "addN");
  }), e = t[0];
  t.forEach(function(o) {
    if (o.dtype !== e.dtype) throw new Error("All tensors passed to tf.addN() must have the same dtype");
  }), t.forEach(function(o) {
    if (!Ve(o.shape, e.shape)) throw new Error("All tensors passed to tf.addN() must have the same shape");
  });
  var n = t;
  return T.runKernelFunc(function(o) {
    return o.addN(t);
  }, n, function(o) {
    var a = {};
    return t.forEach(function(i, s) {
      a[s] = function() {
        return o.clone();
      };
    }), a;
  }, "AddN");
} }), Hv = A({ addStrict_: function(r, t) {
  var e = E(r, "a", "addStrict"), n = E(t, "b", "addStrict");
  return xe(e.shape, n.shape, "Error in addStrict: "), e.add(n);
} }), Gv = A({ atan2_: function(r, t) {
  var e, n = E(r, "a", "atan2"), o = E(t, "b", "atan2");
  e = ke(n, o), n = e[0], o = e[1];
  var a = he(n.shape, o.shape);
  return T.runKernelFunc(function(i, s) {
    var u = i.atan2(n, o);
    return s([n, o]), u;
  }, { $a: n, $b: o }, function(i, s) {
    var u = s[0], c = s[1];
    return { $a: function() {
      var l = le(u.square(), c.square()), f = i.mul(c.div(l)), h = Le(u.shape, a);
      return h.length > 0 && (f = f.sum(h)), f.reshape(u.shape);
    }, $b: function() {
      var l = le(u.square(), c.square()), f = vo(i.mul(u.div(l))), h = Le(c.shape, a);
      return h.length > 0 && (f = f.sum(h)), f.reshape(c.shape);
    } };
  });
} }), bt = A({ div_: function(r, t) {
  var e, n = E(r, "a", "div"), o = E(t, "b", "div");
  if (e = ke(n, o), n = e[0], o = e[1], n.dtype === "int32" && o.dtype === "int32") return Ac(n, o);
  var a = he(n.shape, o.shape);
  return T.runKernelFunc(function(i, s) {
    var u = i.realDivide(n, o);
    return s([n, o]), u;
  }, { a: n, b: o }, function(i, s) {
    var u = s[0], c = s[1];
    return { a: function() {
      var l = i.div(c.toFloat()), f = Le(u.shape, a);
      return f.length > 0 ? l.sum(f).reshape(u.shape) : l;
    }, b: function() {
      var l = i.mul(u.toFloat()), f = Le(c.shape, a);
      f.length > 0 && (l = l.sum(f).reshape(c.shape));
      var h = c.square();
      return l.div(h.toFloat()).neg();
    } };
  }, "Div");
} }), qv = A({ divNoNan_: function(r, t) {
  var e, n = E(r, "a", "div"), o = E(t, "b", "div");
  n = (e = ke(n, o))[0], o = e[1];
  var a = bt(n, o), i = ge(a), s = o.equal(i);
  return _n(s, i, a);
} }), jv = A({ divStrict_: function(r, t) {
  var e = E(r, "a", "div"), n = E(t, "b", "div");
  return xe(e.shape, n.shape, "Error in divideStrict: "), e.div(n);
} }), Ac = A({ floorDiv_: function(r, t) {
  var e, n = E(r, "a", "floorDiv"), o = E(t, "b", "floorDiv");
  e = ke(n, o), n = e[0], o = e[1];
  var a = he(n.shape, o.shape);
  return T.runKernelFunc(function(i, s) {
    var u = i.floorDiv(n, o);
    return s([n, o]), u;
  }, { a: n, b: o }, function(i, s) {
    var u = s[0], c = s[1];
    return { a: function() {
      var l = i.div(c.toFloat()), f = Le(u.shape, a);
      return f.length > 0 ? l.sum(f).reshape(u.shape) : l;
    }, b: function() {
      var l = i.mul(u.toFloat()), f = Le(c.shape, a);
      f.length > 0 && (l = l.sum(f).reshape(c.shape));
      var h = c.square();
      return l.div(h.toFloat()).neg();
    } };
  }, "FloorDiv");
} }), yi = A({ maximum_: function(r, t) {
  var e, n = E(r, "a", "maximum"), o = E(t, "b", "maximum");
  return e = ke(n, o), n = e[0], o = e[1], n.dtype === "bool" && (n = n.toInt(), o = o.toInt()), he(n.shape, o.shape), T.runKernelFunc(function(a, i) {
    var s = a.maximum(n, o);
    return i([n, o]), s;
  }, { a: n, b: o }, function(a, i) {
    var s = i[0], u = i[1];
    return { a: function() {
      return a.mul(s.greaterEqual(u).toFloat());
    }, b: function() {
      return a.mul(s.less(u).toFloat());
    } };
  }, "Maximum");
} }), Kv = A({ maximumStrict_: function(r, t) {
  var e = E(r, "a", "maximumStrict"), n = E(t, "b", "maximumStrict");
  return xe(e.shape, n.shape, "Error in maximumStrict: "), e.maximum(n);
} }), Dc = A({ minimum_: function(r, t) {
  var e, n = E(r, "a", "minimum"), o = E(t, "b", "minimum");
  return e = ke(n, o), n = e[0], o = e[1], n.dtype === "bool" && (n = n.toInt(), o = o.toInt()), he(n.shape, o.shape), T.runKernelFunc(function(a, i) {
    var s = a.minimum(n, o);
    return i([n, o]), s;
  }, { a: n, b: o }, function(a, i) {
    var s = i[0], u = i[1];
    return { a: function() {
      return a.mul(s.lessEqual(u).toFloat());
    }, b: function() {
      return a.mul(s.greater(u).toFloat());
    } };
  }, "Minimum");
} }), Xv = A({ minimumStrict_: function(r, t) {
  var e = E(r, "a", "minimumStrict"), n = E(t, "b", "minimumStrict");
  return xe(e.shape, n.shape, "Error in minimumStrict: "), e.minimum(n);
} }), $v = A({ mod_: function(r, t) {
  var e, n = E(r, "a", "mod"), o = E(t, "b", "mod");
  e = ke(n, o), n = e[0], o = e[1];
  var a = he(n.shape, o.shape);
  return T.runKernelFunc(function(i, s) {
    var u = i.mod(n, o);
    return s([n, o]), u;
  }, { $a: n, $b: o }, function(i, s) {
    var u = s[0], c = s[1];
    return { $a: function() {
      var l = Le(u.shape, a);
      return l.length > 0 ? i.sum(l).reshape(u.shape) : i;
    }, $b: function() {
      var l = i.mul(u.div(c).floor().neg()), f = Le(c.shape, a);
      return f.length > 0 ? l.sum(f).reshape(c.shape) : l;
    } };
  });
} }), Yv = A({ modStrict_: function(r, t) {
  var e = E(r, "a", "modStrict"), n = E(t, "b", "modStrict");
  return xe(e.shape, n.shape, "Error in modStrict: "), e.mod(n);
} }), Qe = A({ mul_: function(r, t) {
  var e, n = E(r, "a", "mul"), o = E(t, "b", "mul");
  e = ke(n, o), n = e[0], o = e[1];
  var a = he(n.shape, o.shape);
  return T.runKernelFunc(function(i, s) {
    var u = i.multiply(n, o);
    return s([n, o]), u;
  }, { a: n, b: o }, function(i, s) {
    var u = s[0], c = s[1];
    return { a: function() {
      var l = i.mul(c.toFloat()), f = Le(u.shape, a);
      return f.length > 0 ? l.sum(f).reshape(u.shape) : l;
    }, b: function() {
      var l = i.mul(u.toFloat()), f = Le(c.shape, a);
      return f.length > 0 ? l.sum(f).reshape(c.shape) : l;
    } };
  }, "Mul");
} }), Jv = A({ mulStrict_: function(r, t) {
  var e = E(r, "a", "mul"), n = E(t, "b", "mul");
  return xe(e.shape, n.shape, "Error in multiplyStrict: "), e.mul(n);
} }), mo = A({ pow_: function(r, t) {
  var e, n = E(r, "base", "pow"), o = E(t, "exp", "pow");
  e = ke(n, o), n = e[0], o = e[1];
  var a = he(n.shape, o.shape), i = [n, o];
  return T.runKernelFunc(function(s, u) {
    var c = s.pow(n, o);
    return u([n, o, c]), c;
  }, { a: n, b: o }, function(s, u) {
    var c = u[0], l = u[1], f = u[2];
    return { a: function() {
      var h = l.toFloat(), p = s.mul(h.mul(c.pow(h.sub(j(1))))), d = Le(c.shape, a);
      return d.length > 0 && (p = p.sum(d)), p.reshape(c.shape);
    }, b: function() {
      var h = c.greater(0), p = c.log().where(h, ge(c)), d = s.mul(f.mul(p)), m = Le(l.shape, a);
      return m.length > 0 && (d = d.sum(m)), d.reshape(l.shape);
    } };
  }, "Pow", {}, i, [!0]);
} }), Qv = A({ powStrict_: function(r, t) {
  return xe(r.shape, t.shape, "Error in powStrict: "), r.pow(t);
} }), Zv = A({ squaredDifferenceStrict_: function(r, t) {
  var e = E(r, "a", "squaredDifferenceStrict"), n = E(t, "b", "squaredDifferenceStrict");
  return xe(e.shape, n.shape, "Error in squaredDifferenceStrict: "), e.squaredDifference(n);
} }), We = A({ sub_: function(r, t) {
  var e, n = E(r, "a", "sub"), o = E(t, "b", "sub");
  e = ke(n, o), n = e[0], o = e[1];
  var a = he(n.shape, o.shape);
  return T.runKernelFunc(function(i) {
    return i.subtract(n, o);
  }, { a: n, b: o }, function(i) {
    return { a: function() {
      var s = i, u = Le(n.shape, a);
      return u.length > 0 && (s = s.sum(u)), s.reshape(n.shape);
    }, b: function() {
      var s = i, u = Le(o.shape, a);
      return u.length > 0 && (s = s.sum(u)), s.neg().reshape(o.shape);
    } };
  }, "Sub");
} }), em = A({ subStrict_: function(r, t) {
  var e = E(r, "a", "subStrict"), n = E(t, "b", "subStrict");
  return xe(e.shape, n.shape, "Error in subStrict: "), e.sub(n);
} }), Tc = A({ equal_: function(r, t) {
  var e, n = E(r, "a", "equal"), o = E(t, "b", "equal");
  return e = ke(n, o), n = e[0], o = e[1], he(n.shape, o.shape), T.runKernelFunc(function(a) {
    return a.equal(n, o);
  }, { $a: n, $b: o });
} }), tm = A({ equalStrict_: function(r, t) {
  var e = E(r, "a", "equalStrict"), n = E(t, "b", "equalStrict");
  return xe(e.shape, n.shape, "Error in equalStrict: "), e.equal(n);
} }), nm = A({ greater_: function(r, t) {
  var e, n = E(r, "a", "greater"), o = E(t, "b", "greater");
  return e = ke(n, o), n = e[0], o = e[1], he(n.shape, o.shape), T.runKernelFunc(function(a) {
    return a.greater(n, o);
  }, { a: n, b: o }, null, "Greater");
} }), Nc = A({ greaterEqual_: function(r, t) {
  var e, n = E(r, "a", "greaterEqual"), o = E(t, "b", "greaterEqual");
  return e = ke(n, o), n = e[0], o = e[1], he(n.shape, o.shape), T.runKernelFunc(function(a, i) {
    var s = a.greaterEqual(n, o);
    return i([n, o]), s;
  }, { a: n, b: o }, function(a, i) {
    var s = i[0], u = i[1];
    return { a: function() {
      return ge(s);
    }, b: function() {
      return ge(u);
    } };
  }, "GreaterEqual");
} }), rm = A({ greaterEqualStrict_: function(r, t) {
  var e = E(r, "a", "greaterEqualStrict"), n = E(t, "b", "greaterEqualStrict");
  return xe(e.shape, n.shape, "Error in greaterEqualStrict: "), e.greaterEqual(n);
} }), om = A({ greaterStrict_: function(r, t) {
  var e = E(r, "a", "greaterStrict"), n = E(t, "b", "greaterStrict");
  return xe(e.shape, n.shape, "Error in greaterStrict: "), e.greater(n);
} }), am = A({ less_: function(r, t) {
  var e, n = E(r, "a", "less"), o = E(t, "b", "less");
  return e = ke(n, o), n = e[0], o = e[1], he(n.shape, o.shape), T.runKernelFunc(function(a) {
    return a.less(n, o);
  }, { a: n, b: o }, null, "Less");
} }), im = A({ lessEqual_: function(r, t) {
  var e, n = E(r, "a", "lessEqual"), o = E(t, "b", "lessEqual");
  return e = ke(n, o), n = e[0], o = e[1], he(n.shape, o.shape), T.runKernelFunc(function(a, i) {
    var s = a.lessEqual(n, o);
    return i([n, o]), s;
  }, { a: n, b: o }, null, "LessEqual");
} }), sm = A({ lessEqualStrict_: function(r, t) {
  var e = E(r, "a", "lessEqualStrict"), n = E(t, "b", "lessEqualStrict");
  return xe(e.shape, n.shape, "Error in lessEqualStrict: "), e.lessEqual(n);
} }), um = A({ lessStrict_: function(r, t) {
  var e = E(r, "a", "lessStrict"), n = E(t, "b", "lessStrict");
  return xe(e.shape, n.shape, "Error in lessStrict: "), e.less(n);
} }), cm = A({ notEqual_: function(r, t) {
  var e, n = E(r, "a", "notEqual"), o = E(t, "b", "notEqual");
  return e = ke(n, o), n = e[0], o = e[1], he(n.shape, o.shape), T.runKernelFunc(function(a) {
    return a.notEqual(n, o);
  }, { a: n, b: o }, null, "NotEqual");
} }), lm = A({ notEqualStrict_: function(r, t) {
  var e = E(r, "a", "notEqualStrict"), n = E(t, "b", "notEqualStrict");
  return xe(e.shape, n.shape, "Error in notEqualStrict: "), e.notEqual(n);
} });
function Hs(r, t) {
  for (var e = [], n = r; n < t; ++n) e.push(n);
  return e;
}
function Gs(r) {
  for (var t = [], e = 0; e < r.length; ++e) for (var n = 0; n < r[e].length; ++n) t.push(r[e][n]);
  return t;
}
var bi = A({ gather_: function(r, t, e) {
  e === void 0 && (e = 0);
  var n = E(r, "x", "gather"), o = E(t, "indices", "gather", "int32");
  e = Ue(e, n.shape)[0];
  var a = function(i, s, u) {
    for (var c = i.shape[u], l = [], f = 1, h = 1, p = 0; p < u; p++) l.push(i.shape[p]), f *= i.shape[p];
    for (p = 0; p < s.rank; p++) l.push(s.shape[p]);
    for (p = u + 1; p < i.rank; p++) l.push(i.shape[p]), h *= i.shape[p];
    return { batchSize: f, sliceSize: h, dimSize: c, outputShape: l };
  }(n, o, e);
  return T.runKernelFunc(function(i, s) {
    var u = i.gather(n, o.flatten(), e);
    return s([o]), u;
  }, { x: n, indices: o }, function(i, s) {
    var u = s[0];
    return { x: function() {
      var c = n.shape, l = u.size, f = c.slice(0, e), h = f.length, p = c.slice(e, c.length).slice(1), d = p.length, m = Hs(0, h), v = Hs(h + 1, h + 1 + d), g = Gs([f, [l], p]), y = i.reshape(g), x = u.reshape([l]), b = Gs([[h], m, v]), w = y.transpose(b), C = Fc(w, x, n.shape[e]), k = ai(b);
      return C = C.transpose(k);
    }, indices: function() {
      return u;
    } };
  }, "Gather", { axis: e }).reshape(a.outputShape);
} }), Fc = A({ unsortedSegmentSum_: function(r, t, e) {
  var n = E(r, "x", "unsortedSegmentSum"), o = E(t, "segmentIds", "unsortedSegmentSum", "int32");
  return _(Ne(e), function() {
    return "numSegments must be of dtype int";
  }), T.runKernelFunc(function(a, i) {
    var s = a.unsortedSegmentSum(n, o, e);
    return i([o]), s;
  }, { $x: n }, function(a, i) {
    var s = i[0];
    return { $x: function() {
      return function(u, c) {
        for (var l = yi(c, ge(c)), f = bi(u, l), h = Nc(c, j(0, "int32")), p = f.rank - h.rank, d = 0; d < p; ++d) h = vt(h, d + 1);
        h = Ao(h, nr(f.shape, "bool"));
        var m = ge(f);
        return _n(h, f, m);
      }(a, s);
    } };
  });
} }), fm = function(r, t, e) {
  return $(this, void 0, void 0, function() {
    var n, o, a, i, s, u, c, l, f, h, p, d, m;
    return Y(this, function(v) {
      switch (v.label) {
        case 0:
          for (n = E(r, "tensor", "boolMask"), o = E(t, "mask", "boolMask", "bool"), a = e ?? 0, i = o.rank, s = n.shape, _(i > 0, function() {
            return "mask cannot be scalar";
          }), xe(s.slice(a, a + i), o.shape, "mask's shape must match the first K dimensions of tensor's shape,"), u = 1, c = a; c < a + i; c++) u *= s[c];
          return l = s.slice(0, a).concat([u], s.slice(a + i)), f = n.reshape(l), h = o.reshape([-1]), [4, kc(h)];
        case 1:
          return p = v.sent(), d = p.squeeze([1]), m = bi(f, d, a), r !== n && n.dispose(), t !== o && o.dispose(), d.dispose(), f.dispose(), h.dispose(), p.dispose(), [2, m];
      }
    });
  });
};
function Pc(r, t, e, n, o, a, i) {
  a === void 0 && (a = "NHWC"), _(r.length === t.rank, function() {
    return "Length of inShape (" + r.length + ") and rank of dy (" + t.rank + ") must match";
  });
  var s = r, u = t, c = !1;
  t.rank === 3 && (c = !0, u = t.as4D(1, t.shape[0], t.shape[1], t.shape[2]), s = [1, r[0], r[1], r[2]]), _(s.length === 4, function() {
    return "Error in conv2dDerInput: inShape must be length 4, but got length " + s.length + ".";
  }), _(u.rank === 4, function() {
    return "Error in conv2dDerInput: dy must be rank 4, but got rank " + u.rank;
  }), _(e.rank === 4, function() {
    return "Error in conv2dDerInput: filter must be rank 4, but got rank " + e.rank;
  });
  var l = a === "NHWC" ? s[3] : s[1], f = a === "NHWC" ? u.shape[3] : u.shape[1];
  _(l === e.shape[2], function() {
    return "Error in conv2dDerInput: depth of input (" + l + ") must match input depth for filter " + e.shape[2] + ".";
  }), _(f === e.shape[3], function() {
    return "Error in conv2dDerInput: depth of output (" + f + ") must match output depth for filter " + e.shape[3] + ".";
  }), i != null && _(Ne(o), function() {
    return "Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode " + i + " but got pad " + o + ".";
  });
  var h = li(a), p = An(s, e.shape, n, 1, o, i, !1, h), d = T.runKernelFunc(function(m, v) {
    var g = m.conv2dDerInput(u, e, p);
    return v([e, u]), g;
  }, { dy4D: u, filter: e }, function(m, v) {
    var g = v[0], y = v[1];
    return { dy4D: function() {
      return yt(m, g, n, o, a, 1, i);
    }, filter: function() {
      return xi(m, y, g.shape, n, o, a, i);
    } };
  });
  return c ? d.as3D(d.shape[1], d.shape[2], d.shape[3]) : d;
}
function da(r) {
  var t = function(a) {
    return typeof a == "number" ? [a, a, a] : a.length === 2 ? [a[0], a[1], 1] : a;
  }(r), e = t[0], n = t[1], o = t[2];
  return e === 1 && n === 1 && o === 1;
}
function Oc(r, t, e, n, o) {
  _(r.length === t.rank, function() {
    return "Length of inShape (" + r.length + ") and rank of dy (" + t.rank + ") must match";
  });
  var a = r, i = t, s = !1;
  t.rank === 4 && (s = !0, i = t.as5D(1, t.shape[0], t.shape[1], t.shape[2], t.shape[3]), a = [1, r[0], r[1], r[2], r[3]]);
  var u = a[4], c = i.shape[4];
  _(a.length === 5, function() {
    return "Error in conv3dDerInput: inShape must be length 5, but got length " + a.length + ".";
  }), _(i.rank === 5, function() {
    return "Error in conv3dDerInput: dy must be rank 5, but got rank " + i.rank;
  }), _(e.rank === 5, function() {
    return "Error in conv3dDerInput: filter must be rank 5, but got rank " + e.rank;
  }), _(u === e.shape[3], function() {
    return "Error in conv3dDerInput: depth of input (" + u + ") must match input depth for filter " + e.shape[3] + ".";
  }), _(c === e.shape[4], function() {
    return "Error in conv3dDerInput: depth of output (" + c + ") must match output depth for filter " + e.shape[4] + ".";
  });
  var l = ho(a, e.shape, n, 1, o), f = T.runKernelFunc(function(h) {
    return h.conv3dDerInput(i, e, l);
  }, { dy5D: i });
  return s ? f.as4D(f.shape[1], f.shape[2], f.shape[3], f.shape[4]) : f;
}
var hm = A({ conv1d_: function(r, t, e, n, o, a, i) {
  o === void 0 && (o = "NWC"), a === void 0 && (a = 1);
  var s = E(r, "x", "conv1d"), u = E(t, "filter", "conv1d"), c = s, l = !1;
  s.rank === 2 && (l = !0, c = s.as3D(1, s.shape[0], s.shape[1])), _(c.rank === 3, function() {
    return "Error in conv1d: input must be rank 3, but got rank " + c.rank + ".";
  }), _(u.rank === 3, function() {
    return "Error in conv1d: filter must be rank 3, but got rank " + u.rank + ".";
  }), i != null && _(Ne(n), function() {
    return "Error in conv1d: pad must be an integer when using, dimRoundingMode " + i + " but got pad " + n + ".";
  }), _(c.shape[2] === u.shape[1], function() {
    return "Error in conv1d: depth of input (" + c.shape[2] + ") must match input depth for filter " + u.shape[1] + ".";
  }), _(it(e, a), function() {
    return "Error in conv1D: Either stride or dilation must be 1. Got stride " + e + " and dilation '" + a + "'";
  }), _(o === "NWC", function() {
    return "Error in conv1d: got dataFormat of " + o + " but only NWC is currently supported.";
  });
  var f = u.as4D(1, u.shape[0], u.shape[1], u.shape[2]), h = c.as4D(c.shape[0], 1, c.shape[1], c.shape[2]), p = yt(h, f, [1, e], n, "NHWC", [1, a], i);
  return l ? p.as2D(p.shape[2], p.shape[3]) : p.as3D(p.shape[0], p.shape[2], p.shape[3]);
} }), yt = A({ conv2d_: function(r, t, e, n, o, a, i) {
  o === void 0 && (o = "NHWC"), a === void 0 && (a = [1, 1]);
  var s = E(r, "x", "conv2d"), u = E(t, "filter", "conv2d"), c = s, l = !1;
  s.rank === 3 && (l = !0, c = s.as4D(1, s.shape[0], s.shape[1], s.shape[2])), _(c.rank === 4, function() {
    return "Error in conv2d: input must be rank 4, but got rank " + c.rank + ".";
  }), _(u.rank === 4, function() {
    return "Error in conv2d: filter must be rank 4, but got rank " + u.rank + ".";
  }), i != null && _(Ne(n), function() {
    return "Error in conv2d: pad must be an integer when using, dimRoundingMode " + i + " but got pad " + n + ".";
  });
  var f = o === "NHWC" ? c.shape[3] : c.shape[1];
  _(f === u.shape[2], function() {
    return "Error in conv2d: depth of input (" + f + ") must match input depth for filter " + u.shape[2] + ".";
  }), _(it(e, a), function() {
    return "Error in conv2D: Either strides or dilations must be 1. Got strides " + e + " and dilations '" + a + "'";
  });
  var h = li(o), p = An(c.shape, u.shape, e, a, n, i, !1, h), d = [u, c], m = T.runKernelFunc(function(v, g) {
    var y = v.conv2d(c, u, p);
    return g([u, c]), y;
  }, { x: c, filter: u }, function(v, g) {
    var y = g, x = y[0], b = y[1];
    return _(er(a), function() {
      return "Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + a + "'";
    }), { x: function() {
      return Mc(b.shape, v, x, e, n, o);
    }, filter: function() {
      return xi(b, v, x.shape, e, n, o);
    } };
  }, "Conv2D", p, d);
  return l ? m.as3D(m.shape[1], m.shape[2], m.shape[3]) : m;
} }), pm = A({ conv3d_: function(r, t, e, n, o, a) {
  o === void 0 && (o = "NDHWC"), a === void 0 && (a = [1, 1, 1]);
  var i = E(r, "x", "conv3d"), s = E(t, "filter", "conv3d"), u = i, c = !1;
  i.rank === 4 && (c = !0, u = i.as5D(1, i.shape[0], i.shape[1], i.shape[2], i.shape[3])), _(u.rank === 5, function() {
    return "Error in conv3d: input must be rank 5, but got rank " + u.rank + ".";
  }), _(s.rank === 5, function() {
    return "Error in conv3d: filter must be rank 5, but got rank " + s.rank + ".";
  }), _(u.shape[4] === s.shape[3], function() {
    return "Error in conv3d: depth of input (" + u.shape[4] + ") must match input depth for filter " + s.shape[3] + ".";
  }), _(function(h, p) {
    return da(h) || da(p);
  }(e, a), function() {
    return "Error in conv3D: Either strides or dilations must be 1. Got strides " + e + " and dilations '" + a + "'";
  }), _(o === "NDHWC", function() {
    return "Error in conv3d: got dataFormat of " + o + " but only NDHWC is currently supported.";
  });
  var l = ho(u.shape, s.shape, e, a, n), f = T.runKernelFunc(function(h, p) {
    var d = h.conv3d(u, s, l);
    return p([u, s]), d;
  }, { x: u, $filter: s }, function(h, p) {
    _(da(a), function() {
      return "Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + a + "'";
    });
    var d = p[0], m = p[1];
    return { x: function() {
      return Oc(d.shape, h, m, e, n);
    }, $filter: function() {
      return function(v, g, y, x, b) {
        var w = v;
        v.rank === 4 && (w = v.as5D(1, v.shape[0], v.shape[1], v.shape[2], v.shape[3]));
        var C = g;
        C.rank === 4 && (C = g.as5D(1, g.shape[0], g.shape[1], g.shape[2], g.shape[3])), _(w.rank === 5, function() {
          return "Error in conv3dDerFilter: input must be rank 5, but got shape " + w.shape + ".";
        }), _(C.rank === 5, function() {
          return "Error in conv3dDerFilter: dy must be rank 5, but got shape " + C.shape + ".";
        }), _(y.length === 5, function() {
          return "Error in conv3dDerFilter: filterShape must be length 5, but got " + y + ".";
        }), _(w.shape[4] === y[3], function() {
          return "Error in conv3dDerFilter: depth of input " + w.shape[4] + ") must match input depth in filter (" + y[3] + ".";
        }), _(C.shape[4] === y[4], function() {
          return "Error in conv3dDerFilter: depth of dy (" + C.shape[4] + ") must match output depth for filter (" + y[4] + ").";
        });
        var k = ho(w.shape, y, x, 1, b);
        return T.runKernelFunc(function(I) {
          return I.conv3dDerFilter(w, C, k);
        }, { x5D: w, dy5D: C });
      }(d, h, m.shape, e, n);
    } };
  });
  return c ? f.as4D(f.shape[1], f.shape[2], f.shape[3], f.shape[4]) : f;
} }), xi = A({ conv2dDerFilter_: function(r, t, e, n, o, a, i) {
  a === void 0 && (a = "NHWC");
  var s = r;
  r.rank === 3 && (s = r.as4D(1, r.shape[0], r.shape[1], r.shape[2]));
  var u = t;
  u.rank === 3 && (u = t.as4D(1, t.shape[0], t.shape[1], t.shape[2])), _(s.rank === 4, function() {
    return "Error in conv2dDerFilter: input must be rank 4, but got shape " + s.shape + ".";
  }), _(u.rank === 4, function() {
    return "Error in conv2dDerFilter: dy must be rank 4, but got shape " + u.shape + ".";
  }), _(e.length === 4, function() {
    return "Error in conv2dDerFilter: filterShape must be length 4, but got " + e + ".";
  });
  var c = a === "NHWC" ? s.shape[3] : s.shape[1], l = a === "NHWC" ? u.shape[3] : u.shape[1];
  _(c === e[2], function() {
    return "Error in conv2dDerFilter: depth of input " + c + ") must match input depth in filter (" + e[2] + ".";
  }), _(l === e[3], function() {
    return "Error in conv2dDerFilter: depth of dy (" + l + ") must match output depth for filter (" + e[3] + ").";
  }), i != null && _(Ne(o), function() {
    return "Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode " + i + " but got pad " + o + ".";
  });
  var f = li(a), h = An(s.shape, e, n, 1, o, i, !1, f);
  return T.runKernelFunc(function(p) {
    return p.conv2dDerFilter(s, u, h);
  }, { x4D: s, dy4D: u });
} }), Mc = A({ conv2dDerInput_: Pc }), Do = A({ depthwiseConv2d_: function(r, t, e, n, o, a, i) {
  a === void 0 && (a = [1, 1]);
  var s = E(r, "x", "depthwiseConv2d"), u = E(t, "filter", "depthwiseConv2d"), c = s, l = !1;
  s.rank === 3 && (l = !0, c = s.as4D(1, s.shape[0], s.shape[1], s.shape[2])), _(c.rank === 4, function() {
    return "Error in depthwiseConv2d: input must be rank 4, but got rank " + c.rank + ".";
  }), _(u.rank === 4, function() {
    return "Error in depthwiseConv2d: filter must be rank 4, but got rank " + u.rank + ".";
  }), _(c.shape[3] === u.shape[2], function() {
    return "Error in depthwiseConv2d: number of input channels (" + c.shape[3] + ") must match the inChannels dimension in filter " + u.shape[2] + ".";
  }), a == null && (a = [1, 1]), _(it(e, a), function() {
    return "Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides " + e + " and dilations '" + a + "'";
  }), i != null && _(Ne(n), function() {
    return "Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode " + i + " but got pad " + n + ".";
  });
  var f = An(c.shape, u.shape, e, a, n, i, !0), h = [c, u], p = T.runKernelFunc(function(d, m) {
    var v = d.depthwiseConv2D(c, u, f);
    return m([c, u]), v;
  }, { x: c, filter: u }, function(d, m) {
    _(er(a), function() {
      return "Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '" + a + "'";
    });
    var v = m[0], g = m[1];
    return { x: function() {
      return Bc(v.shape, d, g, f);
    }, filter: function() {
      return Lc(v, d, g.shape, f);
    } };
  }, "DepthwiseConv2dNative", f, h);
  return l ? p.as3D(p.shape[1], p.shape[2], p.shape[3]) : p;
} }), Bc = A({ depthwiseConv2dDerInput_: function(r, t, e, n) {
  var o = t, a = !1;
  t.rank === 3 && (a = !0, o = t.as4D(1, t.shape[0], t.shape[1], t.shape[2]));
  var i = T.runKernelFunc(function(s) {
    return s.depthwiseConv2DDerInput(o, e, n);
  }, { dy4D: o });
  return a ? i.as3D(i.shape[1], i.shape[2], i.shape[3]) : i;
} }), Lc = A({ depthwiseConv2dDerFilter_: function(r, t, e, n) {
  var o = r;
  r.rank === 3 && (o = r.as4D(1, r.shape[0], r.shape[1], r.shape[2]));
  var a = t;
  return a.rank === 3 && (a = t.as4D(1, t.shape[0], t.shape[1], t.shape[2])), T.runKernelFunc(function(i) {
    return i.depthwiseConv2DDerFilter(o, a, n);
  }, { x4D: o, dy4D: a });
} }), wi = A({ separableConv2d_: function(r, t, e, n, o, a, i) {
  a === void 0 && (a = [1, 1]), i === void 0 && (i = "NHWC");
  var s = E(r, "x", "separableConv2d"), u = E(t, "depthwiseFilter", "separableConv2d"), c = E(e, "pointwiseFilter", "separableConv2d"), l = s, f = !1;
  if (s.rank === 3 && (f = !0, l = s.as4D(1, s.shape[0], s.shape[1], s.shape[2])), i === "NCHW") throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");
  _(l.rank === 4, function() {
    return "Error in separableConv2d: input must be rank 4, but got rank " + l.rank + ".";
  }), _(u.rank === 4, function() {
    return "Error in separableConv2d: depthwise filter must be rank 4, but got rank " + u.rank + ".";
  }), _(c.rank === 4, function() {
    return "Error in separableConv2d: pointwise filter must be rank 4, but got rank " + u.rank + ".";
  }), _(c.shape[0] === 1, function() {
    return "Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got " + c.shape[0] + ".";
  }), _(c.shape[1] === 1, function() {
    return "Error in separableConv2d: the second dimension of pointwise filter must be 1, but got " + c.shape[1] + ".";
  });
  var h = u.shape[2], p = u.shape[3];
  _(c.shape[2] === h * p, function() {
    return "Error in separableConv2d: the third dimension of pointwise filter must be " + h * p + ", but got " + c.shape[2] + ".";
  });
  var d = Do(l, u, n, o, i, a), m = yt(d, c, 1, "valid", i);
  return f ? m.as3D(m.shape[1], m.shape[2], m.shape[3]) : m;
} }), dm = A({ conv2dTranspose_: function(r, t, e, n, o, a) {
  return Pc(e, E(r, "x", "conv2dTranspose"), E(t, "filter", "conv2dTranspose"), n, o, "NHWC", a);
} }), vm = A({ conv3dTranspose_: function(r, t, e, n, o) {
  return Oc(e, E(r, "x", "conv3dTranspose"), E(t, "filter", "conv3dTranspose"), n, o);
} }), To = A({ matMul_: function(r, t, e, n) {
  var o;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  var a = E(r, "a", "matMul"), i = E(t, "b", "matMul");
  o = ke(a, i), a = o[0], i = o[1];
  var s = e ? a.shape[a.rank - 2] : a.shape[a.rank - 1], u = n ? i.shape[i.rank - 1] : i.shape[i.rank - 2], c = e ? a.shape[a.rank - 1] : a.shape[a.rank - 2], l = n ? i.shape[i.rank - 2] : i.shape[i.rank - 1], f = a.shape.slice(0, -2), h = i.shape.slice(0, -2), p = J(f), d = J(h);
  _(a.rank >= 2 && i.rank >= 2 && a.rank === i.rank, function() {
    return "Error in matMul: inputs must have the same rank of at least 2, got ranks " + a.rank + " and " + i.rank + ".";
  }), _(Ve(f, h), function() {
    return "Error in matMul: outer dimensions (" + f + ") and (" + h + ") of Tensors with shapes " + a.shape + " and " + i.shape + " must match.";
  }), _(s === u, function() {
    return "Error in matMul: inner shapes (" + s + ") and (" + u + ") of Tensors with shapes " + a.shape + " and " + i.shape + " and transposeA=" + e + " and transposeB=" + n + " must match.";
  });
  var m = a.shape.slice(0, -2).concat([c, l]), v = e ? a.as3D(p, s, c) : a.as3D(p, c, s), g = n ? i.as3D(d, l, u) : i.as3D(d, u, l), y = { transposeA: e, transposeB: n };
  return T.runKernelFunc(function(x, b) {
    var w = x.batchMatMul(v, g, e, n);
    return b([v, g]), w;
  }, { a: v, b: g }, function(x, b) {
    var w = b, C = w[0], k = w[1];
    return e || n ? !e && n ? { a: function() {
      return x.matMul(k, !1, !1);
    }, b: function() {
      return x.matMul(C, !0, !1);
    } } : e && !n ? { a: function() {
      return k.matMul(x, !1, !0);
    }, b: function() {
      return C.matMul(x, !1, !1);
    } } : { a: function() {
      return k.matMul(x, !0, !0);
    }, b: function() {
      return x.matMul(C, !0, !0);
    } } : { a: function() {
      return x.matMul(k, !1, !0);
    }, b: function() {
      return C.matMul(x, !0, !1);
    } };
  }, "BatchMatMul", y).reshape(m);
} }), mm = A({ dot_: function(r, t) {
  var e = E(r, "t1", "dot"), n = E(t, "t2", "dot");
  _(!(e.rank !== 1 && e.rank !== 2 || n.rank !== 1 && n.rank !== 2), function() {
    return "Error in dot: inputs must all be rank 1 or 2, but got ranks " + e.rank + " and " + n.rank + ".";
  });
  var o = e.rank === 1 ? e.size : e.shape[1], a = n.rank === 1 ? n.size : n.shape[0];
  return _(o === a, function() {
    return "Error in dot: inner dimensions of inputs must match, but got " + o + " and " + a + ".";
  }), e.rank === 1 && n.rank === 1 ? e.as2D(1, -1).matMul(n.as2D(-1, 1)).asScalar() : e.rank === 1 && n.rank === 2 ? e.as2D(1, -1).matMul(n.as2D(n.shape[0], n.shape[1])).as1D() : e.rank === 2 && n.rank === 1 ? e.matMul(n.as2D(-1, 1)).as1D() : e.matMul(n.as2D(n.shape[0], n.shape[1]));
} }), gm = A({ outerProduct_: function(r, t) {
  var e = E(r, "v1", "outerProduct"), n = E(t, "v2", "outerProduct");
  return _(e.rank === 1 && n.rank === 1, function() {
    return "Error in outerProduct: inputs must be rank 1, but got ranks " + e.rank + " and " + n.rank + ".";
  }), e.as2D(-1, 1).matMul(n.as2D(1, -1));
} }), Sr = A({ reverse_: function(r, t) {
  var e = E(r, "x", "reverse");
  if (e.rank === 0) return e.clone();
  var n = Ue(t, e.shape);
  return T.runKernelFunc(function(o) {
    return o.reverse(e, n);
  }, { $x: e }, function(o) {
    return { $x: function() {
      return o.reverse(n);
    } };
  }).reshapeAs(e);
} }), ym = A({ reverse1d_: function(r) {
  var t = E(r, "x", "reverse");
  return _(t.rank === 1, function() {
    return "Error in reverse1D: x must be rank 1 but got rank " + t.rank + ".";
  }), Sr(t, 0);
} }), bm = A({ reverse2d_: function(r, t) {
  var e = E(r, "x", "reverse");
  return _(e.rank === 2, function() {
    return "Error in reverse2D: x must be rank 2 but got rank " + e.rank + ".";
  }), Sr(e, t);
} }), xm = A({ reverse3d_: function(r, t) {
  var e = E(r, "x", "reverse");
  return _(e.rank === 3, function() {
    return "Error in reverse3D: x must be rank 3 but got rank " + e.rank + ".";
  }), Sr(e, t);
} }), wm = A({ reverse4d_: function(r, t) {
  var e = E(r, "x", "reverse");
  return _(e.rank === 4, function() {
    return "Error in reverse4D: x must be rank 4 but got rank " + e.rank + ".";
  }), Sr(e, t);
} });
function Wc(r, t, e, n, o, a) {
  var i = E(r, "x", "maxPool"), s = i, u = !1;
  i.rank === 3 && (u = !0, s = i.as4D(1, i.shape[0], i.shape[1], i.shape[2])), _(s.rank === 4, function() {
    return "Error in maxPool: input must be rank 4 but got rank " + s.rank + ".";
  }), _(it(e, n), function() {
    return "Error in maxPool: Either strides or dilations must be 1. Got strides " + e + " and dilations '" + n + "'";
  }), a != null && _(Ne(o), function() {
    return "Error in maxPool: pad must be an integer when using, dimRoundingMode " + a + " but got pad " + o + ".";
  });
  var c = mr(s.shape, t, e, n, o, a);
  if (c.filterWidth === 1 && c.filterHeight === 1 && Ve(c.inShape, c.outShape)) return i.clone();
  var l = [s], f = T.runKernelFunc(function(h, p) {
    var d = h.maxPool(s, c);
    return p([s, d]), d;
  }, { x: s }, function(h, p) {
    var d = p[0], m = p[1];
    return { x: function() {
      return function(v, g, y, x, b, w, C, k) {
        var I = E(v, "dy", "maxPoolBackprop"), R = E(g, "input", "maxPoolBackprop"), S = E(y, "output", "maxPoolBackprop");
        _(R.rank === I.rank, function() {
          return "Rank of input (" + R.rank + ") does not match rank of dy (" + I.rank + ")";
        }), _(it(b, w), function() {
          return "Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides " + b + " and dilations '" + w + "'";
        }), _(I.rank === 4, function() {
          return "Error in maxPoolBackprop: dy must be rank 4 but got rank " + I.rank + ".";
        }), _(R.rank === 4, function() {
          return "Error in maxPoolBackprop: input must be rank 4 but got rank " + R.rank + ".";
        });
        var N = mr(R.shape, x, b, w, C, k);
        return T.runKernelFunc(function(D) {
          return D.maxPoolBackprop(I, R, S, N);
        }, { $dy: I, $input: R });
      }(h, d, m, t, e, n, o);
    } };
  }, "MaxPool", c, l);
  return u ? f.as3D(f.shape[1], f.shape[2], f.shape[3]) : f;
}
function Uc(r, t, e, n, o, a) {
  var i = E(r, "x", "avgPool", "float32");
  _(it(e, n), function() {
    return "Error in avgPool: Either strides or dilations must be 1. Got strides " + e + " and dilations '" + n + "'";
  });
  var s = i, u = !1;
  i.rank === 3 && (u = !0, s = i.as4D(1, i.shape[0], i.shape[1], i.shape[2])), _(s.rank === 4, function() {
    return "Error in avgPool: x must be rank 4 but got rank " + s.rank + ".";
  }), a != null && _(Ne(o), function() {
    return "Error in avgPool: pad must be an integer when using, dimRoundingMode " + a + " but got pad " + o + ".";
  });
  var c = mr(s.shape, t, e, n, o, a);
  if (c.filterWidth === 1 && c.filterHeight === 1 && Ve(c.inShape, c.outShape)) return i.clone();
  var l = T.runKernelFunc(function(f) {
    return f.avgPool(s, c);
  }, { x: s }, function(f) {
    return { x: function() {
      return function(h, p, d, m, v, g) {
        var y = E(h, "dy", "avgPoolBackprop"), x = E(p, "input", "avgPoolBackprop");
        _(x.rank === y.rank, function() {
          return "Rank of input (" + x.rank + ") does not match rank of dy (" + y.rank + ")";
        }), _(it(m, v), function() {
          return "Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides " + m + " and dilations '" + v + "'";
        });
        var b = x, w = y, C = !1;
        x.rank === 3 && (C = !0, b = x.as4D(1, x.shape[0], x.shape[1], x.shape[2]), w = y.as4D(1, y.shape[0], y.shape[1], y.shape[2])), _(w.rank === 4, function() {
          return "Error in avgPoolBackprop: dy must be rank 4 but got rank " + w.rank + ".";
        }), _(b.rank === 4, function() {
          return "Error in avgPoolBackprop: input must be rank 4 but got rank " + b.rank + ".";
        });
        var k = mr(b.shape, d, m, v, g), I = T.runKernelFunc(function(R) {
          return R.avgPoolBackprop(w, b, k);
        }, { dy4D: w, input4D: b });
        return C ? I.as3D(I.shape[1], I.shape[2], I.shape[3]) : I;
      }(f, s, t, e, n, o);
    } };
  }, "AvgPool", c);
  return l = l.cast(i.dtype), u ? l.as3D(l.shape[1], l.shape[2], l.shape[3]) : l;
}
var ze = A({ maxPool_: function(r, t, e, n, o) {
  return Wc(r, t, e, 1, n, o);
} }), Ir = A({ avgPool_: function(r, t, e, n, o) {
  return Uc(r, t, e, 1, n, o);
} }), Cm = A({ pool_: function(r, t, e, n, o, a) {
  o == null && (o = [1, 1]), a == null && (a = 1), n === 0 && (n = "valid");
  var i = E(r, "x", "maxPool"), s = i, u = !1;
  i.rank === 3 && (u = !0, s = i.as4D(1, i.shape[0], i.shape[1], i.shape[2])), _(it(a, o), function() {
    return "Error in pool: Either strides or dilations must be 1. Got strides " + a + " and dilations '" + o + "'";
  });
  var c, l = mr(s.shape, t, a, o, n), f = [l.dilationHeight, l.dilationWidth];
  c = n === "same" ? function(b, w) {
    var C = b.map(function(R, S) {
      return R + (R - 1) * (w[S] - 1);
    }).map(function(R) {
      return R - 1;
    }), k = C.map(function(R) {
      return Math.floor(R / 2);
    }), I = C.map(function(R, S) {
      return R - k[S];
    });
    return C.map(function(R, S) {
      return [k[S], I[S]];
    });
  }([l.filterHeight, l.filterWidth], f) : [[0, 0], [0, 0]];
  var h = f[0] === 1 && f[1] === 1, p = function(b, w, C) {
    var k = C.map(function(B) {
      return B[0];
    }), I = C.map(function(B) {
      return B[1];
    }), R = b.concat(k, I), S = w.map(function(B, L) {
      return (B - R[L] % B) % B;
    }), N = I.map(function(B, L) {
      return B + S[L];
    }), D = w.map(function(B, L) {
      return [k[L], N[L]];
    }), W = w.map(function(B, L) {
      return [0, S[L]];
    });
    return [D, W];
  }([l.inHeight, l.inWidth], f, c), d = p[0], m = p[1], v = h ? n : "valid", g = h ? s : ju(s, f, d), y = (e === "avg" ? function() {
    return Uc(g, t, a, 1, v);
  } : function() {
    return Wc(g, t, a, 1, v);
  })(), x = h ? y : Hu(y, f, m);
  return u ? x.as3D(x.shape[1], x.shape[2], x.shape[3]) : x;
} }), Em = A({ maxPool3d_: function(r, t, e, n, o, a, i) {
  a === void 0 && (a = "NDHWC");
  var s = E(r, "x", "maxPool3d"), u = s, c = !1;
  s.rank === 4 && (c = !0, u = s.as5D(1, s.shape[0], s.shape[1], s.shape[2], s.shape[3])), i == null && (i = [1, 1, 1]), _(u.rank === 5, function() {
    return "Error in maxPool3d: x must be rank 5 but got rank " + u.rank + ".";
  }), _(a === "NDHWC", function() {
    return "Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of " + a;
  }), _(it(e, i), function() {
    return "Error in maxPool3d: Either strides or dilations must be 1. Got strides " + e + " and dilations '" + i + "'";
  }), o != null && _(Ne(n), function() {
    return "Error in maxPool3d: pad must be an integer when using, dimRoundingMode " + o + " but got pad " + n + ".";
  });
  var l = fo(u.shape, t, e, i, n, o, a), f = T.runKernelFunc(function(h, p) {
    var d = h.maxPool3d(u, l);
    return p([u, d]), d;
  }, { x: u }, function(h, p) {
    var d = p[0], m = p[1];
    return { x: function() {
      return function(v, g, y, x, b, w, C, k) {
        var I = E(v, "dy", "maxPool3dBackprop"), R = E(g, "input", "maxPool3dBackprop"), S = E(y, "output", "maxPool3dBackprop"), N = I, D = R, W = S, B = !1;
        R.rank === 4 && (B = !0, N = I.as5D(1, I.shape[0], I.shape[1], I.shape[2], I.shape[3]), D = R.as5D(1, R.shape[0], R.shape[1], R.shape[2], R.shape[3]), W = S.as5D(1, S.shape[0], S.shape[1], S.shape[2], S.shape[3])), _(N.rank === 5, function() {
          return "Error in maxPool3dBackprop: dy must be rank 5 but got rank " + N.rank + ".";
        }), _(D.rank === 5, function() {
          return "Error in maxPool3dBackprop: input must be rank 5 but got rank " + D.rank + ".";
        }), _(W.rank === 5, function() {
          return "Error in maxPool3dBackprop: output must be rank 5 but got rank " + W.rank + ".";
        }), w == null && (w = [1, 1, 1]), _(it(b, w), function() {
          return "Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides " + b + " and dilations '" + w + "'";
        }), k != null && _(Ne(C), function() {
          return "Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode " + k + " but got pad " + C + ".";
        });
        var L = fo(D.shape, x, b, w, C, k), V = T.runKernelFunc(function(z) {
          return z.maxPool3dBackprop(N, D, W, L);
        }, { dy5D: N, input5D: D });
        return B ? V.as4D(V.shape[1], V.shape[2], V.shape[3], V.shape[4]) : V;
      }(h, d, m, t, e, i, n, o);
    } };
  });
  return c ? f.as4D(f.shape[1], f.shape[2], f.shape[3], f.shape[4]) : f;
} }), _m = A({ avgPool3d_: function(r, t, e, n, o, a, i) {
  a === void 0 && (a = "NDHWC");
  var s = E(r, "x", "avgPool3d", "float32"), u = s, c = !1;
  s.rank === 4 && (c = !0, u = s.as5D(1, s.shape[0], s.shape[1], s.shape[2], s.shape[3])), i == null && (i = [1, 1, 1]), _(u.rank === 5, function() {
    return "Error in avgPool3d: x must be rank 5 but got rank " + u.rank + ".";
  }), _(a === "NDHWC", function() {
    return "Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of " + a;
  }), _(it(e, i), function() {
    return "Error in avgPool3d: Either strides or dilations must be 1. Got strides " + e + " and dilations '" + i + "'";
  }), o != null && _(Ne(n), function() {
    return "Error in avgPool3d: pad must be an integer when using, dimRoundingMode " + o + " but got pad " + n + ".";
  });
  var l = fo(u.shape, t, e, i, n, o, a), f = T.runKernelFunc(function(h) {
    return h.avgPool3d(u, l);
  }, { x: u }, function(h) {
    return { x: function() {
      return function(p, d, m, v, g, y, x) {
        var b = E(p, "dy", "avgPool3dBackprop"), w = E(d, "input", "avgPool3dBackprop"), C = b, k = w, I = !1;
        w.rank === 4 && (I = !0, C = b.as5D(1, b.shape[0], b.shape[1], b.shape[2], b.shape[3]), k = w.as5D(1, w.shape[0], w.shape[1], w.shape[2], w.shape[3])), _(C.rank === 5, function() {
          return "Error in avgPool3dBackprop: dy must be rank 5 but got rank " + C.rank + ".";
        }), _(k.rank === 5, function() {
          return "Error in avgPool3dBackprop: input must be rank 5 but got rank " + k.rank + ".";
        }), g == null && (g = [1, 1, 1]), _(it(v, g), function() {
          return "Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides " + v + " and dilations '" + g + "'";
        }), x != null && _(Ne(y), function() {
          return "Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode " + x + " but got pad " + y + ".";
        });
        var R = fo(k.shape, m, v, g, y, x), S = T.runKernelFunc(function(N) {
          return N.avgPool3dBackprop(C, k, R);
        }, { dy5D: C, input5D: k });
        return I ? S.as4D(S.shape[1], S.shape[2], S.shape[3], S.shape[4]) : S;
      }(h, u, t, e, i, n, o);
    } };
  });
  return f = f.cast(u.dtype), c ? f.as4D(f.shape[1], f.shape[2], f.shape[3], f.shape[4]) : f;
} }), Lt = A({ slice_: function(r, t, e) {
  var n, o, a = E(r, "x", "slice");
  if (a.rank === 0) throw new Error("Slicing scalar is not possible");
  (n = typeof t == "number" ? [t].concat(new Array(a.rank - 1).fill(0)) : t.length < a.rank ? t.concat(new Array(a.rank - t.length).fill(0)) : t.slice()).forEach(function(u) {
    _(u !== -1, function() {
      return "slice() does not support negative begin indexing.";
    });
  }), o = (o = e == null ? new Array(a.rank).fill(-1) : typeof e == "number" ? [e].concat(new Array(a.rank - 1).fill(-1)) : e.length < a.rank ? e.concat(new Array(a.rank - e.length).fill(-1)) : e).map(function(u, c) {
    return u >= 0 ? u : (_(u === -1, function() {
      return "Negative size values should be exactly -1 but got " + u + " for the slice() size at index " + c + ".";
    }), a.shape[c] - n[c]);
  }), Qh(a, n, o);
  var i = a.shape, s = { begin: n, size: o };
  return T.runKernelFunc(function(u) {
    return u.slice(a, n, o);
  }, { x: a }, function(u) {
    for (var c = [], l = 0; l < u.rank; l++) c.push([n[l], i[l] - n[l] - o[l]]);
    return { x: function() {
      return u.pad(c);
    } };
  }, "Slice", s);
} }), Rm = A({ slice1d_: function(r, t, e) {
  var n = E(r, "x", "slice1d");
  return _(n.rank === 1, function() {
    return "slice1d expects a rank-1 tensor, but got a rank-" + n.rank + " tensor";
  }), Lt(n, [t], [e]);
} }), Sm = A({ slice2d_: function(r, t, e) {
  var n = E(r, "x", "slice2d");
  return _(n.rank === 2, function() {
    return "slice2d expects a rank-2 tensor, but got a rank-" + n.rank + " tensor";
  }), Lt(n, t, e);
} }), zc = A({ slice3d_: function(r, t, e) {
  var n = E(r, "x", "slice3d");
  return _(n.rank === 3, function() {
    return "slice3d expects a rank-3 tensor, but got a rank-" + n.rank + " tensor";
  }), Lt(n, t, e);
} }), Im = A({ slice4d_: function(r, t, e) {
  var n = E(r, "x", "slice4d");
  return _(n.rank === 4, function() {
    return "slice4d expects a rank-4 tensor, but got a rank-" + n.rank + " tensor";
  }), Lt(n, t, e);
} });
function Vc(r, t, e, n, o) {
  return t.rank < e.rank && (t = t.reshape(at(t.shape, n))), r.rank < e.rank && (r = r.reshape(at(r.shape, n))), { x: function() {
    var a = r.mul(e.equal(t).cast(r.dtype));
    return o == null ? a : a.transpose(o);
  } };
}
var km = A({ all_: function(r, t, e) {
  t === void 0 && (t = null), e === void 0 && (e = !1);
  var n = E(r, "x", "all", "bool"), o = Ue(t, n.shape), a = o, i = Ut(a, n.rank);
  i != null && (n = n.transpose(i), a = zt(a.length, n.rank));
  var s = T.runKernelFunc(function(c) {
    return c.all(n, a);
  }, { $x: n });
  if (e) {
    var u = at(s.shape, o);
    return s.reshape(u);
  }
  return s;
} }), Am = A({ any_: function(r, t, e) {
  t === void 0 && (t = null), e === void 0 && (e = !1);
  var n = E(r, "x", "any", "bool"), o = Ue(t, n.shape), a = o, i = Ut(a, n.rank);
  i != null && (n = n.transpose(i), a = zt(a.length, n.rank));
  var s = T.runKernelFunc(function(c) {
    return c.any(n, a);
  }, { $x: n });
  if (e) {
    var u = at(s.shape, o);
    return s.reshape(u);
  }
  return s;
} }), Dm = A({ argMax_: function(r, t) {
  t === void 0 && (t = 0);
  var e = E(r, "x", "argMax");
  t == null && (t = 0);
  var n = Ue(t, e.shape), o = Ut(n, e.rank);
  o != null && (e = e.transpose(o), n = zt(n.length, e.rank));
  var a = { axis: n[0] }, i = [e];
  return T.runKernelFunc(function(s, u) {
    var c = s.argMax(e, n[0]);
    return u([e]), c;
  }, { x: e }, function(s, u) {
    var c = u[0];
    return { x: function() {
      return ge(c);
    } };
  }, "ArgMax", a, i);
} }), Tm = A({ argMin_: function(r, t) {
  t === void 0 && (t = 0);
  var e = E(r, "x", "argMin");
  t == null && (t = 0);
  var n = Ue(t, e.shape), o = Ut(n, e.rank);
  return o != null && (e = e.transpose(o), n = zt(n.length, e.rank)), T.runKernelFunc(function(a, i) {
    var s = a.argMin(e, n[0]);
    return i([e]), s;
  }, { $x: e }, function(a, i) {
    var s = i[0];
    return { $x: function() {
      return ge(s);
    } };
  });
} }), Nm = A({ logSumExp_: function(r, t, e) {
  t === void 0 && (t = null), e === void 0 && (e = !1);
  var n = E(r, "x", "logSumExp"), o = Ue(t, n.shape), a = n.max(o, !0), i = n.sub(a).exp().sum(o).log(), s = a.reshape(i.shape).add(i);
  if (e) {
    var u = at(s.shape, o);
    return s.reshape(u);
  }
  return s;
} }), No = A({ max_: function(r, t, e) {
  t === void 0 && (t = null), e === void 0 && (e = !1);
  var n = E(r, "x", "max"), o = n, a = Ue(t, n.shape), i = a, s = Ut(i, n.rank);
  s != null && (n = n.transpose(s), i = zt(i.length, n.rank));
  var u = [n], c = T.runKernelFunc(function(f, h) {
    var p = f.max(n, i);
    return h([o, p]), p;
  }, { x: n }, function(f, h) {
    return Vc(f, h[1], h[0], a, s);
  }, "Max", { axes: i }, u, [!0]);
  if (e) {
    var l = at(c.shape, a);
    c = c.reshape(l);
  }
  return c;
} }), Fm = A({ mean_: function(r, t, e) {
  t === void 0 && (t = null), e === void 0 && (e = !1);
  var n = E(r, "x", "mean"), o = Ue(t, n.shape), a = J(Ke(n.shape, o)[1]);
  return Io(function(i) {
    var s = j(a);
    return { value: (s.dtype === i.dtype ? i : i.cast(s.dtype)).div(s).sum(t, e), gradFunc: function(u) {
      var c = i.shape.slice();
      return o.forEach(function(l) {
        c[l] = 1;
      }), u.reshape(c).mul(nr(i.shape, "float32")).div(a);
    } };
  })(n);
} }), Pm = A({ min_: function(r, t, e) {
  t === void 0 && (t = null), e === void 0 && (e = !1);
  var n = E(r, "x", "min"), o = n, a = Ue(t, n.shape), i = a, s = Ut(i, n.rank);
  s != null && (n = n.transpose(s), i = zt(i.length, n.rank));
  var u = [n], c = T.runKernelFunc(function(f, h) {
    var p = f.min(n, i);
    return h([o, p]), p;
  }, { x: n }, function(f, h) {
    return Vc(f, h[1], h[0], a, s);
  }, "Min", { axes: i }, u, [!0]);
  if (e) {
    var l = at(c.shape, a);
    c = c.reshape(l);
  }
  return c;
} }), Om = A({ moments_: function(r, t, e) {
  t === void 0 && (t = null), e === void 0 && (e = !1);
  var n = Ue(t, (r = E(r, "x", "moments")).shape), o = r.mean(n, e), a = o.shape;
  e || (a = at(o.shape, n));
  var i = r.toFloat().sub(o.reshape(a)).square();
  return { mean: o, variance: i.mean(n, e) };
} }), Hc = A({ sum_: function(r, t, e) {
  t === void 0 && (t = null), e === void 0 && (e = !1);
  var n = E(r, "x", "sum");
  n.dtype === "bool" && (n = n.toInt());
  var o = Ue(t, n.shape);
  return Io(function(a) {
    var i = Ut(o, a.rank), s = o, u = a;
    i != null && (u = a.transpose(i), s = zt(s.length, a.rank));
    var c = function(p) {
      var d = a.shape.slice();
      return o.forEach(function(m) {
        d[m] = 1;
      }), p.reshape(d).mul(nr(a.shape, "float32"));
    }, l = { axes: s }, f = T.runKernelFunc(function(p) {
      return p.sum(u, s);
    }, { x: u }, function(p) {
      return { x: function() {
        return c(p);
      } };
    }, "Sum", l);
    if (e) {
      var h = at(f.shape, o);
      f = f.reshape(h);
    }
    return { value: f, gradFunc: c };
  })(n);
} }), Mm = A({ prod_: function(r, t, e) {
  t === void 0 && (t = null), e === void 0 && (e = !1);
  var n = E(r, "x", "prod");
  n.dtype === "bool" && (n = n.toInt());
  var o = Ue(t, n.shape), a = Ut(o, n.rank), i = o, s = n;
  a != null && (s = n.transpose(a), i = zt(i.length, n.rank));
  var u = T.runKernelFunc(function(l) {
    return l.prod(s, i);
  }, { permutedX: s });
  if (e) {
    var c = at(u.shape, o);
    u = u.reshape(c);
  }
  return u;
} }), Gc = A({ elu_: function(r) {
  var t = E(r, "x", "elu");
  return T.runKernelFunc(function(e, n) {
    var o = e.elu(t);
    return n([o]), o;
  }, { $x: t }, function(e, n) {
    var o = n[0];
    return { $x: function() {
      return T.runKernelFunc(function(a) {
        return a.eluDer(e, o);
      }, { dy: e, y: o });
    } };
  });
} }), Bm = A({ leakyRelu_: function(r, t) {
  t === void 0 && (t = 0.2);
  var e = E(r, "x", "leakyRelu");
  return yi(j(t).mul(e), e);
} }), qc = A({ prelu_: function(r, t) {
  var e = E(r, "x", "prelu"), n = E(t, "alpha", "prelu");
  return T.runKernelFunc(function(o, a) {
    var i = o.prelu(e, n);
    return a([e, n]), i;
  }, { x: e, alpha: n }, function(o, a) {
    var i = a[0], s = a[1], u = i.greater(0);
    return { x: function() {
      return _n(u, o, o.mul(s));
    }, alpha: function() {
      var c = _n(u, ge(o), o.mul(i)), l = Le(s.shape, o.shape);
      return l.length > 0 && (c = c.sum(l)), c.reshape(s.shape);
    } };
  }, "Prelu");
} }), Ie = A({ relu_: function(r) {
  var t = E(r, "x", "relu");
  return t.dtype === "bool" ? t.toInt() : T.runKernelFunc(function(e, n) {
    var o = e.relu(t);
    return n([t]), o;
  }, { x: t }, function(e, n) {
    var o = n[0];
    return { x: function() {
      return e.mulStrict(o.step().toFloat());
    } };
  }, "Relu");
} }), jc = A({ relu6_: function(r) {
  var t = E(r, "x", "relu6");
  return t.dtype === "bool" ? t.toInt() : T.runKernelFunc(function(e, n) {
    var o = e.relu6(t);
    return n([t]), o;
  }, { x: t }, function(e, n) {
    var o = n[0], a = o.lessEqual(6).mul(o.step());
    return { x: function() {
      return e.mulStrict(a.toFloat());
    } };
  }, "Relu6");
} }), Lm = A({ selu_: function(r) {
  var t = E(r, "x", "selu");
  return T.runKernelFunc(function(e, n) {
    var o = e.selu(t);
    return n([t]), o;
  }, { $x: t }, function(e, n) {
    var o = n[0];
    return { $x: function() {
      var a = o.greater(j(0)), i = j(vi), s = j(mi), u = e.mul(s), c = e.mul(i).mul(o.toFloat().exp());
      return _n(a, u, c);
    } };
  });
} }), ln = A({ transpose_: function(r, t) {
  var e = E(r, "x", "transpose");
  if (t == null && (t = e.shape.map(function(o, a) {
    return a;
  }).reverse()), _(e.rank === t.length, function() {
    return "Error in transpose: rank of input " + e.rank + " must match length of perm " + t + ".";
  }), t.forEach(function(o) {
    _(o >= 0 && o < e.rank, function() {
      return "All entries in 'perm' must be between 0 and " + (e.rank - 1) + " but got " + t;
    });
  }), e.rank <= 1) return e.clone();
  var n = { perm: t };
  return T.runKernelFunc(function(o) {
    return o.transpose(e, t);
  }, { x: e }, function(o) {
    var a = ai(t);
    return { x: function() {
      return o.transpose(a);
    } };
  }, "Transpose", n);
} }), Wm = A({ localResponseNormalization_: function(r, t, e, n, o) {
  t === void 0 && (t = 5), e === void 0 && (e = 1), n === void 0 && (n = 1), o === void 0 && (o = 0.5);
  var a = E(r, "x", "localResponseNormalization");
  _(a.rank === 4 || a.rank === 3, function() {
    return `Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ` + a.rank + ".";
  }), _(Ne(t), function() {
    return "Error in localResponseNormalization: depthRadius must be an integer but got depthRadius " + t + ".";
  });
  var i = a, s = !1;
  a.rank === 3 && (s = !0, i = a.as4D(1, a.shape[0], a.shape[1], a.shape[2]));
  var u = T.runKernelFunc(function(c, l) {
    var f = c.localResponseNormalization4D(i, t, e, n, o);
    return l([i, f]), f;
  }, { x4D: i }, function(c, l) {
    var f = l[0], h = l[1];
    return { x4D: function() {
      return T.runKernelFunc(function(p) {
        return p.LRNGrad(c, f, h, t, e, n, o);
      }, {});
    } };
  });
  return s ? u.as3D(u.shape[1], u.shape[2], u.shape[3]) : u;
} }), Kc = A({ norm_: function(r, t, e, n) {
  t === void 0 && (t = "euclidean"), e === void 0 && (e = null), n === void 0 && (n = !1);
  var o = function s(u, c, l) {
    if (l === void 0 && (l = null), u.rank === 0) return u.abs();
    if (u.rank !== 1 && l === null) return s(u.reshape([-1]), c, l);
    if (u.rank === 1 || typeof l == "number" || Array.isArray(l) && l.length === 1) {
      if (c === 1) return u.abs().sum(l);
      if (c === 1 / 0) return u.abs().max(l);
      if (c === -1 / 0) return u.abs().min(l);
      if (c === "euclidean" || c === 2) return u.abs().pow(j(2, "int32")).sum(l).sqrt();
      throw new Error("Error in norm: invalid ord value: " + c);
    }
    if (Array.isArray(l) && l.length === 2) {
      if (c === 1) return u.abs().sum(l[0]).max(l[1] - 1);
      if (c === 1 / 0) return u.abs().sum(l[1]).max(l[0]);
      if (c === -1 / 0) return u.abs().sum(l[1]).min(l[0]);
      if (c === "fro" || c === "euclidean") return u.square().sum(l).sqrt();
      throw new Error("Error in norm: invalid ord value: " + c);
    }
    throw new Error("Error in norm: invalid axis: " + l);
  }(r = E(r, "x", "norm"), t, e), a = o.shape;
  if (n) {
    var i = Ue(e, r.shape);
    a = at(o.shape, i);
  }
  return o.reshape(a);
} }), Um = A({ basicLSTMCell_: function(r, t, e, n, o, a) {
  var i = E(r, "forgetBias", "basicLSTMCell"), s = E(t, "lstmKernel", "basicLSTMCell"), u = E(e, "lstmBias", "basicLSTMCell"), c = E(n, "data", "basicLSTMCell"), l = E(o, "c", "basicLSTMCell"), f = E(a, "h", "basicLSTMCell"), h = c.concat(f, 1).matMul(s).add(u), p = h.shape[0], d = h.shape[1] / 4, m = [p, d], v = h.slice([0, 0], m), g = h.slice([0, d], m), y = h.slice([0, 2 * d], m), x = h.slice([0, 3 * d], m), b = v.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(i.add(y).sigmoid())), w = b.tanh().mulStrict(x.sigmoid());
  return [b, w];
} }), zm = A({ multiRNNCell_: function(r, t, e, n) {
  for (var o = E(t, "data", "multiRNNCell"), a = ao(e, "c", "multiRNNCell"), i = ao(n, "h", "multiRNNCell"), s = o, u = [], c = 0; c < r.length; c++) {
    var l = r[c](s, a[c], i[c]);
    u.push(l[0]), u.push(l[1]), s = l[1];
  }
  var f = [], h = [];
  for (c = 0; c < u.length; c += 2) f.push(u[c]), h.push(u[c + 1]);
  return [f, h];
} }), Vm = A({ movingAverage_: function(r, t, e, n, o) {
  o === void 0 && (o = !0);
  var a = E(r, "v", "movingAverage"), i = E(t, "x", "movingAverage"), s = E(e, "decay", "movingAverage");
  Wf(a, i), _(Ve(a.shape, i.shape), function() {
    return "Shape mismatch in v and x";
  });
  var u = j(1), c = u.sub(s), l = i.sub(a).mul(c);
  if (o) {
    _(n != null, function() {
      return "When using zeroDebias: true, step is required.";
    });
    var f = E(n, "step", "movingAverage");
    l = l.div(u.sub(mo(s, f)));
  }
  return a.add(l);
} }), Hm = A({ stridedSlice_: function(r, t, e, n, o, a, i, s, u) {
  if (o === void 0 && (o = 0), a === void 0 && (a = 0), i === void 0 && (i = 0), s === void 0 && (s = 0), u === void 0 && (u = 0), n == null && (n = new Array(t.length)), i !== 0) throw new Error("ellipsis mask is not yet supported");
  var c = E(r, "x", "stridedSlice"), l = Es(s), f = c.shape.slice();
  l.forEach(function(v) {
    t[v] = 0, e[v] = 1, f.splice(v, 0, 1);
  }), c = c.reshape(f);
  for (var h = 0; h < c.rank; h++) t[h] = Zh(o, t, n, c.shape, h), e[h] = ep(a, e, n, c.shape, h), n[h] = n[h] || 1;
  var p = Es(u);
  p.forEach(function(v) {
    e[v] = t[v] + 1, n[v] = 1;
  });
  var d = ci(t, e, n), m = d.filter(function(v, g) {
    return p.indexOf(g) === -1;
  });
  return n.every(function(v) {
    return v === 1;
  }) ? Lt(c, t, d).reshape(m) : T.runKernelFunc(function(v) {
    return v.stridedSlice(c, t, e, n);
  }, { $x: c }).reshape(m);
} }), Gm = A({ topk_: function(r, t, e) {
  t === void 0 && (t = 1), e === void 0 && (e = !0);
  var n = E(r, "x", "topk");
  if (n.rank === 0) throw new Error("topk() expects the input to be of rank 1 or higher");
  var o = n.shape[n.shape.length - 1];
  if (t > o) throw new Error("'k' passed to topk() must be <= the last dimension (" + o + ") but got " + t);
  var a = T.runKernelFunc(function(i) {
    return i.topk(n, t, e);
  }, { $x: n });
  return { values: a[0], indices: a[1] };
} }), qm = A({ scatterND_: function(r, t, e) {
  var n = E(r, "indices", "scatterND", "int32"), o = E(t, "updates", "scatterND");
  return Jh(o, n, e), T.runKernelFunc(function(a) {
    return a.scatterND(n, o, e);
  }, { indices: n, updates: o }, null, "ScatterNd", { shape: e });
} }), Ci = A({ fft_: function(r) {
  _(r.dtype === "complex64", function() {
    return "The dtype for tf.spectral.fft() must be complex64 but got " + r.dtype + ".";
  });
  var t = r.shape[r.shape.length - 1], e = r.size / t, n = r.as2D(e, t);
  return T.runKernelFunc(function(o) {
    return o.fft(n);
  }, { input: r }).reshape(r.shape);
} }), go = A({ ifft_: function(r) {
  _(r.dtype === "complex64", function() {
    return "The dtype for tf.spectral.ifft() must be complex64 but got " + r.dtype + ".";
  });
  var t = r.shape[r.shape.length - 1], e = r.size / t, n = r.as2D(e, t);
  return T.runKernelFunc(function(o) {
    return o.ifft(n);
  }, { input: r }).reshape(r.shape);
} }), Ei = A({ rfft_: function(r, t) {
  _(r.dtype === "float32", function() {
    return "The dtype for rfft() must be real value but got " + r.dtype;
  });
  var e, n = r.shape[r.shape.length - 1], o = r.size / n;
  if (t != null && t < n) {
    var a = r.shape.map(function(g) {
      return 0;
    }), i = r.shape.map(function(g) {
      return g;
    });
    i[r.shape.length - 1] = t, e = r.slice(a, i), n = t;
  } else if (t != null && t > n) {
    var s = r.shape.map(function(g) {
      return g;
    });
    s[r.shape.length - 1] = t - n, e = r.concat(Ee(s), r.shape.length - 1), n = t;
  } else e = r;
  var u = e.zerosLike(), c = Ge(e, u).as2D(o, n), l = Ci(c), f = Math.floor(n / 2) + 1, h = mt(l), p = Ft(l), d = h.split([f, n - f], h.shape.length - 1), m = p.split([f, n - f], p.shape.length - 1), v = e.shape.slice();
  return v[e.shape.length - 1] = f, Ge(d[0], m[0]).reshape(v);
} }), Xc = A({ irfft_: function(r) {
  var t = r.shape[r.shape.length - 1], e = r.size / t;
  if (t <= 2) {
    var n = r.as2D(e, t), o = go(n);
    return mt(o);
  }
  var a = [e, 2 * (t - 1)], i = mt(r).as2D(e, t), s = Ft(r).as2D(e, t), u = i.slice([0, 1], [e, t - 2]).reverse(1), c = s.slice([0, 1], [e, t - 2]).reverse(1).mul(j(-1)), l = i.concat(u, 1), f = s.concat(c, 1);
  return n = Ge(l, f).as2D(a[0], a[1]), o = go(n), mt(o);
} }), jm = Object.freeze({ fft: Ci, ifft: go, rfft: Ei, irfft: Xc }), Km = A({ sparseToDense_: function(r, t, e, n) {
  n === void 0 && (n = 0);
  var o = E(r, "sparseIndices", "sparseToDense", "int32"), a = E(t, "sparseValues", "sparseToDense"), i = E(n, "defaultValue", "sparseToDense", a.dtype);
  return function(s, u, c, l) {
    if (s.dtype !== "int32") throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was " + s.dtype + ".");
    if (s.rank > 2) throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape " + s.shape + ".");
    var f = s.rank > 0 ? s.shape[0] : 1, h = s.rank > 1 ? s.shape[1] : 1;
    if (c.length !== h) throw new Error("outputShape has incorrect number of elements:, " + c.length + ", should be: " + h + ".");
    var p = u.size;
    if (u.rank !== 0 && (u.rank !== 1 || p !== f)) throw new Error("sparseValues has incorrect shape " + u.shape + ", should be [] or [" + f + "]");
    if (u.dtype !== l.dtype) throw new Error("sparseValues.dtype must match defaultValues.dtype");
  }(o, a, e, i), T.runKernelFunc(function(s) {
    return s.sparseToDense(o, a, e, i);
  }, { $sparseIndices: o, $sparseValues: a, $defaultValue: i });
} }), Xm = A({ gatherND_: function(r, t) {
  var e = E(t, "indices", "gatherND", "int32"), n = E(r, "x", "gatherND");
  return T.runKernelFunc(function(o) {
    return o.gatherND(n, e);
  }, { x: n, indices: e }, null, "GatherNd");
} }), $m = A({ diag_: function(r) {
  var t = E(r, "x", "diag").flatten(), e = r.shape.concat(r.shape);
  return T.runKernelFunc(function(n) {
    return n.diag(t);
  }, { $x: t }).reshape(e);
} }), Ym = A({ dropout_: function(r, t, e, n) {
  var o = E(r, "x", "dropout");
  if (_(o.dtype === "float32", function() {
    return "x has to be a floating point tensor since it's going to be scaled, but got a " + o.dtype + " tensor instead.";
  }), _(t >= 0 && t < 1, function() {
    return "rate must be a float in the range [0, 1), but got " + t + ".";
  }), t === 0) return r instanceof Se ? o.clone() : o;
  var a = function(u, c) {
    if (c == null) return u.shape.slice();
    if (Ve(u.shape, c)) return c;
    if (u.shape.length === c.length) {
      for (var l = [], f = 0; f < u.shape.length; f++) c[f] == null && u.shape[f] != null ? l.push(u.shape[f]) : l.push(c[f]);
      return l;
    }
    return c;
  }(o, e), i = 1 - t, s = qu(a, 0, 1, "float32", n).add(i).floor().div(i);
  return o.mul(s);
} });
function $c(r, t, e) {
  for (var n = 1 - r % 2, o = new Float32Array(r), a = 0; a < r; ++a) {
    var i = 2 * Math.PI * a / (r + n - 1);
    o[a] = t - e * Math.cos(i);
  }
  return Pe(o, "float32");
}
var _i = A({ hannWindow_: function(r) {
  return $c(r, 0.5, 0.5);
} }), Yc = A({ hammingWindow_: function(r) {
  return $c(r, 0.54, 0.46);
} }), Ri = A({ frame_: function(r, t, e, n, o) {
  n === void 0 && (n = !1), o === void 0 && (o = 0);
  for (var a = 0, i = []; a + t <= r.size; ) i.push(Lt(r, a, t)), a += e;
  if (n) for (; a < r.size; ) {
    var s = a + t - r.size, u = Me([Lt(r, a, t - s), Bt([s], o)]);
    i.push(u), a += e;
  }
  return i.length === 0 ? sn([], [0, t]) : Me(i).as2D(i.length, t);
} }), Jc = A({ stft_: function(r, t, e, n, o) {
  var a;
  o === void 0 && (o = _i), n == null && (a = t, n = Math.floor(Math.pow(2, Math.ceil(Math.log(a) / Math.log(2)))));
  for (var i = Ri(r, t, e), s = Qe(i, o(t)), u = [], c = 0; c < i.shape[0]; c++) u.push(Ei(s.slice([c, 0], [1, t]), n));
  return Me(u);
} }), Jm = Object.freeze({ hannWindow: _i, hammingWindow: Yc, frame: Ri, stft: Jc }), Ye, Qm = function(r, t, e) {
  return e === void 0 && (e = 1), $(this, void 0, void 0, function() {
    var n, o, a, i, s, u, c, l, f, h, p, d, m, v;
    return Y(this, function(g) {
      switch (g.label) {
        case 0:
          return n = E(r, "predictions", "inTopK"), o = E(t, "targets", "inTopK"), _(n.rank > 1, function() {
            return "inTopK() expects the predictions to be of rank 2 or higher, but got " + n.rank;
          }), _(n.rank - 1 === o.rank, function() {
            return "predictions rank should be 1 larger than targets rank, but got predictions rank " + n.rank + " and targets rank " + o.rank;
          }), xe(n.shape.slice(0, n.shape.length - 1), o.shape, "predictions's shape should be align with the targets' shape, except the last dimension."), a = n.shape[n.shape.length - 1], _(e > 0 && e <= a, function() {
            return "'k' passed to inTopK() must be > 0 && <= the predictions last dimension (" + a + "), but got " + e;
          }), [4, n.data()];
        case 1:
          return i = g.sent(), [4, o.data()];
        case 2:
          for (s = g.sent(), u = [i.length / a, a], l = u[1], f = pr("bool", c = u[0]), h = 0; h < c; h++) {
            for (p = h * l, d = i.subarray(p, p + l), m = [], v = 0; v < d.length; v++) m.push({ value: d[v], index: v });
            for (m.sort(function(y, x) {
              return x.value - y.value;
            }), f[h] = 0, v = 0; v < e; v++) if (m[v].index === s[h]) {
              f[h] = 1;
              break;
            }
          }
          return r !== n && n.dispose(), t !== o && o.dispose(), [2, je(f, o.shape, "bool")];
      }
    });
  });
};
(function(r) {
  r[r.NONE = 0] = "NONE", r[r.MEAN = 1] = "MEAN", r[r.SUM = 2] = "SUM", r[r.SUM_BY_NONZERO_WEIGHTS = 3] = "SUM_BY_NONZERO_WEIGHTS";
})(Ye || (Ye = {}));
var Zm = A({ absoluteDifference_: function(r, t, e, n) {
  n === void 0 && (n = Ye.SUM_BY_NONZERO_WEIGHTS);
  var o = E(r, "labels", "absoluteDifference"), a = E(t, "predictions", "absoluteDifference"), i = null;
  e != null && (i = E(e, "weights", "absoluteDifference")), xe(o.shape, a.shape, "Error in absoluteDifference: ");
  var s = o.sub(a).abs();
  return Jt(s, i, n);
} }), Jt = A({ computeWeightedLoss_: function(r, t, e) {
  e === void 0 && (e = Ye.SUM_BY_NONZERO_WEIGHTS);
  var n = E(r, "losses", "computeWeightedLoss"), o = null;
  t != null && (o = E(t, "weights", "computeWeightedLoss"));
  var a = o == null ? n : n.mul(o);
  if (e === Ye.NONE) return a;
  if (e === Ye.SUM) return a.sum();
  if (e === Ye.MEAN) {
    if (o == null) return a.mean();
    var i = n.size / o.size, s = a.sum().div(o.sum());
    return i > 1 ? s.div(j(i)) : s;
  }
  if (e === Ye.SUM_BY_NONZERO_WEIGHTS) {
    if (o == null) return a.sum().div(j(n.size));
    var u = o.mul(nr(n.shape)).notEqual(j(0)).sum().toFloat();
    return a.sum().div(u);
  }
  throw Error("Unknown reduction: " + e);
} }), eg = A({ cosineDistance_: function(r, t, e, n, o) {
  o === void 0 && (o = Ye.SUM_BY_NONZERO_WEIGHTS);
  var a = E(r, "labels", "cosineDistance"), i = E(t, "predictions", "cosineDistance"), s = null;
  n != null && (s = E(n, "weights", "cosineDistance")), xe(a.shape, i.shape, "Error in cosineDistance: ");
  var u = j(1).sub(a.mul(i).sum(e, !0));
  return Jt(u, s, o);
} }), tg = A({ hingeLoss_: function(r, t, e, n) {
  n === void 0 && (n = Ye.SUM_BY_NONZERO_WEIGHTS);
  var o = E(r, "labels", "hingeLoss"), a = E(t, "predictions", "hingeLoss"), i = null;
  e != null && (i = E(e, "weights", "hingeLoss")), xe(o.shape, a.shape, "Error in hingeLoss: ");
  var s = j(1);
  o = j(2).mul(o).sub(s);
  var u = s.sub(o.mul(a)).relu();
  return Jt(u, i, n);
} }), ng = A({ huberLoss_: function(r, t, e, n, o) {
  n === void 0 && (n = 1), o === void 0 && (o = Ye.SUM_BY_NONZERO_WEIGHTS);
  var a = E(r, "labels", "huberLoss"), i = E(t, "predictions", "huberLoss"), s = null;
  e != null && (s = E(e, "weights", "huberLoss")), xe(a.shape, i.shape, "Error in huberLoss: ");
  var u = j(n), c = i.sub(a).abs(), l = Dc(c, u), f = c.sub(l), h = j(0.5).mul(l.square()).add(u.mul(f));
  return Jt(h, s, o);
} }), rg = A({ logLoss_: function(r, t, e, n, o) {
  n === void 0 && (n = 1e-7), o === void 0 && (o = Ye.SUM_BY_NONZERO_WEIGHTS);
  var a = E(r, "labels", "logLoss"), i = E(t, "predictions", "logLoss"), s = null;
  e != null && (s = E(e, "weights", "logLoss")), xe(a.shape, i.shape, "Error in logLoss: ");
  var u = j(1), c = j(n), l = a.mul(i.add(c).log()).neg().sub(u.sub(a).mul(u.sub(i).add(c).log()));
  return Jt(l, s, o);
} }), og = A({ meanSquaredError_: function(r, t, e, n) {
  n === void 0 && (n = Ye.SUM_BY_NONZERO_WEIGHTS);
  var o = E(r, "labels", "meanSquaredError"), a = E(t, "predictions", "meanSquaredError"), i = null;
  e != null && (i = E(e, "weights", "meanSquaredError")), xe(o.shape, a.shape, "Error in meanSquaredError: ");
  var s = o.squaredDifference(a);
  return Jt(s, i, n);
} }), ag = A({ sigmoidCrossEntropy_: function(r, t, e, n, o) {
  n === void 0 && (n = 0), o === void 0 && (o = Ye.SUM_BY_NONZERO_WEIGHTS);
  var a = E(r, "multiClassLabels", "sigmoidCrossEntropy"), i = E(t, "logits", "sigmoidCrossEntropy"), s = null;
  if (e != null && (s = E(e, "weights", "sigmoidCrossEntropy")), xe(a.shape, i.shape, "Error in sigmoidCrossEntropy: "), n > 0) {
    var u = j(n), c = j(1), l = j(0.5);
    a = a.mul(c.sub(u)).add(l.mul(u));
  }
  var f = function(h, p) {
    var d = E(h, "labels", "sigmoidCrossEntropyWithLogits"), m = E(p, "logits", "sigmoidCrossEntropyWithLogits");
    xe(d.shape, m.shape, "Error in sigmoidCrossEntropyWithLogits: ");
    var v = m.relu(), g = m.mul(d), y = m.abs().neg().exp().log1p();
    return v.sub(g).add(y);
  }(a, i);
  return Jt(f, s, o);
} }), ig = A({ softmaxCrossEntropy_: function(r, t, e, n, o) {
  n === void 0 && (n = 0), o === void 0 && (o = Ye.SUM_BY_NONZERO_WEIGHTS);
  var a = E(r, "onehotLabels", "softmaxCrossEntropy"), i = E(t, "logits", "softmaxCrossEntropy"), s = null;
  if (e != null && (s = E(e, "weights", "softmaxCrossEntropy")), xe(a.shape, i.shape, "Error in softmaxCrossEntropy: "), n > 0) {
    var u = j(n), c = j(1), l = j(a.shape[1]);
    a = a.mul(c.sub(u)).add(u.div(l));
  }
  var f = function(h, p, d) {
    if (d === void 0 && (d = -1), d === -1 && (d = p.rank - 1), d !== p.rank - 1) throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank " + p.rank + " and dim was " + d);
    return Io(function(m, v, g) {
      var y = v.logSumExp([d], !0), x = v.toFloat().sub(y);
      return g([m, x]), { value: x.mul(m).neg().sum([d]), gradFunc: function(b, w) {
        var C = w[0], k = w[1], I = at(b.shape, [d]);
        return [b.reshape(I).mul(C.toFloat().sub(k.exp())), b.reshape(I).mul(k.exp().sub(C.toFloat()))];
      } };
    })(h, p);
  }(a, i);
  return Jt(f, s, o);
} }), sg = Object.freeze({ get Reduction() {
  return Ye;
}, absoluteDifference: Zm, computeWeightedLoss: Jt, cosineDistance: eg, hingeLoss: tg, huberLoss: ng, logLoss: rg, meanSquaredError: og, sigmoidCrossEntropy: ag, softmaxCrossEntropy: ig });
function qs(r, t) {
  return t === void 0 && (t = !1), T.tidy(function() {
    if (r.shape.length !== 2) throw new Error("qr2d() requires a 2D Tensor, but got a " + r.shape.length + "D Tensor.");
    for (var e = r.shape[0], n = r.shape[1], o = Gu(e), a = r.clone(), i = sn([[1]], [1, 1]), s = i.clone(), u = e >= n ? n : e, c = function(f) {
      var h, p = a, d = s, m = o;
      h = T.tidy(function() {
        var v = a.slice([f, f], [e - f, 1]), g = v.norm(), y = a.slice([f, f], [1, 1]), x = sn([[-1]]).where(y.greater(0), sn([[1]])), b = y.sub(x.mul(g)), w = v.div(b);
        s = w.shape[0] === 1 ? i.clone() : i.concat(w.slice([1, 0], [w.shape[0] - 1, w.shape[1]]), 0);
        var C = x.matMul(b).div(g).neg(), k = a.slice([f, 0], [e - f, n]), I = C.mul(s);
        if (f === 0) a = k.sub(I.matMul(s.transpose().matMul(k)));
        else {
          var R = k.sub(I.matMul(s.transpose().matMul(k)));
          a = a.slice([0, 0], [f, n]).concat(R, 0);
        }
        var S = o.slice([0, f], [e, o.shape[1] - f]);
        if (f === 0) o = S.sub(S.matMul(s).matMul(I.transpose()));
        else {
          var N = S.sub(S.matMul(s).matMul(I.transpose()));
          o = o.slice([0, 0], [e, f]).concat(N, 1);
        }
        return [s, a, o];
      }), s = h[0], a = h[1], o = h[2], nt([p, d, m]);
    }, l = 0; l < u; ++l) c(l);
    return !t && e > n && (o = o.slice([0, 0], [e, n]), a = a.slice([0, 0], [n, n])), [o, a];
  });
}
var ug = A({ bandPart_: function(r, t, e) {
  if (t % 1 != 0) throw new Error("bandPart(): numLower must be an integer, got " + t + ".");
  if (e % 1 != 0) throw new Error("bandPart(): numUpper must be an integer, got " + e + ".");
  var n = E(r, "a", "bandPart");
  if (n.rank < 2) throw new Error("bandPart(): Rank must be at least 2, got " + n.rank + ".");
  var o = n.shape, a = n.shape.slice(-2), i = a[0], s = a[1];
  if (!(t <= i)) throw new Error("bandPart(): numLower (" + t + ") must not be greater than the number of rows (" + i + ").");
  if (!(e <= s)) throw new Error("bandPart(): numUpper (" + e + ") must not be greater than the number of columns (" + s + ").");
  t < 0 && (t = i), e < 0 && (e = s);
  var u = io(0, i, 1, "int32").reshape([-1, 1]), c = io(0, s, 1, "int32"), l = We(u, c), f = Ao(l.lessEqual(j(+t, "int32")), l.greaterEqual(j(-e, "int32"))), h = Ee([i, s], n.dtype);
  return dt(Be(n.reshape([-1, i, s])).map(function(p) {
    return _n(f, p, h);
  })).reshape(o);
} }), cg = A({ gramSchmidt_: function(r) {
  var t;
  if (Array.isArray(r)) {
    t = !1, _(r != null && r.length > 0, function() {
      return "Gram-Schmidt process: input must not be null, undefined, or empty";
    });
    for (var e = r[0].shape[0], n = function(u) {
      _(r[u].shape[0] === e, function() {
        return "Gram-Schmidt: Non-unique lengths found in the input vectors: (" + r[u].shape[0] + " vs. " + e + ")";
      });
    }, o = 1; o < r.length; ++o) n(o);
  } else t = !0, r = si(r, r.shape[0], 0).map(function(u) {
    return Ku(u, [0]);
  });
  _(r.length <= r[0].shape[0], function() {
    return "Gram-Schmidt: Number of vectors (" + r.length + ") exceeds number of dimensions (" + r[0].shape[0] + ").";
  });
  var a = [], i = r, s = function(u) {
    a.push(T.tidy(function() {
      var c = i[u];
      if (u > 0) for (var l = 0; l < u; ++l) {
        var f = Hc(a[l].mulStrict(c)).mul(a[l]);
        c = c.sub(f);
      }
      return c.div(Kc(c, "euclidean"));
    }));
  };
  for (o = 0; o < r.length; ++o) s(o);
  return t ? dt(a, 0) : a;
} }), lg = A({ qr_: function(r, t) {
  if (t === void 0 && (t = !1), r.rank < 2) throw new Error("qr() requires input tensor to have a rank >= 2, but got rank " + r.rank);
  if (r.rank === 2) return qs(r, t);
  var e = r.shape.slice(0, r.shape.length - 2).reduce(function(i, s) {
    return i * s;
  }), n = Be(r.reshape([e, r.shape[r.shape.length - 2], r.shape[r.shape.length - 1]]), 0), o = [], a = [];
  return n.forEach(function(i) {
    var s = qs(i, t), u = s[0], c = s[1];
    o.push(u), a.push(c);
  }), [dt(o, 0).reshape(r.shape), dt(a, 0).reshape(r.shape)];
} }), fg = Object.freeze({ bandPart: ug, gramSchmidt: cg, qr: lg });
function Fo(r, t, e, n, o, a) {
  n == null && (n = 0.5), o == null && (o = Number.NEGATIVE_INFINITY), a == null && (a = 0);
  var i = r.shape[0];
  return e = Math.min(e, i), _(0 <= n && n <= 1, function() {
    return "iouThreshold must be in [0, 1], but was '" + n + "'";
  }), _(r.rank === 2, function() {
    return "boxes must be a 2D tensor, but was of rank '" + r.rank + "'";
  }), _(r.shape[1] === 4, function() {
    return "boxes must have 4 columns, but 2nd dimension was " + r.shape[1];
  }), _(t.rank === 1, function() {
    return "scores must be a 1D tensor";
  }), _(t.shape[0] === i, function() {
    return "scores has incompatible shape with boxes. Expected " + i + ", but was " + t.shape[0];
  }), _(0 <= a && a <= 1, function() {
    return "softNmsSigma must be in [0, 1], but was '" + a + "'";
  }), { maxOutputSize: e, iouThreshold: n, scoreThreshold: o, softNmsSigma: a };
}
var hg = A({ resizeBilinear_: function(r, t, e) {
  e === void 0 && (e = !1);
  var n = E(r, "images", "resizeBilinear");
  _(n.rank === 3 || n.rank === 4, function() {
    return "Error in resizeBilinear: x must be rank 3 or 4, but got rank " + n.rank + ".";
  }), _(t.length === 2, function() {
    return "Error in resizeBilinear: new shape must 2D, but got shape " + t + ".";
  });
  var o = n, a = !1;
  n.rank === 3 && (a = !0, o = n.as4D(1, n.shape[0], n.shape[1], n.shape[2]));
  var i = t[0], s = t[1], u = T.runKernelFunc(function(c, l) {
    return l([o]), c.resizeBilinear(o, i, s, e);
  }, { x: o }, function(c, l) {
    return { x: function() {
      return T.runKernelFunc(function(f) {
        return f.resizeBilinearBackprop(c, l[0], e);
      }, {});
    } };
  }, "ResizeBilinear", { alignCorners: e, newHeight: i, newWidth: s });
  return a ? u.as3D(u.shape[1], u.shape[2], u.shape[3]) : u;
} }), pg = A({ resizeNearestNeighbor_: function(r, t, e) {
  e === void 0 && (e = !1);
  var n = E(r, "images", "resizeNearestNeighbor");
  _(n.rank === 3 || n.rank === 4, function() {
    return "Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank " + n.rank + ".";
  }), _(t.length === 2, function() {
    return "Error in resizeNearestNeighbor: new shape must 2D, but got shape " + t + ".";
  }), _(n.dtype === "float32" || n.dtype === "int32", function() {
    return "`images` must have `int32` or `float32` as dtype";
  });
  var o = n, a = !1;
  n.rank === 3 && (a = !0, o = n.as4D(1, n.shape[0], n.shape[1], n.shape[2]));
  var i = t[0], s = t[1], u = T.runKernelFunc(function(c, l) {
    return l([o]), c.resizeNearestNeighbor(o, i, s, e);
  }, { batchImages: o }, function(c, l) {
    return { batchImages: function() {
      return T.runKernelFunc(function(f) {
        return f.resizeNearestNeighborBackprop(c, l[0], e);
      }, {});
    } };
  });
  return a ? u.as3D(u.shape[1], u.shape[2], u.shape[3]) : u;
} }), dg = A({ nonMaxSuppression_: function(r, t, e, n, o) {
  n === void 0 && (n = 0.5), o === void 0 && (o = Number.NEGATIVE_INFINITY);
  var a = E(r, "boxes", "nonMaxSuppression"), i = E(t, "scores", "nonMaxSuppression"), s = Fo(a, i, e, n, o);
  e = s.maxOutputSize, n = s.iouThreshold, o = s.scoreThreshold;
  var u = { maxOutputSize: e, iouThreshold: n, scoreThreshold: o };
  return T.runKernelFunc(function(c) {
    return c.nonMaxSuppression(a, i, e, n, o);
  }, { boxes: a, scores: i }, null, "NonMaxSuppressionV3", u);
} }), vg = function(r, t, e, n, o) {
  return n === void 0 && (n = 0.5), o === void 0 && (o = Number.NEGATIVE_INFINITY), $(this, void 0, void 0, function() {
    var a, i, s, u, c, l, f;
    return Y(this, function(h) {
      switch (h.label) {
        case 0:
          return a = E(r, "boxes", "nonMaxSuppressionAsync"), i = E(t, "scores", "nonMaxSuppressionAsync"), s = Fo(a, i, e, n, o), e = s.maxOutputSize, n = s.iouThreshold, o = s.scoreThreshold, [4, Promise.all([a.data(), i.data()])];
        case 1:
          return u = h.sent(), c = u[0], l = u[1], f = fi(c, l, e, n, o), a !== r && a.dispose(), i !== t && i.dispose(), [2, f];
      }
    });
  });
}, mg = A({ nonMaxSuppressionWithScore_: function(r, t, e, n, o, a) {
  n === void 0 && (n = 0.5), o === void 0 && (o = Number.NEGATIVE_INFINITY), a === void 0 && (a = 0);
  var i = E(r, "boxes", "nonMaxSuppression"), s = E(t, "scores", "nonMaxSuppression"), u = Fo(i, s, e, n, o, a), c = { maxOutputSize: e = u.maxOutputSize, iouThreshold: n = u.iouThreshold, scoreThreshold: o = u.scoreThreshold, softNmsSigma: a = u.softNmsSigma }, l = T.runKernel("NonMaxSuppressionV5", { boxes: i, scores: s }, c);
  return { selectedIndices: l[0], selectedScores: l[1] };
} }), gg = function(r, t, e, n, o, a) {
  return n === void 0 && (n = 0.5), o === void 0 && (o = Number.NEGATIVE_INFINITY), a === void 0 && (a = 0), $(this, void 0, void 0, function() {
    var i, s, u, c, l, f, h;
    return Y(this, function(p) {
      switch (p.label) {
        case 0:
          return i = E(r, "boxes", "nonMaxSuppressionAsync"), s = E(t, "scores", "nonMaxSuppressionAsync"), u = Fo(i, s, e, n, o, a), e = u.maxOutputSize, n = u.iouThreshold, o = u.scoreThreshold, a = u.softNmsSigma, [4, Promise.all([i.data(), s.data()])];
        case 1:
          return c = p.sent(), l = c[0], f = c[1], h = hi(l, f, e, n, o, a), i !== r && i.dispose(), s !== t && s.dispose(), [2, h];
      }
    });
  });
}, yg = A({ cropAndResize_: function(r, t, e, n, o, a) {
  var i = E(r, "image", "cropAndResize"), s = E(t, "boxes", "cropAndResize", "float32"), u = E(e, "boxInd", "cropAndResize", "int32");
  o = o || "bilinear", a = a || 0;
  var c = s.shape[0];
  return _(i.rank === 4, function() {
    return "Error in cropAndResize: image must be rank 4,but got rank " + i.rank + ".";
  }), _(s.rank === 2 && s.shape[1] === 4, function() {
    return "Error in cropAndResize: boxes must be have size [" + c + ",4] but had shape " + s.shape + ".";
  }), _(u.rank === 1 && u.shape[0] === c, function() {
    return "Error in cropAndResize: boxInd must be have size [" + c + "] but had shape " + s.shape + ".";
  }), _(n.length === 2, function() {
    return "Error in cropAndResize: cropSize must be of length 2, but got length " + n.length + ".";
  }), _(n[0] >= 1 && n[1] >= 1, function() {
    return "cropSize must be atleast [1,1], but was " + n;
  }), _(o === "bilinear" || o === "nearest", function() {
    return "method must be bilinear or nearest, but was " + o;
  }), T.runKernelFunc(function(l, f) {
    return l.cropAndResize(i, s, u, n, o, a);
  }, { images: i, boxes: s, boxInd: u }, null, "CropAndResize", { method: o, extrapolationValue: a, cropSize: n });
} }), Si = Object.freeze({ resizeBilinear: hg, resizeNearestNeighbor: pg, nonMaxSuppression: dg, nonMaxSuppressionAsync: vg, nonMaxSuppressionWithScore: mg, nonMaxSuppressionWithScoreAsync: gg, cropAndResize: yg }), Ii = function(r, t) {
  return !(r > 0) || t === "linear";
}, ki = function(r, t, e) {
  if (e == null || e === "linear") return r;
  if (e === "relu") return r.mul(t.step());
  throw new Error("Gradient for activation " + e + " has not been implemented yet.");
}, Ai = function(r, t) {
  var e = t, n = Le(r.shape, t.shape);
  return n.length > 0 && (e = e.sum(n)), e.reshape(r.shape);
}, Di = function(r, t, e) {
  if (t === "linear") return r;
  if (t === "relu") return Ie(r);
  if (t === "elu") return Gc(r);
  if (t === "relu6") return jc(r);
  if (t === "prelu") return qc(r, e);
  throw new Error("Unknown fused activation " + t + ".");
}, bg = A({ fusedMatMul_: function(r) {
  var t, e = r.a, n = r.b, o = r.transposeA, a = o !== void 0 && o, i = r.transposeB, s = i !== void 0 && i, u = r.bias, c = r.activation, l = c === void 0 ? "linear" : c, f = r.preluActivationWeights;
  if (Ii(T.state.gradientDepth, l) === !1) {
    var h = To(e, n, a, s);
    return u != null && (h = le(h, u)), Di(h, l, f);
  }
  var p = E(e, "a", "fused matMul"), d = E(n, "b", "fused matMul");
  t = ke(p, d), p = t[0], d = t[1];
  var m = a ? p.shape[p.rank - 2] : p.shape[p.rank - 1], v = s ? d.shape[d.rank - 1] : d.shape[d.rank - 2], g = a ? p.shape[p.rank - 1] : p.shape[p.rank - 2], y = s ? d.shape[d.rank - 2] : d.shape[d.rank - 1], x = p.shape.slice(0, -2), b = d.shape.slice(0, -2), w = J(x), C = J(b);
  _(p.rank >= 2 && d.rank >= 2 && p.rank === d.rank, function() {
    return "Error in fused matMul: inputs must have the same rank of at least 2, got ranks " + p.rank + " and " + d.rank + ".";
  }), _(Ve(x, b), function() {
    return "Error in fused matMul: outer dimensions (" + x + ") and (" + b + ") of Tensors with shapes " + p.shape + " and " + d.shape + " must match.";
  }), _(m === v, function() {
    return "Error in fused matMul: inner shapes (" + m + ") and (" + v + ") of Tensors with shapes " + p.shape + " and " + d.shape + " and transposeA=" + a + " and transposeB=" + s + " must match.";
  });
  var k, I, R = p.shape.slice(0, -2).concat([g, y]), S = a ? p.as3D(w, m, g) : p.as3D(w, g, m), N = s ? d.as3D(C, y, v) : d.as3D(C, v, y);
  u != null && he(R, (k = ke(k = E(u, "bias", "fused matMul"), p)[0]).shape), f != null && (I = E(f, "prelu weights", "fused matMul"));
  var D = { a: S, b: N };
  u != null && (D.bias = k), f != null && (D.preluActivationWeights = I);
  var W = [S, N];
  return T.runKernelFunc(function(B, L) {
    var V = B.fusedBatchMatMul({ a: S, b: N, transposeA: a, transposeB: s, bias: k, activation: l, preluActivationWeights: I });
    return L([S, N, V]), V;
  }, D, function(B, L) {
    var V = L[0], z = L[1], U = L[2], G = ki(B, U, l), q = {};
    return u != null && (q = { bias: function() {
      return Ai(k, G);
    } }), Object.assign(a || s ? !a && s ? { a: function() {
      return G.matMul(z, !1, !1);
    }, b: function() {
      return G.matMul(V, !0, !1);
    } } : a && !s ? { a: function() {
      return z.matMul(G, !1, !0);
    }, b: function() {
      return V.matMul(G, !1, !1);
    } } : { a: function() {
      return z.matMul(G, !0, !0);
    }, b: function() {
      return G.matMul(V, !0, !0);
    } } : { a: function() {
      return G.matMul(z, !1, !0);
    }, b: function() {
      return V.matMul(G, !0, !1);
    } }, q);
  }, "_FusedMatMul", { transposeA: a, transposeB: s, activation: l }, W, [!0]).reshape(R);
} }), xg = A({ fusedConv2d_: function(r) {
  var t = r.x, e = r.filter, n = r.strides, o = r.pad, a = r.dataFormat, i = a === void 0 ? "NHWC" : a, s = r.dilations, u = s === void 0 ? [1, 1] : s, c = r.dimRoundingMode, l = r.bias, f = r.activation, h = f === void 0 ? "linear" : f, p = r.preluActivationWeights;
  if (h = h || "linear", Ii(T.state.gradientDepth, h) === !1) {
    var d = yt(t, e, n, o, i, u, c);
    return l != null && (d = le(d, l)), Di(d, h, p);
  }
  var m = E(t, "x", "conv2d"), v = E(e, "filter", "conv2d"), g = m, y = !1;
  m.rank === 3 && (y = !0, g = m.as4D(1, m.shape[0], m.shape[1], m.shape[2])), _(g.rank === 4, function() {
    return "Error in fused conv2d: input must be rank 4, but got rank " + g.rank + ".";
  }), _(v.rank === 4, function() {
    return "Error in fused conv2d: filter must be rank 4, but got rank " + v.rank + ".";
  }), c != null && _(Ne(o), function() {
    return "Error in fused conv2d: pad must be an integer when using, dimRoundingMode " + c + " but got pad " + o + ".";
  }), _(g.shape[3] === v.shape[2], function() {
    return "Error in conv2d: depth of input (" + g.shape[3] + ") must match input depth for filter " + v.shape[2] + ".";
  }), _(it(n, u), function() {
    return "Error in conv2D: Either strides or dilations must be 1. Got strides " + n + " and dilations '" + u + "'";
  }), _(i === "NHWC", function() {
    return "Error in conv2d: got dataFormat of " + i + " but only NHWC is currently supported.";
  });
  var x, b, w = An(g.shape, v.shape, n, u, o, c);
  l != null && (x = ke(x = E(l, "bias", "fused conv2d"), m)[0], he(w.outShape, x.shape)), p != null && (b = E(p, "prelu weights", "fused conv2d"));
  var C = { x: g, filter: v };
  l != null && (C.bias = x), p != null && (C.preluActivationWeights = b);
  var k = [v, g], I = T.runKernelFunc(function(R, S) {
    var N = R.fusedConv2d({ input: g, filter: v, convInfo: w, bias: x, activation: h, preluActivationWeights: b });
    return S([v, g, N]), N;
  }, C, function(R, S) {
    var N = S, D = N[0], W = N[1], B = N[2], L = ki(R, B, h);
    _(er(u), function() {
      return "Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + u + "'";
    });
    var V = {};
    return l != null && (V = { bias: function() {
      return Ai(x, L);
    } }), Object.assign({ x: function() {
      return Mc(W.shape, L, D, n, o);
    }, filter: function() {
      return xi(W, L, D.shape, n, o);
    } }, V);
  }, "FusedConv2D", { convInfo: w, activation: h }, k, [!0]);
  return y ? I.as3D(I.shape[1], I.shape[2], I.shape[3]) : I;
} }), wg = A({ fusedDepthwiseConv2d_: function(r) {
  var t = r.x, e = r.filter, n = r.strides, o = r.pad, a = r.dataFormat, i = a === void 0 ? "NHWC" : a, s = r.dilations, u = s === void 0 ? [1, 1] : s, c = r.dimRoundingMode, l = r.bias, f = r.activation, h = f === void 0 ? "linear" : f, p = r.preluActivationWeights;
  if (Ii(T.state.gradientDepth, h) === !1) {
    var d = Do(t, e, n, o, i, u, c);
    return l != null && (d = le(d, l)), Di(d, h, p);
  }
  var m = E(t, "x", "depthwiseConv2d"), v = E(e, "filter", "depthwiseConv2d"), g = m, y = !1;
  m.rank === 3 && (y = !0, g = m.as4D(1, m.shape[0], m.shape[1], m.shape[2])), _(g.rank === 4, function() {
    return "Error in fused depthwiseConv2d: input must be rank 4, but got rank " + g.rank + ".";
  }), _(v.rank === 4, function() {
    return "Error in fused depthwiseConv2d: filter must be rank 4, but got rank " + v.rank + ".";
  }), _(g.shape[3] === v.shape[2], function() {
    return "Error in fused depthwiseConv2d: number of input channels (" + g.shape[3] + ") must match the inChannels dimension in filter " + v.shape[2] + ".";
  }), u == null && (u = [1, 1]), _(it(n, u), function() {
    return "Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides " + n + " and dilations '" + u + "'";
  }), c != null && _(Ne(o), function() {
    return "Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode " + c + " but got pad " + o + ".";
  });
  var x, b, w = An(g.shape, v.shape, n, u, o, c, !0);
  l != null && (x = ke(x = E(l, "bias", "fused conv2d"), m)[0], he(w.outShape, x.shape)), p != null && (b = E(p, "prelu weights", "fused depthwiseConv2d"));
  var C = { x: g, filter: v };
  l != null && (C.bias = x), p != null && (C.preluActivationWeights = b);
  var k = [v, g], I = T.runKernelFunc(function(R, S) {
    var N = R.fusedDepthwiseConv2D({ input: g, filter: v, convInfo: w, bias: x, activation: h, preluActivationWeights: b });
    return S([v, g, N]), N;
  }, C, function(R, S) {
    _(er(u), function() {
      return "Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '" + u + "'";
    });
    var N = S[0], D = S[1], W = S[2], B = ki(R, W, h), L = {};
    return l != null && (L = { bias: function() {
      return Ai(x, B);
    } }), Object.assign({ x: function() {
      return Bc(D.shape, B, N, w);
    }, filter: function() {
      return Lc(D, B, N.shape, w);
    } }, L);
  }, "FusedDepthwiseConv2D", { convInfo: w, activation: h }, k, [!0]);
  return y ? I.as3D(I.shape[1], I.shape[2], I.shape[3]) : I;
} }), Cg = Object.freeze({ matMul: bg, conv2d: xg, depthwiseConv2d: wg }), Eg = Object.freeze({ image: Si, linalg: fg, losses: sg, spectral: jm, fused: Cg, signal: Jm, square: rv, squaredDifference: xc, conv1d: hm, conv2d: yt, conv3d: pm, depthwiseConv2d: Do, separableConv2d: wi, conv2dTranspose: dm, conv3dTranspose: vm, op: A, batchNormalization2d: Fv, batchNormalization3d: Pv, batchNormalization4d: Ov, batchNormalization: Mv, batchNorm: Sc, batchNorm2d: Bv, batchNorm3d: Lv, batchNorm4d: Wv, booleanMaskAsync: fm, complex: Ge, real: mt, imag: Ft, concat: Me, concat1d: Ch, concat2d: Eh, concat3d: _h, concat4d: Rh, split: si, matMul: To, dot: mm, outerProduct: gm, reverse: Sr, reverse1d: ym, reverse2d: bm, reverse3d: xm, reverse4d: wm, maxPool: ze, avgPool: Ir, pool: Cm, maxPool3d: Em, avgPool3d: _m, slice: Lt, slice1d: Rm, slice2d: Sm, slice3d: zc, slice4d: Im, abs: ov, acos: av, acosh: iv, asin: sv, asinh: uv, atan: cv, atanh: lv, ceil: fv, clipByValue: gi, cos: hv, cosh: pv, erf: dv, exp: Va, expm1: vv, floor: mv, log: gv, log1p: yv, logSigmoid: bv, neg: vo, reciprocal: xv, round: wv, rsqrt: wc, sigmoid: Cc, sign: Cv, isNaN: Ev, isInf: _v, isFinite: Rv, sin: Sv, sinh: Iv, softplus: kv, sqrt: Av, step: Dv, tan: Tv, tanh: Nv, all: km, any: Am, argMax: Dm, argMin: Tm, logSumExp: Nm, max: No, mean: Fm, min: Pm, moments: Om, sum: Hc, prod: Mm, equal: Tc, equalStrict: tm, greater: nm, greaterEqual: Nc, greaterEqualStrict: rm, greaterStrict: om, less: am, lessEqual: im, lessEqualStrict: sm, lessStrict: um, notEqual: cm, notEqualStrict: lm, add: le, addN: Vv, addStrict: Hv, atan2: Gv, div: bt, divNoNan: qv, divStrict: jv, floorDiv: Ac, maximum: yi, maximumStrict: Kv, minimum: Dc, minimumStrict: Xv, mod: $v, modStrict: Yv, mul: Qe, mulStrict: Jv, pow: mo, powStrict: Qv, squaredDifferenceStrict: Zv, sub: We, subStrict: em, elu: Gc, leakyRelu: Bm, prelu: qc, relu: Ie, relu6: jc, selu: Lm, logicalAnd: Ao, logicalNot: Uv, logicalOr: Ic, logicalXor: zv, where: _n, whereAsync: kc, buffer: ae, print: Ph, batchToSpaceND: Hu, broadcastTo: Oh, cast: Mh, clone: Bh, cumsum: Lh, depthToSpace: Wh, expandDims: vt, eye: Gu, multinomial: Uh, oneHot: La, pad: kn, pad1d: zh, pad2d: Vh, pad3d: Hh, pad4d: Gh, rand: qh, randomNormal: jh, randomGamma: Kh, randomUniform: qu, reshape: xt, spaceToBatchND: ju, squeeze: Ku, stack: dt, tile: Gn, truncatedNormal: Xh, unstack: Be, setdiff1dAsync: $h, fill: Bt, linspace: wh, ones: nr, range: io, scalar: j, tensor: je, tensor1d: Pe, tensor2d: sn, tensor3d: ii, tensor4d: et, tensor5d: yh, tensor6d: bh, variable: xh, zeros: Ee, onesLike: Vu, zerosLike: ge, transpose: ln, softmax: Yt, logSoftmax: np, localResponseNormalization: Wm, norm: Kc, gather: bi, unsortedSegmentSum: Fc, basicLSTMCell: Um, multiRNNCell: zm, movingAverage: Vm, stridedSlice: Hm, topk: Gm, scatterND: qm, fft: Ci, ifft: go, rfft: Ei, irfft: Xc, sparseToDense: Km, gatherND: Xm, diag: $m, dropout: Ym, hannWindow: _i, hammingWindow: Yc, frame: Ri, stft: Jc, inTopKAsync: Qm });
function H(r, t) {
  Array.isArray(r) || (r = [r]), r.forEach(function(e) {
    e != null && _(e.dtype !== "complex64", function() {
      return t + " does not support complex64 tensors.";
    });
  });
}
function va(r, t, e, n) {
  if (e === "linear") return r.linear(t);
  if (e === "relu") return r.relu(t);
  if (e === "elu") return r.elu(t);
  if (e === "relu6") return r.relu6(t);
  if (e === "prelu") return r.prelu(t, n);
  throw new Error("Activation " + e + " has not been implemented for the CPU backend.");
}
var _g = function(r) {
  function t() {
    var e = r.call(this) || this;
    return e.blockSize = 48, e.firstUse = !0, e.data = new ec(e, T), e;
  }
  return Ct(t, r), t.prototype.write = function(e, n, o) {
    this.firstUse && (this.firstUse = !1, M().get("IS_NODE") && oo(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));
    var a = {};
    return this.data.set(a, { values: e, dtype: o }), a;
  }, t.prototype.move = function(e, n, o, a) {
    this.data.set(e, { values: n, dtype: a });
  }, t.prototype.numDataIds = function() {
    return this.data.numDataIds();
  }, t.prototype.read = function(e) {
    return $(this, void 0, void 0, function() {
      return Y(this, function(n) {
        return [2, this.readSync(e)];
      });
    });
  }, t.prototype.readSync = function(e) {
    var n = this.data.get(e), o = n.dtype, a = n.complexTensors;
    return o === "complex64" ? za(this.readSync(a.real.dataId), this.readSync(a.imag.dataId)) : this.data.get(e).values;
  }, t.prototype.bufferSync = function(e) {
    var n = this.readSync(e.dataId), o = n;
    if (e.dtype === "string") try {
      o = n.map(function(a) {
        return to(a);
      });
    } catch {
      throw new Error("Failed to decode encoded string bytes into utf-8");
    }
    return ae(e.shape, e.dtype, o);
  }, t.prototype.makeOutput = function(e, n, o) {
    var a = this.write(e, n, o);
    return T.makeTensorFromDataId(a, n, o, this);
  }, t.prototype.disposeData = function(e) {
    if (this.data.has(e)) {
      var n = this.data.get(e).complexTensors;
      n != null && (n.real.dispose(), n.imag.dispose()), this.data.delete(e);
    }
  }, t.prototype.time = function(e) {
    return $(this, void 0, void 0, function() {
      var n;
      return Y(this, function(o) {
        return n = Tt(), e(), [2, { kernelMs: Tt() - n }];
      });
    });
  }, t.prototype.memory = function() {
    return { unreliable: !0, reasons: ["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."] };
  }, t.prototype.complex = function(e, n) {
    var o = this.makeOutput(null, e.shape, "complex64");
    return this.data.get(o.dataId).complexTensors = { real: T.keep(e.clone()), imag: T.keep(n.clone()) }, o;
  }, t.prototype.real = function(e) {
    return this.data.get(e.dataId).complexTensors.real.clone();
  }, t.prototype.imag = function(e) {
    return this.data.get(e.dataId).complexTensors.imag.clone();
  }, t.prototype.slice = function(e, n, o) {
    if (H(e, "slice"), Qu(e.shape, n, o)) {
      var a = Zu(n, e.strides), i = J(o);
      return je(this.readSync(e.dataId).subarray(a, a + i), o, e.dtype);
    }
    for (var s = ae(o, e.dtype), u = this.bufferSync(e), c = 0; c < s.size; ++c) {
      var l = s.indexToLoc(c).map(function(f, h) {
        return f + n[h];
      });
      s.values[c] = u.get.apply(u, l);
    }
    return s.toTensor();
  }, t.prototype.stridedSlice = function(e, n, o, a) {
    H(e, "stridedSlice");
    var i = ci(n, o, a);
    if (i.some(function(p) {
      return p === 0;
    })) return je([], i);
    for (var s = ae(i, e.dtype), u = this.bufferSync(e), c = 0; c < s.size; c++) {
      for (var l = s.indexToLoc(c), f = new Array(l.length), h = 0; h < f.length; h++) f[h] = l[h] * a[h] + n[h];
      s.set.apply(s, [u.get.apply(u, f)].concat(l));
    }
    return s.toTensor();
  }, t.prototype.diag = function(e) {
    for (var n = this.readSync(e.dataId), o = ae([e.size, e.size], e.dtype), a = o.values, i = 0; i < n.length; i++) a[i * e.size + i] = n[i];
    return o.toTensor();
  }, t.prototype.unstack = function(e, n) {
    for (var o = e.shape[n], a = new Array(e.rank - 1), i = 0, s = 0; s < e.rank; s++) s !== n && (a[i++] = e.shape[s]);
    var u = new Array(e.rank).fill(0), c = e.shape.slice();
    c[n] = 1;
    var l = new Array(o);
    for (s = 0; s < l.length; s++) u[n] = s, l[s] = this.slice(e, u, c).reshape(a);
    return l;
  }, t.prototype.reverse = function(e, n) {
    H(e, "reverse");
    for (var o = ae(e.shape, e.dtype), a = this.bufferSync(e), i = function(u) {
      var c = o.indexToLoc(u), l = c.slice();
      n.forEach(function(f) {
        return l[f] = e.shape[f] - 1 - l[f];
      }), o.set.apply(o, [a.get.apply(a, l)].concat(c));
    }, s = 0; s < o.size; s++) i(s);
    return o.toTensor();
  }, t.prototype.concat = function(e, n) {
    var o = this;
    if (e[0].dtype === "complex64") {
      var a = e.map(function(p) {
        return mt(p);
      }), i = e.map(function(p) {
        return Ft(p);
      });
      return Ge(this.concat(a, n), this.concat(i, n));
    }
    var s = e.map(function(p) {
      var d = J(p.shape.slice(n));
      return p.as2D(-1, d);
    }), u = Zn(s.map(function(p) {
      return p.shape;
    }), 1), c = ae(u, e[0].dtype).values;
    if (s[0].shape[0] === 1) {
      var l = 0;
      s.forEach(function(p) {
        c.set(o.readSync(p.dataId), l), l += p.size;
      });
    } else {
      var f = 0;
      s.forEach(function(p) {
        for (var d = o.readSync(p.dataId), m = 0, v = 0; v < p.shape[0]; ++v) for (var g = v * u[1] + f, y = 0; y < p.shape[1]; ++y) c[g + y] = d[m++];
        f += p.shape[1];
      });
    }
    var h = Zn(e.map(function(p) {
      return p.shape;
    }), n);
    return je(c, h, e[0].dtype);
  }, t.prototype.neg = function(e) {
    return H(e, "neg"), this.multiply(j(-1), e);
  }, t.prototype.add = function(e, n) {
    return e.dtype === "complex64" || n.dtype === "complex64" ? this.broadcastedBinaryComplexOp(e.cast("complex64"), n.cast("complex64"), function(o, a, i, s) {
      return { real: o + i, imag: a + s };
    }) : this.broadcastedBinaryOp(e, n, qe(e.dtype, n.dtype), function(o, a) {
      return o + a;
    });
  }, t.prototype.addN = function(e) {
    var n = this;
    H(e, "addN");
    for (var o = e.map(function(l) {
      return n.readSync(l.dataId);
    }), a = ae(e[0].shape, e[0].dtype), i = a.values, s = 0; s < e.length; s++) for (var u = o[s], c = 0; c < i.length; c++) i[c] += u[c];
    return a.toTensor();
  }, t.prototype.softmax = function(e, n) {
    var o = Ue([n], e.shape), a = this.max(e, o), i = at(a.shape, o), s = this.subtract(e, a.reshape(i)), u = this.exp(s), c = this.sum(u, o).reshape(i);
    return this.realDivide(u, c);
  }, t.prototype.subtract = function(e, n) {
    return e.dtype === "complex64" || n.dtype === "complex64" ? this.broadcastedBinaryComplexOp(e.cast("complex64"), n.cast("complex64"), function(o, a, i, s) {
      return { real: o - i, imag: a - s };
    }) : this.broadcastedBinaryOp(e, n, qe(e.dtype, n.dtype), function(o, a) {
      return o - a;
    });
  }, t.prototype.pow = function(e, n) {
    return H([e, n], "pow"), this.broadcastedBinaryOp(e, n, e.dtype, function(o, a) {
      return Math.pow(o, a);
    });
  }, t.prototype.batchMatMul = function(e, n, o, a) {
    H([e, n], "matMul");
    for (var i = o ? e.shape[1] : e.shape[2], s = o ? e.shape[2] : e.shape[1], u = a ? n.shape[1] : n.shape[2], c = e.shape[0], l = this.readSync(e.dataId), f = this.readSync(n.dataId), h = o ? [e.strides[0], 1, e.strides[1]] : [e.strides[0], e.strides[1], 1], p = h[0], d = h[1], m = h[2], v = a ? [1, n.strides[1], n.strides[0]] : [n.strides[1], 1, n.strides[0]], g = v[0], y = v[1], x = v[2], b = s * u, w = ae([c, s, u], e.dtype), C = w.values, k = this.blockSize, I = 0; I < c; I++) for (var R = 0; R < s; R += k) for (var S = 0; S < u; S += k) for (var N = 0; N < i; N += k) for (var D = Math.min(R + k, s), W = Math.min(S + k, u), B = Math.min(N + k, i), L = R; L < D; L++) for (var V = S; V < W; V++) {
      for (var z = 0, U = N; U < B; U++) z += l[I * p + L * d + U * m] * f[U * g + V * y + I * x];
      C[I * b + (L * u + V)] += z;
    }
    return w.toTensor();
  }, t.prototype.fusedBatchMatMul = function(e) {
    var n = e.a, o = e.b, a = e.transposeA, i = e.transposeB, s = e.bias, u = e.activation, c = e.preluActivationWeights, l = this.batchMatMul(n, o, a, i);
    return s && (l = this.add(l, s)), u && (l = va(this, l, u, c)), l;
  }, t.prototype.multiply = function(e, n) {
    return e.dtype === "complex64" || n.dtype === "complex64" ? this.broadcastedBinaryComplexOp(e.cast("complex64"), n.cast("complex64"), function(o, a, i, s) {
      return { real: o * i - a * s, imag: o * s + a * i };
    }) : this.broadcastedBinaryOp(e, n, qe(e.dtype, n.dtype), function(o, a) {
      return o * a;
    });
  }, t.prototype.realDivide = function(e, n) {
    return H([e, n], "realDivide"), this.broadcastedBinaryOp(e, n, "float32", function(o, a) {
      return o / a;
    });
  }, t.prototype.floorDiv = function(e, n) {
    return H([e, n], "floorDiv"), this.broadcastedBinaryOp(e, n, "int32", function(o, a) {
      return Math.floor(o / a);
    });
  }, t.prototype.sum = function(e, n) {
    H(e, "sum"), ut("sum", n, e.rank);
    for (var o = Ke(e.shape, n), a = o[0], i = o[1], s = Ee(a, qe(e.dtype, "int32")), u = J(i), c = this.readSync(s.dataId), l = this.readSync(e.dataId), f = 0; f < c.length; ++f) {
      for (var h = f * u, p = 0, d = 0; d < u; ++d) p += l[h + d];
      c[f] = p;
    }
    return s;
  }, t.prototype.prod = function(e, n) {
    H(e, "sum");
    for (var o = Ke(e.shape, n), a = o[0], i = o[1], s = Ee(a, qe(e.dtype, "int32")), u = J(i), c = this.readSync(s.dataId), l = this.readSync(e.dataId), f = 0; f < c.length; ++f) {
      for (var h = f * u, p = 1, d = 0; d < u; ++d) p *= l[h + d];
      c[f] = p;
    }
    return s;
  }, t.prototype.unsortedSegmentSum = function(e, n, o) {
    H(e, "unsortedSegmentSum");
    for (var a = [], i = e.rank - n.rank, s = 0; s < i; ++s) n = n.expandDims(s + 1);
    for (s = 0; s < o; ++s) {
      var u = j(s, "int32"), c = Tc(u, n).asType("float32").mul(e).sum(0);
      a.push(c);
    }
    return dt(a);
  }, t.prototype.argMin = function(e, n) {
    H(e, "argMin");
    var o = [n];
    ut("argMin", o, e.rank);
    for (var a = Ke(e.shape, o), i = a[0], s = a[1], u = Ee(i, "int32"), c = J(s), l = this.readSync(u.dataId), f = this.readSync(e.dataId), h = 0; h < l.length; ++h) {
      for (var p = h * c, d = f[p], m = 0, v = 0; v < c; ++v) {
        var g = f[p + v];
        g < d && (d = g, m = v);
      }
      l[h] = m;
    }
    return u;
  }, t.prototype.argMax = function(e, n) {
    H(e, "argMax");
    var o = [n];
    ut("argMax", o, e.rank);
    for (var a = Ke(e.shape, o), i = a[0], s = a[1], u = Ee(i, "int32"), c = J(s), l = this.readSync(u.dataId), f = this.readSync(e.dataId), h = 0; h < l.length; ++h) {
      for (var p = h * c, d = f[p], m = 0, v = 0; v < c; ++v) {
        var g = f[p + v];
        g > d && (d = g, m = v);
      }
      l[h] = m;
    }
    return u;
  }, t.prototype.cumsum = function(e, n, o, a) {
    if (H(e, "cumsum"), n !== e.rank - 1) throw new Error("backend.cumsum in CPU expects an inner-most axis=" + (e.rank - 1) + " but got axis=" + n);
    for (var i = qe(e.dtype, "int32"), s = Ee(e.shape, i), u = this.readSync(s.dataId), c = this.readSync(e.dataId), l = e.shape[e.rank - 1], f = a ? function(v, g) {
      return v + l - g - 1;
    } : function(v, g) {
      return v + g;
    }, h = 0; h < c.length; h += l) for (var p = 0; p < l; p++) {
      var d = f(h, p);
      if (p === 0) u[d] = o ? 0 : c[d];
      else {
        var m = f(h, p - 1);
        u[d] = o ? c[m] + u[m] : c[d] + u[m];
      }
    }
    return s;
  }, t.prototype.equal = function(e, n) {
    return H([e, n], "equal"), this.broadcastedBinaryOp(e, n, "bool", function(o, a) {
      return o === a ? 1 : 0;
    });
  }, t.prototype.notEqual = function(e, n) {
    return H([e, n], "notEqual"), this.broadcastedBinaryOp(e, n, "bool", function(o, a) {
      return o !== a ? 1 : 0;
    });
  }, t.prototype.less = function(e, n) {
    return H([e, n], "less"), this.broadcastedBinaryOp(e, n, "bool", function(o, a) {
      return o < a ? 1 : 0;
    });
  }, t.prototype.lessEqual = function(e, n) {
    return H([e, n], "lessEqual"), this.broadcastedBinaryOp(e, n, "bool", function(o, a) {
      return o <= a ? 1 : 0;
    });
  }, t.prototype.greater = function(e, n) {
    return H([e, n], "greater"), this.broadcastedBinaryOp(e, n, "bool", function(o, a) {
      return o > a ? 1 : 0;
    });
  }, t.prototype.greaterEqual = function(e, n) {
    return H([e, n], "greaterEqual"), this.broadcastedBinaryOp(e, n, "bool", function(o, a) {
      return o >= a ? 1 : 0;
    });
  }, t.prototype.logicalNot = function(e) {
    H(e, "logicalNot");
    for (var n = this.readSync(e.dataId), o = new Uint8Array(n.length), a = 0; a < n.length; ++a) o[a] = n[a] ? 0 : 1;
    return this.makeOutput(o, e.shape, "bool");
  }, t.prototype.logicalAnd = function(e, n) {
    return H([e, n], "logicalAnd"), this.broadcastedBinaryOp(e, n, "bool", function(o, a) {
      return o && a;
    });
  }, t.prototype.logicalOr = function(e, n) {
    return H([e, n], "logicalOr"), this.broadcastedBinaryOp(e, n, "bool", function(o, a) {
      return o || a;
    });
  }, t.prototype.select = function(e, n, o) {
    H([e, n, o], "select");
    for (var a = this.readSync(e.dataId), i = this.readSync(n.dataId), s = this.readSync(o.dataId), u = Ee(n.shape, qe(n.dtype, o.dtype)), c = this.readSync(u.dataId), l = 0, f = e.rank === 0 || e.rank > 1 || n.rank === 1 ? 1 : J(n.shape.slice(1)), h = 0; h < a.length; h++) for (var p = 0; p < f; p++) a[h] === 1 ? c[l++] = i[h] : c[l++] = s[h];
    return u;
  }, t.prototype.where = function(e) {
    H([e], "where");
    var n = this.readSync(e.dataId);
    return pi(e.shape, n);
  }, t.prototype.topk = function(e, n, o) {
    return H(e, "topk"), uc(this.readSync(e.dataId), e.shape, e.dtype, n);
  }, t.prototype.min = function(e, n) {
    H(e, "min"), ut("min", n, e.rank);
    for (var o = Ke(e.shape, n), a = o[0], i = o[1], s = Ee(a, e.dtype), u = J(i), c = this.readSync(s.dataId), l = this.readSync(e.dataId), f = 0; f < c.length; ++f) {
      for (var h = f * u, p = l[h], d = 0; d < u; ++d) {
        var m = l[h + d];
        m < p && (p = m);
      }
      c[f] = p;
    }
    return s;
  }, t.prototype.minimum = function(e, n) {
    return H([e, n], "minimum"), this.broadcastedBinaryOp(e, n, e.dtype, function(o, a) {
      return Math.min(o, a);
    });
  }, t.prototype.mod = function(e, n) {
    return H([e, n], "mod"), this.broadcastedBinaryOp(e, n, e.dtype, function(o, a) {
      var i = o % a;
      return o < 0 && a < 0 || o >= 0 && a >= 0 ? i : (i + a) % a;
    });
  }, t.prototype.max = function(e, n) {
    H(e, "max"), ut("max", n, e.rank);
    for (var o = Ke(e.shape, n), a = o[0], i = o[1], s = Ee(a, e.dtype), u = J(i), c = this.readSync(s.dataId), l = this.readSync(e.dataId), f = 0; f < c.length; ++f) {
      for (var h = f * u, p = l[h], d = 0; d < u; ++d) {
        var m = l[h + d];
        m > p && (p = m);
      }
      c[f] = p;
    }
    return s;
  }, t.prototype.maximum = function(e, n) {
    return H([e, n], "maximum"), this.broadcastedBinaryOp(e, n, e.dtype, function(o, a) {
      return Math.max(o, a);
    });
  }, t.prototype.all = function(e, n) {
    H(e, "all"), ut("all", n, e.rank);
    for (var o = Ke(e.shape, n), a = o[0], i = o[1], s = Ee(a, e.dtype), u = J(i), c = this.readSync(s.dataId), l = this.readSync(e.dataId), f = 0; f < c.length; ++f) {
      for (var h = f * u, p = l[h], d = 0; d < u; ++d) {
        var m = l[h + d];
        p = p && m;
      }
      c[f] = p;
    }
    return s;
  }, t.prototype.any = function(e, n) {
    H(e, "any"), ut("any", n, e.rank);
    for (var o = Ke(e.shape, n), a = o[0], i = o[1], s = Ee(a, e.dtype), u = J(i), c = this.readSync(s.dataId), l = this.readSync(e.dataId), f = 0; f < c.length; ++f) {
      for (var h = f * u, p = l[h], d = 0; d < u; ++d) {
        var m = l[h + d];
        p = p || m;
      }
      c[f] = p;
    }
    return s;
  }, t.prototype.squaredDifference = function(e, n) {
    return H([e, n], "squaredDifference"), this.broadcastedBinaryOp(e, n, e.dtype, function(o, a) {
      var i = o - a;
      return i * i;
    });
  }, t.prototype.ceil = function(e) {
    H(e, "ceil");
    for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) o[a] = Math.ceil(n[a]);
    return this.makeOutput(o, e.shape, "float32");
  }, t.prototype.floor = function(e) {
    H(e, "floor");
    for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) o[a] = Math.floor(n[a]);
    return this.makeOutput(o, e.shape, "float32");
  }, t.prototype.sign = function(e) {
    H(e, "x");
    for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) n[a] < 0 ? o[a] = -1 : n[a] > 0 ? o[a] = 1 : o[a] = 0;
    return this.makeOutput(o, e.shape, "float32");
  }, t.prototype.isNaN = function(e) {
    H(e, "x");
    for (var n = this.readSync(e.dataId), o = new Uint8Array(n.length), a = 0; a < n.length; ++a) Number.isNaN(n[a]) && (o[a] = 1);
    return this.makeOutput(o, e.shape, "bool");
  }, t.prototype.isInf = function(e) {
    H(e, "x");
    for (var n = this.readSync(e.dataId), o = new Uint8Array(n.length), a = 0; a < n.length; ++a) Math.abs(n[a]) === 1 / 0 && (o[a] = 1);
    return this.makeOutput(o, e.shape, "bool");
  }, t.prototype.isFinite = function(e) {
    H(e, "x");
    for (var n = this.readSync(e.dataId), o = new Uint8Array(n.length), a = 0; a < n.length; ++a) Number.isFinite(n[a]) && (o[a] = 1);
    return this.makeOutput(o, e.shape, "bool");
  }, t.prototype.round = function(e) {
    H(e, "round");
    for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) {
      var i = Math.floor(n[a]);
      n[a] - i < 0.5 ? o[a] = Math.floor(n[a]) : n[a] - i > 0.5 ? o[a] = Math.ceil(n[a]) : o[a] = i % 2 == 0 ? i : i + 1;
    }
    return this.makeOutput(o, e.shape, "float32");
  }, t.prototype.exp = function(e) {
    H(e, "exp");
    for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) o[a] = Math.exp(n[a]);
    return this.makeOutput(o, e.shape, "float32");
  }, t.prototype.expm1 = function(e) {
    H(e, "expm1");
    for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) o[a] = Math.expm1(n[a]);
    return this.makeOutput(o, e.shape, "float32");
  }, t.prototype.log = function(e) {
    H(e, "log");
    for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) {
      var i = n[a];
      o[a] = Math.log(i);
    }
    return this.makeOutput(o, e.shape, "float32");
  }, t.prototype.log1p = function(e) {
    H(e, "log1p");
    for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) {
      var i = n[a];
      o[a] = Math.log1p(i);
    }
    return this.makeOutput(o, e.shape, "float32");
  }, t.prototype.sqrt = function(e) {
    H(e, "sqrt");
    for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) {
      var i = n[a];
      o[a] = Math.sqrt(i);
    }
    return this.makeOutput(o, e.shape, "float32");
  }, t.prototype.rsqrt = function(e) {
    H(e, "rsqrt");
    for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) {
      var i = n[a];
      o[a] = 1 / Math.sqrt(i);
    }
    return this.makeOutput(o, e.shape, "float32");
  }, t.prototype.reciprocal = function(e) {
    H(e, "reciprocal");
    for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) o[a] = 1 / n[a];
    return this.makeOutput(o, e.shape, "float32");
  }, t.prototype.linear = function(e) {
    return e;
  }, t.prototype.relu = function(e) {
    H(e, "relu");
    for (var n = Ee(e.shape, e.dtype), o = this.readSync(n.dataId), a = this.readSync(e.dataId), i = 0; i < a.length; ++i) o[i] = Math.max(0, a[i]);
    return n;
  }, t.prototype.relu6 = function(e) {
    H(e, "relu");
    for (var n = Ee(e.shape, e.dtype), o = this.readSync(n.dataId), a = this.readSync(e.dataId), i = 0; i < a.length; ++i) o[i] = Math.min(Math.max(0, a[i]), 6);
    return n;
  }, t.prototype.prelu = function(e, n) {
    return H([e, n], "prelu"), this.broadcastedBinaryOp(e, n, e.dtype, function(o, a) {
      return o < 0 ? a * o : o;
    });
  }, t.prototype.elu = function(e) {
    H(e, "elu");
    for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) {
      var i = o[a];
      n[a] = i >= 0 ? i : Math.exp(i) - 1;
    }
    return this.makeOutput(n, e.shape, "float32");
  }, t.prototype.eluDer = function(e, n) {
    H([e, n], "eluDer");
    for (var o = new Float32Array(n.size), a = this.readSync(n.dataId), i = this.readSync(e.dataId), s = 0; s < a.length; ++s) {
      var u = a[s];
      o[s] = u >= 1 ? i[s] : i[s] * (u + 1);
    }
    return this.makeOutput(o, n.shape, "float32");
  }, t.prototype.selu = function(e) {
    H(e, "selu");
    for (var n = vi, o = mi, a = new Float32Array(e.size), i = this.readSync(e.dataId), s = 0; s < i.length; ++s) {
      var u = i[s];
      a[s] = u >= 0 ? o * u : n * (Math.exp(u) - 1);
    }
    return this.makeOutput(a, e.shape, "float32");
  }, t.prototype.clip = function(e, n, o) {
    H(e, "clip");
    for (var a = new Float32Array(e.size), i = this.readSync(e.dataId), s = 0; s < i.length; ++s) {
      var u = i[s];
      a[s] = u > o ? o : u < n ? n : u;
    }
    return this.makeOutput(a, e.shape, "float32");
  }, t.prototype.abs = function(e) {
    for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.abs(o[a]);
    return this.makeOutput(n, e.shape, "float32");
  }, t.prototype.complexAbs = function(e) {
    for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < e.size; ++a) {
      var i = o[2 * a], s = o[2 * a + 1];
      n[a] = Math.hypot(i, s);
    }
    return this.makeOutput(n, e.shape, "float32");
  }, t.prototype.int = function(e) {
    H(e, "int");
    for (var n = new Int32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = o[a];
    return this.makeOutput(n, e.shape, "int32");
  }, t.prototype.sigmoid = function(e) {
    H(e, "sigmoid");
    for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = 1 / (1 + Math.exp(-o[a]));
    return this.makeOutput(n, e.shape, "float32");
  }, t.prototype.softplus = function(e) {
    H(e, "softplus");
    for (var n = Math.log(11920928955078125e-23) + 2, o = new Float32Array(e.size), a = this.readSync(e.dataId), i = 0; i < a.length; ++i) {
      var s = a[i] > -n, u = a[i] < n, c = Math.exp(a[i]), l = void 0;
      l = u ? c : s ? a[i] : Math.log(1 + c), o[i] = l;
    }
    return this.makeOutput(o, e.shape, "float32");
  }, t.prototype.sin = function(e) {
    H(e, "sin");
    for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.sin(o[a]);
    return this.makeOutput(n, e.shape, "float32");
  }, t.prototype.cos = function(e) {
    H(e, "cos");
    for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.cos(o[a]);
    return this.makeOutput(n, e.shape, "float32");
  }, t.prototype.tan = function(e) {
    H(e, "tan");
    for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.tan(o[a]);
    return this.makeOutput(n, e.shape, "float32");
  }, t.prototype.asin = function(e) {
    H(e, "asin");
    for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.asin(o[a]);
    return this.makeOutput(n, e.shape, "float32");
  }, t.prototype.acos = function(e) {
    H(e, "acos");
    for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.acos(o[a]);
    return this.makeOutput(n, e.shape, "float32");
  }, t.prototype.atan = function(e) {
    H(e, "atan");
    for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.atan(o[a]);
    return this.makeOutput(n, e.shape, "float32");
  }, t.prototype.atan2 = function(e, n) {
    return H([e, n], "atan2"), this.broadcastedBinaryOp(e, n, e.dtype, function(o, a) {
      return Math.atan2(o, a);
    });
  }, t.prototype.sinh = function(e) {
    H(e, "sinh");
    for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.sinh(o[a]);
    return this.makeOutput(n, e.shape, "float32");
  }, t.prototype.cosh = function(e) {
    H(e, "cosh");
    for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.cosh(o[a]);
    return this.makeOutput(n, e.shape, "float32");
  }, t.prototype.tanh = function(e) {
    H(e, "tanh");
    for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Rf(o[a]);
    return this.makeOutput(n, e.shape, "float32");
  }, t.prototype.asinh = function(e) {
    H(e, "asinh");
    for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.asinh(o[a]);
    return this.makeOutput(n, e.shape, "float32");
  }, t.prototype.acosh = function(e) {
    H(e, "acosh");
    for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.acosh(o[a]);
    return this.makeOutput(n, e.shape, "float32");
  }, t.prototype.atanh = function(e) {
    H(e, "atanh");
    for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.atanh(o[a]);
    return this.makeOutput(n, e.shape, "float32");
  }, t.prototype.erf = function(e) {
    H(e, "erf");
    for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) {
      var i = Math.sign(o[a]), s = Math.abs(o[a]), u = 1 / (1 + 0.3275911 * s);
      n[a] = i * (1 - ((((1.061405429 * u - 1.453152027) * u + 1.421413741) * u - 0.284496736) * u + 0.254829592) * u * Math.exp(-s * s));
    }
    return this.makeOutput(n, e.shape, "float32");
  }, t.prototype.step = function(e, n) {
    n === void 0 && (n = 0), H(e, "step");
    for (var o = new Float32Array(e.size), a = this.readSync(e.dataId), i = 0; i < a.length; ++i) {
      var s = a[i];
      isNaN(s) ? o[i] = NaN : o[i] = s > 0 ? 1 : n;
    }
    return this.makeOutput(o, e.shape, "float32");
  }, t.prototype.fusedConv2d = function(e) {
    var n = e.input, o = e.filter, a = e.convInfo, i = e.bias, s = e.activation, u = e.preluActivationWeights, c = this.conv2d(n, o, a);
    return i && (c = this.add(c, i)), s && (c = va(this, c, s, u)), c;
  }, t.prototype.conv2d = function(e, n, o) {
    H([e, n], "conv2d");
    for (var a = o.filterHeight, i = o.filterWidth, s = o.dilationHeight, u = o.dilationWidth, c = o.padInfo.left, l = o.padInfo.top, f = o.dataFormat === "channelsLast", h = ae(o.outShape, e.dtype), p = e.strides[0], d = f ? e.strides[1] : e.strides[2], m = f ? e.strides[2] : 1, v = f ? 1 : e.strides[1], g = h.strides[0], y = f ? h.strides[1] : h.strides[2], x = f ? h.strides[2] : 1, b = f ? 1 : h.strides[1], w = this.readSync(e.dataId), C = this.readSync(n.dataId), k = h.values, I = 0; I < o.batchSize; ++I) for (var R = I * p, S = I * g, N = 0; N < o.outHeight; ++N) for (var D = S + N * y, W = N * o.strideHeight - l, B = 0; B < a; B++) {
      var L = W + B * s;
      if (!(L < 0 || L >= o.inHeight)) for (var V = B * n.strides[0], z = R + L * d, U = 0; U < o.outWidth; ++U) for (var G = D + U * x, q = U * o.strideWidth - c, K = 0; K < i; K++) {
        var te = q + K * u;
        if (!(te < 0 || te >= o.inWidth)) for (var ne = z + te * m, ue = V + K * n.strides[1], ce = 0; ce < o.inChannels; ++ce) {
          for (var fe = w[ne + ce * v], ve = 0; ve < o.outChannels; ++ve) k[G + ve * b] += fe * C[ue + ve];
          ue += o.outChannels;
        }
      }
    }
    return h.toTensor();
  }, t.prototype.conv3d = function(e, n, o) {
    for (var a = o.filterDepth, i = o.filterHeight, s = o.filterWidth, u = o.dilationDepth, c = o.dilationHeight, l = o.dilationWidth, f = o.padInfo.front, h = o.padInfo.left, p = o.padInfo.top, d = ae(o.outShape, e.dtype), m = this.readSync(e.dataId), v = this.readSync(n.dataId), g = d.values, y = 0; y < o.batchSize; ++y) for (var x = y * e.strides[0], b = y * d.strides[0], w = 0; w < o.outDepth; ++w) for (var C = b + w * d.strides[1], k = w * o.strideDepth - f, I = 0; I < a; I++) {
      var R = k + I * u;
      if (!(R < 0 || R >= o.inDepth)) for (var S = I * n.strides[0], N = x + R * e.strides[1], D = 0; D < o.outHeight; ++D) for (var W = C + D * d.strides[2], B = D * o.strideHeight - p, L = 0; L < i; L++) {
        var V = B + L * c;
        if (!(V < 0 || V >= o.inHeight)) for (var z = S + L * n.strides[1], U = N + V * e.strides[2], G = 0; G < o.outWidth; ++G) for (var q = W + G * o.outChannels, K = G * o.strideWidth - h, te = 0; te < s; te++) {
          var ne = K + te * l;
          if (!(ne < 0 || ne >= o.inWidth)) for (var ue = z + te * n.strides[2], ce = U + ne * o.inChannels, fe = ue, ve = 0; ve < o.inChannels; ++ve) {
            for (var pe = m[ce + ve], me = 0; me < o.outChannels; ++me) g[q + me] += pe * v[fe + me];
            fe += o.outChannels;
          }
        }
      }
    }
    return d.toTensor();
  }, t.prototype.conv2dDerInput = function(e, n, o) {
    H([e, n], "conv2dDerInput");
    for (var a = ae(o.inShape, "float32"), i = a.values, s = this.readSync(e.dataId), u = this.readSync(n.dataId), c = n.strides, l = c[0], f = c[1], h = c[2], p = o.batchSize, d = o.filterHeight, m = o.filterWidth, v = o.inChannels, g = o.inHeight, y = o.inWidth, x = o.outChannels, b = o.outHeight, w = o.outWidth, C = o.strideHeight, k = o.strideWidth, I = o.dataFormat, R = d - 1 - o.padInfo.top, S = m - 1 - o.padInfo.left, N = I === "channelsLast", D = a.strides[0], W = N ? a.strides[1] : a.strides[2], B = N ? a.strides[2] : 1, L = N ? 1 : a.strides[1], V = e.strides[0], z = N ? e.strides[1] : e.strides[2], U = N ? e.strides[2] : 1, G = N ? 1 : e.strides[1], q = 0; q < p; ++q) for (var K = 0; K < v; ++K) for (var te = 0; te < g; ++te) for (var ne = te - R, ue = Math.max(0, Math.ceil(ne / C)), ce = Math.min(b, (d + ne) / C), fe = 0; fe < y; ++fe) {
      for (var ve = fe - S, pe = Math.max(0, Math.ceil(ve / k)), me = Math.min(w, (m + ve) / k), Te = 0, de = ue; de < ce; ++de) for (var we = de * C - ne, ye = pe; ye < me; ++ye) for (var Ae = V * q + z * de + U * ye, _e = l * (d - 1 - we) + f * (m - 1 - (ye * k - ve)) + h * K, Re = 0; Re < x; ++Re)
        Te += s[Ae + G * Re] * u[_e + Re];
      i[D * q + W * te + B * fe + L * K] = Te;
    }
    return a.toTensor();
  }, t.prototype.conv3dDerInput = function(e, n, o) {
    for (var a = ae(o.inShape, "float32"), i = a.values, s = a.strides, u = s[0], c = s[1], l = s[2], f = s[3], h = this.readSync(e.dataId), p = e.strides, d = p[0], m = p[1], v = p[2], g = p[3], y = this.readSync(n.dataId), x = n.strides, b = x[0], w = x[1], C = x[2], k = x[3], I = o.batchSize, R = o.filterDepth, S = o.filterHeight, N = o.filterWidth, D = o.inChannels, W = o.inDepth, B = o.inHeight, L = o.inWidth, V = o.outChannels, z = o.outDepth, U = o.outHeight, G = o.outWidth, q = o.strideDepth, K = o.strideHeight, te = o.strideWidth, ne = R - 1 - o.padInfo.front, ue = S - 1 - o.padInfo.top, ce = N - 1 - o.padInfo.left, fe = 0; fe < I; ++fe) for (var ve = 0; ve < D; ++ve) for (var pe = 0; pe < W; ++pe) for (var me = pe - ne, Te = Math.max(0, Math.ceil(me / q)), de = Math.min(z, (R + me) / q), we = 0; we < B; ++we) for (var ye = we - ue, Ae = Math.max(0, Math.ceil(ye / K)), _e = Math.min(U, (S + ye) / K), Re = 0; Re < L; ++Re) {
      for (var Rt = Re - ce, St = Math.max(0, Math.ceil(Rt / te)), st = Math.min(G, (N + Rt) / te), Nn = 0, Ht = Te; Ht < de; ++Ht) for (var tn = Ht * q - me, Gt = Ae; Gt < _e; ++Gt) for (var Fn = Gt * K - ye, qt = St; qt < st; ++qt) for (var Ko = d * fe + m * Ht + v * Gt + g * qt, Pn = b * (R - 1 - tn) + w * (S - 1 - Fn) + C * (N - 1 - (qt * te - Rt)) + k * ve, It = 0; It < V; ++It)
        Nn += h[Ko + It] * y[Pn + It];
      i[u * fe + c * pe + l * we + f * Re + ve] = Nn;
    }
    return a.toTensor();
  }, t.prototype.conv2dDerFilter = function(e, n, o) {
    H([e, n], "conv2dDerFilter");
    for (var a = o.strideHeight, i = o.strideWidth, s = o.filterHeight, u = o.filterWidth, c = o.dataFormat === "channelsLast", l = ae(o.filterShape, "float32"), f = o.padInfo.left, h = o.padInfo.top, p = this.bufferSync(e), d = this.bufferSync(n), m = 0; m < s; ++m) for (var v = Math.max(0, Math.ceil((h - m) / a)), g = Math.min(o.outHeight, (o.inHeight + h - m) / a), y = 0; y < u; ++y) for (var x = Math.max(0, Math.ceil((f - y) / i)), b = Math.min(o.outWidth, (o.inWidth + f - y) / i), w = 0; w < o.inChannels; ++w) for (var C = 0; C < o.outChannels; ++C) {
      for (var k = 0, I = 0; I < o.batchSize; ++I) for (var R = v; R < g; ++R) for (var S = m + R * a - h, N = x; N < b; ++N) {
        var D = y + N * i - f;
        k += c ? p.get(I, S, D, w) * d.get(I, R, N, C) : p.get(I, w, S, D) * d.get(I, C, R, N);
      }
      l.set(k, m, y, w, C);
    }
    return l.toTensor();
  }, t.prototype.conv3dDerFilter = function(e, n, o) {
    for (var a = o.strideDepth, i = o.strideHeight, s = o.strideWidth, u = o.filterDepth, c = o.filterHeight, l = o.filterWidth, f = ae(o.filterShape, "float32"), h = f.values, p = f.strides, d = p[0], m = p[1], v = p[2], g = p[3], y = this.readSync(n.dataId), x = n.strides, b = x[0], w = x[1], C = x[2], k = x[3], I = this.readSync(e.dataId), R = e.strides, S = R[0], N = R[1], D = R[2], W = R[3], B = o.padInfo.front, L = o.padInfo.left, V = o.padInfo.top, z = 0; z < u; ++z) for (var U = Math.max(0, Math.ceil((B - z) / a)), G = Math.min(o.outDepth, (o.inDepth + B - z) / a), q = z * d, K = 0; K < c; ++K) for (var te = Math.max(0, Math.ceil((V - K) / i)), ne = Math.min(o.outHeight, (o.inHeight + V - K) / i), ue = K * m + q, ce = 0; ce < l; ++ce) for (var fe = Math.max(0, Math.ceil((L - ce) / s)), ve = Math.min(o.outWidth, (o.inWidth + L - ce) / s), pe = ce * v + ue, me = 0; me < o.inChannels; ++me) for (var Te = me * g + pe, de = 0; de < o.outChannels; ++de) {
      for (var we = 0, ye = 0; ye < o.batchSize; ++ye) for (var Ae = ye * S, _e = ye * b, Re = U; Re < G; ++Re) for (var Rt = (z + Re * a - B) * N + Ae, St = Re * w + _e, st = te; st < ne; ++st) for (var Nn = (K + st * i - V) * D + Rt, Ht = st * C + St, tn = fe; tn < ve; ++tn) {
        var Gt = tn * k + Ht;
        we += I[(ce + tn * s - L) * W + Nn + me] * y[Gt + de];
      }
      h[Te + de] = we;
    }
    return f.toTensor();
  }, t.prototype.fusedDepthwiseConv2D = function(e) {
    var n = e.input, o = e.filter, a = e.convInfo, i = e.bias, s = e.activation, u = e.preluActivationWeights, c = this.depthwiseConv2D(n, o, a);
    return i && (c = this.add(c, i)), s && (c = va(this, c, s, u)), c;
  }, t.prototype.depthwiseConv2D = function(e, n, o) {
    H([e, n], "depthwiseConv2D");
    for (var a = o.filterHeight, i = o.filterWidth, s = o.dilationHeight, u = o.dilationWidth, c = o.padInfo.left, l = o.padInfo.top, f = o.outChannels / o.inChannels, h = ae(o.outShape, e.dtype), p = this.readSync(e.dataId), d = this.readSync(n.dataId), m = h.values, v = 0; v < o.batchSize; ++v) for (var g = v * e.strides[0], y = v * h.strides[0], x = 0; x < o.outHeight; ++x) for (var b = y + x * h.strides[1], w = x * o.strideHeight - c, C = 0; C < a; ++C) {
      var k = w + C * s;
      if (!(k < 0 || k >= o.inHeight)) for (var I = C * n.strides[0], R = g + k * e.strides[1], S = 0; S < o.outWidth; ++S) for (var N = b + S * h.strides[2], D = S * o.strideWidth - l, W = 0; W < i; ++W) {
        var B = D + W * u;
        if (!(B < 0 || B >= o.inWidth)) for (var L = I + W * n.strides[1], V = R + B * o.inChannels, z = N, U = L, G = 0; G < o.inChannels; ++G) {
          for (var q = p[V + G], K = 0; K < f; ++K) m[z + K] += q * d[U + K];
          z += f, U += f;
        }
      }
    }
    return h.toTensor();
  }, t.prototype.depthwiseConv2DDerInput = function(e, n, o) {
    H([e, n], "depthwiseConv2DDerInput");
    for (var a = ae(o.inShape, "float32"), i = a.values, s = a.strides, u = s[0], c = s[1], l = s[2], f = this.readSync(e.dataId), h = e.strides, p = h[0], d = h[1], m = h[2], v = this.readSync(n.dataId), g = n.strides, y = g[0], x = g[1], b = g[2], w = o.batchSize, C = o.filterHeight, k = o.filterWidth, I = o.inChannels, R = o.inHeight, S = o.inWidth, N = o.outChannels, D = o.outHeight, W = o.outWidth, B = o.strideHeight, L = o.strideWidth, V = C - 1 - o.padInfo.top, z = k - 1 - o.padInfo.left, U = N / I, G = 0; G < w; ++G) for (var q = 0; q < I; ++q) for (var K = 0; K < R; ++K) for (var te = K - V, ne = Math.max(0, Math.ceil(te / B)), ue = Math.min(D, (C + te) / B), ce = 0; ce < S; ++ce) {
      for (var fe = ce - z, ve = Math.max(0, Math.ceil(fe / L)), pe = Math.min(W, (k + fe) / L), me = 0, Te = ne; Te < ue; ++Te) for (var de = Te * B - te, we = ve; we < pe; ++we) for (var ye = p * G + d * Te + m * we, Ae = y * (C - 1 - de) + x * (k - 1 - (we * L - fe)) + b * q, _e = 0; _e < U; ++_e)
        me += f[ye + (q * U + _e)] * v[Ae + _e];
      i[u * G + c * K + l * ce + q] = me;
    }
    return a.toTensor();
  }, t.prototype.depthwiseConv2DDerFilter = function(e, n, o) {
    H([e, n], "depthwiseConv2DDerFilter");
    for (var a = o.strideHeight, i = o.strideWidth, s = o.filterHeight, u = o.filterWidth, c = ae(o.filterShape, "float32"), l = o.padInfo.left, f = o.padInfo.top, h = o.outChannels / o.inChannels, p = this.bufferSync(e), d = this.bufferSync(n), m = 0; m < s; ++m) for (var v = Math.max(0, Math.ceil((f - m) / a)), g = Math.min(o.outHeight, (o.inHeight + f - m) / a), y = 0; y < u; ++y) for (var x = Math.max(0, Math.ceil((l - y) / i)), b = Math.min(o.outWidth, (o.inWidth + l - y) / i), w = 0; w < o.outChannels; ++w) {
      for (var C = Math.trunc(w / h), k = w % h, I = 0, R = 0; R < o.batchSize; ++R) for (var S = v; S < g; ++S) for (var N = m + S * a - f, D = x; D < b; ++D) {
        var W = y + D * i - l;
        I += p.get(R, N, W, C) * d.get(R, S, D, w);
      }
      c.set(I, m, y, C, k);
    }
    return c.toTensor();
  }, t.prototype.tile = function(e, n) {
    return H(e, "tile"), sc(this.bufferSync(e), n);
  }, t.prototype.pad = function(e, n, o) {
    H(e, "pad");
    var a = n.map(function(h, p) {
      return h[0] + e.shape[p] + h[1];
    }), i = n.map(function(h) {
      return h[0];
    }), s = this.bufferSync(e), u = ae(a, e.dtype);
    o !== 0 && u.values.fill(o);
    for (var c = 0; c < e.size; c++) {
      var l = s.indexToLoc(c), f = l.map(function(h, p) {
        return h + i[p];
      });
      u.set.apply(u, [s.get.apply(s, l)].concat(f));
    }
    return u.toTensor();
  }, t.prototype.transpose = function(e, n) {
    H(e, "transpose");
    for (var o = new Array(e.rank), a = 0; a < o.length; a++) o[a] = e.shape[n[a]];
    var i = this.readSync(e.dataId), s = ae(o, e.dtype), u = this.bufferSync(e);
    for (a = 0; a < e.size; ++a) {
      for (var c = u.indexToLoc(a), l = new Array(c.length), f = 0; f < l.length; f++) l[f] = c[n[f]];
      var h = s.locToIndex(l);
      s.values[h] = i[a];
    }
    return s.toTensor();
  }, t.prototype.gather = function(e, n, o) {
    H([e, n], "gather");
    var a = e.shape.slice(), i = this.readSync(n.dataId);
    a[o] = i.length;
    for (var s = ae(a, e.dtype), u = this.bufferSync(e), c = 0; c < s.size; ++c) {
      var l = s.indexToLoc(c), f = l.slice();
      f[o] = i[l[o]];
      var h = u.locToIndex(f);
      s.values[c] = u.values[h];
    }
    return s.toTensor();
  }, t.prototype.batchToSpaceND = function(e, n, o) {
    H([e], "batchToSpaceND");
    var a = n.reduce(function(f, h) {
      return f * h;
    }), i = so(e.shape, n, a), s = uo(i.length, n.length), u = co(e.shape, n, a), c = Xu(o, n.length), l = $u(u, o, n.length);
    return e.reshape(i).transpose(s).reshape(u).slice(c, l);
  }, t.prototype.spaceToBatchND = function(e, n, o) {
    H([e], "spaceToBatchND");
    var a = n.reduce(function(h, p) {
      return h * p;
    }), i = [[0, 0]];
    i.push.apply(i, o);
    for (var s = 1 + n.length; s < e.shape.length; ++s) i.push([0, 0]);
    var u = e.pad(i), c = so(u.shape, n, a, !1), l = uo(c.length, n.length, !1), f = co(u.shape, n, a, !1);
    return u.reshape(c).transpose(l).reshape(f);
  }, t.prototype.pool = function(e, n, o) {
    H(e, "pool");
    for (var a = n.strideHeight, i = n.strideWidth, s = n.dilationHeight, u = n.dilationWidth, c = n.effectiveFilterHeight, l = n.effectiveFilterWidth, f = n.padInfo.top, h = n.padInfo.left, p = o === "max" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, d = this.readSync(e.dataId), m = ae(n.outShape, e.dtype), v = m.values, g = n.outShape[1] * n.outShape[2] * n.outShape[3], y = n.outShape[2] * n.outShape[3], x = n.outShape[3], b = 0; b < n.batchSize; ++b) for (var w = b * g, C = b * e.strides[0], k = 0; k < n.inChannels; ++k) for (var I = 0; I < n.outHeight; ++I) for (var R = I * a - f, S = Math.max(0, R), N = Math.min(n.inHeight, c + R), D = w + I * y, W = 0; W < n.outWidth; ++W) {
      for (var B = W * i - h, L = Math.max(0, B), V = Math.min(n.inWidth, l + B), z = p, U = 0, G = 0, q = S; q < N; q += s) {
        for (var K = C + q * e.strides[1], te = L; te < V; te += u) {
          var ne = d[K + te * e.strides[2] + k];
          o === "max" && ne > z ? z = ne : o === "avg" && (U += ne, G++);
        }
        if (isNaN(z)) break;
      }
      v[D + W * x + k] = o === "avg" ? U / G : z;
    }
    return m.toTensor();
  }, t.prototype.maxPool = function(e, n) {
    return this.pool(e, n, "max");
  }, t.prototype.maxPoolPositions = function(e, n) {
    for (var o = ae(n.outShape, "int32"), a = n.strideHeight, i = n.strideWidth, s = n.dilationHeight, u = n.dilationWidth, c = n.effectiveFilterHeight, l = n.effectiveFilterWidth, f = n.padInfo.top, h = n.padInfo.left, p = this.bufferSync(e), d = 0; d < n.batchSize; ++d) for (var m = 0; m < n.inChannels; ++m) for (var v = 0; v < n.outHeight; ++v) {
      for (var g = v * a - f, y = g; y < 0; ) y += s;
      for (var x = Math.min(n.inHeight, c + g), b = 0; b < n.outWidth; ++b) {
        for (var w = b * i - h, C = w; C < 0; ) C += u;
        for (var k = Math.min(n.inWidth, l + w), I = Number.NEGATIVE_INFINITY, R = -1, S = y; S < x; S += s) for (var N = S - g, D = C; D < k; D += u) {
          var W = D - w, B = p.get(d, S, D, m);
          B > I && (I = B, R = N * l + W);
        }
        o.set(R, d, v, b, m);
      }
    }
    return o.toTensor();
  }, t.prototype.maxPoolBackprop = function(e, n, o, a) {
    H([n, o], "maxPoolBackprop");
    for (var i = this.maxPoolPositions(n, a), s = a.strideHeight, u = a.strideWidth, c = a.dilationHeight, l = a.dilationWidth, f = a.effectiveFilterHeight, h = a.effectiveFilterWidth, p = h - 1 - a.padInfo.left, d = f - 1 - a.padInfo.top, m = ae(n.shape, "float32"), v = this.bufferSync(i), g = this.bufferSync(e), y = 0; y < a.batchSize; ++y) for (var x = 0; x < a.inChannels; ++x) for (var b = 0; b < a.inHeight; ++b) for (var w = 0; w < a.inWidth; ++w) {
      for (var C = b - d, k = w - p, I = 0, R = 0; R < f; R += c) {
        var S = (C + R) / s;
        if (!(S < 0 || S >= a.outHeight || Math.floor(S) !== S)) for (var N = 0; N < h; N += l) {
          var D = (k + N) / u;
          if (!(D < 0 || D >= a.outWidth || Math.floor(D) !== D)) {
            var W = f * h - 1 - v.get(y, S, D, x) === R * h + N ? 1 : 0;
            W !== 0 && (I += g.get(y, S, D, x) * W);
          }
        }
      }
      m.set(I, y, b, w, x);
    }
    return m.toTensor();
  }, t.prototype.avgPoolBackprop = function(e, n, o) {
    H([e, n], "avgPoolBackprop");
    for (var a = o.strideHeight, i = o.strideWidth, s = o.filterHeight, u = o.filterWidth, c = o.dilationHeight, l = o.dilationWidth, f = o.effectiveFilterHeight, h = o.effectiveFilterWidth, p = h - 1 - o.padInfo.left, d = f - 1 - o.padInfo.top, m = ae(n.shape, "float32"), v = 1 / (s * u), g = this.bufferSync(e), y = 0; y < o.batchSize; ++y) for (var x = 0; x < o.inChannels; ++x) for (var b = 0; b < o.inHeight; ++b) for (var w = 0; w < o.inWidth; ++w) {
      for (var C = b - d, k = w - p, I = 0, R = 0; R < f; R += c) {
        var S = (C + R) / a;
        if (!(S < 0 || S >= o.outHeight || Math.floor(S) !== S)) for (var N = 0; N < h; N += l) {
          var D = (k + N) / i;
          D < 0 || D >= o.outWidth || Math.floor(D) !== D || (I += g.get(y, S, D, x));
        }
      }
      m.set(I * v, y, b, w, x);
    }
    return m.toTensor();
  }, t.prototype.pool3d = function(e, n, o) {
    H(e, "pool3d");
    for (var a = n.strideDepth, i = n.strideHeight, s = n.strideWidth, u = n.dilationDepth, c = n.dilationHeight, l = n.dilationWidth, f = n.effectiveFilterDepth, h = n.effectiveFilterHeight, p = n.effectiveFilterWidth, d = n.padInfo.front, m = n.padInfo.top, v = n.padInfo.left, g = o === "max" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, y = this.readSync(e.dataId), x = ae(n.outShape, e.dtype), b = x.values, w = n.outShape[1] * n.outShape[2] * n.outShape[3] * n.outShape[4], C = n.outShape[2] * n.outShape[3] * n.outShape[4], k = n.outShape[3] * n.outShape[4], I = n.outShape[4], R = 0; R < n.batchSize; ++R) for (var S = R * w, N = R * e.strides[0], D = 0; D < n.inChannels; ++D) for (var W = 0; W < n.outDepth; ++W) {
      for (var B = W * a - d, L = B; L < 0; ) L += u;
      for (var V = Math.min(n.inDepth, f + B), z = S + W * C, U = 0; U < n.outHeight; ++U) {
        for (var G = U * i - m, q = G; q < 0; ) q += c;
        for (var K = Math.min(n.inHeight, h + G), te = z + U * k, ne = 0; ne < n.outWidth; ++ne) {
          for (var ue = ne * s - v, ce = ue; ce < 0; ) ce += l;
          for (var fe = Math.min(n.inWidth, p + ue), ve = te + ne * I, pe = g, me = 0, Te = 0, de = L; de < V; de += u) {
            for (var we = N + de * e.strides[1], ye = q; ye < K; ye += c) {
              for (var Ae = we + ye * e.strides[2], _e = ce; _e < fe; _e += l) {
                var Re = y[Ae + _e * e.strides[3] + D];
                if (o === "max" && Re > pe ? pe = Re : o === "avg" && (me += Re, Te++), isNaN(pe)) break;
              }
              if (isNaN(pe)) break;
            }
            if (isNaN(pe)) break;
          }
          b[ve + D] = o === "avg" ? me / Te : pe;
        }
      }
    }
    return x.toTensor();
  }, t.prototype.avgPool3d = function(e, n) {
    return H(e, "avgPool3d"), this.pool3d(e, n, "avg").toFloat();
  }, t.prototype.avgPool3dBackprop = function(e, n, o) {
    H([e, n], "avgPool3dBackprop");
    for (var a = o.strideDepth, i = o.strideHeight, s = o.strideWidth, u = o.filterDepth, c = o.filterHeight, l = o.filterWidth, f = o.dilationDepth, h = o.dilationHeight, p = o.dilationWidth, d = o.effectiveFilterDepth, m = o.effectiveFilterHeight, v = o.effectiveFilterWidth, g = d - 1 - o.padInfo.front, y = v - 1 - o.padInfo.left, x = m - 1 - o.padInfo.top, b = ae(n.shape, "float32"), w = 1 / (u * c * l), C = this.bufferSync(e), k = 0; k < o.batchSize; ++k) for (var I = 0; I < o.inChannels; ++I) for (var R = 0; R < o.inDepth; ++R) for (var S = 0; S < o.inHeight; ++S) for (var N = 0; N < o.inWidth; ++N) {
      for (var D = R - g, W = S - x, B = N - y, L = 0, V = 0; V < d; V += f) {
        var z = (D + V) / a;
        if (!(z < 0 || z >= o.outDepth || Math.floor(z) !== z)) for (var U = 0; U < m; U += h) {
          var G = (W + U) / i;
          if (!(G < 0 || G >= o.outHeight || Math.floor(G) !== G)) for (var q = 0; q < v; q += p) {
            var K = (B + q) / s;
            K < 0 || K >= o.outWidth || Math.floor(K) !== K || (L += C.get(k, z, G, K, I));
          }
        }
      }
      b.set(L * w, k, R, S, N, I);
    }
    return b.toTensor();
  }, t.prototype.maxPool3d = function(e, n) {
    return H(e, "maxPool3d"), this.pool3d(e, n, "max").toFloat();
  }, t.prototype.maxPool3dPositions = function(e, n) {
    for (var o = ae(n.outShape, "int32"), a = n.strideDepth, i = n.strideHeight, s = n.strideWidth, u = n.dilationDepth, c = n.dilationHeight, l = n.dilationWidth, f = n.effectiveFilterDepth, h = n.effectiveFilterHeight, p = n.effectiveFilterWidth, d = n.padInfo.front, m = n.padInfo.top, v = n.padInfo.left, g = this.bufferSync(e), y = 0; y < n.batchSize; ++y) for (var x = 0; x < n.inChannels; ++x) for (var b = 0; b < n.outDepth; ++b) {
      for (var w = b * a - d, C = w; C < 0; ) C += u;
      for (var k = Math.min(n.inDepth, f + w), I = 0; I < n.outHeight; ++I) {
        for (var R = I * i - m, S = R; S < 0; ) S += c;
        for (var N = Math.min(n.inHeight, h + R), D = 0; D < n.outWidth; ++D) {
          for (var W = D * s - v, B = W; B < 0; ) B += l;
          for (var L = Math.min(n.inWidth, p + W), V = Number.NEGATIVE_INFINITY, z = -1, U = C; U < k; U += u) for (var G = U - w, q = S; q < N; q += c) for (var K = q - R, te = B; te < L; te += l) {
            var ne = te - W, ue = g.get(y, U, q, te, x);
            ue >= V && (V = ue, z = G * h * p + K * h + ne);
          }
          o.set(z, y, b, I, D, x);
        }
      }
    }
    return o.toTensor();
  }, t.prototype.maxPool3dBackprop = function(e, n, o, a) {
    H([n, o], "maxPool3dBackprop");
    for (var i = this.maxPool3dPositions(n, a), s = a.strideDepth, u = a.strideHeight, c = a.strideWidth, l = a.dilationDepth, f = a.dilationHeight, h = a.dilationWidth, p = a.effectiveFilterDepth, d = a.effectiveFilterHeight, m = a.effectiveFilterWidth, v = p - 1 - a.padInfo.front, g = m - 1 - a.padInfo.left, y = d - 1 - a.padInfo.top, x = ae(n.shape, "float32"), b = this.bufferSync(i), w = this.bufferSync(e), C = 0; C < a.batchSize; ++C) for (var k = 0; k < a.inChannels; ++k) for (var I = 0; I < a.inDepth; ++I) for (var R = 0; R < a.inHeight; ++R) for (var S = 0; S < a.inWidth; ++S) {
      for (var N = I - v, D = R - y, W = S - g, B = 0, L = 0; L < p; L += l) {
        var V = (N + L) / s;
        if (!(V < 0 || V >= a.outDepth || Math.floor(V) !== V)) for (var z = 0; z < d; z += f) {
          var U = (D + z) / u;
          if (!(U < 0 || U >= a.outHeight || Math.floor(U) !== U)) for (var G = 0; G < m; G += h) {
            var q = (W + G) / c;
            if (!(q < 0 || q >= a.outWidth || Math.floor(q) !== q)) {
              var K = p * d * m - 1 - b.get(C, V, U, q, k) === L * d * m + z * m + G ? 1 : 0;
              K !== 0 && (B += w.get(C, V, U, q, k) * K);
            }
          }
        }
      }
      x.set(B, C, I, R, S, k);
    }
    return x.toTensor();
  }, t.prototype.cast = function(e, n) {
    return rc(e, n, this);
  }, t.prototype.reshape = function(e, n) {
    return Ua(e, n);
  }, t.prototype.avgPool = function(e, n) {
    return H(e, "avgPool"), this.pool(e, n, "avg").toFloat();
  }, t.prototype.resizeBilinear = function(e, n, o, a) {
    H(e, "resizeBilinear");
    for (var i = e.shape, s = i[0], u = i[1], c = i[2], l = i[3], f = this.readSync(e.dataId), h = new Float32Array(J([s, n, o, l])), p = [a && n > 1 ? u - 1 : u, a && o > 1 ? c - 1 : c], d = [a && n > 1 ? n - 1 : n, a && o > 1 ? o - 1 : o], m = 0, v = p[0] / d[0], g = p[1] / d[1], y = 0; y < s; y++) for (var x = 0; x < n; x++) for (var b = v * x, w = Math.floor(b), C = b - w, k = Math.min(u - 1, Math.ceil(b)), I = y * e.strides[0] + w * e.strides[1], R = y * e.strides[0] + k * e.strides[1], S = 0; S < o; S++) for (var N = g * S, D = Math.floor(N), W = N - D, B = Math.min(c - 1, Math.ceil(N)), L = I + D * e.strides[2], V = R + D * e.strides[2], z = I + B * e.strides[2], U = R + B * e.strides[2], G = 0; G < l; G++) {
      var q = f[L + G], K = f[V + G], te = q + (f[z + G] - q) * W, ne = te + (K + (f[U + G] - K) * W - te) * C;
      h[m++] = ne;
    }
    return je(h, [s, n, o, l]);
  }, t.prototype.resizeBilinearBackprop = function(e, n, o) {
    H([e, n], "resizeBilinearBackprop");
    for (var a = n.shape, i = a[0], s = a[1], u = a[2], c = a[3], l = e.shape, f = l[1], h = l[2], p = new Float32Array(i * s * u * c), d = [o && f > 1 ? s - 1 : s, o && h > 1 ? u - 1 : u], m = [o && f > 1 ? f - 1 : f, o && h > 1 ? h - 1 : h], v = d[0] / m[0], g = d[1] / m[1], y = this.readSync(e.dataId), x = 0, b = 0; b < i; b++) for (var w = b * n.strides[0], C = 0; C < f; C++) for (var k = C * v, I = Math.floor(k), R = Math.min(Math.ceil(k), s - 1), S = w + I * n.strides[1], N = w + R * n.strides[1], D = k - I, W = 1 - D, B = 0; B < h; B++) for (var L = B * g, V = Math.floor(L), z = Math.min(Math.ceil(L), u - 1), U = L - V, G = 1 - U, q = S + V * n.strides[2], K = S + z * n.strides[2], te = N + V * n.strides[2], ne = N + z * n.strides[2], ue = W * G, ce = W * U, fe = D * G, ve = D * U, pe = 0; pe < c; pe++) {
      var me = y[x++];
      p[q + pe] += me * ue, p[K + pe] += me * ce, p[te + pe] += me * fe, p[ne + pe] += me * ve;
    }
    return et(p, [i, u, s, c], n.dtype);
  }, t.prototype.resizeNearestNeighbor = function(e, n, o, a) {
    H(e, "resizeNearestNeighbor");
    for (var i = e.shape, s = i[0], u = i[1], c = i[2], l = i[3], f = this.readSync(e.dataId), h = new Float32Array(s * n * o * l), p = [a && n > 1 ? u - 1 : u, a && o > 1 ? c - 1 : c], d = [a && n > 1 ? n - 1 : n, a && o > 1 ? o - 1 : o], m = p[0] / d[0], v = p[1] / d[1], g = 0, y = 0; y < s; y++) for (var x = y * e.strides[0], b = 0; b < n; b++) for (var w = m * b, C = x + Math.min(u - 1, a ? Math.round(w) : Math.floor(w)) * e.strides[1], k = 0; k < o; k++) for (var I = v * k, R = C + Math.min(c - 1, a ? Math.round(I) : Math.floor(I)) * e.strides[2], S = 0; S < l; S++) {
      var N = f[R + S];
      h[g++] = N;
    }
    return je(h, [s, n, o, l], e.dtype);
  }, t.prototype.resizeNearestNeighborBackprop = function(e, n, o) {
    H([e, n], "resizeNearestNeighborBackprop");
    for (var a = n.shape, i = a[0], s = a[1], u = a[2], c = a[3], l = e.shape, f = l[1], h = l[2], p = new Float32Array(i * s * u * c), d = this.readSync(e.dataId), m = [o && f > 1 ? s - 1 : s, o && h > 1 ? u - 1 : u], v = [o && f > 1 ? f - 1 : f, o && h > 1 ? h - 1 : h], g = m[0] / v[0], y = m[1] / v[1], x = 1 / g, b = 1 / y, w = 2 * Math.ceil(x) + 2, C = 2 * Math.ceil(b) + 2, k = 0; k < i; k++) for (var I = k * n.strides[0], R = 0; R < s; R++) for (var S = I + R * n.strides[1], N = Math.floor(R * x), D = Math.floor(N - w / 2), W = 0; W < u; W++) for (var B = S + W * n.strides[2], L = Math.floor(W * b), V = Math.floor(L - C / 2), z = 0; z < c; z++) {
      for (var U = 0, G = 0; G < w; G++) {
        var q = G + D;
        if (!(q < 0 || q >= f)) {
          var K = I + q * e.strides[1], te = q * g;
          if (R === Math.min(s - 1, o ? Math.round(te) : Math.floor(te))) for (var ne = 0; ne < C; ne++) {
            var ue = ne + V;
            if (!(ue < 0 || ue >= h)) {
              var ce = K + ue * e.strides[2], fe = ue * y;
              W === Math.min(u - 1, o ? Math.round(fe) : Math.floor(fe)) && (U += d[ce + z]);
            }
          }
        }
      }
      p[B + z] = U;
    }
    return et(p, n.shape, n.dtype);
  }, t.prototype.batchNormalization = function(e, n, o, a, i, s) {
    H([e, n, o, i, s], "batchNorm");
    for (var u = this.readSync(e.dataId), c = this.readSync(n.dataId), l = this.readSync(o.dataId), f = i ? this.readSync(i.dataId) : new Float32Array([1]), h = s ? this.readSync(s.dataId) : new Float32Array([0]), p = new Float32Array(u.length), d = h.length, m = f.length, v = l.length, g = c.length, y = 0, x = 0, b = 0, w = 0, C = 0; C < u.length; ++C) p[C] = h[y++] + (u[C] - c[x++]) * f[b++] / Math.sqrt(l[w++] + a), y >= d && (y = 0), x >= g && (x = 0), b >= m && (b = 0), w >= v && (w = 0);
    return et(p, e.shape);
  }, t.prototype.localResponseNormalization4D = function(e, n, o, a, i) {
    H(e, "localResponseNormalization4D");
    var s = e.shape[3], u = s - 1, c = this.readSync(e.dataId), l = e.size, f = new Float32Array(l);
    function h(v) {
      for (var g = v % s, y = v - g + Math.max(0, g - n), x = v - g + Math.min(g + n, u), b = 0; y <= x; y++) {
        var w = c[y];
        b += w * w;
      }
      return b;
    }
    for (var p = 0; p < l; p++) {
      var d = h(p), m = c[p] * Math.pow(o + a * d, -i);
      f[p] = m;
    }
    return et(f, e.shape);
  }, t.prototype.LRNGrad = function(e, n, o, a, i, s, u) {
    H(e, "LRNGrad");
    for (var c = e.shape[3], l = this.readSync(e.dataId), f = this.readSync(n.dataId), h = this.readSync(o.dataId), p = new Float32Array(e.size), d = e.size, m = 0; m < d; m++) {
      for (var v = m % c, g = m - v + Math.max(0, v - a), y = m - v + Math.min(c, v + a + 1), x = 0, b = g; b < y; b++) x += Math.pow(f[b], 2);
      for (x = s * x + i, b = g; b < y; b++) {
        var w = -2 * s * u * f[b] * h[m] / x;
        m === b && (w += Math.pow(x, -u)), w *= l[m], p[b] += w;
      }
    }
    return et(p, e.shape);
  }, t.prototype.multinomial = function(e, n, o, a) {
    H(e, "multinomial");
    for (var i = n ? e : Yt(e), s = i.shape[0], u = i.shape[1], c = Ee([s, o], "int32"), l = this.readSync(c.dataId), f = this.readSync(i.dataId), h = 0; h < s; ++h) {
      var p = h * u, d = new Float32Array(u - 1);
      d[0] = f[p];
      for (var m = 1; m < d.length; ++m) d[m] = d[m - 1] + f[p + m];
      for (var v = So(a.toString()), g = h * o, y = 0; y < o; ++y) {
        var x = v();
        l[g + y] = d.length;
        for (var b = 0; b < d.length; b++) if (x < d[b]) {
          l[g + y] = b;
          break;
        }
      }
    }
    return c;
  }, t.prototype.oneHot = function(e, n, o, a) {
    H(e, "oneHot");
    var i = new Float32Array(e.size * n);
    i.fill(a);
    for (var s = this.readSync(e.dataId), u = 0; u < e.size; ++u) s[u] >= 0 && s[u] < n && (i[u * n + s[u]] = o);
    return sn(i, [e.size, n], "int32");
  }, t.prototype.nonMaxSuppression = function(e, n, o, a, i) {
    return H(e, "nonMaxSuppression"), fi(this.readSync(e.dataId), this.readSync(n.dataId), o, a, i);
  }, t.prototype.fft = function(e) {
    return this.fftBatch(e, !1);
  }, t.prototype.ifft = function(e) {
    return this.fftBatch(e, !0);
  }, t.prototype.fftBatch = function(e, n) {
    for (var o = e.shape[0], a = e.shape[1], i = ae(e.shape, "float32"), s = ae(e.shape, "float32"), u = mt(e).as2D(o, a), c = Ft(e).as2D(o, a), l = 0; l < o; l++) for (var f = u.slice([l, 0], [1, a]), h = c.slice([l, 0], [1, a]), p = Ge(f, h), d = this.readSync(this.fftImpl(p, n).dataId), m = 0; m < a; m++) {
      var v = _s(d, m);
      i.values[l * a + m] = v.real, s.values[l * a + m] = v.imag;
    }
    return Ge(i.toTensor(), s.toTensor()).as2D(o, a);
  }, t.prototype.fftImpl = function(e, n) {
    var o = e.as1D(), a = o.size;
    if (this.isExponentOf2(a)) {
      var i = this.fftRadix2(o, a, n).as2D(e.shape[0], e.shape[1]);
      return n && (i = Ge(mt(i).div(j(a)), Ft(i).div(j(a)))), i;
    }
    var s = this.readSync(e.dataId), u = function(c) {
      for (var l = new Float32Array(c.length / 2), f = new Float32Array(c.length / 2), h = 0; h < c.length; h += 2) l[h / 2] = c[h], f[h / 2] = c[h + 1];
      return { real: l, imag: f };
    }(this.fourierTransformByMatmul(s, a, n));
    return Ge(u.real, u.imag).as2D(e.shape[0], e.shape[1]);
  }, t.prototype.isExponentOf2 = function(e) {
    return (e & e - 1) == 0;
  }, t.prototype.fftRadix2 = function(e, n, o) {
    if (n === 1) return e;
    var a = this.readSync(e.dataId), i = n / 2, s = function(g) {
      for (var y = Math.ceil(g.length / 4), x = new Float32Array(y), b = new Float32Array(y), w = 0; w < g.length; w += 4) x[Math.floor(w / 4)] = g[w], b[Math.floor(w / 4)] = g[w + 1];
      return { real: x, imag: b };
    }(a), u = Ge(s.real, s.imag).as1D(), c = function(g) {
      for (var y = Math.floor(g.length / 4), x = new Float32Array(y), b = new Float32Array(y), w = 2; w < g.length; w += 4) x[Math.floor(w / 4)] = g[w], b[Math.floor(w / 4)] = g[w + 1];
      return { real: x, imag: b };
    }(a), l = Ge(c.real, c.imag).as1D();
    u = this.fftRadix2(u, i, o), l = this.fftRadix2(l, i, o);
    var f = function(g, y) {
      for (var x = new Float32Array(g / 2), b = new Float32Array(g / 2), w = 0; w < Math.ceil(g / 2); w++) {
        var C = (y ? 2 : -2) * Math.PI * (w / g);
        x[w] = Math.cos(C), b[w] = Math.sin(C);
      }
      return { real: x, imag: b };
    }(n, o), h = Ge(f.real, f.imag).mul(l), p = u.add(h), d = u.sub(h), m = mt(p).concat(mt(d)), v = Ft(p).concat(Ft(d));
    return Ge(m, v).as1D();
  }, t.prototype.fourierTransformByMatmul = function(e, n, o) {
    for (var a = new Float32Array(2 * n), i = 0; i < n; i++) {
      for (var s = 0, u = 0, c = 0; c < n; c++) {
        var l = op(i * c, n, o), f = _s(e, c);
        s += f.real * l.real - f.imag * l.imag, u += f.real * l.imag + f.imag * l.real;
      }
      o && (s /= n, u /= n), rp(a, s, u, i);
    }
    return a;
  }, t.prototype.depthToSpace = function(e, n, o) {
    _(o === "NHWC", function() {
      return "Only NHWC dataFormat supported on CPU for depthToSpace. Got " + o;
    }), _(n > 1, function() {
      return "blockSize should be > 1 for depthToSpace, but was: " + n;
    });
    for (var a = e.shape[0], i = e.shape[1], s = e.shape[2], u = e.shape[3], c = i * n, l = s * n, f = u / (n * n), h = this.readSync(e.dataId), p = new Float32Array(a * c * l * f), d = 0, m = 0; m < a; ++m) for (var v = 0; v < c; ++v) for (var g = Math.floor(v / n), y = v % n, x = 0; x < l; ++x) for (var b = Math.floor(x / n), w = (y * n + x % n) * f, C = 0; C < f; ++C) {
      var k = C + w + u * (b + s * (g + i * m));
      p[d++] = h[k];
    }
    return et(p, [a, c, l, f]);
  }, t.prototype.broadcastedBinaryOp = function(e, n, o, a) {
    var i = he(e.shape, n.shape), s = ae(i, o), u = this.readSync(e.dataId), c = this.readSync(n.dataId), l = on(e.shape, i), f = on(n.shape, i), h = s.values;
    if (l.length + f.length === 0) for (var p = 0; p < h.length; ++p) h[p] = a(u[p % u.length], c[p % c.length]);
    else {
      var d = this.bufferSync(e), m = this.bufferSync(n), v = function(g) {
        var y = s.indexToLoc(g), x = y.slice(-e.rank);
        l.forEach(function(k) {
          return x[k] = 0;
        });
        var b = d.locToIndex(x), w = y.slice(-n.rank);
        f.forEach(function(k) {
          return w[k] = 0;
        });
        var C = m.locToIndex(w);
        h[g] = a(u[b], c[C]);
      };
      for (p = 0; p < h.length; ++p) v(p);
    }
    return s.toTensor();
  }, t.prototype.broadcastedBinaryComplexOp = function(e, n, o) {
    var a = he(e.shape, n.shape), i = ae(a, "float32"), s = ae(a, "float32"), u = this.readSync(e.dataId), c = this.readSync(n.dataId), l = on(e.shape, a), f = on(n.shape, a), h = i.values, p = s.values;
    if (l.length + f.length === 0) for (var d = 0; d < h.length; d++) {
      var m = d % u.length, v = d % c.length, g = o(u[2 * m], u[2 * m + 1], c[2 * v], c[2 * v + 1]);
      h[d] = g.real, p[d] = g.imag;
    }
    else {
      var y = this.bufferSync(this.data.get(e.dataId).complexTensors.real), x = this.bufferSync(this.data.get(n.dataId).complexTensors.real), b = function(w) {
        var C = i.indexToLoc(w), k = C.slice(-e.rank);
        l.forEach(function(D) {
          return k[D] = 0;
        });
        var I = y.locToIndex(k), R = C.slice(-n.rank);
        f.forEach(function(D) {
          return R[D] = 0;
        });
        var S = x.locToIndex(R), N = o(u[2 * I], u[2 * I + 1], c[2 * S], c[2 * S + 1]);
        h[w] = N.real, p[w] = N.imag;
      };
      for (d = 0; d < h.length; d++) b(d);
    }
    return this.complex(i.toTensor(), s.toTensor());
  }, t.prototype.split = function(e, n, o) {
    return ic(e, n, o);
  }, t.prototype.dispose = function() {
  }, t.prototype.floatPrecision = function() {
    return 32;
  }, t.prototype.epsilon = function() {
    return 1e-7;
  }, t.prototype.cropAndResize = function(e, n, o, a, i, s) {
    for (var u = e.shape, c = u[0], l = u[1], f = u[2], h = u[3], p = n.shape[0], d = a[0], m = a[1], v = ae([p, d, m, h], "float32"), g = this.readSync(n.dataId), y = this.readSync(o.dataId), x = this.readSync(e.dataId), b = e.strides, w = v.strides, C = 0; C < p; C++) {
      var k = 4 * C, I = g[k], R = g[k + 1], S = g[k + 2], N = g[k + 3], D = y[C];
      if (!(D >= c)) for (var W = d > 1 ? (S - I) * (l - 1) / (d - 1) : 0, B = m > 1 ? (N - R) * (f - 1) / (m - 1) : 0, L = 0; L < d; L++) {
        var V = d > 1 ? I * (l - 1) + L * W : 0.5 * (I + S) * (l - 1);
        if (V < 0 || V > l - 1) for (var z = 0; z < m; z++) for (var U = 0; U < h; U++) {
          var G = U + z * w[2] + L * w[1] + C * w[0];
          v.values[G] = s;
        }
        else if (i === "bilinear") {
          var q = Math.floor(V), K = Math.ceil(V), te = V - q;
          for (z = 0; z < m; z++)
            if ((de = m > 1 ? R * (f - 1) + z * B : 0.5 * (R + N) * (f - 1)) < 0 || de > f - 1) for (U = 0; U < h; U++)
              G = U + z * w[2] + L * w[1] + C * w[0], v.values[G] = s;
            else {
              var ne = Math.floor(de), ue = Math.ceil(de), ce = de - ne;
              for (U = 0; U < h; U++) {
                var fe = x[G = U + ne * b[2] + q * b[1] + D * b[0]], ve = x[G = U + ue * b[2] + q * b[1] + D * b[0]], pe = x[G = U + ne * b[2] + K * b[1] + D * b[0]], me = fe + (ve - fe) * ce, Te = pe + (x[G = U + ue * b[2] + K * b[1] + D * b[0]] - pe) * ce;
                G = U + z * w[2] + L * w[1] + C * w[0], v.values[G] = me + (Te - me) * te;
              }
            }
        } else for (z = 0; z < m; ++z) {
          var de;
          if ((de = m > 1 ? R * (f - 1) + z * B : 0.5 * (R + N) * (f - 1)) < 0 || de > f - 1) for (U = 0; U < h; U++)
            G = U + z * w[2] + L * w[1] + C * w[0], v.values[G] = s;
          else {
            var we = Math.round(de), ye = Math.round(V);
            for (U = 0; U < h; U++) {
              var Ae = U + we * b[2] + ye * b[1] + D * b[0], _e = U + z * w[2] + L * w[1] + C * w[0];
              v.values[_e] = x[Ae];
            }
          }
        }
      }
    }
    return v.toTensor();
  }, t.prototype.sparseToDense = function(e, n, o, a) {
    var i = lo(0, e, o), s = i.sliceRank, u = i.numUpdates, c = i.sliceSize, l = i.strides, f = i.outputSize;
    return this.scatter(e, n, o, f, c, u, s, l, a, !1);
  }, t.prototype.gatherND = function(e, n) {
    var o = n.shape, a = o[o.length - 1], i = Yu(e, n), s = i[0], u = i[1], c = i[2], l = i[3];
    if (u === 0) return je([], s, e.dtype);
    for (var f = new dr([u, c], e.dtype), h = this.readSync(n.dataId), p = this.readSync(e.dataId), d = 0; d < u; d++) {
      for (var m = [], v = 0, g = 0; g < a; g++) {
        var y = h[d * a + g];
        v += y * l[g], m.push(y);
      }
      if (v < 0 || v >= e.size / c) throw new Error("Invalid indices: " + m + " does not index into " + e.shape);
      for (var x = 0; x < c; x++) f.values[d * c + x] = p[v * c + x];
    }
    return f.toTensor().reshape(s);
  }, t.prototype.scatterND = function(e, n, o) {
    var a = lo(0, e, o), i = a.sliceRank, s = a.numUpdates, u = a.sliceSize, c = a.strides, l = a.outputSize, f = j(0);
    return this.scatter(e, n, o, l, u, s, i, c, f, !0);
  }, t.prototype.fill = function(e, n, o) {
    var a = eo(o = o || wr(n), J(e));
    return a.fill(n), T.makeTensor(a, e, o, this);
  }, t.prototype.onesLike = function(e) {
    if (e.dtype === "string") throw new Error("onesLike is not supported for string tensors");
    return this.fill(e.shape, 1, e.dtype);
  }, t.prototype.zerosLike = function(e) {
    var n = eo(e.dtype, J(e.shape));
    return this.makeOutput(n, e.shape, e.dtype);
  }, t.prototype.linspace = function(e, n, o) {
    return oc(e, n, o);
  }, t.prototype.scatter = function(e, n, o, a, i, s, u, c, l, f) {
    var h = [a / i, i], p = this.readSync(e.dataId), d = this.readSync(n.dataId);
    if (a === 0) return je([], o, n.dtype);
    var m = new dr(h, n.dtype);
    m.values.fill(this.readSync(l.dataId)[0]);
    for (var v = 0; v < s; v++) {
      for (var g = [], y = 0, x = 0; x < u; x++) {
        var b = p[v * u + x];
        g.push(b), y += b * c[x];
      }
      if (y < 0 || y >= a / i) throw new Error("Invalid indices: " + g + " does not index into " + o);
      for (var w = 0; w < i; w++) f ? m.values[y * i + w] += d[v * i + w] : m.values[y * i + w] = n.rank === 0 ? d[0] : d[v * i + w];
    }
    return m.toTensor().reshape(o);
  }, t;
}(tc);
T.registerBackend("cpu", function() {
  return new _g();
}, 1);
for (var ma = 0, js = [{ kernelName: "NonMaxSuppressionV5", backendName: "cpu", kernelFunc: function(r) {
  var t = r.inputs, e = r.backend, n = r.attrs, o = t, a = o.boxes, i = o.scores, s = n, u = s.maxOutputSize, c = s.iouThreshold, l = s.scoreThreshold, f = s.softNmsSigma, h = e;
  H(a, "NonMaxSuppressionWithScore");
  var p = hi(h.data.get(a.dataId).values, h.data.get(i.dataId).values, u, c, l, f);
  return [p.selectedIndices, p.selectedScores];
} }, { kernelName: "Square", backendName: "cpu", kernelFunc: function(r) {
  var t = r.inputs, e = r.backend, n = t.x, o = e;
  H(n, "square");
  for (var a = o.data.get(n.dataId).values, i = new Float32Array(a.length), s = 0; s < a.length; ++s) {
    var u = a[s];
    i[s] = u * u;
  }
  return { dataId: o.write(i, n.shape, n.dtype), shape: n.shape, dtype: n.dtype };
} }, { kernelName: gr, backendName: "cpu", kernelFunc: function(r) {
  var t = r.inputs, e = r.backend, n = t, o = n.a, a = n.b, i = e;
  H([o, a], gr);
  var s = i.data.get(o.dataId).values, u = i.data.get(a.dataId).values, c = function(h, p, d, m, v, g) {
    var y = he(h, p), x = y.length, b = Mt(y), w = pr(v, J(y)), C = h.length, k = p.length, I = Mt(h), R = Mt(p), S = on(h, y), N = on(p, y);
    if (S.length + N.length === 0) for (var D = 0; D < w.length; ++D) w[D] = g(d[D % d.length], m[D % m.length]);
    else {
      var W = function(B) {
        var L = Pf(B, x, b), V = L.slice(-C);
        S.forEach(function(q) {
          return V[q] = 0;
        });
        var z = vs(V, C, I), U = L.slice(-k);
        N.forEach(function(q) {
          return U[q] = 0;
        });
        var G = vs(U, k, R);
        w[B] = g(d[z], m[G]);
      };
      for (D = 0; D < w.length; ++D) W(D);
    }
    return [w, y];
  }(o.shape, a.shape, s, u, o.dtype, function(h, p) {
    var d = h - p;
    return d * d;
  }), l = c[0], f = c[1];
  return { dataId: i.write(l, f, o.dtype), shape: f, dtype: o.dtype };
} }]; ma < js.length; ma++)
  Au(js[ma]);
var Mn, Rg = function(r) {
  this.variableNames = ["A"];
  var t = $e(), e = r[0], n = r[1];
  this.outputShape = r, this.userCode = `
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(` + n + ".0, " + e + `.0);

        vec4 values = ` + t.texture2D + `(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `;
}, Sg = function(r) {
  this.variableNames = ["A"], this.packedInputs = !1, this.packedOutput = !0;
  var t = $e(), e = r[0], n = r[1];
  this.outputShape = r, this.userCode = `
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(` + n + ".0, " + e + `.0);
            vec4 values = ` + t.texture2D + `(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ` + t.output + ` = result;
      }
    `;
};
for (var ga = 0, Ks = [{ kernelName: "FromPixels", backendName: "webgl", kernelFunc: function(r) {
  var t = r.inputs, e = r.backend, n = r.attrs, o = t.pixels, a = n.numChannels, i = typeof HTMLVideoElement < "u" && o instanceof HTMLVideoElement, s = typeof HTMLImageElement < "u" && o instanceof HTMLImageElement, u = i ? [o.videoWidth, o.videoHeight] : [o.width, o.height], c = u[0], l = u[1], f = [l, c], h = [l, c, a];
  (s || i) && (Mn == null && (Mn = document.createElement("canvas").getContext("2d")), Mn.canvas.width = c, Mn.canvas.height = l, Mn.drawImage(o, 0, 0, c, l), o = Mn.canvas);
  var p = e.makeTensorInfo(f, "int32");
  e.texData.get(p.dataId).usage = lt.PIXELS, e.gpgpu.uploadPixelDataToTexture(e.getTexture(p.dataId), o);
  var d = M().getBool("WEBGL_PACK") ? new Sg(h) : new Rg(h), m = e.runWebGLProgram(d, [p], "int32");
  return e.disposeData(p.dataId), m;
} }, { kernelName: "NonMaxSuppressionV5", backendName: "webgl", kernelFunc: function(r) {
  var t = r.inputs, e = r.backend, n = r.attrs;
  oo("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");
  var o = t, a = o.boxes, i = o.scores, s = n, u = s.maxOutputSize, c = s.iouThreshold, l = s.scoreThreshold, f = s.softNmsSigma, h = e, p = hi(h.readSync(a.dataId), h.readSync(i.dataId), u, c, l, f);
  return [p.selectedIndices, p.selectedScores];
} }, { kernelName: "Square", backendName: "webgl", kernelFunc: function(r) {
  var t = r.inputs, e = r.backend, n = t.x, o = e, a = new se(n.shape, "return x * x;");
  return o.runWebGLProgram(a, [n], n.dtype);
} }, { kernelName: gr, backendName: "webgl", kernelFunc: function(r) {
  var t = r.inputs, e = r.backend, n = t, o = n.a, a = n.b, i = e, s = M().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new Kt("return (a - b) * (a - b);", o.shape, a.shape) : new De("return (a - b) * (a - b);", o.shape, a.shape);
  return i.compileAndRun(s, [o, a]);
} }]; ga < Ks.length; ga++)
  Au(Ks[ga]);
for (var ya = 0, Xs = [{ kernelName: "Square", gradFunc: function(r, t) {
  var e = t[0];
  return { x: function() {
    return r.mul(e.toFloat().mul(2));
  } };
} }, { kernelName: gr, gradFunc: function(r, t) {
  var e = t[0], n = t[1], o = j(2);
  return { a: function() {
    return Qe(r, Qe(o, We(e, n)));
  }, b: function() {
    return Qe(r, Qe(o, We(n, e)));
  } };
} }]; ya < Xs.length; ya++)
  Ef(Xs[ya]);
var Ig = function() {
  function r() {
  }
  return r.prototype.fetch = function(t, e) {
    return fetch(t, e);
  }, r.prototype.now = function() {
    return performance.now();
  }, r.prototype.encode = function(t, e) {
    if (e !== "utf-8" && e !== "utf8") throw new Error("Browser's encoder only supports utf-8, but got " + e);
    return this.textEncoder == null && (this.textEncoder = new TextEncoder()), this.textEncoder.encode(t);
  }, r.prototype.decode = function(t, e) {
    return new TextDecoder(e).decode(t);
  }, r;
}();
M().get("IS_BROWSER") && M().setPlatform("browser", new Ig());
var ba, kg = function() {
  return require("node-fetch");
}, Ag = function() {
  function r() {
    this.util = require("util"), this.textEncoder = new this.util.TextEncoder();
  }
  return r.prototype.fetch = function(t, e) {
    return M().global.fetch != null ? M().global.fetch(t, e) : (ba == null && (ba = kg()), ba(t, e));
  }, r.prototype.now = function() {
    var t = process.hrtime();
    return 1e3 * t[0] + t[1] / 1e6;
  }, r.prototype.encode = function(t, e) {
    if (e !== "utf-8" && e !== "utf8") throw new Error("Node built-in encoder only supports utf-8, but got " + e);
    return this.textEncoder.encode(t);
  }, r.prototype.decode = function(t, e) {
    return t.length === 0 ? "" : new this.util.TextDecoder(e).decode(t);
  }, r;
}();
M().get("IS_NODE") && M().setPlatform("node", new Ag());
var Ha = { float32: 4, int32: 4, uint16: 2, uint8: 1, bool: 1 }, yo = 4;
function Qc(r, t) {
  for (var e = {}, n = 0, o = function(s) {
    var u = s.name, c = s.dtype, l = s.shape, f = J(l), h = void 0;
    if ("quantization" in s) {
      var p = s.quantization;
      if (p.dtype !== "uint8" && p.dtype !== "uint16") throw new Error("Weight " + s.name + " has unknown quantization dtype " + p.dtype + ". Supported quantization dtypes are: 'uint8' and 'uint16'.");
      var d = Ha[p.dtype], m = r.slice(n, n + f * d), v = p.dtype === "uint8" ? new Uint8Array(m) : new Uint16Array(m);
      if (c === "float32") h = Float32Array.from(v, function(C) {
        return C * p.scale + p.min;
      });
      else {
        if (c !== "int32") throw new Error("Unsupported dtype in weight '" + u + "': " + c);
        h = Int32Array.from(v, function(C) {
          return Math.round(C * p.scale + p.min);
        });
      }
      n += f * d;
    } else if (c === "string") {
      var g = J(s.shape);
      h = [];
      for (var y = 0; y < g; y++) {
        var x = new Uint32Array(r.slice(n, n + yo))[0];
        n += yo;
        var b = new Uint8Array(r.slice(n, n + x));
        h.push(b), n += x;
      }
    } else {
      var w = Ha[c];
      if (m = r.slice(n, n + f * w), c === "float32") h = new Float32Array(m);
      else if (c === "int32") h = new Int32Array(m);
      else {
        if (c !== "bool") throw new Error("Unsupported dtype in weight '" + u + "': " + c);
        h = new Uint8Array(m);
      }
      n += f * w;
    }
    e[u] = je(h, l, c);
  }, a = 0, i = t; a < i.length; a++)
    o(i[a]);
  return e;
}
function Dg(r) {
  if (r === null) throw new Error("Invalid input value: " + JSON.stringify(r));
  var t = 0, e = [];
  r.forEach(function(a) {
    if (t += a.byteLength, e.push(a.byteLength === a.buffer.byteLength ? a : new a.constructor(a)), !(a instanceof Float32Array || a instanceof Int32Array || a instanceof Uint8Array)) throw new Error("Unsupported TypedArray subtype: " + a.constructor.name);
  });
  var n = new Uint8Array(t), o = 0;
  return e.forEach(function(a) {
    n.set(new Uint8Array(a.buffer), o), o += a.byteLength;
  }), n.buffer;
}
var Ga = typeof Buffer < "u" && (typeof Blob > "u" || typeof atob > "u" || typeof btoa > "u");
function $s(r) {
  return Ga ? Buffer.byteLength(r) : new Blob([r]).size;
}
function Ti(r) {
  var t = 0;
  r.forEach(function(o) {
    t += o.byteLength;
  });
  var e = new Uint8Array(t), n = 0;
  return r.forEach(function(o) {
    e.set(new Uint8Array(o), n), n += o.byteLength;
  }), e.buffer;
}
function Ys(r) {
  for (r = r.trim(); r.endsWith("/"); ) r = r.slice(0, r.length - 1);
  var t = r.split("/");
  return t[t.length - 1];
}
function kr(r) {
  if (r.modelTopology instanceof ArrayBuffer) throw new Error("Expected JSON model topology, received ArrayBuffer.");
  return { dateSaved: /* @__PURE__ */ new Date(), modelTopologyType: "JSON", modelTopologyBytes: r.modelTopology == null ? 0 : $s(JSON.stringify(r.modelTopology)), weightSpecsBytes: r.weightSpecs == null ? 0 : $s(JSON.stringify(r.weightSpecs)), weightDataBytes: r.weightData == null ? 0 : r.weightData.byteLength };
}
var ft = function() {
  function r() {
    this.saveRouters = [], this.loadRouters = [];
  }
  return r.getInstance = function() {
    return r.instance == null && (r.instance = new r()), r.instance;
  }, r.registerSaveRouter = function(t) {
    r.getInstance().saveRouters.push(t);
  }, r.registerLoadRouter = function(t) {
    r.getInstance().loadRouters.push(t);
  }, r.getSaveHandlers = function(t) {
    return r.getHandlers(t, "save");
  }, r.getLoadHandlers = function(t, e) {
    return r.getHandlers(t, "load", e);
  }, r.getHandlers = function(t, e, n) {
    var o = [];
    return (e === "load" ? r.getInstance().loadRouters : r.getInstance().saveRouters).forEach(function(a) {
      var i = a(t, n);
      i !== null && o.push(i);
    }), o;
  }, r;
}(), jn = "://", un = function() {
  function r() {
    this.managers = {};
  }
  return r.getInstance = function() {
    return r.instance == null && (r.instance = new r()), r.instance;
  }, r.registerManager = function(t, e) {
    _(t != null, function() {
      return "scheme must not be undefined or null.";
    }), t.endsWith(jn) && (t = t.slice(0, t.indexOf(jn))), _(t.length > 0, function() {
      return "scheme must not be an empty string.";
    });
    var n = r.getInstance();
    _(n.managers[t] == null, function() {
      return "A model store manager is already registered for scheme '" + t + "'.";
    }), n.managers[t] = e;
  }, r.getManager = function(t) {
    var e = this.getInstance().managers[t];
    if (e == null) throw new Error("Cannot find model manager for scheme '" + t + "'");
    return e;
  }, r.getSchemes = function() {
    return Object.keys(this.getInstance().managers);
  }, r;
}();
function $r(r) {
  if (r.indexOf(jn) === -1) throw new Error("The url string provided does not contain a scheme. Supported schemes are: " + un.getSchemes().join(","));
  return { scheme: r.split(jn)[0], path: r.split(jn)[1] };
}
function Js(r, t, e) {
  return e === void 0 && (e = !1), $(this, void 0, void 0, function() {
    var n, o, a, i, s, u, c, l, f;
    return Y(this, function(h) {
      switch (h.label) {
        case 0:
          return _(r !== t, function() {
            return "Old path and new path are the same: '" + r + "'";
          }), _((n = ft.getLoadHandlers(r)).length > 0, function() {
            return "Copying failed because no load handler is found for source URL " + r + ".";
          }), _(n.length < 2, function() {
            return "Copying failed because more than one (" + n.length + ") load handlers for source URL " + r + ".";
          }), o = n[0], _((a = ft.getSaveHandlers(t)).length > 0, function() {
            return "Copying failed because no save handler is found for destination URL " + t + ".";
          }), _(a.length < 2, function() {
            return "Copying failed because more than one (" + n.length + ") save handlers for destination URL " + t + ".";
          }), i = a[0], s = $r(r).scheme, u = $r(r).path, c = s === $r(r).scheme, [4, o.load()];
        case 1:
          return l = h.sent(), e && c ? [4, un.getManager(s).removeModel(u)] : [3, 3];
        case 2:
          h.sent(), h.label = 3;
        case 3:
          return [4, i.save(l)];
        case 4:
          return f = h.sent(), !e || c ? [3, 6] : [4, un.getManager(s).removeModel(u)];
        case 5:
          h.sent(), h.label = 6;
        case 6:
          return [2, f.modelArtifactsInfo];
      }
    });
  });
}
var xn = "models_store", an = "model_info_store";
function Zc() {
  if (!M().getBool("IS_BROWSER")) throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");
  var r = window || self, t = r.indexedDB || r.mozIndexedDB || r.webkitIndexedDB || r.msIndexedDB || r.shimIndexedDB;
  if (t == null) throw new Error("The current browser does not appear to support IndexedDB.");
  return t;
}
function qa(r) {
  var t = r.result;
  t.createObjectStore(xn, { keyPath: "modelPath" }), t.createObjectStore(an, { keyPath: "modelPath" });
}
var Kn = function() {
  function r(t) {
    if (this.indexedDB = Zc(), t == null || !t) throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");
    this.modelPath = t;
  }
  return r.prototype.save = function(t) {
    return $(this, void 0, void 0, function() {
      return Y(this, function(e) {
        if (t.modelTopology instanceof ArrayBuffer) throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
        return [2, this.databaseAction(this.modelPath, t)];
      });
    });
  }, r.prototype.load = function() {
    return $(this, void 0, void 0, function() {
      return Y(this, function(t) {
        return [2, this.databaseAction(this.modelPath)];
      });
    });
  }, r.prototype.databaseAction = function(t, e) {
    var n = this;
    return new Promise(function(o, a) {
      var i = n.indexedDB.open("tensorflowjs", 1);
      i.onupgradeneeded = function() {
        return qa(i);
      }, i.onsuccess = function() {
        var s = i.result;
        if (e == null) {
          var u = s.transaction(xn, "readonly"), c = u.objectStore(xn).get(n.modelPath);
          c.onsuccess = function() {
            if (c.result == null) return s.close(), a(new Error("Cannot find model with path '" + n.modelPath + "' in IndexedDB."));
            o(c.result.modelArtifacts);
          }, c.onerror = function(m) {
            return s.close(), a(c.error);
          }, u.oncomplete = function() {
            return s.close();
          };
        } else {
          var l, f = kr(e), h = s.transaction(an, "readwrite"), p = h.objectStore(an), d = p.put({ modelPath: n.modelPath, modelArtifactsInfo: f });
          d.onsuccess = function() {
            var m = (l = s.transaction(xn, "readwrite")).objectStore(xn).put({ modelPath: n.modelPath, modelArtifacts: e, modelArtifactsInfo: f });
            m.onsuccess = function() {
              return o({ modelArtifactsInfo: f });
            }, m.onerror = function(v) {
              var g = (p = h.objectStore(an)).delete(n.modelPath);
              g.onsuccess = function() {
                return s.close(), a(m.error);
              }, g.onerror = function(y) {
                return s.close(), a(m.error);
              };
            };
          }, d.onerror = function(m) {
            return s.close(), a(d.error);
          }, h.oncomplete = function() {
            l == null ? s.close() : l.oncomplete = function() {
              return s.close();
            };
          };
        }
      }, i.onerror = function(s) {
        return a(i.error);
      };
    });
  }, r.URL_SCHEME = "indexeddb://", r;
}(), Qs = function(r) {
  return M().getBool("IS_BROWSER") && !Array.isArray(r) && r.startsWith(Kn.URL_SCHEME) ? (t = r.slice(Kn.URL_SCHEME.length), new Kn(t)) : null;
  var t;
};
ft.registerSaveRouter(Qs), ft.registerLoadRouter(Qs);
var Tg = function() {
  function r() {
    this.indexedDB = Zc();
  }
  return r.prototype.listModels = function() {
    return $(this, void 0, void 0, function() {
      var t = this;
      return Y(this, function(e) {
        return [2, new Promise(function(n, o) {
          var a = t.indexedDB.open("tensorflowjs", 1);
          a.onupgradeneeded = function() {
            return qa(a);
          }, a.onsuccess = function() {
            var i = a.result, s = i.transaction(an, "readonly"), u = s.objectStore(an).getAll();
            u.onsuccess = function() {
              for (var c = {}, l = 0, f = u.result; l < f.length; l++) {
                var h = f[l];
                c[h.modelPath] = h.modelArtifactsInfo;
              }
              n(c);
            }, u.onerror = function(c) {
              return i.close(), o(u.error);
            }, s.oncomplete = function() {
              return i.close();
            };
          }, a.onerror = function(i) {
            return o(a.error);
          };
        })];
      });
    });
  }, r.prototype.removeModel = function(t) {
    return $(this, void 0, void 0, function() {
      var e = this;
      return Y(this, function(n) {
        var o;
        return t = (o = t).startsWith(Kn.URL_SCHEME) ? o.slice(Kn.URL_SCHEME.length) : o, [2, new Promise(function(a, i) {
          var s = e.indexedDB.open("tensorflowjs", 1);
          s.onupgradeneeded = function() {
            return qa(s);
          }, s.onsuccess = function() {
            var u, c = s.result, l = c.transaction(an, "readwrite"), f = l.objectStore(an), h = f.get(t);
            h.onsuccess = function() {
              if (h.result == null) return c.close(), i(new Error("Cannot find model with path '" + t + "' in IndexedDB."));
              var p = f.delete(t), d = function() {
                var m = (u = c.transaction(xn, "readwrite")).objectStore(xn).delete(t);
                m.onsuccess = function() {
                  return a(h.result.modelArtifactsInfo);
                }, m.onerror = function(v) {
                  return i(h.error);
                };
              };
              p.onsuccess = d, p.onerror = function(m) {
                return d(), c.close(), i(h.error);
              };
            }, h.onerror = function(p) {
              return c.close(), i(h.error);
            }, l.oncomplete = function() {
              u == null ? c.close() : u.oncomplete = function() {
                return c.close();
              };
            };
          }, s.onerror = function(u) {
            return i(s.error);
          };
        })];
      });
    });
  }, r;
}();
if (M().getBool("IS_BROWSER")) try {
  un.registerManager(Kn.URL_SCHEME, new Tg());
} catch {
}
var Xt = "/", Vn = "tensorflowjs_models", el = "info", Ng = "model_topology", Fg = "weight_specs", Pg = "weight_data", Og = "model_metadata";
function tl(r) {
  return { info: [Vn, r, el].join(Xt), topology: [Vn, r, Ng].join(Xt), weightSpecs: [Vn, r, Fg].join(Xt), weightData: [Vn, r, Pg].join(Xt), modelMetadata: [Vn, r, Og].join(Xt) };
}
function Mg(r) {
  var t = r.split(Xt);
  if (t.length < 3) throw new Error("Invalid key format: " + r);
  return t.slice(1, t.length - 1).join(Xt);
}
var Xn = function() {
  function r(t) {
    if (!M().getBool("IS_BROWSER") || typeof window > "u" || window.localStorage === void 0) throw new Error("The current environment does not support local storage.");
    if (this.LS = window.localStorage, t == null || !t) throw new Error("For local storage, modelPath must not be null, undefined or empty.");
    this.modelPath = t, this.keys = tl(this.modelPath);
  }
  return r.prototype.save = function(t) {
    return $(this, void 0, void 0, function() {
      var e, n, o;
      return Y(this, function(a) {
        if (t.modelTopology instanceof ArrayBuffer) throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
        e = JSON.stringify(t.modelTopology), n = JSON.stringify(t.weightSpecs), o = kr(t);
        try {
          return this.LS.setItem(this.keys.info, JSON.stringify(o)), this.LS.setItem(this.keys.topology, e), this.LS.setItem(this.keys.weightSpecs, n), this.LS.setItem(this.keys.weightData, function(i) {
            if (Ga) return Buffer.from(i).toString("base64");
            for (var s = new Uint8Array(i), u = "", c = 0, l = s.length; c < l; c++) u += String.fromCharCode(s[c]);
            return btoa(u);
          }(t.weightData)), this.LS.setItem(this.keys.modelMetadata, JSON.stringify({ format: t.format, generatedBy: t.generatedBy, convertedBy: t.convertedBy, userDefinedMetadata: t.userDefinedMetadata })), [2, { modelArtifactsInfo: o }];
        } catch {
          throw this.LS.removeItem(this.keys.info), this.LS.removeItem(this.keys.topology), this.LS.removeItem(this.keys.weightSpecs), this.LS.removeItem(this.keys.weightData), this.LS.removeItem(this.keys.modelMetadata), new Error("Failed to save model '" + this.modelPath + "' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=" + o.modelTopologyBytes + ", weightSpecsBytes=" + o.weightSpecsBytes + ", weightDataBytes=" + o.weightDataBytes + ".");
        }
        return [2];
      });
    });
  }, r.prototype.load = function() {
    return $(this, void 0, void 0, function() {
      var t, e, n, o, a, i, s;
      return Y(this, function(u) {
        if ((t = JSON.parse(this.LS.getItem(this.keys.info))) == null) throw new Error("In local storage, there is no model with name '" + this.modelPath + "'");
        if (t.modelTopologyType !== "JSON") throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");
        if (e = {}, (n = JSON.parse(this.LS.getItem(this.keys.topology))) == null) throw new Error("In local storage, the topology of model '" + this.modelPath + "' is missing.");
        if (e.modelTopology = n, (o = JSON.parse(this.LS.getItem(this.keys.weightSpecs))) == null) throw new Error("In local storage, the weight specs of model '" + this.modelPath + "' are missing.");
        if (e.weightSpecs = o, (a = this.LS.getItem(this.keys.modelMetadata)) != null && (i = JSON.parse(a), e.format = i.format, e.generatedBy = i.generatedBy, e.convertedBy = i.convertedBy, e.userDefinedMetadata = i.userDefinedMetadata), (s = this.LS.getItem(this.keys.weightData)) == null) throw new Error("In local storage, the binary weight values of model '" + this.modelPath + "' are missing.");
        return e.weightData = function(c) {
          if (Ga) {
            var l = Buffer.from(c, "base64");
            return l.buffer.slice(l.byteOffset, l.byteOffset + l.byteLength);
          }
          for (var f = atob(c), h = new Uint8Array(f.length), p = 0; p < f.length; ++p) h.set([f.charCodeAt(p)], p);
          return h.buffer;
        }(s), [2, e];
      });
    });
  }, r.URL_SCHEME = "localstorage://", r;
}(), Zs = function(r) {
  return M().getBool("IS_BROWSER") && !Array.isArray(r) && r.startsWith(Xn.URL_SCHEME) ? (t = r.slice(Xn.URL_SCHEME.length), new Xn(t)) : null;
  var t;
};
ft.registerSaveRouter(Zs), ft.registerLoadRouter(Zs);
var Bg = function() {
  function r() {
    _(M().getBool("IS_BROWSER"), function() {
      return "Current environment is not a web browser";
    }), _(typeof window > "u" || window.localStorage !== void 0, function() {
      return "Current browser does not appear to support localStorage";
    }), this.LS = window.localStorage;
  }
  return r.prototype.listModels = function() {
    return $(this, void 0, void 0, function() {
      var t, e, n, o, a, i;
      return Y(this, function(s) {
        for (t = {}, e = Vn + Xt, n = Xt + el, o = 0; o < this.LS.length; ++o) (a = this.LS.key(o)).startsWith(e) && a.endsWith(n) && (i = Mg(a), t[i] = JSON.parse(this.LS.getItem(a)));
        return [2, t];
      });
    });
  }, r.prototype.removeModel = function(t) {
    return $(this, void 0, void 0, function() {
      var e, n;
      return Y(this, function(o) {
        var a;
        if (t = (a = t).startsWith(Xn.URL_SCHEME) ? a.slice(Xn.URL_SCHEME.length) : a, e = tl(t), this.LS.getItem(e.info) == null) throw new Error("Cannot find model at path '" + t + "'");
        return n = JSON.parse(this.LS.getItem(e.info)), this.LS.removeItem(e.info), this.LS.removeItem(e.topology), this.LS.removeItem(e.weightSpecs), this.LS.removeItem(e.weightData), [2, n];
      });
    });
  }, r;
}();
if (M().getBool("IS_BROWSER")) try {
  un.registerManager(Xn.URL_SCHEME, new Bg());
} catch {
}
var Lg = "model", Wg = ".json", Ug = ".weights.bin";
function eu(r) {
  return new Promise(function(t) {
    return setTimeout(t);
  }).then(r);
}
var xa = function() {
  function r(t) {
    if (!M().getBool("IS_BROWSER")) throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");
    t.startsWith(r.URL_SCHEME) && (t = t.slice(r.URL_SCHEME.length)), t != null && t.length !== 0 || (t = Lg), this.modelTopologyFileName = t + Wg, this.weightDataFileName = t + Ug;
  }
  return r.prototype.save = function(t) {
    return $(this, void 0, void 0, function() {
      var e, n, o, a, i, s;
      return Y(this, function(u) {
        switch (u.label) {
          case 0:
            if (typeof document > "u") throw new Error("Browser downloads are not supported in this environment since `document` is not present");
            if (e = window.URL.createObjectURL(new Blob([t.weightData], { type: "application/octet-stream" })), !(t.modelTopology instanceof ArrayBuffer)) return [3, 1];
            throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");
          case 1:
            return n = [{ paths: ["./" + this.weightDataFileName], weights: t.weightSpecs }], o = { modelTopology: t.modelTopology, format: t.format, generatedBy: t.generatedBy, convertedBy: t.convertedBy, weightsManifest: n }, a = window.URL.createObjectURL(new Blob([JSON.stringify(o)], { type: "application/json" })), (i = this.jsonAnchor == null ? document.createElement("a") : this.jsonAnchor).download = this.modelTopologyFileName, i.href = a, [4, eu(function() {
              return i.dispatchEvent(new MouseEvent("click"));
            })];
          case 2:
            return u.sent(), t.weightData == null ? [3, 4] : ((s = this.weightDataAnchor == null ? document.createElement("a") : this.weightDataAnchor).download = this.weightDataFileName, s.href = e, [4, eu(function() {
              return s.dispatchEvent(new MouseEvent("click"));
            })]);
          case 3:
            u.sent(), u.label = 4;
          case 4:
            return [2, { modelArtifactsInfo: kr(t) }];
        }
      });
    });
  }, r.URL_SCHEME = "downloads://", r;
}(), zg = function() {
  function r(t) {
    if (t == null || t.length < 1) throw new Error("When calling browserFiles, at least 1 file is required, but received " + t);
    this.files = t;
  }
  return r.prototype.load = function() {
    return $(this, void 0, void 0, function() {
      var t, e, n = this;
      return Y(this, function(o) {
        return t = this.files[0], e = this.files.slice(1), [2, new Promise(function(a, i) {
          var s = new FileReader();
          s.onload = function(u) {
            var c = JSON.parse(u.target.result), l = c.modelTopology;
            if (l != null) {
              e.length === 0 && a({ modelTopology: l });
              var f = c.weightsManifest;
              if (f != null) {
                var h;
                try {
                  h = n.checkManifestAndWeightFiles(f, e);
                } catch (v) {
                  return void i(v);
                }
                var p = [], d = [], m = [];
                f.forEach(function(v) {
                  v.paths.forEach(function(g) {
                    d.push(g), m.push(null);
                  }), p.push.apply(p, v.weights);
                }), f.forEach(function(v) {
                  v.paths.forEach(function(g) {
                    var y = new FileReader();
                    y.onload = function(x) {
                      var b = x.target.result, w = d.indexOf(g);
                      m[w] = b, m.indexOf(null) === -1 && a({ modelTopology: l, weightSpecs: p, weightData: Ti(m), format: c.format, generatedBy: c.generatedBy, convertedBy: c.convertedBy, userDefinedMetadata: c.userDefinedMetadata });
                    }, y.onerror = function(x) {
                      return i("Failed to weights data from file of path '" + g + "'.");
                    }, y.readAsArrayBuffer(h[g]);
                  });
                });
              } else i(new Error("weightManifest field is missing from file " + t.name));
            } else i(new Error("modelTopology field is missing from file " + t.name));
          }, s.onerror = function(u) {
            return i("Failed to read model topology and weights manifest JSON from file '" + t.name + "'. BrowserFiles supports loading Keras-style tf.Model artifacts only.");
          }, s.readAsText(t);
        })];
      });
    });
  }, r.prototype.checkManifestAndWeightFiles = function(t, e) {
    for (var n = [], o = e.map(function(u) {
      return Ys(u.name);
    }), a = {}, i = 0, s = t; i < s.length; i++)
      s[i].paths.forEach(function(u) {
        var c = Ys(u);
        if (n.indexOf(c) !== -1) throw new Error("Duplicate file basename found in weights manifest: '" + c + "'");
        if (n.push(c), o.indexOf(c) === -1) throw new Error("Weight file with basename '" + c + "' is not provided.");
        a[u] = e[o.indexOf(c)];
      });
    if (n.length !== e.length) throw new Error("Mismatch in the number of files in weights manifest (" + n.length + ") and the number of weight files provided (" + e.length + ").");
    return a;
  }, r;
}();
function tu(r, t, e, n) {
  (function(a) {
    _(a != null && Array.isArray(a) && a.length > 0, function() {
      return "promises must be a none empty array";
    });
  })(r), function(a, i) {
    _(a >= 0 && a <= 1, function() {
      return "Progress fraction must be in range [0, 1], but got startFraction " + a;
    }), _(i >= 0 && i <= 1, function() {
      return "Progress fraction must be in range [0, 1], but got endFraction " + i;
    }), _(i >= a, function() {
      return "startFraction must be no more than endFraction, but got startFraction " + a + " and endFraction " + i;
    });
  }(e = e ?? 0, n = n ?? 1);
  var o = 0;
  return Promise.all(r.map(function(a) {
    return a.then(function(i) {
      var s = e + ++o / r.length * (n - e);
      return t(s), i;
    }), a;
  }));
}
function nl(r, t) {
  return $(this, void 0, void 0, function() {
    var e, n, o, a, i, s, u, c, l;
    return Y(this, function(f) {
      switch (f.label) {
        case 0:
          return t == null && (t = {}), e = t.fetchFunc == null ? M().platform.fetch : t.fetchFunc, n = r.map(function(h) {
            return e(h, t.requestInit, { isBinary: !0 });
          }), o = 0, a = 0.5, t.onProgress != null ? [3, 2] : [4, Promise.all(n)];
        case 1:
          return i = f.sent(), [3, 4];
        case 2:
          return [4, tu(n, t.onProgress, o, a)];
        case 3:
          i = f.sent(), f.label = 4;
        case 4:
          return s = i.map(function(h) {
            return h.arrayBuffer();
          }), u = 0.5, c = 1, t.onProgress != null ? [3, 6] : [4, Promise.all(s)];
        case 5:
          return l = f.sent(), [3, 8];
        case 6:
          return [4, tu(s, t.onProgress, u, c)];
        case 7:
          l = f.sent(), f.label = 8;
        case 8:
          return [2, l];
      }
    });
  });
}
function nu(r) {
  var t = this;
  return function(e, n, o) {
    return n === void 0 && (n = ""), $(t, void 0, void 0, function() {
      var a, i, s, u, c, l, f, h, p, d;
      return Y(this, function(m) {
        switch (m.label) {
          case 0:
            if (a = e.map(function() {
              return !1;
            }), i = {}, s = o != null ? o.map(function() {
              return !1;
            }) : [], u = [], e.forEach(function(v, g) {
              var y = 0;
              v.weights.forEach(function(x) {
                var b = "quantization" in x ? x.quantization.dtype : x.dtype, w = Ha[b] * J(x.shape), C = function() {
                  a[g] = !0, i[g] == null && (i[g] = []), i[g].push({ manifestEntry: x, groupOffset: y, sizeBytes: w });
                };
                o != null ? o.forEach(function(k, I) {
                  k === x.name && (C(), s[I] = !0);
                }) : C(), u.push(x.name), y += w;
              });
            }), !s.every(function(v) {
              return v;
            })) throw c = o.filter(function(v, g) {
              return !s[g];
            }), new Error("Could not find weights in manifest with names: " + c.join(", ") + `. 
Manifest JSON has weights with names: ` + u.join(", ") + ".");
            return l = a.reduce(function(v, g, y) {
              return g && v.push(y), v;
            }, []), f = [], l.forEach(function(v) {
              e[v].paths.forEach(function(g) {
                var y = n + (n.endsWith("/") ? "" : "/") + g;
                f.push(y);
              });
            }), [4, r(f)];
          case 1:
            return h = m.sent(), p = {}, d = 0, l.forEach(function(v) {
              for (var g = e[v].paths.length, y = 0, x = 0; x < g; x++) y += h[d + x].byteLength;
              for (var b = new ArrayBuffer(y), w = new Uint8Array(b), C = 0, k = 0; k < g; k++) {
                var I = new Uint8Array(h[d + k]);
                w.set(I, C), C += I.byteLength;
              }
              i[v].forEach(function(R) {
                var S = Qc(b.slice(R.groupOffset, R.groupOffset + R.sizeBytes), [R.manifestEntry]);
                for (var N in S) p[N] = S[N];
              }), d += g;
            }), [2, p];
        }
      });
    });
  };
}
ft.registerSaveRouter(function(r) {
  return M().getBool("IS_BROWSER") && !Array.isArray(r) && r.startsWith(xa.URL_SCHEME) ? function(t) {
    return t === void 0 && (t = "model"), new xa(t);
  }(r.slice(xa.URL_SCHEME.length)) : null;
});
var rl = function() {
  function r(t, e) {
    if (this.DEFAULT_METHOD = "POST", e == null && (e = {}), this.weightPathPrefix = e.weightPathPrefix, this.onProgress = e.onProgress, e.fetchFunc != null ? (_(typeof e.fetchFunc == "function", function() {
      return "Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)";
    }), this.fetch = e.fetchFunc) : this.fetch = M().platform.fetch, _(t != null && t.length > 0, function() {
      return "URL path for http must not be null, undefined or empty.";
    }), Array.isArray(t) && _(t.length === 2, function() {
      return "URL paths for http must have a length of 2, (actual length is " + t.length + ").";
    }), this.path = t, e.requestInit != null && e.requestInit.body != null) throw new Error("requestInit is expected to have no pre-existing body, but has one.");
    this.requestInit = e.requestInit || {};
  }
  return r.prototype.save = function(t) {
    return $(this, void 0, void 0, function() {
      var e, n, o, a;
      return Y(this, function(i) {
        switch (i.label) {
          case 0:
            if (t.modelTopology instanceof ArrayBuffer) throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");
            return (e = Object.assign({ method: this.DEFAULT_METHOD }, this.requestInit)).body = new FormData(), n = [{ paths: ["./model.weights.bin"], weights: t.weightSpecs }], o = { modelTopology: t.modelTopology, format: t.format, generatedBy: t.generatedBy, convertedBy: t.convertedBy, userDefinedMetadata: t.userDefinedMetadata, weightsManifest: n }, e.body.append("model.json", new Blob([JSON.stringify(o)], { type: "application/json" }), "model.json"), t.weightData != null && e.body.append("model.weights.bin", new Blob([t.weightData], { type: "application/octet-stream" }), "model.weights.bin"), [4, this.fetch(this.path, e)];
          case 1:
            if ((a = i.sent()).ok) return [2, { modelArtifactsInfo: kr(t), responses: [a] }];
            throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status " + a.status + ".");
        }
      });
    });
  }, r.prototype.load = function() {
    return $(this, void 0, void 0, function() {
      var t, e, n, o, a, i, s, u, c, l, f, h;
      return Y(this, function(p) {
        switch (p.label) {
          case 0:
            return [4, this.fetch(this.path, this.requestInit)];
          case 1:
            if (!(t = p.sent()).ok) throw new Error("Request to " + this.path + " failed with status code " + t.status + ". Please verify this URL points to the model JSON of the model to load.");
            p.label = 2;
          case 2:
            return p.trys.push([2, 4, , 5]), [4, t.json()];
          case 3:
            return e = p.sent(), [3, 5];
          case 4:
            throw p.sent(), n = "Failed to parse model JSON of response from " + this.path + ".", this.path.endsWith(".pb") ? n += " Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository." : n += " Please make sure the server is serving valid JSON for this request.", new Error(n);
          case 5:
            if (o = e.modelTopology, a = e.weightsManifest, i = e.generatedBy, s = e.convertedBy, u = e.format, c = e.userDefinedMetadata, o == null && a == null) throw new Error("The JSON from HTTP path " + this.path + " contains neither model topology or manifest for weights.");
            return a == null ? [3, 7] : [4, this.loadWeights(a)];
          case 6:
            h = p.sent(), l = h[0], f = h[1], p.label = 7;
          case 7:
            return [2, { modelTopology: o, weightSpecs: l, weightData: f, userDefinedMetadata: c, generatedBy: i, convertedBy: s, format: u }];
        }
      });
    });
  }, r.prototype.loadWeights = function(t) {
    return $(this, void 0, void 0, function() {
      var e, n, o, a, i, s, u, c, l, f, h;
      return Y(this, function(p) {
        switch (p.label) {
          case 0:
            for (e = Array.isArray(this.path) ? this.path[1] : this.path, n = function(d) {
              var m = d.lastIndexOf("/"), v = d.lastIndexOf("?"), g = d.substring(0, m), y = v > m ? d.substring(v) : "";
              return [g + "/", y];
            }(e), o = n[0], a = n[1], i = this.weightPathPrefix || o, s = [], u = 0, c = t; u < c.length; u++) l = c[u], s.push.apply(s, l.weights);
            return f = [], t.forEach(function(d) {
              d.paths.forEach(function(m) {
                f.push(i + m + a);
              });
            }), [4, nl(f, { requestInit: this.requestInit, fetchFunc: this.fetch, onProgress: this.onProgress })];
          case 1:
            return h = p.sent(), [2, [s, Ti(h)]];
        }
      });
    });
  }, r.URL_SCHEME_REGEX = /^https?:\/\//, r;
}();
function ja(r) {
  return r.match(rl.URL_SCHEME_REGEX) != null;
}
var ru = function(r, t) {
  return typeof fetch > "u" ? null : (Array.isArray(r) ? r.every(function(e) {
    return ja(e);
  }) : ja(r)) ? Ka(r, { onProgress: t }) : null;
};
function Ka(r, t) {
  return new rl(r, t);
}
ft.registerSaveRouter(ru), ft.registerLoadRouter(ru);
var wa = function() {
  function r(t) {
    this.modelArtifacts = t;
  }
  return r.prototype.load = function() {
    return $(this, void 0, void 0, function() {
      return Y(this, function(t) {
        return [2, this.modelArtifacts];
      });
    });
  }, r;
}(), Vg = function() {
  function r(t) {
    this.saveHandler = t;
  }
  return r.prototype.save = function(t) {
    return $(this, void 0, void 0, function() {
      return Y(this, function(e) {
        return [2, this.saveHandler(t)];
      });
    });
  }, r;
}(), ol = Object.freeze({ browserFiles: function(r) {
  return new zg(r);
}, browserHTTPRequest: function(r, t) {
  return Ka(r, t);
}, concatenateArrayBuffers: Ti, decodeWeights: Qc, encodeWeights: function(r, t) {
  return $(this, void 0, void 0, function() {
    var e, n, o, a, i, s = this;
    return Y(this, function(u) {
      switch (u.label) {
        case 0:
          for (e = [], n = [], o = Array.isArray(r) ? r.map(function(c) {
            return c.name;
          }) : Object.keys(r), a = function(c) {
            var l = o[c], f = Array.isArray(r) ? r[c].tensor : r[l];
            if (f.dtype !== "float32" && f.dtype !== "int32" && f.dtype !== "bool" && f.dtype !== "string") throw new Error("Unsupported dtype in weight '" + l + "': " + f.dtype);
            var h = { name: l, shape: f.shape, dtype: f.dtype };
            if (f.dtype === "string") {
              var p = new Promise(function(d) {
                return $(s, void 0, void 0, function() {
                  var m, v, g, y, x, b, w;
                  return Y(this, function(C) {
                    switch (C.label) {
                      case 0:
                        return [4, f.bytes()];
                      case 1:
                        for (m = C.sent(), v = m.reduce(function(k, I) {
                          return k + I.length;
                        }, 0) + yo * m.length, g = new Uint8Array(v), y = 0, x = 0; x < m.length; x++) b = m[x], w = new Uint8Array(new Uint32Array([b.length]).buffer), g.set(w, y), y += yo, g.set(b, y), y += b.length;
                        return d(g), [2];
                    }
                  });
                });
              });
              n.push(p);
            } else n.push(f.data());
            t != null && (h.group = t), e.push(h);
          }, i = 0; i < o.length; ++i) a(i);
          return [4, Promise.all(n)];
        case 1:
          return [2, { data: Dg(u.sent()), specs: e }];
      }
    });
  });
}, fromMemory: function(r, t, e, n) {
  return arguments.length === 1 ? r.modelTopology != null || r.weightSpecs != null ? new wa(r) : (console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."), new wa({ modelTopology: r })) : (console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."), new wa({ modelTopology: r, weightSpecs: t, weightData: e, trainingConfig: n }));
}, getLoadHandlers: function(r, t) {
  return ft.getLoadHandlers(r, t);
}, getModelArtifactsInfoForJSON: kr, getSaveHandlers: function(r) {
  return ft.getSaveHandlers(r);
}, http: Ka, isHTTPScheme: ja, loadWeights: function(r, t, e, n) {
  return t === void 0 && (t = ""), $(this, void 0, void 0, function() {
    return Y(this, function(o) {
      return [2, nu(function(a) {
        return nl(a, { requestInit: n });
      })(r, t, e)];
    });
  });
}, registerLoadRouter: function(r) {
  return ft.registerLoadRouter(r);
}, registerSaveRouter: function(r) {
  return ft.registerSaveRouter(r);
}, weightsLoaderFactory: nu, withSaveHandler: function(r) {
  return new Vg(r);
}, copyModel: function(r, t) {
  return $(this, void 0, void 0, function() {
    return Y(this, function(e) {
      return [2, Js(r, t, !1)];
    });
  });
}, listModels: function() {
  return $(this, void 0, void 0, function() {
    var r, t, e, n, o, a, i;
    return Y(this, function(s) {
      switch (s.label) {
        case 0:
          r = un.getSchemes(), t = {}, e = 0, n = r, s.label = 1;
        case 1:
          return e < n.length ? (o = n[e], [4, un.getManager(o).listModels()]) : [3, 4];
        case 2:
          for (i in a = s.sent()) t[o + jn + i] = a[i];
          s.label = 3;
        case 3:
          return e++, [3, 1];
        case 4:
          return [2, t];
      }
    });
  });
}, moveModel: function(r, t) {
  return $(this, void 0, void 0, function() {
    return Y(this, function(e) {
      return [2, Js(r, t, !0)];
    });
  });
}, removeModel: function(r) {
  return $(this, void 0, void 0, function() {
    var t;
    return Y(this, function(e) {
      return t = $r(r), [2, un.getManager(t.scheme).removeModel(t.path)];
    });
  });
} }), Bn;
A({ confusionMatrix_: function(r, t, e) {
  var n = E(r, "labels", "confusionMatrix"), o = E(t, "predictions", "confusionMatrix");
  _(e == null || e > 0 && Number.isInteger(e), function() {
    return "If provided, numClasses must be a positive integer, but got " + e;
  }), _(n.rank === 1, function() {
    return "Expected the rank of labels to be 1, but got " + n.rank;
  }), _(o.rank === 1, function() {
    return "Expected the rank of predictions to be 1, but got " + o.rank;
  }), _(n.shape[0] === o.shape[0], function() {
    return "Mismatch in the number of examples: " + n.shape[0] + " vs. " + o.shape[0] + ". Labels and predictions should have the same number of elements.";
  }), _(e > 0 && Number.isInteger(e), function() {
    return "numClasses is required to be a positive integer, but got " + e;
  });
  var a = La(n.asType("int32"), e), i = La(o.asType("int32"), e);
  return a.transpose().matMul(i).asType("int32");
} });
var Hg = A({ fromPixels_: function(r, t) {
  if (t === void 0 && (t = 3), t > 4) throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");
  if (r == null) throw new Error("pixels passed to tf.browser.fromPixels() can not be null");
  var e = !1, n = !1, o = !1, a = !1, i = !1;
  if (r.data instanceof Uint8Array) e = !0;
  else if (typeof ImageData < "u" && r instanceof ImageData) n = !0;
  else if (typeof HTMLVideoElement < "u" && r instanceof HTMLVideoElement) o = !0;
  else if (typeof HTMLImageElement < "u" && r instanceof HTMLImageElement) a = !0;
  else {
    if (r.getContext == null) throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was " + r.constructor.name);
    i = !0;
  }
  if (o && o && r.readyState < 2)
    throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");
  if (ku("FromPixels", T.backendName) != null) return T.runKernel("FromPixels", { pixels: r }, { numChannels: t });
  var s, u, c = o ? [r.videoWidth, r.videoHeight] : [r.width, r.height], l = c[0], f = c[1];
  if (i ? s = r.getContext("2d").getImageData(0, 0, l, f).data : n || e ? s = r.data : (a || o) && (Bn == null && (Bn = document.createElement("canvas").getContext("2d")), Bn.canvas.width = l, Bn.canvas.height = f, Bn.drawImage(r, 0, 0, l, f), s = Bn.getImageData(0, 0, l, f).data), t === 4) u = new Int32Array(s);
  else {
    var h = l * f;
    u = new Int32Array(h * t);
    for (var p = 0; p < h; p++) for (var d = 0; d < t; ++d) u[p * t + d] = s[4 * p + d];
  }
  return ii(u, [f, l, t], "int32");
} }), Ni = Object.freeze({ toPixels: function(r, t) {
  return $(this, void 0, void 0, function() {
    var e, n, o, a, i, s, u, c, l, f, h, p, d, m, v, g, y, x, b, w, C, k, I;
    return Y(this, function(R) {
      switch (R.label) {
        case 0:
          if (e = E(r, "img", "toPixels"), r instanceof Se || (e = e.toInt()), e.rank !== 2 && e.rank !== 3) throw new Error("toPixels only supports rank 2 or 3 tensors, got rank " + e.rank + ".");
          if (n = e.shape.slice(0, 2), o = n[0], a = n[1], (i = e.rank === 2 ? 1 : e.shape[2]) > 4 || i === 2) throw new Error("toPixels only supports depth of size 1, 3 or 4 but got " + i);
          return [4, e.data()];
        case 1:
          return s = R.sent(), u = e.min(), c = e.max(), [4, Promise.all([u.data(), c.data()])];
        case 2:
          if (l = R.sent(), f = l[0], h = l[1], p = f[0], d = h[0], u.dispose(), c.dispose(), e.dtype === "float32") {
            if (p < 0 || d > 1) throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range [" + p + " - " + d + "].");
          } else {
            if (e.dtype !== "int32") throw new Error("Unsupported type for toPixels: " + e.dtype + ". Please use float32 or int32 tensors.");
            if (p < 0 || d > 255) throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range [" + p + " - " + d + "].");
          }
          for (m = e.dtype === "float32" ? 255 : 1, v = new Uint8ClampedArray(a * o * 4), g = 0; g < o * a; ++g) y = void 0, x = void 0, b = void 0, w = void 0, i === 1 ? (y = s[g] * m, x = s[g] * m, b = s[g] * m, w = 255) : i === 3 ? (y = s[3 * g] * m, x = s[3 * g + 1] * m, b = s[3 * g + 2] * m, w = 255) : i === 4 && (y = s[4 * g] * m, x = s[4 * g + 1] * m, b = s[4 * g + 2] * m, w = s[4 * g + 3] * m), v[(C = 4 * g) + 0] = Math.round(y), v[C + 1] = Math.round(x), v[C + 2] = Math.round(b), v[C + 3] = Math.round(w);
          return t != null && (t.width = a, t.height = o, k = t.getContext("2d"), I = new ImageData(v, a, o), k.putImageData(I, 0, 0)), e !== r && e.dispose(), [2, v];
      }
    });
  });
}, fromPixels: Hg }), Gg = function() {
  function r() {
  }
  return r.prototype.getClassName = function() {
    return this.constructor.className;
  }, r.fromConfig = function(t, e) {
    return new t(e);
  }, r;
}(), qg = function() {
  function r() {
    this.classNameMap = {};
  }
  return r.getMap = function() {
    return r.instance == null && (r.instance = new r()), r.instance;
  }, r.register = function(t) {
    r.getMap().classNameMap[t.className] = [t, t.fromConfig];
  }, r;
}();
function Dn(r) {
  _(r.className != null, function() {
    return "Class being registered does not have the static className property defined.";
  }), _(typeof r.className == "string", function() {
    return "className is required to be a string, but got type " + typeof r.className;
  }), _(r.className.length > 0, function() {
    return "Class being registered has an empty-string as its className, which is disallowed.";
  }), qg.register(r);
}
var Tn = function(r) {
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return Ct(t, r), t.prototype.minimize = function(e, n, o) {
    n === void 0 && (n = !1);
    var a = this.computeGradients(e, o), i = a.value, s = a.grads;
    if (o != null) {
      var u = o.map(function(c) {
        return { name: c.name, tensor: s[c.name] };
      });
      this.applyGradients(u);
    } else this.applyGradients(s);
    return nt(s), n ? i : (i.dispose(), null);
  }, Object.defineProperty(t.prototype, "iterations", { get: function() {
    return this.iterations_ == null && (this.iterations_ = 0), this.iterations_;
  }, enumerable: !0, configurable: !0 }), t.prototype.incrementIterations = function() {
    this.iterations_ = this.iterations + 1;
  }, t.prototype.computeGradients = function(e, n) {
    return tp(e, n);
  }, t.prototype.dispose = function() {
    this.iterations_ != null && nt(this.iterations_);
  }, t.prototype.saveIterations = function() {
    return $(this, void 0, void 0, function() {
      return Y(this, function(e) {
        return this.iterations_ == null && (this.iterations_ = 0), [2, { name: "iter", tensor: j(this.iterations_, "int32") }];
      });
    });
  }, t.prototype.getWeights = function() {
    return $(this, void 0, void 0, function() {
      return Y(this, function(e) {
        throw new Error("getWeights() is not implemented for this optimizer yet.");
      });
    });
  }, t.prototype.setWeights = function(e) {
    return $(this, void 0, void 0, function() {
      return Y(this, function(n) {
        throw new Error("setWeights() is not implemented for this optimizer class " + this.getClassName());
      });
    });
  }, t.prototype.extractIterations = function(e) {
    return $(this, void 0, void 0, function() {
      var n;
      return Y(this, function(o) {
        switch (o.label) {
          case 0:
            return n = this, [4, e[0].tensor.data()];
          case 1:
            return n.iterations_ = o.sent()[0], [2, e.slice(1)];
        }
      });
    });
  }, t;
}(Gg);
Object.defineProperty(Tn, Symbol.hasInstance, { value: function(r) {
  return r.minimize != null && r.computeGradients != null && r.applyGradients != null;
} });
var jg = function(r) {
  function t(e, n, o) {
    o === void 0 && (o = null);
    var a = r.call(this) || this;
    return a.learningRate = e, a.rho = n, a.epsilon = o, a.accumulatedGrads = [], a.accumulatedUpdates = [], o == null && (a.epsilon = T.backend.epsilon()), a;
  }
  return Ct(t, r), t.prototype.applyGradients = function(e) {
    var n = this;
    (Array.isArray(e) ? e.map(function(o) {
      return o.name;
    }) : Object.keys(e)).forEach(function(o, a) {
      var i = T.registeredVariables[o];
      n.accumulatedGrads[a] == null && (n.accumulatedGrads[a] = { originalName: o + "/accum_grad", variable: X(function() {
        return ge(i).variable(!1);
      }) }), n.accumulatedUpdates[a] == null && (n.accumulatedUpdates[a] = { originalName: o + "/accum_var", variable: X(function() {
        return ge(i).variable(!1);
      }) });
      var s = Array.isArray(e) ? e[a].tensor : e[o];
      if (s != null) {
        var u = n.accumulatedGrads[a].variable, c = n.accumulatedUpdates[a].variable;
        X(function() {
          var l = u.mul(n.rho).add(s.square().mul(1 - n.rho)), f = c.add(n.epsilon).sqrt().div(u.add(n.epsilon).sqrt()).mul(s), h = c.mul(n.rho).add(f.square().mul(1 - n.rho));
          u.assign(l), c.assign(h);
          var p = f.mul(-n.learningRate).add(i);
          i.assign(p);
        });
      }
    }), this.incrementIterations();
  }, t.prototype.dispose = function() {
    this.accumulatedUpdates != null && (nt(this.accumulatedGrads.map(function(e) {
      return e.variable;
    })), nt(this.accumulatedUpdates.map(function(e) {
      return e.variable;
    })));
  }, t.prototype.getWeights = function() {
    return $(this, void 0, void 0, function() {
      var e;
      return Y(this, function(n) {
        switch (n.label) {
          case 0:
            return e = this.accumulatedGrads.concat(this.accumulatedUpdates), [4, this.saveIterations()];
          case 1:
            return [2, [n.sent()].concat(e.map(function(o) {
              return { name: o.originalName, tensor: o.variable };
            }))];
        }
      });
    });
  }, t.prototype.setWeights = function(e) {
    return $(this, void 0, void 0, function() {
      var n;
      return Y(this, function(o) {
        switch (o.label) {
          case 0:
            return [4, this.extractIterations(e)];
          case 1:
            return e = o.sent(), n = e.length / 2, this.accumulatedGrads = e.slice(0, n).map(function(a) {
              return { originalName: a.name, variable: a.tensor.variable(!1) };
            }), this.accumulatedUpdates = e.slice(n, 2 * n).map(function(a) {
              return { originalName: a.name, variable: a.tensor.variable(!1) };
            }), [2];
        }
      });
    });
  }, t.prototype.getConfig = function() {
    return { learningRate: this.learningRate, rho: this.rho, epsilon: this.epsilon };
  }, t.fromConfig = function(e, n) {
    return new e(n.learningRate, n.rho, n.epsilon);
  }, t.className = "Adadelta", t;
}(Tn);
Dn(jg);
var Kg = function(r) {
  function t(e, n) {
    n === void 0 && (n = 0.1);
    var o = r.call(this) || this;
    return o.learningRate = e, o.initialAccumulatorValue = n, o.accumulatedGrads = [], o;
  }
  return Ct(t, r), t.prototype.applyGradients = function(e) {
    var n = this;
    (Array.isArray(e) ? e.map(function(o) {
      return o.name;
    }) : Object.keys(e)).forEach(function(o, a) {
      var i = T.registeredVariables[o];
      n.accumulatedGrads[a] == null && (n.accumulatedGrads[a] = { originalName: o + "/accumulator", variable: X(function() {
        return Bt(i.shape, n.initialAccumulatorValue).variable(!1);
      }) });
      var s = Array.isArray(e) ? e[a].tensor : e[o];
      if (s != null) {
        var u = n.accumulatedGrads[a].variable;
        X(function() {
          var c = u.add(s.square());
          u.assign(c);
          var l = s.div(c.add(T.backend.epsilon()).sqrt()).mul(-n.learningRate).add(i);
          i.assign(l);
        });
      }
    }), this.incrementIterations();
  }, t.prototype.dispose = function() {
    this.accumulatedGrads != null && nt(this.accumulatedGrads.map(function(e) {
      return e.variable;
    }));
  }, t.prototype.getWeights = function() {
    return $(this, void 0, void 0, function() {
      return Y(this, function(e) {
        switch (e.label) {
          case 0:
            return [4, this.saveIterations()];
          case 1:
            return [2, [e.sent()].concat(this.accumulatedGrads.map(function(n) {
              return { name: n.originalName, tensor: n.variable };
            }))];
        }
      });
    });
  }, t.prototype.setWeights = function(e) {
    return $(this, void 0, void 0, function() {
      return Y(this, function(n) {
        switch (n.label) {
          case 0:
            return [4, this.extractIterations(e)];
          case 1:
            return e = n.sent(), this.accumulatedGrads = e.map(function(o) {
              return { originalName: o.name, variable: o.tensor.variable(!1) };
            }), [2];
        }
      });
    });
  }, t.prototype.getConfig = function() {
    return { learningRate: this.learningRate, initialAccumulatorValue: this.initialAccumulatorValue };
  }, t.fromConfig = function(e, n) {
    return new e(n.learningRate, n.initialAccumulatorValue);
  }, t.className = "Adagrad", t;
}(Tn);
Dn(Kg);
var Xg = function(r) {
  function t(e, n, o, a) {
    a === void 0 && (a = null);
    var i = r.call(this) || this;
    return i.learningRate = e, i.beta1 = n, i.beta2 = o, i.epsilon = a, i.accumulatedFirstMoment = [], i.accumulatedSecondMoment = [], X(function() {
      i.accBeta1 = j(n).variable(), i.accBeta2 = j(o).variable();
    }), a == null && (i.epsilon = T.backend.epsilon()), i;
  }
  return Ct(t, r), t.prototype.applyGradients = function(e) {
    var n = this, o = Array.isArray(e) ? e.map(function(a) {
      return a.name;
    }) : Object.keys(e);
    X(function() {
      var a = We(1, n.accBeta1), i = We(1, n.accBeta2);
      o.forEach(function(s, u) {
        var c = T.registeredVariables[s];
        n.accumulatedFirstMoment[u] == null && (n.accumulatedFirstMoment[u] = { originalName: s + "/m", variable: X(function() {
          return ge(c).variable(!1);
        }) }), n.accumulatedSecondMoment[u] == null && (n.accumulatedSecondMoment[u] = { originalName: s + "/v", variable: X(function() {
          return ge(c).variable(!1);
        }) });
        var l = Array.isArray(e) ? e[u].tensor : e[s];
        if (l != null) {
          var f = n.accumulatedFirstMoment[u].variable, h = n.accumulatedSecondMoment[u].variable, p = f.mul(n.beta1).add(l.mul(1 - n.beta1)), d = h.mul(n.beta2).add(l.square().mul(1 - n.beta2)), m = p.div(a), v = d.div(i);
          f.assign(p), h.assign(d);
          var g = m.div(v.sqrt().add(n.epsilon)).mul(-n.learningRate).add(c);
          c.assign(g);
        }
      }), n.accBeta1.assign(n.accBeta1.mul(n.beta1)), n.accBeta2.assign(n.accBeta2.mul(n.beta2));
    }), this.incrementIterations();
  }, t.prototype.dispose = function() {
    this.accBeta1.dispose(), this.accBeta2.dispose(), this.accumulatedFirstMoment != null && nt(this.accumulatedFirstMoment.map(function(e) {
      return e.variable;
    })), this.accumulatedSecondMoment != null && nt(this.accumulatedSecondMoment.map(function(e) {
      return e.variable;
    }));
  }, t.prototype.getWeights = function() {
    return $(this, void 0, void 0, function() {
      var e;
      return Y(this, function(n) {
        switch (n.label) {
          case 0:
            return e = this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment), [4, this.saveIterations()];
          case 1:
            return [2, [n.sent()].concat(e.map(function(o) {
              return { name: o.originalName, tensor: o.variable };
            }))];
        }
      });
    });
  }, t.prototype.setWeights = function(e) {
    return $(this, void 0, void 0, function() {
      var n, o = this;
      return Y(this, function(a) {
        switch (a.label) {
          case 0:
            return [4, this.extractIterations(e)];
          case 1:
            return e = a.sent(), X(function() {
              o.accBeta1.assign(mo(o.beta1, o.iterations_ + 1)), o.accBeta2.assign(mo(o.beta2, o.iterations_ + 1));
            }), n = e.length / 2, this.accumulatedFirstMoment = e.slice(0, n).map(function(i) {
              return { originalName: i.name, variable: i.tensor.variable(!1) };
            }), this.accumulatedSecondMoment = e.slice(n, 2 * n).map(function(i) {
              return { originalName: i.name, variable: i.tensor.variable(!1) };
            }), [2];
        }
      });
    });
  }, t.prototype.getConfig = function() {
    return { learningRate: this.learningRate, beta1: this.beta1, beta2: this.beta2, epsilon: this.epsilon };
  }, t.fromConfig = function(e, n) {
    return new e(n.learningRate, n.beta1, n.beta2, n.epsilon);
  }, t.className = "Adam", t;
}(Tn);
Dn(Xg);
var $g = function(r) {
  function t(e, n, o, a, i) {
    a === void 0 && (a = null), i === void 0 && (i = 0);
    var s = r.call(this) || this;
    return s.learningRate = e, s.beta1 = n, s.beta2 = o, s.epsilon = a, s.decay = i, s.accumulatedFirstMoment = [], s.accumulatedWeightedInfNorm = [], X(function() {
      s.iteration = j(0).variable(), s.accBeta1 = j(n).variable();
    }), a == null && (s.epsilon = T.backend.epsilon()), s;
  }
  return Ct(t, r), t.prototype.applyGradients = function(e) {
    var n = this, o = Array.isArray(e) ? e.map(function(a) {
      return a.name;
    }) : Object.keys(e);
    X(function() {
      var a = We(1, n.accBeta1), i = bt(-n.learningRate, n.iteration.mul(n.decay).add(1));
      o.forEach(function(s, u) {
        var c = T.registeredVariables[s];
        n.accumulatedFirstMoment[u] == null && (n.accumulatedFirstMoment[u] = { originalName: s + "/m", variable: ge(c).variable(!1) }), n.accumulatedWeightedInfNorm[u] == null && (n.accumulatedWeightedInfNorm[u] = { originalName: s + "/v", variable: ge(c).variable(!1) });
        var l = Array.isArray(e) ? e[u].tensor : e[s];
        if (l != null) {
          var f = n.accumulatedFirstMoment[u].variable, h = n.accumulatedWeightedInfNorm[u].variable, p = f.mul(n.beta1).add(l.mul(1 - n.beta1)), d = h.mul(n.beta2), m = l.abs(), v = d.maximum(m);
          f.assign(p), h.assign(v);
          var g = i.div(a).mul(p.div(v.add(n.epsilon))).add(c);
          c.assign(g);
        }
      }), n.iteration.assign(n.iteration.add(1)), n.accBeta1.assign(n.accBeta1.mul(n.beta1));
    }), this.incrementIterations();
  }, t.prototype.dispose = function() {
    this.accBeta1.dispose(), this.iteration.dispose(), this.accumulatedFirstMoment != null && nt(this.accumulatedFirstMoment.map(function(e) {
      return e.variable;
    })), this.accumulatedWeightedInfNorm != null && nt(this.accumulatedWeightedInfNorm.map(function(e) {
      return e.variable;
    }));
  }, t.prototype.getWeights = function() {
    return $(this, void 0, void 0, function() {
      return Y(this, function(e) {
        throw new Error("getWeights() is not implemented for Adamax yet.");
      });
    });
  }, t.prototype.setWeights = function(e) {
    return $(this, void 0, void 0, function() {
      return Y(this, function(n) {
        throw new Error("setWeights() is not implemented for Adamax yet.");
      });
    });
  }, t.prototype.getConfig = function() {
    return { learningRate: this.learningRate, beta1: this.beta1, beta2: this.beta2, epsilon: this.epsilon, decay: this.decay };
  }, t.fromConfig = function(e, n) {
    return new e(n.learningRate, n.beta1, n.beta2, n.epsilon, n.decay);
  }, t.className = "Adamax", t;
}(Tn);
Dn($g);
var al = function(r) {
  function t(e) {
    var n = r.call(this) || this;
    return n.learningRate = e, n.setLearningRate(e), n;
  }
  return Ct(t, r), t.prototype.applyGradients = function(e) {
    var n = this;
    (Array.isArray(e) ? e.map(function(o) {
      return o.name;
    }) : Object.keys(e)).forEach(function(o, a) {
      var i = Array.isArray(e) ? e[a].tensor : e[o];
      if (i != null) {
        var s = T.registeredVariables[o];
        X(function() {
          var u = n.c.mul(i).add(s);
          s.assign(u);
        });
      }
    }), this.incrementIterations();
  }, t.prototype.setLearningRate = function(e) {
    this.learningRate = e, this.c != null && this.c.dispose(), this.c = vh(j(-e));
  }, t.prototype.dispose = function() {
    this.c.dispose();
  }, t.prototype.getWeights = function() {
    return $(this, void 0, void 0, function() {
      return Y(this, function(e) {
        switch (e.label) {
          case 0:
            return [4, this.saveIterations()];
          case 1:
            return [2, [e.sent()]];
        }
      });
    });
  }, t.prototype.setWeights = function(e) {
    return $(this, void 0, void 0, function() {
      return Y(this, function(n) {
        switch (n.label) {
          case 0:
            return [4, this.extractIterations(e)];
          case 1:
            if ((e = n.sent()).length !== 0) throw new Error("SGD optimizer does not have settable weights.");
            return [2];
        }
      });
    });
  }, t.prototype.getConfig = function() {
    return { learningRate: this.learningRate };
  }, t.fromConfig = function(e, n) {
    return new e(n.learningRate);
  }, t.className = "SGD", t;
}(Tn);
Dn(al);
var Yg = function(r) {
  function t(e, n, o) {
    o === void 0 && (o = !1);
    var a = r.call(this, e) || this;
    return a.learningRate = e, a.momentum = n, a.useNesterov = o, a.accumulations = [], a.m = j(a.momentum), a;
  }
  return Ct(t, r), t.prototype.applyGradients = function(e) {
    var n = this;
    (Array.isArray(e) ? e.map(function(o) {
      return o.name;
    }) : Object.keys(e)).forEach(function(o, a) {
      var i = T.registeredVariables[o];
      n.accumulations[a] == null && (n.accumulations[a] = { originalName: o + "/momentum", variable: X(function() {
        return ge(i).variable(!1);
      }) });
      var s = n.accumulations[a].variable, u = Array.isArray(e) ? e[a].tensor : e[o];
      u != null && X(function() {
        var c, l = n.m.mul(s).add(u);
        c = n.useNesterov ? n.c.mul(u.add(l.mul(n.m))).add(i) : n.c.mul(l).add(i), s.assign(l), i.assign(c);
      });
    }), this.incrementIterations();
  }, t.prototype.dispose = function() {
    this.m.dispose(), this.accumulations != null && nt(this.accumulations.map(function(e) {
      return e.variable;
    }));
  }, t.prototype.setMomentum = function(e) {
    this.momentum = e;
  }, t.prototype.getWeights = function() {
    return $(this, void 0, void 0, function() {
      return Y(this, function(e) {
        switch (e.label) {
          case 0:
            return [4, this.saveIterations()];
          case 1:
            return [2, [e.sent()].concat(this.accumulations.map(function(n) {
              return { name: n.originalName, tensor: n.variable };
            }))];
        }
      });
    });
  }, t.prototype.setWeights = function(e) {
    return $(this, void 0, void 0, function() {
      return Y(this, function(n) {
        switch (n.label) {
          case 0:
            return [4, this.extractIterations(e)];
          case 1:
            return e = n.sent(), this.accumulations = e.map(function(o) {
              return { originalName: o.name, variable: o.tensor.variable(!1) };
            }), [2];
        }
      });
    });
  }, t.prototype.getConfig = function() {
    return { learningRate: this.learningRate, momentum: this.momentum, useNesterov: this.useNesterov };
  }, t.fromConfig = function(e, n) {
    return new e(n.learningRate, n.momentum, n.useNesterov);
  }, t.className = "Momentum", t;
}(al);
Dn(Yg);
var Jg = function(r) {
  function t(e, n, o, a, i) {
    n === void 0 && (n = 0.9), o === void 0 && (o = 0), a === void 0 && (a = null), i === void 0 && (i = !1);
    var s = r.call(this) || this;
    if (s.learningRate = e, s.decay = n, s.momentum = o, s.epsilon = a, s.accumulatedMeanSquares = [], s.accumulatedMoments = [], s.accumulatedMeanGrads = [], s.centered = i, a == null && (s.epsilon = T.backend.epsilon()), e == null) throw new Error("learningRate for RMSPropOptimizer must be defined.");
    return s;
  }
  return Ct(t, r), t.prototype.applyGradients = function(e) {
    var n = this;
    (Array.isArray(e) ? e.map(function(o) {
      return o.name;
    }) : Object.keys(e)).forEach(function(o, a) {
      var i = T.registeredVariables[o];
      n.accumulatedMeanSquares[a] == null && (n.accumulatedMeanSquares[a] = { originalName: o + "/rms", variable: X(function() {
        return ge(i).variable(!1);
      }) }), n.accumulatedMoments[a] == null && (n.accumulatedMoments[a] = { originalName: o + "/momentum", variable: X(function() {
        return ge(i).variable(!1);
      }) }), n.accumulatedMeanGrads[a] == null && n.centered && (n.accumulatedMeanGrads[a] = { originalName: o + "/mg", variable: X(function() {
        return ge(i).variable(!1);
      }) });
      var s = Array.isArray(e) ? e[a].tensor : e[o];
      if (s != null) {
        var u = n.accumulatedMeanSquares[a].variable, c = n.accumulatedMoments[a].variable;
        X(function() {
          var l = u.mul(n.decay).add(s.square().mul(1 - n.decay));
          if (n.centered) {
            var f = n.accumulatedMeanGrads[a].variable, h = f.mul(n.decay).add(s.mul(1 - n.decay)), p = c.mul(n.momentum).add(s.mul(n.learningRate).div(l.sub(h.square().add(n.epsilon)).sqrt()));
            u.assign(l), f.assign(h), c.assign(p);
            var d = i.sub(p);
            i.assign(d);
          } else {
            var m = u.mul(n.decay).add(s.square().mul(1 - n.decay));
            p = c.mul(n.momentum).add(s.mul(n.learningRate).div(m.add(n.epsilon).sqrt())), u.assign(m), c.assign(p), d = i.sub(p), i.assign(d);
          }
        });
      }
    }), this.incrementIterations();
  }, t.prototype.dispose = function() {
    this.accumulatedMeanSquares != null && nt(this.accumulatedMeanSquares.map(function(e) {
      return e.variable;
    })), this.accumulatedMeanGrads != null && this.centered && nt(this.accumulatedMeanGrads.map(function(e) {
      return e.variable;
    })), this.accumulatedMoments != null && nt(this.accumulatedMoments.map(function(e) {
      return e.variable;
    }));
  }, t.prototype.getWeights = function() {
    return $(this, void 0, void 0, function() {
      var e;
      return Y(this, function(n) {
        switch (n.label) {
          case 0:
            return e = this.accumulatedMeanSquares.concat(this.accumulatedMoments), this.centered && e.push.apply(e, this.accumulatedMeanGrads), [4, this.saveIterations()];
          case 1:
            return [2, [n.sent()].concat(e.map(function(o) {
              return { name: o.originalName, tensor: o.variable };
            }))];
        }
      });
    });
  }, t.prototype.setWeights = function(e) {
    return $(this, void 0, void 0, function() {
      var n;
      return Y(this, function(o) {
        switch (o.label) {
          case 0:
            return [4, this.extractIterations(e)];
          case 1:
            return e = o.sent(), n = this.centered ? e.length / 3 : e.length / 2, this.accumulatedMeanSquares = e.slice(0, n).map(function(a) {
              return { originalName: a.name, variable: a.tensor.variable(!1) };
            }), this.accumulatedMoments = e.slice(n, 2 * n).map(function(a) {
              return { originalName: a.name, variable: a.tensor.variable(!1) };
            }), this.centered && (this.accumulatedMeanGrads = e.slice(2 * n, 3 * n).map(function(a) {
              return { originalName: a.name, variable: a.tensor.variable(!1) };
            })), [2];
        }
      });
    });
  }, t.prototype.getConfig = function() {
    return { learningRate: this.learningRate, decay: this.decay, momentum: this.momentum, epsilon: this.epsilon, centered: this.centered };
  }, t.fromConfig = function(e, n) {
    return new e(n.learningRate, n.decay, n.momentum, n.epsilon, n.centered);
  }, t.className = "RMSProp", t;
}(Tn);
Dn(Jg);
Se.prototype.squaredDifference = function(r) {
  return xc(this, r);
}, P = Eg;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Xa = function(r, t) {
  return Xa = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var o in n) n.hasOwnProperty(o) && (e[o] = n[o]);
  }, Xa(r, t);
};
function oe(r, t) {
  Xa(r, t);
  function e() {
    this.constructor = r;
  }
  r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
var Xe = function() {
  return Xe = Object.assign || function(t) {
    for (var e, n = 1, o = arguments.length; n < o; n++) {
      e = arguments[n];
      for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, Xe.apply(this, arguments);
};
function Z(r, t, e, n) {
  function o(a) {
    return a instanceof e ? a : new e(function(i) {
      i(a);
    });
  }
  return new (e || (e = Promise))(function(a, i) {
    function s(l) {
      try {
        c(n.next(l));
      } catch (f) {
        i(f);
      }
    }
    function u(l) {
      try {
        c(n.throw(l));
      } catch (f) {
        i(f);
      }
    }
    function c(l) {
      l.done ? a(l.value) : o(l.value).then(s, u);
    }
    c((n = n.apply(r, [])).next());
  });
}
function ee(r, t) {
  var e = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, o, a, i;
  return i = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function s(c) {
    return function(l) {
      return u([c, l]);
    };
  }
  function u(c) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; e; ) try {
      if (n = 1, o && (a = c[0] & 2 ? o.return : c[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, c[1])).done) return a;
      switch (o = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
        case 0:
        case 1:
          a = c;
          break;
        case 4:
          return e.label++, { value: c[1], done: !1 };
        case 5:
          e.label++, o = c[1], c = [0];
          continue;
        case 7:
          c = e.ops.pop(), e.trys.pop();
          continue;
        default:
          if (a = e.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            e = 0;
            continue;
          }
          if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
            e.label = c[1];
            break;
          }
          if (c[0] === 6 && e.label < a[1]) {
            e.label = a[1], a = c;
            break;
          }
          if (a && e.label < a[2]) {
            e.label = a[2], e.ops.push(c);
            break;
          }
          a[2] && e.ops.pop(), e.trys.pop();
          continue;
      }
      c = t.call(r, e);
    } catch (l) {
      c = [6, l], o = 0;
    } finally {
      n = a = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function hr() {
  for (var r = 0, t = 0, e = arguments.length; t < e; t++) r += arguments[t].length;
  for (var n = Array(r), o = 0, t = 0; t < e; t++)
    for (var a = arguments[t], i = 0, s = a.length; i < s; i++, o++)
      n[o] = a[i];
  return n;
}
var $n = (
  /** @class */
  function() {
    function r(t, e) {
      if (!Cn(t) || !Cn(e))
        throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have " + JSON.stringify({ width: t, height: e }));
      this._width = t, this._height = e;
    }
    return Object.defineProperty(r.prototype, "width", {
      get: function() {
        return this._width;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "height", {
      get: function() {
        return this._height;
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.reverse = function() {
      return new r(1 / this.width, 1 / this.height);
    }, r;
  }()
);
function Po(r, t) {
  return r instanceof Se && r.shape.length === t;
}
function Qg(r) {
  return Po(r, 2);
}
function Oo(r) {
  return Po(r, 3);
}
function cn(r) {
  return Po(r, 4);
}
function Zg(r) {
  return r % 1 !== 0;
}
function ou(r) {
  return r % 2 === 0;
}
function ey(r, t) {
  t === void 0 && (t = 2);
  var e = Math.pow(10, t);
  return Math.floor(r * e) / e;
}
function au(r) {
  return r && r.width && r.height;
}
function ty(r, t) {
  var e = r.width, n = r.height, o = t / Math.max(n, e);
  return new $n(Math.round(e * o), Math.round(n * o));
}
function Fi(r) {
  return r.reduce(function(t, e) {
    return t.add(e);
  }, new be(0, 0)).div(new be(r.length, r.length));
}
function yr(r, t, e) {
  return Array(r).fill(0).map(function(n, o) {
    return t + o * e;
  });
}
function Cn(r) {
  return !!r && r !== 1 / 0 && r !== -1 / 0 && !isNaN(r) || r === 0;
}
function iu(r) {
  return Cn(r) && 0 <= r && r <= 1;
}
var be = (
  /** @class */
  function() {
    function r(t, e) {
      this._x = t, this._y = e;
    }
    return Object.defineProperty(r.prototype, "x", {
      get: function() {
        return this._x;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "y", {
      get: function() {
        return this._y;
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.add = function(t) {
      return new r(this.x + t.x, this.y + t.y);
    }, r.prototype.sub = function(t) {
      return new r(this.x - t.x, this.y - t.y);
    }, r.prototype.mul = function(t) {
      return new r(this.x * t.x, this.y * t.y);
    }, r.prototype.div = function(t) {
      return new r(this.x / t.x, this.y / t.y);
    }, r.prototype.abs = function() {
      return new r(Math.abs(this.x), Math.abs(this.y));
    }, r.prototype.magnitude = function() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }, r.prototype.floor = function() {
      return new r(Math.floor(this.x), Math.floor(this.y));
    }, r;
  }()
), fn = (
  /** @class */
  function() {
    function r(t, e) {
      e === void 0 && (e = !0);
      var n = t || {}, o = [n.left, n.top, n.right, n.bottom].every(Cn), a = [n.x, n.y, n.width, n.height].every(Cn);
      if (!a && !o)
        throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have " + JSON.stringify(n));
      var i = a ? [n.x, n.y, n.width, n.height] : [n.left, n.top, n.right - n.left, n.bottom - n.top], s = i[0], u = i[1], c = i[2], l = i[3];
      r.assertIsValidBox({ x: s, y: u, width: c, height: l }, "Box.constructor", e), this._x = s, this._y = u, this._width = c, this._height = l;
    }
    return r.isRect = function(t) {
      return !!t && [t.x, t.y, t.width, t.height].every(Cn);
    }, r.assertIsValidBox = function(t, e, n) {
      if (n === void 0 && (n = !1), !r.isRect(t))
        throw new Error(e + " - invalid box: " + JSON.stringify(t) + ", expected object with properties x, y, width, height");
      if (!n && (t.width < 0 || t.height < 0))
        throw new Error(e + " - width (" + t.width + ") and height (" + t.height + ") must be positive numbers");
    }, Object.defineProperty(r.prototype, "x", {
      get: function() {
        return this._x;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "y", {
      get: function() {
        return this._y;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "width", {
      get: function() {
        return this._width;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "height", {
      get: function() {
        return this._height;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "left", {
      get: function() {
        return this.x;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "top", {
      get: function() {
        return this.y;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "right", {
      get: function() {
        return this.x + this.width;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "bottom", {
      get: function() {
        return this.y + this.height;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "area", {
      get: function() {
        return this.width * this.height;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "topLeft", {
      get: function() {
        return new be(this.left, this.top);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "topRight", {
      get: function() {
        return new be(this.right, this.top);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "bottomLeft", {
      get: function() {
        return new be(this.left, this.bottom);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "bottomRight", {
      get: function() {
        return new be(this.right, this.bottom);
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.round = function() {
      var t = [this.x, this.y, this.width, this.height].map(function(i) {
        return Math.round(i);
      }), e = t[0], n = t[1], o = t[2], a = t[3];
      return new r({ x: e, y: n, width: o, height: a });
    }, r.prototype.floor = function() {
      var t = [this.x, this.y, this.width, this.height].map(function(i) {
        return Math.floor(i);
      }), e = t[0], n = t[1], o = t[2], a = t[3];
      return new r({ x: e, y: n, width: o, height: a });
    }, r.prototype.toSquare = function() {
      var t = this, e = t.x, n = t.y, o = t.width, a = t.height, i = Math.abs(o - a);
      return o < a && (e -= i / 2, o += i), a < o && (n -= i / 2, a += i), new r({ x: e, y: n, width: o, height: a });
    }, r.prototype.rescale = function(t) {
      var e = au(t) ? t.width : t, n = au(t) ? t.height : t;
      return new r({
        x: this.x * e,
        y: this.y * n,
        width: this.width * e,
        height: this.height * n
      });
    }, r.prototype.pad = function(t, e) {
      var n = [
        this.x - t / 2,
        this.y - e / 2,
        this.width + t,
        this.height + e
      ], o = n[0], a = n[1], i = n[2], s = n[3];
      return new r({ x: o, y: a, width: i, height: s });
    }, r.prototype.clipAtImageBorders = function(t, e) {
      var n = this, o = n.x, a = n.y, i = n.right, s = n.bottom, u = Math.max(o, 0), c = Math.max(a, 0), l = i - u, f = s - c, h = Math.min(l, t - u), p = Math.min(f, e - c);
      return new r({ x: u, y: c, width: h, height: p }).floor();
    }, r.prototype.shift = function(t, e) {
      var n = this, o = n.width, a = n.height, i = this.x + t, s = this.y + e;
      return new r({ x: i, y: s, width: o, height: a });
    }, r.prototype.padAtBorders = function(t, e) {
      var n = this.width + 1, o = this.height + 1, a = 1, i = 1, s = n, u = o, c = this.left, l = this.top, f = this.right, h = this.bottom;
      return f > e && (s = -f + e + n, f = e), h > t && (u = -h + t + o, h = t), c < 1 && (u = 2 - c, c = 1), l < 1 && (u = 2 - l, l = 1), { dy: i, edy: u, dx: a, edx: s, y: l, ey: h, x: c, ex: f, w: n, h: o };
    }, r.prototype.calibrate = function(t) {
      return new r({
        left: this.left + t.left * this.width,
        top: this.top + t.top * this.height,
        right: this.right + t.right * this.width,
        bottom: this.bottom + t.bottom * this.height
      }).toSquare().round();
    }, r;
  }()
), Mo = (
  /** @class */
  function(r) {
    oe(t, r);
    function t(e, n, o, a, i) {
      return i === void 0 && (i = !1), r.call(this, { left: e, top: n, right: o, bottom: a }, i) || this;
    }
    return t;
  }(fn)
), il = (
  /** @class */
  function() {
    function r(t, e, n, o, a) {
      this._imageDims = new $n(a.width, a.height), this._score = t, this._classScore = e, this._className = n, this._box = new fn(o).rescale(this._imageDims);
    }
    return Object.defineProperty(r.prototype, "score", {
      get: function() {
        return this._score;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "classScore", {
      get: function() {
        return this._classScore;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "className", {
      get: function() {
        return this._className;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "box", {
      get: function() {
        return this._box;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "imageDims", {
      get: function() {
        return this._imageDims;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "imageWidth", {
      get: function() {
        return this.imageDims.width;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "imageHeight", {
      get: function() {
        return this.imageDims.height;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "relativeBox", {
      get: function() {
        return new fn(this._box).rescale(this.imageDims.reverse());
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.forSize = function(t, e) {
      return new r(this.score, this.classScore, this.className, this.relativeBox, { width: t, height: e });
    }, r;
  }()
), Vt = (
  /** @class */
  function(r) {
    oe(t, r);
    function t(e, n, o) {
      return r.call(this, e, e, "", n, o) || this;
    }
    return t.prototype.forSize = function(e, n) {
      var o = r.prototype.forSize.call(this, e, n), a = o.score, i = o.relativeBox, s = o.imageDims;
      return new t(a, i, s);
    }, t;
  }(il)
);
function ny(r, t, e) {
  e === void 0 && (e = !0);
  var n = Math.max(0, Math.min(r.right, t.right) - Math.max(r.left, t.left)), o = Math.max(0, Math.min(r.bottom, t.bottom) - Math.max(r.top, t.top)), a = n * o;
  return e ? a / (r.area + t.area - a) : a / Math.min(r.area, t.area);
}
function ry(r) {
  var t = r.map(function(s) {
    return s.x;
  }), e = r.map(function(s) {
    return s.y;
  }), n = t.reduce(function(s, u) {
    return u < s ? u : s;
  }, 1 / 0), o = e.reduce(function(s, u) {
    return u < s ? u : s;
  }, 1 / 0), a = t.reduce(function(s, u) {
    return s < u ? u : s;
  }, 0), i = e.reduce(function(s, u) {
    return s < u ? u : s;
  }, 0);
  return new Mo(n, o, a, i);
}
function br(r, t, e, n) {
  n === void 0 && (n = !0);
  for (var o = t.map(function(s, u) {
    return { score: s, boxIndex: u };
  }).sort(function(s, u) {
    return s.score - u.score;
  }).map(function(s) {
    return s.boxIndex;
  }), a = [], i = function() {
    var s = o.pop();
    a.push(s);
    for (var u = o, c = [], l = 0; l < u.length; l++) {
      var f = u[l], h = r[s], p = r[f];
      c.push(ny(h, p, n));
    }
    o = o.filter(function(d, m) {
      return c[m] <= e;
    });
  }; o.length > 0; )
    i();
  return a;
}
function Ar(r, t) {
  return X(function() {
    var e = t[0], n = t[1], o = t[2], a = Bt(hr(r.shape.slice(0, 3), [1]), e), i = Bt(hr(r.shape.slice(0, 3), [1]), n), s = Bt(hr(r.shape.slice(0, 3), [1]), o), u = Me([a, i, s], 3);
    return We(r, u);
  });
}
function oy(r, t) {
  return t === void 0 && (t = !1), X(function() {
    var e = r.shape.slice(1), n = e[0], o = e[1];
    if (n === o)
      return r;
    var a = Math.abs(n - o), i = Math.round(a * (t ? 0.5 : 1)), s = n > o ? 2 : 1, u = function(p) {
      var d = r.shape.slice();
      return d[s] = p, Bt(d, 0);
    }, c = u(i), l = a - c.shape[s], f = t && l ? u(l) : null, h = [
      f,
      r,
      c
    ].filter(function(p) {
      return !!p;
    }).map(function(p) {
      return p.toFloat();
    });
    return Me(h, s);
  });
}
function Ca(r) {
  return 1 / (1 + Math.exp(-r));
}
var Pi = (
  /** @class */
  function(r) {
    oe(t, r);
    function t(e, n, o, a, i) {
      return i === void 0 && (i = !1), r.call(this, { x: e, y: n, width: o, height: a }, i) || this;
    }
    return t;
  }(fn)
), ay = 0.5, iy = 0.43, sy = 0.45, bo = (
  /** @class */
  function() {
    function r(t, e, n) {
      n === void 0 && (n = new be(0, 0));
      var o = e.width, a = e.height;
      this._imgDims = new $n(o, a), this._shift = n, this._positions = t.map(function(i) {
        return i.mul(new be(o, a)).add(n);
      });
    }
    return Object.defineProperty(r.prototype, "shift", {
      get: function() {
        return new be(this._shift.x, this._shift.y);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "imageWidth", {
      get: function() {
        return this._imgDims.width;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "imageHeight", {
      get: function() {
        return this._imgDims.height;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "positions", {
      get: function() {
        return this._positions;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "relativePositions", {
      get: function() {
        var t = this;
        return this._positions.map(function(e) {
          return e.sub(t._shift).div(new be(t.imageWidth, t.imageHeight));
        });
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.forSize = function(t, e) {
      return new this.constructor(this.relativePositions, { width: t, height: e });
    }, r.prototype.shiftBy = function(t, e) {
      return new this.constructor(this.relativePositions, this._imgDims, new be(t, e));
    }, r.prototype.shiftByPoint = function(t) {
      return this.shiftBy(t.x, t.y);
    }, r.prototype.align = function(t, e) {
      if (e === void 0 && (e = {}), t) {
        var n = t instanceof Vt ? t.box.floor() : new fn(t);
        return this.shiftBy(n.x, n.y).align(null, e);
      }
      var o = Object.assign({}, { useDlibAlignment: !1, minBoxPadding: 0.2 }, e), a = o.useDlibAlignment, i = o.minBoxPadding;
      return a ? this.alignDlib() : this.alignMinBbox(i);
    }, r.prototype.alignDlib = function() {
      var t = this.getRefPointsForAlignment(), e = t[0], n = t[1], o = t[2], a = function(f) {
        return o.sub(f).magnitude();
      }, i = (a(e) + a(n)) / 2, s = Math.floor(i / sy), u = Fi(t), c = Math.floor(Math.max(0, u.x - ay * s)), l = Math.floor(Math.max(0, u.y - iy * s));
      return new Pi(c, l, Math.min(s, this.imageWidth + c), Math.min(s, this.imageHeight + l));
    }, r.prototype.alignMinBbox = function(t) {
      var e = ry(this.positions);
      return e.pad(e.width * t, e.height * t);
    }, r.prototype.getRefPointsForAlignment = function() {
      throw new Error("getRefPointsForAlignment not implemented by base class");
    }, r;
  }()
), uy = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.getRefPointsForAlignment = function() {
      var e = this.positions;
      return [
        e[0],
        e[1],
        Fi([e[3], e[4]])
      ];
    }, t;
  }(bo)
), cy = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.getJawOutline = function() {
      return this.positions.slice(0, 17);
    }, t.prototype.getLeftEyeBrow = function() {
      return this.positions.slice(17, 22);
    }, t.prototype.getRightEyeBrow = function() {
      return this.positions.slice(22, 27);
    }, t.prototype.getNose = function() {
      return this.positions.slice(27, 36);
    }, t.prototype.getLeftEye = function() {
      return this.positions.slice(36, 42);
    }, t.prototype.getRightEye = function() {
      return this.positions.slice(42, 48);
    }, t.prototype.getMouth = function() {
      return this.positions.slice(48, 68);
    }, t.prototype.getRefPointsForAlignment = function() {
      return [
        this.getLeftEye(),
        this.getRightEye(),
        this.getMouth()
      ].map(Fi);
    }, t;
  }(bo)
), su = (
  /** @class */
  function() {
    function r(t, e) {
      this._label = t, this._distance = e;
    }
    return Object.defineProperty(r.prototype, "label", {
      get: function() {
        return this._label;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "distance", {
      get: function() {
        return this._distance;
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.toString = function(t) {
      return t === void 0 && (t = !0), "" + this.label + (t ? " (" + ey(this.distance) + ")" : "");
    }, r;
  }()
), uu = (
  /** @class */
  function(r) {
    oe(t, r);
    function t(e, n) {
      var o = r.call(this, e) || this;
      return o._label = n, o;
    }
    return t.assertIsValidLabeledBox = function(e, n) {
      if (fn.assertIsValidBox(e, n), !Cn(e.label))
        throw new Error(n + " - expected property label (" + e.label + ") to be a number");
    }, Object.defineProperty(t.prototype, "label", {
      get: function() {
        return this._label;
      },
      enumerable: !0,
      configurable: !0
    }), t;
  }(fn)
), Gr = (
  /** @class */
  function() {
    function r(t, e) {
      if (typeof t != "string")
        throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");
      if (!Array.isArray(e) || e.some(function(n) {
        return !(n instanceof Float32Array);
      }))
        throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");
      this._label = t, this._descriptors = e;
    }
    return Object.defineProperty(r.prototype, "label", {
      get: function() {
        return this._label;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "descriptors", {
      get: function() {
        return this._descriptors;
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.toJSON = function() {
      return {
        label: this.label,
        descriptors: this.descriptors.map(function(t) {
          return Array.from(t);
        })
      };
    }, r.fromJSON = function(t) {
      var e = t.descriptors.map(function(n) {
        return new Float32Array(n);
      });
      return new r(t.label, e);
    }, r;
  }()
);
(function(r) {
  oe(t, r);
  function t(e, n, o, a) {
    var i = r.call(this, e, n) || this;
    return i._score = o, i._classScore = a, i;
  }
  return t.assertIsValidPredictedBox = function(e, n) {
    if (uu.assertIsValidLabeledBox(e, n), !iu(e.score) || !iu(e.classScore))
      throw new Error(n + " - expected properties score (" + e.score + ") and (" + e.classScore + ") to be a number between [0, 1]");
  }, Object.defineProperty(t.prototype, "score", {
    get: function() {
      return this._score;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(t.prototype, "classScore", {
    get: function() {
      return this._classScore;
    },
    enumerable: !0,
    configurable: !0
  }), t;
})(uu);
function ly(r) {
  return r.detection instanceof Vt;
}
function Oi(r, t) {
  var e = { detection: t };
  return Object.assign({}, r, e);
}
function sl() {
  var r = window.fetch || function() {
    throw new Error("fetch - missing fetch implementation for browser environment");
  }, t = function() {
    throw new Error("readFile - filesystem not available for browser environment");
  };
  return {
    Canvas: HTMLCanvasElement,
    CanvasRenderingContext2D,
    Image: HTMLImageElement,
    ImageData,
    Video: HTMLVideoElement,
    createCanvasElement: function() {
      return document.createElement("canvas");
    },
    createImageElement: function() {
      return document.createElement("img");
    },
    fetch: r,
    readFile: t
  };
}
function ul(r) {
  var t = "";
  if (!r)
    try {
      r = require("fs");
    } catch (n) {
      t = n.toString();
    }
  var e = r ? function(n) {
    return new Promise(function(o, a) {
      r.readFile(n, function(i, s) {
        return i ? a(i) : o(s);
      });
    });
  } : function() {
    throw new Error("readFile - failed to require fs in nodejs environment with error: " + t);
  };
  return {
    readFile: e
  };
}
function cl() {
  var r = global.Canvas || global.HTMLCanvasElement, t = global.Image || global.HTMLImageElement, e = function() {
    if (r)
      return new r();
    throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment");
  }, n = function() {
    if (t)
      return new t();
    throw new Error("createImageElement - missing Image implementation for nodejs environment");
  }, o = global.fetch || function() {
    throw new Error("fetch - missing fetch implementation for nodejs environment");
  }, a = ul();
  return Xe({
    Canvas: r || /** @class */
    /* @__PURE__ */ function() {
      function i() {
      }
      return i;
    }(),
    CanvasRenderingContext2D: global.CanvasRenderingContext2D || /** @class */
    /* @__PURE__ */ function() {
      function i() {
      }
      return i;
    }(),
    Image: t || /** @class */
    /* @__PURE__ */ function() {
      function i() {
      }
      return i;
    }(),
    ImageData: global.ImageData || /** @class */
    /* @__PURE__ */ function() {
      function i() {
      }
      return i;
    }(),
    Video: global.HTMLVideoElement || /** @class */
    /* @__PURE__ */ function() {
      function i() {
      }
      return i;
    }(),
    createCanvasElement: e,
    createImageElement: n,
    fetch: o
  }, a);
}
function ll() {
  return typeof window == "object" && typeof document < "u" && typeof HTMLImageElement < "u" && typeof HTMLCanvasElement < "u" && typeof HTMLVideoElement < "u" && typeof ImageData < "u" && typeof CanvasRenderingContext2D < "u";
}
function fl() {
  return typeof global == "object" && typeof require == "function" && typeof module < "u" && typeof process < "u" && !!process.version;
}
var Oe;
function fy() {
  if (!Oe)
    throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");
  return Oe;
}
function $a(r) {
  Oe = r;
}
function Mi() {
  ll() && $a(sl()), fl() && $a(cl());
}
function hy(r) {
  if (Oe || Mi(), !Oe)
    throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");
  var t = r.Canvas, e = t === void 0 ? Oe.Canvas : t, n = r.Image, o = n === void 0 ? Oe.Image : n;
  Oe.Canvas = e, Oe.Image = o, Oe.createCanvasElement = r.createCanvasElement || function() {
    return new e();
  }, Oe.createImageElement = r.createImageElement || function() {
    return new o();
  }, Oe.ImageData = r.ImageData || Oe.ImageData, Oe.Video = r.Video || Oe.Video, Oe.fetch = r.fetch || Oe.fetch, Oe.readFile = r.readFile || Oe.readFile;
}
var Ze = {
  getEnv: fy,
  setEnv: $a,
  initialize: Mi,
  createBrowserEnv: sl,
  createFileSystem: ul,
  createNodejsEnv: cl,
  monkeyPatch: hy,
  isBrowser: ll,
  isNodejs: fl
};
Mi();
function hl(r) {
  return !Ze.isNodejs() && typeof r == "string" ? document.getElementById(r) : r;
}
function Rn(r) {
  var t = Ze.getEnv(), e = t.Canvas, n = t.CanvasRenderingContext2D;
  if (r instanceof n)
    return r;
  var o = hl(r);
  if (!(o instanceof e))
    throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");
  var a = o.getContext("2d");
  if (!a)
    throw new Error("resolveContext2d - canvas 2d context is null");
  return a;
}
var cu;
(function(r) {
  r.TOP_LEFT = "TOP_LEFT", r.TOP_RIGHT = "TOP_RIGHT", r.BOTTOM_LEFT = "BOTTOM_LEFT", r.BOTTOM_RIGHT = "BOTTOM_RIGHT";
})(cu || (cu = {}));
function pl(r) {
  var t = Ze.getEnv(), e = t.Image, n = t.Video;
  return r instanceof e && r.complete || r instanceof n && r.readyState >= 3;
}
function py(r) {
  return new Promise(function(t, e) {
    if (r instanceof Ze.getEnv().Canvas || pl(r))
      return t();
    function n(a) {
      a.currentTarget && (a.currentTarget.removeEventListener("load", n), a.currentTarget.removeEventListener("error", o), t(a));
    }
    function o(a) {
      a.currentTarget && (a.currentTarget.removeEventListener("load", n), a.currentTarget.removeEventListener("error", o), e(a));
    }
    r.addEventListener("load", n), r.addEventListener("error", o);
  });
}
function dl(r) {
  var t = Ze.getEnv(), e = t.Image, n = t.Video;
  return r instanceof e ? new $n(r.naturalWidth, r.naturalHeight) : r instanceof n ? new $n(r.videoWidth, r.videoHeight) : new $n(r.width, r.height);
}
function Bo(r) {
  var t = r.width, e = r.height, n = Ze.getEnv().createCanvasElement, o = n();
  return o.width = t, o.height = e, o;
}
function Bi(r, t) {
  var e = Ze.getEnv().ImageData;
  if (!(r instanceof e) && !pl(r))
    throw new Error("createCanvasFromMedia - media has not finished loading yet");
  var n = dl(r), o = n.width, a = n.height, i = Bo({ width: o, height: a });
  return r instanceof e ? Rn(i).putImageData(r, 0, 0) : Rn(i).drawImage(r, 0, 0, o, a), i;
}
function dy(r, t) {
  return Z(this, void 0, void 0, function() {
    var e, n, o, a, i, s;
    return ee(this, function(u) {
      switch (u.label) {
        case 0:
          return e = Ze.getEnv().createCanvasElement(), n = r.shape.slice(cn(r) ? 1 : 0), o = n[0], a = n[1], i = n[2], s = X(function() {
            return r.as3D(o, a, i).toInt();
          }), [4, Ni.toPixels(s, e)];
        case 1:
          return u.sent(), s.dispose(), [2, e];
      }
    });
  });
}
function lu(r) {
  var t = Ze.getEnv(), e = t.Image, n = t.Canvas, o = t.Video;
  return r instanceof e || r instanceof n || r instanceof o;
}
function vy(r, t, e) {
  e === void 0 && (e = !1);
  var n = Ze.getEnv(), o = n.Image, a = n.Canvas;
  if (!(r instanceof o || r instanceof a))
    throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");
  var i = dl(r), s = t / Math.max(i.height, i.width), u = s * i.width, c = s * i.height, l = Bo({ width: t, height: t }), f = r instanceof a ? r : Bi(r), h = Math.abs(u - c) / 2, p = e && u < c ? h : 0, d = e && c < u ? h : 0;
  return Rn(l).drawImage(f, p, d, u, c), l;
}
var xo = (
  /** @class */
  function() {
    function r(t, e) {
      var n = this;
      if (e === void 0 && (e = !1), this._imageTensors = [], this._canvases = [], this._treatAsBatchInput = !1, this._inputDimensions = [], !Array.isArray(t))
        throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have " + t);
      this._treatAsBatchInput = e, this._batchSize = t.length, t.forEach(function(o, a) {
        if (Oo(o)) {
          n._imageTensors[a] = o, n._inputDimensions[a] = o.shape;
          return;
        }
        if (cn(o)) {
          var i = o.shape[0];
          if (i !== 1)
            throw new Error("NetInput - tf.Tensor4D with batchSize " + i + " passed, but not supported in input array");
          n._imageTensors[a] = o, n._inputDimensions[a] = o.shape.slice(1);
          return;
        }
        var s = o instanceof Ze.getEnv().Canvas ? o : Bi(o);
        n._canvases[a] = s, n._inputDimensions[a] = [s.height, s.width, 3];
      });
    }
    return Object.defineProperty(r.prototype, "imageTensors", {
      get: function() {
        return this._imageTensors;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "canvases", {
      get: function() {
        return this._canvases;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "isBatchInput", {
      get: function() {
        return this.batchSize > 1 || this._treatAsBatchInput;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "batchSize", {
      get: function() {
        return this._batchSize;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "inputDimensions", {
      get: function() {
        return this._inputDimensions;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "inputSize", {
      get: function() {
        return this._inputSize;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "reshapedInputDimensions", {
      get: function() {
        var t = this;
        return yr(this.batchSize, 0, 1).map(function(e, n) {
          return t.getReshapedInputDimensions(n);
        });
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.getInput = function(t) {
      return this.canvases[t] || this.imageTensors[t];
    }, r.prototype.getInputDimensions = function(t) {
      return this._inputDimensions[t];
    }, r.prototype.getInputHeight = function(t) {
      return this._inputDimensions[t][0];
    }, r.prototype.getInputWidth = function(t) {
      return this._inputDimensions[t][1];
    }, r.prototype.getReshapedInputDimensions = function(t) {
      if (typeof this.inputSize != "number")
        throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");
      var e = this.getInputWidth(t), n = this.getInputHeight(t);
      return ty({ width: e, height: n }, this.inputSize);
    }, r.prototype.toBatchTensor = function(t, e) {
      var n = this;
      return e === void 0 && (e = !0), this._inputSize = t, X(function() {
        var o = yr(n.batchSize, 0, 1).map(function(i) {
          var s = n.getInput(i);
          if (s instanceof Se) {
            var u = cn(s) ? s : s.expandDims();
            return u = oy(u, e), (u.shape[1] !== t || u.shape[2] !== t) && (u = Si.resizeBilinear(u, [t, t])), u.as3D(t, t, 3);
          }
          if (s instanceof Ze.getEnv().Canvas)
            return Ni.fromPixels(vy(s, t, e));
          throw new Error("toBatchTensor - at batchIdx " + i + ", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have " + s);
        }), a = dt(o.map(function(i) {
          return i.toFloat();
        })).as4D(n.batchSize, t, t, 3);
        return a;
      });
    }, r;
  }()
);
function He(r) {
  return Z(this, void 0, void 0, function() {
    var t, e, n;
    return ee(this, function(o) {
      switch (o.label) {
        case 0:
          if (r instanceof xo)
            return [2, r];
          if (t = Array.isArray(r) ? r : [r], !t.length)
            throw new Error("toNetInput - empty array passed as input");
          return e = function(a) {
            return Array.isArray(r) ? " at input index " + a + ":" : "";
          }, n = t.map(hl), n.forEach(function(a, i) {
            if (!lu(a) && !Oo(a) && !cn(a))
              throw typeof t[i] == "string" ? new Error("toNetInput -" + e(i) + " string passed, but could not resolve HTMLElement for element id " + t[i]) : new Error("toNetInput -" + e(i) + " expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");
            if (cn(a)) {
              var s = a.shape[0];
              if (s !== 1)
                throw new Error("toNetInput -" + e(i) + " tf.Tensor4D with batchSize " + s + " passed, but not supported in input array");
            }
          }), [4, Promise.all(n.map(function(a) {
            return lu(a) && py(a);
          }))];
        case 1:
          return o.sent(), [2, new xo(n, Array.isArray(r))];
      }
    });
  });
}
function Li(r, t) {
  return Z(this, void 0, void 0, function() {
    var e, n, o, a, i, s, u;
    return ee(this, function(c) {
      switch (c.label) {
        case 0:
          return e = Ze.getEnv().Canvas, n = r, r instanceof e ? [3, 5] : [4, He(r)];
        case 1:
          if (o = c.sent(), o.batchSize > 1)
            throw new Error("extractFaces - batchSize > 1 not supported");
          return a = o.getInput(0), a instanceof e ? (i = a, [3, 4]) : [3, 2];
        case 2:
          return [4, dy(a)];
        case 3:
          i = c.sent(), c.label = 4;
        case 4:
          n = i, c.label = 5;
        case 5:
          return s = Rn(n), u = t.map(function(l) {
            return l instanceof Vt ? l.forSize(n.width, n.height).box.floor() : l;
          }).map(function(l) {
            return l.clipAtImageBorders(n.width, n.height);
          }), [2, u.map(function(l) {
            var f = l.x, h = l.y, p = l.width, d = l.height, m = Bo({ width: p, height: d });
            return Rn(m).putImageData(s.getImageData(f, h, p, d), 0, 0), m;
          })];
      }
    });
  });
}
function Wi(r, t) {
  return Z(this, void 0, void 0, function() {
    return ee(this, function(e) {
      if (!Oo(r) && !cn(r))
        throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");
      if (cn(r) && r.shape[0] > 1)
        throw new Error("extractFaceTensors - batchSize > 1 not supported");
      return [2, X(function() {
        var n = r.shape.slice(cn(r) ? 1 : 0), o = n[0], a = n[1], i = n[2], s = t.map(function(c) {
          return c instanceof Vt ? c.forSize(a, o).box : c;
        }).map(function(c) {
          return c.clipAtImageBorders(a, o);
        }), u = s.map(function(c) {
          var l = c.x, f = c.y, h = c.width, p = c.height;
          return zc(r.as3D(o, a, i), [f, l, 0], [p, h, i]);
        });
        return u;
      })];
    });
  });
}
function my(r, t) {
  return Z(this, void 0, void 0, function() {
    var e, n;
    return ee(this, function(o) {
      switch (o.label) {
        case 0:
          return e = Ze.getEnv().fetch, [4, e(r, t)];
        case 1:
          if (n = o.sent(), !(n.status < 400))
            throw new Error("failed to fetch: (" + n.status + ") " + n.statusText + ", from url: " + n.url);
          return [2, n];
      }
    });
  });
}
function gy(r) {
  return Z(this, void 0, void 0, function() {
    return ee(this, function(t) {
      switch (t.label) {
        case 0:
          return [4, my(r)];
        case 1:
          return [2, t.sent().json()];
      }
    });
  });
}
function vl(r, t) {
  var e = t + "-weights_manifest.json";
  if (!r)
    return {
      modelBaseUri: "",
      manifestUri: e
    };
  if (r === "/")
    return {
      modelBaseUri: "/",
      manifestUri: "/" + e
    };
  var n = r.startsWith("http://") ? "http://" : r.startsWith("https://") ? "https://" : "";
  r = r.replace(n, "");
  var o = r.split("/").filter(function(s) {
    return s;
  }), a = r.endsWith(".json") ? o[o.length - 1] : e, i = n + (r.endsWith(".json") ? o.slice(0, o.length - 1) : o).join("/");
  return i = r.startsWith("/") ? "/" + i : i, {
    modelBaseUri: i,
    manifestUri: i === "/" ? "/" + a : i + "/" + a
  };
}
function yy(r, t) {
  return Z(this, void 0, void 0, function() {
    var e, n, o, a;
    return ee(this, function(i) {
      switch (i.label) {
        case 0:
          return e = vl(r, t), n = e.manifestUri, o = e.modelBaseUri, [4, gy(n)];
        case 1:
          return a = i.sent(), [2, ol.loadWeights(a, o)];
      }
    });
  });
}
var Qt = (
  /** @class */
  function() {
    function r(t) {
      this._name = t, this._params = void 0, this._paramMappings = [];
    }
    return Object.defineProperty(r.prototype, "params", {
      get: function() {
        return this._params;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "paramMappings", {
      get: function() {
        return this._paramMappings;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "isLoaded", {
      get: function() {
        return !!this.params;
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.getParamFromPath = function(t) {
      var e = this.traversePropertyPath(t), n = e.obj, o = e.objProp;
      return n[o];
    }, r.prototype.reassignParamFromPath = function(t, e) {
      var n = this.traversePropertyPath(t), o = n.obj, a = n.objProp;
      o[a].dispose(), o[a] = e;
    }, r.prototype.getParamList = function() {
      var t = this;
      return this._paramMappings.map(function(e) {
        var n = e.paramPath;
        return {
          path: n,
          tensor: t.getParamFromPath(n)
        };
      });
    }, r.prototype.getTrainableParams = function() {
      return this.getParamList().filter(function(t) {
        return t.tensor instanceof Qn;
      });
    }, r.prototype.getFrozenParams = function() {
      return this.getParamList().filter(function(t) {
        return !(t.tensor instanceof Qn);
      });
    }, r.prototype.variable = function() {
      var t = this;
      this.getFrozenParams().forEach(function(e) {
        var n = e.path, o = e.tensor;
        t.reassignParamFromPath(n, o.variable());
      });
    }, r.prototype.freeze = function() {
      var t = this;
      this.getTrainableParams().forEach(function(e) {
        var n = e.path, o = e.tensor, a = je(o.dataSync());
        o.dispose(), t.reassignParamFromPath(n, a);
      });
    }, r.prototype.dispose = function(t) {
      t === void 0 && (t = !0), this.getParamList().forEach(function(e) {
        if (t && e.tensor.isDisposed)
          throw new Error("param tensor has already been disposed for path " + e.path);
        e.tensor.dispose();
      }), this._params = void 0;
    }, r.prototype.serializeParams = function() {
      return new Float32Array(this.getParamList().map(function(t) {
        var e = t.tensor;
        return Array.from(e.dataSync());
      }).reduce(function(t, e) {
        return t.concat(e);
      }));
    }, r.prototype.load = function(t) {
      return Z(this, void 0, void 0, function() {
        return ee(this, function(e) {
          switch (e.label) {
            case 0:
              return t instanceof Float32Array ? (this.extractWeights(t), [
                2
                /*return*/
              ]) : [4, this.loadFromUri(t)];
            case 1:
              return e.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.loadFromUri = function(t) {
      return Z(this, void 0, void 0, function() {
        var e;
        return ee(this, function(n) {
          switch (n.label) {
            case 0:
              if (t && typeof t != "string")
                throw new Error(this._name + ".loadFromUri - expected model uri");
              return [4, yy(t, this.getDefaultModelName())];
            case 1:
              return e = n.sent(), this.loadFromWeightMap(e), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.loadFromDisk = function(t) {
      return Z(this, void 0, void 0, function() {
        var e, n, o, a, i, s, u, c, l, f;
        return ee(this, function(h) {
          switch (h.label) {
            case 0:
              if (t && typeof t != "string")
                throw new Error(this._name + ".loadFromDisk - expected model file path");
              return e = Ze.getEnv().readFile, n = vl(t, this.getDefaultModelName()), o = n.manifestUri, a = n.modelBaseUri, i = function(p) {
                return Promise.all(p.map(function(d) {
                  return e(d).then(function(m) {
                    return m.buffer;
                  });
                }));
              }, s = ol.weightsLoaderFactory(i), l = (c = JSON).parse, [4, e(o)];
            case 1:
              return u = l.apply(c, [h.sent().toString()]), [4, s(u, a)];
            case 2:
              return f = h.sent(), this.loadFromWeightMap(f), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.loadFromWeightMap = function(t) {
      var e = this.extractParamsFromWeigthMap(t), n = e.paramMappings, o = e.params;
      this._paramMappings = n, this._params = o;
    }, r.prototype.extractWeights = function(t) {
      var e = this.extractParams(t), n = e.paramMappings, o = e.params;
      this._paramMappings = n, this._params = o;
    }, r.prototype.traversePropertyPath = function(t) {
      if (!this.params)
        throw new Error("traversePropertyPath - model has no loaded params");
      var e = t.split("/").reduce(function(a, i) {
        if (!a.nextObj.hasOwnProperty(i))
          throw new Error("traversePropertyPath - object does not have property " + i + ", for path " + t);
        return { obj: a.nextObj, objProp: i, nextObj: a.nextObj[i] };
      }, { nextObj: this.params }), n = e.obj, o = e.objProp;
      if (!n || !o || !(n[o] instanceof Se))
        throw new Error("traversePropertyPath - parameter is not a tensor, for path " + t);
      return { obj: n, objProp: o };
    }, r;
  }()
);
function ht(r, t, e) {
  return X(function() {
    var n = wi(r, t.depthwise_filter, t.pointwise_filter, e, "same");
    return n = le(n, t.bias), n;
  });
}
function Ea(r, t, e) {
  return e === void 0 && (e = !1), X(function() {
    var n = Ie(e ? le(yt(r, t.conv0.filters, [2, 2], "same"), t.conv0.bias) : ht(r, t.conv0, [2, 2])), o = ht(n, t.conv1, [1, 1]), a = Ie(le(n, o)), i = ht(a, t.conv2, [1, 1]);
    return Ie(le(n, le(o, i)));
  });
}
function qr(r, t, e, n) {
  return e === void 0 && (e = !1), n === void 0 && (n = !0), X(function() {
    var o = Ie(e ? le(yt(r, t.conv0.filters, n ? [2, 2] : [1, 1], "same"), t.conv0.bias) : ht(r, t.conv0, n ? [2, 2] : [1, 1])), a = ht(o, t.conv1, [1, 1]), i = Ie(le(o, a)), s = ht(i, t.conv2, [1, 1]), u = Ie(le(o, le(a, s))), c = ht(u, t.conv3, [1, 1]);
    return Ie(le(o, le(a, le(s, c))));
  });
}
function wt(r, t, e, n) {
  return e === void 0 && (e = "same"), n === void 0 && (n = !1), X(function() {
    var o = le(yt(r, t.filters, [1, 1], e), t.bias);
    return n ? Ie(o) : o;
  });
}
function Zt(r, t) {
  Object.keys(r).forEach(function(e) {
    t.some(function(n) {
      return n.originalPath === e;
    }) || r[e].dispose();
  });
}
function Lo(r, t) {
  return function(e, n, o, a) {
    var i = et(r(e * n * o * o), [o, o, e, n]), s = Pe(r(n));
    return t.push({ paramPath: a + "/filters" }, { paramPath: a + "/bias" }), { filters: i, bias: s };
  };
}
function Ui(r, t) {
  return function(e, n, o) {
    var a = sn(r(e * n), [e, n]), i = Pe(r(n));
    return t.push({ paramPath: o + "/weights" }, { paramPath: o + "/bias" }), {
      weights: a,
      bias: i
    };
  };
}
var ml = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(t, e, n) {
      this.depthwise_filter = t, this.pointwise_filter = e, this.bias = n;
    }
    return r;
  }()
);
function zi(r, t) {
  return function(e, n, o) {
    var a = et(r(9 * e), [3, 3, e, 1]), i = et(r(e * n), [1, 1, e, n]), s = Pe(r(n));
    return t.push({ paramPath: o + "/depthwise_filter" }, { paramPath: o + "/pointwise_filter" }, { paramPath: o + "/bias" }), new ml(a, i, s);
  };
}
function Vi(r) {
  return function(t) {
    var e = r(t + "/depthwise_filter", 4), n = r(t + "/pointwise_filter", 4), o = r(t + "/bias", 1);
    return new ml(e, n, o);
  };
}
function dn(r, t) {
  return function(e, n, o) {
    var a = r[e];
    if (!Po(a, n))
      throw new Error("expected weightMap[" + e + "] to be a Tensor" + n + "D, instead have " + a);
    return t.push({ originalPath: e, paramPath: o || e }), a;
  };
}
function en(r) {
  var t = r;
  function e(o) {
    var a = t.slice(0, o);
    return t = t.slice(o), a;
  }
  function n() {
    return t;
  }
  return {
    extractWeights: e,
    getRemainingWeights: n
  };
}
function gl(r, t) {
  var e = Lo(r, t), n = zi(r, t);
  function o(i, s, u, c) {
    c === void 0 && (c = !1);
    var l = c ? e(i, s, 3, u + "/conv0") : n(i, s, u + "/conv0"), f = n(s, s, u + "/conv1"), h = n(s, s, u + "/conv2");
    return { conv0: l, conv1: f, conv2: h };
  }
  function a(i, s, u, c) {
    c === void 0 && (c = !1);
    var l = o(i, s, u, c), f = l.conv0, h = l.conv1, p = l.conv2, d = n(s, s, u + "/conv3");
    return { conv0: f, conv1: h, conv2: p, conv3: d };
  }
  return {
    extractDenseBlock3Params: o,
    extractDenseBlock4Params: a
  };
}
function by(r) {
  var t = [], e = en(r), n = e.extractWeights, o = e.getRemainingWeights, a = gl(n, t).extractDenseBlock4Params, i = a(3, 32, "dense0", !0), s = a(32, 64, "dense1"), u = a(64, 128, "dense2"), c = a(128, 256, "dense3");
  if (o().length !== 0)
    throw new Error("weights remaing after extract: " + o().length);
  return {
    paramMappings: t,
    params: { dense0: i, dense1: s, dense2: u, dense3: c }
  };
}
function yl(r) {
  return function(t) {
    var e = r(t + "/filters", 4), n = r(t + "/bias", 1);
    return { filters: e, bias: n };
  };
}
function bl(r, t) {
  var e = dn(r, t), n = yl(e), o = Vi(e);
  function a(s, u) {
    u === void 0 && (u = !1);
    var c = u ? n(s + "/conv0") : o(s + "/conv0"), l = o(s + "/conv1"), f = o(s + "/conv2");
    return { conv0: c, conv1: l, conv2: f };
  }
  function i(s, u) {
    u === void 0 && (u = !1);
    var c = u ? n(s + "/conv0") : o(s + "/conv0"), l = o(s + "/conv1"), f = o(s + "/conv2"), h = o(s + "/conv3");
    return { conv0: c, conv1: l, conv2: f, conv3: h };
  }
  return {
    extractDenseBlock3Params: a,
    extractDenseBlock4Params: i
  };
}
function xy(r) {
  var t = [], e = bl(r, t).extractDenseBlock4Params, n = {
    dense0: e("dense0", !0),
    dense1: e("dense1"),
    dense2: e("dense2"),
    dense3: e("dense3")
  };
  return Zt(r, t), { params: n, paramMappings: t };
}
var xl = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      return r.call(this, "FaceFeatureExtractor") || this;
    }
    return t.prototype.forwardInput = function(e) {
      var n = this.params;
      if (!n)
        throw new Error("FaceFeatureExtractor - load model before inference");
      return X(function() {
        var o = e.toBatchTensor(112, !0), a = [122.782, 117.001, 104.298], i = Ar(o, a).div(j(255)), s = qr(i, n.dense0, !0);
        return s = qr(s, n.dense1), s = qr(s, n.dense2), s = qr(s, n.dense3), s = Ir(s, [7, 7], [2, 2], "valid"), s;
      });
    }, t.prototype.forward = function(e) {
      return Z(this, void 0, void 0, function() {
        var n;
        return ee(this, function(o) {
          switch (o.label) {
            case 0:
              return n = this.forwardInput, [4, He(e)];
            case 1:
              return [2, n.apply(this, [o.sent()])];
          }
        });
      });
    }, t.prototype.getDefaultModelName = function() {
      return "face_feature_extractor_model";
    }, t.prototype.extractParamsFromWeigthMap = function(e) {
      return xy(e);
    }, t.prototype.extractParams = function(e) {
      return by(e);
    }, t;
  }(Qt)
);
function Pt(r, t) {
  return X(function() {
    return le(To(r, t.weights), t.bias);
  });
}
function wy(r, t, e) {
  var n = [], o = en(r), a = o.extractWeights, i = o.getRemainingWeights, s = Ui(a, n), u = s(t, e, "fc");
  if (i().length !== 0)
    throw new Error("weights remaing after extract: " + i().length);
  return {
    paramMappings: n,
    params: { fc: u }
  };
}
function Cy(r) {
  var t = [], e = dn(r, t);
  function n(a) {
    var i = e(a + "/weights", 2), s = e(a + "/bias", 1);
    return { weights: i, bias: s };
  }
  var o = {
    fc: n("fc")
  };
  return Zt(r, t), { params: o, paramMappings: t };
}
function wl(r) {
  var t = {}, e = {};
  return Object.keys(r).forEach(function(n) {
    var o = n.startsWith("fc") ? e : t;
    o[n] = r[n];
  }), { featureExtractorMap: t, classifierMap: e };
}
var Cl = (
  /** @class */
  function(r) {
    oe(t, r);
    function t(e, n) {
      var o = r.call(this, e) || this;
      return o._faceFeatureExtractor = n, o;
    }
    return Object.defineProperty(t.prototype, "faceFeatureExtractor", {
      get: function() {
        return this._faceFeatureExtractor;
      },
      enumerable: !0,
      configurable: !0
    }), t.prototype.runNet = function(e) {
      var n = this, o = this.params;
      if (!o)
        throw new Error(this._name + " - load model before inference");
      return X(function() {
        var a = e instanceof xo ? n.faceFeatureExtractor.forwardInput(e) : e;
        return Pt(a.as2D(a.shape[0], -1), o.fc);
      });
    }, t.prototype.dispose = function(e) {
      e === void 0 && (e = !0), this.faceFeatureExtractor.dispose(e), r.prototype.dispose.call(this, e);
    }, t.prototype.loadClassifierParams = function(e) {
      var n = this.extractClassifierParams(e), o = n.params, a = n.paramMappings;
      this._params = o, this._paramMappings = a;
    }, t.prototype.extractClassifierParams = function(e) {
      return wy(e, this.getClassifierChannelsIn(), this.getClassifierChannelsOut());
    }, t.prototype.extractParamsFromWeigthMap = function(e) {
      var n = wl(e), o = n.featureExtractorMap, a = n.classifierMap;
      return this.faceFeatureExtractor.loadFromWeightMap(o), Cy(a);
    }, t.prototype.extractParams = function(e) {
      var n = this.getClassifierChannelsIn(), o = this.getClassifierChannelsOut(), a = o * n + o, i = e.slice(0, e.length - a), s = e.slice(e.length - a);
      return this.faceFeatureExtractor.extractWeights(i), this.extractClassifierParams(s);
    }, t;
  }(Qt)
), fu = ["neutral", "happy", "sad", "angry", "fearful", "disgusted", "surprised"], Ey = (
  /** @class */
  function() {
    function r(t) {
      var e = this;
      if (t.length !== 7)
        throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: " + t.length);
      fu.forEach(function(n, o) {
        e[n] = t[o];
      });
    }
    return r.prototype.asSortedArray = function() {
      var t = this;
      return fu.map(function(e) {
        return { expression: e, probability: t[e] };
      }).sort(function(e, n) {
        return n.probability - e.probability;
      });
    }, r;
  }()
), _y = (
  /** @class */
  function(r) {
    oe(t, r);
    function t(e) {
      return e === void 0 && (e = new xl()), r.call(this, "FaceExpressionNet", e) || this;
    }
    return t.prototype.forwardInput = function(e) {
      var n = this;
      return X(function() {
        return Yt(n.runNet(e));
      });
    }, t.prototype.forward = function(e) {
      return Z(this, void 0, void 0, function() {
        var n;
        return ee(this, function(o) {
          switch (o.label) {
            case 0:
              return n = this.forwardInput, [4, He(e)];
            case 1:
              return [2, n.apply(this, [o.sent()])];
          }
        });
      });
    }, t.prototype.predictExpressions = function(e) {
      return Z(this, void 0, void 0, function() {
        var n, o, a, i, s = this;
        return ee(this, function(u) {
          switch (u.label) {
            case 0:
              return [4, He(e)];
            case 1:
              return n = u.sent(), [4, this.forwardInput(n)];
            case 2:
              return o = u.sent(), [4, Promise.all(Be(o).map(function(c) {
                return Z(s, void 0, void 0, function() {
                  var l;
                  return ee(this, function(f) {
                    switch (f.label) {
                      case 0:
                        return [4, c.data()];
                      case 1:
                        return l = f.sent(), c.dispose(), [2, l];
                    }
                  });
                });
              }))];
            case 3:
              return a = u.sent(), o.dispose(), i = a.map(function(c) {
                return new Ey(c);
              }), [2, n.isBatchInput ? i : i[0]];
          }
        });
      });
    }, t.prototype.getDefaultModelName = function() {
      return "face_expression_model";
    }, t.prototype.getClassifierChannelsIn = function() {
      return 256;
    }, t.prototype.getClassifierChannelsOut = function() {
      return 7;
    }, t;
  }(Cl)
);
function El(r, t) {
  var e = { expressions: t };
  return Object.assign({}, r, e);
}
function Ry(r) {
  return ly(r) && r.landmarks instanceof bo && r.unshiftedLandmarks instanceof bo && r.alignedRect instanceof Vt;
}
function Hi(r, t) {
  var e = r.detection.box, n = t.shiftBy(e.x, e.y), o = n.align(), a = r.detection.imageDims, i = new Vt(r.detection.score, o.rescale(a.reverse()), a), s = {
    landmarks: n,
    unshiftedLandmarks: t,
    alignedRect: i
  };
  return Object.assign({}, r, s);
}
function Sy(r, t) {
  var e = Lo(r, t), n = zi(r, t);
  function o(i, s, u) {
    var c = n(i, s, u + "/separable_conv0"), l = n(s, s, u + "/separable_conv1"), f = e(i, s, 1, u + "/expansion_conv");
    return { separable_conv0: c, separable_conv1: l, expansion_conv: f };
  }
  function a(i, s) {
    var u = n(i, i, s + "/separable_conv0"), c = n(i, i, s + "/separable_conv1"), l = n(i, i, s + "/separable_conv2");
    return { separable_conv0: u, separable_conv1: c, separable_conv2: l };
  }
  return {
    extractConvParams: e,
    extractSeparableConvParams: n,
    extractReductionBlockParams: o,
    extractMainBlockParams: a
  };
}
function Iy(r, t) {
  var e = [], n = en(r), o = n.extractWeights, a = n.getRemainingWeights, i = Sy(o, e), s = i.extractConvParams, u = i.extractSeparableConvParams, c = i.extractReductionBlockParams, l = i.extractMainBlockParams, f = s(3, 32, 3, "entry_flow/conv_in"), h = c(32, 64, "entry_flow/reduction_block_0"), p = c(64, 128, "entry_flow/reduction_block_1"), d = {
    conv_in: f,
    reduction_block_0: h,
    reduction_block_1: p
  }, m = {};
  yr(t, 0, 1).forEach(function(x) {
    m["main_block_" + x] = l(128, "middle_flow/main_block_" + x);
  });
  var v = c(128, 256, "exit_flow/reduction_block"), g = u(256, 512, "exit_flow/separable_conv"), y = {
    reduction_block: v,
    separable_conv: g
  };
  if (a().length !== 0)
    throw new Error("weights remaing after extract: " + a().length);
  return {
    paramMappings: e,
    params: { entry_flow: d, middle_flow: m, exit_flow: y }
  };
}
function ky(r, t) {
  var e = dn(r, t), n = yl(e), o = Vi(e);
  function a(s) {
    var u = o(s + "/separable_conv0"), c = o(s + "/separable_conv1"), l = n(s + "/expansion_conv");
    return { separable_conv0: u, separable_conv1: c, expansion_conv: l };
  }
  function i(s) {
    var u = o(s + "/separable_conv0"), c = o(s + "/separable_conv1"), l = o(s + "/separable_conv2");
    return { separable_conv0: u, separable_conv1: c, separable_conv2: l };
  }
  return {
    extractConvParams: n,
    extractSeparableConvParams: o,
    extractReductionBlockParams: a,
    extractMainBlockParams: i
  };
}
function Ay(r, t) {
  var e = [], n = ky(r, e), o = n.extractConvParams, a = n.extractSeparableConvParams, i = n.extractReductionBlockParams, s = n.extractMainBlockParams, u = o("entry_flow/conv_in"), c = i("entry_flow/reduction_block_0"), l = i("entry_flow/reduction_block_1"), f = {
    conv_in: u,
    reduction_block_0: c,
    reduction_block_1: l
  }, h = {};
  yr(t, 0, 1).forEach(function(v) {
    h["main_block_" + v] = s("middle_flow/main_block_" + v);
  });
  var p = i("exit_flow/reduction_block"), d = a("exit_flow/separable_conv"), m = {
    reduction_block: p,
    separable_conv: d
  };
  return Zt(r, e), { params: { entry_flow: f, middle_flow: h, exit_flow: m }, paramMappings: e };
}
function _l(r, t, e) {
  return le(yt(r, t.filters, e, "same"), t.bias);
}
function _a(r, t, e) {
  e === void 0 && (e = !0);
  var n = e ? Ie(r) : r;
  return n = ht(n, t.separable_conv0, [1, 1]), n = ht(Ie(n), t.separable_conv1, [1, 1]), n = ze(n, [3, 3], [2, 2], "same"), n = le(n, _l(r, t.expansion_conv, [2, 2])), n;
}
function Dy(r, t) {
  var e = ht(Ie(r), t.separable_conv0, [1, 1]);
  return e = ht(Ie(e), t.separable_conv1, [1, 1]), e = ht(Ie(e), t.separable_conv2, [1, 1]), e = le(e, r), e;
}
var Ty = (
  /** @class */
  function(r) {
    oe(t, r);
    function t(e) {
      var n = r.call(this, "TinyXception") || this;
      return n._numMainBlocks = e, n;
    }
    return t.prototype.forwardInput = function(e) {
      var n = this, o = this.params;
      if (!o)
        throw new Error("TinyXception - load model before inference");
      return X(function() {
        var a = e.toBatchTensor(112, !0), i = [122.782, 117.001, 104.298], s = Ar(a, i).div(j(256)), u = Ie(_l(s, o.entry_flow.conv_in, [2, 2]));
        return u = _a(u, o.entry_flow.reduction_block_0, !1), u = _a(u, o.entry_flow.reduction_block_1), yr(n._numMainBlocks, 0, 1).forEach(function(c) {
          u = Dy(u, o.middle_flow["main_block_" + c]);
        }), u = _a(u, o.exit_flow.reduction_block), u = Ie(ht(u, o.exit_flow.separable_conv, [1, 1])), u;
      });
    }, t.prototype.forward = function(e) {
      return Z(this, void 0, void 0, function() {
        var n;
        return ee(this, function(o) {
          switch (o.label) {
            case 0:
              return n = this.forwardInput, [4, He(e)];
            case 1:
              return [2, n.apply(this, [o.sent()])];
          }
        });
      });
    }, t.prototype.getDefaultModelName = function() {
      return "tiny_xception_model";
    }, t.prototype.extractParamsFromWeigthMap = function(e) {
      return Ay(e, this._numMainBlocks);
    }, t.prototype.extractParams = function(e) {
      return Iy(e, this._numMainBlocks);
    }, t;
  }(Qt)
);
function Ny(r) {
  var t = [], e = en(r), n = e.extractWeights, o = e.getRemainingWeights, a = Ui(n, t), i = a(512, 1, "fc/age"), s = a(512, 2, "fc/gender");
  if (o().length !== 0)
    throw new Error("weights remaing after extract: " + o().length);
  return {
    paramMappings: t,
    params: { fc: { age: i, gender: s } }
  };
}
function Fy(r) {
  var t = [], e = dn(r, t);
  function n(a) {
    var i = e(a + "/weights", 2), s = e(a + "/bias", 1);
    return { weights: i, bias: s };
  }
  var o = {
    fc: {
      age: n("fc/age"),
      gender: n("fc/gender")
    }
  };
  return Zt(r, t), { params: o, paramMappings: t };
}
var wo;
(function(r) {
  r.FEMALE = "female", r.MALE = "male";
})(wo || (wo = {}));
var Py = (
  /** @class */
  function(r) {
    oe(t, r);
    function t(e) {
      e === void 0 && (e = new Ty(2));
      var n = r.call(this, "AgeGenderNet") || this;
      return n._faceFeatureExtractor = e, n;
    }
    return Object.defineProperty(t.prototype, "faceFeatureExtractor", {
      get: function() {
        return this._faceFeatureExtractor;
      },
      enumerable: !0,
      configurable: !0
    }), t.prototype.runNet = function(e) {
      var n = this, o = this.params;
      if (!o)
        throw new Error(this._name + " - load model before inference");
      return X(function() {
        var a = e instanceof xo ? n.faceFeatureExtractor.forwardInput(e) : e, i = Ir(a, [7, 7], [2, 2], "valid").as2D(a.shape[0], -1), s = Pt(i, o.fc.age).as1D(), u = Pt(i, o.fc.gender);
        return { age: s, gender: u };
      });
    }, t.prototype.forwardInput = function(e) {
      var n = this;
      return X(function() {
        var o = n.runNet(e), a = o.age, i = o.gender;
        return { age: a, gender: Yt(i) };
      });
    }, t.prototype.forward = function(e) {
      return Z(this, void 0, void 0, function() {
        var n;
        return ee(this, function(o) {
          switch (o.label) {
            case 0:
              return n = this.forwardInput, [4, He(e)];
            case 1:
              return [2, n.apply(this, [o.sent()])];
          }
        });
      });
    }, t.prototype.predictAgeAndGender = function(e) {
      return Z(this, void 0, void 0, function() {
        var n, o, a, i, s, u, c = this;
        return ee(this, function(l) {
          switch (l.label) {
            case 0:
              return [4, He(e)];
            case 1:
              return n = l.sent(), [4, this.forwardInput(n)];
            case 2:
              return o = l.sent(), a = Be(o.age), i = Be(o.gender), s = a.map(function(f, h) {
                return {
                  ageTensor: f,
                  genderTensor: i[h]
                };
              }), [4, Promise.all(s.map(function(f) {
                var h = f.ageTensor, p = f.genderTensor;
                return Z(c, void 0, void 0, function() {
                  var d, m, v, g, y;
                  return ee(this, function(x) {
                    switch (x.label) {
                      case 0:
                        return [4, h.data()];
                      case 1:
                        return d = x.sent()[0], [4, p.data()];
                      case 2:
                        return m = x.sent()[0], v = m > 0.5, g = v ? wo.MALE : wo.FEMALE, y = v ? m : 1 - m, h.dispose(), p.dispose(), [2, { age: d, gender: g, genderProbability: y }];
                    }
                  });
                });
              }))];
            case 3:
              return u = l.sent(), o.age.dispose(), o.gender.dispose(), [2, n.isBatchInput ? u : u[0]];
          }
        });
      });
    }, t.prototype.getDefaultModelName = function() {
      return "age_gender_model";
    }, t.prototype.dispose = function(e) {
      e === void 0 && (e = !0), this.faceFeatureExtractor.dispose(e), r.prototype.dispose.call(this, e);
    }, t.prototype.loadClassifierParams = function(e) {
      var n = this.extractClassifierParams(e), o = n.params, a = n.paramMappings;
      this._params = o, this._paramMappings = a;
    }, t.prototype.extractClassifierParams = function(e) {
      return Ny(e);
    }, t.prototype.extractParamsFromWeigthMap = function(e) {
      var n = wl(e), o = n.featureExtractorMap, a = n.classifierMap;
      return this.faceFeatureExtractor.loadFromWeightMap(o), Fy(a);
    }, t.prototype.extractParams = function(e) {
      var n = 1539, o = e.slice(0, e.length - n), a = e.slice(e.length - n);
      return this.faceFeatureExtractor.extractWeights(o), this.extractClassifierParams(a);
    }, t;
  }(Qt)
), Rl = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.postProcess = function(e, n, o) {
      var a = o.map(function(s) {
        var u = s.width, c = s.height, l = n / Math.max(c, u);
        return {
          width: u * l,
          height: c * l
        };
      }), i = a.length;
      return X(function() {
        var s = function(h, p) {
          return dt([
            Bt([68], h),
            Bt([68], p)
          ], 1).as2D(1, 136).as1D();
        }, u = function(h, p) {
          var d = a[h], m = d.width, v = d.height;
          return p(m, v) ? Math.abs(m - v) / 2 : 0;
        }, c = function(h) {
          return u(h, function(p, d) {
            return p < d;
          });
        }, l = function(h) {
          return u(h, function(p, d) {
            return d < p;
          });
        }, f = e.mul(Bt([i, 136], n)).sub(dt(Array.from(Array(i), function(h, p) {
          return s(c(p), l(p));
        }))).div(dt(Array.from(Array(i), function(h, p) {
          return s(a[p].width, a[p].height);
        })));
        return f;
      });
    }, t.prototype.forwardInput = function(e) {
      var n = this;
      return X(function() {
        var o = n.runNet(e);
        return n.postProcess(o, e.inputSize, e.inputDimensions.map(function(a) {
          var i = a[0], s = a[1];
          return { height: i, width: s };
        }));
      });
    }, t.prototype.forward = function(e) {
      return Z(this, void 0, void 0, function() {
        var n;
        return ee(this, function(o) {
          switch (o.label) {
            case 0:
              return n = this.forwardInput, [4, He(e)];
            case 1:
              return [2, n.apply(this, [o.sent()])];
          }
        });
      });
    }, t.prototype.detectLandmarks = function(e) {
      return Z(this, void 0, void 0, function() {
        var n, o, a, i = this;
        return ee(this, function(s) {
          switch (s.label) {
            case 0:
              return [4, He(e)];
            case 1:
              return n = s.sent(), o = X(function() {
                return Be(i.forwardInput(n));
              }), [4, Promise.all(o.map(function(u, c) {
                return Z(i, void 0, void 0, function() {
                  var l, f, h, p, d;
                  return ee(this, function(m) {
                    switch (m.label) {
                      case 0:
                        return h = (f = Array).from, [4, u.data()];
                      case 1:
                        return l = h.apply(f, [m.sent()]), p = l.filter(function(v, g) {
                          return ou(g);
                        }), d = l.filter(function(v, g) {
                          return !ou(g);
                        }), [2, new cy(Array(68).fill(0).map(function(v, g) {
                          return new be(p[g], d[g]);
                        }), {
                          height: n.getInputHeight(c),
                          width: n.getInputWidth(c)
                        })];
                    }
                  });
                });
              }))];
            case 2:
              return a = s.sent(), o.forEach(function(u) {
                return u.dispose();
              }), [2, n.isBatchInput ? a : a[0]];
          }
        });
      });
    }, t.prototype.getClassifierChannelsOut = function() {
      return 136;
    }, t;
  }(Cl)
), Sl = (
  /** @class */
  function(r) {
    oe(t, r);
    function t(e) {
      return e === void 0 && (e = new xl()), r.call(this, "FaceLandmark68Net", e) || this;
    }
    return t.prototype.getDefaultModelName = function() {
      return "face_landmark_68_model";
    }, t.prototype.getClassifierChannelsIn = function() {
      return 256;
    }, t;
  }(Rl)
);
function Oy(r) {
  var t = [], e = bl(r, t).extractDenseBlock3Params, n = {
    dense0: e("dense0", !0),
    dense1: e("dense1"),
    dense2: e("dense2")
  };
  return Zt(r, t), { params: n, paramMappings: t };
}
function My(r) {
  var t = [], e = en(r), n = e.extractWeights, o = e.getRemainingWeights, a = gl(n, t).extractDenseBlock3Params, i = a(3, 32, "dense0", !0), s = a(32, 64, "dense1"), u = a(64, 128, "dense2");
  if (o().length !== 0)
    throw new Error("weights remaing after extract: " + o().length);
  return {
    paramMappings: t,
    params: { dense0: i, dense1: s, dense2: u }
  };
}
var By = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      return r.call(this, "TinyFaceFeatureExtractor") || this;
    }
    return t.prototype.forwardInput = function(e) {
      var n = this.params;
      if (!n)
        throw new Error("TinyFaceFeatureExtractor - load model before inference");
      return X(function() {
        var o = e.toBatchTensor(112, !0), a = [122.782, 117.001, 104.298], i = Ar(o, a).div(j(255)), s = Ea(i, n.dense0, !0);
        return s = Ea(s, n.dense1), s = Ea(s, n.dense2), s = Ir(s, [14, 14], [2, 2], "valid"), s;
      });
    }, t.prototype.forward = function(e) {
      return Z(this, void 0, void 0, function() {
        var n;
        return ee(this, function(o) {
          switch (o.label) {
            case 0:
              return n = this.forwardInput, [4, He(e)];
            case 1:
              return [2, n.apply(this, [o.sent()])];
          }
        });
      });
    }, t.prototype.getDefaultModelName = function() {
      return "face_feature_extractor_tiny_model";
    }, t.prototype.extractParamsFromWeigthMap = function(e) {
      return Oy(e);
    }, t.prototype.extractParams = function(e) {
      return My(e);
    }, t;
  }(Qt)
), Ly = (
  /** @class */
  function(r) {
    oe(t, r);
    function t(e) {
      return e === void 0 && (e = new By()), r.call(this, "FaceLandmark68TinyNet", e) || this;
    }
    return t.prototype.getDefaultModelName = function() {
      return "face_landmark_68_tiny_model";
    }, t.prototype.getClassifierChannelsIn = function() {
      return 128;
    }, t;
  }(Rl)
);
(function(r) {
  oe(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t;
})(Sl);
function Wy(r, t) {
  return le(Qe(r, t.weights), t.biases);
}
function Gi(r, t, e, n, o) {
  o === void 0 && (o = "same");
  var a = t.conv, i = a.filters, s = a.bias, u = yt(r, i, e, o);
  return u = le(u, s), u = Wy(u, t.scale), n ? Ie(u) : u;
}
function Uy(r, t) {
  return Gi(r, t, [1, 1], !0);
}
function Il(r, t) {
  return Gi(r, t, [1, 1], !1);
}
function kl(r, t) {
  return Gi(r, t, [2, 2], !0, "valid");
}
function zy(r, t) {
  function e(s, u, c) {
    var l = r(s), f = l.length / (u * c * c);
    if (Zg(f))
      throw new Error("depth has to be an integer: " + f + ", weights.length: " + l.length + ", numFilters: " + u + ", filterSize: " + c);
    return X(function() {
      return ln(et(l, [u, f, c, c]), [2, 3, 1, 0]);
    });
  }
  function n(s, u, c, l) {
    var f = e(s, u, c), h = Pe(r(u));
    return t.push({ paramPath: l + "/filters" }, { paramPath: l + "/bias" }), { filters: f, bias: h };
  }
  function o(s, u) {
    var c = Pe(r(s)), l = Pe(r(s));
    return t.push({ paramPath: u + "/weights" }, { paramPath: u + "/biases" }), {
      weights: c,
      biases: l
    };
  }
  function a(s, u, c, l) {
    var f = n(s, u, c, l + "/conv"), h = o(u, l + "/scale");
    return { conv: f, scale: h };
  }
  function i(s, u, c, l, f) {
    f === void 0 && (f = !1);
    var h = a((f ? 0.5 : 1) * s, u, c, l + "/conv1"), p = a(s, u, c, l + "/conv2");
    return { conv1: h, conv2: p };
  }
  return {
    extractConvLayerParams: a,
    extractResidualLayerParams: i
  };
}
function Vy(r) {
  var t = en(r), e = t.extractWeights, n = t.getRemainingWeights, o = [], a = zy(e, o), i = a.extractConvLayerParams, s = a.extractResidualLayerParams, u = i(4704, 32, 7, "conv32_down"), c = s(9216, 32, 3, "conv32_1"), l = s(9216, 32, 3, "conv32_2"), f = s(9216, 32, 3, "conv32_3"), h = s(36864, 64, 3, "conv64_down", !0), p = s(36864, 64, 3, "conv64_1"), d = s(36864, 64, 3, "conv64_2"), m = s(36864, 64, 3, "conv64_3"), v = s(147456, 128, 3, "conv128_down", !0), g = s(147456, 128, 3, "conv128_1"), y = s(147456, 128, 3, "conv128_2"), x = s(589824, 256, 3, "conv256_down", !0), b = s(589824, 256, 3, "conv256_1"), w = s(589824, 256, 3, "conv256_2"), C = s(589824, 256, 3, "conv256_down_out"), k = X(function() {
    return ln(sn(e(256 * 128), [128, 256]), [1, 0]);
  });
  if (o.push({ paramPath: "fc" }), n().length !== 0)
    throw new Error("weights remaing after extract: " + n().length);
  var I = {
    conv32_down: u,
    conv32_1: c,
    conv32_2: l,
    conv32_3: f,
    conv64_down: h,
    conv64_1: p,
    conv64_2: d,
    conv64_3: m,
    conv128_down: v,
    conv128_1: g,
    conv128_2: y,
    conv256_down: x,
    conv256_1: b,
    conv256_2: w,
    conv256_down_out: C,
    fc: k
  };
  return { params: I, paramMappings: o };
}
function Hy(r, t) {
  var e = dn(r, t);
  function n(i) {
    var s = e(i + "/scale/weights", 1), u = e(i + "/scale/biases", 1);
    return { weights: s, biases: u };
  }
  function o(i) {
    var s = e(i + "/conv/filters", 4), u = e(i + "/conv/bias", 1), c = n(i);
    return { conv: { filters: s, bias: u }, scale: c };
  }
  function a(i) {
    return {
      conv1: o(i + "/conv1"),
      conv2: o(i + "/conv2")
    };
  }
  return {
    extractConvLayerParams: o,
    extractResidualLayerParams: a
  };
}
function Gy(r) {
  var t = [], e = Hy(r, t), n = e.extractConvLayerParams, o = e.extractResidualLayerParams, a = n("conv32_down"), i = o("conv32_1"), s = o("conv32_2"), u = o("conv32_3"), c = o("conv64_down"), l = o("conv64_1"), f = o("conv64_2"), h = o("conv64_3"), p = o("conv128_down"), d = o("conv128_1"), m = o("conv128_2"), v = o("conv256_down"), g = o("conv256_1"), y = o("conv256_2"), x = o("conv256_down_out"), b = r.fc;
  if (t.push({ originalPath: "fc", paramPath: "fc" }), !Qg(b))
    throw new Error("expected weightMap[fc] to be a Tensor2D, instead have " + b);
  var w = {
    conv32_down: a,
    conv32_1: i,
    conv32_2: s,
    conv32_3: u,
    conv64_down: c,
    conv64_1: l,
    conv64_2: f,
    conv64_3: h,
    conv128_down: p,
    conv128_1: d,
    conv128_2: m,
    conv256_down: v,
    conv256_1: g,
    conv256_2: y,
    conv256_down_out: x,
    fc: b
  };
  return Zt(r, t), { params: w, paramMappings: t };
}
function kt(r, t) {
  var e = Uy(r, t.conv1);
  return e = Il(e, t.conv2), e = le(e, r), e = Ie(e), e;
}
function jr(r, t) {
  var e = kl(r, t.conv1);
  e = Il(e, t.conv2);
  var n = Ir(r, 2, 2, "valid"), o = Ee(n.shape), a = n.shape[3] !== e.shape[3], i = n.shape[1] !== e.shape[1] || n.shape[2] !== e.shape[2];
  if (i) {
    var s = hr(e.shape);
    s[1] = 1;
    var u = Ee(s);
    e = Me([e, u], 1);
    var c = hr(e.shape);
    c[2] = 1;
    var l = Ee(c);
    e = Me([e, l], 2);
  }
  return n = a ? Me([n, o], 3) : n, e = le(n, e), e = Ie(e), e;
}
var qy = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      return r.call(this, "FaceRecognitionNet") || this;
    }
    return t.prototype.forwardInput = function(e) {
      var n = this.params;
      if (!n)
        throw new Error("FaceRecognitionNet - load model before inference");
      return X(function() {
        var o = e.toBatchTensor(150, !0).toFloat(), a = [122.782, 117.001, 104.298], i = Ar(o, a).div(j(256)), s = kl(i, n.conv32_down);
        s = ze(s, 3, 2, "valid"), s = kt(s, n.conv32_1), s = kt(s, n.conv32_2), s = kt(s, n.conv32_3), s = jr(s, n.conv64_down), s = kt(s, n.conv64_1), s = kt(s, n.conv64_2), s = kt(s, n.conv64_3), s = jr(s, n.conv128_down), s = kt(s, n.conv128_1), s = kt(s, n.conv128_2), s = jr(s, n.conv256_down), s = kt(s, n.conv256_1), s = kt(s, n.conv256_2), s = jr(s, n.conv256_down_out);
        var u = s.mean([1, 2]), c = To(u, n.fc);
        return c;
      });
    }, t.prototype.forward = function(e) {
      return Z(this, void 0, void 0, function() {
        var n;
        return ee(this, function(o) {
          switch (o.label) {
            case 0:
              return n = this.forwardInput, [4, He(e)];
            case 1:
              return [2, n.apply(this, [o.sent()])];
          }
        });
      });
    }, t.prototype.computeFaceDescriptor = function(e) {
      return Z(this, void 0, void 0, function() {
        var n, o, a, i = this;
        return ee(this, function(s) {
          switch (s.label) {
            case 0:
              return [4, He(e)];
            case 1:
              return n = s.sent(), o = X(function() {
                return Be(i.forwardInput(n));
              }), [4, Promise.all(o.map(function(u) {
                return u.data();
              }))];
            case 2:
              return a = s.sent(), o.forEach(function(u) {
                return u.dispose();
              }), [2, n.isBatchInput ? a : a[0]];
          }
        });
      });
    }, t.prototype.getDefaultModelName = function() {
      return "face_recognition_model";
    }, t.prototype.extractParamsFromWeigthMap = function(e) {
      return Gy(e);
    }, t.prototype.extractParams = function(e) {
      return Vy(e);
    }, t;
  }(Qt)
);
function Al(r, t) {
  var e = { descriptor: t };
  return Object.assign({}, r, e);
}
function Dl(r, t) {
  var e = { age: t };
  return Object.assign({}, r, e);
}
function Tl(r, t, e) {
  var n = { gender: t, genderProbability: e };
  return Object.assign({}, r, n);
}
var Nl = (
  /** @class */
  function() {
    function r(t) {
      var e = t === void 0 ? {} : t, n = e.minFaceSize, o = e.scaleFactor, a = e.maxNumScales, i = e.scoreThresholds, s = e.scaleSteps;
      if (this._name = "MtcnnOptions", this._minFaceSize = n || 20, this._scaleFactor = o || 0.709, this._maxNumScales = a || 10, this._scoreThresholds = i || [0.6, 0.7, 0.7], this._scaleSteps = s, typeof this._minFaceSize != "number" || this._minFaceSize < 0)
        throw new Error(this._name + " - expected minFaceSize to be a number > 0");
      if (typeof this._scaleFactor != "number" || this._scaleFactor <= 0 || this._scaleFactor >= 1)
        throw new Error(this._name + " - expected scaleFactor to be a number between 0 and 1");
      if (typeof this._maxNumScales != "number" || this._maxNumScales < 0)
        throw new Error(this._name + " - expected maxNumScales to be a number > 0");
      if (!Array.isArray(this._scoreThresholds) || this._scoreThresholds.length !== 3 || this._scoreThresholds.some(function(u) {
        return typeof u != "number";
      }))
        throw new Error(this._name + " - expected scoreThresholds to be an array of numbers of length 3");
      if (this._scaleSteps && (!Array.isArray(this._scaleSteps) || this._scaleSteps.some(function(u) {
        return typeof u != "number";
      })))
        throw new Error(this._name + " - expected scaleSteps to be an array of numbers");
    }
    return Object.defineProperty(r.prototype, "minFaceSize", {
      get: function() {
        return this._minFaceSize;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "scaleFactor", {
      get: function() {
        return this._scaleFactor;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "maxNumScales", {
      get: function() {
        return this._maxNumScales;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "scoreThresholds", {
      get: function() {
        return this._scoreThresholds;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "scaleSteps", {
      get: function() {
        return this._scaleSteps;
      },
      enumerable: !0,
      configurable: !0
    }), r;
  }()
);
function jy(r, t) {
  function e(u, c) {
    var l = et(r(9 * u), [3, 3, u, 1]), f = Pe(r(u)), h = Pe(r(u)), p = Pe(r(u)), d = Pe(r(u));
    return t.push({ paramPath: c + "/filters" }, { paramPath: c + "/batch_norm_scale" }, { paramPath: c + "/batch_norm_offset" }, { paramPath: c + "/batch_norm_mean" }, { paramPath: c + "/batch_norm_variance" }), {
      filters: l,
      batch_norm_scale: f,
      batch_norm_offset: h,
      batch_norm_mean: p,
      batch_norm_variance: d
    };
  }
  function n(u, c, l, f, h) {
    var p = et(r(u * c * l * l), [l, l, u, c]), d = Pe(r(c));
    return t.push({ paramPath: f + "/filters" }, { paramPath: f + "/" + (h ? "batch_norm_offset" : "bias") }), { filters: p, bias: d };
  }
  function o(u, c, l, f) {
    var h = n(u, c, l, f, !0), p = h.filters, d = h.bias;
    return {
      filters: p,
      batch_norm_offset: d
    };
  }
  function a(u, c, l) {
    var f = e(u, l + "/depthwise_conv"), h = o(u, c, 1, l + "/pointwise_conv");
    return { depthwise_conv: f, pointwise_conv: h };
  }
  function i() {
    var u = o(3, 32, 3, "mobilenetv1/conv_0"), c = a(32, 64, "mobilenetv1/conv_1"), l = a(64, 128, "mobilenetv1/conv_2"), f = a(128, 128, "mobilenetv1/conv_3"), h = a(128, 256, "mobilenetv1/conv_4"), p = a(256, 256, "mobilenetv1/conv_5"), d = a(256, 512, "mobilenetv1/conv_6"), m = a(512, 512, "mobilenetv1/conv_7"), v = a(512, 512, "mobilenetv1/conv_8"), g = a(512, 512, "mobilenetv1/conv_9"), y = a(512, 512, "mobilenetv1/conv_10"), x = a(512, 512, "mobilenetv1/conv_11"), b = a(512, 1024, "mobilenetv1/conv_12"), w = a(1024, 1024, "mobilenetv1/conv_13");
    return {
      conv_0: u,
      conv_1: c,
      conv_2: l,
      conv_3: f,
      conv_4: h,
      conv_5: p,
      conv_6: d,
      conv_7: m,
      conv_8: v,
      conv_9: g,
      conv_10: y,
      conv_11: x,
      conv_12: b,
      conv_13: w
    };
  }
  function s() {
    var u = o(1024, 256, 1, "prediction_layer/conv_0"), c = o(256, 512, 3, "prediction_layer/conv_1"), l = o(512, 128, 1, "prediction_layer/conv_2"), f = o(128, 256, 3, "prediction_layer/conv_3"), h = o(256, 128, 1, "prediction_layer/conv_4"), p = o(128, 256, 3, "prediction_layer/conv_5"), d = o(256, 64, 1, "prediction_layer/conv_6"), m = o(64, 128, 3, "prediction_layer/conv_7"), v = n(512, 12, 1, "prediction_layer/box_predictor_0/box_encoding_predictor"), g = n(512, 9, 1, "prediction_layer/box_predictor_0/class_predictor"), y = n(1024, 24, 1, "prediction_layer/box_predictor_1/box_encoding_predictor"), x = n(1024, 18, 1, "prediction_layer/box_predictor_1/class_predictor"), b = n(512, 24, 1, "prediction_layer/box_predictor_2/box_encoding_predictor"), w = n(512, 18, 1, "prediction_layer/box_predictor_2/class_predictor"), C = n(256, 24, 1, "prediction_layer/box_predictor_3/box_encoding_predictor"), k = n(256, 18, 1, "prediction_layer/box_predictor_3/class_predictor"), I = n(256, 24, 1, "prediction_layer/box_predictor_4/box_encoding_predictor"), R = n(256, 18, 1, "prediction_layer/box_predictor_4/class_predictor"), S = n(128, 24, 1, "prediction_layer/box_predictor_5/box_encoding_predictor"), N = n(128, 18, 1, "prediction_layer/box_predictor_5/class_predictor"), D = {
      box_encoding_predictor: v,
      class_predictor: g
    }, W = {
      box_encoding_predictor: y,
      class_predictor: x
    }, B = {
      box_encoding_predictor: b,
      class_predictor: w
    }, L = {
      box_encoding_predictor: C,
      class_predictor: k
    }, V = {
      box_encoding_predictor: I,
      class_predictor: R
    }, z = {
      box_encoding_predictor: S,
      class_predictor: N
    };
    return {
      conv_0: u,
      conv_1: c,
      conv_2: l,
      conv_3: f,
      conv_4: h,
      conv_5: p,
      conv_6: d,
      conv_7: m,
      box_predictor_0: D,
      box_predictor_1: W,
      box_predictor_2: B,
      box_predictor_3: L,
      box_predictor_4: V,
      box_predictor_5: z
    };
  }
  return {
    extractMobilenetV1Params: i,
    extractPredictionLayerParams: s
  };
}
function Ky(r) {
  var t = [], e = en(r), n = e.extractWeights, o = e.getRemainingWeights, a = jy(n, t), i = a.extractMobilenetV1Params, s = a.extractPredictionLayerParams, u = i(), c = s(), l = ii(n(5118 * 4), [1, 5118, 4]), f = {
    extra_dim: l
  };
  if (t.push({ paramPath: "output_layer/extra_dim" }), o().length !== 0)
    throw new Error("weights remaing after extract: " + o().length);
  return {
    params: {
      mobilenetv1: u,
      prediction_layer: c,
      output_layer: f
    },
    paramMappings: t
  };
}
function Xy(r, t) {
  var e = dn(r, t);
  function n(c, l, f) {
    var h = e(c + "/Conv2d_" + l + "_pointwise/weights", 4, f + "/filters"), p = e(c + "/Conv2d_" + l + "_pointwise/convolution_bn_offset", 1, f + "/batch_norm_offset");
    return { filters: h, batch_norm_offset: p };
  }
  function o(c) {
    var l = "mobilenetv1/conv_" + c, f = "MobilenetV1/Conv2d_" + c + "_depthwise", h = l + "/depthwise_conv", p = l + "/pointwise_conv", d = e(f + "/depthwise_weights", 4, h + "/filters"), m = e(f + "/BatchNorm/gamma", 1, h + "/batch_norm_scale"), v = e(f + "/BatchNorm/beta", 1, h + "/batch_norm_offset"), g = e(f + "/BatchNorm/moving_mean", 1, h + "/batch_norm_mean"), y = e(f + "/BatchNorm/moving_variance", 1, h + "/batch_norm_variance");
    return {
      depthwise_conv: {
        filters: d,
        batch_norm_scale: m,
        batch_norm_offset: v,
        batch_norm_mean: g,
        batch_norm_variance: y
      },
      pointwise_conv: n("MobilenetV1", c, p)
    };
  }
  function a() {
    return {
      conv_0: n("MobilenetV1", 0, "mobilenetv1/conv_0"),
      conv_1: o(1),
      conv_2: o(2),
      conv_3: o(3),
      conv_4: o(4),
      conv_5: o(5),
      conv_6: o(6),
      conv_7: o(7),
      conv_8: o(8),
      conv_9: o(9),
      conv_10: o(10),
      conv_11: o(11),
      conv_12: o(12),
      conv_13: o(13)
    };
  }
  function i(c, l) {
    var f = e(c + "/weights", 4, l + "/filters"), h = e(c + "/biases", 1, l + "/bias");
    return { filters: f, bias: h };
  }
  function s(c) {
    var l = i("Prediction/BoxPredictor_" + c + "/BoxEncodingPredictor", "prediction_layer/box_predictor_" + c + "/box_encoding_predictor"), f = i("Prediction/BoxPredictor_" + c + "/ClassPredictor", "prediction_layer/box_predictor_" + c + "/class_predictor");
    return { box_encoding_predictor: l, class_predictor: f };
  }
  function u() {
    return {
      conv_0: n("Prediction", 0, "prediction_layer/conv_0"),
      conv_1: n("Prediction", 1, "prediction_layer/conv_1"),
      conv_2: n("Prediction", 2, "prediction_layer/conv_2"),
      conv_3: n("Prediction", 3, "prediction_layer/conv_3"),
      conv_4: n("Prediction", 4, "prediction_layer/conv_4"),
      conv_5: n("Prediction", 5, "prediction_layer/conv_5"),
      conv_6: n("Prediction", 6, "prediction_layer/conv_6"),
      conv_7: n("Prediction", 7, "prediction_layer/conv_7"),
      box_predictor_0: s(0),
      box_predictor_1: s(1),
      box_predictor_2: s(2),
      box_predictor_3: s(3),
      box_predictor_4: s(4),
      box_predictor_5: s(5)
    };
  }
  return {
    extractMobilenetV1Params: a,
    extractPredictionLayerParams: u
  };
}
function $y(r) {
  var t = [], e = Xy(r, t), n = e.extractMobilenetV1Params, o = e.extractPredictionLayerParams, a = r["Output/extra_dim"];
  if (t.push({ originalPath: "Output/extra_dim", paramPath: "output_layer/extra_dim" }), !Oo(a))
    throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have " + a);
  var i = {
    mobilenetv1: n(),
    prediction_layer: o(),
    output_layer: {
      extra_dim: a
    }
  };
  return Zt(r, t), { params: i, paramMappings: t };
}
function Dt(r, t, e) {
  return X(function() {
    var n = yt(r, t.filters, e, "same");
    return n = le(n, t.batch_norm_offset), gi(n, 0, 6);
  });
}
var Yy = 0.0010000000474974513;
function Jy(r, t, e) {
  return X(function() {
    var n = Do(r, t.filters, e, "same");
    return n = Sc(n, t.batch_norm_mean, t.batch_norm_variance, t.batch_norm_offset, t.batch_norm_scale, Yy), gi(n, 0, 6);
  });
}
function Qy(r) {
  return [2, 4, 6, 12].some(function(t) {
    return t === r;
  }) ? [2, 2] : [1, 1];
}
function Zy(r, t) {
  return X(function() {
    var e = null, n = Dt(r, t.conv_0, [2, 2]), o = [
      t.conv_1,
      t.conv_2,
      t.conv_3,
      t.conv_4,
      t.conv_5,
      t.conv_6,
      t.conv_7,
      t.conv_8,
      t.conv_9,
      t.conv_10,
      t.conv_11,
      t.conv_12,
      t.conv_13
    ];
    if (o.forEach(function(a, i) {
      var s = i + 1, u = Qy(s);
      n = Jy(n, a.depthwise_conv, u), n = Dt(n, a.pointwise_conv, [1, 1]), s === 11 && (e = n);
    }), e === null)
      throw new Error("mobileNetV1 - output of conv layer 11 is null");
    return {
      out: n,
      conv11: e
    };
  });
}
function e0(r, t, e, n, o) {
  var a = r.shape[0], i = Math.min(e, a), s = t.map(function(l, f) {
    return { score: l, boxIndex: f };
  }).filter(function(l) {
    return l.score > o;
  }).sort(function(l, f) {
    return f.score - l.score;
  }), u = function(l) {
    return l <= n ? 1 : 0;
  }, c = [];
  return s.forEach(function(l) {
    if (!(c.length >= i)) {
      for (var f = l.score, h = c.length - 1; h >= 0; --h) {
        var p = t0(r, l.boxIndex, c[h]);
        if (p !== 0 && (l.score *= u(p), l.score <= o))
          break;
      }
      f === l.score && c.push(l.boxIndex);
    }
  }), c;
}
function t0(r, t, e) {
  var n = r.arraySync(), o = Math.min(n[t][0], n[t][2]), a = Math.min(n[t][1], n[t][3]), i = Math.max(n[t][0], n[t][2]), s = Math.max(n[t][1], n[t][3]), u = Math.min(n[e][0], n[e][2]), c = Math.min(n[e][1], n[e][3]), l = Math.max(n[e][0], n[e][2]), f = Math.max(n[e][1], n[e][3]), h = (i - o) * (s - a), p = (l - u) * (f - c);
  if (h <= 0 || p <= 0)
    return 0;
  var d = Math.max(o, u), m = Math.max(a, c), v = Math.min(i, l), g = Math.min(s, f), y = Math.max(v - d, 0) * Math.max(g - m, 0);
  return y / (h + p - y);
}
function n0(r) {
  var t = Be(ln(r, [1, 0])), e = [
    We(t[2], t[0]),
    We(t[3], t[1])
  ], n = [
    le(t[0], bt(e[0], j(2))),
    le(t[1], bt(e[1], j(2)))
  ];
  return {
    sizes: e,
    centers: n
  };
}
function r0(r, t) {
  var e = n0(r), n = e.sizes, o = e.centers, a = Be(ln(t, [1, 0])), i = bt(Qe(Va(bt(a[2], j(5))), n[0]), j(2)), s = le(Qe(bt(a[0], j(10)), n[0]), o[0]), u = bt(Qe(Va(bt(a[3], j(5))), n[1]), j(2)), c = le(Qe(bt(a[1], j(10)), n[1]), o[1]);
  return ln(dt([
    We(s, i),
    We(c, u),
    le(s, i),
    le(c, u)
  ]), [1, 0]);
}
function o0(r, t, e) {
  return X(function() {
    var n = r.shape[0], o = r0(xt(Gn(e.extra_dim, [n, 1, 1]), [-1, 4]), xt(r, [-1, 4]));
    o = xt(o, [n, o.shape[0] / n, 4]);
    var a = Cc(Lt(t, [0, 0, 1], [-1, -1, -1])), i = Lt(a, [0, 0, 0], [-1, -1, 1]);
    i = xt(i, [n, i.shape[1]]);
    var s = Be(o), u = Be(i);
    return {
      boxes: s,
      scores: u
    };
  });
}
function Ln(r, t) {
  return X(function() {
    var e = r.shape[0], n = xt(wt(r, t.box_encoding_predictor), [e, -1, 1, 4]), o = xt(wt(r, t.class_predictor), [e, -1, 3]);
    return {
      boxPredictionEncoding: n,
      classPrediction: o
    };
  });
}
function a0(r, t, e) {
  return X(function() {
    var n = Dt(r, e.conv_0, [1, 1]), o = Dt(n, e.conv_1, [2, 2]), a = Dt(o, e.conv_2, [1, 1]), i = Dt(a, e.conv_3, [2, 2]), s = Dt(i, e.conv_4, [1, 1]), u = Dt(s, e.conv_5, [2, 2]), c = Dt(u, e.conv_6, [1, 1]), l = Dt(c, e.conv_7, [2, 2]), f = Ln(t, e.box_predictor_0), h = Ln(r, e.box_predictor_1), p = Ln(o, e.box_predictor_2), d = Ln(i, e.box_predictor_3), m = Ln(u, e.box_predictor_4), v = Ln(l, e.box_predictor_5), g = Me([
      f.boxPredictionEncoding,
      h.boxPredictionEncoding,
      p.boxPredictionEncoding,
      d.boxPredictionEncoding,
      m.boxPredictionEncoding,
      v.boxPredictionEncoding
    ], 1), y = Me([
      f.classPrediction,
      h.classPrediction,
      p.classPrediction,
      d.classPrediction,
      m.classPrediction,
      v.classPrediction
    ], 1);
    return {
      boxPredictions: g,
      classPredictions: y
    };
  });
}
var Wo = (
  /** @class */
  function() {
    function r(t) {
      var e = t === void 0 ? {} : t, n = e.minConfidence, o = e.maxResults;
      if (this._name = "SsdMobilenetv1Options", this._minConfidence = n || 0.5, this._maxResults = o || 100, typeof this._minConfidence != "number" || this._minConfidence <= 0 || this._minConfidence >= 1)
        throw new Error(this._name + " - expected minConfidence to be a number between 0 and 1");
      if (typeof this._maxResults != "number")
        throw new Error(this._name + " - expected maxResults to be a number");
    }
    return Object.defineProperty(r.prototype, "minConfidence", {
      get: function() {
        return this._minConfidence;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "maxResults", {
      get: function() {
        return this._maxResults;
      },
      enumerable: !0,
      configurable: !0
    }), r;
  }()
), Fl = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      return r.call(this, "SsdMobilenetv1") || this;
    }
    return t.prototype.forwardInput = function(e) {
      var n = this.params;
      if (!n)
        throw new Error("SsdMobilenetv1 - load model before inference");
      return X(function() {
        var o = e.toBatchTensor(512, !1).toFloat(), a = We(Qe(o, j(0.007843137718737125)), j(1)), i = Zy(a, n.mobilenetv1), s = a0(i.out, i.conv11, n.prediction_layer), u = s.boxPredictions, c = s.classPredictions;
        return o0(u, c, n.output_layer);
      });
    }, t.prototype.forward = function(e) {
      return Z(this, void 0, void 0, function() {
        var n;
        return ee(this, function(o) {
          switch (o.label) {
            case 0:
              return n = this.forwardInput, [4, He(e)];
            case 1:
              return [2, n.apply(this, [o.sent()])];
          }
        });
      });
    }, t.prototype.locateFaces = function(e, n) {
      return n === void 0 && (n = {}), Z(this, void 0, void 0, function() {
        var o, a, i, s, u, c, l, f, h, p, d, m, v, g, y, x, b, w, C, k, I;
        return ee(this, function(R) {
          switch (R.label) {
            case 0:
              return o = new Wo(n), a = o.maxResults, i = o.minConfidence, [4, He(e)];
            case 1:
              for (s = R.sent(), u = this.forwardInput(s), c = u.boxes, l = u.scores, f = c[0], h = l[0], p = 1; p < c.length; p++)
                c[p].dispose(), l[p].dispose();
              return v = (m = Array).from, [4, h.data()];
            case 2:
              return d = v.apply(m, [R.sent()]), g = 0.5, y = e0(f, d, a, g, i), x = s.getReshapedInputDimensions(0), b = s.inputSize, w = b / x.width, C = b / x.height, k = f.arraySync(), I = y.map(function(S) {
                var N = [
                  Math.max(0, k[S][0]),
                  Math.min(1, k[S][2])
                ].map(function(z) {
                  return z * C;
                }), D = N[0], W = N[1], B = [
                  Math.max(0, k[S][1]),
                  Math.min(1, k[S][3])
                ].map(function(z) {
                  return z * w;
                }), L = B[0], V = B[1];
                return new Vt(d[S], new Pi(L, D, V - L, W - D), {
                  height: s.getInputHeight(0),
                  width: s.getInputWidth(0)
                });
              }), f.dispose(), h.dispose(), [2, I];
          }
        });
      });
    }, t.prototype.getDefaultModelName = function() {
      return "ssd_mobilenetv1_model";
    }, t.prototype.extractParamsFromWeigthMap = function(e) {
      return $y(e);
    }, t.prototype.extractParams = function(e) {
      return Ky(e);
    }, t;
  }(Qt)
);
(function(r) {
  oe(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t;
})(Fl);
var i0 = 0.4, s0 = [
  new be(0.738768, 0.874946),
  new be(2.42204, 2.65704),
  new be(4.30971, 7.04493),
  new be(10.246, 4.59428),
  new be(12.6868, 11.8741)
], u0 = [
  new be(1.603231, 2.094468),
  new be(6.041143, 7.080126),
  new be(2.882459, 3.518061),
  new be(4.266906, 5.178857),
  new be(9.041765, 10.66308)
], c0 = [117.001, 114.697, 97.404], l0 = "tiny_yolov2_model", f0 = "tiny_yolov2_separable_conv_model", Kr = function(r) {
  return typeof r == "number";
};
function h0(r) {
  if (!r)
    throw new Error("invalid config: " + r);
  if (typeof r.withSeparableConvs != "boolean")
    throw new Error("config.withSeparableConvs has to be a boolean, have: " + r.withSeparableConvs);
  if (!Kr(r.iouThreshold) || r.iouThreshold < 0 || r.iouThreshold > 1)
    throw new Error("config.iouThreshold has to be a number between [0, 1], have: " + r.iouThreshold);
  if (!Array.isArray(r.classes) || !r.classes.length || !r.classes.every(function(t) {
    return typeof t == "string";
  }))
    throw new Error("config.classes has to be an array class names: string[], have: " + JSON.stringify(r.classes));
  if (!Array.isArray(r.anchors) || !r.anchors.length || !r.anchors.map(function(t) {
    return t || {};
  }).every(function(t) {
    return Kr(t.x) && Kr(t.y);
  }))
    throw new Error("config.anchors has to be an array of { x: number, y: number }, have: " + JSON.stringify(r.anchors));
  if (r.meanRgb && (!Array.isArray(r.meanRgb) || r.meanRgb.length !== 3 || !r.meanRgb.every(Kr)))
    throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: " + JSON.stringify(r.meanRgb));
}
function qi(r) {
  return X(function() {
    var t = Qe(r, j(0.10000000149011612));
    return le(Ie(We(r, t)), t);
  });
}
function nn(r, t) {
  return X(function() {
    var e = kn(r, [[0, 0], [1, 1], [1, 1], [0, 0]]);
    return e = yt(e, t.conv.filters, [1, 1], "valid"), e = We(e, t.bn.sub), e = Qe(e, t.bn.truediv), e = le(e, t.conv.bias), qi(e);
  });
}
function rn(r, t) {
  return X(function() {
    var e = kn(r, [[0, 0], [1, 1], [1, 1], [0, 0]]);
    return e = wi(e, t.depthwise_filter, t.pointwise_filter, [1, 1], "valid"), e = le(e, t.bias), qi(e);
  });
}
function p0(r, t) {
  var e = Lo(r, t);
  function n(i, s) {
    var u = Pe(r(i)), c = Pe(r(i));
    return t.push({ paramPath: s + "/sub" }, { paramPath: s + "/truediv" }), { sub: u, truediv: c };
  }
  function o(i, s, u) {
    var c = e(i, s, 3, u + "/conv"), l = n(s, u + "/bn");
    return { conv: c, bn: l };
  }
  var a = zi(r, t);
  return {
    extractConvParams: e,
    extractConvWithBatchNormParams: o,
    extractSeparableConvParams: a
  };
}
function d0(r, t, e, n) {
  var o = en(r), a = o.extractWeights, i = o.getRemainingWeights, s = [], u = p0(a, s), c = u.extractConvParams, l = u.extractConvWithBatchNormParams, f = u.extractSeparableConvParams, h;
  if (t.withSeparableConvs) {
    var p = n[0], d = n[1], m = n[2], v = n[3], g = n[4], y = n[5], x = n[6], b = n[7], w = n[8], C = t.isFirstLayerConv2d ? c(p, d, 3, "conv0") : f(p, d, "conv0"), k = f(d, m, "conv1"), I = f(m, v, "conv2"), R = f(v, g, "conv3"), S = f(g, y, "conv4"), N = f(y, x, "conv5"), D = b ? f(x, b, "conv6") : void 0, W = w ? f(b, w, "conv7") : void 0, B = c(w || b || x, 5 * e, 1, "conv8");
    h = { conv0: C, conv1: k, conv2: I, conv3: R, conv4: S, conv5: N, conv6: D, conv7: W, conv8: B };
  } else {
    var p = n[0], d = n[1], m = n[2], v = n[3], g = n[4], y = n[5], x = n[6], b = n[7], w = n[8], C = l(p, d, "conv0"), k = l(d, m, "conv1"), I = l(m, v, "conv2"), R = l(v, g, "conv3"), S = l(g, y, "conv4"), N = l(y, x, "conv5"), D = l(x, b, "conv6"), W = l(b, w, "conv7"), B = c(w, 5 * e, 1, "conv8");
    h = { conv0: C, conv1: k, conv2: I, conv3: R, conv4: S, conv5: N, conv6: D, conv7: W, conv8: B };
  }
  if (i().length !== 0)
    throw new Error("weights remaing after extract: " + i().length);
  return { params: h, paramMappings: s };
}
function v0(r, t) {
  var e = dn(r, t);
  function n(s) {
    var u = e(s + "/sub", 1), c = e(s + "/truediv", 1);
    return { sub: u, truediv: c };
  }
  function o(s) {
    var u = e(s + "/filters", 4), c = e(s + "/bias", 1);
    return { filters: u, bias: c };
  }
  function a(s) {
    var u = o(s + "/conv"), c = n(s + "/bn");
    return { conv: u, bn: c };
  }
  var i = Vi(e);
  return {
    extractConvParams: o,
    extractConvWithBatchNormParams: a,
    extractSeparableConvParams: i
  };
}
function m0(r, t) {
  var e = [], n = v0(r, e), o = n.extractConvParams, a = n.extractConvWithBatchNormParams, i = n.extractSeparableConvParams, s;
  if (t.withSeparableConvs) {
    var u = t.filterSizes && t.filterSizes.length || 9;
    s = {
      conv0: t.isFirstLayerConv2d ? o("conv0") : i("conv0"),
      conv1: i("conv1"),
      conv2: i("conv2"),
      conv3: i("conv3"),
      conv4: i("conv4"),
      conv5: i("conv5"),
      conv6: u > 7 ? i("conv6") : void 0,
      conv7: u > 8 ? i("conv7") : void 0,
      conv8: o("conv8")
    };
  } else
    s = {
      conv0: a("conv0"),
      conv1: a("conv1"),
      conv2: a("conv2"),
      conv3: a("conv3"),
      conv4: a("conv4"),
      conv5: a("conv5"),
      conv6: a("conv6"),
      conv7: a("conv7"),
      conv8: o("conv8")
    };
  return Zt(r, e), { params: s, paramMappings: e };
}
var hu;
(function(r) {
  r[r.XS = 224] = "XS", r[r.SM = 320] = "SM", r[r.MD = 416] = "MD", r[r.LG = 608] = "LG";
})(hu || (hu = {}));
var ji = (
  /** @class */
  function() {
    function r(t) {
      var e = t === void 0 ? {} : t, n = e.inputSize, o = e.scoreThreshold;
      if (this._name = "TinyYolov2Options", this._inputSize = n || 416, this._scoreThreshold = o || 0.5, typeof this._inputSize != "number" || this._inputSize % 32 !== 0)
        throw new Error(this._name + " - expected inputSize to be a number divisible by 32");
      if (typeof this._scoreThreshold != "number" || this._scoreThreshold <= 0 || this._scoreThreshold >= 1)
        throw new Error(this._name + " - expected scoreThreshold to be a number between 0 and 1");
    }
    return Object.defineProperty(r.prototype, "inputSize", {
      get: function() {
        return this._inputSize;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "scoreThreshold", {
      get: function() {
        return this._scoreThreshold;
      },
      enumerable: !0,
      configurable: !0
    }), r;
  }()
), Pl = (
  /** @class */
  function(r) {
    oe(t, r);
    function t(e) {
      var n = r.call(this, "TinyYolov2") || this;
      return h0(e), n._config = e, n;
    }
    return Object.defineProperty(t.prototype, "config", {
      get: function() {
        return this._config;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(t.prototype, "withClassScores", {
      get: function() {
        return this.config.withClassScores || this.config.classes.length > 1;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(t.prototype, "boxEncodingSize", {
      get: function() {
        return 5 + (this.withClassScores ? this.config.classes.length : 0);
      },
      enumerable: !0,
      configurable: !0
    }), t.prototype.runTinyYolov2 = function(e, n) {
      var o = nn(e, n.conv0);
      return o = ze(o, [2, 2], [2, 2], "same"), o = nn(o, n.conv1), o = ze(o, [2, 2], [2, 2], "same"), o = nn(o, n.conv2), o = ze(o, [2, 2], [2, 2], "same"), o = nn(o, n.conv3), o = ze(o, [2, 2], [2, 2], "same"), o = nn(o, n.conv4), o = ze(o, [2, 2], [2, 2], "same"), o = nn(o, n.conv5), o = ze(o, [2, 2], [1, 1], "same"), o = nn(o, n.conv6), o = nn(o, n.conv7), wt(o, n.conv8, "valid", !1);
    }, t.prototype.runMobilenet = function(e, n) {
      var o = this.config.isFirstLayerConv2d ? qi(wt(e, n.conv0, "valid", !1)) : rn(e, n.conv0);
      return o = ze(o, [2, 2], [2, 2], "same"), o = rn(o, n.conv1), o = ze(o, [2, 2], [2, 2], "same"), o = rn(o, n.conv2), o = ze(o, [2, 2], [2, 2], "same"), o = rn(o, n.conv3), o = ze(o, [2, 2], [2, 2], "same"), o = rn(o, n.conv4), o = ze(o, [2, 2], [2, 2], "same"), o = rn(o, n.conv5), o = ze(o, [2, 2], [1, 1], "same"), o = n.conv6 ? rn(o, n.conv6) : o, o = n.conv7 ? rn(o, n.conv7) : o, wt(o, n.conv8, "valid", !1);
    }, t.prototype.forwardInput = function(e, n) {
      var o = this, a = this.params;
      if (!a)
        throw new Error("TinyYolov2 - load model before inference");
      return X(function() {
        var i = e.toBatchTensor(n, !1).toFloat();
        return i = o.config.meanRgb ? Ar(i, o.config.meanRgb) : i, i = i.div(j(256)), o.config.withSeparableConvs ? o.runMobilenet(i, a) : o.runTinyYolov2(i, a);
      });
    }, t.prototype.forward = function(e, n) {
      return Z(this, void 0, void 0, function() {
        var o;
        return ee(this, function(a) {
          switch (a.label) {
            case 0:
              return o = this.forwardInput, [4, He(e)];
            case 1:
              return [4, o.apply(this, [a.sent(), n])];
            case 2:
              return [2, a.sent()];
          }
        });
      });
    }, t.prototype.detect = function(e, n) {
      return n === void 0 && (n = {}), Z(this, void 0, void 0, function() {
        var o, a, i, s, u, c, l, f, h, p, d, m, v, g, y = this;
        return ee(this, function(x) {
          switch (x.label) {
            case 0:
              return o = new ji(n), a = o.inputSize, i = o.scoreThreshold, [4, He(e)];
            case 1:
              return s = x.sent(), [4, this.forwardInput(s, a)];
            case 2:
              return u = x.sent(), c = X(function() {
                return Be(u)[0].expandDims();
              }), l = {
                width: s.getInputWidth(0),
                height: s.getInputHeight(0)
              }, [4, this.extractBoxes(c, s.getReshapedInputDimensions(0), i)];
            case 3:
              return f = x.sent(), u.dispose(), c.dispose(), h = f.map(function(b) {
                return b.box;
              }), p = f.map(function(b) {
                return b.score;
              }), d = f.map(function(b) {
                return b.classScore;
              }), m = f.map(function(b) {
                return y.config.classes[b.label];
              }), v = br(h.map(function(b) {
                return b.rescale(a);
              }), p, this.config.iouThreshold, !0), g = v.map(function(b) {
                return new il(p[b], d[b], m[b], h[b], l);
              }), [2, g];
          }
        });
      });
    }, t.prototype.getDefaultModelName = function() {
      return "";
    }, t.prototype.extractParamsFromWeigthMap = function(e) {
      return m0(e, this.config);
    }, t.prototype.extractParams = function(e) {
      var n = this.config.filterSizes || t.DEFAULT_FILTER_SIZES, o = n ? n.length : void 0;
      if (o !== 7 && o !== 8 && o !== 9)
        throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found " + o + " filterSizes in config");
      return d0(e, this.config, this.boxEncodingSize, n);
    }, t.prototype.extractBoxes = function(e, n, o) {
      return Z(this, void 0, void 0, function() {
        var a, i, s, u, c, l, f, h, p, d, m, v, g, y, x, b, w, C, k, I, R, S, N, D, W, B, L, V, z, U = this;
        return ee(this, function(G) {
          switch (G.label) {
            case 0:
              return a = n.width, i = n.height, s = Math.max(a, i), u = s / a, c = s / i, l = e.shape[1], f = this.config.anchors.length, h = X(function() {
                var q = e.reshape([l, l, f, U.boxEncodingSize]), K = q.slice([0, 0, 0, 0], [l, l, f, 4]), te = q.slice([0, 0, 0, 4], [l, l, f, 1]), ne = U.withClassScores ? Yt(q.slice([0, 0, 0, 5], [l, l, f, U.config.classes.length]), 3) : j(0);
                return [K, te, ne];
              }), p = h[0], d = h[1], m = h[2], v = [], [4, d.array()];
            case 1:
              return g = G.sent(), [4, p.array()];
            case 2:
              y = G.sent(), x = 0, G.label = 3;
            case 3:
              if (!(x < l)) return [3, 12];
              b = 0, G.label = 4;
            case 4:
              if (!(b < l)) return [3, 11];
              w = 0, G.label = 5;
            case 5:
              return w < f ? (C = Ca(g[x][b][w][0]), !o || C > o ? (k = (b + Ca(y[x][b][w][0])) / l * u, I = (x + Ca(y[x][b][w][1])) / l * c, R = Math.exp(y[x][b][w][2]) * this.config.anchors[w].x / l * u, S = Math.exp(y[x][b][w][3]) * this.config.anchors[w].y / l * c, N = k - R / 2, D = I - S / 2, W = { row: x, col: b, anchor: w }, this.withClassScores ? [4, this.extractPredictedClass(m, W)] : [3, 7]) : [3, 9]) : [3, 10];
            case 6:
              return z = G.sent(), [3, 8];
            case 7:
              z = { classScore: 1, label: 0 }, G.label = 8;
            case 8:
              B = z, L = B.classScore, V = B.label, v.push(Xe({ box: new Mo(N, D, N + R, D + S), score: C, classScore: C * L, label: V }, W)), G.label = 9;
            case 9:
              return w++, [3, 5];
            case 10:
              return b++, [3, 4];
            case 11:
              return x++, [3, 3];
            case 12:
              return p.dispose(), d.dispose(), m.dispose(), [2, v];
          }
        });
      });
    }, t.prototype.extractPredictedClass = function(e, n) {
      return Z(this, void 0, void 0, function() {
        var o, a, i, s;
        return ee(this, function(u) {
          switch (u.label) {
            case 0:
              return o = n.row, a = n.col, i = n.anchor, [4, e.array()];
            case 1:
              return s = u.sent(), [2, Array(this.config.classes.length).fill(0).map(function(c, l) {
                return s[o][a][i][l];
              }).map(function(c, l) {
                return {
                  classScore: c,
                  label: l
                };
              }).reduce(function(c, l) {
                return c.classScore > l.classScore ? c : l;
              })];
          }
        });
      });
    }, t.DEFAULT_FILTER_SIZES = [
      3,
      16,
      32,
      64,
      128,
      256,
      512,
      1024,
      1024
    ], t;
  }(Qt)
), g0 = (
  /** @class */
  function(r) {
    oe(t, r);
    function t(e) {
      e === void 0 && (e = !0);
      var n = this, o = Object.assign({}, {
        withSeparableConvs: e,
        iouThreshold: i0,
        classes: ["face"]
      }, e ? {
        anchors: u0,
        meanRgb: c0
      } : {
        anchors: s0,
        withClassScores: !0
      });
      return n = r.call(this, o) || this, n;
    }
    return Object.defineProperty(t.prototype, "withSeparableConvs", {
      get: function() {
        return this.config.withSeparableConvs;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(t.prototype, "anchors", {
      get: function() {
        return this.config.anchors;
      },
      enumerable: !0,
      configurable: !0
    }), t.prototype.locateFaces = function(e, n) {
      return Z(this, void 0, void 0, function() {
        var o;
        return ee(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, this.detect(e, n)];
            case 1:
              return o = a.sent(), [2, o.map(function(i) {
                return new Vt(i.score, i.relativeBox, { width: i.imageWidth, height: i.imageHeight });
              })];
          }
        });
      });
    }, t.prototype.getDefaultModelName = function() {
      return this.withSeparableConvs ? f0 : l0;
    }, t.prototype.extractParamsFromWeigthMap = function(e) {
      return r.prototype.extractParamsFromWeigthMap.call(this, e);
    }, t;
  }(Pl)
), Ol = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e._name = "TinyFaceDetectorOptions", e;
    }
    return t;
  }(ji)
), Dr = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.then = function(t) {
      return Z(this, void 0, void 0, function() {
        var e;
        return ee(this, function(n) {
          switch (n.label) {
            case 0:
              return e = t, [4, this.run()];
            case 1:
              return [2, e.apply(void 0, [n.sent()])];
          }
        });
      });
    }, r.prototype.run = function() {
      return Z(this, void 0, void 0, function() {
        return ee(this, function(t) {
          throw new Error("ComposableTask - run is not implemented");
        });
      });
    }, r;
  }()
);
function Uo(r, t, e, n, o) {
  return o === void 0 && (o = function(a) {
    var i = a.alignedRect;
    return i;
  }), Z(this, void 0, void 0, function() {
    var a, i, s, u, c;
    return ee(this, function(l) {
      switch (l.label) {
        case 0:
          return a = r.map(function(f) {
            return Ry(f) ? o(f) : f.detection;
          }), s = n, s ? [3, 5] : t instanceof Se ? [4, Wi(t, a)] : [3, 2];
        case 1:
          return u = l.sent(), [3, 4];
        case 2:
          return [4, Li(t, a)];
        case 3:
          u = l.sent(), l.label = 4;
        case 4:
          s = u, l.label = 5;
        case 5:
          return i = s, [4, e(i)];
        case 6:
          return c = l.sent(), i.forEach(function(f) {
            return f instanceof Se && f.dispose();
          }), [2, c];
      }
    });
  });
}
function Ki(r, t, e, n, o) {
  return Z(this, void 0, void 0, function() {
    var a = this;
    return ee(this, function(i) {
      return [2, Uo([r], t, function(s) {
        return Z(a, void 0, void 0, function() {
          return ee(this, function(u) {
            return [2, e(s[0])];
          });
        });
      }, n, o)];
    });
  });
}
function y0(r) {
  return X(function() {
    return dt(Be(r, 3).reverse(), 3);
  });
}
var Xr = 2, Co = 12;
function b0(r, t) {
  var e = Lo(r, t), n = Ui(r, t);
  function o(c, l) {
    var f = Pe(r(c));
    return t.push({ paramPath: l }), f;
  }
  function a(c, l, f) {
    f === void 0 && (f = !1);
    var h = e(c[0], c[1], 3, l + "/conv1"), p = o(c[1], l + "/prelu1_alpha"), d = e(c[1], c[2], 3, l + "/conv2"), m = o(c[2], l + "/prelu2_alpha"), v = e(c[2], c[3], f ? 2 : 3, l + "/conv3"), g = o(c[3], l + "/prelu3_alpha");
    return { conv1: h, prelu1_alpha: p, conv2: d, prelu2_alpha: m, conv3: v, prelu3_alpha: g };
  }
  function i() {
    var c = a([3, 10, 16, 32], "pnet"), l = e(32, 2, 1, "pnet/conv4_1"), f = e(32, 4, 1, "pnet/conv4_2");
    return Xe(Xe({}, c), { conv4_1: l, conv4_2: f });
  }
  function s() {
    var c = a([3, 28, 48, 64], "rnet", !0), l = n(576, 128, "rnet/fc1"), f = o(128, "rnet/prelu4_alpha"), h = n(128, 2, "rnet/fc2_1"), p = n(128, 4, "rnet/fc2_2");
    return Xe(Xe({}, c), { fc1: l, prelu4_alpha: f, fc2_1: h, fc2_2: p });
  }
  function u() {
    var c = a([3, 32, 64, 64], "onet"), l = e(64, 128, 2, "onet/conv4"), f = o(128, "onet/prelu4_alpha"), h = n(1152, 256, "onet/fc1"), p = o(256, "onet/prelu5_alpha"), d = n(256, 2, "onet/fc2_1"), m = n(256, 4, "onet/fc2_2"), v = n(256, 10, "onet/fc2_3");
    return Xe(Xe({}, c), { conv4: l, prelu4_alpha: f, fc1: h, prelu5_alpha: p, fc2_1: d, fc2_2: m, fc2_3: v });
  }
  return {
    extractPNetParams: i,
    extractRNetParams: s,
    extractONetParams: u
  };
}
function x0(r) {
  var t = en(r), e = t.extractWeights, n = t.getRemainingWeights, o = [], a = b0(e, o), i = a.extractPNetParams, s = a.extractRNetParams, u = a.extractONetParams, c = i(), l = s(), f = u();
  if (n().length !== 0)
    throw new Error("weights remaing after extract: " + n().length);
  return { params: { pnet: c, rnet: l, onet: f }, paramMappings: o };
}
function w0(r, t) {
  var e = dn(r, t);
  function n(l) {
    var f = e(l + "/weights", 4, l + "/filters"), h = e(l + "/bias", 1);
    return { filters: f, bias: h };
  }
  function o(l) {
    var f = e(l + "/weights", 2), h = e(l + "/bias", 1);
    return { weights: f, bias: h };
  }
  function a(l) {
    return e(l, 1);
  }
  function i(l) {
    var f = n(l + "/conv1"), h = a(l + "/prelu1_alpha"), p = n(l + "/conv2"), d = a(l + "/prelu2_alpha"), m = n(l + "/conv3"), v = a(l + "/prelu3_alpha");
    return { conv1: f, prelu1_alpha: h, conv2: p, prelu2_alpha: d, conv3: m, prelu3_alpha: v };
  }
  function s() {
    var l = i("pnet"), f = n("pnet/conv4_1"), h = n("pnet/conv4_2");
    return Xe(Xe({}, l), { conv4_1: f, conv4_2: h });
  }
  function u() {
    var l = i("rnet"), f = o("rnet/fc1"), h = a("rnet/prelu4_alpha"), p = o("rnet/fc2_1"), d = o("rnet/fc2_2");
    return Xe(Xe({}, l), { fc1: f, prelu4_alpha: h, fc2_1: p, fc2_2: d });
  }
  function c() {
    var l = i("onet"), f = n("onet/conv4"), h = a("onet/prelu4_alpha"), p = o("onet/fc1"), d = a("onet/prelu5_alpha"), m = o("onet/fc2_1"), v = o("onet/fc2_2"), g = o("onet/fc2_3");
    return Xe(Xe({}, l), { conv4: f, prelu4_alpha: h, fc1: p, prelu5_alpha: d, fc2_1: m, fc2_2: v, fc2_3: g });
  }
  return {
    extractPNetParams: s,
    extractRNetParams: u,
    extractONetParams: c
  };
}
function C0(r) {
  var t = [], e = w0(r, t), n = e.extractPNetParams, o = e.extractRNetParams, a = e.extractONetParams, i = n(), s = o(), u = a();
  return Zt(r, t), { params: { pnet: i, rnet: s, onet: u }, paramMappings: t };
}
function Ya(r, t) {
  var e = t[0], n = t[1];
  return {
    height: Math.floor(e * r),
    width: Math.floor(n * r)
  };
}
function E0(r, t, e) {
  for (var n = e[0], o = e[1], a = Co / r, i = [], s = Math.min(n, o) * a, u = 0; s >= 12; )
    i.push(a * Math.pow(t, u)), s = s * t, u += 1;
  return i;
}
var Xi = (
  /** @class */
  function(r) {
    oe(t, r);
    function t(e, n, o, a) {
      return r.call(this, { left: e, top: n, right: o, bottom: a }, !0) || this;
    }
    return t;
  }(fn)
);
function Ml(r) {
  return X(function() {
    return Qe(We(r, j(127.5)), j(78125e-7));
  });
}
function Yn(r, t) {
  return X(function() {
    return le(Ie(r), Qe(t, vo(Ie(vo(r)))));
  });
}
function $i(r, t, e) {
  return e === void 0 && (e = !1), X(function() {
    var n = wt(r, t.conv1, "valid");
    return n = Yn(n, t.prelu1_alpha), n = ze(n, e ? [2, 2] : [3, 3], [2, 2], "same"), n = wt(n, t.conv2, "valid"), n = Yn(n, t.prelu2_alpha), n = e ? n : ze(n, [3, 3], [2, 2], "valid"), n = wt(n, t.conv3, "valid"), n = Yn(n, t.prelu3_alpha), n;
  });
}
function _0(r, t) {
  return X(function() {
    var e = $i(r, t, !0), n = wt(e, t.conv4_1, "valid"), o = vt(No(n, 3), 3), a = Yt(We(n, o), 3), i = wt(e, t.conv4_2, "valid");
    return { prob: a, regions: i };
  });
}
function R0(r, t) {
  return X(function() {
    var e = Ya(t, r.shape.slice(1)), n = e.height, o = e.width, a = Si.resizeBilinear(r, [n, o]), i = Ml(a);
    return ln(i, [0, 2, 1, 3]);
  });
}
function S0(r, t, e, n) {
  for (var o = [], a = r.arraySync(), i = 0; i < r.shape[0]; i++)
    for (var s = 0; s < r.shape[1]; s++)
      a[i][s] >= n && o.push(new be(s, i));
  var u = o.map(function(c) {
    var l = new Mo(Math.round((c.y * Xr + 1) / e), Math.round((c.x * Xr + 1) / e), Math.round((c.y * Xr + Co) / e), Math.round((c.x * Xr + Co) / e)), f = a[c.y][c.x], h = t.arraySync(), p = new Xi(h[c.y][c.x][0], h[c.y][c.x][1], h[c.y][c.x][2], h[c.y][c.x][3]);
    return {
      cell: l,
      score: f,
      region: p
    };
  });
  return u;
}
function I0(r, t, e, n, o) {
  o.stage1 = [];
  var a = t.map(function(h) {
    return X(function() {
      var p = { scale: h }, d = R0(r, h), m = Date.now(), v = _0(d, n), g = v.prob, y = v.regions;
      p.pnet = Date.now() - m;
      var x = Be(Be(g, 3)[1])[0], b = Be(y)[0];
      return {
        scoresTensor: x,
        regionsTensor: b,
        scale: h,
        statsForScale: p
      };
    });
  }), i = a.map(function(h) {
    var p = h.scoresTensor, d = h.regionsTensor, m = h.scale, v = h.statsForScale, g = S0(p, d, m, e);
    if (p.dispose(), d.dispose(), !g.length)
      return o.stage1.push(v), [];
    var y = Date.now(), x = br(g.map(function(b) {
      return b.cell;
    }), g.map(function(b) {
      return b.score;
    }), 0.5);
    return v.nms = Date.now() - y, v.numBoxes = x.length, o.stage1.push(v), x.map(function(b) {
      return g[b];
    });
  }), s = i.reduce(function(h, p) {
    return h.concat(p);
  }, []), u = [], c = [];
  if (s.length > 0) {
    var l = Date.now(), f = br(s.map(function(h) {
      return h.cell;
    }), s.map(function(h) {
      return h.score;
    }), 0.7);
    o.stage1_nms = Date.now() - l, c = f.map(function(h) {
      return s[h].score;
    }), u = f.map(function(h) {
      return s[h];
    }).map(function(h) {
      var p = h.cell, d = h.region;
      return new Mo(p.left + d.left * p.width, p.top + d.top * p.height, p.right + d.right * p.width, p.bottom + d.bottom * p.height).toSquare().round();
    });
  }
  return {
    boxes: u,
    scores: c
  };
}
function Bl(r, t, e) {
  var n = e.width, o = e.height;
  return Z(this, void 0, void 0, function() {
    var a, i, s, u = this;
    return ee(this, function(c) {
      switch (c.label) {
        case 0:
          return a = Rn(r), [4, Promise.all(t.map(function(l) {
            return Z(u, void 0, void 0, function() {
              var f, h, p, d, m, v, g, y;
              return ee(this, function(x) {
                return f = l.padAtBorders(r.height, r.width), h = f.y, p = f.ey, d = f.x, m = f.ex, v = d - 1, g = h - 1, y = a.getImageData(v, g, m - v, p - g), [2, Ze.isNodejs() ? Bi(y) : createImageBitmap(y)];
              });
            });
          }))];
        case 1:
          return i = c.sent(), s = [], i.forEach(function(l) {
            var f = Bo({ width: n, height: o }), h = Rn(f);
            h.drawImage(l, 0, 0, n, o);
            for (var p = h.getImageData(0, 0, n, o).data, d = [], m = 0; m < p.length; m += 4)
              d.push(p[m + 2]), d.push(p[m + 1]), d.push(p[m]);
            s.push(d);
          }), [2, s.map(function(l) {
            var f = X(function() {
              var h = ln(et(l, [1, n, o, 3]), [0, 2, 1, 3]).toFloat();
              return Ml(h);
            });
            return f;
          })];
      }
    });
  });
}
function k0(r, t) {
  return X(function() {
    var e = $i(r, t), n = xt(e, [e.shape[0], t.fc1.weights.shape[0]]), o = Pt(n, t.fc1), a = Yn(o, t.prelu4_alpha), i = Pt(a, t.fc2_1), s = vt(No(i, 1), 1), u = Yt(We(i, s), 1), c = Pt(a, t.fc2_2), l = Be(u, 1)[1];
    return { scores: l, regions: c };
  });
}
function A0(r, t, e, n, o) {
  return Z(this, void 0, void 0, function() {
    var a, i, s, u, c, l, f, h, p, d, m, v, g, y;
    return ee(this, function(x) {
      switch (x.label) {
        case 0:
          return a = Date.now(), [4, Bl(r, t, { width: 24, height: 24 })];
        case 1:
          return i = x.sent(), o.stage2_extractImagePatches = Date.now() - a, a = Date.now(), s = i.map(function(b) {
            var w = k0(b, n);
            return b.dispose(), w;
          }), o.stage2_rnet = Date.now() - a, u = s.length > 1 ? Me(s.map(function(b) {
            return b.scores;
          })) : s[0].scores, f = (l = Array).from, [4, u.data()];
        case 2:
          return c = f.apply(l, [x.sent()]), u.dispose(), h = c.map(function(b, w) {
            return { score: b, idx: w };
          }).filter(function(b) {
            return b.score > e;
          }).map(function(b) {
            var w = b.idx;
            return w;
          }), p = h.map(function(b) {
            return t[b];
          }), d = h.map(function(b) {
            return c[b];
          }), m = [], v = [], p.length > 0 && (a = Date.now(), g = br(p, d, 0.7), o.stage2_nms = Date.now() - a, y = g.map(function(b) {
            var w = s[h[b]].regions.arraySync();
            return new Xi(w[0][0], w[0][1], w[0][2], w[0][3]);
          }), v = g.map(function(b) {
            return d[b];
          }), m = g.map(function(b, w) {
            return p[b].calibrate(y[w]);
          })), s.forEach(function(b) {
            b.regions.dispose(), b.scores.dispose();
          }), [2, {
            boxes: m,
            scores: v
          }];
      }
    });
  });
}
function D0(r, t) {
  return X(function() {
    var e = $i(r, t);
    e = ze(e, [2, 2], [2, 2], "same"), e = wt(e, t.conv4, "valid"), e = Yn(e, t.prelu4_alpha);
    var n = xt(e, [e.shape[0], t.fc1.weights.shape[0]]), o = Pt(n, t.fc1), a = Yn(o, t.prelu5_alpha), i = Pt(a, t.fc2_1), s = vt(No(i, 1), 1), u = Yt(We(i, s), 1), c = Pt(a, t.fc2_2), l = Pt(a, t.fc2_3), f = Be(u, 1)[1];
    return { scores: f, regions: c, points: l };
  });
}
function T0(r, t, e, n, o) {
  return Z(this, void 0, void 0, function() {
    var a, i, s, u, c, l, f, h, p, d, m, v, g, y, x;
    return ee(this, function(b) {
      switch (b.label) {
        case 0:
          return a = Date.now(), [4, Bl(r, t, { width: 48, height: 48 })];
        case 1:
          return i = b.sent(), o.stage3_extractImagePatches = Date.now() - a, a = Date.now(), s = i.map(function(w) {
            var C = D0(w, n);
            return w.dispose(), C;
          }), o.stage3_onet = Date.now() - a, u = s.length > 1 ? Me(s.map(function(w) {
            return w.scores;
          })) : s[0].scores, f = (l = Array).from, [4, u.data()];
        case 2:
          return c = f.apply(l, [b.sent()]), u.dispose(), h = c.map(function(w, C) {
            return { score: w, idx: C };
          }).filter(function(w) {
            return w.score > e;
          }).map(function(w) {
            var C = w.idx;
            return C;
          }), p = h.map(function(w) {
            var C = s[w].regions.arraySync();
            return new Xi(C[0][0], C[0][1], C[0][2], C[0][3]);
          }), d = h.map(function(w, C) {
            return t[w].calibrate(p[C]);
          }), m = h.map(function(w) {
            return c[w];
          }), v = [], g = [], y = [], d.length > 0 && (a = Date.now(), x = br(d, m, 0.7, !1), o.stage3_nms = Date.now() - a, v = x.map(function(w) {
            return d[w];
          }), g = x.map(function(w) {
            return m[w];
          }), y = x.map(function(w, C) {
            return Array(5).fill(0).map(function(k, I) {
              var R = s[w].points.arraySync();
              return new be(R[0][I] * (v[C].width + 1) + v[C].left, R[0][I + 5] * (v[C].height + 1) + v[C].top);
            });
          })), s.forEach(function(w) {
            w.regions.dispose(), w.scores.dispose(), w.points.dispose();
          }), [2, {
            boxes: v,
            scores: g,
            points: y
          }];
      }
    });
  });
}
var N0 = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      return r.call(this, "Mtcnn") || this;
    }
    return t.prototype.load = function(e) {
      return Z(this, void 0, void 0, function() {
        return ee(this, function(n) {
          return console.warn("mtcnn is deprecated and will be removed soon"), [2, r.prototype.load.call(this, e)];
        });
      });
    }, t.prototype.loadFromDisk = function(e) {
      return Z(this, void 0, void 0, function() {
        return ee(this, function(n) {
          return console.warn("mtcnn is deprecated and will be removed soon"), [2, r.prototype.loadFromDisk.call(this, e)];
        });
      });
    }, t.prototype.forwardInput = function(e, n) {
      return n === void 0 && (n = {}), Z(this, void 0, void 0, function() {
        var o, a, i, s, u, c, l, f, h, p, d, m, v, g, y, x, b, w, C, k, I;
        return ee(this, function(R) {
          switch (R.label) {
            case 0:
              if (o = this.params, !o)
                throw new Error("Mtcnn - load model before inference");
              if (a = e.canvases[0], !a)
                throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");
              return i = {}, s = Date.now(), u = X(function() {
                return y0(vt(Ni.fromPixels(a)).toFloat());
              }), c = function(S) {
                return u.dispose(), i.total = Date.now() - s, S;
              }, l = u.shape.slice(1), f = l[0], h = l[1], p = new Nl(n), d = p.minFaceSize, m = p.scaleFactor, v = p.maxNumScales, g = p.scoreThresholds, y = p.scaleSteps, x = (y || E0(d, m, [f, h])).filter(function(S) {
                var N = Ya(S, [f, h]);
                return Math.min(N.width, N.height) > Co;
              }).slice(0, v), i.scales = x, i.pyramid = x.map(function(S) {
                return Ya(S, [f, h]);
              }), b = Date.now(), [4, I0(u, x, g[0], o.pnet, i)];
            case 1:
              return w = R.sent(), i.total_stage1 = Date.now() - b, w.boxes.length ? (i.stage2_numInputBoxes = w.boxes.length, b = Date.now(), [4, A0(a, w.boxes, g[1], o.rnet, i)]) : [2, c({ results: [], stats: i })];
            case 2:
              return C = R.sent(), i.total_stage2 = Date.now() - b, C.boxes.length ? (i.stage3_numInputBoxes = C.boxes.length, b = Date.now(), [4, T0(a, C.boxes, g[2], o.onet, i)]) : [2, c({ results: [], stats: i })];
            case 3:
              return k = R.sent(), i.total_stage3 = Date.now() - b, I = k.boxes.map(function(S, N) {
                return Hi(Oi({}, new Vt(k.scores[N], new Pi(S.left / h, S.top / f, S.width / h, S.height / f), {
                  height: f,
                  width: h
                })), new uy(k.points[N].map(function(D) {
                  return D.sub(new be(S.left, S.top)).div(new be(S.width, S.height));
                }), { width: S.width, height: S.height }));
              }), [2, c({ results: I, stats: i })];
          }
        });
      });
    }, t.prototype.forward = function(e, n) {
      return n === void 0 && (n = {}), Z(this, void 0, void 0, function() {
        var o;
        return ee(this, function(a) {
          switch (a.label) {
            case 0:
              return o = this.forwardInput, [4, He(e)];
            case 1:
              return [4, o.apply(this, [
                a.sent(),
                n
              ])];
            case 2:
              return [2, a.sent().results];
          }
        });
      });
    }, t.prototype.forwardWithStats = function(e, n) {
      return n === void 0 && (n = {}), Z(this, void 0, void 0, function() {
        var o;
        return ee(this, function(a) {
          switch (a.label) {
            case 0:
              return o = this.forwardInput, [4, He(e)];
            case 1:
              return [2, o.apply(this, [
                a.sent(),
                n
              ])];
          }
        });
      });
    }, t.prototype.getDefaultModelName = function() {
      return "mtcnn_model";
    }, t.prototype.extractParamsFromWeigthMap = function(e) {
      return C0(e);
    }, t.prototype.extractParams = function(e) {
      return x0(e);
    }, t;
  }(Qt)
), F0 = 0.4, P0 = [
  new be(1.603231, 2.094468),
  new be(6.041143, 7.080126),
  new be(2.882459, 3.518061),
  new be(4.266906, 5.178857),
  new be(9.041765, 10.66308)
], O0 = [117.001, 114.697, 97.404], M0 = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      var e = this, n = {
        withSeparableConvs: !0,
        iouThreshold: F0,
        classes: ["face"],
        anchors: P0,
        meanRgb: O0,
        isFirstLayerConv2d: !0,
        filterSizes: [3, 16, 32, 64, 128, 256, 512]
      };
      return e = r.call(this, n) || this, e;
    }
    return Object.defineProperty(t.prototype, "anchors", {
      get: function() {
        return this.config.anchors;
      },
      enumerable: !0,
      configurable: !0
    }), t.prototype.locateFaces = function(e, n) {
      return Z(this, void 0, void 0, function() {
        var o;
        return ee(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, this.detect(e, n)];
            case 1:
              return o = a.sent(), [2, o.map(function(i) {
                return new Vt(i.score, i.relativeBox, { width: i.imageWidth, height: i.imageHeight });
              })];
          }
        });
      });
    }, t.prototype.getDefaultModelName = function() {
      return "tiny_face_detector_model";
    }, t.prototype.extractParamsFromWeigthMap = function(e) {
      return r.prototype.extractParamsFromWeigthMap.call(this, e);
    }, t;
  }(Pl)
), pt = {
  ssdMobilenetv1: new Fl(),
  tinyFaceDetector: new M0(),
  tinyYolov2: new g0(),
  mtcnn: new N0(),
  faceLandmark68Net: new Sl(),
  faceLandmark68TinyNet: new Ly(),
  faceRecognitionNet: new qy(),
  faceExpressionNet: new _y(),
  ageGenderNet: new Py()
}, Ll = (
  /** @class */
  function(r) {
    oe(t, r);
    function t(e, n, o) {
      var a = r.call(this) || this;
      return a.parentTask = e, a.input = n, a.extractedFaces = o, a;
    }
    return t;
  }(Dr)
), Yi = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.run = function() {
      return Z(this, void 0, void 0, function() {
        var e, n, o = this;
        return ee(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, this.parentTask];
            case 1:
              return e = a.sent(), [4, Uo(e, this.input, function(i) {
                return Z(o, void 0, void 0, function() {
                  return ee(this, function(s) {
                    switch (s.label) {
                      case 0:
                        return [4, Promise.all(i.map(function(u) {
                          return pt.faceExpressionNet.predictExpressions(u);
                        }))];
                      case 1:
                        return [2, s.sent()];
                    }
                  });
                });
              }, this.extractedFaces)];
            case 2:
              return n = a.sent(), [2, e.map(function(i, s) {
                return El(i, n[s]);
              })];
          }
        });
      });
    }, t.prototype.withAgeAndGender = function() {
      return new es(this, this.input);
    }, t;
  }(Ll)
), Ji = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.run = function() {
      return Z(this, void 0, void 0, function() {
        var e, n;
        return ee(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.parentTask];
            case 1:
              return e = o.sent(), e ? [4, Ki(e, this.input, function(a) {
                return pt.faceExpressionNet.predictExpressions(a);
              }, this.extractedFaces)] : [
                2
                /*return*/
              ];
            case 2:
              return n = o.sent(), [2, El(e, n)];
          }
        });
      });
    }, t.prototype.withAgeAndGender = function() {
      return new ts(this, this.input);
    }, t;
  }(Ll)
), Qi = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.withAgeAndGender = function() {
      return new ns(this, this.input);
    }, t.prototype.withFaceDescriptors = function() {
      return new os(this, this.input);
    }, t;
  }(Yi)
), Zi = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.withAgeAndGender = function() {
      return new rs(this, this.input);
    }, t.prototype.withFaceDescriptor = function() {
      return new as(this, this.input);
    }, t;
  }(Ji)
), Wl = (
  /** @class */
  function(r) {
    oe(t, r);
    function t(e, n, o) {
      var a = r.call(this) || this;
      return a.parentTask = e, a.input = n, a.extractedFaces = o, a;
    }
    return t;
  }(Dr)
), es = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.run = function() {
      return Z(this, void 0, void 0, function() {
        var e, n, o = this;
        return ee(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, this.parentTask];
            case 1:
              return e = a.sent(), [4, Uo(e, this.input, function(i) {
                return Z(o, void 0, void 0, function() {
                  return ee(this, function(s) {
                    switch (s.label) {
                      case 0:
                        return [4, Promise.all(i.map(function(u) {
                          return pt.ageGenderNet.predictAgeAndGender(u);
                        }))];
                      case 1:
                        return [2, s.sent()];
                    }
                  });
                });
              }, this.extractedFaces)];
            case 2:
              return n = a.sent(), [2, e.map(function(i, s) {
                var u = n[s], c = u.age, l = u.gender, f = u.genderProbability;
                return Dl(Tl(i, l, f), c);
              })];
          }
        });
      });
    }, t.prototype.withFaceExpressions = function() {
      return new Yi(this, this.input);
    }, t;
  }(Wl)
), ts = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.run = function() {
      return Z(this, void 0, void 0, function() {
        var e, n, o, a, i;
        return ee(this, function(s) {
          switch (s.label) {
            case 0:
              return [4, this.parentTask];
            case 1:
              return e = s.sent(), e ? [4, Ki(e, this.input, function(u) {
                return pt.ageGenderNet.predictAgeAndGender(u);
              }, this.extractedFaces)] : [
                2
                /*return*/
              ];
            case 2:
              return n = s.sent(), o = n.age, a = n.gender, i = n.genderProbability, [2, Dl(Tl(e, a, i), o)];
          }
        });
      });
    }, t.prototype.withFaceExpressions = function() {
      return new Ji(this, this.input);
    }, t;
  }(Wl)
), ns = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.withFaceExpressions = function() {
      return new Qi(this, this.input);
    }, t.prototype.withFaceDescriptors = function() {
      return new os(this, this.input);
    }, t;
  }(es)
), rs = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.withFaceExpressions = function() {
      return new Zi(this, this.input);
    }, t.prototype.withFaceDescriptor = function() {
      return new as(this, this.input);
    }, t;
  }(ts)
), Ul = (
  /** @class */
  function(r) {
    oe(t, r);
    function t(e, n) {
      var o = r.call(this) || this;
      return o.parentTask = e, o.input = n, o;
    }
    return t;
  }(Dr)
), os = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.run = function() {
      return Z(this, void 0, void 0, function() {
        var e, n;
        return ee(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.parentTask];
            case 1:
              return e = o.sent(), [4, Uo(e, this.input, function(a) {
                return Promise.all(a.map(function(i) {
                  return pt.faceRecognitionNet.computeFaceDescriptor(i);
                }));
              }, null, function(a) {
                return a.landmarks.align(null, { useDlibAlignment: !0 });
              })];
            case 2:
              return n = o.sent(), [2, n.map(function(a, i) {
                return Al(e[i], a);
              })];
          }
        });
      });
    }, t.prototype.withFaceExpressions = function() {
      return new Qi(this, this.input);
    }, t.prototype.withAgeAndGender = function() {
      return new ns(this, this.input);
    }, t;
  }(Ul)
), as = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.run = function() {
      return Z(this, void 0, void 0, function() {
        var e, n;
        return ee(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.parentTask];
            case 1:
              return e = o.sent(), e ? [4, Ki(e, this.input, function(a) {
                return pt.faceRecognitionNet.computeFaceDescriptor(a);
              }, null, function(a) {
                return a.landmarks.align(null, { useDlibAlignment: !0 });
              })] : [
                2
                /*return*/
              ];
            case 2:
              return n = o.sent(), [2, Al(e, n)];
          }
        });
      });
    }, t.prototype.withFaceExpressions = function() {
      return new Zi(this, this.input);
    }, t.prototype.withAgeAndGender = function() {
      return new rs(this, this.input);
    }, t;
  }(Ul)
), zl = (
  /** @class */
  function(r) {
    oe(t, r);
    function t(e, n, o) {
      var a = r.call(this) || this;
      return a.parentTask = e, a.input = n, a.useTinyLandmarkNet = o, a;
    }
    return Object.defineProperty(t.prototype, "landmarkNet", {
      get: function() {
        return this.useTinyLandmarkNet ? pt.faceLandmark68TinyNet : pt.faceLandmark68Net;
      },
      enumerable: !0,
      configurable: !0
    }), t;
  }(Dr)
), B0 = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.run = function() {
      return Z(this, void 0, void 0, function() {
        var e, n, o, a, i, s = this;
        return ee(this, function(u) {
          switch (u.label) {
            case 0:
              return [4, this.parentTask];
            case 1:
              return e = u.sent(), n = e.map(function(c) {
                return c.detection;
              }), this.input instanceof Se ? [4, Wi(this.input, n)] : [3, 3];
            case 2:
              return a = u.sent(), [3, 5];
            case 3:
              return [4, Li(this.input, n)];
            case 4:
              a = u.sent(), u.label = 5;
            case 5:
              return o = a, [4, Promise.all(o.map(function(c) {
                return s.landmarkNet.detectLandmarks(c);
              }))];
            case 6:
              return i = u.sent(), o.forEach(function(c) {
                return c instanceof Se && c.dispose();
              }), [2, e.map(function(c, l) {
                return Hi(c, i[l]);
              })];
          }
        });
      });
    }, t.prototype.withFaceExpressions = function() {
      return new Qi(this, this.input);
    }, t.prototype.withAgeAndGender = function() {
      return new ns(this, this.input);
    }, t.prototype.withFaceDescriptors = function() {
      return new os(this, this.input);
    }, t;
  }(zl)
), L0 = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.run = function() {
      return Z(this, void 0, void 0, function() {
        var e, n, o, a, i;
        return ee(this, function(s) {
          switch (s.label) {
            case 0:
              return [4, this.parentTask];
            case 1:
              return e = s.sent(), e ? (n = e.detection, this.input instanceof Se ? [4, Wi(this.input, [n])] : [3, 3]) : [
                2
                /*return*/
              ];
            case 2:
              return a = s.sent(), [3, 5];
            case 3:
              return [4, Li(this.input, [n])];
            case 4:
              a = s.sent(), s.label = 5;
            case 5:
              return o = a, [4, this.landmarkNet.detectLandmarks(o[0])];
            case 6:
              return i = s.sent(), o.forEach(function(u) {
                return u instanceof Se && u.dispose();
              }), [2, Hi(e, i)];
          }
        });
      });
    }, t.prototype.withFaceExpressions = function() {
      return new Zi(this, this.input);
    }, t.prototype.withAgeAndGender = function() {
      return new rs(this, this.input);
    }, t.prototype.withFaceDescriptor = function() {
      return new as(this, this.input);
    }, t;
  }(zl)
), Vl = (
  /** @class */
  function(r) {
    oe(t, r);
    function t(e, n) {
      n === void 0 && (n = new Wo());
      var o = r.call(this) || this;
      return o.input = e, o.options = n, o;
    }
    return t;
  }(Dr)
), Hl = (
  /** @class */
  function(r) {
    oe(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.run = function() {
      return Z(this, void 0, void 0, function() {
        var e, n, o, a;
        return ee(this, function(i) {
          switch (i.label) {
            case 0:
              return e = this, n = e.input, o = e.options, o instanceof Nl ? [4, pt.mtcnn.forward(n, o)] : [3, 2];
            case 1:
              return [2, i.sent().map(function(s) {
                return s.detection;
              })];
            case 2:
              if (a = o instanceof Ol ? function(s) {
                return pt.tinyFaceDetector.locateFaces(s, o);
              } : o instanceof Wo ? function(s) {
                return pt.ssdMobilenetv1.locateFaces(s, o);
              } : o instanceof ji ? function(s) {
                return pt.tinyYolov2.locateFaces(s, o);
              } : null, !a)
                throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");
              return [2, a(n)];
          }
        });
      });
    }, t.prototype.runAndExtendWithFaceDetections = function() {
      var e = this;
      return new Promise(function(n) {
        return Z(e, void 0, void 0, function() {
          var o;
          return ee(this, function(a) {
            switch (a.label) {
              case 0:
                return [4, this.run()];
              case 1:
                return o = a.sent(), [2, n(o.map(function(i) {
                  return Oi({}, i);
                }))];
            }
          });
        });
      });
    }, t.prototype.withFaceLandmarks = function(e) {
      return e === void 0 && (e = !1), new B0(this.runAndExtendWithFaceDetections(), this.input, e);
    }, t.prototype.withFaceExpressions = function() {
      return new Yi(this.runAndExtendWithFaceDetections(), this.input);
    }, t.prototype.withAgeAndGender = function() {
      return new es(this.runAndExtendWithFaceDetections(), this.input);
    }, t;
  }(Vl)
);
(function(r) {
  oe(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.run = function() {
    return Z(this, void 0, void 0, function() {
      var e, n;
      return ee(this, function(o) {
        switch (o.label) {
          case 0:
            return [4, new Hl(this.input, this.options)];
          case 1:
            return e = o.sent(), n = e[0], e.forEach(function(a) {
              a.score > n.score && (n = a);
            }), [2, n];
        }
      });
    });
  }, t.prototype.runAndExtendWithFaceDetection = function() {
    var e = this;
    return new Promise(function(n) {
      return Z(e, void 0, void 0, function() {
        var o;
        return ee(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, this.run()];
            case 1:
              return o = a.sent(), [2, n(o ? Oi({}, o) : void 0)];
          }
        });
      });
    });
  }, t.prototype.withFaceLandmarks = function(e) {
    return e === void 0 && (e = !1), new L0(this.runAndExtendWithFaceDetection(), this.input, e);
  }, t.prototype.withFaceExpressions = function() {
    return new Ji(this.runAndExtendWithFaceDetection(), this.input);
  }, t.prototype.withAgeAndGender = function() {
    return new ts(this.runAndExtendWithFaceDetection(), this.input);
  }, t;
})(Vl);
function W0(r, t) {
  return t === void 0 && (t = new Wo()), new Hl(r, t);
}
function U0(r, t) {
  if (r.length !== t.length)
    throw new Error("euclideanDistance: arr1.length !== arr2.length");
  var e = Array.from(r), n = Array.from(t);
  return Math.sqrt(e.map(function(o, a) {
    return o - n[a];
  }).reduce(function(o, a) {
    return o + Math.pow(a, 2);
  }, 0));
}
(function() {
  function r(t, e) {
    e === void 0 && (e = 0.6), this._distanceThreshold = e;
    var n = Array.isArray(t) ? t : [t];
    if (!n.length)
      throw new Error("FaceRecognizer.constructor - expected atleast one input");
    var o = 1, a = function() {
      return "person " + o++;
    };
    this._labeledDescriptors = n.map(function(i) {
      if (i instanceof Gr)
        return i;
      if (i instanceof Float32Array)
        return new Gr(a(), [i]);
      if (i.descriptor && i.descriptor instanceof Float32Array)
        return new Gr(a(), [i.descriptor]);
      throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>");
    });
  }
  return Object.defineProperty(r.prototype, "labeledDescriptors", {
    get: function() {
      return this._labeledDescriptors;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(r.prototype, "distanceThreshold", {
    get: function() {
      return this._distanceThreshold;
    },
    enumerable: !0,
    configurable: !0
  }), r.prototype.computeMeanDistance = function(t, e) {
    return e.map(function(n) {
      return U0(n, t);
    }).reduce(function(n, o) {
      return n + o;
    }, 0) / (e.length || 1);
  }, r.prototype.matchDescriptor = function(t) {
    var e = this;
    return this.labeledDescriptors.map(function(n) {
      var o = n.descriptors, a = n.label;
      return new su(a, e.computeMeanDistance(t, o));
    }).reduce(function(n, o) {
      return n.distance < o.distance ? n : o;
    });
  }, r.prototype.findBestMatch = function(t) {
    var e = this.matchDescriptor(t);
    return e.distance < this.distanceThreshold ? e : new su("unknown", e.distance);
  }, r.prototype.toJSON = function() {
    return {
      distanceThreshold: this.distanceThreshold,
      labeledDescriptors: this.labeledDescriptors.map(function(t) {
        return t.toJSON();
      })
    };
  }, r.fromJSON = function(t) {
    var e = t.labeledDescriptors.map(function(n) {
      return Gr.fromJSON(n);
    });
    return new r(e, t.distanceThreshold);
  }, r;
})();
function Gl(r, t) {
  return function() {
    return r.apply(t, arguments);
  };
}
const { toString: z0 } = Object.prototype, { getPrototypeOf: is } = Object, { iterator: zo, toStringTag: ql } = Symbol, Vo = /* @__PURE__ */ ((r) => (t) => {
  const e = z0.call(t);
  return r[e] || (r[e] = e.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), _t = (r) => (r = r.toLowerCase(), (t) => Vo(t) === r), Ho = (r) => (t) => typeof t === r, { isArray: rr } = Array, xr = Ho("undefined");
function Tr(r) {
  return r !== null && !xr(r) && r.constructor !== null && !xr(r.constructor) && rt(r.constructor.isBuffer) && r.constructor.isBuffer(r);
}
const jl = _t("ArrayBuffer");
function V0(r) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(r) : t = r && r.buffer && jl(r.buffer), t;
}
const H0 = Ho("string"), rt = Ho("function"), Kl = Ho("number"), Nr = (r) => r !== null && typeof r == "object", G0 = (r) => r === !0 || r === !1, Yr = (r) => {
  if (Vo(r) !== "object")
    return !1;
  const t = is(r);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ql in r) && !(zo in r);
}, q0 = (r) => {
  if (!Nr(r) || Tr(r))
    return !1;
  try {
    return Object.keys(r).length === 0 && Object.getPrototypeOf(r) === Object.prototype;
  } catch {
    return !1;
  }
}, j0 = _t("Date"), K0 = _t("File"), X0 = _t("Blob"), $0 = _t("FileList"), Y0 = (r) => Nr(r) && rt(r.pipe), J0 = (r) => {
  let t;
  return r && (typeof FormData == "function" && r instanceof FormData || rt(r.append) && ((t = Vo(r)) === "formdata" || // detect form-data instance
  t === "object" && rt(r.toString) && r.toString() === "[object FormData]"));
}, Q0 = _t("URLSearchParams"), [Z0, eb, tb, nb] = ["ReadableStream", "Request", "Response", "Headers"].map(_t), rb = (r) => r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Fr(r, t, { allOwnKeys: e = !1 } = {}) {
  if (r === null || typeof r > "u")
    return;
  let n, o;
  if (typeof r != "object" && (r = [r]), rr(r))
    for (n = 0, o = r.length; n < o; n++)
      t.call(null, r[n], n, r);
  else {
    if (Tr(r))
      return;
    const a = e ? Object.getOwnPropertyNames(r) : Object.keys(r), i = a.length;
    let s;
    for (n = 0; n < i; n++)
      s = a[n], t.call(null, r[s], s, r);
  }
}
function Xl(r, t) {
  if (Tr(r))
    return null;
  t = t.toLowerCase();
  const e = Object.keys(r);
  let n = e.length, o;
  for (; n-- > 0; )
    if (o = e[n], t === o.toLowerCase())
      return o;
  return null;
}
const wn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, $l = (r) => !xr(r) && r !== wn;
function Ja() {
  const { caseless: r } = $l(this) && this || {}, t = {}, e = (n, o) => {
    const a = r && Xl(t, o) || o;
    Yr(t[a]) && Yr(n) ? t[a] = Ja(t[a], n) : Yr(n) ? t[a] = Ja({}, n) : rr(n) ? t[a] = n.slice() : t[a] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Fr(arguments[n], e);
  return t;
}
const ob = (r, t, e, { allOwnKeys: n } = {}) => (Fr(t, (o, a) => {
  e && rt(o) ? r[a] = Gl(o, e) : r[a] = o;
}, { allOwnKeys: n }), r), ab = (r) => (r.charCodeAt(0) === 65279 && (r = r.slice(1)), r), ib = (r, t, e, n) => {
  r.prototype = Object.create(t.prototype, n), r.prototype.constructor = r, Object.defineProperty(r, "super", {
    value: t.prototype
  }), e && Object.assign(r.prototype, e);
}, sb = (r, t, e, n) => {
  let o, a, i;
  const s = {};
  if (t = t || {}, r == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(r), a = o.length; a-- > 0; )
      i = o[a], (!n || n(i, r, t)) && !s[i] && (t[i] = r[i], s[i] = !0);
    r = e !== !1 && is(r);
  } while (r && (!e || e(r, t)) && r !== Object.prototype);
  return t;
}, ub = (r, t, e) => {
  r = String(r), (e === void 0 || e > r.length) && (e = r.length), e -= t.length;
  const n = r.indexOf(t, e);
  return n !== -1 && n === e;
}, cb = (r) => {
  if (!r) return null;
  if (rr(r)) return r;
  let t = r.length;
  if (!Kl(t)) return null;
  const e = new Array(t);
  for (; t-- > 0; )
    e[t] = r[t];
  return e;
}, lb = /* @__PURE__ */ ((r) => (t) => r && t instanceof r)(typeof Uint8Array < "u" && is(Uint8Array)), fb = (r, t) => {
  const n = (r && r[zo]).call(r);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const a = o.value;
    t.call(r, a[0], a[1]);
  }
}, hb = (r, t) => {
  let e;
  const n = [];
  for (; (e = r.exec(t)) !== null; )
    n.push(e);
  return n;
}, pb = _t("HTMLFormElement"), db = (r) => r.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(e, n, o) {
    return n.toUpperCase() + o;
  }
), pu = (({ hasOwnProperty: r }) => (t, e) => r.call(t, e))(Object.prototype), vb = _t("RegExp"), Yl = (r, t) => {
  const e = Object.getOwnPropertyDescriptors(r), n = {};
  Fr(e, (o, a) => {
    let i;
    (i = t(o, a, r)) !== !1 && (n[a] = i || o);
  }), Object.defineProperties(r, n);
}, mb = (r) => {
  Yl(r, (t, e) => {
    if (rt(r) && ["arguments", "caller", "callee"].indexOf(e) !== -1)
      return !1;
    const n = r[e];
    if (rt(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + e + "'");
      });
    }
  });
}, gb = (r, t) => {
  const e = {}, n = (o) => {
    o.forEach((a) => {
      e[a] = !0;
    });
  };
  return rr(r) ? n(r) : n(String(r).split(t)), e;
}, yb = () => {
}, bb = (r, t) => r != null && Number.isFinite(r = +r) ? r : t;
function xb(r) {
  return !!(r && rt(r.append) && r[ql] === "FormData" && r[zo]);
}
const wb = (r) => {
  const t = new Array(10), e = (n, o) => {
    if (Nr(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (Tr(n))
        return n;
      if (!("toJSON" in n)) {
        t[o] = n;
        const a = rr(n) ? [] : {};
        return Fr(n, (i, s) => {
          const u = e(i, o + 1);
          !xr(u) && (a[s] = u);
        }), t[o] = void 0, a;
      }
    }
    return n;
  };
  return e(r, 0);
}, Cb = _t("AsyncFunction"), Eb = (r) => r && (Nr(r) || rt(r)) && rt(r.then) && rt(r.catch), Jl = ((r, t) => r ? setImmediate : t ? ((e, n) => (wn.addEventListener("message", ({ source: o, data: a }) => {
  o === wn && a === e && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), wn.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(
  typeof setImmediate == "function",
  rt(wn.postMessage)
), _b = typeof queueMicrotask < "u" ? queueMicrotask.bind(wn) : typeof process < "u" && process.nextTick || Jl, Rb = (r) => r != null && rt(r[zo]), O = {
  isArray: rr,
  isArrayBuffer: jl,
  isBuffer: Tr,
  isFormData: J0,
  isArrayBufferView: V0,
  isString: H0,
  isNumber: Kl,
  isBoolean: G0,
  isObject: Nr,
  isPlainObject: Yr,
  isEmptyObject: q0,
  isReadableStream: Z0,
  isRequest: eb,
  isResponse: tb,
  isHeaders: nb,
  isUndefined: xr,
  isDate: j0,
  isFile: K0,
  isBlob: X0,
  isRegExp: vb,
  isFunction: rt,
  isStream: Y0,
  isURLSearchParams: Q0,
  isTypedArray: lb,
  isFileList: $0,
  forEach: Fr,
  merge: Ja,
  extend: ob,
  trim: rb,
  stripBOM: ab,
  inherits: ib,
  toFlatObject: sb,
  kindOf: Vo,
  kindOfTest: _t,
  endsWith: ub,
  toArray: cb,
  forEachEntry: fb,
  matchAll: hb,
  isHTMLForm: pb,
  hasOwnProperty: pu,
  hasOwnProp: pu,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Yl,
  freezeMethods: mb,
  toObjectSet: gb,
  toCamelCase: db,
  noop: yb,
  toFiniteNumber: bb,
  findKey: Xl,
  global: wn,
  isContextDefined: $l,
  isSpecCompliantForm: xb,
  toJSONObject: wb,
  isAsyncFn: Cb,
  isThenable: Eb,
  setImmediate: Jl,
  asap: _b,
  isIterable: Rb
};
function ie(r, t, e, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = r, this.name = "AxiosError", t && (this.code = t), e && (this.config = e), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
O.inherits(ie, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: O.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Ql = ie.prototype, Zl = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((r) => {
  Zl[r] = { value: r };
});
Object.defineProperties(ie, Zl);
Object.defineProperty(Ql, "isAxiosError", { value: !0 });
ie.from = (r, t, e, n, o, a) => {
  const i = Object.create(Ql);
  return O.toFlatObject(r, i, function(u) {
    return u !== Error.prototype;
  }, (s) => s !== "isAxiosError"), ie.call(i, r.message, t, e, n, o), i.cause = r, i.name = r.name, a && Object.assign(i, a), i;
};
const Sb = null;
function Qa(r) {
  return O.isPlainObject(r) || O.isArray(r);
}
function ef(r) {
  return O.endsWith(r, "[]") ? r.slice(0, -2) : r;
}
function du(r, t, e) {
  return r ? r.concat(t).map(function(o, a) {
    return o = ef(o), !e && a ? "[" + o + "]" : o;
  }).join(e ? "." : "") : t;
}
function Ib(r) {
  return O.isArray(r) && !r.some(Qa);
}
const kb = O.toFlatObject(O, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Go(r, t, e) {
  if (!O.isObject(r))
    throw new TypeError("target must be an object");
  t = t || new FormData(), e = O.toFlatObject(e, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, v) {
    return !O.isUndefined(v[m]);
  });
  const n = e.metaTokens, o = e.visitor || l, a = e.dots, i = e.indexes, u = (e.Blob || typeof Blob < "u" && Blob) && O.isSpecCompliantForm(t);
  if (!O.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(d) {
    if (d === null) return "";
    if (O.isDate(d))
      return d.toISOString();
    if (O.isBoolean(d))
      return d.toString();
    if (!u && O.isBlob(d))
      throw new ie("Blob is not supported. Use a Buffer instead.");
    return O.isArrayBuffer(d) || O.isTypedArray(d) ? u && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, m, v) {
    let g = d;
    if (d && !v && typeof d == "object") {
      if (O.endsWith(m, "{}"))
        m = n ? m : m.slice(0, -2), d = JSON.stringify(d);
      else if (O.isArray(d) && Ib(d) || (O.isFileList(d) || O.endsWith(m, "[]")) && (g = O.toArray(d)))
        return m = ef(m), g.forEach(function(x, b) {
          !(O.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? du([m], b, a) : i === null ? m : m + "[]",
            c(x)
          );
        }), !1;
    }
    return Qa(d) ? !0 : (t.append(du(v, m, a), c(d)), !1);
  }
  const f = [], h = Object.assign(kb, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: Qa
  });
  function p(d, m) {
    if (!O.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(d), O.forEach(d, function(g, y) {
        (!(O.isUndefined(g) || g === null) && o.call(
          t,
          g,
          O.isString(y) ? y.trim() : y,
          m,
          h
        )) === !0 && p(g, m ? m.concat(y) : [y]);
      }), f.pop();
    }
  }
  if (!O.isObject(r))
    throw new TypeError("data must be an object");
  return p(r), t;
}
function vu(r) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function ss(r, t) {
  this._pairs = [], r && Go(r, this, t);
}
const tf = ss.prototype;
tf.append = function(t, e) {
  this._pairs.push([t, e]);
};
tf.toString = function(t) {
  const e = t ? function(n) {
    return t.call(this, n, vu);
  } : vu;
  return this._pairs.map(function(o) {
    return e(o[0]) + "=" + e(o[1]);
  }, "").join("&");
};
function Ab(r) {
  return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function nf(r, t, e) {
  if (!t)
    return r;
  const n = e && e.encode || Ab;
  O.isFunction(e) && (e = {
    serialize: e
  });
  const o = e && e.serialize;
  let a;
  if (o ? a = o(t, e) : a = O.isURLSearchParams(t) ? t.toString() : new ss(t, e).toString(n), a) {
    const i = r.indexOf("#");
    i !== -1 && (r = r.slice(0, i)), r += (r.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return r;
}
class mu {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, e, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: e,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    O.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const rf = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Db = typeof URLSearchParams < "u" ? URLSearchParams : ss, Tb = typeof FormData < "u" ? FormData : null, Nb = typeof Blob < "u" ? Blob : null, Fb = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Db,
    FormData: Tb,
    Blob: Nb
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, us = typeof window < "u" && typeof document < "u", Za = typeof navigator == "object" && navigator || void 0, Pb = us && (!Za || ["ReactNative", "NativeScript", "NS"].indexOf(Za.product) < 0), Ob = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Mb = us && window.location.href || "http://localhost", Bb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: us,
  hasStandardBrowserEnv: Pb,
  hasStandardBrowserWebWorkerEnv: Ob,
  navigator: Za,
  origin: Mb
}, Symbol.toStringTag, { value: "Module" })), Je = {
  ...Bb,
  ...Fb
};
function Lb(r, t) {
  return Go(r, new Je.classes.URLSearchParams(), {
    visitor: function(e, n, o, a) {
      return Je.isNode && O.isBuffer(e) ? (this.append(n, e.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Wb(r) {
  return O.matchAll(/\w+|\[(\w*)]/g, r).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ub(r) {
  const t = {}, e = Object.keys(r);
  let n;
  const o = e.length;
  let a;
  for (n = 0; n < o; n++)
    a = e[n], t[a] = r[a];
  return t;
}
function of(r) {
  function t(e, n, o, a) {
    let i = e[a++];
    if (i === "__proto__") return !0;
    const s = Number.isFinite(+i), u = a >= e.length;
    return i = !i && O.isArray(o) ? o.length : i, u ? (O.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !s) : ((!o[i] || !O.isObject(o[i])) && (o[i] = []), t(e, n, o[i], a) && O.isArray(o[i]) && (o[i] = Ub(o[i])), !s);
  }
  if (O.isFormData(r) && O.isFunction(r.entries)) {
    const e = {};
    return O.forEachEntry(r, (n, o) => {
      t(Wb(n), o, e, 0);
    }), e;
  }
  return null;
}
function zb(r, t, e) {
  if (O.isString(r))
    try {
      return (t || JSON.parse)(r), O.trim(r);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (e || JSON.stringify)(r);
}
const Pr = {
  transitional: rf,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, e) {
    const n = e.getContentType() || "", o = n.indexOf("application/json") > -1, a = O.isObject(t);
    if (a && O.isHTMLForm(t) && (t = new FormData(t)), O.isFormData(t))
      return o ? JSON.stringify(of(t)) : t;
    if (O.isArrayBuffer(t) || O.isBuffer(t) || O.isStream(t) || O.isFile(t) || O.isBlob(t) || O.isReadableStream(t))
      return t;
    if (O.isArrayBufferView(t))
      return t.buffer;
    if (O.isURLSearchParams(t))
      return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Lb(t, this.formSerializer).toString();
      if ((s = O.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Go(
          s ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return a || o ? (e.setContentType("application/json", !1), zb(t)) : t;
  }],
  transformResponse: [function(t) {
    const e = this.transitional || Pr.transitional, n = e && e.forcedJSONParsing, o = this.responseType === "json";
    if (O.isResponse(t) || O.isReadableStream(t))
      return t;
    if (t && O.isString(t) && (n && !this.responseType || o)) {
      const i = !(e && e.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (i)
          throw s.name === "SyntaxError" ? ie.from(s, ie.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Je.classes.FormData,
    Blob: Je.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
O.forEach(["delete", "get", "head", "post", "put", "patch"], (r) => {
  Pr.headers[r] = {};
});
const Vb = O.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Hb = (r) => {
  const t = {};
  let e, n, o;
  return r && r.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), e = i.substring(0, o).trim().toLowerCase(), n = i.substring(o + 1).trim(), !(!e || t[e] && Vb[e]) && (e === "set-cookie" ? t[e] ? t[e].push(n) : t[e] = [n] : t[e] = t[e] ? t[e] + ", " + n : n);
  }), t;
}, gu = Symbol("internals");
function cr(r) {
  return r && String(r).trim().toLowerCase();
}
function Jr(r) {
  return r === !1 || r == null ? r : O.isArray(r) ? r.map(Jr) : String(r);
}
function Gb(r) {
  const t = /* @__PURE__ */ Object.create(null), e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = e.exec(r); )
    t[n[1]] = n[2];
  return t;
}
const qb = (r) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());
function Ra(r, t, e, n, o) {
  if (O.isFunction(n))
    return n.call(this, t, e);
  if (o && (t = e), !!O.isString(t)) {
    if (O.isString(n))
      return t.indexOf(n) !== -1;
    if (O.isRegExp(n))
      return n.test(t);
  }
}
function jb(r) {
  return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, e, n) => e.toUpperCase() + n);
}
function Kb(r, t) {
  const e = O.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(r, n + e, {
      value: function(o, a, i) {
        return this[n].call(this, t, o, a, i);
      },
      configurable: !0
    });
  });
}
let ot = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, e, n) {
    const o = this;
    function a(s, u, c) {
      const l = cr(u);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = O.findKey(o, l);
      (!f || o[f] === void 0 || c === !0 || c === void 0 && o[f] !== !1) && (o[f || u] = Jr(s));
    }
    const i = (s, u) => O.forEach(s, (c, l) => a(c, l, u));
    if (O.isPlainObject(t) || t instanceof this.constructor)
      i(t, e);
    else if (O.isString(t) && (t = t.trim()) && !qb(t))
      i(Hb(t), e);
    else if (O.isObject(t) && O.isIterable(t)) {
      let s = {}, u, c;
      for (const l of t) {
        if (!O.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        s[c = l[0]] = (u = s[c]) ? O.isArray(u) ? [...u, l[1]] : [u, l[1]] : l[1];
      }
      i(s, e);
    } else
      t != null && a(e, t, n);
    return this;
  }
  get(t, e) {
    if (t = cr(t), t) {
      const n = O.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!e)
          return o;
        if (e === !0)
          return Gb(o);
        if (O.isFunction(e))
          return e.call(this, o, n);
        if (O.isRegExp(e))
          return e.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, e) {
    if (t = cr(t), t) {
      const n = O.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!e || Ra(this, this[n], n, e)));
    }
    return !1;
  }
  delete(t, e) {
    const n = this;
    let o = !1;
    function a(i) {
      if (i = cr(i), i) {
        const s = O.findKey(n, i);
        s && (!e || Ra(n, n[s], s, e)) && (delete n[s], o = !0);
      }
    }
    return O.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const e = Object.keys(this);
    let n = e.length, o = !1;
    for (; n--; ) {
      const a = e[n];
      (!t || Ra(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const e = this, n = {};
    return O.forEach(this, (o, a) => {
      const i = O.findKey(n, a);
      if (i) {
        e[i] = Jr(o), delete e[a];
        return;
      }
      const s = t ? jb(a) : String(a).trim();
      s !== a && delete e[a], e[s] = Jr(o), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const e = /* @__PURE__ */ Object.create(null);
    return O.forEach(this, (n, o) => {
      n != null && n !== !1 && (e[o] = t && O.isArray(n) ? n.join(", ") : n);
    }), e;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, e]) => t + ": " + e).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...e) {
    const n = new this(t);
    return e.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[gu] = this[gu] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(i) {
      const s = cr(i);
      n[s] || (Kb(o, i), n[s] = !0);
    }
    return O.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
ot.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
O.reduceDescriptors(ot.prototype, ({ value: r }, t) => {
  let e = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => r,
    set(n) {
      this[e] = n;
    }
  };
});
O.freezeMethods(ot);
function Sa(r, t) {
  const e = this || Pr, n = t || e, o = ot.from(n.headers);
  let a = n.data;
  return O.forEach(r, function(s) {
    a = s.call(e, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function af(r) {
  return !!(r && r.__CANCEL__);
}
function or(r, t, e) {
  ie.call(this, r ?? "canceled", ie.ERR_CANCELED, t, e), this.name = "CanceledError";
}
O.inherits(or, ie, {
  __CANCEL__: !0
});
function sf(r, t, e) {
  const n = e.config.validateStatus;
  !e.status || !n || n(e.status) ? r(e) : t(new ie(
    "Request failed with status code " + e.status,
    [ie.ERR_BAD_REQUEST, ie.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4],
    e.config,
    e.request,
    e
  ));
}
function Xb(r) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
  return t && t[1] || "";
}
function $b(r, t) {
  r = r || 10;
  const e = new Array(r), n = new Array(r);
  let o = 0, a = 0, i;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const c = Date.now(), l = n[a];
    i || (i = c), e[o] = u, n[o] = c;
    let f = a, h = 0;
    for (; f !== o; )
      h += e[f++], f = f % r;
    if (o = (o + 1) % r, o === a && (a = (a + 1) % r), c - i < t)
      return;
    const p = l && c - l;
    return p ? Math.round(h * 1e3 / p) : void 0;
  };
}
function Yb(r, t) {
  let e = 0, n = 1e3 / t, o, a;
  const i = (c, l = Date.now()) => {
    e = l, o = null, a && (clearTimeout(a), a = null), r(...c);
  };
  return [(...c) => {
    const l = Date.now(), f = l - e;
    f >= n ? i(c, l) : (o = c, a || (a = setTimeout(() => {
      a = null, i(o);
    }, n - f)));
  }, () => o && i(o)];
}
const Eo = (r, t, e = 3) => {
  let n = 0;
  const o = $b(50, 250);
  return Yb((a) => {
    const i = a.loaded, s = a.lengthComputable ? a.total : void 0, u = i - n, c = o(u), l = i <= s;
    n = i;
    const f = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: u,
      rate: c || void 0,
      estimated: c && s && l ? (s - i) / c : void 0,
      event: a,
      lengthComputable: s != null,
      [t ? "download" : "upload"]: !0
    };
    r(f);
  }, e);
}, yu = (r, t) => {
  const e = r != null;
  return [(n) => t[0]({
    lengthComputable: e,
    total: r,
    loaded: n
  }), t[1]];
}, bu = (r) => (...t) => O.asap(() => r(...t)), Jb = Je.hasStandardBrowserEnv ? /* @__PURE__ */ ((r, t) => (e) => (e = new URL(e, Je.origin), r.protocol === e.protocol && r.host === e.host && (t || r.port === e.port)))(
  new URL(Je.origin),
  Je.navigator && /(msie|trident)/i.test(Je.navigator.userAgent)
) : () => !0, Qb = Je.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(r, t, e, n, o, a) {
      const i = [r + "=" + encodeURIComponent(t)];
      O.isNumber(e) && i.push("expires=" + new Date(e).toGMTString()), O.isString(n) && i.push("path=" + n), O.isString(o) && i.push("domain=" + o), a === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(r) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(r) {
      this.write(r, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Zb(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}
function ex(r, t) {
  return t ? r.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : r;
}
function uf(r, t, e) {
  let n = !Zb(t);
  return r && (n || e == !1) ? ex(r, t) : t;
}
const xu = (r) => r instanceof ot ? { ...r } : r;
function Sn(r, t) {
  t = t || {};
  const e = {};
  function n(c, l, f, h) {
    return O.isPlainObject(c) && O.isPlainObject(l) ? O.merge.call({ caseless: h }, c, l) : O.isPlainObject(l) ? O.merge({}, l) : O.isArray(l) ? l.slice() : l;
  }
  function o(c, l, f, h) {
    if (O.isUndefined(l)) {
      if (!O.isUndefined(c))
        return n(void 0, c, f, h);
    } else return n(c, l, f, h);
  }
  function a(c, l) {
    if (!O.isUndefined(l))
      return n(void 0, l);
  }
  function i(c, l) {
    if (O.isUndefined(l)) {
      if (!O.isUndefined(c))
        return n(void 0, c);
    } else return n(void 0, l);
  }
  function s(c, l, f) {
    if (f in t)
      return n(c, l);
    if (f in r)
      return n(void 0, c);
  }
  const u = {
    url: a,
    method: a,
    data: a,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: s,
    headers: (c, l, f) => o(xu(c), xu(l), f, !0)
  };
  return O.forEach(Object.keys({ ...r, ...t }), function(l) {
    const f = u[l] || o, h = f(r[l], t[l], l);
    O.isUndefined(h) && f !== s || (e[l] = h);
  }), e;
}
const cf = (r) => {
  const t = Sn({}, r);
  let { data: e, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: a, headers: i, auth: s } = t;
  t.headers = i = ot.from(i), t.url = nf(uf(t.baseURL, t.url, t.allowAbsoluteUrls), r.params, r.paramsSerializer), s && i.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let u;
  if (O.isFormData(e)) {
    if (Je.hasStandardBrowserEnv || Je.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((u = i.getContentType()) !== !1) {
      const [c, ...l] = u ? u.split(";").map((f) => f.trim()).filter(Boolean) : [];
      i.setContentType([c || "multipart/form-data", ...l].join("; "));
    }
  }
  if (Je.hasStandardBrowserEnv && (n && O.isFunction(n) && (n = n(t)), n || n !== !1 && Jb(t.url))) {
    const c = o && a && Qb.read(a);
    c && i.set(o, c);
  }
  return t;
}, tx = typeof XMLHttpRequest < "u", nx = tx && function(r) {
  return new Promise(function(e, n) {
    const o = cf(r);
    let a = o.data;
    const i = ot.from(o.headers).normalize();
    let { responseType: s, onUploadProgress: u, onDownloadProgress: c } = o, l, f, h, p, d;
    function m() {
      p && p(), d && d(), o.cancelToken && o.cancelToken.unsubscribe(l), o.signal && o.signal.removeEventListener("abort", l);
    }
    let v = new XMLHttpRequest();
    v.open(o.method.toUpperCase(), o.url, !0), v.timeout = o.timeout;
    function g() {
      if (!v)
        return;
      const x = ot.from(
        "getAllResponseHeaders" in v && v.getAllResponseHeaders()
      ), w = {
        data: !s || s === "text" || s === "json" ? v.responseText : v.response,
        status: v.status,
        statusText: v.statusText,
        headers: x,
        config: r,
        request: v
      };
      sf(function(k) {
        e(k), m();
      }, function(k) {
        n(k), m();
      }, w), v = null;
    }
    "onloadend" in v ? v.onloadend = g : v.onreadystatechange = function() {
      !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, v.onabort = function() {
      v && (n(new ie("Request aborted", ie.ECONNABORTED, r, v)), v = null);
    }, v.onerror = function() {
      n(new ie("Network Error", ie.ERR_NETWORK, r, v)), v = null;
    }, v.ontimeout = function() {
      let b = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const w = o.transitional || rf;
      o.timeoutErrorMessage && (b = o.timeoutErrorMessage), n(new ie(
        b,
        w.clarifyTimeoutError ? ie.ETIMEDOUT : ie.ECONNABORTED,
        r,
        v
      )), v = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in v && O.forEach(i.toJSON(), function(b, w) {
      v.setRequestHeader(w, b);
    }), O.isUndefined(o.withCredentials) || (v.withCredentials = !!o.withCredentials), s && s !== "json" && (v.responseType = o.responseType), c && ([h, d] = Eo(c, !0), v.addEventListener("progress", h)), u && v.upload && ([f, p] = Eo(u), v.upload.addEventListener("progress", f), v.upload.addEventListener("loadend", p)), (o.cancelToken || o.signal) && (l = (x) => {
      v && (n(!x || x.type ? new or(null, r, v) : x), v.abort(), v = null);
    }, o.cancelToken && o.cancelToken.subscribe(l), o.signal && (o.signal.aborted ? l() : o.signal.addEventListener("abort", l)));
    const y = Xb(o.url);
    if (y && Je.protocols.indexOf(y) === -1) {
      n(new ie("Unsupported protocol " + y + ":", ie.ERR_BAD_REQUEST, r));
      return;
    }
    v.send(a || null);
  });
}, rx = (r, t) => {
  const { length: e } = r = r ? r.filter(Boolean) : [];
  if (t || e) {
    let n = new AbortController(), o;
    const a = function(c) {
      if (!o) {
        o = !0, s();
        const l = c instanceof Error ? c : this.reason;
        n.abort(l instanceof ie ? l : new or(l instanceof Error ? l.message : l));
      }
    };
    let i = t && setTimeout(() => {
      i = null, a(new ie(`timeout ${t} of ms exceeded`, ie.ETIMEDOUT));
    }, t);
    const s = () => {
      r && (i && clearTimeout(i), i = null, r.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(a) : c.removeEventListener("abort", a);
      }), r = null);
    };
    r.forEach((c) => c.addEventListener("abort", a));
    const { signal: u } = n;
    return u.unsubscribe = () => O.asap(s), u;
  }
}, ox = function* (r, t) {
  let e = r.byteLength;
  if (e < t) {
    yield r;
    return;
  }
  let n = 0, o;
  for (; n < e; )
    o = n + t, yield r.slice(n, o), n = o;
}, ax = async function* (r, t) {
  for await (const e of ix(r))
    yield* ox(e, t);
}, ix = async function* (r) {
  if (r[Symbol.asyncIterator]) {
    yield* r;
    return;
  }
  const t = r.getReader();
  try {
    for (; ; ) {
      const { done: e, value: n } = await t.read();
      if (e)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, wu = (r, t, e, n) => {
  const o = ax(r, t);
  let a = 0, i, s = (u) => {
    i || (i = !0, n && n(u));
  };
  return new ReadableStream({
    async pull(u) {
      try {
        const { done: c, value: l } = await o.next();
        if (c) {
          s(), u.close();
          return;
        }
        let f = l.byteLength;
        if (e) {
          let h = a += f;
          e(h);
        }
        u.enqueue(new Uint8Array(l));
      } catch (c) {
        throw s(c), c;
      }
    },
    cancel(u) {
      return s(u), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, qo = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", lf = qo && typeof ReadableStream == "function", sx = qo && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((r) => (t) => r.encode(t))(new TextEncoder()) : async (r) => new Uint8Array(await new Response(r).arrayBuffer())), ff = (r, ...t) => {
  try {
    return !!r(...t);
  } catch {
    return !1;
  }
}, ux = lf && ff(() => {
  let r = !1;
  const t = new Request(Je.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return r = !0, "half";
    }
  }).headers.has("Content-Type");
  return r && !t;
}), Cu = 64 * 1024, ei = lf && ff(() => O.isReadableStream(new Response("").body)), _o = {
  stream: ei && ((r) => r.body)
};
qo && ((r) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !_o[t] && (_o[t] = O.isFunction(r[t]) ? (e) => e[t]() : (e, n) => {
      throw new ie(`Response type '${t}' is not supported`, ie.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const cx = async (r) => {
  if (r == null)
    return 0;
  if (O.isBlob(r))
    return r.size;
  if (O.isSpecCompliantForm(r))
    return (await new Request(Je.origin, {
      method: "POST",
      body: r
    }).arrayBuffer()).byteLength;
  if (O.isArrayBufferView(r) || O.isArrayBuffer(r))
    return r.byteLength;
  if (O.isURLSearchParams(r) && (r = r + ""), O.isString(r))
    return (await sx(r)).byteLength;
}, lx = async (r, t) => {
  const e = O.toFiniteNumber(r.getContentLength());
  return e ?? cx(t);
}, fx = qo && (async (r) => {
  let {
    url: t,
    method: e,
    data: n,
    signal: o,
    cancelToken: a,
    timeout: i,
    onDownloadProgress: s,
    onUploadProgress: u,
    responseType: c,
    headers: l,
    withCredentials: f = "same-origin",
    fetchOptions: h
  } = cf(r);
  c = c ? (c + "").toLowerCase() : "text";
  let p = rx([o, a && a.toAbortSignal()], i), d;
  const m = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let v;
  try {
    if (u && ux && e !== "get" && e !== "head" && (v = await lx(l, n)) !== 0) {
      let w = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), C;
      if (O.isFormData(n) && (C = w.headers.get("content-type")) && l.setContentType(C), w.body) {
        const [k, I] = yu(
          v,
          Eo(bu(u))
        );
        n = wu(w.body, Cu, k, I);
      }
    }
    O.isString(f) || (f = f ? "include" : "omit");
    const g = "credentials" in Request.prototype;
    d = new Request(t, {
      ...h,
      signal: p,
      method: e.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: g ? f : void 0
    });
    let y = await fetch(d, h);
    const x = ei && (c === "stream" || c === "response");
    if (ei && (s || x && m)) {
      const w = {};
      ["status", "statusText", "headers"].forEach((R) => {
        w[R] = y[R];
      });
      const C = O.toFiniteNumber(y.headers.get("content-length")), [k, I] = s && yu(
        C,
        Eo(bu(s), !0)
      ) || [];
      y = new Response(
        wu(y.body, Cu, k, () => {
          I && I(), m && m();
        }),
        w
      );
    }
    c = c || "text";
    let b = await _o[O.findKey(_o, c) || "text"](y, r);
    return !x && m && m(), await new Promise((w, C) => {
      sf(w, C, {
        data: b,
        headers: ot.from(y.headers),
        status: y.status,
        statusText: y.statusText,
        config: r,
        request: d
      });
    });
  } catch (g) {
    throw m && m(), g && g.name === "TypeError" && /Load failed|fetch/i.test(g.message) ? Object.assign(
      new ie("Network Error", ie.ERR_NETWORK, r, d),
      {
        cause: g.cause || g
      }
    ) : ie.from(g, g && g.code, r, d);
  }
}), ti = {
  http: Sb,
  xhr: nx,
  fetch: fx
};
O.forEach(ti, (r, t) => {
  if (r) {
    try {
      Object.defineProperty(r, "name", { value: t });
    } catch {
    }
    Object.defineProperty(r, "adapterName", { value: t });
  }
});
const Eu = (r) => `- ${r}`, hx = (r) => O.isFunction(r) || r === null || r === !1, hf = {
  getAdapter: (r) => {
    r = O.isArray(r) ? r : [r];
    const { length: t } = r;
    let e, n;
    const o = {};
    for (let a = 0; a < t; a++) {
      e = r[a];
      let i;
      if (n = e, !hx(e) && (n = ti[(i = String(e)).toLowerCase()], n === void 0))
        throw new ie(`Unknown adapter '${i}'`);
      if (n)
        break;
      o[i || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(o).map(
        ([s, u]) => `adapter ${s} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? a.length > 1 ? `since :
` + a.map(Eu).join(`
`) : " " + Eu(a[0]) : "as no adapter specified";
      throw new ie(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: ti
};
function Ia(r) {
  if (r.cancelToken && r.cancelToken.throwIfRequested(), r.signal && r.signal.aborted)
    throw new or(null, r);
}
function _u(r) {
  return Ia(r), r.headers = ot.from(r.headers), r.data = Sa.call(
    r,
    r.transformRequest
  ), ["post", "put", "patch"].indexOf(r.method) !== -1 && r.headers.setContentType("application/x-www-form-urlencoded", !1), hf.getAdapter(r.adapter || Pr.adapter)(r).then(function(n) {
    return Ia(r), n.data = Sa.call(
      r,
      r.transformResponse,
      n
    ), n.headers = ot.from(n.headers), n;
  }, function(n) {
    return af(n) || (Ia(r), n && n.response && (n.response.data = Sa.call(
      r,
      r.transformResponse,
      n.response
    ), n.response.headers = ot.from(n.response.headers))), Promise.reject(n);
  });
}
const pf = "1.11.0", jo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((r, t) => {
  jo[r] = function(n) {
    return typeof n === r || "a" + (t < 1 ? "n " : " ") + r;
  };
});
const Ru = {};
jo.transitional = function(t, e, n) {
  function o(a, i) {
    return "[Axios v" + pf + "] Transitional option '" + a + "'" + i + (n ? ". " + n : "");
  }
  return (a, i, s) => {
    if (t === !1)
      throw new ie(
        o(i, " has been removed" + (e ? " in " + e : "")),
        ie.ERR_DEPRECATED
      );
    return e && !Ru[i] && (Ru[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + e + " and will be removed in the near future"
      )
    )), t ? t(a, i, s) : !0;
  };
};
jo.spelling = function(t) {
  return (e, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function px(r, t, e) {
  if (typeof r != "object")
    throw new ie("options must be an object", ie.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(r);
  let o = n.length;
  for (; o-- > 0; ) {
    const a = n[o], i = t[a];
    if (i) {
      const s = r[a], u = s === void 0 || i(s, a, r);
      if (u !== !0)
        throw new ie("option " + a + " must be " + u, ie.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (e !== !0)
      throw new ie("Unknown option " + a, ie.ERR_BAD_OPTION);
  }
}
const Qr = {
  assertOptions: px,
  validators: jo
}, At = Qr.validators;
let En = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new mu(),
      response: new mu()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, e) {
    try {
      return await this._request(t, e);
    } catch (n) {
      if (n instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const a = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, e) {
    typeof t == "string" ? (e = e || {}, e.url = t) : e = t || {}, e = Sn(this.defaults, e);
    const { transitional: n, paramsSerializer: o, headers: a } = e;
    n !== void 0 && Qr.assertOptions(n, {
      silentJSONParsing: At.transitional(At.boolean),
      forcedJSONParsing: At.transitional(At.boolean),
      clarifyTimeoutError: At.transitional(At.boolean)
    }, !1), o != null && (O.isFunction(o) ? e.paramsSerializer = {
      serialize: o
    } : Qr.assertOptions(o, {
      encode: At.function,
      serialize: At.function
    }, !0)), e.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : e.allowAbsoluteUrls = !0), Qr.assertOptions(e, {
      baseUrl: At.spelling("baseURL"),
      withXsrfToken: At.spelling("withXSRFToken")
    }, !0), e.method = (e.method || this.defaults.method || "get").toLowerCase();
    let i = a && O.merge(
      a.common,
      a[e.method]
    );
    a && O.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete a[d];
      }
    ), e.headers = ot.concat(i, a);
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(e) === !1 || (u = u && m.synchronous, s.unshift(m.fulfilled, m.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(m) {
      c.push(m.fulfilled, m.rejected);
    });
    let l, f = 0, h;
    if (!u) {
      const d = [_u.bind(this), void 0];
      for (d.unshift(...s), d.push(...c), h = d.length, l = Promise.resolve(e); f < h; )
        l = l.then(d[f++], d[f++]);
      return l;
    }
    h = s.length;
    let p = e;
    for (f = 0; f < h; ) {
      const d = s[f++], m = s[f++];
      try {
        p = d(p);
      } catch (v) {
        m.call(this, v);
        break;
      }
    }
    try {
      l = _u.call(this, p);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, h = c.length; f < h; )
      l = l.then(c[f++], c[f++]);
    return l;
  }
  getUri(t) {
    t = Sn(this.defaults, t);
    const e = uf(t.baseURL, t.url, t.allowAbsoluteUrls);
    return nf(e, t.params, t.paramsSerializer);
  }
};
O.forEach(["delete", "get", "head", "options"], function(t) {
  En.prototype[t] = function(e, n) {
    return this.request(Sn(n || {}, {
      method: t,
      url: e,
      data: (n || {}).data
    }));
  };
});
O.forEach(["post", "put", "patch"], function(t) {
  function e(n) {
    return function(a, i, s) {
      return this.request(Sn(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: i
      }));
    };
  }
  En.prototype[t] = e(), En.prototype[t + "Form"] = e(!0);
});
let dx = class df {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let e;
    this.promise = new Promise(function(a) {
      e = a;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners) return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let a;
      const i = new Promise((s) => {
        n.subscribe(s), a = s;
      }).then(o);
      return i.cancel = function() {
        n.unsubscribe(a);
      }, i;
    }, t(function(a, i, s) {
      n.reason || (n.reason = new or(a, i, s), e(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const e = this._listeners.indexOf(t);
    e !== -1 && this._listeners.splice(e, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), e = (n) => {
      t.abort(n);
    };
    return this.subscribe(e), t.signal.unsubscribe = () => this.unsubscribe(e), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new df(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function vx(r) {
  return function(e) {
    return r.apply(null, e);
  };
}
function mx(r) {
  return O.isObject(r) && r.isAxiosError === !0;
}
const ni = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ni).forEach(([r, t]) => {
  ni[t] = r;
});
function vf(r) {
  const t = new En(r), e = Gl(En.prototype.request, t);
  return O.extend(e, En.prototype, t, { allOwnKeys: !0 }), O.extend(e, t, null, { allOwnKeys: !0 }), e.create = function(o) {
    return vf(Sn(r, o));
  }, e;
}
const Fe = vf(Pr);
Fe.Axios = En;
Fe.CanceledError = or;
Fe.CancelToken = dx;
Fe.isCancel = af;
Fe.VERSION = pf;
Fe.toFormData = Go;
Fe.AxiosError = ie;
Fe.Cancel = Fe.CanceledError;
Fe.all = function(t) {
  return Promise.all(t);
};
Fe.spread = vx;
Fe.isAxiosError = mx;
Fe.mergeConfig = Sn;
Fe.AxiosHeaders = ot;
Fe.formToJSON = (r) => of(O.isHTMLForm(r) ? new FormData(r) : r);
Fe.getAdapter = hf.getAdapter;
Fe.HttpStatusCode = ni;
Fe.default = Fe;
const {
  Axios: xx,
  AxiosError: wx,
  CanceledError: Cx,
  isCancel: Ex,
  CancelToken: _x,
  VERSION: Rx,
  all: Sx,
  Cancel: Ix,
  isAxiosError: kx,
  spread: Ax,
  toFormData: Dx,
  AxiosHeaders: Tx,
  HttpStatusCode: Nx,
  formToJSON: Fx,
  getAdapter: Px,
  mergeConfig: Ox
} = Fe, Mx = ({ apiEndpoint: r, onSuccess: t, onFailure: e }) => {
  const [n, o] = cs(!1), [a, i] = cs("idle"), s = ls(null), u = ls(null);
  fs(() => {
    (async () => {
      const h = "/models";
      try {
        await Promise.all([
          pt.tinyFaceDetector.loadFromUri(h)
        ]), o(!0);
      } catch (p) {
        console.error("BioLogreen SDK Error: Could not load face models.", p), i("error"), e && e({ message: "AI models failed to load." });
      }
    })();
  }, [e]);
  const c = bf(() => {
    !n || a === "detecting" || (i("detecting"), u.current = setInterval(async () => {
      if (s.current && s.current.video) {
        const f = s.current.video;
        if (f.readyState !== 4) return;
        (await W0(f, new Ol())).length === 1 && (clearInterval(u.current), i("capturing"), setTimeout(() => l(), 500));
      }
    }, 1e3));
  }, [n, a]), l = async () => {
    var f;
    if (s.current) {
      const h = s.current.getScreenshot();
      if (!h) {
        i("error"), e && e({ message: "Could not capture image." });
        return;
      }
      const p = h.split(",")[1];
      try {
        const d = await Fe.post(r, { image_base64: p });
        i("success"), t && t(d.data);
      } catch (d) {
        i("error"), e && e(((f = d.response) == null ? void 0 : f.data) || { message: "Authentication failed." });
      }
    }
  };
  return fs(() => () => {
    u.current && clearInterval(u.current);
  }, []), {
    webcamRef: s,
    status: a,
    // 'idle', 'detecting', 'capturing', 'success', 'error'
    modelsLoaded: n,
    startDetection: c
  };
};
export {
  Mx as useBioLogreen
};

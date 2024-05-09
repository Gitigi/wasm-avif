let i;
function j(e) {
  i = e;
}
const u = new Array(128).fill(void 0);
u.push(void 0, null, !0, !1);
function p(e) {
  return u[e];
}
let s = u.length;
function k(e) {
  e < 132 || (u[e] = s, s = e);
}
function m(e) {
  const t = p(e);
  return k(e), t;
}
const E = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
let x = new E("utf-8", { ignoreBOM: !0, fatal: !0 });
x.decode();
let d = null;
function a() {
  return (d === null || d.byteLength === 0) && (d = new Uint8Array(i.memory.buffer)), d;
}
function g(e, t) {
  return e = e >>> 0, x.decode(a().subarray(e, e + t));
}
function h(e) {
  s === u.length && u.push(u.length + 1);
  const t = s;
  return s = u[t], u[t] = e, t;
}
let b = 0;
const A = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
let w = new A("utf-8");
const v = typeof w.encodeInto == "function" ? function(e, t) {
  return w.encodeInto(e, t);
} : function(e, t) {
  const n = w.encode(e);
  return t.set(n), {
    read: e.length,
    written: n.length
  };
};
function M(e, t, n) {
  if (n === void 0) {
    const f = w.encode(e), _ = t(f.length, 1) >>> 0;
    return a().subarray(_, _ + f.length).set(f), b = f.length, _;
  }
  let r = e.length, c = t(r, 1) >>> 0;
  const T = a();
  let o = 0;
  for (; o < r; o++) {
    const f = e.charCodeAt(o);
    if (f > 127)
      break;
    T[c + o] = f;
  }
  if (o !== r) {
    o !== 0 && (e = e.slice(o)), c = n(c, r, r = o + e.length * 3, 1) >>> 0;
    const f = a().subarray(c + o, c + r), _ = v(e, f);
    o += _.written, c = n(c, r, o, 1) >>> 0;
  }
  return b = o, c;
}
let l = null;
function y() {
  return (l === null || l.byteLength === 0) && (l = new Int32Array(i.memory.buffer)), l;
}
function O(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    i.__wbindgen_exn_store(h(n));
  }
}
const W = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e) => i.__wbg_avifworker_free(e >>> 0));
class D {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, W.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_avifworker_free(t);
  }
  /**
  */
  constructor() {
    const t = i.avifworker_new();
    return m(t);
  }
}
function F() {
  const e = new Error();
  return h(e);
}
function I(e, t) {
  const n = p(t).stack, r = M(n, i.__wbindgen_malloc, i.__wbindgen_realloc), c = b;
  y()[e / 4 + 1] = c, y()[e / 4 + 0] = r;
}
function S(e, t) {
  let n, r;
  try {
    n = e, r = t, console.error(g(e, t));
  } finally {
    i.__wbindgen_free(n, r, 1);
  }
}
function z(e) {
  m(e);
}
function L() {
  return O(function(e, t) {
    const n = new Worker(g(e, t));
    return h(n);
  }, arguments);
}
function R(e, t) {
  throw new Error(g(e, t));
}
export {
  D as AvifWorker,
  S as __wbg_error_f851667af71bcfc6,
  F as __wbg_new_abda76e883ba8a5f,
  L as __wbg_new_d1187ae36d662ef9,
  j as __wbg_set_wasm,
  I as __wbg_stack_658279fe44541cf6,
  z as __wbindgen_object_drop_ref,
  R as __wbindgen_throw
};

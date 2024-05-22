var o = Object.defineProperty;
var n = (t, e, s) => e in t ? o(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var a = (t, e, s) => (n(t, typeof e != "symbol" ? e + "" : e, s), s);
import * as w from "./786afd0f6c0e1509.wasm";
import { __wbg_set_wasm as d, AvifWorker as f } from "./worker_bg.js";
d(w);
class y {
  constructor() {
    a(this, "onComplete", ({ data: { id: e, data: s } }) => {
      typeof this.requests[e] == "function" && (this.requests[e](s), delete this.requests[e]);
    });
    this.requests = {}, this.requestsCounter = 0, this.worker = new f(), this.worker.onmessage = this.onComplete;
  }
  /**
  * @param {Uint8Array} buffer
  * @param {number} width
  * @param {number} height
  * @param {Object} options
  * @param {number} options.speed
  * @param {number} options.quality
  * @returns {Promise<Uint8Array>}
  */
  async encode(e, s, h, r) {
    const u = `request-${this.requestsCounter++}`;
    return new Promise((c) => {
      this.requests[u] = (i) => {
        c(i);
      };
      const m = (r == null ? void 0 : r.speed) || 4, q = (r == null ? void 0 : r.quality) || 50;
      this.worker.postMessage({ id: u, data: { buffer: e, width: s, height: h, speed: m, quality: q } });
    });
  }
}
export {
  y as Encoder
};

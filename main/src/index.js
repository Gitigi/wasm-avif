import { AvifWorker } from "../../worker/pkg";
// import AvifWorker from './worker?worker&inline'

export class Encoder {
  constructor() {
    this.requests = {}
    this.requestsCounter = 0;
    this.worker = new AvifWorker()
    this.worker.onmessage = this.onComplete
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
  async encode(buffer, width, height, options) {
    const id = `request-${this.requestsCounter++}`;
 
    return new Promise((resolve) => {
      this.requests[id] = (data) => {
          resolve(data);
      };
      const speed = options?.speed || 4
      const quality = options?.quality || 50.0
      this.worker.postMessage({id, data: {buffer, width, height, speed, quality}})
    });
  }

  onComplete = ({data: {id, data}}) => {
    if (typeof this.requests[id] === "function") {
      this.requests[id](data);
      delete this.requests[id];
    }
  }
}

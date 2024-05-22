/* tslint:disable */
/* eslint-disable */
export class Encoder {
  /**
  * @param {Uint8Array} buffer
  * @param {number} width
  * @param {number} height
  * @param {Object} options
  * @param {number} options.speed
  * @param {number} options.quality
  * @returns {Promise<Uint8Array>}
  */
  async  encode(buffer: Uint8Array, width: number, height: number, options: {speed?: number, quality?: number}): Promise<Uint8Array>;
}

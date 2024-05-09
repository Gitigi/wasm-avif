import wasm_bindgen, { encode } from "../../pkg/wasm_avif"

let initialized = false;

onmessage = async ({data: {id, data}}) => {
  if(!initialized) {
    await wasm_bindgen()
    initialized = true
  }

  const res = encode(data.buffer, data.width, data.height, data.speed)
  postMessage({id, data: res});
};

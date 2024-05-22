mod utils;

use wasm_bindgen::prelude::*;
use web_sys::Worker;
use base64::{engine::general_purpose::STANDARD, Engine as _};

#[wasm_bindgen]
pub struct AvifWorker {}

#[wasm_bindgen]
impl AvifWorker {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Worker {
        utils::set_panic_hook();
        
        let wasm = format!("data:application/wasm;base64,{}", STANDARD.encode(WORKER_WASM).as_str());
        let worker = format!("let __wasm = '{}'\n{}", wasm, WORKER_BASE64);
        let worker_js = format!("data:text/javascript;base64,{}", STANDARD.encode(worker).as_str());
        Worker::new(&worker_js).unwrap()
    }
}

const WORKER_WASM: &[u8] = include_bytes!("../../pkg/wasm_avif_bg.wasm");

const WORKER_BASE64: &str = {
    const BINDGEN: &str = include_str!("../../pkg/wasm_avif.js");
    const WORKER: &str = r#"
        let initialised = wasm_bindgen(__wasm)

        self.onmessage = async event => {
            // This will queue further commands up until the module is fully initialised:
            await initialised;
            const res = wasm_bindgen.encode(event.data.data.buffer, event.data.data.width, event.data.data.height, event.data.data.speed, event.data.data.quality);
            postMessage({id: event.data.id, data: res});
        };
    "#;
    const_format::formatcp!("{}\n{}", BINDGEN, WORKER)
};

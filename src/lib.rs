mod utils;

use ravif::{Encoder, Img, RGBA8};
use wasm_bindgen::prelude::*;
use imgref::ImgVec;

#[wasm_bindgen]
pub fn encode(buffer: Vec<u8>, width: usize, height: usize) -> Vec<u8> {
    utils::set_panic_hook();

    let a: Vec<RGBA8>  = buffer.chunks(4).map(|p| RGBA8::new(p[0], p[1], p[2], p[3])).collect();
    // let a: Vec<RGBA8>  = buffer.par_iter().chunks(4).map(|p| RGBA8::new(*p[0], *p[1], *p[2], *p[3])).collect();
    let img: ImgVec<RGBA8> = Img::new(a, width, height);
    let res = Encoder::new()
        .with_quality(50.)
        .with_speed(8)
        .encode_rgba(img.as_ref()).unwrap();

    res.avif_file
}

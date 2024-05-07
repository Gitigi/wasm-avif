#!/bin/bash

rustup run nightly wasm-pack build --target web . -- -Z build-std=std,panic_abort,core,alloc -Z build-std-features=panic_immediate_abort

pushd main && npm run build && popd

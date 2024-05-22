#!/bin/bash

# rustup run nightly wasm-pack build --target web . -- -Z build-std=std,panic_abort,core,alloc -Z build-std-features=panic_immediate_abort

rustup run nightly wasm-pack build --target no-modules . -- -Z build-std=std,panic_abort,core,alloc -Z build-std-features=panic_immediate_abort

pushd worker && rustup run nightly wasm-pack build  . -- -Z build-std=std,panic_abort,core,alloc -Z build-std-features=panic_immediate_abort && popd

pushd main && npm run build && popd

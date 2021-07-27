#!/bin/sh
cd ./dev
npm run build
cd ..
cd ./progrex
mkdir -p ./static
rm -f ./static/*
cp ../dev/dist/main.js ./static/index.js
# Workaround to expose render() for TensorBoard
echo 'export function render() { progrex_frontend.render(); }' >> ./static/index.js
cd ..
pip freeze > requirements.txt
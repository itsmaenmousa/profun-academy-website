#!/bin/bash
# Builds the profile picker (root), the ProFun site (/profun/) and the Academy site (/academy/)
set -e
rm -rf dist && mkdir -p dist
(cd academy && npx vite build --outDir ../dist/academy --emptyOutDir)
(cd profun && npx vite build --outDir ../dist/profun --emptyOutDir)
cp -r picker/. dist/

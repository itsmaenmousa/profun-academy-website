#!/bin/bash
# Builds the profile picker (root), the ProFun site (/profun/), the Academy site (/academy/)
# and the content dashboard (/studio/)
set -e
rm -rf dist && mkdir -p dist
(cd academy && npx vite build --outDir ../dist/academy --emptyOutDir)
(cd profun && npx vite build --outDir ../dist/profun --emptyOutDir)
cp -r picker/. dist/
# The content dashboard (Sanity Studio) at /studio
(cd studio && npx sanity build ../dist/studio -y)
# Link-preview tags (title, description, share image) from the dashboard
node scripts/seo.mjs

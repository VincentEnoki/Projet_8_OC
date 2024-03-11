set -e
npm run build
cd dist 
echo > .nojekyll
git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:VincentBGojo/Project_8_OC.git main:gh-pages
cd -
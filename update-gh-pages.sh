git push origin :gh-pages
git branch -d gh-pages

git checkout --orphan gh-pages
git add .
git commit -a -m "Update gh-pages branch"
git push origin gh-pages

git checkout master

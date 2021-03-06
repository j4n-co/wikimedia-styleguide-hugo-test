#!/bin/sh

DIR=$(dirname "$0")

cd $DIR/exampleSite/

# if [[ $(git status -s) ]]
# then
#    echo "The working directory is dirty. Please commit any pending changes."
#    exit 1;
# fi

echo "Deleting old publication"
rm -rf public
mkdir public
git worktree prune
rm -rf .git/worktrees/public/

echo "Checking out gh-pages branch into public"
git worktree add -B gh-pages public origin/gh-pages

echo "Removing existing files"
rm -rf public/*

echo "Generating site"
npm run build

echo "Updating gh-pages branch"
cd public && git add --all && git commit -m "Publishing to gh-pages (publish.sh)"

echo "removing gh-pages from exampleSite/public"
git rm --cached exampleSite/public

echo "All done. Check the output then run 'git push origin gh-pages'"

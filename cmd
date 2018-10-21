npm install -g create-react-app
create-react-app website
npm start
# create git repo
# init git
npm install --save gh-pages
# in the package json, write the following:
# in root:
"homepage": "https://[your-user-name].github.io/[your-repo-name]/",
# in script:
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
# last run this:
npm run deploy

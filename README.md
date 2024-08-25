# odin-repositoryTemplate

Template for our standard webpack configuration

Setup steps:

npm init -y
npm install webpack webpack-cli --save-dev
npm install html-webpack-plugin
-> create src folder with index.html and index.js
-> create dist folder, empty
-> create gitignore (set node_modules to ignore)
-> create webpack.config.js (plugin template set to src index.html; output set to main.js)

npm install --save-dev style-loader css-loader
-> create .css file, import into index.js

npx webpack to generate dist files

initalize npm after template download?

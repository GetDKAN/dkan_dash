export MODE='production'
webpack --config "$PWD/webpack.config.dkan.js"
echo "console.log('DKAN-Dash Build date: `date` v: `npm list react-dash | grep react-dash`')" | cat - $PWD/dist/bundle.min.js > /tmp/out && mv /tmp/out $PWD/dist/bundle.min.js

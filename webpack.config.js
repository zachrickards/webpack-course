const path = require('path');

module.exports = function (env) {
    const webpackConfigPath = path.resolve(__dirname, 'config', `${env}.webpack.config.js`);

    return require(webpackConfigPath)(env);
};
var exec = require('cordova/exec');

exports.coolMethod = function (key, byte, success, error) {
    exec(success, error, 'ChiperAES128', 'encrypt', [key, byte]);
};

var exec = require('cordova/exec');

var AES256 = function () {};

AES256.prototype.encrypt = function (key, byte, success, error) {
    exec(success, error, 'ChiperAES128', 'encrypt', [key, byte]);
};

var aES256 = new AES256();

module.exports = aES256;


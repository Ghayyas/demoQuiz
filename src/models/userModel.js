/// <reference path="../../typings/tsd.d.ts" />
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    passWord: {
        type: String,
        required: true
    }
});
exports.User = mongoose.model('User', userSchema);

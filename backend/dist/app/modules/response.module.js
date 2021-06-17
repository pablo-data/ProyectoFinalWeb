"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function success(req, res, message, status) {
    res.status(status || 200).send({
        error: '',
        message,
        status
    });
}
function error(req, res, message, status) {
    res.status(status || 500).send({
        error: message,
        message: '',
        status
    });
}
exports.default = { success, error };

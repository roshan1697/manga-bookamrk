"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const userMiddleware = (req, res, next) => {
    const user = true;
    if (user) {
        next();
    }
    else {
        return res.status(403).json({
            message: 'Not Authorized'
        });
    }
};
exports.userMiddleware = userMiddleware;

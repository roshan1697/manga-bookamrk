"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("./router/user");
const manga_1 = require("./router/manga");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000/'
}));
app.use('/api/user', user_1.userRouter);
app.use('/api/manga', manga_1.mangaRouter);
app.listen(3004, () => {
    console.log('server running on 3004');
});

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mangaRouter = void 0;
const express_1 = require("express");
const db_1 = __importDefault(require("../db"));
exports.mangaRouter = (0, express_1.Router)();
exports.mangaRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield db_1.default.manga.findMany();
    return res.status(200).json(data);
}));
exports.mangaRouter.post('/bookmark', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { mangaId, userId } = req.body;
    const data = yield db_1.default.bookmark.create({
        data: {
            userId: userId,
            mangaId: mangaId
        }
    });
    return res.status(200).json({
        message: 'bookmark created'
    });
}));
exports.mangaRouter.delete('/bookmark', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookmarkId } = req.body;
    const data = yield db_1.default.bookmark.delete({
        where: {
            id: bookmarkId
        }
    });
    return res.status(200).json({
        message: 'bookmark deleted'
    });
}));

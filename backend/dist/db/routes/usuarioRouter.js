"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Usuario_1 = __importDefault(require("../models/Usuario"));
const usuarioRouter = express_1.default.Router();
usuarioRouter.post("/usuario", async (req, res) => {
    const usuario = req.body;
    if (!usuario) {
        return res.status(400).json({ error: "erro ao salvar o usuario" });
    }
    try {
        const novoUsario = await Usuario_1.default.create(usuario);
        return res.status(201).json(novoUsario);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Erro ao criar usuário, tente novamente mais tarde." });
    }
});
exports.default = usuarioRouter;

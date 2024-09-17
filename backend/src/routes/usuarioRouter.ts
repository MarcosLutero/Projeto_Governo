import express, { Request, Response } from "express";
import Usuario from "../models/Usuario";
const usuarioRouter = express.Router();

usuarioRouter.post("/usuario", async (req: Request, res: Response) => {
  const usuario = req.body;
  if (!usuario) {
    return res.status(400).json({ error: "erro ao salvar o usuario" });
  }
  try {
    const novoUsario = await Usuario.create(usuario);
    return res.status(201).json(novoUsario);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Erro ao criar usuário, tente novamente mais tarde." });
  }
});

export default usuarioRouter;

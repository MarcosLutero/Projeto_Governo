import express, { Request, Response } from "express";
import Usuario from "../models/Usuario";
import bcrypt from 'bcrypt';
const usuarioRouter = express.Router();

usuarioRouter.post("/usuario", async (req: Request, res: Response) => {
  console.log("chamou a rota")
  const { cpf, ...usuario } = req.body;

  if (!cpf || !usuario) {
    return res.status(400).json({ error: "Erro ao salvar o usuário, informações incompletas." });
  }

  try {
    const usuarioExistente = await Usuario.findOne({ where: { cpf } });
    if (usuarioExistente) {
      return res.status(400).json({ error: "Já existe um usuário cadastrado com esse CPF." });
    }
    const novoUsario = await Usuario.create(usuario);
    return res.status(201).json(novoUsario);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Erro ao criar usuário, tente novamente mais tarde." });
  }
});


usuarioRouter.post("/login", async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    // Verifique a senha (assumindo que a senha está criptografada)
    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    // Retorne os dados do usuário (você pode incluir um token JWT aqui se necessário)
    return res.status(200).json(usuario);
  } catch (error) {
    console.error('Erro no login:', error);
    return res.status(500).json({ error: "Erro no login, tente novamente mais tarde." });
  }
});


export default usuarioRouter;

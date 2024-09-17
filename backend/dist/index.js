"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./db/routes/index"));
//import authenticate from "./middleware/authenticate"
const app = (0, express_1.default)();
const PORT = 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//app.use(authenticate()); // Middleware de autenticação aplicado globalmente
// Configuração do Sequelize para conectar ao banco de dados
const sequelize = new sequelize_1.Sequelize("seguranca", // Nome da base de dados
"root", // Nome de usuário do MySQL
"root", // Senha do MySQL
{
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    logging: false,
});
// Autentica a conexão com o banco de dados
sequelize.authenticate()
    .then(() => {
    console.log('Conectado ao banco de dados com sucesso.');
})
    .catch((error) => {
    console.error('Erro ao conectar-se ao banco de dados:', error);
});
// Define uma rota padrão
app.get('/', (req, res) => {
    res.send('Servidor rodando com TypeScript, Sequelize e CORS!');
});
const main = async () => {
    // Inicia o servidor
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
    // Registra as rotas após inicializar o banco de dados e middleware
    index_1.default.forEach(router => {
        app.use(router);
    });
};
main(); // Chama a função principal para iniciar o aplicativo

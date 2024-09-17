"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const Routers = [];
fs_1.default.readdirSync(__dirname)
    .filter((file) => file !== 'index.ts')
    .forEach((file) => {
    const router = require(path_1.default.join(__dirname, file));
    Routers.push(router.default || router); // Verifica se `default` existe, senão usa o próprio módulo.
});
exports.default = Routers;

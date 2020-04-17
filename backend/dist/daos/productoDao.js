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
Object.defineProperty(exports, "__esModule", { value: true });
// DB
const connection_1 = require("../db/connection");
class productoDao {
    constructor() {
    }
    getall() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield connection_1.connect();
                const result = yield conn.query('SELECT * FROM producto');
                return result[0];
            }
            catch (e) {
                //console.log(e)
            }
        });
    }
    getOne(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield connection_1.connect();
                const result = yield conn.query('SELECT * FROM producto WHERE codigo = ?', [codigo]);
                return result[0];
            }
            catch (e) {
                //console.log(e)
            }
        });
    }
    add(producto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield connection_1.connect();
                const result = yield conn.query('INSERT INTO producto (nombre, valor) values(?,?)', [producto.nombre, producto.valor]);
                return result;
            }
            catch (e) {
                //console.log(e)
            }
        });
    }
    update(producto, codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield connection_1.connect();
                const result = yield conn.query('UPDATE producto SET nombre = ?, valor=? WHERE codigo = ?', [producto.nombre, producto.valor, codigo]);
                return result;
            }
            catch (e) {
                //console.log(e)
            }
        });
    }
    delete(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield connection_1.connect();
                const result = yield conn.query('DELETE FROM producto WHERE codigo = ?', [codigo]);
                return result;
            }
            catch (e) {
                //console.log(e)
            }
        });
    }
}
exports.default = productoDao;

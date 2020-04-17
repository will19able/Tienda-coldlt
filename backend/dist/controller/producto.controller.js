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
const express_1 = require("express");
const productoDao_1 = __importDefault(require("../daos/productoDao"));
// Init shared
const router = express_1.Router();
const objProductoDao = new productoDao_1.default();
/******************************************************************************
 *                      Get All Productos - "GET /productos/all"
 ******************************************************************************/
router.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productos = yield objProductoDao.getall();
    return res.status(200).send({
        "error": '',
        "body": productos
    });
}));
/******************************************************************************
 *                      Get one Producto - "GET /getOne/:id"
 ******************************************************************************/
router.get('/getOne/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const codigo = req.params.id;
    const productos = yield objProductoDao.getOne(codigo);
    return res.status(200).send({
        "error": '',
        "body": productos
    });
}));
/******************************************************************************
 *                       Add One - "POST /productos/add"
 ******************************************************************************/
router.post('/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { producto } = req.body;
    if (!producto) {
        return res.status(500).json({
            error: 'unexpected error',
        });
    }
    yield objProductoDao.add(producto);
    return res.status(200).send({
        "error": '',
        "body": 'successfully added product'
    });
}));
/******************************************************************************
 *                       Update - "PUT /productos/update/:id"
 ******************************************************************************/
router.put('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { producto } = req.body;
    const codigo = req.params.id;
    if (!producto) {
        return res.status(500).json({
            error: 'unexpected error',
        });
    }
    yield objProductoDao.update(producto, codigo);
    return res.status(200).send({
        "error": '',
        "body": 'successfully updated product'
    });
}));
/******************************************************************************
 *                    Delete - "DELETE /productos/delete/:id"
 ******************************************************************************/
router.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const codigo = req.params.id;
    yield objProductoDao.delete(codigo);
    return res.status(200).send({
        "error": '',
        "body": 'successfully delete product'
    });
}));
/******************************************************************************
 *                                     Export
 ******************************************************************************/
exports.default = router;

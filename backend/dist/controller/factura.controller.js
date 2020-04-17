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
const facturaDao_1 = __importDefault(require("../daos/facturaDao"));
const Factura_1 = __importDefault(require("../entities/Factura"));
const Item_1 = __importDefault(require("../entities/Item"));
// Init shared
const router = express_1.Router();
const objFacturaDao = new facturaDao_1.default();
/******************************************************************************
 *                       Add One - "POST /calcular"
 ******************************************************************************/
router.post('/calcular', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cliente } = req.body;
    const { items } = req.body;
    if (!cliente || !items) {
        return res.status(500).json({
            error: 'unexpected error',
        });
    }
    let valorToral = 0;
    let newitems = '';
    let newArrayItems = [];
    items.map((item) => {
        const i = new Item_1.default(item.producto, item.cantidad, item.producto.valor * item.cantidad);
        newArrayItems.push(i);
        valorToral += item.producto.valor * item.cantidad;
    });
    newitems += `${JSON.stringify(newArrayItems)}`;
    const objFactura = new Factura_1.default(cliente, newitems, valorToral);
    yield objFacturaDao.add(objFactura);
    return res.status(200).send({
        "error": '',
        "body": {
            "Cliente": cliente,
            "items": newArrayItems,
            "valorTotal": valorToral
        }
    });
}));
/******************************************************************************
 *                                     Export
 ******************************************************************************/
exports.default = router;

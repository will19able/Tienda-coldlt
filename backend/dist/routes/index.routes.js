"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_controller_1 = __importDefault(require("../controller/producto.controller"));
const factura_controller_1 = __importDefault(require("../controller/factura.controller"));
const router = express_1.Router();
router.use('/producto', producto_controller_1.default);
router.use('/', factura_controller_1.default);
exports.default = router;

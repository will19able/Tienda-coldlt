import { Router } from "express";
import productoController from "../controller/producto.controller";
import facturaController from "../controller/factura.controller";

const router = Router();

router.use('/producto', productoController);
router.use('/', facturaController);


export default router;
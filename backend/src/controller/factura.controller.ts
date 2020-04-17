import { Request, Response, Router } from 'express';
import facturaDao from '../daos/facturaDao';
import factura from "../entities/Factura";
import Item from "../entities/Item";
// Init shared
const router = Router();
const objFacturaDao = new facturaDao();


/******************************************************************************
 *                       Add One - "POST /calcular"
 ******************************************************************************/

router.post('/calcular', async (req: Request, res: Response) => {
    const { cliente } = req.body;
    const { items } = req.body;
    if (!cliente || !items) {
        return res.status(500).json({
            error: 'unexpected error',
        });
    }
    
    let valorToral : number = 0;
    let newitems = '';
    let newArrayItems : Item[] = []
    items.map( (item: any) => {
        const i = new Item(item.producto, item.cantidad, item.producto.valor * item.cantidad);
        newArrayItems.push(i);
        valorToral += item.producto.valor * item.cantidad;       
    });
    newitems += `${JSON.stringify(newArrayItems)}`
    const objFactura = new factura(cliente, newitems, valorToral);
    await objFacturaDao.add(objFactura);
    return   res.status(200).send({
        "error": '',
        "body" : {
            "Cliente" : cliente,
            "items" : newArrayItems,
            "valorTotal" : valorToral 
        }
    });
});


/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;

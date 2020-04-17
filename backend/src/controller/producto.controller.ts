import { Request, Response, Router } from 'express';
import productoDao from '../daos/productoDao';

// Init shared
const router = Router();
const objProductoDao = new productoDao();


/******************************************************************************
 *                      Get All Productos - "GET /productos/all"
 ******************************************************************************/

router.get('/all', async (req: Request, res: Response) => {
     const productos = await objProductoDao.getall();
     
    return   res.status(200).send({
        "error": '',
        "body" : productos
    });
});

/******************************************************************************
 *                      Get one Producto - "GET /getOne/:id"
 ******************************************************************************/

router.get('/getOne/:id', async (req: Request, res: Response) => {
    const codigo = req.params.id;
     const productos = await objProductoDao.getOne(codigo);
     
    return   res.status(200).send({
        "error": '',
        "body" : productos
    });
});


/******************************************************************************
 *                       Add One - "POST /productos/add"
 ******************************************************************************/

router.post('/add', async (req: Request, res: Response) => {
    const { producto } = req.body;
    if (!producto) {
        return res.status(500).json({
            error: 'unexpected error',
        });
    }   
    await objProductoDao.add(producto);
    return   res.status(200).send({
        "error": '',
        "body" : 'successfully added product'
    });
});


/******************************************************************************
 *                       Update - "PUT /productos/update/:id"
 ******************************************************************************/

router.put('/update/:id', async (req: Request, res: Response) => {
    const { producto } = req.body;
    const codigo = req.params.id;
    if (!producto) {
        return res.status(500).json({
            error: 'unexpected error',
        });
    }   
    await objProductoDao.update(producto, codigo);
    return   res.status(200).send({
        "error": '',
        "body" : 'successfully updated product'
    });
});


/******************************************************************************
 *                    Delete - "DELETE /productos/delete/:id"
 ******************************************************************************/

router.delete('/delete/:id', async (req: Request, res: Response) => {
    const codigo = req.params.id;
    
    await objProductoDao.delete(codigo);
    return   res.status(200).send({
        "error": '',
        "body" : 'successfully delete product'
    });
});


/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;

import { Request, Response } from 'express'

// DB
import { connect } from '../db/connection'
// Interfaces
import { IFactura } from '../interfaces/IFactura'

class facturaDao {
    constructor() {
        
    }
    
    public async add(factura: IFactura): Promise<void | null | undefined> {
        try {
            const conn = await connect();
            const result : any= await conn.query('INSERT INTO factura (cliente, item, valorTotal) values(?, ?, ?)', [factura.cliente, factura.item, factura.valorTotal]);
            return result;
        }
        catch (e) {
            //console.log(e)
        }
    }

}

export default facturaDao;




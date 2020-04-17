import { Request, Response } from 'express'

// DB
import { connect } from '../db/connection'
// Interfaces
import { IProducto } from '../interfaces/IPoducto'

class productoDao {
    constructor() {
        
    }
    
    public async getall(): Promise<IProducto[] | null | undefined> {
        try {
            const conn = await connect();
            const result : any= await conn.query('SELECT * FROM producto');
            return result[0];
        }
        catch (e) {
            //console.log(e)
        }
    }
    
    public async getOne(codigo: string): Promise<IProducto[] | null | undefined> {
        try {
            const conn = await connect();
            const result : any= await conn.query('SELECT * FROM producto WHERE codigo = ?', [codigo]);
            return result[0];
        }
        catch (e) {
            //console.log(e)
        }
    }
    public async add(producto: IProducto): Promise<IProducto[] | null | undefined> {
        try {
            const conn = await connect();
            const result : any= await conn.query('INSERT INTO producto (nombre, valor) values(?,?)', [producto.nombre, producto.valor]);
            return result;
        }
        catch (e) {
            //console.log(e)
        }
    }

    public async update(producto: IProducto, codigo : string): Promise<IProducto[] | null | undefined> {
        try {
            const conn = await connect();
            const result : any= await conn.query('UPDATE producto SET nombre = ?, valor=? WHERE codigo = ?', [producto.nombre, producto.valor, codigo]);
            return result;
        }
        catch (e) {
            //console.log(e)
        }
    }

    public async delete(codigo : string): Promise<IProducto[] | null | undefined> {
        try {
            const conn = await connect();
            const result : any= await conn.query('DELETE FROM producto WHERE codigo = ?', [codigo]);
            return result;
        }
        catch (e) {
            //console.log(e)
        }
    }


}

export default productoDao;




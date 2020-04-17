import { IProducto } from "../interfaces/IPoducto";

class Producto implements IProducto {
    public codigo: number;
    public nombre: string;
    public valor: number;

    constructor(codigo: number , nombre: string, valor: number) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.valor = valor
    }
}

export default Producto;
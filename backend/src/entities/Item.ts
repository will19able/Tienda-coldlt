import { IITem } from "../interfaces/IItem";
import { IProducto } from "../interfaces/IPoducto";

class Item implements IITem {
    public producto: IProducto[];
    public cantidad: number;
    public valorTotal: number;

    constructor( producto: IProducto[], cantidad: number, valorTotal: number) {
        this.producto = producto;
        this.cantidad = cantidad;
        this.valorTotal = valorTotal
    }
}

export default Item;
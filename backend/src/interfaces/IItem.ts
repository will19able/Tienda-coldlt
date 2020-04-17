import { IProducto } from "../interfaces/IPoducto";
export interface IITem {
    producto: IProducto[];
    cantidad: number;
    valorTotal: number;
}
import { IFactura } from "../interfaces/IFactura";

class Factura implements IFactura {
    public cliente: string;
    public item: string;
    public valorTotal: number;

    constructor(cliente: string , item: string, valorTotal: number) {
        this.cliente = cliente;
        this.item = item;
        this.valorTotal = valorTotal
    }
}

export default Factura;
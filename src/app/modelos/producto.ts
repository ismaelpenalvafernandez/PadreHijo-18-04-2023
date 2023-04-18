import { tipoproducto } from "./tipoproducto"
export class producto{
    idproducto : number = 0
    nombre : string = ""
    cantidad : number = 0
    precio : number = 0
    tp: tipoproducto;

    constructor(idproducto : number, nombre : string, cantidad: number, precio:number, tp:tipoproducto){
        this.idproducto=idproducto;
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=precio;
        this.tp=tp;
        
    }
}

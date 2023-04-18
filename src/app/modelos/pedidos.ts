export class Pedidos{
    idpedido : number = 0
    idcliente : number = 0
    nombre : string = "" 
    total : number = 0
    importe : number = 0
    
    constructor(idpedido : number, idcliente: number, nombre: string, total:number, importe:number){
        this.idpedido=idpedido;
        this.idcliente=idcliente;
        this.nombre=nombre;
        this.total=total;
        this.importe=importe;
        
    }
}
import { Component } from '@angular/core';
import { Pedidos } from '../modelos/pedidos';

@Component({
  selector: 'app-padre2',
  templateUrl: './padre2.component.html',
  styleUrls: ['./padre2.component.css']
})
export class Padre2Component {
  pedidos:Pedidos[] = [];  

  constructor(){
  }

  ngOnInit(): void{

  }
  anadir(pedido:any){
    this.pedidos=pedido

  }
}

import { Component, Output, EventEmitter } from '@angular/core';
import { Pedidos } from '../modelos/pedidos';

@Component({
  selector: 'app-producto2',
  templateUrl: './producto2.component.html',
  styleUrls: ['./producto2.component.css']
})
export class Producto2Component {
  pedido:Pedidos= new Pedidos(0,0,"",0,0);
  pedidos:Pedidos[]=[]

  @Output() enviardatos = new EventEmitter <Pedidos[]>()

  constructor(){
  }
  ngOnInit(): void{}

    anadir(){
      this.pedidos.push(this.pedido)
      this.enviardatos.emit(this.pedidos)
      this.pedido= new Pedidos(0,0,"",0,0);
  }

}


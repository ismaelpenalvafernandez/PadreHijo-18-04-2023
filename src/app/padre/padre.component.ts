import { Component } from '@angular/core';
import { producto } from '../modelos/producto';
import { tipoproducto } from '../modelos/tipoproducto';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  tp:string="";
  producto=new producto(0,"",0,0, tipoproducto.alimentos)
  productos:producto[] = [];

  anadir(){
    this.producto.tp = tipoproducto[this.tp as keyof typeof tipoproducto]
    this.productos.push(this.producto)
    this.producto = new producto(0,"",0,0, tipoproducto.alimentos)
    console.log(this.productos)
  }
}

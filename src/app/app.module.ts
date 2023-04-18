import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { PadreComponent } from './padre/padre.component';
import { FormsModule } from '@angular/forms';
import { Padre2Component } from './padre2/padre2.component';
import { Producto2Component } from './producto2/producto2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    PadreComponent,
    Padre2Component,
    Producto2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

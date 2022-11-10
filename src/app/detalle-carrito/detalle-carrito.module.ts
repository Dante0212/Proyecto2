import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleCarritoPageRoutingModule } from './detalle-carrito-routing.module';

import { DetalleCarritoPage } from './detalle-carrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleCarritoPageRoutingModule
  ],
  declarations: [DetalleCarritoPage]
})
export class DetalleCarritoPageModule {}

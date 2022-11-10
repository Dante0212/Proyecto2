import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleCarritoPage } from './detalle-carrito.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleCarritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleCarritoPageRoutingModule {}

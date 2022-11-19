import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ServicioService } from '../servicio/servicio.service';

import { ProductoconID } from '../interface/productos';
@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.page.html',
  styleUrls: ['./listar-productos.page.scss'],
})
export class ListarProductosPage implements OnInit {

  cartItemCount: BehaviorSubject<number>;

  @ViewChild(IonInfiniteScroll)
  public infiniteScroll: IonInfiniteScroll;
  public productos: Array<ProductoconID>= [];

  constructor( private ServicioServ: ServicioService, private router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(): void{
    this.ServicioServ.listarProductos();
    this.ServicioServ.listarProductos$.subscribe(datos => {
      this.productos = datos;
      if(this.infiniteScroll){
        this.infiniteScroll.complete();
      }
    });
  }
  public MasDatosGuardados(){
    this.ServicioServ.MasProducto();
  }
  public refrescar(){
    this.ServicioServ.refresh();
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Parcial, ProductoconID, Productos } from '../interface/productos';
import { delay }from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private URL_Producto = 'http://localhost:3000/productos';
  private paginaActual = 1;
  private comlista = new BehaviorSubject<ProductoconID[]>([]);
  public listarProductos$ = this.comlista.asObservable();
  item: any;


  constructor(private http: HttpClient) { }
  listarProductos() {
    this.http.get<Array<ProductoconID>>(`${this.URL_Producto}?_page=1`).subscribe(datos => {
      this.paginaActual = this.paginaActual + 1;
      this.comlista.next(datos);
    });
  }
  MasProducto(){
    this.http.get<Array<ProductoconID>>(`${this.URL_Producto}?_page=${this.paginaActual}`)
    .pipe(delay(3000)).subscribe(datos => {
      this.paginaActual = this.paginaActual + 1;
      this.comlista.next(this.comlista.getValue().concat(datos));
    });
}
BuscarPorId(idProducto: number){
  let url = this.URL_Producto + '/' + idProducto;
  return new Promise(resolve => {
    this.http.get(url).subscribe((datos: any) => {
      resolve(datos);
      this.item = datos;
    },error =>{
      console.log("Error al obtener el producto");
    });
  });
}
refresh(){
  window.location.reload();
}

agregarProducto(producto: Productos){
  return this.http.post(this.URL_Producto, producto,{
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  });
}
public obtenerID(id: number): Observable<ProductoconID | null> {
  return this.http.get<ProductoconID | null>(`${this.URL_Producto}/${id}`);
}
EliminarProducto(id: number){
  let url = this.URL_Producto + "/" + id;
  return this.http.delete(url);
}

public Modificar(id: number, payload: Parcial): Observable<any>{
  return this.http.patch(`${this.URL_Producto}/${id}`, payload, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
}

}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loggin } from '../interface/loggin';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { logging } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {
  private URL_Usuario = 'https://dummyjson.com/users/add';

  constructor(private http: HttpClient, private toast: ToastController) { }

crearUsuario(Usuario: Loggin): Observable<Loggin> {
  return this.http.post<Loggin>(this.URL_Usuario, Usuario);
}
buscarID(id: number): Observable<Loggin> {
  return this.http.get<Loggin>(this.URL_Usuario + '/' + id);
}

}

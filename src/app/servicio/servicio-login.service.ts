import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {
  apiURL = 'https://dummyjson.com/users/add'

  constructor(private http: HttpClient) { }

postUsu(usuario){
  return this.http.get('[$this.apiURL]/Usu/${usuario}');
}
}

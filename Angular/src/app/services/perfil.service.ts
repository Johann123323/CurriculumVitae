import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  obtenerPerfil():Observable<any>
  {
    return this.http.get("./assets/perfil.json");
  }
}
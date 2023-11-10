import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  constructor(private http: HttpClient) { }

  obtenerHabilidades():Observable<any>
  {
    return this.http.get("./assets/habilidades.json");
  }
}

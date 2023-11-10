import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonalesService {

  constructor(private http: HttpClient) { }

  obtenerDatosPersonales():Observable<any>
  {
    return this.http.get("./assets/datos-personales.json");
  }
}
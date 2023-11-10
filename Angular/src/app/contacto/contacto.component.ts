import { Component } from '@angular/core';
import { DatosPersonalesService } from '../services/datos-personales.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  datosPersonales: any;

  constructor(private datosPesonalesService: DatosPersonalesService) {
    this.datosPesonalesService.obtenerDatosPersonales().subscribe(
      {
        next: (data) => {
          this.datosPersonales = data["datos-personales"];
          console.log(this.datosPersonales);
        },
        error: (err) => {
          alert("Se ha producido un error. Por favor, intente nuevamente");
          console.error(err);
        }
      }

    )
  }
}

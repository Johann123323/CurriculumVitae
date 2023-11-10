import { Component } from '@angular/core';
import { DatosAcademicosService } from '../services/datos-academicos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  datosAcademicos: any;
  constructor(private datosAcademicosService: DatosAcademicosService) {
    this.datosAcademicosService.obtenerDatosAcademicos().subscribe(
      {
        next: (data) => {
          this.datosAcademicos = data["datos-academicos"];
          console.log(data);
        },
        error: (err) => {
          alert("Se ha producido un error. Por favor, intente nuevamente");
          console.error(err);
        }
      }

    )

  }
}


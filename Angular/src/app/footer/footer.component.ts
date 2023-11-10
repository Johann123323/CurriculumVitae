import { Component } from '@angular/core';
import { DatosAcademicosService } from '../services/datos-academicos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
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

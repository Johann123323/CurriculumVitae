import { Component } from '@angular/core';
import { DatosPersonalesService } from '../services/datos-personales.service';
import { DatosAcademicosService } from '../services/datos-academicos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   
  datosPersonales:any;
  datosAcademicos:any;

  constructor(private datosPesonalesService: DatosPersonalesService, private datosAcademicosService:DatosAcademicosService) //private datosAcademicosService:DatosAcademicosService
  {
    this.datosPesonalesService.obtenerDatosPersonales().subscribe(
      {
        next: (data) => {
          this.datosPersonales=data["datos-personales"];
          console.log(this.datosPersonales);
        },
        error:(err) => {
          alert("Se ha producido un error. Por favor, intente nuevamente");
          console.error(err);
        }
      }

    );
    this.datosAcademicosService.obtenerDatosAcademicos().subscribe(
      {
        next: (data) => {
          this.datosAcademicos=data["datos-academicos"];
          console.log(data);
        },
        error:(err) => {
          alert("Se ha producido un error. Por favor, intente nuevamente");
          console.error(err);
        }
      }

    )
  }

}

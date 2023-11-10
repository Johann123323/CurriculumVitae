import { Component } from '@angular/core';
import { ExperienciaLaboralService } from '../services/experiencia-laboral.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent {
  experienciaLaboral: any;

  constructor(private experienciaLaboralService: ExperienciaLaboralService) {
    this.experienciaLaboralService.obtenerExperienciaLaboral().subscribe(
      {
        next: (data) => {
          this.experienciaLaboral = data["experiencia-laboral"];
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

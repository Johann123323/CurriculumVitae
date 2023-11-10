import { Component } from '@angular/core';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  perfil: any;
  constructor(private perfilService: PerfilService) {
    this.perfilService.obtenerPerfil().subscribe(
      {
        next: (data) => {
          this.perfil = data["perfil"];
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
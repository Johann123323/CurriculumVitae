import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PerfilComponent,
    ContactoComponent,
    HabilidadesComponent,
    ExperienciaLaboralComponent,
    EducacionComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

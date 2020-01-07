import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { ImagenComponent } from './imagen/imagen.component';
import { TextoComponent } from './texto/texto.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ValidacionesComponent } from './validaciones/validaciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { CommonModule } from '@angular/common';

import { HolamundoComponent } from './holamundo.component';
import { HolamundoRoutingModule } from './holamundo-routing.module';


@NgModule({
  imports: [HolamundoRoutingModule, SharedModule, FormsModule, ReactiveFormsModule, CustomFormsModule],
  declarations: [ValidacionesComponent,TextoComponent,ImagenComponent,CarruselComponent,HolamundoComponent],
  exports: [ValidacionesComponent,TextoComponent,ImagenComponent,CarruselComponent,HolamundoComponent],
  providers: [NameListService]
})
export class HolamundoModule { }

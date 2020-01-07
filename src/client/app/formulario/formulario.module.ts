import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { FvalidacionesComponent } from './formulariovalidaciones/fvalidaciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { CommonModule } from '@angular/common';

import { FormularioComponent } from './formulario.component';
import { FormularioRoutingModule } from './formulario-routing.module';


@NgModule({
  imports: [FormularioRoutingModule, SharedModule, FormsModule, ReactiveFormsModule, CustomFormsModule],
  declarations: [FvalidacionesComponent,FormularioComponent],
  exports: [FvalidacionesComponent,FormularioComponent],
  providers: [NameListService]
})
export class FormularioModule { }


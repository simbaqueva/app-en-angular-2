import { NgModule } from '@angular/core';
import { ValidacionesComponent } from './validaciones.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder, NgControl}  from '@angular/forms';


@NgModule({
  imports: [ BrowserModule, FormsModule  ],
  declarations: [ValidacionesComponent],
  exports: [ValidacionesComponent],
  providers: [NgModule,FormBuilder]

})
export class ValidacionesModule { };

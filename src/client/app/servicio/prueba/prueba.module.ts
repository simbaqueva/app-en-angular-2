import { NgModule } from '@angular/core';
import { PruebaComponent } from './prueba.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder, NgControl}  from '@angular/forms';


@NgModule({
  imports: [ BrowserModule, FormsModule  ],
  declarations: [PruebaComponent,],
  exports: [PruebaComponent],
  providers: [NgModule,FormBuilder]

})
export class PruebaModule { }
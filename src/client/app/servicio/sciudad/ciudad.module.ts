import { NgModule } from '@angular/core';
import { CiudadComponent } from './ciudad.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder, NgControl}  from '@angular/forms';


@NgModule({
  imports: [ BrowserModule, FormsModule  ],
  declarations: [CiudadComponent,],
  exports: [CiudadComponent],
  providers: [NgModule,FormBuilder]

})
export class PruebaModule { }
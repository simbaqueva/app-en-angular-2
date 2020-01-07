import { NgModule } from '@angular/core';
import { FvalidacionesComponent } from './fvalidaciones.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder, NgControl}  from '@angular/forms';
@NgModule({
  imports: [ BrowserModule, FormsModule  ],
  declarations: [FvalidacionesComponent,],
  exports: [FvalidacionesComponent],
  providers: [NgModule,FormBuilder]

})
export class FvalidacionesModule { }
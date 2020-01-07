import { NgModule } from '@angular/core';
import { SimagenesComponent } from './simagenes.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder, NgControl}  from '@angular/forms';
import { SimagenesService } from './simagenes.service';

@NgModule({
  imports: [ BrowserModule, FormsModule  ],
  declarations: [SimagenesComponent,],
  exports: [SimagenesComponent],
  providers: [NgModule,FormBuilder, SimagenesService ]

})
export class SimagenesModule { }
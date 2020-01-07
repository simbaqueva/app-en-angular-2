import { NgModule } from '@angular/core';
import { SwikipediaComponent } from './swikipedia.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder, NgControl}  from '@angular/forms';
import { SwikipediaService } from './swikipedisservi.service';

@NgModule({
  imports: [ BrowserModule, FormsModule  ],
  declarations: [SwikipediaComponent,],
  exports: [SwikipediaComponent],
  providers: [NgModule,FormBuilder, SwikipediaService ]

})
export class SwikipediaModule { }
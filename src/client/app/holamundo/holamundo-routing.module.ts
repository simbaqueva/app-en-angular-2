import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HolamundoComponent } from './holamundo.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'hola', component: HolamundoComponent}
    ])
  ],
  exports: [RouterModule]
})
export class HolamundoRoutingModule { }

//importaciones  necesarias para el componentr
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule, FormArray  } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { SlibrosService } from './wikipedia.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



/**
 * This class represents the lazy loaded HomeComponent.
 */
 //recursos del componente
@Component({
  moduleId: module.id,
  selector: 'sd-wiki',
  templateUrl: 'servicio.component.html',
  styleUrls: ['servicio.component.css'],
  providers: [SlibrosService]

})



// export class ServicioComponent  {
//cuerpo del componente
  export class ServicioComponent implements OnInit {

name = 'Angular'; 
link = 'http://localhost:3000/img?id=ferrary&g=';
http: Http;
litems = <any>[];


//constructor del componente 
 constructor( http: Http) {

  this.http = http;
 }
 ngOnInit() {
  }
 

//funcion del componente para llamar los recursos de la api 
listItems(item:string ){
//variable en la que se guarda la ruta de la api mas
 const apiLink = this.link + item;
//retornando la ruta por metodo get
 return this.http.get(apiLink)
//haciendo un mapeo del json 
 .map(res => res.json())
     .subscribe(
       //variables en las que se van aguardar los objetos a consumir 
      litem => this.litems  = litem,
      //funcion para mostrar errores 
      err => this.logError(err),
      () => console.log()
    )

  };

logError(err:any) {
  console.error('There was an error: ' + err);

  }

// public separarEspacios (split:any){
//   var separar = this.litems.split(',');
//   console.log(separar)
// }
 
}


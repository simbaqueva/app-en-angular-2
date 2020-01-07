import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule, FormArray  } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Observable } from 'rxjs/Observable';



/**
 * This class represents the lazy loaded HomeComponent.
 */


import '../../../../js/xtensions/prueba.js';

declare var $:any;




@Component({
  moduleId: module.id,
  selector: 'sd-validaciones',
  templateUrl: 'validaciones.component.html',
  styleUrls: ['validaciones.component.css'],


})



export class ValidacionesComponent implements OnInit  {
  
validacion: FormGroup;

constructor (
	private formBuilder: FormBuilder
	) {}

 

ngOnInit() {
 	$(".validate").validationEngine();
	$('.onlynumber').validateNumbers();



  this.validacion = this.formBuilder.group({

  
prueba:['',[
 ]
],

   
  

});

}


  submitForm(validacion:any):void{
   let valids = $("form.validate").validationEngine('validate');

    if(this.validacion.valid && valids){

    console.log(valids);

    // Variable to hold a reference of addComment/updateComment     
    }else{
      this.validacion.valid; 
      console.log('no valida');
      
    }
  
  }

}







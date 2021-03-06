import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule, FormArray  } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Observable } from 'rxjs/Observable';

/**
 * This class represents the lazy loaded HomeComponent.
 */

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
    email: ['', [
     Validators.required,
     CustomValidators.rangeLength([4, 50]),
     CustomValidators.email
        ]
     ],
     password: ['',[
     Validators.required,
     CustomValidators.rangeLength([4, 4]),

     ]],

     tel: ['',[
      Validators.required,
       CustomValidators.rangeLength([4, 13]),
      CustomValidators.number
     ]],

     usuario
   
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






// public user: User;

// ngOnInit(){
// 	this.user = {                                               
// 		username: '',
// 		email: '',
// 		password: '',
// 		confirmPassword: ''
// 	}
// }

// save(model:User, isValid: boolean){
// 	console.log(model, isValid);
// }
// }
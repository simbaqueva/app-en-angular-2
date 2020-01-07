import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule, FormArray  } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Observable } from 'rxjs/Observable';

/**
 * This class represents the lazy loaded HomeComponent.
 */
import '../../../../js/xtensions/ui.js';

declare var $:any;



@Component({
  moduleId: module.id,
  selector: 'sd-fvalidaciones',
  templateUrl: 'fvalidaciones.component.html',
  styleUrls: ['fvalidaciones.component.css'],

})



export class FvalidacionesComponent implements OnInit  {
  
validacion: FormGroup;

 ip(control: FormControl){
    let DatePattern =      "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$";  
     if (!control.value.match(DatePattern)){
       return { "": true }; 
     
     }{
    
    return  null;

     }

 }   




    validateExt(c: FormControl) {
    let extension = ['png', 'jpeg', 'gif'];
    return extension.indexOf(c.value)? null : { validateExt: { valid: false } }
}

changeThumbFile($event: any){
    var file: File = $event.target.files[0];
    var fReader: FileReader = new FileReader();


    var imgName = file.name;
 

    this.validacion.controls['thumbnailImg'].updateValueAndValidity();
}





constructor (
  private formBuilder: FormBuilder
  ) {}

ngOnInit() {
   $(".validate").validationEngine();
  $('.onlynumber').validateNumbers();
  // general();
  let password = new FormControl('', (Validators.required, CustomValidators.rangeLength([1, 4])));
   let nigual = new FormControl('', (Validators.required));
 this.validacion = this.formBuilder.group({

tcredito: ['', [
      Validators.required,
     CustomValidators.rangeLength([1, 22]),
      CustomValidators.creditCard,
        ]
      ],

  email: ['', [
     Validators.required,
     CustomValidators.rangeLength([4, 50]),
     CustomValidators.email
        ]
     ],


    telfijo: ['',[
    Validators.required,
    CustomValidators.rangeLength([1, 15]),
    CustomValidators.phone('en-US') // valida la cantidad de digitos de telefono que son (10 digitos)
      ]
    ],  

       url: ['',[
     Validators.required,
     CustomValidators.url
     ]
    ],

password: password,


   confirmpassword:['',[
    Validators.required,
    CustomValidators.rangeLength([1, 4]),
    CustomValidators.equalTo(password)
    ]
   ],

    pesos: ['',[
    Validators.required,
    CustomValidators.rangeLength([1, 16]),
       ]
    ],
  
   GT:['',[
    Validators.required,
    CustomValidators.gt(10)//el valor debe ser mayor que  10
    ]
   ],

        LT:['',[
    Validators.required,
    CustomValidators.lt(20)// el valor debe ser inferior a 20 
    ]
   ],

     dateISO:['',[
    Validators.required,
    CustomValidators.dateISO//el formato de fecha internacional es 2002/04/04 
    ]
   ],

 thumbnailImg: ['', 
 [Validators.required, this.validateExt]
 ],

      rango:['',[
    Validators.required,
   CustomValidators.range('13, 20')
    ]
   ],

        digitos:['',[
    Validators.required,
   CustomValidators.digits
    ]
   ],

    json:['',[
    Validators.required,
   CustomValidators.json
    ]
   ],


nigual: nigual,


   nigual2:['',[
    Validators.required,
    CustomValidators.notEqualTo(nigual)
    ]
   ],


         nigual3:['',[
     Validators.required,
     CustomValidators.notEqual('333')
     ]
   ],

     igual:['',[
     Validators.required,
     CustomValidators.equal('333')
     ]
   ],



      minandmax:['',[
     Validators.required,
     CustomValidators.min(1),
     CustomValidators.max(4)
      ]
   ],

vip:['',[
Validators.required,
this.ip
 ]
],

campo1: ['',[
  CustomValidators.number
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
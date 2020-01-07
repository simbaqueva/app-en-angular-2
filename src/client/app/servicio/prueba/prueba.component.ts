import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule, FormArray  } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * This class represents the lazy loaded HomeComponent.
 */

@Component({
  moduleId: module.id,
  selector: 'sd-prub',
  templateUrl: 'prueba.component.html',
  styleUrls: ['prueba.component.css'],
  

})



export class PruebaComponent implements OnInit {
  
name = 'Angular'; 
link = 'http://localhost:3000/img?id=lambo&h=';
http: Http;
litems = <any>[];

constructor(http: Http) {
  this.http = http;
}

ngOnInit() { }

listItems(item:string): void {

 var apiLink = this.link + item;
  
  this.http.get(apiLink)
 .map(res => res.json())
    .subscribe(
      litem => this.litems  = litem,
      err => this.logError(err),
      () => console.log()
    )
  };

logError(err:any) {
  console.error('There was an error: ' + err);

}

}
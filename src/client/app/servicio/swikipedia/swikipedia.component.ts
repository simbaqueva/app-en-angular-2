import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule, FormArray  } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { SwikipediaService } from './swikipedisservi.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */

@Component({
  moduleId: module.id,
  selector: 'sd-swiki',
  templateUrl: 'swikipedia.component.html',
  styleUrls: ['swikipedia.component.css'],
  providers: [SwikipediaService]

})



export class SwikipediaComponent  {
  
 visibility = 'shown';

getLabel() {
  return this.visibility == 'shown' ? 'Hide' : 'Show';
}

toggleVisibility() {
  this.visibility = 
  this.visibility == 'shown'
  ? 'hidden' :  'shown';
 }

  items: Observable<string[]>;

  // @HostBinding('@routeAnimation') routerAnimation = true;
  // @HostBinding('style.display') display = 'block';
  // @HostBinding('style.position') position = 'absolute'; 

  constructor (private swikipediaService: SwikipediaService) { }



  search (term: string) {
    this.items = this.swikipediaService.search(term);
  }

}
import { Component, OnInit } from '@angular/core';


/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-carrusel',
  templateUrl: 'carrusel.component.html',
  styleUrls: ['carrusel.component.css'],
})
export class CarruselComponent  {

  // newName: string = '';
  // errorMessage: string;
  // names: any[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  // constructor(public nameListService: NameListService) {}

  // /**
  //  * Get the names OnInit
  //  */
  // ngOnInit() {
  //   this.getNames();
  // }

  // /**
  //  * Handle the nameListService observable
  //  */
  // getNames() {
  //   this.nameListService.get()
  //     .subscribe(
  //       names => this.names = names,
  //       error => this.errorMessage = <any>error
  //     );
  // }

  // /**
  //  * Pushes a new name onto the names array
  //  * @return {boolean} false to prevent default form submit behavior to refresh the page.
  //  */
  // addName(): boolean {
  //   // TODO: implement nameListService.post
  //   this.names.push(this.newName);
  //   this.newName = '';
  //   return false;
  // }

}

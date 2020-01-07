import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SwikipediaService {

  constructor(private jsonp: Jsonp) {}
  
  search (term: string) {  
   // let queryString =  `?search=${term}&action=opensearch&format=json&callback=JSONP_CALLBACK`;
    let apiALEX = 'http://en.wikipedia.org/w/api.php';

    let params = new URLSearchParams();
    params.set('search', term); // the user's search value
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
 
    // TODO: Add error handling
    return this.jsonp
               .get(apiALEX, { search: params })
               .map(response => <string[]> response.json()[1]);
  }
}

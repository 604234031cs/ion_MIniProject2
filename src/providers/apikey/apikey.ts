import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the ApikeyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApikeyProvider {

  constructor(public http: HttpClient) {

}


  loaddata_apartment(){
    let url = 'http://localhost/todoslim3/public/apartment';
    return this.http.get(url);
  }


  loaddata_dorm(){
    let url = 'http://localhost/todoslim3/public/dorm';
    return this.http.get(url);
  }

  loadDeteil(roomid:string){
    let url  = 'http://localhost/todoslim3/public/deteil/ '+roomid;
    return this.http.get(url);
  }

}

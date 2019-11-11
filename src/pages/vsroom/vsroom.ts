import { ApikeyProvider } from './../../providers/apikey/apikey';
import { TestPage } from './../test/test';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-vsroom',
  templateUrl: 'vsroom.html',
})
export class VsroomPage {
  result:any={};
  value;

  constructor(public navCtrl: NavController, public navParams: NavParams,public keyapi : ApikeyProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VsroomPage');
    this.keyapi.loadrooms().subscribe(data=>{
     this.value = data;
    });
  }

  getRoomToRoom(){
  console.log(this.result.room1);
  console.log(this.result.room2);
}
  


}

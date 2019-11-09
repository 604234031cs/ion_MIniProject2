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
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VsroomPage');
  }

  gettest(){
    console.log("ประเภทห้อง",this.result.type);
    console.log("จำกัดเพศ",this.result.category);
  }

}

import { InsertRoomPage } from './../insert-room/insert-room';
import { AccountPage } from './../account/account';
import { PopoverComponent } from './../../components/popover/popover';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {
  datauser:any=[];
  ev:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,
    public modalController: ModalController) {
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
    this.datauser=this.navParams.data;
    console.log(this.datauser);
  }


  logOut(myevent){
    let popover =this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev:myevent 
    });
  }



  
}

import { Http } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { ApikeyProvider } from './../../providers/apikey/apikey';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpErrorResponse } from '@angular/common/http';
import "rxjs/add/operator/map";
/**
 * Generated class for the DeteilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deteil',
  templateUrl: 'deteil.html',
})
export class DeteilPage {

 dataDeteil:string="";
  DeteilRoom:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private keyAPI : ApikeyProvider) {
    this.deteilRoom();
  }

  ionViewDidLoad() {
  this.dataDeteil=this.navParams.data;
  console.log(this.dataDeteil);
  }

  deteilRoom(){
    this.keyAPI.loadDeteil(this.dataDeteil).subscribe((data:any=[])=>{
    this.deteilRoom =data;
      console.log(this.deteilRoom);
    }   
    );
  }

}

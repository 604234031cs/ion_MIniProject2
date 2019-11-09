import { Http } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { ApikeyProvider } from './../../providers/apikey/apikey';
import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingCmp, Img} from 'ionic-angular';
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

 dataDeteil:any=[];
 showdeteileData:any=[];
 showdeteilImg:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private keyAPI : ApikeyProvider) {
    this.loadDeteil();
    
  }

  loadDeteil() {
  this.dataDeteil=this.navParams.data;
  console.log(this.dataDeteil);
  this.keyAPI.loadDeteil(this.dataDeteil).subscribe((data:any=[])=>{
    console.log(data['rooms']);
    console.log(data['img']);
    this.showdeteileData = data['rooms'];
    this.showdeteilImg=data['img'];
    }
    );
   
  }

  }



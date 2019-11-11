import { Http } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { ApikeyProvider } from './../../providers/apikey/apikey';
import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingCmp, Img, ActionSheetController} from 'ionic-angular';
import { HttpErrorResponse } from '@angular/common/http';
import "rxjs/add/operator/map";
import { SocialSharing } from '@ionic-native/social-sharing';
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
 member:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private keyAPI : ApikeyProvider,private socialSharing : SocialSharing,private actionSheetController:ActionSheetController) {
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

  shareRoom(show){
  let roomshare = this.actionSheetController.create({
    title:"Share room",
    buttons:[
      {
        text:"Share on Facebook",
        icon:"logo-facebook",
        handler:()=>{
          this.socialSharing.shareViaFacebook(show.room_name,show.room_address,show.room_category).then((ok) => {
           console.log(ok);
          }).catch((err) => {
           console.log(err);
          });
        }
      }
    ]
  });
  roomshare.present();
  } 



  textroom(){
    console.log(this.member.text);
  }





  }



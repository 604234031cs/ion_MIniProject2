import { ApikeyProvider } from './../../providers/apikey/apikey';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-room',
  templateUrl: 'list-room.html',
})
export class ListRoomPage {
  roomCategory:string;
  typeRoom:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private keyAPI : ApikeyProvider) {
  }

  ionViewDidLoad() {
    this.roomCategory=this.navParams.data;
    if(this.roomCategory=="อพาร์เมนท์"){
        this.keyAPI.loaddata_apartment().subscribe(data=>{
          this.typeRoom=data;
        });
    }else if(this.roomCategory=="หอพัก"){
        this.keyAPI.loaddata_dorm().subscribe(data=>{
          this.typeRoom=data;
        });
  }else if(this.roomCategory =="คอนโดมิเนียม"){
    console.log("คอนโดมิเนียม_Notdata");
  }
  else if(this.roomCategory =="แมนชัน"){
    console.log("แมนชัน_Notdata");
  }
}

showDeteil(roomid){
  this.navCtrl.push('DeteilPage',roomid);
}

}

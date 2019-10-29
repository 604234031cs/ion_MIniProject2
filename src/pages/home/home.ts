import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, MenuController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {

  constructor(public navCtrl: NavController,private menu: MenuController,public alertCtrl: AlertController) {

  }

  goLogin() {
     this.navCtrl.setRoot(LoginPage); 
  }
}
  


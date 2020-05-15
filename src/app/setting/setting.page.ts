import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
tab: string = "settigs";
  constructor(private navCtrl: NavController, private route: Router) { }

  ngOnInit() {
  }
	
  logout() { 
	  this.navCtrl.navigateRoot(['./sign-in']);
  }
  subscribe() {
    this.route.navigate(['./subscribe']);
  }

}

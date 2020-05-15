import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
	
  choose_languages() {
    this.navCtrl.navigateRoot(['./choose-languages']);
  } 

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ModalController } from '@ionic/angular';
import { StoriesPage } from '../stories/stories.page';
import { PlaysongPage } from '../playsong/playsong.page';  
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
loaderToShow: any;
  constructor(
    private route: Router, 
    private modalController: ModalController
    ) { }
  ngOnInit() {
  }
  gotoSetting() {
     this.route.navigate(['./setting']);
   } 
	

 async stories(){
   const modal = await this.modalController.create({
      component: StoriesPage
  });
  await modal.present(); 
}
	
 subscribe() {
    this.route.navigate(['./subscribe']);
  }
  playsong(){
    this.modalController.create({component:PlaysongPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  }

    click_loder() {

    }
}





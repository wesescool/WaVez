import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaysongPageRoutingModule } from './playsong-routing.module';

import { PlaysongPage } from './playsong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaysongPageRoutingModule
  ],
  declarations: [PlaysongPage]
})
export class PlaysongPageModule {}

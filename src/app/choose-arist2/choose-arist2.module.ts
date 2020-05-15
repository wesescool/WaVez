import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseArist2PageRoutingModule } from './choose-arist2-routing.module';

import { ChooseArist2Page } from './choose-arist2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseArist2PageRoutingModule
  ],
  declarations: [ChooseArist2Page]
})
export class ChooseArist2PageModule {}

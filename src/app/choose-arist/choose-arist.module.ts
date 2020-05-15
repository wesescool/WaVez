import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseAristPageRoutingModule } from './choose-arist-routing.module';

import { ChooseAristPage } from './choose-arist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseAristPageRoutingModule
  ],
  declarations: [ChooseAristPage]
})
export class ChooseAristPageModule {}

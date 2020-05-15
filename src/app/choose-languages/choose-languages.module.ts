import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseLanguagesPageRoutingModule } from './choose-languages-routing.module';

import { ChooseLanguagesPage } from './choose-languages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseLanguagesPageRoutingModule
  ],
  declarations: [ChooseLanguagesPage]
})
export class ChooseLanguagesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayListSongPageRoutingModule } from './play-list-song-routing.module';

import { PlayListSongPage } from './play-list-song.page'; 
@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    IonicModule,
    PlayListSongPageRoutingModule,
  ],
  declarations: [PlayListSongPage], 
})
export class PlayListSongPageModule {}

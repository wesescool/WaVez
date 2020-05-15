import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbumSongPageRoutingModule } from './album-song-routing.module';

import { AlbumSongPage } from './album-song.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbumSongPageRoutingModule
  ],
  declarations: [AlbumSongPage]
})
export class AlbumSongPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaylistPageRoutingModule } from './playlist-routing.module';

import { PlaylistPage } from './playlist.page'; 
import { CreateplaylistPage } from '../createplaylist/createplaylist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaylistPageRoutingModule
  ], 
  declarations: [PlaylistPage,CreateplaylistPage],
  entryComponents: [CreateplaylistPage]
})
export class PlaylistPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayListSongPage } from './play-list-song.page';

const routes: Routes = [
  {
    path: '',
    component: PlayListSongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayListSongPageRoutingModule {}

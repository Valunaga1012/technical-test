import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamDescriptionPage } from './team-description.page';

const routes: Routes = [
  {
    path: '',
    component: TeamDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamDescriptionPageRoutingModule {}

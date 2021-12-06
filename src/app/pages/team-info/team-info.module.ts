import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamInfoPageRoutingModule } from './team-info-routing.module';

import { TeamInfoPage } from './team-info.page';
import { PlayersComponent } from './players/players.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamInfoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TeamInfoPage, PlayersComponent]
})
export class TeamInfoPageModule {}

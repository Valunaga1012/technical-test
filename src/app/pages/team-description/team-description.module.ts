import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamDescriptionPageRoutingModule } from './team-description-routing.module';

import { TeamDescriptionPage } from './team-description.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamDescriptionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TeamDescriptionPage]
})
export class TeamDescriptionPageModule {}

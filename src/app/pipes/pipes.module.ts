import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterSeasonPipe } from './filter-season.pipe';



@NgModule({
  declarations: [FilterSeasonPipe],
  exports:[FilterSeasonPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }

import { Pipe, PipeTransform } from '@angular/core';
import { Competition } from '../models/competicion';

@Pipe({
  name: 'filterSeason'
})
export class FilterSeasonPipe implements PipeTransform {

  transform(array: any[], text: string = ''): Competition[] {
    if(text === '' || !array){
      return array;
    }

    return array.filter( 
      item => item.currentSeason?.startDate.includes(text)
    );

  }
  

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Competition } from '../models/competicion';
import { FootballService } from '../services/football.service';
import { LocalStorageService } from '../services/local-storage.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  public competitions: Competition[] = [];
  private subscription$: Subscription;
  public searchText: string;
  public darkMode: boolean;

  constructor(
    private footballService: FootballService,
    private router: Router,
    private localStorage: LocalStorageService,
    private themeService: ThemeService) {

      this.darkMode = this.themeService.getdarkMode();
    }
  
  ionViewWillEnter(){
    this.subscription$ = this.footballService.getCompetitions()
    .subscribe(res => {
      this.competitions = res.competitions;
    });
  }


  goToDetail(id: number){
    this.localStorage.create('idComp', id);
    this.router.navigate(['/teams']);
  }

  searchChange( event ){
    this.searchText = event.detail.value;
  }

  changeMode(){
    this.themeService.changeMode();
    this.darkMode = this.themeService.getdarkMode();
  }

  ionViewDidLeave(){
    this.subscription$.unsubscribe();
  }

}

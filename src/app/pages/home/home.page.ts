import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Competition } from '../../models/competicion';
import { FootballService } from '../../services/football.service';
import { LocalStorageService } from '../../services/local-storage.service';

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
    private router: Router) { }
  
  ionViewWillEnter(){
    this.getCompetitions()
  }

  private getCompetitions(): void {
    this.subscription$ = this.footballService.getCompetitions().subscribe(res => {
      this.competitions = res.competitions;
      console.log(this.competitions)
    });
  }

  public goToDetail(id: number): void{
    this.router.navigate(['/teams', id]);
  }

  public searchChange( event ): void {
    this.searchText = event.detail.value;
  }

  ionViewDidLeave(){
    this.subscription$.unsubscribe();
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import {catchError , map} from 'rxjs/internal/operators';
import { TCompetition, Team } from 'src/app/models/team';
import { FootballService } from 'src/app/services/football.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage {

  private idCompetition: string;
  private subscription$: Subscription;
  public teams: Team[] = [];
  public competition: TCompetition | any = {name: ''};
  public errorMessaje: string;

  constructor(
    private footballService: FootballService,
    private navigation: Router,
    private localSotrage: LocalStorageService) { }
 

  ionViewWillEnter(){
    this.loadResources();
  }

  loadResources(){
    this.idCompetition = this.localSotrage.getItem('idComp');
    this.subscription$ = this.footballService.getTeams(this.idCompetition)
    .pipe(
      map(res => {
        this.teams = res.teams; 
        this.competition = res.competition
      }),
      catchError(err => {
          this.errorMessaje = err.error.message;
          return of([]);
      })
    ).subscribe();
    }

    goToDescriptionTeam(id:number){
      this.localSotrage.create('idTeam', id);
      this.navigation.navigate(['/team-description']);
    }

    ionViewDidLeave(){
      this.subscription$.unsubscribe();
      this.teams = [];
      this.competition = {name: ''};
    }
}

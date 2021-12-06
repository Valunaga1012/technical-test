import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public defaulImg: string = './assets/images/default-image.png'

  constructor(
    private footballService: FootballService,
    private navigation: Router,
    private localSotrage: LocalStorageService,
    private activateRouter: ActivatedRoute) { }
 

  ionViewWillEnter(){
    this.localSotrage.create('idCompetition', this.activateRouter.snapshot.params.id);
    this.loadResources(this.activateRouter.snapshot.params.id);
  }

  private loadResources(id: string): void{
    this.subscription$ = this.footballService.getTeams(id)
    .pipe(
      map(res => {
        this.teams = res.teams; 
        this.competition = res.competition;        
      }),
      catchError(err => {
          this.errorMessaje = err.error.message;
          return of([]);
      })
    ).subscribe();
    }

    public goToDescriptionTeam(id:number): void{
      this.localSotrage.create('idTeam', id);
      this.navigation.navigate(['/team-info']);
    }

    ionViewDidLeave(){
      this.subscription$.unsubscribe();
      this.teams = [];
      this.competition = {name: ''};
    }
}

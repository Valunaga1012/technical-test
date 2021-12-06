import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TeamDescription } from 'src/app/models/teamDescription';
import { FootballService } from 'src/app/services/football.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.page.html',
  styleUrls: ['./team-info.page.scss'],
})
export class TeamInfoPage  {
  public teamId:string;
  private subscription$: Subscription;
  public team: TeamDescription | '';
  public categories = [{segment:'General'}, {segment:'Players'}];
  public tab: boolean = true;
  public idCompetition: string;
  public defaultImg: string = './assets/images/default-image.png';

  constructor(
    private footballService: FootballService,
    private localStorage: LocalStorageService
    ) {}


  ionViewWillEnter(){
    this.idCompetition = this.localStorage.getItem('idCompetition');
    this.getTeam();
  }

  private getTeam(): void{
    this.teamId = this.localStorage.getItem('idTeam');
    this.subscription$ = this.footballService.getTeamDescription(this.teamId)
      .subscribe( res => { this.team = res; });
  }

  ionViewDidLeave(){
    this.subscription$.unsubscribe();
    this.team = '';
  }

  public segmentChanged(event): void{
    this.tab = event.detail.value ==='General' ? true : false;
  }

}

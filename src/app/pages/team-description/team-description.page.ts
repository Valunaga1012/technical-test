import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TeamDescription } from 'src/app/models/teamDescription';
import { FootballService } from 'src/app/services/football.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-team-description',
  templateUrl: './team-description.page.html',
  styleUrls: ['./team-description.page.scss'],
})
export class TeamDescriptionPage {

  private teamId:string;
  private subscription$: Subscription;
  public team: TeamDescription | '';
  public categories = [{segment:'General'}, {segment:'Players'}];
  public segment: boolean = true;

  constructor(
    private footballService: FootballService,
    private navigation: Router,
    private localStorage: LocalStorageService
    ) {}


  ionViewWillEnter(){
    this.getTeam();
  }

  getTeam(){
    this.teamId = this.localStorage.getItem('idTeam');
    this.subscription$ = this.footballService.getTeamDescription(this.teamId)
      .subscribe( res => { this.team = res; });
  }

  goBack(){
    this.navigation.navigate(['/teams'])
  }

  ionViewDidLeave(){
    this.subscription$.unsubscribe();
    this.team = '';
  }

  segmentChanged(event){
    this.segment = event.detail.value =='General' ? true : false;
  }

}

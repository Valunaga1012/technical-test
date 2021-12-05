import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Competitions } from '../models/competicion';
import { Teams } from '../models/team';
import { TeamDescription } from '../models/teamDescription';


@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor(private http: HttpClient) { }

  private executeQuery<T>(query: string){
    query = environment.url + query;
    return this.http.get<T>(query);
  }

  getCompetitions(){
    return this.executeQuery<Competitions>(`/competitions`);
  }

  getTeams(id: string){
    return this.executeQuery<Teams>(`/competitions/${id}/teams`);
  }

  getTeamDescription(id:string){
    return this.executeQuery<TeamDescription>(`/teams/${id}`);
  }

}

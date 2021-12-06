import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Competitions } from '../models/competicion';
import { Teams } from '../models/team';
import { TeamDescription } from '../models/teamDescription';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor(private http: HttpClient) { }

  public getCompetitions(): Observable<Competitions>{
    return this.http.get<Competitions>(`${environment.API}/competitions`);
  }

  public getTeams(id: string): Observable<Teams>{
    return  this.http.get<Teams>(`${environment.API}/competitions/${id}/teams`);
  }

  public getTeamDescription(id:string): Observable<TeamDescription>{
    return  this.http.get<TeamDescription>(`${environment.API}/teams/${id}`);
  }

}

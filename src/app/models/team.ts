export interface Teams {
  count: number;
  filters: Array<any>;
  competition: Array<TCompetition>;
  season: Season;
  teams: Array<Team>;
}
export interface Team {
  id: number;
  area: Array<Area>;
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: string;
}
interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner?: any;
}
export interface TCompetition {
  id: number;
  area: Array<Area>;
  name: string;
  code: string;
  plan: string;
  lastUpdated: string;
}
interface Area {
  id: number;
  name: string;
}

export interface Teams {
  count: number;
  filters: Filters;
  competition: TCompetition;
  season: Season;
  teams: Team[];
}

export interface Team {
  id: number;
  area: Area;
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
  area: Area;
  name: string;
  code: string;
  plan: string;
  lastUpdated: string;
}

interface Area {
  id: number;
  name: string;
}

interface Filters {
}
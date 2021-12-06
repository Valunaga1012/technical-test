export interface Competitions {
  count: number;
  filters: Array<any>;
  competitions: Array<Competition>;
}
export interface Competition {
  id: number;
  area: Area;
  name: string;
  code?: string;
  emblemUrl?: string;
  plan: string;
  currentSeason?: CurrentSeason;
  numberOfAvailableSeasons: number;
  lastUpdated: string;
}
interface CurrentSeason {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday?: number;
  winner?: Array<Winner>;
}
interface Winner {
  id: number;
  name: string;
  shortName?: string;
  tla?: string;
  crestUrl?: string;
}
interface Area {
  id: number;
  name: string;
  countryCode: string;
  ensignUrl?: string;
}

export interface TeamDescription {
  id: number;
  area: Area;
  activeCompetitions: Array<ActiveCompetition>;
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
  squad: Array<Squad>;
  lastUpdated: string;
}

export interface Squad {
  id: number;
  name: string;
  position?: string;
  dateOfBirth: string;
  countryOfBirth?: string;
  nationality?: string;
  shirtNumber?: number;
  role?: string;
}

interface ActiveCompetition {
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
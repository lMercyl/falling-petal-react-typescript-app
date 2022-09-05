export interface StatusHero {
  pink: number;
  green: number;
  yellow: number;
  blue: number;
  purpule: number;
  red: number;
  black: number;
}

export interface CountCard {
  pink: number;
  green: number;
  yellow: number;
  blue: number;
  purpule: number;
  red: number;
  black: number;
}

export interface PlayerSliceState {
  score: number;
  name: string;
  statusHero: Array<StatusHero>;
  countCard: Array<CountCard>;
  all: number;
}
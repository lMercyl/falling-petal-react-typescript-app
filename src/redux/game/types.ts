export interface statusPlayer {
  playerOne: boolean;
  playerTwo: boolean;
}

export interface GameSliceState {
  statusPlayer:  statusPlayer;
  winner: string;
  edge: number;
  drop: number;
  all: number;
  countGame: number;
}
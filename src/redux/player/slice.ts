import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PlayerSliceState, StatusHero, CountCard } from './types';

const initialState: PlayerSliceState = {
  score: 0,
  name: "",
  statusHero: [],
  countCard: [],
  all: 0
};

const ResultSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setName(state: PlayerSliceState, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setScore(state: PlayerSliceState, action: PayloadAction<number>) {
      state.score = action.payload;
    },
    setStatusHero(state: PlayerSliceState, action: PayloadAction<Array<StatusHero>>) {
      state.statusHero = action.payload;
    },
    setCountCard(state: PlayerSliceState, action: PayloadAction<Array<CountCard>>) {
      state.countCard = action.payload;
    },
    setAll(state: PlayerSliceState, action: PayloadAction<number>) {
      state.all = action.payload;
    }
  }, 
})

export const { setName, setScore, setStatusHero, setCountCard, setAll } = ResultSlice.actions;

export default ResultSlice.reducer;
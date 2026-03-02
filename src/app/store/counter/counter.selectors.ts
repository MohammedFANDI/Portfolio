import { createSelector } from '@ngrx/store';
import { CounterModel } from './counter.model';

interface AppState {
  counter: CounterModel;
}

// on sait que le selector est peut selectioner toutes les state de toutes les modele
// donc je dois lui dir tracker justes les states de Counter Module

export const trackCounter = (state: AppState) => state.counter;

// Creation de selector de Counter Module
// et je prend que le state count

export const selectCount = createSelector(trackCounter, (state) => state.count);

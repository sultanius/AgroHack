import { ADD_CURRENT_POSITION, SHOW_PROPOSALS } from './actionTypes';

export const addCurrentPositionAC = (payload) => ({
  type: ADD_CURRENT_POSITION,
  payload,
});

import {ActionCreator} from 'redux';
import {
  GameResult,
  UPDATE_GAME_RESULTS,
  UpdateGameResultsAction
} from "../types/gameResult";

export const updateStoredGameResults: ActionCreator<UpdateGameResultsAction> = (lections: GameResult[]) => {
  return {type: UPDATE_GAME_RESULTS, payload: lections};
};

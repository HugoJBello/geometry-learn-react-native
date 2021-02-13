import {
  GameResult,
  UPDATE_GAME_RESULTS,
  UpdateGameResultsAction
} from "../types/gameResult";

const initial =[] as GameResult[]
const initialLectionState: GameResult[] = initial

export function gameResultReducer(
  state: GameResult[] = initialLectionState,
  action: UpdateGameResultsAction,
): GameResult[] {
  switch (action.type) {
    case UPDATE_GAME_RESULTS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}

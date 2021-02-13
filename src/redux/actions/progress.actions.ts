import {ActionCreator} from 'redux';
import {
  GameResult,
  UPDATE_ACTIVE_LESSON,
  UPDATE_GAME_RESULTS,
  UpdateActiveLessonAction,
  UpdateGameResultsAction
} from "../types/gameResult";
import {Progress, UPDATE_PROGRESS, UpdateProgressAction} from "../types/progress";

export const updateStoredProgress: ActionCreator<UpdateProgressAction> = (progress: Progress) => {
  return {type: UPDATE_PROGRESS, payload: progress};
};

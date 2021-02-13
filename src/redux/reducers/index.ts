import {combineReducers} from 'redux';
import {userReducer} from './user.reducers';
import {configReducer} from "./config.reducers";
import {gameResultReducer} from "./gameResult.reducers";
import {progressReducer} from "./progress.reducers";

export const rootReducer = combineReducers({
  user: userReducer,
  config: configReducer,
  gameResults: gameResultReducer,
  progress: progressReducer
});

export type RootState = ReturnType<typeof rootReducer>;

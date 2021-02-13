import {Quiz} from "./quiz";

export interface GameResult {
    id: string,
    gameId: string,
    score: string,
    date: Date
}


export const UPDATE_GAME_RESULTS = 'UPDATE_GAME_RESULTS';

export interface UpdateGameResultsAction {
    type: typeof UPDATE_GAME_RESULTS;
    payload: GameResult[];
}

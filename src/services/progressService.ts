import {LectionStatus, LessonsProgress, Progress, QuizStatus} from "../redux/types/progress";
import AsyncStorage from "@react-native-community/async-storage";
import {GameResult} from "../redux/types/gameResult";


export const getProgressStateDb = async (): Promise<Progress> => {
    try {
        const progressStr = await AsyncStorage.getItem('progress');
        const progress = JSON.parse(progressStr as string) as Progress
        if (!progress || !progress.lastActive) {
            return initializeProgress()
        }
        return progress
    } catch (e) {
        //console.log(e)
        return initializeProgress()
    }
}

export const initializeProgress = (): Progress => {
    return {
        lastActive: new Date(),
        level: 0,
        points: 0,
        lessons: {},
        badges: []
    } as Progress
}


export const updateProgressStateDb = async (progress: Progress) => {
    try {
        await AsyncStorage.setItem('progress', JSON.stringify(progress));
    } catch (e) {
        console.log(e)
        throw e
    }
}

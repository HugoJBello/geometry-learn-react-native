//https://blog.reactnativecoach.com/creating-draggable-component-with-react-native-132d30c27cb0
import React, {useEffect, useState} from "react";
import {StyleSheet, View} from "react-native";
import DragableFigure, {Figure} from "./dragableFigure";

const SimpleFigures = ({navigation, route}:any) => {
    let {figureGoal, difficulty} = route.params
    figureGoal = figureGoal as Figure
    difficulty = difficulty as Number
    const [completed, setCompleted] = useState(false)
    const [numCorrectFigures, setnumCorrectFigures] = useState(4)
    let [misses, setMisses] = useState(0)
    let [wins, setWins] = useState(0)

    useEffect(()=>{
        console.log(wins)
    }, [wins])

    const onFigureDim = (value) => {
        wins = wins + 1
        setWins(wins)
        if (wins === numCorrectFigures) {
            console.log("_---")
            navigation.navigate('LecturesMenu')
        }
    }
    const onFigureMoveBack = (value) => {
        misses = misses + 1
        setMisses(misses)
    }

    const getFigureGoal = () =>{
        if (figureGoal == Figure.Circle) {
            return  <View style={styles.circle}/>
        } else if (figureGoal == Figure.Square) {
            return  <View style={styles.square}/>
        }
    }

    const getFigure = (displayCorrectFigure:boolean) =>{
        const incorrectFigure = (figureGoal === Figure.Square)? Figure.Circle: Figure.Square
        
        if (displayCorrectFigure) {
            return <DragableFigure dims={displayCorrectFigure} onDim={onFigureDim}  onMoveBack={onFigureMoveBack} figure={figureGoal}/>
        } else {
            return <DragableFigure dims={displayCorrectFigure} onDim={onFigureDim}  onMoveBack={onFigureMoveBack} figure={incorrectFigure}/>
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.dropZone}>
                <View style={styles.container}>
                    {getFigureGoal()}
                </View>
            </View>


            <View style={styles.ballContainer} />
            <View style={styles.container}>

            <View style={styles.row}>
                {getFigure(true)}
                {getFigure(false)}
                {getFigure(false)}
                {getFigure(true)}
            </View>

                <View style={styles.row}>
                    {getFigure(false)}
                    {getFigure(true)}
                    {getFigure(false)}
                    {getFigure(true)}
                </View>
            </View>
        </View>
    );


}
let CIRCLE_RADIUS = 30;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    ballContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height:200
    },
    container:{
        paddingTop:50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: "row",
        marginBottom:10
    },
    dropZone: {
        height: 200,
        backgroundColor: "#00334d"
    },
    square: {
        backgroundColor: "skyblue",
        width: CIRCLE_RADIUS * 3,
        height: CIRCLE_RADIUS * 3,
    },
    circle: {
        backgroundColor: "skyblue",
        borderWidth: 1,
        width: CIRCLE_RADIUS * 3,
        height: CIRCLE_RADIUS * 3,
        borderRadius: CIRCLE_RADIUS * 3
    },
    text: {
        marginTop: 25,
        marginLeft: 5,
        marginRight: 5,
        textAlign: "center",
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold"
    }
});

export default SimpleFigures;

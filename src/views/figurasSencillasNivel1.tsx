//https://blog.reactnativecoach.com/creating-draggable-component-with-react-native-132d30c27cb0
import React, {useRef} from "react";
import {Animated, View, StyleSheet, PanResponder, Text} from "react-native";
import DragableFigure, {Figure} from "./dragableFigure";

const FigurasSencillasNivel1 = () => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.dropZone}>
                <Text style={styles.text}>Drop them here!</Text>
            </View>
            <View style={styles.ballContainer} />
            <View style={styles.row}>
                <DragableFigure dims={true} figure={Figure.Circle}/>
                <DragableFigure figure={Figure.Square}/>
                <DragableFigure figure={Figure.Square}/>
                <DragableFigure dims={true} figure={Figure.Circle}/>
                <DragableFigure dims={true} figure={Figure.Circle}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    ballContainer: {
        height:200
    },
    row: {
        flexDirection: "row"
    },
    dropZone: {
        height: 200,
        backgroundColor: "#00334d"
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

export default FigurasSencillasNivel1;

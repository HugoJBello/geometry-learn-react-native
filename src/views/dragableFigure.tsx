//https://blog.reactnativecoach.com/creating-draggable-component-with-react-native-132d30c27cb0
import React, {useEffect, useRef, useState} from "react";
import {Animated, View, StyleSheet, PanResponder, Text} from "react-native";

export  enum Figure {
    Circle = "Circle",
    Square = "Square",
    Rectangle = "Rectangle",
    Triangle = "Triangle",
}

const DragableFigure = (params: any) => {
    let {dims, figure, onDim, onMoveBack} = params
    dims = dims as boolean
    figure = figure as Figure
    onDim = onDim as Function
    onMoveBack = onMoveBack as Function

    const pan = useRef(new Animated.ValueXY()).current
    const dim = useRef(new Animated.Value(1)).current;
    const [showDragable, setShowDragable] = useState(true)

    const panResponderInit = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            pan.setOffset({
                x: (pan as any).x._value,
                y: (pan as any).y._value
            });
        },
        onPanResponderMove: Animated.event(
            [
                null,
                {dx: pan.x, dy: pan.y}
            ], {useNativeDriver:false}
        ),
        onPanResponderRelease: (e, gesture) => {
            if (isDropArea(gesture) && dims) {
                Animated.timing(dim, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver:false
                }).start(() =>{
                        onDim(true)
                        setShowDragable(false);
                }

                );
            } else {
                onMoveBack(true)
                Animated.spring(pan, {
                    toValue: {x: 0, y: 0},
                    friction: 5,
                    useNativeDriver:false
                }).start();
            }
        }
    })

    const [panResponder, setPanResponder] = useState(panResponderInit)

    const isDropArea = (gesture:any) => {
        return gesture.moveY < 200;
    }

    const getFigureStyle = () => {
        if (figure == Figure.Circle) {
            return styles.circle
        } else if (figure == Figure.Square) {
            return styles.square
        } else {
            return styles.circle
        }
    }

    return (<View style={{width: "20%", alignItems: "center"}}>
            {showDragable && <Animated.View
                style={[{
                    transform: [{translateX: pan.x}, {translateY: pan.y}]
                }, {opacity:dim}]}
                {...panResponder.panHandlers}
            >
                <View
                    style={[getFigureStyle()]}/>
            </Animated.View>}
        </View>
    );
}

let CIRCLE_RADIUS = 30;

const styles = StyleSheet.create({
    circle: {
        backgroundColor: "skyblue",
        borderWidth: 1,
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS
    },
    square: {
        borderWidth: 1,
        backgroundColor: "skyblue",
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    titleText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: "bold"
    },
    box: {
        height: 150,
        width: 150,
        backgroundColor: "blue",
        borderRadius: 5
    }
});

export default DragableFigure;

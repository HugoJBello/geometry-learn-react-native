//https://blog.reactnativecoach.com/creating-draggable-component-with-react-native-132d30c27cb0
import React, {useRef} from "react";
import {Animated, View, StyleSheet, PanResponder, Text} from "react-native";

const DragableSquare = () => {
    const pan = useRef(new Animated.ValueXY()).current;
    const opacity = useRef(new Animated.Value(1))

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    {dx: pan.x, dy: pan.y}
                ]
            ),
            onPanResponderRelease: (e, gesture) => {
                Animated.spring(pan, {
                    toValue: {x: 0, y: 0},
                    friction: 5
                }).start();
            },
        })
    ).current;

    return (
        <Animated.View
            style={{
                transform: [{translateX: pan.x}, {translateY: pan.y}]
            }}
            {...panResponder.panHandlers}
        >
            <View style={styles.circle}/>
        </Animated.View>
    );
}

let CIRCLE_RADIUS = 30;

const styles = StyleSheet.create({
    circle: {
        backgroundColor: "skyblue",
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS
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

export default DragableSquare;

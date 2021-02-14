//https://blog.reactnativecoach.com/creating-draggable-component-with-react-native-132d30c27cb0
import React, {useRef} from "react";
import {Animated, View, StyleSheet, PanResponder, Text} from "react-native";

const Example = () => {
    const pan = useRef(new Animated.ValueXY()).current;

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
                    toValue: { x: 0, y: 0 },
                    friction: 5
                }).start();
            },
        })
    ).current;

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Drag this box!</Text>
            <Animated.View
                style={{
                    transform: [{translateX: pan.x}, {translateY: pan.y}]
                }}
                {...panResponder.panHandlers}
            >
                <View style={styles.box}/>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
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

export default Example;

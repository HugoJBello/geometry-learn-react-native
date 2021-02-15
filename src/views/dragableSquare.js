//https://blog.reactnativecoach.com/creating-draggable-component-with-react-native-132d30c27cb0
import React, {useEffect, useRef, useState} from "react";
import {Animated, View, StyleSheet, PanResponder, Text} from "react-native";

const DragableSquare = () => {
    const pan = new Animated.ValueXY()
    const dim = useRef(new Animated.Value(1)).current;
    //const opacity = new Animated.Value(1)
    const [showDragable, setShowDragable] = useState(true)

    const panResponderInit = PanResponder.create({
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
            ], {useNativeDriver:false}
        ),
        onPanResponderRelease: (e, gesture) => {
            console.log("xx", dim);

            if (isDropArea(gesture)) {
                Animated.timing(dim, {
                    toValue: 0,
                    duration: 1000
                }).start(() =>{
                        console.log("--", dim);
                        setShowDragable(false);
                }

                );
            } else {
                Animated.spring(pan, {
                    toValue: {x: 0, y: 0},
                    friction: 5
                }).start();
            }
        }
    })

    const [panResponder, setPanResponder] = useState(panResponderInit)

    useEffect(() => {
        setPanResponder(panResponderInit)
    }, [])

    const isDropArea = (gesture) => {
        return gesture.moveY < 200;
    }


    return (<View style={{width: "20%", alignItems: "center"}}>
            {showDragable && <Animated.View
                style={[{
                    transform: [{translateX: pan.x}, {translateY: pan.y}]
                }, {opacity:dim}]}
                {...panResponder.panHandlers}
            >
                <View
                    style={[styles.circle]}/>
            </Animated.View>}
        </View>
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

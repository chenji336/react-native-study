import React, { Component } from 'react'
import { View, Text } from 'react-native';

class FlexDirectionsBasics extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
                <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
            </View>
        );
    }
}

export default class FlexBox extends Component {
    render() {
        return (
            <FlexDirectionsBasics />
        )
    }
}

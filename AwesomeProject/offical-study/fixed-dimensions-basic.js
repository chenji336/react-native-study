import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FixedDimensionsBasic extends Component {
    render() {
        return (
            // <View>
            //      {/* <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            //     <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} /> */}

            //     {/* iphonex高宽是375 812，这里高宽默认就是px */}
            //     <View style={{width: 375, height: 762, backgroundColor: 'steelblue'}} />
            // </View>

            <View style={{ flex: 1 }}>
                {/* 默认方向是vertical竖直方向 */}
                <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
                <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
                <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
            </View>
        );
    }
}
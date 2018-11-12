import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class LostsOfStyles extends Component {
    render() {
        return (
            <View style={{marginTop: 20}}>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={styles.red}>just red</Text>
                {/* 数组 后面覆盖前面 */}
                <Text style={[styles.bigblue, styles.red]}>bigblue,then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red,then bigblue</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold', 
        fontSize: 40
    },
    red: {
        color: 'red'
    }
});
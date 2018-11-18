import React, { Component } from 'react'
import {
    Text, View, Button, Alert, StyleSheet, Platform,
    TouchableHighlight, TouchableOpacity,
    TouchableNativeFeedback, TouchableWithoutFeedback
} from 'react-native'

class ButtonBasics extends Component {
    render() {
        return (
            <View>
                <Button
                    title='点我'
                    onPress={() => Alert.alert('你点击了按钮！')}
                ></Button>
            </View>
        );
    }
}

class ButtonBasics2 extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button onPress={this._onPressButton} title='Press Me'></Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={this._onPressButton} title='Press Me' color="#841584"></Button>
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button onPress={this._onPressButton} title='This look great!'></Button>
                    <Button onPress={this._onPressButton} title='OK!' color="#841584"></Button>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

/* Touchable系列组件 
1.所有的Touchable都是继承与TouchableWithoutFeedback(TouchableWithoutFeedback是没有任何效果的，Button就是TouchableWithoutFeedback的一个包装)
2.TouchableHighlight:点击会变暗（高亮闪烁）如果backgroundColor太深可能不是很明显；underlayColor就是在backgroundColor后面的颜色
*/
class Touchables extends Component {

    _onPressButton() {
        Alert.alert('You tapped the button!');
    }

    _onLongPressButton() {
        Alert.alert('You long-press the button!');
    }

    render() {
        return (
            <View style={stylesTouch.container}>
                <TouchableHighlight onPress={this._onPressButton} underlayColor='white'>
                    <View style={stylesTouch.button}>
                        <Text style={stylesTouch.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={stylesTouch.button}>
                        <Text style={stylesTouch.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableWithoutFeedback
                    onPress={this._onPressButton}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Touchable with Long Press</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
const stylesTouch = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
})

export default class ButtonStudy extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* <ButtonBasics></ButtonBasics> */}
                <ButtonBasics2></ButtonBasics2>
                {/* <Touchables></Touchables> */}
            </View>
        )
    }
}

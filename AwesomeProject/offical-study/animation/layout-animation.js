import React, { Component } from 'react'
// LayoutAnimation进行全局的动画创建
import { NativeModules, Text, View, LayoutAnimation, TouchableOpacity, StyleSheet } from 'react-native'

const { UIManager } = NativeModules;
// 安卓上执行layoutAnimation需要在UIManager中启动
UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);


export default class LayoutAnimationStudy extends Component {
    
    state = {
        w: 100,
        h: 100
    }

    _onPress = () => {
        console.log('onpress')
        // *Animate the update
        LayoutAnimation.spring();
        this.setState({
            w: this.state.w + 115,
            h: this.state.h + 115
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box, { width: this.state.w, height: this.state.h }]} />
                <TouchableOpacity onPress={this._onPress}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Press me!</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 200,
        height: 200,
        backgroundColor: 'red',
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

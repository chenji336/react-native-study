import React, { Component } from 'react'
// Animated进行动画控制更加的精细
import { Text, View, Animated } from 'react-native'

class FadeInView extends Component {
    state = {
        fadeAnim: new Animated.Value(0) // 设置opacity为0（跟Animated.View的style.opacity设置有关)
    };

    componentDidMount() {
        // console.log('componentDidMount') // dom加载完成之后执行
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1, // opacity=1
                duration: 10000
            }
        ).start();
    }

    render() {
        // console.log('render')
        const { fadeAnim } = this.state;

        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    opacity: fadeAnim // 将opcity设置为动画变量
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }

}

export default class AnimatedStudy extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <FadeInView style={{ width: 250, height: 50, backgroundColor: 'powderblue' }}>
                    <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>Fading in</Text>
                </FadeInView>
            </View>
        )
    }
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

import LostsOfStyles from './offical-study/losts-of-styles';
import FixedDimensionsBasic from './offical-study/fixed-dimensions-basic';
import FlexBox from './offical-study/flex-box';
import TextInputTraslate from './offical-study/input';
import ImageVar from './offical-study/image';
import ButtonStudy from './offical-study/button-study';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake（Cmd+m) or press menu button for dev menu',
});

type Props = {};
// 第一次渲染时候的使用
// function FirstRender(props) {
//   let pic = {
//     uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//   };
//   return (
//     <View style={styles.container}>
//       <Text>First React Native</Text>
//       <Image source={pic} style={{width: 193, height: 110}}></Image>
//     </View>
//   );
// }

export default class App extends Component<Props> {
  render() {
    return (
      // 最外层的flex:1代表着height: 100%(子组件的flex: 1是按照父组件的高度来的)
      <SafeAreaView style={{flex: 1}}>
        {/* <FirstRender></FirstRender> */}
        {/* <LostsOfStyles></LostsOfStyles> */}
        {/* <FixedDimensionsBasic></FixedDimensionsBasic> */}
        {/* <FlexBox></FlexBox> */}
        {/* <TextInputTraslate></TextInputTraslate> */}
        {/* <ImageVar></ImageVar> */}
        <ButtonStudy></ButtonStudy>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

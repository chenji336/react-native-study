import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import ButtonPlatform from './button'; // 会自己去找后缀（ios android)


export default class PlatFormStudy extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
        <ButtonPlatform></ButtonPlatform>
        <Text>PlatForm Version: {Platform.Version}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        height: Platform.OS === 'ios' ? 200 : 100,
        ...Platform.select({
            ios: {
                backgroundColor: 'red'
            },
            android: {
                backgroundColor: 'yellow'
            }
        })
    }
});

import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Button, SafeAreaView } from 'react-native'
import { DrawerNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation'

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../res/bulb.jpg')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <SafeAreaView>
                <Button
                    onPress={() => this.props.navigation.navigate('Notifications')}
                    title="Go to notifications"
                />
            </SafeAreaView>
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../res/bulb.jpg')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <SafeAreaView>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home"
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

const MyDrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: MyHomeScreen,
        },
        Notifications: {
            screen: MyNotificationsScreen,
        },
    }, {
        initialRouteName: 'Home',
    }
);

const MyApp = createAppContainer(MyDrawerNavigator);
// safeAreaView不能包裹MyApp，否则显示不出内容
export default MyApp;
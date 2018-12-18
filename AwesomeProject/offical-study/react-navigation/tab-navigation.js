import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

class HomeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home!', // 不起作用
        title: 'chenji'
    }

    render() {
        return (
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
                <Text>Home!</Text>
                <Button
                    title='Go to Details'
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class SettingsScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Settings!'
    }

    render() {
        return (
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
                <Text>Settings!</Text>
                <Button
                    title='Go to Details'
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class DetailsScreen extends Component {
    static navigationOptions = {
        title: 'Details'
    }

    render() {
        return (
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
                <Text>Details!</Text>
                <Button
                    title='Go back'
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

/**** 分成两个部分使用 
 * 1.TabNavigator包含StackNavigator 不好隐藏bottomTab
 * 2.StackNavigator包含TabNavigator 推荐：隐藏bottomTab
 * **/

/** 方法1 TabNavigator包含StackNavigator*/
const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen
    },
    {
        defaultNavigationOptions: {
            // title: 'Welcome' // header title
            header: null // 起作用，对比87行，因为这个是配置每个子项的navigationOptions
        }
    }
)
const SettingsStack = createStackNavigator(
    {
        Settings: SettingsScreen,
        Details: DetailsScreen
    }
)
const TabNavigator1 = createBottomTabNavigator(
    {
        Home: HomeStack,
        Settings: SettingsStack
    }
)
// HomeStack这个时候属于tabNavigator，操作的就是tab的一些属性
HomeStack.navigationOptions = {
    tabBarLabel: 'Home!', // 起作用，修改标题,对比第7行
    // header: null // 这个是不起作用的
}
SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings!'
}
/** 方法1 结束 */

/** 方法2 */
const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen  // HomeStack
        },
        Settings: {
            screen: SettingsScreen // SettingStack
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options`
                }
                return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
            },
            header: null, // 不起作用，因为这个是stackNavigator控制的
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
        }
    }
)

const AppNavigator = createStackNavigator({
    Tab: TabNavigator,
    Details: DetailsScreen
})

// 这里就属于StackNavigator控制范畴了
TabNavigator.navigationOptions = ({navigation}) => {
    // console.log('navigation.state:', navigation.state) // routeName一直是Tab
    const { routeName } = navigation.state.routes[navigation.state.index];
    const title = routeName;
    return {
        title
    }
}

export default createAppContainer(AppNavigator)

// 总结：1.navigator嵌套的时候，看最外层的是哪一个navigator，然后操作里面的子类才行
//      2.tabNavigator跟stackNavigator是分开的，tab控制bottomTab(本例中)，stack控制header等
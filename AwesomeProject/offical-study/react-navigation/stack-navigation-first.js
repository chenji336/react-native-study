// In App.js in a new project
import React from "react";
import { View, Text, Button, StatusBar, Image } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('../../res/bulb.jpg')}
                style={{ width: 30, height: 30 }}
            />
        );
    }
}

class HomeScreen extends React.Component {

    componentDidMount() {
        // 下一个页面goBack回来时候不会触发（所以可知该页面一直存在，没有被销毁过）
        console.log('HomeScreen-componentDidMount');
    }

    componentWillUnmount() {
        // 进入到下一个页面的时候不会触发
        console.log('HomeScreen-componentWillUnmount');
    }

    // 可以覆盖defatulNavigationOptions
    static navigationOptions = ({ navigation }) => ({
        // title: 'Home',
        headerTitle: <LogoTitle />,
        headerStyle: {
            backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: (
            <Button
                title='info'
                onPress={() => alert('This is a button!')}
                color='#fff'
            />
        ),
        headerLeft: (
            <Button
                title='modal'
                onPress={() => navigation.navigate('MyModal')}
            />
        )
    })

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                {/* android下面StatusBar一直是黑色，可以通过backgroundColor修改（只对android有作用)
                    ios默认是黑色字体，通过barStyle修改
                */}
                <StatusBar
                    backgroundColor='red'
                    barStyle={'light-content'}
                // hidden={true}
                ></StatusBar>
                <Text>Home Screen</Text>
                <Button
                    title='Go to Details'
                    onPress={() =>
                        this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'anything you want here'
                        })
                    }
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }


    componentDidMount() {
        console.log('DetailsScreen-componentDidMount');
        this.props.navigation.setParams({
            increaseCount: this._increaseCount
        })
    }

    componentWillUnmount() {
        // goBack的时候会触发
        console.log('DetailsScreen-componentWillUnmount');
    }

    // 想要获取参数必须使用函数方式
    static navigationOptions = ({ navigation, screenProps, navigationOptions }) => {
        // console.log('screenProps:', screenProps)
        // console.log('navigationOptions:', navigationOptions)
        // 互换背景和色彩
        return {
            title: navigation.getParam('otherParam', 'A Nested Details Screen'),
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
            headerRight: (
                <Button
                    title='+1'
                    onPress={navigation.getParam('increaseCount', () => { })}
                    color='black'
                />
            )
        }
    }

    // 注意使用箭头符号，否则对象绑定_increaseCount下的this不是指向DetailsScreen实例
    _increaseCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID'); // 后面是默认值
        const otherParam = navigation.getParam('otherParam', 'some default value');
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <Text>Details Screen</Text>
                <Text>itemId: {itemId}</Text>
                <Text>otherParam: {otherParam}</Text>
                <Text>count: {this.state.count}</Text>
                {/* 如果这个时候同一个页面不同参数的跳转,使用push*/}
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title='Update the title'
                    onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
                />
            </View>
        );
    }
}

class ModalScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>This is a modal!</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Dismiss"
                />
            </View>
        );
    }
}

const MainStack = createStackNavigator(
    {
        // Home: HomeScreen // 只有一个screen配置项的时候可以简写
        Home: {
            screen: HomeScreen,
            // navigationOptions: {
            //     header: null
            // }
        },
        Details: {
            screen: DetailsScreen
        },
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: { // 共享navigationOptions配置（v2以及一下版本使用navigationOptions）
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
        // navigationOptions: { // 没太理解这段作用
        //     tabBarLabel: 'Home!',
        // },
    }
);
const rootStack = createStackNavigator(
    {
        Main: {
            screen: MainStack
        },
        MyModal: {
            screen: ModalScreen
        }
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
)
export default createAppContainer(rootStack);
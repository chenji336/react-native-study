import React from "react";
import PropTypes from "prop-types";
import { Button, NavigatorIOS, Text, View, ScrollView } from "react-native";

export default class NavigatorIOSApp extends React.Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: MyScene,
                    title: "My Initial Scene",
                    passProps: { index: 1 }
                }}
                style={{ flex: 1 }}
            />
        );
    }
}

class MyScene extends React.Component {
    static propTypes = {
        route: PropTypes.shape({
            title: PropTypes.string.isRequired
        }),
        navigator: PropTypes.object.isRequired
    };

    constructor(props, context) {
        super(props, context);
        this._onForward = this._onForward.bind(this);
    }

    _onForward() {
        let nextIndex = ++this.props.index;
        this.props.navigator.push({
            component: MyScene,
            title: "Scene " + nextIndex,
            passProps: { index: nextIndex }
        });
    }

    render() {
        return (
            // 添加ScrollView解决（Unsupported top level event type “topScroll” dispatched） https://stackoverflow.com/questions/47118487/unsupported-top-level-event-type-topscroll-dispatched
            <ScrollView>
                {/* 需要设置marginTop=50，否则会被遮挡住(设置ScrollView之后可以不用)) */}
                <View>
                    <Text>Current Scene: {this.props.title}</Text>
                    <Button
                        onPress={this._onForward}
                        title="Tap me to load the next scene"
                    />
                </View>
            </ScrollView>
        );
    }
}
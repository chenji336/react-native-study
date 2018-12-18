import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, SectionList } from 'react-native';

// 出现的部分才渲染
class FlatListBasics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        { key: 'Devin' },
                        { key: 'Jackson' },
                        { key: 'James' },
                        { key: 'Joel' },
                        { key: 'John' },
                        { key: 'Jillian' },
                        { key: 'Jimmy' },
                        { key: 'Julie' },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                ></FlatList>
            </View>
        );
    }
}

class SectionListBasics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        { title: 'D', data: ['Devin'] },
                        { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index} // keyExtractor类似trackBy
                ></SectionList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        height: 44,
        padding: 10,
        fontSize: 18
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
});


export default class FlatListStudy extends Component {
    render() {
        return (
            // <FlatListBasics></FlatListBasics>
            <SectionListBasics></SectionListBasics>   
        );
    }
}
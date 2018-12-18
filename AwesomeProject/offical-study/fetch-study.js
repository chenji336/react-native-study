import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';

export default class FetchStudy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            movies: []
        }
    }

    componentDidMount() {
        // this.getMoviesFromApiAsync();
        this.getMoviesFromApi();
    }

    // getMoviesFromApiAsync = () => {
    //     return fetch('https://facebook.github.io/react-native/movies.json')
    //         .then(response => response.json())
    //         .then(responseJson => {
    //             console.log('movies:', responseJson.movies);
    //             this.setState({
    //                 movies: responseJson.movies
    //             });
    //             return responseJson.movies;
    //         })
    //         .catch(error => console.error(error))
    // }



    // 注意这个方法前面有async关键字(不要加function关键字，这个是在class里面)
    async getMoviesFromApi() {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let response = await fetch(
                "https://facebook.github.io/react-native/movies.json"
            );
            let responseJson = await response.json(); // response.json（）也是异步
            console.log(responseJson.movies);
            this.setState({
                isLoading: false,
                movies: responseJson.movies
            });
            return responseJson.movies;
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                // loading条,放到ActivityIndicator右侧既然会错误（{/*ActivityIndicator*/}
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <FlatList
                    data={this.state.movies}
                    renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        );
    }
}
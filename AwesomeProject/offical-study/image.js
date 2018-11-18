import React, { Component } from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'

/* 1.引入静态图片
      可以不设置 height width 其他资源需要
      后缀选择： .ios .android @2x @3x rn自动选择
      require后面跟着是字符串不能是变量，因为rn是编译时执行而非运行时执行
*/
/* 2.引入网络资源图片 {{uri: xxxxx}} 
        一定要有高宽
*/
/* 3.引入本地资源（混合开发中ios或则android引用的图片 
        android: src/res/drwable-xxhdpi（没有则自己创建
        ios: 项目目录/Images.xcassets 需要使用xcode打开,然后引入
*/
/* 4.背景图 View包含的Image使用了绝对定位而已 */

// 小技巧： rn 会自动识别不同分辨率的图片，格式是@nx.png
export default class ImageVariously extends Component {
  render() {
    return (
      <View>
        <Text> 静态图片 </Text>
        <Image 
            style={{width:100, height: 100}} 
            source={require('../res/bulb.jpg')}
            resizeMode='contain'
        >
        </Image>
        <Image 
            style={{height: 100, width: 100}}
            source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
            }}
        ></Image>
        <Image
            style={{height: 100, width: 100}}
            source={{uri: 'quote_fallback'}}
        ></Image>

         <ImageBackground 
            style={{width:100, height: 100}} 
            source={require('../res/bulb.jpg')}
        >
            <Text>chenji</Text>
        </ImageBackground>
      </View>
    )
  }
}

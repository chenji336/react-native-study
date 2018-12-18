[TOC]
#react-native的学习

##目录介绍
###初始化react-native项目
+ AwesomeProject是最新版本
+ MyApp是--version 4.43（不需要额外下载.rncache软件的版本）

##技术文档
[react-native-cn](https://reactnative.cn/docs/tutorial.html)

##一些常见问题
###安卓配置
1. 找不到安卓sdk
    >添加local.properties,并且配置sdk.dir = /Users/liulei/Library/Android/sdk

##入门基础
###初始化项目
+ react-native init 大小写（不能带有-，可以是_)
+ react-navite run-ios(android)
###调试
+ 打开http://localhost:8081/debugger-ui/
+ 打开控制台-》debug javascript remotely
+ 安装react-devtools，全局安装需要先安装electron（调用chromium),局部安装不需要（设置一下package.json就好)

## react-navigation
[official](https://reactnavigation.org/docs/zh-Hans/custom-navigators.html)
下载必须的： 
+ react-navigation 
+ gesture 
+ react-native link(相关原生的依赖) -android没有修改java，现在没啥问题，以后有在按照文档进行修改看看

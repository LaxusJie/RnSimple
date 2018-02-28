import React from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native';

import styles from './style'
export default {
    render(){
        return (
          <ScrollView style={styles.container}>
              <View style={styles.personalMessage}>
                  <View style={styles.message}>
                      <Image style={styles.pic} source={require('../images/green.png')}></Image>
                      <View>
                          <Text style={styles.name}>张无忌</Text>
                          <Text style={styles.name}>顾问ID : 12566332</Text>
                      </View>
                  </View>
                  <View>
                      <View style={styles.data}>
                          <Text style={styles.btn}>我的资料</Text>
                      </View>
                      <View style={[styles.data,styles.identity]}>
                          <Text style={[styles.btn,styles.active]}>身份切换</Text>
                      </View>
                  </View>
              </View>
              <View style={styles.list}>
                  <View style={styles.item}>
                      <Text style={styles.title}>蓝豆账户</Text>
                      <Image style={styles.go} source={require('./image/go.png')}></Image>
                  </View>
                  <View style={styles.item}>
                      <Text style={styles.title}>服务订单</Text>
                      <Image style={styles.go} source={require('./image/go.png')}></Image>
                  </View>
                  <View style={styles.item}>
                      <Text style={styles.title}>付费示范消息</Text>
                      <Image style={styles.go} source={require('./image/go.png')}></Image>
                  </View>
                  <View style={styles.item}>
                      <Text style={styles.title}>我的农场</Text>
                      <Image style={styles.go} source={require('./image/go.png')}></Image>
                  </View>
                  <View style={[styles.item,styles.noBorder]}>
                      <Text style={styles.title}>我的问答</Text>
                      <Image style={styles.go} source={require('./image/go.png')}></Image>
                  </View>
              </View>
              <View style={[styles.list,styles.distance]}>
                  <View style={styles.item}>
                      <Text style={styles.title}>邀请好友</Text>
                      <Image style={styles.go} source={require('./image/go.png')}></Image>
                  </View>
                  <View style={styles.item}>
                      <Text style={styles.title}>蓝农客服</Text>
                      <Image style={styles.go} source={require('./image/go.png')}></Image>
                  </View>
                  <View style={[styles.item,styles.noBorder]}>
                      <Text style={styles.title}>设置</Text>
                      <Image style={styles.go} source={require('./image/go.png')}></Image>
                  </View>
              </View>
          </ScrollView>
        )
    }
}
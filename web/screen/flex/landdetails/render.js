import React from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';

import styles from './style'
export default {
    render(){
        return (
          <View style={styles.container}>
              <View style={styles.land}>
                  <View style={styles.crops}>
                      <Image style={styles.pic} source={require("../images/green.png")}/>
                      <Text style={styles.type}>草莓</Text>
                  </View>
                  <View style={styles.info}>
                      <Text style={[styles.message,styles.name]}>草莓地块名称</Text>
                      <Text style={styles.message}>地块ID : 8691768899</Text>
                      <Text style={styles.message}>种植面积 : 20亩</Text>
                      <Text style={styles.message}>品种名称: 瑞蓝</Text>
                      <Text style={styles.message}>生长阶段 : 定植期</Text>
                      <Text style={styles.message}>树龄 : 3年</Text>
                      <Text style={styles.message}>签约日期 : 2017-10-12</Text>
                      <Text style={[styles.message,styles.day]}>剩余天数 : 23天</Text>
                  </View>
                  <Text style={styles.address}>北京市 海淀区</Text>
              </View>
              <View style={styles.master}>
                  <View>
                      <Image style={styles.masterPic} source={require("../images/green.png")}/>
                      <View style={styles.masterInfo}>
                          <Text style={[styles.masterMessage,styles.masterName]}>地块负责人</Text>
                          <Text style={[styles.masterMessage]}>张三丰</Text>
                          <View style={styles.consult}>
                              <Text style={[styles.masterMessage,styles.consultword]}>咨询</Text>
                          </View>
                      </View>
                  </View>
                  <View>
                      <Image style={styles.masterPic} source={require("../images/green.png")}/>
                      <View style={styles.masterInfo}>
                          <Text style={[styles.masterMessage,styles.masterName]}>农场主</Text>
                          <Text style={[styles.masterMessage]}>张三丰</Text>
                          <View style={styles.consult}>
                              <Text style={[styles.masterMessage,styles.consultword]}>咨询</Text>
                          </View>
                      </View>
                  </View>
              </View>
          </View>
        )
    }
}
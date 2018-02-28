import React from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
} from 'react-native';

import styles from './style'
export default {
    render(){
        let display=this.state.showText ? '100蓝豆' :""
        return (
            <View>

              <View style={styles.item}>
                  <Image style={styles.pic} source={require("../../farming/item/image/green.png")}></Image>
                  <View style={styles.content}>
                      <View>
                          <Text style={styles.title}>该施肥了</Text>
                          <Text style={styles.money}>未付费</Text>
                      </View>
                      <View style={styles.prompt}>
                          <Text style={styles.time}>2016-11-22</Text>
                          <View style={styles.news}>
                              <Image style={styles.iconComment} source={require("../../../screen/flex/images/iconComent.png")} sizeModel="cover"></Image>
                              <Text style={styles.comment}>评论45次</Text>
                              <Text style={styles.blueBean}>{display}</Text>
                          </View>
                      </View>
                  </View>
              </View>
            </View>
        )
    }
}
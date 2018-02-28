import React from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
} from 'react-native';

import styles from './style'
import Item from '../../../page/sendHistory/item'
export default {
    render(){
        return (
            <View style={styles.historyPage}>
                {/*无发送历史状态时候*/}
                <View style={styles.noData}>
                    <Image style={styles.iconRemind} source={require("../images/iconRemind.png")} sizeModel="cover"></Image>
                    <Text style={styles.message}>您还没有向该地块发送农事提醒 !</Text>
                </View>
                {/*<FlatList style={styles.list}*/}
                          {/*data={[*/}
                              {/*{key:'需要施肥了'},*/}
                              {/*{key:'需要施肥了1'},*/}
                              {/*{key:'需要施肥了2'},*/}
                              {/*{key:'需要施肥了3'},*/}
                              {/*{key:'需要施肥了4'},*/}
                              {/*{key:'需要施肥了5'},*/}
                          {/*]}*/}
                          {/*renderItem={({item})=>*/}
                              {/*<View style={styles.item}>*/}
                                  {/*<Image style={styles.pic} source={require("../images/green.png")} sizeModel="cover"></Image>*/}
                                  {/*<View style={styles.content}>*/}
                                      {/*<View>*/}
                                          {/*<Text style={styles.title}>{item.key}</Text>*/}
                                          {/*<Text style={styles.money}>未付费</Text>*/}
                                      {/*</View>*/}
                                      {/*<View style={styles.prompt}>*/}
                                          {/*<Text style={styles.time}>2016-11-22</Text>*/}
                                          {/*<View style={styles.news}>*/}
                                              {/*<Image style={styles.iconComment} source={require("../images/iconComent.png")} sizeModel="cover"></Image>*/}
                                              {/*<Text style={styles.comment}>评论45次</Text>*/}
                                              {/*<Text style={styles.blueBean}>100蓝豆</Text>*/}
                                          {/*</View>*/}
                                      {/*</View>*/}
                                  {/*</View>*/}
                              {/*</View>*/}
                          {/*}*/}
                {/*/>*/}
                <View style={styles.list}>
                    {/*再包一层view是因为引用组件不支持写类名定义样式*/}
                    <View style={styles.item}>
                        <Item/>
                    </View>
                </View>
                <Image style={styles.sendPlan} source={require("../images/plan.png")} sizeModel="cover"></Image>
            </View>
        )
    }
}
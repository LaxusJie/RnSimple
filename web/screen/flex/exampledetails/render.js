import React from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
} from 'react-native';

import styles from './style'
export default {
    render(){
        return (
            <ScrollView style={styles.container}>
               <View>
                   <Image style={styles.bg} source={require("../images/exampleBg.png")} resizeModel="contain"></Image>
                   <View style={[styles.image,styles.location]}>
                       <Image style={styles.pic} source={require("../images/green.png")}></Image>
                   </View>
                   <Text style={[styles.name,styles.location]}>草莓</Text>
                   <Text style={[styles.block,styles.location]}>草莓地块名称</Text>
               </View>
                <View style={styles.content}>
                    <View>
                        <View style={styles.showMessage}>
                            <View>
                                <Text style={styles.address}>示范田ID</Text>
                                <Text style={styles.message}>12542355</Text>
                            </View>
                            <Text style={styles.line}></Text>
                            <View>
                                <Text style={styles.address}>地区</Text>
                                <Text style={styles.message}>北京市 海淀区</Text>
                            </View>
                        </View>
                        <View style={[styles.profit,styles.location]}>
                            <View style={styles.profitBox}>
                                <Text style={styles.profitName}>总收益 : 0蓝豆</Text>
                            </View>

                        </View>
                    </View>
                    <View style={styles.list}>
                        <View style={styles.item}>
                             <View style={styles.show}>
                                 <Image style={styles.iconFont} source={require("./images/iconStage.png")}></Image>
                                 <Text style={styles.stage}>生长阶段</Text>
                             </View>
                            <Text style={styles.stage}>定植日</Text>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.show}>
                                <Image style={styles.iconFont} source={require("./images/iconDay.png")}></Image>
                                <Text style={styles.stage}>生长天数</Text>
                            </View>
                            <Text style={styles.stage}>0天</Text>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.show}>
                                <Image style={styles.iconFont} source={require("./images/iconNumber.png")}></Image>
                                <Text style={styles.stage}>同步种植数量</Text>
                            </View>
                            <Text style={styles.stage}>0</Text>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.show}>
                                <Image style={styles.iconFont} source={require("./images/iconIntro.png")}></Image>
                                <Text style={styles.stage}>示范田简介</Text>
                            </View>
                        </View>
                        <View style={styles.introduction}>
                            <TextInput style={styles.inp}
                                       underlineColorAndroid="transparent"
                                       multiline={true}
                                       placeholder="请输入示范田简介"
                            ></TextInput>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
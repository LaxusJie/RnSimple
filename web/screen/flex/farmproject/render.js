import React from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';

import  FarmingItem from '../../../page/farming/item'
import styles from './style'
export default {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.searchBar}>
                    <Image source={require('../images/seach.png')} style={styles.pic}/>
                    <TextInput
                        style={styles.title}
                        placeholder="请输入关键字搜索"
                        underlineColorAndroid="transparent"
                        onChangeText={(text)=>this.setState({text})}
                    />
                </View>
                {/*<Text>已输入{this.state.text.length}个文字</Text>*/}
                <View style={styles.content}>
                    <View style={styles.operation}>
                        <Text style={styles.time}>2017-10-10</Text>
                        <View style={styles.del}>
                            <Image style={styles.delPic} source={require('../images/del.png')}>
                            </Image>
                            <Text style={styles.delText}>删除</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        {/*<Text style={styles.stage}>适用作物阶段 : 草莓-定植期</Text>*/}
                        {/*<Text style={styles.info}>标题 : 农事方案库施肥</Text>*/}
                        {/*<Text style={styles.info}>详细说明 : 农事方案库施肥农事方案库施肥农事方案库施肥农事方案库施肥农事方案库施肥肥农事方案库施肥农事方案库施肥肥农事方</Text>*/}
                        {/*<View style={styles.picture}>*/}
                            {/*<Image style={styles.image} source={require("../images/green.png")} resizeMode="cover"></Image>*/}
                            {/*<Image style={styles.image} source={require("../images/green.png")} resizeMode="cover"></Image>*/}
                            {/*<Image style={styles.image} source={require("../images/green.png")} resizeMode="cover"></Image>*/}
                            {/*<Image style={styles.image} source={require("../images/green.png")} resizeMode="cover"></Image>*/}
                        {/*</View>*/}
                        <FarmingItem />
                    </View>
                        <View style={styles.btn}>
                            {/*Button仅仅支持修改按钮背景颜色而且用button里面套用Text报错*/}
                            <View style={styles.edit}>
                                <Text style={styles.word}>编辑</Text>
                            </View>
                            <View style={[styles.edit,styles.send]}>
                                <Text style={[styles.word,styles.sendword]}>发送</Text>
                            </View>

                        </View>
                </View>
                <Text style={styles.prompt}>没有更多数据</Text>
                {/*默认无列表状态*/}
                <View style={styles.empty}>
                    <Image style={styles.logo} source={require("../images/logo.png")}></Image>
                    <Text style={styles.description}>亲爱的用户,您还没有添加自己的农事方案,</Text>
                    <Text style={styles.description}>为了更好的方便的服务顾客,点击下方按钮添加方案</Text>
                    <Text style={styles.description}>打造属于自己的农事方案库吧!</Text>
                </View>
                <Image style={styles.touch} source={require("../images/touch.png")}></Image>
            </View>
        )
    }
}
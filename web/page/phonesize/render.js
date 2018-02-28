import React from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';

import styles from './style'

export default {
    render() {
        let state = this.state;
        const  list = [{},{},{}];
        return (
            // 模拟器
                <View style={styles.massif}>
                        <View style={styles.info}>
                            <View style={styles.cropMessage}>
                                <View style={styles.crop}>
                                    <Image
                                        style={styles.cropImage}
                                        source = {require('./image/cropImage.png')}
                                    />
                                    <Text style={[styles.highColor,styles.cropTitle]}>草莓</Text>
                                </View>
                                <View style={styles.message}>
                                    <Text style={[styles.highColor,styles.wordSize]}>张三 草莓地块儿1</Text>
                                    <Text style={[styles.normalColor,styles.wordSize]}>地址ID : 12545698745</Text>
                                    <Text style={[styles.normalColor,styles.wordSize]}>签约日期 : 2017-10-10</Text>
                                    {/*种植示范特有*/}
                                    <Text style={[styles.normalColor,styles.wordSize]}>同步种植数量 : 122</Text>
                                    {/*签约地块特有*/}
                                    <Text style={[styles.warnColor,styles.wordSize]}>剩余天数 : 23天</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.area}>
                                    <Text>北京市 海淀区</Text>
                                </Text>
                                {/*签约地块特有*/}
                                <View style={styles.weatherInfo}>
                                    <Image
                                        style={styles.weather}
                                        source={require('./image/weather.png')}
                                        resizeMode="contain"
                                    />
                                    <Text style={styles.temperature}>20°C</Text>
                                </View>
                                {/*种植示范特有*/}
                                <Text style={styles.unOpen}>地块未开启</Text>
                            </View>
                        </View>
                        {/*签约地块所有*/}
                    <View style={styles.operateList}>
                        <View style={[styles.operate,styles.operateBorder]}>
                            <Image
                                style={styles.icon}
                                source={require('./image/iconGrow.png')}
                            />
                            <Image
                                style={[styles.icon,{display:'none'}]}
                                source={require('./image/grayGrow.png')}
                            />
                            <Text style={styles.title}>生长记录</Text>
                        </View>
                        <View style={[styles.operate,styles.operateBorder]}>
                            <Image
                                style={styles.icon}
                                source={require('./image/iconFarming.png')}
                            />
                            <Image
                                style={[styles.icon,{display:'none'}]}
                                source={require('./image/grayFarming.png')}
                            />
                            <Text style={styles.title}>农事记录</Text>
                        </View>
                        <View style={styles.operate}>
                            <Image
                                style={styles.icon}
                                source={require('./image/iconNotice.png')}
                            />
                            <Image
                                style={[styles.icon,{display:'none'}]}
                                source={require('./image/grayNotice.png')}
                            />
                            <Text style={[styles.title,styles.active]}>农事提醒</Text>
                        </View>
                        <View style={styles.operate}>
                            <Image
                                style={styles.icon}
                                source={require('./image/iconSend.png')}
                            />
                            <Image
                                style={[styles.icon,{display:'none'}]}
                                source={require('./image/graySend.png')}
                            />
                            <Text style={styles.title}>发送农事</Text>
                        </View>
                    </View>
                    {/*种植示范所有*/}
                    <View style={styles.operateList}>
                        <View style={styles.operate}>
                            <Image
                                style={styles.icon}
                                source={require('./image/iconGrow.png')}
                            />
                            <Image
                                style={[styles.icon,{display:'none'}]}
                                source={require('./image/grayGrow.png')}
                            />
                            <Text style={styles.title}>生长记录</Text>
                        </View>
                        <View style={[styles.operate,styles.operateBorder]}>
                            <Image
                                style={styles.icon}
                                source={require('./image/iconAdd.png')}
                            />
                            <Image
                                style={[styles.icon,{display:'none'}]}
                                source={require('./image/grayAdd.png')}
                            />
                            <Text style={styles.title}>添加记录</Text>
                        </View>
                        <View style={styles.operate}>
                            <Image
                                style={styles.icon}
                                source={require('./image/iconNotice.png')}
                            />
                            <Image
                                style={[styles.icon,{display:'none'}]}
                                source={require('./image/grayNotice.png')}
                            />
                            <Text style={[styles.title,styles.active]}>农事示范</Text>
                        </View>
                        <View style={styles.operate}>
                            <Image
                                style={styles.icon}
                                source={require('./image/iconAdd.png')}
                            />
                            <Image
                                style={[styles.icon,{display:'none'}]}
                                source={require('./image/grayAdd.png')}
                            />
                            <Text style={styles.title}>添加示范</Text>
                        </View>
                    </View>
                </View>
        )
    }
}

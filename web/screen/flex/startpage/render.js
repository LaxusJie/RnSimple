import React from 'react';
import {
    Text,
    View,
    Button,
    Dimensions,
    Image,
} from 'react-native';

import styles from './style'

export default {
    render(){
        let state = this.state;
        const { navigate } = this.props.navigation;
        //TODO 可以拷贝属性赋值
        return (
            <View style={styles.container}>
                <Image source={require('../images/default-logo.png')} style={styles.logo}/>
                <Text style={styles.start}>
                    开启懒农生活
                </Text>
            </View>
        )
    }
}

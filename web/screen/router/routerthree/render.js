import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {topActivity} from '../../../navigation/router/index';
import styles from './style'
export default {
    render() {
        const { goBack } = this.props.navigation;
        return (
            <View style = {styles.viewStyle}>
                <Text style ={styles.itemViewStyle} onPress={()=>{goBack()}}>关闭当前页面</Text>
                <Text style ={styles.itemViewStyle} onPress={()=>{topActivity(this.props.navigation,'RouterOne')}}>重置页面</Text>
            </View>
        );
    }
}
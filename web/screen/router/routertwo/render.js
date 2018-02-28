import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import styles from './style'
export default {
    render() {
        const { navigate,goBack,state } = this.props.navigation;
        return (
            <View style = {styles.viewStyle}>
                <Text style ={styles.itemViewStyle} onPress={()=>{navigate('RouterThree')}}>正常跳转</Text>
                <Text style ={styles.itemViewStyle} onPress={()=>{
                    goBack(null);
                    navigate('RouterThree')}}>跳转页面并且关闭自己</Text>

                <Text style ={styles.itemViewStyle} onPress={()=>{goBack(state.params.keyName)}}>跳转到指定页面并且关闭上面的文件</Text>
            </View>

        );
    }
}
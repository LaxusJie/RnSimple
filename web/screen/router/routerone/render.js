import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import styles from './style'
export default {
    render() {
        const { navigate,state,goBack } = this.props.navigation;
        return (
            <View style = {styles.viewStyle}>
                <Text style ={styles.itemViewStyle} onPress={()=>{navigate('RouterTwo')}}>正常跳转页面</Text>
                <Text style ={styles.itemViewStyle} onPress={()=>{navigate('RouterTwo',{good:"你真棒，router2",keyName:state.key})}}>正常跳转页面，并且传递值</Text>
                <Text style ={styles.itemViewStyle} onPress={()=>{
                    goBack();
                    navigate('RouterTwo')}}>关闭页面</Text>
            </View>
        );
    }
}
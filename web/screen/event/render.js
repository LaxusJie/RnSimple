import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './style'
export default {
    render(){
        return (
            <View style = {styles.container}>
                <Text>我是RN界面</Text>
                <TouchableOpacity style={styles.welcome} onPress={this.gotoNativeMessageOne.bind(this, "com.rnsimple.NativeActivity")}>
                    <Text>跳转到原生界面</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.welcome} onPress={()=>{
                    this.gotoNativeMessageOne("com.rnsimple.NativeActivity")
                }}>
                    <Text>跳转到原生界面</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.welcome} onPress={this.gotoNativeMessageTwo.bind(this, "com.rnsimple.NativeActivity", '我很帅，第二个')}>
                    <Text>跳转到原生界面并传递一个信息</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.welcome} onPress={this.gotoNativeMessageCallBack.bind(this, "我是第一个callback", () => {
                    alert("第一个")
                })}>
                    <Text>使用callback</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.welcome}
                                  onPress={this.CallAndroid_promise}>
                    <Text>Promise</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
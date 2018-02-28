import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Button
} from 'react-native';
import styles from './style'
export default {
    render(){
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.name}>
                    <Button title="we求无" onPress={() => navigate('Ui')}/>
                </View>
                <View style={styles.name}>
                    <Button title="页面练习" onPress={() => navigate('Flex')}/>
                </View>
                <View style={styles.name}>
                    <Button title="布局" onPress={() => navigate('Layout')}/>
                </View>
                <View style={styles.name}>
                    <Button title="事件交互" onPress={() => navigate('Event')}/>
                </View>
                <View style={styles.name}>
                    <Button title="多态使用" onPress={() => navigate('Polymorphic')}/>
                </View>
                <View style={styles.name}>
                    <Button title="弹层使用" onPress={() => navigate('Dialog')}/>
                </View>
                <View style={styles.name}>
                    <Button title="网络请求" onPress={() => navigate('Network')}/>
                </View>
                <View style={styles.name}>
                    <Button title="状态管理" onPress={() => navigate('Status')}/>
                </View>
                <View style={styles.name}>
                    <Button title="路由" onPress={() => navigate('Navigation',{title:'rn is cool'})}/>
                </View>
                <View style={styles.name}>
                    <Button title="传参" onPress={() => navigate('Data')}/>
                </View>
                <View style={styles.name}>
                    <Button title="经典场景一" onPress={() => navigate('RouterOne')}/>
                </View>
            </ScrollView>
        );
    }
}
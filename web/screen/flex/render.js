import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import styles from './style'
export default {
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Button
                    title="启动页面"
                    onPress={() => navigate('StartPage')}
                />
                <Button
                    style={styles.page}
                    title="签约地块"
                    onPress={() => navigate('Phonesize')}
                />
                <Button
                    style={styles.page}
                    title="农事方案库"
                    onPress={()=>navigate('Farmproject')}
                />
                <Button
                    style={styles.page}
                    title="地块详情"
                    onPress={()=>navigate('Landdetails')}
                />
                <Button
                    style={styles.page}
                    title="发送历史"
                    onPress={()=>navigate('Sendhistory')}
                />
                <Button
                    style={styles.page}
                    title="农事方案详情"
                    onPress={()=>navigate('Farmingdetails')}
                />
                <Button
                    style={styles.page}
                    title="农事示范"
                    onPress={()=>navigate('Farmingexample')}
                />
                <Button
                    style={styles.page}
                    title="农事提醒详情"
                    onPress={()=>navigate('Farmingnoticedetails')}
                />
                <Button
                    style={styles.page}
                    title="示范田简介"
                    onPress={()=>navigate('Farmingintro')}
                />
                <Button
                    style={styles.page}
                    title="示范田详情"
                    onPress={()=>navigate('Exampledetails')}
                />
                <Button
                    style={styles.page}
                    title="种植示范"
                    onPress={()=>navigate('Plantexample')}
                />
                <Button
                    style={styles.page}
                    title="个人中心"
                    onPress={()=>navigate('Personalcenter')}
                />
                <Button
                    style={styles.page}
                    title="设置"
                    onPress={()=>navigate('Setup')}
                />
                <Button
                    style={styles.page}
                    title="咨询服务"
                    onPress={()=>navigate('Consultservice')}
                />
            </View>
        )
    }
}
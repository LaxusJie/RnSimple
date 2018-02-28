import React from 'react';
import {
    View,
    Button,
} from 'react-native';

import  Style from './style.js'

export default {
    render(){
        let state = this.state;
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View style={Style.name}>
                    <Button title="Redux" onPress={() => navigate('Timeline')}/>
                </View>
                <View style={Style.name}>
                    <Button title="本地存储(Storage)" onPress={() => navigate('Storage')}/>
                </View>
                <View style={Style.name}>
                    <Button title="本地数据库(Datebase)" onPress={() => navigate('Timeline')}/>
                </View>
                <View style={Style.name}>
                    <Button title="原生传参(Native)" onPress={() => navigate('Timeline')}/>
                </View>
                <View style={Style.name}>
                    <Button
                        title="路由(Navigation)"
                        onPress={() => navigate('DataNavigation',{
                            id:1,
                            name:'阿毛',
                        })}
                    />
                </View>
                <View style={Style.name}>
                    <Button title="组件传参(Props&&State)" onPress={() => navigate('DataProps')}/>
                </View>
            </View>
        )
    }
}
import React from 'react';
import {
    Text,
    FlatList,
    View,
    Button,
} from 'react-native';

import {
    WeList,
} from 'we-rn-ui'
import Style from './style.js'
import Sso from '../../../api/sso'

export default {
    render() {
        let state = this.state;
        const {navigate} = this.props.navigation;
        //TODO 庄君祥： 可以拷贝属性赋值
        return (
            <WeList
                //TODO 庄君祥：自己扩展的属性
                api = {Sso.login}
                params={{
                    loginName:'18501081381',
                    password:'000000',
                }}
                //空数据处理
                ListEmptyComponent={() =>
                    <View>
                        <Text>没有加载到数据</Text>
                    </View>
                }

                //头尾和页面处理
                ListHeaderComponent={() =>
                    <View>
                        <Text>我是头部</Text>
                    </View>
                }

                renderItem={({item}) =>
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.status}</Text>
                        <Text>{item.time}</Text>
                    </View>
                }
                //分隔线，一般用于
                ItemSeparatorComponent={() =>
                    <Text>我是分隔线</Text>
                }
                ListFooterComponent={() =>
                    <View>
                        <Text>我是尾部</Text>
                    </View>
                }
            />
        )
    }
}
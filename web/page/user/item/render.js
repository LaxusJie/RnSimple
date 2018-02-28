import React from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';

import  Style from './style.js'

export default {
    render(){
        let state = this.state;
        let props = this.props;
        return (
            <View>
                <View>
                    <Text>父组件传参</Text>
                    <Text>{props.name}</Text>
                    <Text>{props.age}</Text>
                </View>
                <View>
                    <Text>组件内传参</Text>
                    <Text>{state.name}</Text>
                    <Button
                       onPress={()=>this.changeNameWithOld()}
                       title="在原价上修改"
                    />
                    <Button
                       onPress={()=>this.changeName("Test")}
                       title="修改为指定的值"
                    />
                    <Button
                       onPress={()=>this.loadName()}
                       title="异步修改值"
                    />
                </View>
            </View>
        )
    }
}
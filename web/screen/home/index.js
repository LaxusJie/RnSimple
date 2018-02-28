import React from 'react';
import Render from './render.js'
import {
    DeviceEventEmitter,
} from 'react-native';
export default class Home extends React.Component {
    componentWillMount(){
        this.listener = DeviceEventEmitter.addListener('nativeCallRn', this.isEmitter.bind(this));  //对应了原生端的名字
    }
    componentWillUnmount() {
        this.listener && this.listener.remove();  //记得remove哦
        this.listener = null;
    }
    isEmitter(data) {
        this.props.navigation.navigate(data)
    }
    static navigationOptions = {
        title: '大大大前端',
    };
    render() {
        return Render.render.call(this);
    }
}
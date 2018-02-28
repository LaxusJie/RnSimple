import React from 'react';
import Render from './render.js'
import {startActivityByClassname,
    startActivity,
    rnCallNativeFromCallback} from '../../navigation/router/event'
import {
    NativeModules
} from 'react-native';
export default class Event extends React.Component {
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title: '与原生事件交互',
    };

    render() {
        return Render.render.call(this);
    }
    /**
     * 跳转到原生并传递一个信息
     */
    gotoNativeMessageOne(message) {
        startActivityByClassname(message);
    }

    /**
     * 跳转到原生并传递俩个信息
     */
    gotoNativeMessageTwo(message, param) {
        startActivity(message, param);
    }

    /**
     * 使用callback
     */
    gotoNativeMessageCallBack(message, callback) {
        rnCallNativeFromCallback(message, callback)
    }

    /**
     * 使用promise
     * @param isture
     * @param promise
     */
    CallAndroid_promise = () => {
        NativeModules.MutualInformationModeule.rnCallNativeFromPromise('rn调用原生模块的方法-成功啦').then(
            (msg) => {
                console.log('promise成功：'+msg);
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }
}
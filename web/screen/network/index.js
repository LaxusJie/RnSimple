import React from 'react';

import Render from './render.js'
import Sso from '../../api/sso'
import {ToastAndroid} from 'react-native'
export default class NetWork extends React.Component {
    constructor(props){
        super(props);
        this.state={
            num:'18501081381',
            pwd:'000000'
        }
    }
    render() {
        return Render.render.call(this);
    }

    /**
     * 登录接口
     * @returns {Promise.<void>}
     */
    getLogin() {
        let param = {
            loginName: this.state.num,
            password: this.state.pwd,
        }
        Sso.login(param).then(data => {
            console.log(data);
            ToastAndroid.show(data.token, ToastAndroid.SHORT);
        });
    }
}
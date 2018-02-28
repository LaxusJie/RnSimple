import React from 'react';
import Render from './render'
export default class Index extends React.Component {
    static navigationOptions = {
        title: 'router2',
    };
    componentDidMount() {
        //state.key 获取到的key实际上面是上一个页面的key。。。尴尬啊
        if (this.props.navigation.state && this.props.navigation.state.params){
            alert(this.props.navigation.state.params.keyName)
        }
    }
    render() {
        return Render.render.call(this);
    }

}
import React from 'react';

import Render from './render.js'

export default class UserItem extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:'我是组件里的变量',
            // 把传参的直接拷贝过来，会复制state上面的数据
            ...props,
        }
    }
    changeNameWithOld(){
        this.setState((prevState, props) => {
            return {
                name:`${prevState.name}点击`,
            };
        });
    }
    changeName(name){
        this.setState({
            name:name,
        });
    }

    async loadName(){
        let user ={
            name:'异步加载过来的',
        }
        this.setState(user);
    }
    render() {
        return Render.render.call(this);
    }
}
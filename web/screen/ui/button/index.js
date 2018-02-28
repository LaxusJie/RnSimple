import React from 'react';

import Render from './render.js'

export default class UiButton extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }
        this.goto = this.goto.bind(this);
    }
    alert(){
        alert("这个按钮可以操作");
    }
    render() {
        return Render.render.call(this);
    }
    goto() {
        showToast('哈哈哈',3000,-300);
    }
}
import React from 'react';

import Render from './render.js'
import WeComponent from "../../../components/WeComponent";

export default class UiText extends WeComponent {
    constructor(props){
        super(props);
        this.state={
            numberOfLines:4,
            content:'我是文本',
        }
    }
    render() {
        return Render.render.call(this);
    }
}
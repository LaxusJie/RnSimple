import React from 'react';
import Render from './render.js'

export default class Ui extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text:'默认文本'
        };
    }
    render() {
        return Render.render.call(this);
    }
}
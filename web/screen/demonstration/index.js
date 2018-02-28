import React from 'react';

import Render from './render.js'

export default class Demonstration extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:'多态demo',
        }
    }
    render() {
        return Render.render.call(this);
    }
}
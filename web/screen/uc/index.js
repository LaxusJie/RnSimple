import React from 'react';

import Render from './render.js'

export default class Uc extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:'用户中心',
        }
    }
    render() {
        return Render.render.call(this);
    }
}
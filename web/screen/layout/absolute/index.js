import React from 'react';

import Render from './render.js'

export default class LayoutAbsolute extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
        return Render.render.call(this);
    }
}
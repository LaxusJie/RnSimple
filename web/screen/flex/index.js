import React from 'react';
import Render from './render.js'

export default class Flex extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return Render.render.call(this);
    }
}
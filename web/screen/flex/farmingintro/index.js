import React,{Component} from 'react';

import Render from './render.js'
export default class Farmingintro extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
        return Render.render.call(this);
    }
}
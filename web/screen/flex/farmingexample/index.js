import React,{Component} from 'react';

import Render from './render.js'
export default class Farmingexample extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
        return Render.render.call(this);
    }
}
import React,{Component} from 'react';

import Render from './render.js'
import WeComponent from "../../../components/WeComponent"
export default class Farmproject extends Component {
    constructor(props){
        super(props);
        this.state={
            text:''
        }
    }
    render() {
        return Render.render.call(this);
    }
}
import React from 'react';
import {
   Text
} from 'react-native'
import Render from './render.js'

export default class Sendhistory extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showText:false,
        }
    }
    render() {
        return Render.render.call(this);
    }
}
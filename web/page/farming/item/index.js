import React from 'react';

import Render from './render.js'
import WeComponent from "../../../components/WeComponent"

export default class FarmingItem extends WeComponent {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
        return Render.render.call(this);
    }
}
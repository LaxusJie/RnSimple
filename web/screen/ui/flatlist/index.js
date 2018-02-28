import React from 'react';

import Render from './render.js'
import WeComponent from "../../../components/WeComponent";

export default class UiFlatList extends WeComponent {
    constructor(props){
        super(props);
    }
    render() {
        return Render.render.call(this);
    }
}
import React from 'react';

import Render from './render.js'

export default class DataNavigation extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id:2,
            ...this.props.navigation.state.params,
        }
    }
    render() {
        return Render.render.call(this);
    }
}
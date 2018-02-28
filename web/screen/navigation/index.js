import React from 'react';

import Render from './render.js'

export default class Navigation extends React.Component {
    constructor(props){
        super(props);
    }
    static navigationOptions = ({ navigation }) => ({
        title: ` ${navigation.state.params.title}`,
    });
    render() {
        return Render.render.call(this);
    }
}
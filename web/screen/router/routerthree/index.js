import React from 'react';
import Render from './render'
export default class Index extends React.Component {
    static navigationOptions = {
        title: 'router3',
    };

    render() {
        return Render.render.call(this);
    }

}
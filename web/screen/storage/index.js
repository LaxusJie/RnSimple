import React from 'react';

import Render from './render.js'
export default class Storage extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    componentWillMount() {
        let key = 'loginState';
        let data = {
            from: 'some other site',
            userid: 'some userid',
            token: 'some token'
        };
        saveStorage(key, data);
    }

    render() {
        return Render.render.call(this);
    }

    getStroage() {
        loadStorage('loginState').then((data) => {
            console.log(data);
            alert(data.from)
        })

    }
}
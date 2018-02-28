import React from 'react';

import Util from './Util'

export default class WeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.logNavigation(props);
    }

    logNavigation(props) {
        if (Util.isEmpty(props.navigation)) {
            return;
        }
        console.log(`
            routerName:${props.navigation.state.routeName},
        `);
    }
}
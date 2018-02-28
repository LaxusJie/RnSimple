import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import styles from './style'

export const Header = (navigation, title, RightName) => {
    return {
        headerStyle: styles.header,
        headerTitle: title,
        headerTitleStyle: styles.title,
        headerLeft:
            <TouchableOpacity style={styles.back} onPress={() => {navigation.goBack()}} >
                <Image source={require('./images/head_back.png')}
                       style={styles.icon}/>
            </TouchableOpacity>,
        headerRight:
            <TouchableOpacity onPress={navigation.state.params ? navigation.state.params.navigatePress : null}
                              style={styles.textback}>
                <Text style={styles.text}>{RightName}</Text>
            </TouchableOpacity>,
    };
};





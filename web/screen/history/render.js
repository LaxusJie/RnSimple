import React from 'react';
import Item from '../../page/farming/item';
import {
	Text,
	View,
	Button,
} from 'react-native';

import Style from './style.js'

export default {
	render() {
		return (
			<View>
				<Item
					commentIcon={
						<Text style={Style.itemBlock}>评论45次</Text>
					}
				/>
			</View>
		)
	}
}
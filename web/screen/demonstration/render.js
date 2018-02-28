import React from 'react';
import Item from '../../page/farming/item/index';

import {
    Text,
    View,
    Button,
	Image,
} from 'react-native';

import  Style from './style.js'

export default {
    render(){
        return (
            <View>
	            <Item
		            bluebean={
	                    <Text>100蓝豆</Text>
	                }
		            
		            status={
	                    <Text>未付费</Text>
	                }
		
		            operation={
			            <View style={{
			            	flexWrap: 'wrap',
				            flexDirection: 'row',
				            justifyContent: 'flex-start',
			            }}>
				            <Text style={Style.itemBlock}>浏览152次</Text>
				            <Image source={require('./image/save.png')} style={Style.imgStyle} />
				            <Text style={Style.itemBlock}>点赞10次</Text>
			            </View>
		            }
		            
		            comment={
			            <Text style={Style.itemBlock}>评论45次</Text>
		            }
	            />
            </View>
        )
    }
}
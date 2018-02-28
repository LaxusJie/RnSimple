import React from 'react';
import {
    View,
    Image,
    Text,
    ScrollView,
    ImageBackground,
} from 'react-native';

import Style from './style.js'

export default {
    render() {
        let state = this.state;
        return (
            <ScrollView style={{margin: 10}}>
                <View>
                    <Text style={Style.h1}>图片加载方式</Text>
                    <View>
                        <Text style={Style.h2}>普通静态图片资源</Text>
                        <Text>使用场景：固定不变的图片，一般用于：logo,类型,icon等</Text>
                        <Image
                            style={Style.image}
                            source={require('./image/bg1.jpg')}
                        />
                    </View>
                    <View>
                        <Text style={Style.h2}>使用网络图片</Text>
                        <Text>使用场景：用于需要动态从服务器加载的图片，一般用于：缩略图，用户头像等</Text>
                        <Image
                            style={Style.image}
                            source={{uri: 'http://dl.bizhi.sogou.com/images/2012/01/19/174522.jpg'}}
                        />
                    </View>
                </View>
                <View>
                    <Text style={Style.h1}>图片使  用方式</Text>
                    <View>
                        <Text style={Style.h2}>背景</Text>
                        {/*TODO 庄君祥：背景的使用*/}
                        <ImageBackground
                            style={Style.image}
                            source={{uri: 'http://dl.bizhi.sogou.com/images/2012/01/19/174522.jpg'}}
                        >
                            <Text style={Style.content}>背景图片的使用方式：把子组件嵌入到ImageBackground中就可以了</Text>
                        </ImageBackground>
                    </View>
                    <View>
                        <Text style={Style.h2}>图片套图片</Text>
                        <View style={Style.news}>
                            <ImageBackground
                                style={Style.image}
                                source={require('./image/cow.jpg')}
                            >
                                <Image
                                    style={Style.icon}
                                    source={require('./image/logo.png')}
                                >
                                </Image>
                            </ImageBackground>
                        </View>
                    </View>
                    <View>
                        <Text style={Style.h2}>logo</Text>
                        <Image
                            source={require('./image/logo.png')}
                        >
                        </Image>
                    </View>
                    <View>
                        <Text style={Style.h2}>图文</Text>
                        <View style={Style.news}>
                            <Image
                                style={Style.image}
                                source={require('./image/cow.jpg')}
                            />
                            <Text>这是一头牛</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={Style.h2}>分类</Text>
                        <View style={Style.news}>
                            <Image
                                style={Style.image}
                                source={require('./image/cow.jpg')}
                            >
                            </Image>
                            <Text>这是一头牛</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={Style.h1}>图片缩放</Text>
                    <View>
                        <Text style={Style.h2}>Cover</Text>
                        <Text>在保持图片宽高比的前提下缩放图片，直到宽度和高度都大于等于容器视图的尺寸（如果容器有padding内衬的话，则相应减去）。 也就是说，图片可能部分会显示不了</Text>
                        <Image
                            style={Style.resizeImage}
                            source={require('./image/logo.png')}
                            resizeMode="cover"
                        />
                    </View>
                    <View>
                        <Text style={Style.h2}>Contain</Text>
                        <Text>在保持图片宽高比的前提下缩放图片，直到宽度和高度都小于等于容器视图的尺寸（如果容器有padding内衬的话，则相应减去）。</Text>
                        <Image
                            style={Style.resizeImage}
                            source={require('./image/logo.png')}
                            resizeMode="contain"
                        >
                        </Image>
                    </View>
                    <View>
                        <Text style={Style.h2}>Center</Text>
                        <Text>居中不拉伸</Text>
                        <Image
                            style={Style.resizeImage}
                            source={require('./image/logo.png')}
                            resizeMode="center"
                        >
                        </Image>
                    </View>
                    <View>
                        <Text style={Style.h2}>stretch</Text>
                        <Text>拉伸图片且不维持宽高比，直到宽高都刚好填满容器。这种模式显示的图片可能会畸形和失真</Text>
                        <Image
                            style={Style.resizeImage}
                            source={require('./image/logo.png')}
                            resizeMode="stretch"
                        >
                        </Image>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
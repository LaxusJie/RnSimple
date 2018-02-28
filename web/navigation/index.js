import React from 'react';
import {
    AppRegistry,
    Platform
} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator,
} from 'react-navigation';
import {Header} from './headstyle/index'
import Home from "../screen/home"
import Event from "../screen/event"
import Ui from "../screen/ui"
import Flex from "../screen/flex"
import StartPage from "../screen/flex/startpage"
import MyError from "../screen/layout/adapter"
import Phonesize from "../screen/flex/phonesize"
import Farmproject from "../screen/flex/farmproject"
import Landdetails from "../screen/flex/landdetails"
import Sendhistory from "../screen/flex/sendhistory"
import Farmingdetails from "../screen/flex/farmingdetails"
import Farmingexample from "../screen/flex/farmingexample"
import Farmingnoticedetails from "../screen/flex/farmingnoticedetails"
import Farmingintro from "../screen/flex/farmingintro"
import Exampledetails from "../screen/flex/exampledetails"
import Plantexample from "../screen/flex/plantexample"
import Setup from "../screen/flex/setup"
import Personalcenter from "../screen/flex/personalcenter"
import Consultservice from "../screen/flex/consultservice"
import Network from "../screen/network"
import Navigation from "../screen/navigation"
import Uc from '../screen/uc'
import Timeline from '../screen/timeline'
import Data from "../screen/data/index";
import RouterOne from '../screen/router/routerone/index';
import RouterTwo from '../screen/router/routertwo/index';
import RouterThree from '../screen/router/routerthree/index';
import DataProps from "../screen/data/props/index";
import DataNavigation from "../screen/data/nagivation/index";
import UiButton from "../screen/ui/button/index";
import UiText from "../screen/ui/text/index";
import UiForm from "../screen/ui/form/index";
import Storage from "../screen/storage/index";
import UiImage from "../screen/ui/image/index";
import UiScrollView from "../screen/ui/scrollview/index";
import Demonstration from '../screen/demonstration'
import Item from '../page/farming/item'
import History from '../screen/history'
import UiFlatList from "../screen/ui/flatlist/index";
import LayoutFlex from "../screen/layout/flex/index";
import Layout from "../screen/layout/index";
import LayoutAbsolute from "../screen/layout/absolute/index";
import LayoutAdapter from "../screen/layout/adapter/index";

const RnSimple = StackNavigator({
        Home: {
            screen: Home,
            navigationOptions:({navigation}) => ({
                headerTitle:navigation.props&&navigation.props.flag?'true': 'false'
            })

        },
        Data: {
            screen: Data,
            navigationOptions: ({navigation}) => ({
                headerTitle: '传参Demo',
            }),
        },
        DataProps: {
            screen: DataProps,
            navigationOptions: ({navigation}) => ({
                headerTitle: '组件传参',
            }),
        },
        DataNavigation: {
            screen: DataNavigation,
            navigationOptions: ({navigation}) => ({
                headerTitle: '导航传参',
            }),
        },
        Event: {
            screen: Event,
            path: 'app/event',
            navigationOptions: ({navigation}) => ({
                headerTitle: '事件交互',
            }),
        },
        Ui: {
            screen: Ui,
            navigationOptions: ({navigation}) => ({
                headerTitle: '常用组件',
            }),
        },
        UiButton: {
            screen: UiButton,
            navigationOptions: ({navigation}) => ({
                headerTitle: '按钮',
            }),
        },
        UiText: {
            screen: UiText,
            navigationOptions: ({navigation}) => ({
                headerTitle: '文本',
            }),
        },
        UiForm: {
            screen: UiForm,
            navigationOptions: ({navigation}) => ({
                headerTitle: '表单',
            }),
        },
        UiFlatList: {
            screen: UiFlatList,
            navigationOptions: ({navigation}) => ({
                headerTitle: 'FlatList',
            }),
        },
        Layout: {
            screen: Layout,
            navigationOptions: ({navigation}) => ({
                headerTitle: '布局',
            }),
        },
        LayoutFlex: {
            screen: LayoutFlex,
            navigationOptions: ({navigation}) => ({
                headerTitle: 'Flex布局',
            }),
        },
        LayoutAdapter: {
            screen: LayoutAdapter,
            navigationOptions: ({navigation}) => ({
                headerTitle: '适配',
            }),
        },
        LayoutAbsolute: {
            screen: LayoutAbsolute,
            navigationOptions: ({navigation}) => ({
                headerTitle: 'Box布局',
            }),
        },
        Flex: {
            screen: Flex,
            navigationOptions: ({navigation}) => ({
                headerTitle: 'Flex布局使用',
            }),
        },
        StartPage: {
            screen: StartPage,
            navigationOptions: ({navigation}) => ({
                headerTitle: '启动页',
                header:null,
            }),
        },
        Phonesize: {
            screen: Phonesize,
            navigationOptions: ({navigation}) => (Header(navigation, '签约地块'))
        },
        Farmproject: {
            screen: Farmproject,
            navigationOptions: ({navigation}) => (Header(navigation, '农事方案库', '筛选'))
        },
        Landdetails:{
          screen:Landdetails ,
            navigationOptions: ({navigation}) => (Header(navigation, '地块详情'))
        },
        Sendhistory:{
            screen:Sendhistory ,
            navigationOptions: ({navigation}) => (Header(navigation, '发送历史'))
        },
       Farmingdetails:{
            screen:Farmingdetails ,
            navigationOptions: ({navigation}) => (Header(navigation, '农事方案详情'))
        },
       Farmingexample:{
            screen:Farmingexample ,
            navigationOptions: ({navigation}) => (Header(navigation, '农事示范'))
        },
        Farmingnoticedetails:{
            screen:Farmingnoticedetails ,
            navigationOptions: ({navigation}) => (Header(navigation, '农事提醒详情'))
        },
         Farmingintro:{
        screen:Farmingintro ,
        navigationOptions: ({navigation}) => (Header(navigation, '示范田简介'))
       },
        Exampledetails:{
        screen:Exampledetails ,
            navigationOptions: ({navigation}) => (Header(navigation, '示范田详情'))
        },
        Plantexample:{
            screen: Plantexample ,
                navigationOptions: ({navigation}) => (Header(navigation, '种植示范'))
        },
        Personalcenter:{
            screen: Personalcenter ,
                navigationOptions: ({navigation}) => (Header(navigation, '个人中心'))
        },
        Setup:{
            screen: Setup ,
            navigationOptions: ({navigation}) => (Header(navigation, '设置'))
        },
        Consultservice:{
            screen: Consultservice ,
            navigationOptions: ({navigation}) => (Header(navigation, '咨询服务'))
        },
        MyError: {
            screen: MyError,
            navigationOptions: ({navigation}) => ({
                headerTitle: '错误总结',
            }),
        },
        Network: {
            screen: Network,
            navigationOptions: ({navigation}) => ({
                headerTitle: '网络请求',
            }),
        },
        Storage: {
            screen: Storage,
            navigationOptions: ({navigation}) => ({
                headerTitle: '本地存储',
            }),
        },
        UiImage: {
            screen: UiImage,
            navigationOptions: ({navigation}) => ({
                headerTitle: '图片',
            }),
        },
        UiScrollView: {
            screen: UiScrollView,
            navigationOptions: ({navigation}) => ({
                headerTitle: '滚动视图',
            }),
        },
        Navigation: {screen: Navigation},
        RouterOne: {screen: RouterOne},
        RouterTwo: {screen: RouterTwo},
        RouterThree: {screen: RouterThree},
        Demonstration: {screen: Demonstration},
        History: {screen: History},
        Item: {screen: Item},
        Polymorphic: {
            screen: TabNavigator({
                    Demonstration: {
                        screen: Demonstration,
                        navigationOptions: ({navigation}) => ({
                            tabBarLabel: '农事示例',
                        }),
                    },
                    History: {
                        screen: History,
                        navigationOptions: ({navigation}) => ({
                            tabBarLabel: '发送历史',
                        }),
                    },
                },
            )
        },
        Uc: {
            screen: TabNavigator({
                    Uc: {
                        screen: Uc,
                        navigationOptions: ({navigation}) => ({
                            tabBarLabel: '用户中心',
                        }),
                    },
                    Timeline: {
                        screen: Timeline,
                        navigationOptions: ({navigation}) => ({
                            tabBarLabel: '动态',
                        }),
                    },
                },
            )
        },
        Setting: {
            screen: DrawerNavigator({
                    Uc: {
                        screen: Uc,
                    },
                    Timeline: {
                        screen: Timeline,
                    },
                },
                {
                    drawerWidth: 200, // 抽屉宽
                    drawerPosition: 'left', // 抽屉在左边还是右边
                    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
                    contentOptions: {
                        initialRouteName: 'Home', // 默认页面组件
                        activeItemKey: 'Notifications',
                        labelStyle: {//标签样式
                            // color : 'red',
                            height: 30,
                        },
                        activeTintColor: 'white',  // 选中文字颜色
                        activeBackgroundColor: '#ff8500', // 选中背景颜色
                        inactiveTintColor: '#666',  // 未选中文字颜色
                        inactiveBackgroundColor: '#fff', // 未选中背景颜色
                        style: {  // 样式
                            marginVertical: 0,
                        },
                        //没有作用
                        onItemPress: (route) => {
                            console.log('-------->' + JSON.stringify(route))
                        },

                    }
                }
            )
        },
    },{
        initialRouteName: this.props&&this.props.flag?'Event': 'Home'
    }
);
const prefix = Platform.OS === 'android' ? 'demo2://demo2/' : 'demo2://';
const MainApp = () => <RnSimple uriPrefix={prefix}/>;
AppRegistry.registerComponent('RnSimple', () => MainApp);
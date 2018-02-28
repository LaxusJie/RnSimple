import {NavigationActions} from 'react-navigation'

/**
 * 页面的跳转
 * @param  navigation 传入路由 this.props.navigation
 * @param  activity 页面注册的名称
 * @param  params 传入内容信息 例如 {hehe:'nidaye'}
 * @param  action 如果该界面是一个navigator的话，将运行这个sub-action
 */
export const jumpActivity = (navigation, activity, params, action) => {
    const navigationAction = NavigationActions.navigate({
        routeName: activity,
        params: params,
        // navigate can have a nested navigate action that will be run inside the child router
        action: action?action:NavigationActions.navigate({routeName: 'SubProfileRoute'})
    });
    navigation.dispatch(navigationAction)
};
/**
 *  关闭当前页面，并且跳转页面
 * @param  navigation 传入路由 this.props.navigation
 * @param  activity 页面注册的名称
 * @param  params 传入内容信息 例如 {hehe:'nidaye'}
 * @param  action 如果该界面是一个navigator的话，将运行这个sub-action
 */
export const jumpActivityAndFinish = (navigation, activity, params, action) => {
    navigation.goBack(null);
    const navigationAction = NavigationActions.navigate({
        routeName: activity,
        params: params,
        action: action?action:NavigationActions.navigate({routeName: 'SubProfileRoute'})
    });
    navigation.dispatch(navigationAction)
};
/**
 * @param navigation
 * @param activity 页面名称(不填写默认返回上一个页面)
 * 返回操作（会关闭开启的页面，留下我们设置的top页面）
 */
export const goBack = (navigation, activity) => {
    if (activity === undefined) {
        navigation.goBack(null)
    } else {
        navigation.goBack(activity)
    }
};


/**
 * 从此屏幕的导航堆栈中弹出顶部屏幕 （tab的不好处理，暂时未处理了）
 * @param  navigator 传入路由 this.props.navigation
 * @param activity 页面名称
 * @param params  传入的参数
 */
export const topActivity = (navigator, activity, params) => {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({routeName: activity, params: params})
        ]

    });
    navigator.dispatch(resetAction)
};






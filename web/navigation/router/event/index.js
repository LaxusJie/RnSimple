import {
    NativeModules,
    Platform
} from 'react-native';

/**
 *跳转到原生哪一个页面
 */
export const startActivityByClassname = (className) => {
    if (Platform.OS === 'ios') {
        //ios的平台
    } else {
        NativeModules.IntentModule.startActivityByClassname(className);
    }
};
/**
 *跳转到原生并且传递一个信息
 */
export const startActivity = (className,message) => {
    if (Platform.OS === 'ios') {
        //ios的平台
    } else {
        NativeModules.IntentModule.startActivity(className, message);
    }
};
/**
 * Callback 方式 RN调用原生回调的方式 jS调用一次，Native返回一次
 * CallBack为异步操作，返回时机不确定
 * rn调用Native,并获取返回值
 */
export const rnCallNativeFromCallback = (className,callback) => {
    if (Platform.OS === 'ios') {
        //ios的平台

    } else {
        NativeModules.MutualInformationModeule.rnCallNativeFromCallback(className, callback);
    }
};
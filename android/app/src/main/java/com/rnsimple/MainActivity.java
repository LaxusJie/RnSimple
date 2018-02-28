package com.rnsimple;

import android.app.Activity;
import android.os.Bundle;
import android.support.annotation.Nullable;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class MainActivity extends ReactActivity {
    public static final String EVENT_NAME = "nativeCallRn";
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "RnSimple";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new MyReactDelegate(this,getMainComponentName());
    }
    class MyReactDelegate extends ReactActivityDelegate{

        public MyReactDelegate(Activity activity, @Nullable String mainComponentName) {
            super(activity, mainComponentName);
        }

        @Nullable
        @Override
        protected Bundle getLaunchOptions() {
            String name = getIntent().getStringExtra("flag");
            Bundle bundle=new Bundle();
            bundle.putString("flag",name);//注 key 是关键字 js会过滤掉  这个是大坑
            return bundle;
        }
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    protected void onResume() {
        super.onResume();
        int type = getIntent().getIntExtra("type",0);
        if(type == 1){
            nativeCallRn(getIntent().getStringExtra("message"));
        }
    }

    /**
     * Native调用RN 可任意时刻传递，Native主导控制	个人觉得此种方式缺点小
     * @param msg
     */
    public  void nativeCallRn( String msg) {
        this.getReactNativeHost().getReactInstanceManager().getCurrentReactContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(EVENT_NAME, msg);
    }
}

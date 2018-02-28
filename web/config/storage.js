import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

var storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,

    // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,

    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    defaultExpires: 1000 * 3600 * 24,

    // 读写时在内存中缓存数据。默认启用。
    enableCache: true,

})

function save(key, data, expires) {
    storage.save({
        key: key,  // 注意:请不要在key中使用_下划线符号!
        data: data,
        // 如果不指定过期时间，则会使用defaultExpires参数
        // 如果设为null，则永不过期
        expires: expires
    });
}

async function load(key) {
    try {
        let data = await storage.load({
            key:key,
            // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
            autoSync: true,
            // syncInBackground(默认为true)意味着如果数据过期，
            // 在调用sync方法的同时先返回已经过期的数据。
            // 设置为false的话，则等待sync方法提供的最新数据(当然会需要更多时间)。
            syncInBackground: true,
        });
        console.log(data);
        return data;
    } catch(error) {
        console.warn(error.message);
        switch (error.name) {
            case 'NotFoundError':
                 console.warn('NotFoundError找不到该key对应的数据');
                break;
            case 'ExpiredError':
                console.warn('ExpiredError已过期错误');
                break;
        }
    }
}

global.loadStorage = load;
global.saveStorage = save;

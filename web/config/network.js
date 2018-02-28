/**
 * desc：网络配置类
 * author：haojie
 * date：2017/12/19
 */

class NetWork {
    baseURL = 'http://58.132.200.58:8079';
    timeout = 5000;
    headers = {'content-type': 'application/json'};
}

global.network = new NetWork();
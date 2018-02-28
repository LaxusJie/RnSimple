/**
 * desc：测试api
 * author：郝捷
 * date： 2017/12/19
 */
import {
    get
} from 'we-rn-network'

class Sso {
    @get('sso')
    login(json){}
    @get('sso')
    list(json){}

}
export default new Sso();
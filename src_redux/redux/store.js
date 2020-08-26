import {createStore} from 'redux'
import { counter } from './reducers'

const store = createStore(counter)   //这里执行了counter，并且进行了封装
console.log(store);

/* 
    store存储之后还有重绘页面
    创建store对象需要传入一个reducer, reducer就是一个方法，返回新的state
    store.subscribe订阅store对象,如果store中的状态变化了就重绘

*/

export default store
import { INCREMENT, DECREMENT } from "./action-types"
/* 
  此文件默认只支持返回对象写法，store中applyMiddleware(thunk)，才支持异步函数写法
  increment和decrement都是actionCreactor 
  同步的action都返回一个对象
  异步的action返回一个函数

*/
export const increment = number => ({type: INCREMENT, data: number})
export const decrement = number => ({type: DECREMENT, data: number})

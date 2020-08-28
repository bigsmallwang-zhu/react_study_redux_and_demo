//不能修改state的值，只能返回一个新的state

import { ADD,DEL,REV } from "./action-types"


const initComments = []
export function comments(state = initComments, action) {
  // console.log("", state, action);
  switch(action.type){
    case ADD:
      return [action.data, ...state]
    case DEL:
      return state.filter((comment, index) => (index !== action.data))
    case REV:
      return action.data
    default:
      return state
  }
}
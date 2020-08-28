import { ADD,DEL,REV } from "./action-types"

export const addComment = comment => ({type: ADD, data: comment})
export const deleteComment = index => ({type: DEL, data: index})
const revComments = comments => ({type: REV, data: comments})

export const getComments = () => {
  return dispatch => {
    setTimeout(() => {
      const comments = [
        { username: 'Tom', content: 'React挺好的' },
        { username: 'Jack', content: 'React挺难的' }
      ]
      dispatch(revComments(comments));
    },1000)
  }
}
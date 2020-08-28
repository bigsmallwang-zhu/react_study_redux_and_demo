import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../../css/commentI-list-item.css'

class CommentListItem extends Component {

  static propTypes = {
    index: PropTypes.number.isRequired,
    comment: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired
  }

  handleClick = () => {
    const {index, comment, deleteComment} = this.props
    if(window.confirm(`确定删除${comment.username}的评论吗?`))
    deleteComment(index)
  }

  render() {
    const { comment } = this.props
    return (
      <li className="list-group-item">
        <div className="handle">
          <a onClick={this.handleClick}>删除</a>
        </div>
        <p className="user"><span >{ comment.username }</span><span>说:</span></p>
        <p className="centence">{ comment.content }!</p>
      </li>
     );
  }
}
 
export default CommentListItem;
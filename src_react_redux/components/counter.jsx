import React,{Component} from 'react';
import PropTypes from 'prop-types'


export default class Counter extends Component {
  
  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  }

  increment = () => {
    const number = this.select.value * 1
    // this.props.store.dispatch(actions.increment(number))
    this.props.increment(number)
    console.log("---",this.props);
  }
  decrement = () => {
    const number = this.select.value * 1
    // this.props.store.dispatch(actions.decrement(number))
    this.props.decrement(number)
  }
  ifOdd = () => {
    const number = this.select.value * 1
    const { count } = this.props
    if(count % 2 === 1){
      // this.props.store.dispatch(actions.increment(number));
      this.props.increment(number)
    }
  }
  ansycIncrement = () => {
    const number = this.select.value * 1;
    setTimeout(() => {
      // this.props.store.dispatch(actions.increment(number));
      this.props.increment(number)
    },1000)
  }
  render() { 
    // const count = this.props.store.getState()
    const { count } = this.props
    return (<div>
      <p>click { count } times</p>
      <select ref={select => this.select = select}>   {/*非受控组件*/}
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>&nbsp;
      <button onClick={this.increment}>+</button>&nbsp;
      <button onClick={this.decrement}>-</button>&nbsp;
      <button onClick={this.ifOdd}>increment if odd</button>&nbsp;
      <button onClick={this.ansycIncrement}>increment ansyc</button>
    </div>);
  }
}

import React,{Component} from 'react';

class App extends Component {
  state = {
    count: 0
  }
  increment = () => {
    const number = this.select.value * 1
    const count = this.state.count
    this.setState({ count: count + number })
  }
  decrement = () => {
    const number = this.select.value * 1
    const count = this.state.count;
    this.setState({ count: count - number })
  }
  ifOdd = () => {
    const number = this.select.value * 1
    const { count } = this.state
    if(count % 2 == 1){
      this.setState({ count: count + number })
    }
  }
  ansycIncrement = () => {
    const number = this.select.value * 1;
    const { count } = this.state
    setTimeout(() => {
      this.setState({ count: count + number })
    },1000)
  }
  render() { 
    const {count} = this.state
    return (<div>
      <p>click {count} times</p>
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
 
export default App;
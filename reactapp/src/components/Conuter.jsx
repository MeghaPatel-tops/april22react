import React , { Component } from 'react'

export default class Conuter extends Component {
   
    constructor(props){
        super(props);
        this.state={count:0};
    };
    increment= ()=>{
       
        this.setState({ count: this.state.count + 1 });
    };
  render() {
    return (
      <div>
        <button onClick={this.increment}>Click</button>
        <p>Count:{this.state.count}</p>
        </div>
    )
  }
}

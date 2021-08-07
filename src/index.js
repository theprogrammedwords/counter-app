import './index.css';
import React from "react";
import ReactDOM from "react-dom";

//const element=  React.createElement("h1",null, "React Element")
//ReactDOM.render(element, document.querySelector("#root"))

class App extends React.Component{
  
  render(){
    return (
    <div>
    <Counter diff={1}/>
    <Counter diff={10}/>
    </div>
  )}
} 
class Counter extends React.Component{
  constructor(props){
      super(props);
      this.state = {count :0}
  }
  render(){
      return (
          <div>
              <h1 className="counter-display">{this.state.count}</h1>
              <button onClick={this.increaseCount}>+{this.props.diff}</button>
              <button onClick={this.decreaseCount}>-{this.props.diff}</button>
          </div>    
      )
  }

  increaseCount = () => {
      this.setState((state, props) => {
        return { count: state.count + props.diff}
      });
    };
    
    decreaseCount = () => {
      this.setState((state, props) => {
        return { count: state.count - props.diff }
      });
    };
}
ReactDOM.render(<App/>, document.querySelector("#root"))
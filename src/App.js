import React from 'react';
import ReactDOM from 'react-dom';
// state Component
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state text',
      currentEvent:"---",
      a: "", b:"", c:""
    }
    this.updateEvent= this.updateEvent.bind(this)
    this.updateA= this.updateA.bind(this)
  }

  updateA(){
    this.setState({
      a: this.a.value,
      b: this.refs.b.value,
      c: this.c.refs.input.value
      //c: ReactDOM.findDOMNode(this.c).value  this work if we have single node
    })
  }
  updateEvent(e){
    this.setState({currentEvent: e.type})
  }
  update(e){
    this.setState({txt: e.target.value})
  }

  render(){
    return (<div>
        <h1> Hello World </h1> <b>Bold</b>
          <Widget update={this.update.bind(this)}/>
          <h2>from props:  {this.props.txt}</h2>
          <h2>from state:  {this.state.txt}</h2>

          // including nested commponet
          // creating our button and accessing the values of it
          <Button><Heart /> Shoaib</Button>

          // custom propType validation
          <Title text="1234567"/>

          //synthetic event system
          <textarea
            onCopy={this.updateEvent}
            onPaste={this.updateEvent}
            onCut={this.updateEvent}
            onKeyPress={this.updateEvent}
            onFocus={this.updateEvent}
            onBlur={this.updateEvent}
            onTouchStart={this.updateEvent}
            onTouchMove={this.updateEvent}
            onTouchEnd={this.updateEvent}
            cols="30" rows="10" />
          <h1>{this.state.currentEvent}</h1>
          <input ref={node => this.a = node} text="text" onChange={this.updateA} />
          {this.state.a}
          <hr />
          <input ref="b" text="text" onChange={this.updateA} />
          {this.state.b}
          <hr />
          <Input ref={component => this.c = component} update={this.updateA} />
          {this.state.c}
        </div>
      )
  }
}

// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }

// default text
App.defaultProps = {
  txt: "_this is the default text_"
}
//const App = () => <h1>Hello stateless</h1>

const Widget = (props) =>
  <input type="text" onChange={props.update} />

const Button = (props) =>
    <button>{props.children}</button>

class Heart extends React.Component{
  render(){
    return <span>&hearts;</span>
  }
}

const Title = (props) =>
  <h1>Title: {props.text}</h1>

Title.propTypes ={
  text(props, propName, commponet){
    if(!(propName in props)){
      return new Error(`missing ${propName}`)
    }
    if(props[propName].length < 6){
      return new Error(`${propName} was too short`)
    }
  }
}

class Input extends React.Component {
  render() {
    //return <input type="text" onChange={this.props.update} /> // single node
    return <div> <input ref="input" type="text" onChange={this.props.update} /> </div>
  }
}
export default App

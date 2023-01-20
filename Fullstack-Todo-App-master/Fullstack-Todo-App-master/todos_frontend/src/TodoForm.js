import React, {Component} from 'react';
import './TodoForm.css'


class TodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {inputValue: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e){
    this.setState({
      inputValue: e.target.value
    });
  }

  handleSubmit(e){
    if(this.state.inputValue === '') return;
    this.props.addTodo(this.state.inputValue);
    this.setState({inputValue: ''});
  }
  
  render(){
    return(
      <div className="form">
        <input
          type="text" 
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button
          className="btn-addTodo"
          onClick={this.handleSubmit}
        >
          Add Todo
        </button>
      </div>
    );
  }
  
  
}


export default TodoForm;
import { Component } from 'react';
import './App.css';
import Todos from './Todos';

class App extends Component {
    state = {
      todos: [
        {id:1 , content: "Finish React & Redux Course"},
        {id:2 , content: "Play Games"}]
    }

    deleteTodo = (id) => {
      
    }

 render(){
  return (
    <div className="App container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
    </div>
  );
 }
}

export default App;

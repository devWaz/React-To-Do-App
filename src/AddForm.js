import { Component } from "react";

class AddTodo extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({content: ''})
    }

    render(){
        return(
            <div className="form-section" >
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo: </label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                    <button className="waves-effect waves-light btn-small deep-purple lighten-2">Add New Task</button>
                </form> 
            </div>
        )
    }
}

export default AddTodo;
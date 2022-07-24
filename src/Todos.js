const Todos = ({todos , deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo =>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content} </span>
                    <div className="waves-effect waves-light red-text right" 
                            onClick={() => {deleteTodo(todo.id)}}><i className="small material-icons">close</i> </div>
                </div>
            )
        })
    ) : (
         <p className = "center message">You Completed your tasks, Nice! Add a New todo! </p>
    )

    return ( 
        <div className="todos collection">
            {todoList}
        </div>
    )
}
 
export default Todos;
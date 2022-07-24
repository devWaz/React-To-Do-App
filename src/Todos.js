const Todos = ({todos , deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo =>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content} </span>
                    <button onClick={}>Done</button>
                </div>
            )
        })
    ) : (
         <p className = "center"> your finished your tasks! Nice </p>
    )

    return ( 
        <div className="todos collection">
            {todoList}
        </div>
    )
}
 
export default Todos;
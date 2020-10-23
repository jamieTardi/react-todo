import React from 'react';
import Todo from './Todo'

const TodoList = ({inputText, setInputText, todos, setTodos, todo}) => {
    console.log(todos)
    return(
        <div className="todo-container">
            <ul className="todo-list">
            <h2 className="todo-title">Todo Items</h2>
                {todos.map((todo => (
          <Todo todos={todos} todo={todo}  setTodos={setTodos}key={todo.id} text={todo.text}/>
          )))}
            </ul>
        </div>
    )
}


export default TodoList


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function Todo ({inputText, setInputText, todos, setTodos, text, todo}) {
    const deleteTodo = () => {
        console.log(todo)
        setTodos(todos.filter((theTodo) => theTodo.id !== todo.id))
    }
    const completeTodo = () => {
        setTodos(todos.map(theTodo => {
            if(theTodo.id === todo.id){
                return{
                    ...theTodo, completed: !todo.completed
                }
            }
            return theTodo;
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}><p>{text}</p></li>
            <button className="Complete-btn buttons" onClick={completeTodo}><i class="fas fa-check-square"></i></button>
    <button className="delete-btn buttons" onClick={deleteTodo}><i class="fas fa-trash-alt"></i></button>
        </div>
    )
}

export default Todo
import React, { useState} from 'react';
import './styles/style.css';
import Form from './components/Form';
import TodoList from './components/TodoList';




function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([])
  return (
    <div className="container">
    <div className="hero">
      <h1 className="title">Todo List using React</h1>
      <Form inputText={inputText} todos={todos} setInputText={setInputText} setTodos={setTodos}/>
    </div>
    <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

import React from 'react';

 const Form = ({inputText, setInputText, todos, setTodos}) => {
     const inputTextHandler = (e) => {
      console.log(e.target.value)
      setInputText(e.target.value)
     }
    
     const SubmitTodoHandler = (e) => {
      e.preventDefault();
      setTodos([
        ...todos, 
        {
          text: inputText, 
          completed: false,
          id: Math.random()*1000}
      ])
      setInputText("")

      
  }

    
    return(
        <div className="input-contianer">
      <input type="text" className="input" value={inputText} onChange={inputTextHandler} />
      <button className="submit-btn" onClick={SubmitTodoHandler}>Click me!</button>
      </div>
    )
 }

 export default Form
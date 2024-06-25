import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import { FaRegHeart } from "react-icons/fa";


function App() {

  const [todoInput, setTodoInput] = useState("")
  const [todos, setTodos] = useState([])


  function addTodo() {

    if (todoInput.trim() !== '') {
      setTodos([...todos, todoInput]);
      setTodoInput('');
    }
  }

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };


  const Button = styled.button` 
  margin-left: 20px;
 padding: 10px 25px;
 border-radius: 10px;
 font-family: 'Pacifico', cursive;
 font-size: 15px;
 color: #FFF;	
 text-decoration: none;
 background-color: #d390bb;
 border-bottom: 5px solid #A5678E;
 text-shadow: 0px -2px #A5678E;

`;


  return (
    <>
      <div className='todo'>
        <Form className='first-list'>
          <label className='target'>HEDEF:</label>
          <input className="inp-1" type="text" value={todoInput} onChange={e => setTodoInput(e.target.value)} />
          <Button className='button' onClick={() => addTodo()}>Listeye Ekleyin</Button>
        </Form>
      </div>

      <ul className='ull-1 mt-5'>
        {todos.map((todo, index) => (
          <li className='lii-1' key={index} onClick={() => removeTodo(index)}>
            <FaRegHeart className='icon' />
            {todo}
          </li>
        ))}
      </ul>

    </>
  )
}

export default App

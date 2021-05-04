import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import './App.css';
import Todo from './Todo';
import db from './firebase'
import firebase from 'firebase'


function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [input, setInput] = useState('');

  // when the app loades , we need to listen to the database and fatch new todos as they  get added / removed

  //it will only read from data base and setTodos 
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()))
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, title: doc.data().title, input: doc.data().input, })))

    })

  }, []);

  const addTodo = (event) => {
    event.preventDefault();  // will stop the refresh 
    //  console.log("")
    // setTodos([...todos, input])  // this will set input ...todo is previouse  data

    // this code add input to the database (firestore)
    db.collection('todos').add({
      title: title,
      input: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),  //this line set time of server to the data base for orderby

    })
    setTitle('');   //it will clear title field 
    setInput('');   //it will clear input field 
  }
  return (
    <div className="App">
      <h1>Todo App 🚀</h1>
      <FormControl>
        <InputLabel >✅ Write a title</InputLabel>
        <Input value={title} onChange={event => setTitle(event.target.value)} />
        <br/>
        <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Write in brief" value={input} onChange={event => setInput(event.target.value)} />
      </FormControl>
      <br/>
      <br/>
      <Button disabled={!title } variant="contained" color="primary" type="submit" onClick={addTodo}> Add Todo</Button>
      <ul>

        {todos.map(todo =>
          <Todo text={todo} />
          // <li key={todo}> {todo} </li>

        )}

      </ul>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'


function App() {
  const [inputList, setInputList] = useState('');
  const [listItems, setListItems] = useState([])
  const inputHandle = (event) => {
    setInputList(event.target.value)
  }
  const listHandle = () => {
    setListItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList(' ')
  }
  const deleteItems = (id) => {
    console.log('Deleted')
    setListItems((oldItems) => {
      return oldItems.filter((arr, ind) => {
        return ind !== id;
      })
    })

  }
  return (
    <div className="main_div">
      <div className='center_div'>
      <h1>TODO APP</h1>
        <input type='text' onChange={inputHandle} value={inputList} />
        <button onClick={listHandle}> + </button>
        <ol style={{ listStyle: 'none' }}>
          {
            listItems.map((value, ind) => {
              return <TodoList
                values={value}
                key={ind}
                id={ind}
                onSelect={deleteItems} />
            })
          }
        </ol>
      </div>
    </div>
  );
}

export default App;

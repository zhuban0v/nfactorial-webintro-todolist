import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';
import { v4 as uuidv4} from 'uuid';

function OpenModal({todoList, setToDoList}) {
  const [IsAddModalVisible, setIsAddModalVisible] = useState(false)
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const savedToDos = localStorage.getItem(todoList);
    if (savedToDos) {
      setToDoList(JSON.parse(savedToDos));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(todoList, JSON.stringify(todoList));
  }, [todoList]);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  const handleAddItem = () => {
    const newItem = { id: uuidv4, name: inputValue, status: 'todo' };
    setToDoList([...todoList, newItem]);
    setInputValue('');
    console.log(newItem)
  }

  return (
    <div>

      
      <div className='modalicon'>
        <IconButton size ="large " sx={{width: 40}} onClick={() => setIsAddModalVisible(!IsAddModalVisible)}>{<AddCircleIcon/>}</IconButton>
      </div>    
      {IsAddModalVisible && (
      <div style={{marginLeft: 50, display:'flex', flexDirection: "column", backgroundColor: "#E4E6E7", width: 270, height: 230, position: 'absolute'}}>
        <p>Add New To Do</p>
        <textarea style={{
          height: 120, 
          backgroundColor: 'white', 
          borderRadius: 10}} 
          placeholder='Your Text...'
          value={inputValue}
          onChange={handleInputChange}></textarea>
        <Button variant="contained" onClick={handleAddItem}>Add</Button>
      </div>)}
        
    </div>
  );
}

export default OpenModal;

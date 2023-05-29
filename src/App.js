import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Welcome from './Components/Welcoming/Welcome';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DoneIcon from '@mui/icons-material/Done';
import Icon from '@mui/material';
import Activities from './Components/Activities/Activities';
import OpenModal from './Components/Activities/modal';
import { useState } from 'react';
import { v4 as uuidv4} from 'uuid';
import { SingleToDo } from './Components/SingleToDo';

function App() {
  const [activeStatus, setActiveStatus] = useState("todo");
  const [todoList, setToDoList] = useState([
    {id: uuidv4(), name: 'write an essay', status: 'todo'},
    {id: uuidv4(), name: '1 hour course', status: 'todo'},
    {id: uuidv4(), name: 'buy a ticket', status: 'done'},
    {id: uuidv4(), name: 'go to gym', status: 'todo'},
    {id: uuidv4(), name: 'To trash', status: 'trash'}
  ])


  const changeStatus = (status) => {
    setActiveStatus(status);
  } ;   

    const changeStatusInSingleToDo = (id, changedStatus) => {
      const changedItem = todoList.find((item) => item.id === id)
      changedItem.status = changedStatus;
      const newToDoListWithoutItem = todoList.filter((item) => item.id !== id)
      setToDoList([...newToDoListWithoutItem, changedItem]);
    }

  const  filteredtodolist = todoList.filter((item) => item.status === activeStatus);
  return (
    <div>
      <div >
      <Welcome />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{width: 400, marginLeft: 90, display:'flex', justifyContent: 'space-around'}}>
    <Button color="primary" disabled={false} variant="filled" startIcon={<PlayArrowIcon/>}  onClick={() => changeStatus("todo")} >ToDo</Button>
    <Button color="primary" disabled={false} variant="filled" startIcon={<DoneIcon/>} onClick={() => changeStatus("done")}>Done</Button>
    <Button color="primary" disabled={false} variant="filled" startIcon={<DeleteIcon/>} onClick={() => changeStatus("trash")}>Trash</Button>
  </div>       
    <OpenModal todoList={todoList} setToDoList={setToDoList}/>
    </div>   
    <div className='list'>
      {filteredtodolist.map((item, _index) => (
      <SingleToDo  
      key={_index}
       item={item} 
       changeStatusInSingleToDo={changeStatusInSingleToDo}/>))}
    </div>


    </div>
    </div>

  );
}

export default App;

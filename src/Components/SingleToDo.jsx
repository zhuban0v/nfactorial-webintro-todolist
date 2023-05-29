import { Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import UndoIcon from '@mui/icons-material/Undo';


export function SingleToDo({
    item, 
    changeStatusInSingleToDo}) {

    const changeStatus = () => {
        if(item.status != "trash") {
            if(item.status === "done") {
                changeStatusInSingleToDo(item.id, "todo")
            } else {
           changeStatusInSingleToDo(item.id, "done") 
            }
        } else
        {changeStatusInSingleToDo(item.id, "todo")}
    }


    return (<div>
        <div style={{display: "flex", flexDirection: "row"}}>
            <input 
            type="checkbox" 
            checked={item.status === "done"}
            onChange={changeStatus}
            disabled = {item.status === "trash"}
            />
            <p 
            style={{
                textDecoration: item.status === "done"  ? "line-through" : "none",
                color: item.status === "done" ? "gray" : "black",
            }}>{item.name}</p>
        </div>
        
        {item.status !== "trash" ?
        <div><Button variant="filled" size="small" startIcon={<DeleteIcon/>} onClick={()=>changeStatusInSingleToDo(item.id, "trash")}>Move to Trash  </Button></div> :
        <div>
            <Button variant="contained" size="small" startIcon={<UndoIcon/>} onClick={()=>changeStatusInSingleToDo(item.id, "todo")}>  Move to ToDo</Button>
            <Button variant="outlined" color="error" size="small"  startIcon={<DeleteIcon/>} onClick={()=>changeStatusInSingleToDo(item.id, "trash")}>Delete Forever</Button>
        </div>
        
    }
        
        </div>)
}
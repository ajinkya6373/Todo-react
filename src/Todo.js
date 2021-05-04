import React ,{useState}from 'react'
import db from "./firebase"
import { List,ListItemText,Button,Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';



const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'relative',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const classes = useStyles();
    const [open,setOpen]=useState(false);
    const [titleEdit ,setTitleEdit] = useState('')
    const [inputEdit ,setInputEdit] = useState('')

    // const handleopen = () =>{
    //     setOpen(true);
    // }
    // const handleclose = () =>{
    //     setOpen(false);
    // }
    const updateTodo  = () =>{
      
        //upadte the todo  with the new input text 
        db.collection('todos').doc(props.text.id).set({
            title:titleEdit,
            input:inputEdit
        },{merge:true})
        setTitleEdit('')
        setInputEdit('')
        setOpen(false)

    }
    return (
    <>
        <Modal 
        open = {open}
        onclose = {e=>setOpen(false)}
         >
            <div className={classes.paper} style={{margin:"40px"}}>
            <CancelIcon onClick={e=>setOpen(false)} />
                <h1>open</h1>
                <input placeholder={props.text.title} value={titleEdit} onChange ={event => setTitleEdit(event.target.value)}/>
                <br/>
                <br/>
                <textarea placeholder={props.text.input}  onChange ={event => setInputEdit(event.target.value)} />
                <br/>
                <Button onClick={updateTodo}>Update Todo</Button>
            </div>
        </Modal>


        <List >
             <ListItemText  primary={props.text.title} secondary ={props.text.input} />
             <EditIcon style={{ fontSize: 40 }}  onClick ={ e=>setOpen(true)}/>
             <DeleteForeverIcon style={{ fontSize: 40 }}  color="primary" variant="contained" onClick={ event=> 
             db.collection('todos').doc(props.text.id).delete()}/>
        </List>
    </>
    )
}

export default Todo

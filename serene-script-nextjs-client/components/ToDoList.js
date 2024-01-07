import { useState } from 'react';

import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';


export default function ToDoList() {
    const [toDoItem, setToDoItem] = useState("")
    const [allToDos, setAllToDos] = useState([])

    const onToDoChange = (event) => {
        setToDoItem(event.target.value)
    }

    const addToList = () => {
        let newToDos = [toDoItem, ...allToDos]
        setAllToDos(newToDos)
        setToDoItem("")
    }

    const onRemoveToDo = (index) => {
        let updatedToDos = [...allToDos]
        updatedToDos.splice(index, 1)
        setAllToDos(updatedToDos)
    }

    return <Box sx={{flexGrow: 1}}>
                <Grid container >
                    <Grid item xs={12}>
                        <Typography variant='h2'>
                            To Do
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField
                        id='toDoText'
                        variant='filled'
                        fullWidth
                        onChange={onToDoChange}
                        value={toDoItem}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                        size='large'
                        variant='contained'
                        onClick={addToList}>
                            Add
                        </Button>
                    </Grid>
                    <Grid>
                        <List>
                            {allToDos.map((toDoItem, index)=> {
                                return <ListItem
                                key={index}
                                divider
                                secondaryAction={
                                    <IconButton 
                                    edge="end"
                                    onClick={() => onRemoveToDo(index)}
                                        >
                                      <DeleteRoundedIcon />
                                    </IconButton>
                                  }>
                                    <ListItemText primary={toDoItem}/>
                                </ListItem> 
                            })}
                        </List>
                    </Grid>
                </Grid>
            </Box>
}
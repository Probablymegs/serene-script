import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { getTaskValue } from "@/utils/api/gpt4";
import { useTheme } from "@mui/material";

export default function ToDoList() {
    const [toDoItem, setToDoItem] = useState("");
    const [allToDos, setAllToDos] = useState([]);
    const [todoValue, setTodoValue] = useState(0);
    const theme = useTheme();

    const onToDoChange = (event) => {
        setToDoItem(event.target.value);
    };

    const addToList = async () => {
        var taskVal = await getTaskValue(toDoItem)
        setTodoValue(taskVal.response);
        let newToDos = [{task: toDoItem, value: todoValue}, ...allToDos];
        setAllToDos(newToDos);
        setToDoItem("");
    };

    const onRemoveToDo = (index) => {
        let updatedToDos = [...allToDos];
        updatedToDos.splice(index, 1);
        setAllToDos(updatedToDos);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container sx={{ width: "70%", marginX: "auto" }}>
                <Grid item xs={12}>
                    <h1 style={{ textAlign: "center", marginTop: "5rem", color: theme.palette.primary.dark, marginBottom: "3rem" }}>Tasks</h1>
                </Grid>
                <Grid item xs={10}>
                    <TextField
                        id="toDoText"
                        fullWidth
                        onChange={onToDoChange}
                        value={toDoItem}
                        placeholder="Task Name"
                        sx={{backgroundColor: "white", borderRadius: "0.25rem"}}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button size="large" variant="contained" onClick={addToList} sx={{ marginLeft: "1rem" }}>
                        Add
                    </Button>
                </Grid>
            </Grid>
            <Grid container sx={{ width: "70%", marginX: "auto", marginTop: "2rem" }}>
                <Grid sx={{width: "100%"}}>
                    <List sx={{width: "100%"}}>
                        {allToDos.map((toDoItem, index) => {
                            return (
                                <ListItem
                                    key={index}
                                    sx={{width: "91.25%", backgroundColor: "white", borderRadius: "0.25rem ", marginTop: "0.25rem"}}
                                    divider
                                    secondaryAction={
                                        <IconButton edge="end" onClick={() => onRemoveToDo(index)}>
                                            <DeleteRoundedIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemText primary={toDoItem.task + " " + toDoItem.value} />
                                </ListItem>
                            );
                        })}
                    </List>
                </Grid>
            </Grid>
        </Box>
    );
}

import Link from "next/link";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material";
import SpaIcon from '@mui/icons-material/Spa';


export default function NavBar(props) {
    const theme = useTheme();

    return (
        <Box>
            <AppBar position="static" sx={{backgroundColor: theme.palette.primary.main}}>
                <Toolbar>
                    <Link href="/" /*insert reference page here*/>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <SpaIcon/>
                        </Typography>
                    </Link>
                    <Link href="/chat">
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: "1rem" }}>
                            Chat
                        </Typography>
                    </Link>
                    <Link href="/toDo">
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: "1rem" }}>
                            To do
                        </Typography>
                    </Link>
                    <Link href="/links">
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: "1rem" }}>
                            Get Help
                        </Typography>
                    </Link>
                    <Menu></Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

import Link from "next/link";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";

export default function NavBar(props) {
    const theme = useTheme();

    return (
        <Box>
            <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
                <Toolbar sx={{ display: "flex", gap: "1.5rem" }}>
                    <Link href="/" /*insert reference page here*/>
                        <SpaIcon sx={{ fontSize: 40, color: theme.palette.primary.dark }} />
                    </Link>
                    <Link style={{ textDecoration: "none" }} href="/chat">
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, color: theme.palette.primary.dark, fontSize: 25 }}
                        >
                            Chat
                        </Typography>
                    </Link>
                    <Link style={{ textDecoration: "none" }} href="/toDo">
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, color: theme.palette.primary.dark, fontSize: 25 }}
                        >
                            Tasks
                        </Typography>
                    </Link>
                    <Link style={{ textDecoration: "none" }} href="/links">
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, color: theme.palette.primary.dark, fontSize: 25 }}
                        >
                            Get Support
                        </Typography>
                    </Link>
                    <Link style={{ textDecoration: "none" }} href="/about">
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, color: theme.palette.primary.dark, fontSize: 25 }}
                        >
                            About Us
                        </Typography>
                    </Link>
                    <Menu></Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

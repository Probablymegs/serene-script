import Link from 'next/link'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';


export default function NavBar(props) {
  return <AppBar>
    <Toolbar>
      <Link href="/"/*insert reference page here*/>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Home
        </Typography></Link>
      <Menu>
        </Menu>
    </Toolbar>
  </AppBar>
}
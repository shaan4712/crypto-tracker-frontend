import {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import {IconButton} from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);
  //to maintain drawer

  return (
    <div>
          <IconButton onClick={() => setOpen(true)}>
            <MenuRoundedIcon className='link'/>
          </IconButton>
          <Drawer
            anchor={"right"} //place from where drawer opens
            open={open} //is open true = drawer will open, false = drawer will be closed
            onClose={() => setOpen(false)} //to close drawer
          >
            <div className='drawer-div'>
            <a href='/'>
                <p className='link'>Home</p>
            </a>
            <a href='/'>
                <p className='link'>Compare</p>
            </a>
            <a href='/'>
                <p className='link'>Watchlist</p>
            </a>
            <a href='/'>
                <p className='link'>Dashboard</p>
            </a>
            </div>
          </Drawer>
    </div>
  );
}

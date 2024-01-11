'use client';
import { memo } from 'react';
import * as React from 'react';
import type { FC } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import InboxIcon from '@mui/icons-material/MoveToInbox';


import resets from '../_resets.module.css';
import { ActionButton } from './ActionButton/ActionButton';
import { HeaderComponent } from './HeaderComponent/HeaderComponent';
import classes from './Main.module.css';
import { Table } from './Table/Table';

interface Props {
  className?: string;
}

export default function Home() {
  const [state, setState] = React.useState({
    drawerOpen: false
  });

  const toggleDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, drawerOpen: open });
      };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  /* @figmaId 6:46 */
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <HeaderComponent />
      <div className={classes.tableActionButtons}>
        <ActionButton />
        <ActionButton
          classes={{ button: classes.button }}
          text={{
            buttonText: <div className={classes.buttonText}>Edit</div>,
          }} />
        <ActionButton
          classes={{ button: classes.button2 }}
          text={{
            buttonText: <div className={classes.buttonText2}>Delete</div>,
          }} />
      </div>
      <Table />
      <div>
        <React.Fragment>
          <div className={classes.drawerButton}>
            <Button onClick={toggleDrawer(true)}>Drawer</Button>
          </div>
          <Drawer
            anchor='right'
            open={state.drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </React.Fragment>
      </div>
    </div>
  );
};

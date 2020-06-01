import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import SettingsIcon from '@material-ui/icons/Settings';

import Dashboard from '../screens/Settings';
import Whatsapp from '../screens/Whatsapp';
import Settings from '../screens/Settings';

import logo from '../../assets/img/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [screen, setScreen] = React.useState('Dashboard');

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem className={classes.center}>
          <img src={logo} width="50%" height="50%" />
        </ListItem>
      </List>
      <Divider />
      <List>

        <ListItem button onClick={setScreen('Dashboard')}>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={setScreen('Whatsapp')}>
          <ListItemIcon><WhatsAppIcon /></ListItemIcon>
          <ListItemText primary="Whatsapp" />
        </ListItem>
        <ListItem button onClick={setScreen('Settings')}>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Configurações" />
        </ListItem>

      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>

      <React.Fragment key={"left"}>
        <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
          {list("left")}
        </Drawer>
      </React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={toggleDrawer("left", true)} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Clikbot
          </Typography>
          <Button color="inherit">LOGOUT <ExitToAppIcon color="error" style={{ marginLeft: 10 }} /></Button>
        </Toolbar>
      </AppBar>



      {/* {screen === 'Dashboard' && <Dashboard />}
      {screen === 'Whatsapp' && <Whatsapp />}
      {screen === 'Settings' && <Settings />} */}
    </div>
  );
}

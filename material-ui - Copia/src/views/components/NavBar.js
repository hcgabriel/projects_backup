import React, { useEffect, useState } from 'react';
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
import FacebookIcon from '@material-ui/icons/Facebook';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleIcon from '@material-ui/icons/People';
import Menu from '@material-ui/core/Menu';
import CheckCircle from '@material-ui/icons/CheckCircle';
import MenuItem from '@material-ui/core/MenuItem';

import Whatsapp from '../screens/Whatsapp';
import Settings from '../screens/Settings';
import Dashboard from '../screens/Dashboard';
import Facebook from '../screens/Facebook';

import * as storage from '../../controllers/storage';

import PasswordDialog from './PasswordDialog';

import logo from '../../assets/img/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'flex',
    flexGrow: 1,
    marginLeft: 50,
    fontFamily: 'roboto',
    fontSize: 18,
    justifyContent: 'flex-start',
    alignItems: 'center',
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

const NavBar = () => {
  const classes = useStyles();

  //TEMP

  const [user, setUser] = useState(false);
  const users = [
    { id: 1, nome: 'João - FINANCEIRO', senha: '123' },
    { id: 2, nome: 'José - VENDAS', senha: '123' },
    { id: 3, nome: 'Administrador - ADM', senha: '123' }
  ]

  useEffect(() => {
    setUser(storage.getData('USER'));
  }, [])


  //TEMP

  const [anchorEl, setAnchorEl] = useState(null);

  const [screen, setScreen] = useState('Whatsapp');

  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [toggleDialog, setToggleDialog] = useState(false);

  const [changeUser, setChangeUser] = useState({});

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={() => setToggleDrawer(false)}
      onKeyDown={() => setToggleDrawer(false)}
    >
      <List>
        <ListItem className={classes.center}>
          <img src={logo} width="50%" height="50%" />
        </ListItem>
      </List>
      <Divider />
      <List>

        <ListItem button onClick={() => setScreen('Dashboard')}>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => setScreen('Whatsapp')}>
          <ListItemIcon><WhatsAppIcon /></ListItemIcon>
          <ListItemText primary="Whatsapp" />
        </ListItem>
        <ListItem button onClick={() => setScreen('Facebook')}>
          <ListItemIcon><FacebookIcon /></ListItemIcon>
          <ListItemText primary="Facebook" />
        </ListItem>
        <ListItem button onClick={() => setScreen('Settings')}>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Configurações" />
        </ListItem>

      </List>
      <Divider />
    </div>
  );


  return (
    <div className={classes.root}>

      {toggleDialog && <PasswordDialog user={changeUser} visible={toggleDialog} />}

      <React.Fragment>
        <Drawer anchor="left" open={toggleDrawer} onClose={() => setToggleDrawer(false)}>
          {list("left")}
        </Drawer>
      </React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={() => setToggleDrawer(true)} />
          </IconButton>
          <Button style={{ backgroundColor: '#fff', borderRadius: 50 }} color="inherit">
            <img src={logo} width={40} height={40} alt="logo" />
          </Button>

          <Typography variant="p" className={classes.title}>
            {screen === 'Dashboard' && <DashboardIcon />}
            {screen === 'Whatsapp' && <WhatsAppIcon />}
            {screen === 'Facebook' && <FacebookIcon />}
            {screen === 'Settings' && <SettingsIcon />}
            {screen}
          </Typography>

          <Button variant="contained">
            {user.nome}<CheckCircle style={{ marginLeft: 10, color:'#03d803' }} />
          </Button>
          <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={(e) => handleClick(e)}>
            TROCAR USUÁRIO<PeopleIcon color="inherit" style={{ marginLeft: 10 }} />
          </Button>
          <Button color="inherit">LOGOUT <ExitToAppIcon color="error" style={{ marginLeft: 10 }} /></Button>
        </Toolbar>
      </AppBar>


      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => handleClose()}
      >
        {/* <MenuItem onClick={() => handleClose()}>Profile</MenuItem>
        <MenuItem onClick={() => handleClose()}>My account</MenuItem>
        <MenuItem onClick={() => handleClose()}>Logout</MenuItem> */}
        {users && users.map(u => {
          return (
            <MenuItem key={u.id} onClick={async () => {
              await Promise.all([
                setChangeUser(u),
                setToggleDialog(true),
                handleClose(),
              ]);
            }}>{u.nome}</MenuItem>
          );
        })}
      </Menu>

      {screen === 'Dashboard' && <Dashboard />}
      {screen === 'Whatsapp' && <Whatsapp />}
      {screen === 'Facebook' && <Facebook />}
      {screen === 'Settings' && <Settings />}
    </div>
  );
}

export default NavBar;

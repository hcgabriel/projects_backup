import React, { useEffect, useState } from 'react';
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
import MenuItem from '@material-ui/core/MenuItem';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import Flag from '@material-ui/icons/Flag';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import EmojiEmotions from '@material-ui/icons/EmojiEmotions';
import Person from '@material-ui/icons/Person';
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import Notifications from '@material-ui/icons/AlternateEmail';
import Help from '@material-ui/icons/Help';

import '../../assets/css/sidebar.css';

import * as storage from '../../controllers/storage';

import logo from '../../assets/img/logo.png';
import profile from '../../assets/img/profile.jpg';

const Sidebar = () => {

  return (
    <div className="sidebar-box">
      <div className="sidebar-header">
        <img src={logo} alt="logo" />
      </div>
      <div className="sidebar-body">
        <div className="sidebar-title">ÁREA DE MEMBROS</div>
        <div className="sidebar-menu-item">
          <div className="sidebar-menu-item-icon-selected"><LibraryBooks /></div>
          <div className="sidebar-menu-item-title-selected">Conteúdos</div>
        </div>
        <div className="sidebar-menu-item">
          <div className="sidebar-menu-item-icon"><Flag /></div>
          <div className="sidebar-menu-item-title">Ranking</div>
        </div>
        <div className="sidebar-menu-item">
          <div className="sidebar-menu-item-icon"><InsertEmoticon /></div>
          <div className="sidebar-menu-item-title">Perfil</div>
        </div>
        <div className="sidebar-menu-item">
          <div className="sidebar-menu-item-icon"><Person /></div>
          <div className="sidebar-menu-item-title">Minha conta</div>
        </div>
        <div className="sidebar-menu-item">
          <div className="sidebar-menu-item-icon"><AlternateEmail /></div>
          <div className="sidebar-menu-item-title">Atendimento</div>
        </div>
      </div>
      <div className="sidebar-bottom">
        <div><Notifications className="sidebar-bottom-icon" /></div>
        <div className="sidebar-profile-image"><img src={profile} alt="logo" /></div>
        <div><Help className="sidebar-bottom-icon" /></div>
      </div>
    </div>
  );

};

export default Sidebar;

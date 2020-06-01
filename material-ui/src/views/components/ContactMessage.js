import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  avatarName: {
    color: '#fff',
    width: '70%',
    fontSize: 18,
    fontFamily: 'Roboto',
    cursor: 'pointer',
  },
  grid: {
    width: '100%',
    height: 50,
    backgroundColor: '#909090',
    padding: 5,
    borderRadius: 5,
    cursor: 'pointer',
    '&:hover': { backgroundColor: '#a0a0a0' },
  },
  item: {
    // maxWidth: 345,
    width: '100%',
    marginTop: 0,
    marginBottom: 5,
    cursor: 'pointer',
    '&:hover': { backgroundColor: '#f0f0f0' },
  },
  avatar: {
    backgroundColor: '#fd4545',
  },
}));

const ContactMessage = (props) => {
  const classes = useStyles();
  let message = props.message;
  let lastMessage = props.lastMessage;
  let bgColor = '#555';
  let bgMessageColor = props.author === 'agent' ? '#3A96C2' : '#4caf50';
  let max = 50;

  return (
    <div className={classes.root}>
      <List component="nav" style={{ backgroundColor: bgMessageColor }} aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            { props.author === 'agent' ? <AssignmentIndIcon /> : <PersonIcon />}
          </ListItemIcon>
          <ListItemText style={{ color: '#fff' }} secondaryTypographyProps={{ style: { color: '#444', fontSize: 10 }, }} primary={message.length > max ? message.substring(0, max - 3) + '...' : message} secondary={lastMessage} />
        </ListItem>
      </List>
      <Divider />
    </div >
  );
}

export default ContactMessage;
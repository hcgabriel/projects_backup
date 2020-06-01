import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
    '&:hover': { backgroundColor: '#efefef' },
    margin: 4,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    maxHeight: 50,
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
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 345,
    marginTop: 10,
    marginBottom: 10,
    cursor: 'pointer',
    '&:hover': { backgroundColor: '#f0f0f0' },
  },
  avatar: {
    backgroundColor: '#fd4545',
  },
}));

const ContactItem = (props) => {
  const classes = useStyles();
  let name = props.name;
  let lastMessage = props.lastMessage;
  let bgColor = props.status === 'pending' ? '#fd4545' : '#4caf50';
  let max = 22;

  return (
    <div className={classes.root}>
      <Card className={classes.item}>
        <CardHeader
          avatar={<Avatar aria-label="recipe" style={{ backgroundColor: bgColor }}> {name[0].toUpperCase()} </Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={name.length > max ? name.substring(0, max - 3) + '...' : name}
          subheader={lastMessage}
        />
      </Card>
    </div >
  );
}

export default ContactItem;
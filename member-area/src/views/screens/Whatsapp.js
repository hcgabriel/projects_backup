import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';

import ContactItem from '../components/ContactItem.js';
import ContactMessage from '../components/ContactMessage.js';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
  },
  contactsContainer: {
    // padding: 10,
    maxHeight: '82vh',
    overflowY: 'scroll',
    justifyContent: 'center',
    alignItems: 'center'
  },
  messagesContainer: {
    width: '100%',
    maxHeight: '82vh',
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#FFF"
  },
  messages: {
    width: '100%',
    height: '85%',
    borderRadius: 5,
    padding: 10,
    overflowY: 'scroll',
    backgroundColor: "#FFF"
  },
  message: {
    width: '100%',
    height: '10%',
    padding: 10,
    backgroundColor: "#FFF"
  },
  input: {
    width: '88%',
  },
  btn: {
    width: '10%',
    height: 40,
    margin: theme.spacing(1),
  },
  item: {
    maxWidth: 345,
    marginTop: 10,
    marginBottom: 10,
    cursor: 'pointer',
    '&:hover': { backgroundColor: '#f0f0f0' },
  },
}));

const Whatsapp = () => {
  const classes = useStyles();
  useEffect(() => {
    // document.querySelector("#root > div > div > div > div.MuiGrid-root.makeStyles-messagesContainer-149.MuiGrid-item.MuiGrid-grid-sm-9 > div.MuiGrid-root.makeStyles-messages-150.MuiGrid-item").scrollTop = document.querySelector("#root > div > div > div > div.MuiGrid-root.makeStyles-messagesContainer-149.MuiGrid-item.MuiGrid-grid-sm-9 > div.MuiGrid-root.makeStyles-messages-150.MuiGrid-item").scrollHeight
  },[]);

  return (
    <Grid container className={classes.container}>
      <Grid item sm={3} className={classes.contactsContainer}>
        <ContactItem status="pending" name="João da Cruz" lastMessage="15:23 20/04/2020" />
        <ContactItem status="pending" name="José de Anchieta" lastMessage="15:23 20/04/2020" />
        <ContactItem status="pending" name="Francisco de Assis" lastMessage="15:23 20/04/2020" />
        <ContactItem status="completed" name="Maria do Rosário" lastMessage="15:23 20/04/2020" />
        <ContactItem status="completed" name="Maria do Rosário" lastMessage="15:23 20/04/2020" />
        <ContactItem status="completed" name="Maria do Rosário" lastMessage="15:23 20/04/2020" />
        <ContactItem status="completed" name="Maria do Rosário" lastMessage="15:23 20/04/2020" />
      </Grid>
      <Grid className={classes.messagesContainer} item sm={9} >
        <Grid item className={classes.messages}>
          <ContactMessage message="Olá, cliente" author="agent" lastMessage="15:23 20/04/2020" />
          <ContactMessage message="Olá, agente..." author="client" lastMessage="15:23 20/04/2020" />
          <ContactMessage message="Tudo bem?" author="client" lastMessage="15:23 20/04/2020" />
          <ContactMessage message="Sim e com você?" author="agent" lastMessage="15:23 20/04/2020" />
          <ContactMessage message="Também!" author="client" lastMessage="15:23 20/04/2020" />
          <ContactMessage message="Também!" author="client" lastMessage="15:23 20/04/2020" />
          <ContactMessage message="Também!" author="client" lastMessage="15:23 20/04/2020" />
          <ContactMessage message="Também!" author="client" lastMessage="15:23 20/04/2020" />
          <ContactMessage message="Também!" author="client" lastMessage="15:23 20/04/2020" />
          <ContactMessage message="Também!" author="client" lastMessage="15:23 20/04/2020" />
        </Grid>
        <Grid item className={classes.message}>
          <TextField className={classes.input} id="outlined-basic" label="Digite uma mensagem..." variant="outlined" />
          <Button variant="contained" color="primary" className={classes.btn} endIcon={<Send />} >
            ENVIAR
            </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Whatsapp;
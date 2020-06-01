import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import * as storage from '../../controllers/storage';

const PasswordDialog = (props) => {
  const [open, setOpen] = useState(props.visible);
  const [password, setPassword] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const validPassword = async (pass) => {
    if(props.user.senha === pass) await storage.save('USER', props.user);
    handleClose();
  }

  const handleClose = () => {
    window.location.reload();
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={() => handleClickOpen()}>
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={() => handleClose()} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Trocar Usuário</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Digite a senha do usuário {props.user.nome} para acessar seu painel.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Senha"
            type="password"
            onChange={ (e) => setPassword(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()} color="primary">
            Cancelar
          </Button>
          <Button onClick={() => validPassword(password)} color="primary">
            Acessar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PasswordDialog;
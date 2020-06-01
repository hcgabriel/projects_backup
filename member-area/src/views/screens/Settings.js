import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import Atendente from '../../classes/Atendente';
import Setor from '../../classes/Setor';
import Usuario from '../../classes/Usuario';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowY: 'scroll'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
  },
}));

let atendente = new Atendente('Maria', '123', 'FINANCEIRO');
const rows = [
  atendente,
  atendente,
  atendente,
  atendente,
  atendente,
  atendente,
  atendente,
  atendente,
];





const EditCard = (props) => {

  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', width: '90%', justifyContent: 'space-evenly', alignItems: 'center', margin: 5, }}>
        <h3>{props.title}</h3>
        <Button variant="contained">
          NOVO<AddIcon style={{ marginLeft: 10, color: '#03d803' }} />
        </Button>
      </div>
      <div style={{ overflowY: 'scroll', height: '30vh' }}>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: '#efefef' }}>
                <TableCell align="left">ID</TableCell>
                <TableCell align="left">NOME</TableCell>
                <TableCell align="left">SENHA</TableCell>
                <TableCell align="left">SETOR</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ overflowY: 'scroll' }}>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell align="left">{row.nome}</TableCell>
                  <TableCell align="left">{row.senha}</TableCell>
                  <TableCell align="left">{row.setor.nome}</TableCell>
                  <TableCell align="left"> <IconButton aria-label="delete" className={classes.margin}> <EditIcon /> </IconButton> </TableCell>
                  <TableCell align="left"> <IconButton aria-label="delete" className={classes.margin}> <DeleteIcon /> </IconButton> </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Paper>
  )
};










const Settings = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <EditCard title="Atendentes" />
        </Grid>
        <Grid item xs={4}>
          <EditCard title="Setores" />
        </Grid>
        <Grid item xs={4}>
          <EditCard title="Pagamentos" />
        </Grid>
        <Grid item xs={4}>
          <EditCard title="Contatos" />
        </Grid>
        <Grid item xs={4}>
          <EditCard title="Atendentes" />
        </Grid>
        <Grid item xs={4}>
          <EditCard title="Atendentes" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Settings;
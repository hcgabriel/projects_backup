import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import NavBar from './views/components/NavBar';
import Sidebar from './views/components/Sidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
    minHeight: '99vh',
    maxHeight: '99vh',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Sidebar />
    </div>
  );
};

export default App;
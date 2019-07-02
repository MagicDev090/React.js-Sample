// @flow

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({}));

const Home = (): React$Element<*> => {
  const classes = useStyles();

  return (
    <div id="home">
      <h1>Oh My React</h1>
    </div>
  );
};

export default Home;
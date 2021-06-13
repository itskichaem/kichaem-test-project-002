import React from 'react';

import { Button as MuiButton, Container, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import Routes from 'src/constants/routes';

function LandingPage() {
  const history = useHistory();

  function handleStart() {
    history.push(Routes.HOME);
  }

  return (
    <MainContainer>
      <Title noWrap>&lt; Symph OS /&gt;</Title>
      <Subtitle>Symph&apos;s very own Operating System. </Subtitle>
      <Button variant="contained" onClick={handleStart}>
        Get started
      </Button>
    </MainContainer>
  );
}

const Title = withStyles({
  root: {
    fontSize: '10rem',
    fontWeight: 700,
    letterSpacing: -10,
  },
})(Typography);

const Subtitle = withStyles({
  root: {
    fontSize: '1.5rem',
  },
})(Typography);

const MainContainer = withStyles({
  root: {
    paddingTop: '4rem',
    textAlign: 'center',
    margin: 'auto',
  },
})(Container);

const Button = withStyles({
  root: {
    textAlign: 'center',
    marginTop: '3rem',
  },
})(MuiButton);

export default LandingPage;

import React, { Component } from 'react';
import { Box, Container, Typography } from '@material-ui/core';

const Login = () => {
  return (
    <Container maxWidth='sm'>
      <Box textAlign='center' p='24px' mt='50px'>
        <Typography variant='h3'>Login</Typography>
      </Box>
    </Container>
  );
};

export default Login;

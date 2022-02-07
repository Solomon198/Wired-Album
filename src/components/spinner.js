import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styled from 'styled-components';

const Container = styled(Box)`
     display: flex;
     justify-content: center;
     flex-direction: column;
     align-items: center;
     margin-top: 10em;
`

const ProgressText = styled.h4 `
    font-weight: 800;
`

export default function CircularIndeterminate({loadingText}) {
  return (
    <Container>
      <CircularProgress />
      <ProgressText>
         {loadingText || 'Loading ... '}
      </ProgressText>
    </Container>
  );
}

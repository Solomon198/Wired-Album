import * as React from 'react';
import {Container,Spinner,ProgressText} from './spinner.components'
import PropTypes  from 'prop-types';

export default function CircularIndeterminate({loadingText}) {
  return (
    <Container>
      <Spinner color="inherit"/>
      <ProgressText>
         {loadingText || 'Loading ... '}
      </ProgressText>
    </Container>
  );
}

CircularIndeterminate.propTypes = {
  loadingText: PropTypes.string
}
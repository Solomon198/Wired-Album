import * as React from 'react';
import {Alert,Button,Stack} from '@mui/material';
import  PropTypes  from 'prop-types';




export default function ActionAlerts({message,type,onClick}) {
  return (
    <Stack data-testid="alert-component" sx={{ width: '100%' }} spacing={2}>
      <Alert
        severity={type || 'error' }
        action={
          <Button onClick={onClick} color="inherit" size="small">
            RETRY
          </Button>
        }
      >
        {message}
      </Alert>
    </Stack>
  );
}


ActionAlerts.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string,
    onClick:PropTypes.func
}
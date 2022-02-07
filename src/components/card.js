import * as React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
} from '@mui/material';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const MainCard = styled(Card)`
     display: flex;
     justify-content: center;
     align-content: center;
`

export default function CardComponent({isAlbum,title,imageUri,onClick}) {
  return (
    <MainCard sx={{ maxWidth: 345, minHeight: 100 }}>
      <CardActionArea onClick={onClick}>
       {isAlbum && (<CardMedia
          component="img"
          image={imageUri}
          alt="green iguana"
        />)}
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MainCard>
  );
}

// eslint-disable-next-line react/no-typos
CardComponent.propTypes = {
    isAlbum: PropTypes.bool,
    title: PropTypes.string.isRequired,
    imageUri: PropTypes.string,
    onClick: PropTypes.func
}

import * as React from 'react';
import PropTypes from 'prop-types';
import {
      Album,
      Image,
      AlbumTitle,
      Link,
      Gallery,
      PhotoTitle
} from './card.components'


export default function CardComponent({isAlbum,title,imageUri,onClick,btnText}) { 
 
  // Renders list of albums
  if(!isAlbum){
    return (
         
         <Album onClick={onClick} data-testid='albums-card'>
                <Image src="/img/album.png"/>
                <AlbumTitle>
                  {title}
                </AlbumTitle>
                <Link onClick={onClick}>View Album</Link>
        </Album>
    )
  }

  // Renders Photos in an album
  return (
        <Gallery data-testid='album-photos-card'>
                <Image src={imageUri}/>
                <PhotoTitle>
                    {title}
                </PhotoTitle>
        </Gallery>
  );
}

// eslint-disable-next-line react/no-typos
CardComponent.propTypes = {
    isAlbum: PropTypes.bool,
    title: PropTypes.string.isRequired,
    imageUri: PropTypes.string,
    onClick: PropTypes.func
}

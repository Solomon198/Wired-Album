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


export default function CardComponent({isAlbum,title,imageUri,onClick}) { 
 
  // Renders list of albums
  if(!isAlbum){
    return (
         <Album>
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
        <Gallery>
                <Image src={imageUri}/>
                <PhotoTitle class="description">
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

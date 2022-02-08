import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


const Album = styled.div`
      display: flex;
      flex-wrap: wrap;
      background-color: rgba(0, 0, 0, .1);
      border: 2px solid #f2f2f2;
      padding: 20px;
      border-radius: 4px;
      transition: all .3s ease;
      box-shadow: 0 0 3px rgba(0, 0, 0, .9);
`

const Link = styled.a`
      background: linear-gradient(-45deg,  #23A6D5, #23D5AB);
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      border: 1px solid black;
      padding: 15px 0;
      border-radius: 25px;
      text-align: center;
      flex: 100%;
      cursor: pointer;
`

const AlbumTitle = styled.h1`
     margin: 14px 0;
     font-size: 22px;
     text-align: center;
     letter-spacing: 1px;
     color: #f2f2f2;
     flex: 1;
     border-radius: 5px;
`

const Image = styled.img`
      width: 100%;
      display: block;
`

const Gallery = styled.div`
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
`

const PhotoTitle = styled.div`
      line-height: 1.5;
      font-size: 1.2em;
      padding: 18px;
      background: #48a9cb;
      color: ghostwhite;
      text-align: center;
      letter-spacing: 1px;
`

export default function CardComponent({isAlbum,title,imageUri,onClick}) {


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

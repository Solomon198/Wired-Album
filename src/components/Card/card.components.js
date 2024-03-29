import styled from 'styled-components'


export const Album = styled.div`
      display: flex;
      flex-wrap: wrap;
      background-color: rgba(0, 0, 0, .1);
      border: 2px solid #f2f2f2;
      padding: 20px;
      border-radius: 4px;
      transition: all .3s ease;
      box-shadow: 0 0 3px rgba(0, 0, 0, .9);

`

export const Link = styled.a`
      background: linear-gradient(-45deg,  #23A6D5, #23D5AB);
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      border: 1px solid black;
      //padding: 15px 0;
      border-radius: 25px;
      text-align: center;
      flex: 100%;
      cursor: pointer;
      height: 40px;
      padding-top: 15px;
      
`

export const AlbumTitle = styled.h1`
     margin: 14px 0;
     font-size: 22px;
     text-align: center;
     letter-spacing: 1px;
     color: #f2f2f2;
     flex: 1;
     border-radius: 5px;
`

export const Image = styled.img`
      width: 100%;
      display: block;
`

export const Gallery = styled.div`
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      background-color: #48a9cb;
`

export const PhotoTitle = styled.div`
      line-height: 1.5;
      font-size: 1.2em;
      padding: 18px;
      color: ghostwhite;
      text-align: center;
      letter-spacing: 1px;
`
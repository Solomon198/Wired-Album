import React,{useEffect,useState,} from 'react';
import Components from './components/index';
import PhotoAlbum from '@mui/icons-material/Photo';
import ArrowBack from '@mui/icons-material/ArrowBack'
import AlbumActions from './actions/albums/albums';
import Utils from './utils/utils';
import {
    MainContainer,
    ErrorContainer,
    Wrapper,
    AlbumContainer,
    AlbumsContainer
  } from './App.components';




function App() {
  const [isLoading, setLoading] = useState(false); // toggles spinner
  const [albums, setAlbums] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [album, setAlbum] = useState([]);
  const [rawAlbum,setRawAlbum] = useState([]);


  const handleGetAlbums = async ()=>{
      setLoading(true);
      setErrorMessage('');
      const {success,data} =  await AlbumActions.GetAlbums();
      if(success){
        setAlbums(data);
      }else{ 
        setErrorMessage(data);
      }
      setLoading(false);
  }

  /**
   * 
   * @param {Album} album 
   */
  const handleSelectedAlbum = (album)=> {
    setSelectedAlbum(album);
    handleGetAlbum(album.id)
  }

  const handleBackAction = ()=> {
    if(selectedAlbum){
      setSelectedAlbum(null);
    }
  }
  
  /**
   * 
   * @param {string} search 
   *  
   */
  const DoSearch = (search)=> {
    if(!search.trim()) return setAlbum(rawAlbum);
    const searchResult  = Utils.SearchAlbum(search,rawAlbum);
    setAlbum(searchResult);
  }


  /**
   * 
   * @param {string} albumId 
   *  
   */
  const handleGetAlbum = async (albumId)=> {
      setLoading(true);
      setErrorMessage('');
      const {success,data} =  await AlbumActions.GetAlbum(albumId);
      if(success){
        setAlbum(data);
        setRawAlbum(data);
      }else{ 
        setErrorMessage(data);
      }
      setLoading(false);
  }
  

  useEffect(()=>{
     // Gets all albums
     handleGetAlbums();
  },[])

  const HeaderComponent = ()=> {
    const title = selectedAlbum ? selectedAlbum.title : 'WiredAlbum';
    const icon = selectedAlbum ? <ArrowBack/> : <PhotoAlbum/>;
    const search = selectedAlbum ? true : false;
    return (
      <Components.AppBar 
        onClick={handleBackAction}
        title={title} 
        IconComponent={icon}
        search = {search}
        onChangeText={(text)=> DoSearch(text)}
      />
    )
  }

  const ErrorMessageComponent = ()=> {
     const retryAction = selectedAlbum ? handleGetAlbum.bind(null,selectedAlbum.id) : handleGetAlbums;
     return (
      <ErrorContainer>
         <Components.Alert onClick={retryAction} message={errorMessage}/>
      </ErrorContainer>
     )
  }

  const SpinnerLoadingComponent = ()=> {
    const loadingText = selectedAlbum ? 'Loading Album' : 'Loading Albums';
    return <Components.Spinner  loadingText={loadingText}/>
  }



  const AlbumsRenderComponent = ()=> {
        /**
         * @type Album[]
         */
        const $albums = albums;
        return (
          <Wrapper>
              <AlbumsContainer>
              {
                $albums.map((item,index)=>
                  <AlbumContainer key={index.toString()}>
                    <Components.Card  onClick={handleSelectedAlbum.bind(null,item)}  title={item.title}/>
                  </AlbumContainer>
                )
              }
              </AlbumsContainer>
         </Wrapper>
        )
  }


const AlbumRenderComponent = ()=> {
     /**
     * @type Photo[]
     */
    const $album = album;
    return (
      <Wrapper>
          <AlbumsContainer>
          {
            $album.map((item,index)=>
              <AlbumContainer key={index.toString()}>
                <Components.Card 
                  isAlbum 
                  imageUri={item.thumbnailUrl}  
                  title={item.title}/>
              </AlbumContainer>
            )
          }
          </AlbumsContainer>
      </Wrapper>
    )
}

 
  return (
    <MainContainer>
      {HeaderComponent()}
      {isLoading && SpinnerLoadingComponent()}
      {errorMessage && ErrorMessageComponent()}
      {!isLoading && selectedAlbum && !errorMessage &&  AlbumRenderComponent()}
      {!isLoading && !selectedAlbum && !errorMessage && AlbumsRenderComponent()}
    </MainContainer>
  );
}

export default App;

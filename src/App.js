import React,{useEffect,useState,} from 'react';
import styled from 'styled-components';
import Components from './components/index';
import PhotoAlbum from '@mui/icons-material/Photo';
import ArrowBack from '@mui/icons-material/ArrowBack'
import AlbumActions from './actions/albums';
import Utils from './utils/helpers'


const MainContainer = styled.div` 
    
`
const Wrapper = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 7em;
`
const AlbumsContainer = styled.div`
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
`

const AlbumContainer = styled.div`
      width: 30%;
      margin: 10px 0px;
`

const ErrorContainer = styled.div`
      width: 50%;
      margin: 10em auto;
`

function App() {
  const [isLoading, setLoading] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [album, setAlbum] = useState([]);
  const [rawAlbum,setRawAlbum] = useState([])

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


  const handleSelectedAlbum = (album)=> {
    setSelectedAlbum(album);
    handleGetAlbum(album.id)
  }

  const handleBackAction = ()=> {
    if(selectedAlbum){
      setSelectedAlbum(null);
    }
  }

  const DoSearch = (search)=> {
    if(!search.trim()) return setAlbum(rawAlbum);
    const searchResult  = Utils.SearchAlbum(search,rawAlbum);
    setAlbum(searchResult);
  }

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
        return (
          <Wrapper>
              <AlbumsContainer>
              {
                albums.map((item,index)=>
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
    return (
      <Wrapper>
          <AlbumsContainer>
          {
            album.map((item,index)=>
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

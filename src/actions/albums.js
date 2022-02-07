import axios from 'axios';


async function GetAlbums(userId=1){
  try{
     const response = await axios.get(`/users/${userId}/albums`);
     return {success: true,data: response.data}
  }catch(e){
    return {success: false,data: `Could not fetch albums, ${e.message}`}
  }
}

async function GetAlbum(albumId){
    try{
        const response = await axios.get(`/albums/${albumId}/photos`);
        return {success: true,data: response.data}
     }catch(e){
       return {success: false,data: `Could not fetch album Information, ${e.message}`}
     }
}

const Actions = {GetAlbums,GetAlbum};
export default Actions
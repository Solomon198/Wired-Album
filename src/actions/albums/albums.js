import axios from 'axios';

/**
 * Get list of all albums
 * @param {string} [userId] - id of the user to get album 
 * @returns {{success: string, data: Album} All albums
 */
async function GetAlbums(userId=1){
  try{
     const response = await axios.get(`/users/${userId}/albums`);
     return {success: true,data: response.data}
  }catch(e){
    return {success: false,data: `Could not fetch albums, ${e.message}`}
  }
}

/**
 * Get list of photos in an album
 * @param {string} [albumId] - id of the album 
 * @returns {{success: string, data: Photo}} All albums
 */
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
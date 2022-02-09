import mockAxios from 'jest-mock-axios';
import ApiCalls from './albums';
import {Album,Albums} from '../../_mocks_/mock.data';
import axios from 'axios';

beforeAll(()=>{
    axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
})
afterEach(() => {
    mockAxios.reset();
  });
describe('Should ensure API endpoints returns appropriate data',()=>{
 
    test('It should get all albums',async ()=>{
        mockAxios.get.mockResolvedValueOnce(Albums);
        const {data,success} = await ApiCalls.GetAlbums(1);
        const {title,userId,id} = data[0];
        expect(title).toBeDefined();
        expect(userId).toBeDefined();
        expect(id).toBeDefined();
        expect(success).toBe(true);
        return;  
    })

    test('It should get all photos and title in an album',async ()=>{
        mockAxios.get.mockResolvedValueOnce(Album);
        const {data,success} = await ApiCalls.GetAlbum(1);
        const {title,thumbnailUrl,url,id,albumId} = data[0];
        expect(title).toBeDefined();
        expect(thumbnailUrl).toBeDefined();
        expect(url).toBeDefined();
        expect(success).toBe(true);
        expect(id).toBeDefined();
        expect(albumId).toBeDefined();
        return;
     })
})


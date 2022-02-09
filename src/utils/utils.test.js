import Utils from './utils';
import {Album} from '../_mocks_/mock.data'


describe('Should test Search function to meet all requirement',()=>{

    test('Should return number empty array if photo title does not contain search string',()=>{
        const searchResult = Utils.SearchAlbum('pun',Album);
        const searchEmptyString = Utils.SearchAlbum('',Album);
        expect(searchEmptyString.length).toEqual(0);
        expect(searchResult.length).toEqual(0)
    })

    test('Should return two search result since "fun" is found in two photos and title should be an object since the title is now wrapped in a JSX expression',()=>{
        const searchResult = Utils.SearchAlbum('fun',Album);
        expect(searchResult.length).toEqual(2);
        expect(typeof searchResult[0].title).toBe('object')
    })

    test('Should return three search result since "ecau" is found in two photos and title should be an object since the title is now wrapped in a JSX expression',()=>{
        const searchResult = Utils.SearchAlbum('ecau',Album);
        expect(searchResult.length).toEqual(3);
        expect(typeof searchResult[0].title).toBe('object');
    })

    test('Should return empty search result since "mun" is not found in any photos even if "mu n", it will not be matched and title should be an object since the title is now wrapped in a JSX expression',()=>{
        const searchResult = Utils.SearchAlbum('mun',Album);
        expect(searchResult.length).toEqual(0);
    })
})
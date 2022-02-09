import { cleanup, render, screen} from '@testing-library/react';
import Card from './card';

afterEach(cleanup)

describe('Should test App component correctly',()=>{

    test('Should ensure title for card is rendered correctly', () => {
         render(<Card  IconComponent={<></>} title='Over the year'/>);
         const linkElement = screen.getByText('Over the year');
         expect(linkElement).toBeInTheDocument();
    });

    test('Should ensure that component renders view for rendering albums if "isAlbum is not set"', () => {
        render(<Card  IconComponent={<></>} title='Over the year'/>);
        const linkElement = screen.queryByTestId('albums-card');
        const linkElement2 = screen.queryByTestId('album-photos-card');
        expect(linkElement).toBeTruthy();
        expect(linkElement2).toBeNull();
   });

   test('Should ensure that component  renders view for rendering photos for album if "isAlbum is  set"', () => {
    render(<Card isAlbum  IconComponent={<></>} title='Over the year'/>);
    const linkElement = screen.queryByTestId('albums-card');
    const linkElement2 = screen.queryByTestId('album-photos-card');
    expect(linkElement).toBeNull();
    expect(linkElement2).toBeTruthy();
});
 
 })
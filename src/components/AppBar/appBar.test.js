import { cleanup, render, screen} from '@testing-library/react';
import AppBar from './appBar';

afterEach(cleanup)

describe('Should ensure App title is rendered in appBar',()=>{
   
   test('Should ensure appBar title changes to whatever prop is passed to it', () => {
        render(<AppBar IconComponent={<></>} title='AppName'/>);
        const linkElement = screen.getByText(/AppName/i);
        expect(linkElement).toBeInTheDocument();
   });

   test('Should ensure the searchbar is seen if "search" prop is true', () => {
      render(<AppBar search IconComponent={<></>} title='AppName'/>);
      const linkElement = screen.queryByTestId('search-component');
      expect(linkElement).toBeTruthy();
   });

   test('Should ensure the searchbar is not seen if "search" prop is false', () => {
      render(<AppBar IconComponent={<></>} title='AppName'/>);
      const linkElement = screen.queryByTestId('search-component');
      expect(linkElement).toBeNull();
   });

})
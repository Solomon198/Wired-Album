import { cleanup, render, screen} from '@testing-library/react';
import Spinner from './spinner';

afterEach(cleanup)

describe('Should test Spinner component and verifies it renders loading text correctly',()=>{

    test('Should ensure loading text is rendered correctly', () => {
         render(<Spinner loadingText='Loading Album'/>);
         const linkElement = screen.getByText('Loading Album');
         expect(linkElement).toBeInTheDocument();
    });
 
 })
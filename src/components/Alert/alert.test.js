import { cleanup, render, screen } from '@testing-library/react';
import Alert from './alert';

afterEach(cleanup)

describe('Should test alert component correctly',()=>{

   test('Should make sure user sees RETRY button and error message when component shows', () => {
        render(<Alert message="we just got an error"/>);
        const linkElement = screen.getByText(/RETRY/i);
        expect(linkElement).toBeInTheDocument();
        expect(screen.getByText('we just got an error')).toBeInTheDocument();
   });
})
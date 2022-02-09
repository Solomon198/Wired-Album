import { cleanup, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import axios from 'axios';

beforeAll(()=>{
  axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
})
afterEach(cleanup);

describe('Should ensure apps works correctly',()=>{
  test('renders app name correctly and it should  show loader and renders recieved albums', async() => {
   render(<App />);
    
    const linkElement = screen.getByText(/WiredAlbum/i);
    const loader = screen.getByText('Loading Albums');
    expect(loader).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    return;
  });
})


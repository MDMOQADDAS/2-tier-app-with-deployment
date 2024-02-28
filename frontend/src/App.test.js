import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App component', () => {
  test('renders correctly', () => {
    render(<App />);
    expect(screen.getByText('Hello 👋🏼')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your name ...')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

 
  test('displays response message after form submission', async () => {
    render(<App />);
    
    // Mocking fetch to return a specific response
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () => Promise.resolve({ message: 'Response message' }),
    });
  
    const nameInput = screen.getByPlaceholderText('Enter your name ...');
    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.submit(screen.getByTestId('form'));
  
    // Wait for response to be displayed
    await waitFor(() => {
      expect(screen.getByText('Response message')).toBeInTheDocument();
    });
  });
  

 
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the application layout', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /informações importantes/i })).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toBe(2);
  });
});

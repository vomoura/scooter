import React from 'react';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders scooter image', () => {
    render(<Hero />);
    expect(screen.getByAltText(/scooter/i)).toBeInTheDocument();
  });
});

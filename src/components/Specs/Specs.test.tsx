import React from 'react';
import { render, screen } from '@testing-library/react';
import { Specs } from './Specs';

describe('Specs', () => {
  it('renders the list of specifications', () => {
    render(<Specs />);
    expect(screen.getByRole('heading', { name: /informações importantes/i })).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBeGreaterThan(0);
  });
});

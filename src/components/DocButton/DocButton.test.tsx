import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DocButton } from './DocButton';

describe('DocButton', () => {
  it('calls window.open with the given href when clicked', () => {
    const openSpy = jest.fn();
    // @ts-ignore
    window.open = openSpy;
    render(<DocButton href="https://example.com">Open</DocButton>);
    fireEvent.click(screen.getByRole('button', { name: /open/i }));
    expect(openSpy).toHaveBeenCalledWith('https://example.com', '_blank', 'noopener,noreferrer');
  });
});

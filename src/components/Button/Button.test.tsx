import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should render with children and onClick functionality', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);

    const button = screen.getByRole('button', { name: /Click me/i });
    expect(button).toBeVisible();

    fireEvent.click(button);
    expect(onClick).toBeCalled();
  });

  it('should render with an aria label, regardless of child content', () => {
    const onClick = jest.fn();
    render(<Button ariaLabel='click me' onClick={onClick} />);

    expect(screen.getByRole('button', { name: /Click me/i })).toBeVisible();
  });
});

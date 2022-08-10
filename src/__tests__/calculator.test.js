import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../components/calculator';
import Renderer from 'react-test-renderer';

describe('Calculator', () => {
  it('Renders Calculator', () => {
    const renderobject = Renderer.create(<Calculator/>).toJSON();
    expect(renderobject).toMatchSnapshot();
  });

  it('Adding two numbers', () => {
    render(<Calculator/>);
    fireEvent.click(screen.getByRole('button', { name: '7'}));
    fireEvent.click(screen.getByRole('button', { name: '+'}));
    fireEvent.click(screen.getByRole('button', { name: '6'}));
    fireEvent.click(screen.getByRole('button', { name: '='}));

    expect(screen.getByText('13')).toBeTruthy();
  });

  it('Subtracting two numbers', () => {
    render(<Calculator/>);
    fireEvent.click(screen.getByRole('button', { name: '2'}));
    fireEvent.click(screen.getByRole('button', { name: '6'}));
    fireEvent.click(screen.getByRole('button', { name: '-'}));
    fireEvent.click(screen.getByRole('button', { name: '6'}));
    fireEvent.click(screen.getByRole('button', { name: '='}));

    expect(screen.getByText('20')).toBeTruthy();
  });

  it('Multiplying two numbers', () => {
    render(<Calculator/>);
    fireEvent.click(screen.getByRole('button', { name: '2'}));
    fireEvent.click(screen.getByRole('button', { name: 'x'}));
    fireEvent.click(screen.getByRole('button', { name: '6'}));
    fireEvent.click(screen.getByRole('button', { name: '='}));

    expect(screen.getByText('12')).toBeTruthy();
  });

  it('Dividing two numbers', () => {
    render(<Calculator/>);
    fireEvent.click(screen.getByRole('button', { name: '1'}));
    fireEvent.click(screen.getByRole('button', { name: '0'}));
    fireEvent.click(screen.getByRole('button', { name: '÷'}));
    fireEvent.click(screen.getByRole('button', { name: '5'}));
    fireEvent.click(screen.getByRole('button', { name: '='}));

    expect(screen.getAllByText('2')).toBeTruthy();
  });

});
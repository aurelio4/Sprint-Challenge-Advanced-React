import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react'

beforeEach(() => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null)
    },
    writable: true
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('Toggles Dark Mode', () => {
  const { getByText } = render(<App />)
  const darkModeButton = getByText("Toggle Dark Mode")
  fireEvent.click(darkModeButton)
  expect(window.localStorage.setItem).toHaveBeenCalledTimes(1)
})
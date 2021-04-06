import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import Clicks from './Clicks'

test('shows header from props', () => {
  render(<Clicks header='hi there'/>)
  const heading = screen.getByRole('heading')
  expect(heading.textContent).toEqual('hi there')
})

test('clicking button increases count', () => {
  render(<Clicks header='hi there'/>)
  const count = screen.getByTestId('count')
  expect(count.textContent).toEqual('0')
  const button = screen.getByRole('button')
  fireEvent.click(button)
  expect(count.textContent).toEqual('1')
})

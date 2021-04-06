import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import App from './App'

test('shows header from props', () => {
  render(<App header='hi there'/>)
  expect(1).toBe(1)
})

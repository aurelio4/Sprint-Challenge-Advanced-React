import React from 'react'
import PlayerCard from './PlayerCard'
import { render, fireEvent } from '@testing-library/react'

it('PlayerCard renders', () => {
  render(<PlayerCard />)
})
import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import Calculator from '../src/Calculator'

describe('Calculator', () => {
  it('should render', () => {
    render(<Calculator />)
  })
})

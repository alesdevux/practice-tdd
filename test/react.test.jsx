import { render } from '@testing-library/react'
import { describe, it } from 'vitest'

describe('Calculator', () => {
  it('should render', () => {
    render(<Calculator />)
  })
})

import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Calculator from '../src/Calculator'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const operators = ['+', '-', '*', '/']

describe('Calculator', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<Calculator />)
  })

  it('should render title correctly', () => {
    render(<Calculator />)
    screen.getByText('Calculator')
  })

  it('should render numbers', () => {
    render(<Calculator />)
    numbers.forEach(number => screen.getByText(number))
  })

  it('should render 4 rows', () => {
    render(<Calculator />)
    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(4)
  })

  it('should render operators', () => {
    render(<Calculator />)
    operators.forEach(operator => screen.getByText(operator))
  })

  it('should render equal sign', () => {
    render(<Calculator />)
    screen.getByText('=')
  })

  it('should render an input', () => {
    render(<Calculator />)
    screen.getByRole('textbox')
  })

  it('should input is readOnly', () => {
    render(<Calculator />)
    const input = screen.getByRole('textbox')
    expect(input.getAttribute('readOnly')).not.toBe(null)
  })

  it('should user input after clicking a number', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1')
  })

  it('should user input after clicking several numbers', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const two = screen.getByText('2')
    fireEvent.click(two)

    const three = screen.getByText('3')
    fireEvent.click(three)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('123')
  })

  it('should user input after clicking numbers and operators', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    const two = screen.getByText('2')
    fireEvent.click(two)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1+2')
  })

  it('should return a result after clicking equal sign', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    const plus = screen.getByText('+')
    const two = screen.getByText('2')
    const equal = screen.getByText('=')

    fireEvent.click(one)
    fireEvent.click(plus)
    fireEvent.click(two)
    fireEvent.click(equal)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('3')
  })
})

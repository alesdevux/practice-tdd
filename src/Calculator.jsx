import { useState } from 'react'
import { evaluate } from 'mathjs'

const rows = [
  [7, 8, 9, '/'],
  [4, 5, 6, '*'],
  [1, 2, 3, '-'],
  [0, '=', '+']
]

const Calculator = () => {
  const [value, setValue] = useState('')

  const createHandlerCell = (cell) => {
    const signEqual = cell === '='
    signEqual ? setValue(evaluate(value)) : setValue(value + cell)
  }

  return (
    <>
      <h1>Calculator</h1>
      <input value={value} readOnly />
      <div role='grid'>
        {rows.map((row, rowIndex) => (
          <div role='row' key={rowIndex}>
            {row.map((cell) => (
              <button
                role='cell' key={cell}
                onClick={() => createHandlerCell(cell)}
              >
                {cell}
              </button>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
export default Calculator

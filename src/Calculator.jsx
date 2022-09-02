import { useState } from 'react'

const rows = [
  [7, 8, 9, '/'],
  [4, 5, 6, '*'],
  [1, 2, 3, '-'],
  [0, '=', '+']
]

const Calculator = () => {
  const [value, setValue] = useState('')

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
                onClick={() => setValue(cell)}
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

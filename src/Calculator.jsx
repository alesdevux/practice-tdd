const rows = [
  [7, 8, 9, '/'],
  [4, 5, 6, '*'],
  [1, 2, 3, '-'],
  [0, '=', '+']
]

const Calculator = () => {
  return (
    <>
      <h1>Calculator</h1>
      <div role='grid'>
        {rows.map((row, rowIndex) => (
          <div role='row' key={rowIndex}>
            {row.map((number) => (
              <span role='number' key={number}>{number}</span>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
export default Calculator

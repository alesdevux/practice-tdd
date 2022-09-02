const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const Calculator = () => {
  return (
    <>
      <h1>Calculator</h1>
      <div>
        {numbers.map(number => (
          <span key={number}>{number}</span>
        ))}
      </div>
    </>
  )
}
export default Calculator

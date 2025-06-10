function Counter({ num, setNum }) {
  return (
    <div>
      <hr />
      <h2>counter component</h2> this counter will increment by 2 {num}
      <div>
        <button onClick={() => setNum(num + 2)}>increase by 2</button>
        <button onClick={() => setNum(num - 2)}>decrease by 2</button>
      </div>
    </div>
  )
}

export default Counter

export default function React() {
  const [count, setCount] = useState<number>(0);

  function _incrementCount() {
    setCount((prevCount: number) => prevCount + 1);
  }

  function _decrementCount() {
    setCount((prevCount: number) => prevCount - 1);
  }
  return (
    <div>
      <button onClick={_incrementCount}>增加</button>
      <button onClick={_decrementCount}>減少</button>
      <p>{count}</p>
    </div>
  );
}

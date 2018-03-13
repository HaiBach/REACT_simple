function NumberList(props) {
  const numbers = props.numbers;

  return (
    <ul>
      { numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
      )}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
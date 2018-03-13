class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {
    this.setState({
      date : new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, moi nguoi !</h1>
        <h2>It is <FormattedDate date={this.state.date} /></h2>
      </div>
    );
  }
}

function FormattedDate(props) {
  return <span>{ props.date.toLocaleTimeString() }</span>
}

function App() {
  return (
    <div>
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
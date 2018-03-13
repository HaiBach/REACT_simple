class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn : true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState( prevState => ({
      isToggleOn : !prevState.isToggleOn
    }));
    console.log('this is : ', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        { this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
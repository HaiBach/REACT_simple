function BoilingVerdict(props) {
  if( props.celsius >= 100 ) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if( Number.isNaN(input) ) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const scaleNames = {
  c : 'celsius',
  f : 'fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // this.setState({ temperature : e.target.value });
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    // const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    return(
      <fieldset>
        <legend>Input temperature in {scaleNames[this.props.scale]} :</legend>
        <input
          value={temperature}
          onChange={this.handleChange}
          />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '', scale: 'c' };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange() {
    console.log('#1');
  }
  handleFahrenheitChange() {
    console.log('#2');
  }
  render() {
    return(
      <div>
        <TemperatureInput
          scale='c'
          onTemperatureChange={this.handleCelsiusChange}
          />
        <TemperatureInput
          scale='f'
          onTemperatureChange={this.handleFahrenheitChange}
          />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
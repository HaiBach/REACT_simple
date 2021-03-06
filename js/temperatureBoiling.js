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
  const rounded = Math.round(output * 10) / 10;
  return rounded.toString();
}

const scaleNames = {
  c : 'celsius',
  f : 'fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    const temperature = this.props.temperature;
    return(
      <fieldset style={{ marginBottom: 20 }}>
        <legend style={{ fontSize: 28 }}>Input temperature in <b style={{ color: 'red' }}>{scaleNames[this.props.scale]}</b> :</legend>
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
    this.state = { temperatureC: '', temperatureF: '' };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }
  handleCelsiusChange(celsius) {
    const temp = tryConvert(celsius, toFahrenheit);
    this.setState({ temperatureC: celsius, temperatureF: temp });
  }
  handleFahrenheitChange(fahrenheit) {
    const temp = tryConvert(fahrenheit, toCelsius);
    this.setState({ temperatureC: temp, temperatureF: fahrenheit });
  }
  render() {
    return(
      <div>
        <TemperatureInput
          scale='c'
          temperature={this.state.temperatureC}
          onTemperatureChange={this.handleCelsiusChange}
          />
        <TemperatureInput
          scale='f'
          temperature={this.state.temperatureF}
          onTemperatureChange={this.handleFahrenheitChange}
          />
        <BoilingVerdict
          celsius={this.state.temperatureC}
        />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));``

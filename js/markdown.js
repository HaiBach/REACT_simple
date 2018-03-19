class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Xin **chao** !' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value});
  }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.text) };
  }

  render() {
    return (
      <section>
        <h1>Convert to MarkDown :</h1>
        <h3>Input</h3>
        <form>
          <textarea
            placeholder="Nhap van ban theo cau truc MarkDown"
            onChange={this.handleChange}
            defaultValue={this.state.text}
            style={{ width: '100%', height: 100, padding: '10px 20px', boxSizing: 'border-box' }}
            />
        </form>
        <h3>Output</h3>
        <div
          className="output"
          style={{fontSize: 32}}
          dangerouslySetInnerHTML={this.getRawMarkup()}
          />
      </section>
    );
  }
}

ReactDOM.render(
  <Markdown />,
  document.getElementById('root')
);
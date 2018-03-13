// Component MyTodoList
class MyTodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo : [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    console.log(e, this);
  }
  handleSubmit(e) {
    console.log('Submit page');
  }

  render() {
    return (
      <div>
        <h1>Todo list :</h1>
        <ul>
        </ul>
        <form>
          <label>Input new list</label>
          <input type="text" onChange={(e) => this.handleChange(e)} />
          <input type="submit" onClick={this.handleSubmit}/>
        </form>
      </div>
    );
  }
}

// Render
ReactDOM.render(
  <MyTodoList />,
  document.getElementById('root')
);
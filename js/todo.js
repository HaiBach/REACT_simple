// Component MyTodoList
class MyTodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: [], text: '', id: 1 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    let todo = this.state.todo;

    // Insert new item
    todo.push(this.state.text);

    this.setState({ todo: todo, text: '', id: this.state.id + 1 });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Todo list :</h1>
        <TodoItems items={this.state.todo} />
        <form>
          <label>Input new list</label>
          <input
            type="text" name="text"
            onChange={(e) => this.handleChange(e)}
            value={this.state.text} />
          <input
            type="submit"
            onClick={this.handleSubmit}
            value={'Add #' + this.state.id } />
        </form>
      </div>
    );
  }
}

class TodoItems extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        { this.props.items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    );
  }
}

// Render
ReactDOM.render(
  <MyTodoList />,
  document.getElementById('root')
);
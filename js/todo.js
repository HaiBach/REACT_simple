// Component MyTodoList
class MyTodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo : [], itemCur: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ itemCur: e.target.value });
  }
  handleSubmit(e) {
    console.log('Submit page');
    let todo = this.state.todo;
    todo.push(this.state.itemCur);
    this.setState({ todo: todo });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Todo list :</h1>
        <TodoItems items={this.state.todo} />
        <form>
          <label>Input new list</label>
          <input type="text" onChange={(e) => this.handleChange(e)} />
          <input type="submit" onClick={this.handleSubmit}/>
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
        {this.props.items.map((item) => <li>{item}</li>)}
      </ul>
    );
  }
}

// Render
ReactDOM.render(
  <MyTodoList />,
  document.getElementById('root')
);
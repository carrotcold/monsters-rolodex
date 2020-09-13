import React, { Component } from 'react';
// React Library는 아래의 HTML을 자바스크립트 파일 안에 구문처럼 사용할 수 있게 해준다.
import './App.css';

// using a class component.
// we actually get access to this thing called "state".
// + 라이브러리에 이미 bulit-in 되어있는 whatever functionality 사용 가능

// class App extends React.Component {
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) =>
            <h1 key={monster.id}>{monster.name}</h1>
          )
        }
      </div>
    );
  }
}

export default App;

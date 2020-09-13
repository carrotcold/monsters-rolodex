import React, { Component } from 'react';
// React Library는 아래의 HTML을 자바스크립트 파일 안에 구문처럼 사용할 수 있게 해준다.
import logo from './logo.svg';
import './App.css';

// using a class component.
// we actually get access to this thing called "state".
class App extends Component {
  constructor() {
    super(); // super 키워드 이후에 this에 접근할 수 있음

    this.state = {
      string: '안녕 당근🥕'
    };
    // this.state를 지정할 수 있는 유일한 공간은 바로 constructor입니다.

    // 이 state 내에 있는 prop들은
    // 외부에서
    // this.state.comment = 'Hello';
    // 이런식으로 직접 수정X
    // this.setState({ key: value });
    // 외부에서는 위와같이 setState 메소드 형태를 사용해야함
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({ string: '잘가 당근😥' })}>Change Text</button>
        </header>
      </div>
    );
  }
}

export default App;

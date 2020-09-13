import React from 'react';
// React Library는 HTML을 자바스크립트 파일 안에 구문처럼 사용할 수 있게 해준다.
import ReactDOM from 'react-dom';
// ReactDOM은 실제로 돔과 인터액션 하는 로봇이고
// 얘는 휴대폰이나 데스트탑앱과 소통하는 로봇으로 대체될 수 있다.
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

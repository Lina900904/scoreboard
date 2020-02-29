import React from 'react';
import  {Header} from './components/Header'
import './App.css'; //글로벌로 정의됨



const Player = (props) => {
  return (
      <div className="player">
            <span className="player-name">
              <button className="remove-player" onClick={ () => props.removePlayer(props.id) }> x </button>
              {props.name}</span>
        <Counter score={props.score}/>
      </div>
  );
}

// 클래스 컴포넌트
class Counter extends React.Component {
  // 클래스 바로 아래에 선언되는 변수는 속성이 된다
  // state = {
  //   score: 0
  // }
  //변수를 초기화 목적
  constructor() {
    //부모의 속성도 초기화시키기 위해 상속함
    super();
    this.state = {
      //클래스에서의 this는 자기자신의 this
      score: 0
    }
    this.handleChange.bind(this);
    //this가 클래스의 this라는것을 bind 해줘야 인식함
  }

  handleChange = delta => {
    console.log(this); // arrow function 에서의 this는 lexical this가 된다.
    console.log('handleChange')
    //값만 변경하고 ui도 렌더링 하려면 반드시 setState로 변경
    this.setState( prevState => ({ score: prevState.score + delta } )); //비동기로 동작
    //리액트 라이브러리가 전 값을 제공함
    //첫번재 파라미터의 이전상태값
  }


  //이벤트 핸들러 오른쪽은 반드시 함수 선언문이 와야한다.
  render() {
    return (
        <div className="counter">
          <button className="counter-action decrement" onClick={ () => this.handleChange(-1) }> - </button>
          <span className="counter-score">{this.state.score}</span>
          <button className="counter-action increment" onClick={ () => this.handleChange(1) }> + </button>
        </div>
    );
  }
}

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ]
  }

  handleRemove = (id) => {
    console.log("handleRemove");
    console.log("id", id);
    //자식은 바구니만 보기 때문에 배열 내용이 달라도 알지못함.. 그래서 filter같은걸 이용해서 새로운 배열을 만들어 리턴해야함
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id);
      return { players } // key vlaue가 같으면 하나 생략 가능 : es6 short hand property
    });
  }

  render() {
    return (
        <div className="scoreboard">
          <Header title="My ScoreBoard" totalPlayers={11}/>
          {
            this.state.players.map(player => (
                <Player name={player.name} score={player.score} key={player.id} id={player.id} removePlayer={this.handleRemove}/> //key는 리액트 내부에서 쓰이므로 전달되지 않음
            ))
          }
        </div>
    );
  }

}

export default App;

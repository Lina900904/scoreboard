import React from 'react';
import {Header} from './components/Header'
import {Player} from './components/Player'

import './App.css'; //글로벌로 정의됨


class App extends React.Component {
    state = {
        players: [
            {name: 'LDK', score: 5, id: 1},
            {name: 'HONG', score: 6, id: 2},
            {name: 'KIM', score: 7, id: 3},
            {name: 'PARK', score: 8, id: 4},
        ]
    }

    handleRemove = (id) => {
        console.log("handleRemove");
        console.log("id", id);
        //자식은 바구니만 보기 때문에 배열 내용이 달라도 알지못함.. 그래서 filter같은걸 이용해서 새로운 배열을 만들어 리턴해야함
        this.setState(prevState => {
            const players = prevState.players.filter(player => player.id !== id);
            return {players} // key vlaue가 같으면 하나 생략 가능 : es6 short hand property
        });
    }

    handleChangeScore = (id, delta) => {
        console.log("changeSocre", id + "," + delta)

        this.setState(prevState => {
            //딥카피 새로운 똑같은 배열을 만듬 ( [ ... ] )
            const players = [...prevState.players];
            players.forEach(players => {
                if (players.id === id) {
                    players.score += delta;
                }
            })
            return {players}
        })
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title="My ScoreBoard" totalPlayers={11}/>
                {
                    this.state.players.map(player => (
                        <Player name={player.name} score={player.score} key={player.id} id={player.id}
                                removePlayer={this.handleRemove} changeScore={this.handleChangeScore}/>//key는 리액트 내부에서 쓰이므로 전달되지 않음
                    ))
                }
            </div>
        );
    }

}

export default App;

import React from "react";

export class Stopwatch extends React.Component {
    tickRdf;
    state = {
        isRunning : false,
        timer : 0
    }

    handleStopwatch = () => {
        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }))
    }
    render() {
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{this.state.timer}</span>
                {/*conditional Rendering*/}
                <button onClick={this.handleStopwatch}>{ this.state.isRunning ? 'Stop' : 'Start'}</button>
                <button>Reset</button>
            </div>
        )
    }
    tick = () => {
        if(this.state.isRunning){
            this.setState(prevState =>({
                timer: prevState.timer + 1
            }))
        }

    }
    //Dom이 렌더링된 직후에 리액트가 호출
    //예) REst API 콜, 외부 라이브러리 로딩
    componentDidMount() {
        const tickRdf = setInterval(this.tick, 1000);
    }

    //Dom이 파괴되기 직전에 호출
    //예) 리소스 해제
    componentWillMount() {
        clearInterval(this.tickRdf);
    }

}
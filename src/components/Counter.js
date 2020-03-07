import React from "react";
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";

export class Counter extends React.Component {
    // 클래스 바로 아래에 선언되는 변수는 속성이 된다
    // state = {
    //   score: 0
    // }
    //변수를 초기화 목적s
/*    constructor() {
        //부모의 속성도 초기화시키기 위해 상속함
        super();
        this.state = {
            //클래스에서의 this는 자기자신의 this
            score: 0
        }
        this.handleChange.bind(this);
        //this가 클래스의 this라는것을 bind 해줘야 인식함
    }*/


    handleChange = delta => {
        console.log(this); // arrow function 에서의 this는 lexical this가 된다.
        console.log('handleChange')
        //값만 변경하고 ui도 렌더링 하려면 반드시 setState로 변경
        this.setState(prevState => ({score: prevState.score + delta})); //비동기로 동작
        //리액트 라이브러리가 전 값을 제공함
        //첫번재 파라미터의 이전상태값
    }

    //이벤트 핸들러 오른쪽은 반드시 함수 선언문이 와야한다.
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.props.changeScore(this.props.id, -1)}> -</button>
                <span className="counter-score">{this.props.score}</span>
                <button className="counter-action increment"  onClick={() => this.props.changeScore(this.props.id, 1)}> +</button>
            </div>
        );
    }
}

//(액션을 디스패치하는) 펑션을 props로 맵핑하겠다
const mapActionToProps = (dispatch) => ({
    //왼쪽 props, 오른쪽은 펑션
    changeScore: (id, delta) => dispatch(changeScore(id, delta))
})
//()() 펑션이 두번 커링펑션
//Hoc : High Order Component : 컴포넌트를 입력으로 넣어서 새로운 기능을 추가한 신규 컴포넌트를 생성
export default connect(null, mapActionToProps) (Counter);

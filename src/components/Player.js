import React from "react";
import Counter from './Counter'
import {connect} from "react-redux";
import {removePlayer} from "../redux/actions";
//디폴트 엑스포트 하면 {} 쓰면안됨
// 네임드 익스포트하면 {} 써야함

export const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
              <button className="remove-player" onClick={() => props.removePlayer(props.id)}> x </button>
                {props.name}</span>
            <Counter score={props.score} id={props.id} changeScore={props.changeScore}/>
        </div>
    );
}

//(액션을 디스패치하는) 펑션을 props로 맵핑하겠다
const mapActionToProps = (dispatch) => ({
    //왼쪽 props, 오른쪽은 펑션
    removePlayer: (id) => dispatch(removePlayer(id))
})
//()() 펑션이 두번 커링펑션
//Hoc : High Order Component : 컴포넌트를 입력으로 넣어서 새로운 기능을 추가한 신규 컴포넌트를 생성
export default connect(null, mapActionToProps) (Player);


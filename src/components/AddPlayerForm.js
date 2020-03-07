import React from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

export class AddPlayerForm extends React.Component {
    state = {
        value: ''
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    handleSubmit = (e) => {
        //submit의 기본 이벤트 막기
        //버튼 클릭시 깜빡일때
        e.preventDefault();
       // e.stopPropagation() 이벤트 버블링 막기

        this.props.addPlayer(this.state.value);
    }



    render() {
        return (
            <form noValidate action="" className="form" onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange}
                       value={this.state.value} className="input" placeholder="enter a player name" /*required*//>
                <input type="submit" className="input" value="Add Player"/>
            </form>
        );
    }




}


const mapActionToProps = (dispatch) => ({
    //왼쪽 props, 오른쪽은 펑션
    addPlayer: (name) => dispatch(addPlayer(name))
})


export default connect(null, mapActionToProps) (AddPlayerForm);

//입력 파라메터에 json 객체가 들어가고 이 객체가 state를 구성한다
import {combineReducers} from "redux";
import {player} from "./player";

export const allReducers = combineReducers({
    player,


})
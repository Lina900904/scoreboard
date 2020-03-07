import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "../actionTypes";

const playerIinitialState = {
    players: [
        {name: 'LDK', score: 5, id: 1},
        {name: 'HONG', score: 6, id: 2},
        {name: 'KIM', score: 7, id: 3},
        {name: 'PARK', score: 8, id: 4},
    ]
}

let maxid = 4;

export const player = (state = playerIinitialState, action) => {
    let players = null;
    switch (action.type) {
        case ADD_PLAYER:
            players = [...state.players]; //기존배열을 딥카페하여 새로운 배열을 생성
            players.push({
                name: action.name,
                score: 0,
                id: ++maxid
            })
            return {
                ...state,
                players
            }

        case CHANGE_SCORE:
            players = [...state.players]; //기존배열을 딥카페하여 새로운 배열을 생성
            players.forEach(player => {
                    if (player.id === action.id) {
                        player.score += action.delta
                    }
                }
            )
            return {
                ...state,
                players
            }

        case REMOVE_PLAYER :
            players = state.players.filter(player => player.id !== action.id);

            return {
                ...state,
                players
            }
    }
    return state;
}




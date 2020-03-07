import React from 'react';
import _ from 'lodash'

export const Statistics = (props) => {
    /*   let totalPoint = 0;
      //로직 구현
     props.players.forEach(item => {
          totalPoint += item.score;
      })*/

    //lodash를 이용한 합계 구하기
    let totalPoint = _.sumBy(props.players, 'score');
    let totalPlayer = props.players.length;

    return (
        <table className="stats">
            <tbody>
            <tr>
                <td>Players</td>
                <td>{totalPlayer}</td>
            </tr>
            <tr>
                <td>Total Point</td>
                <td>{totalPoint}</td>
            </tr>
            </tbody>
        </table>
    )
}
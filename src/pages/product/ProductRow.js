import React from 'react';
import classNames from 'classnames';
import './ProductRow.css';

export const ProductRow = (props) => {
    return (
            <tr className={classNames({'stock': !props.stocked})}>
                <td>{props.name}</td>
                <td>{props.price}</td>
            </tr>
    )
}
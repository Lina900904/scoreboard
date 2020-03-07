import React from 'react';
import {ProductCategoryRow} from "./ProductCategoryRow";
import {ProductRow} from "./ProductRow";
import _ from "lodash";

export const ProductTable = (props) => {

    const category = _.groupBy(props.products, 'category');
    console.log(category)

    const categoryList = [];

    //json 객체를 for 문돌리는 in
    for(let key in category){
        categoryList.push(<ProductCategoryRow caregory={key} key={key}/>);
        category[key].forEach(item => {
            categoryList.push(<ProductRow price={item.price} name={item.name} stacked={item.stack} key={item.name}/>);
        })
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
                {categoryList}
            </tbody>
        </table>

    )
}
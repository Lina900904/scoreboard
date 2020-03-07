import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Heroes} from "./Heroes";
import {ScoreBoard} from "./ScoreBoard";
import {Product} from "./Product";
import {Menu} from "./Menu";

export const Root = (props) => {
    return (
        <BrowserRouter>
            <Menu></Menu>
            {/*path에 해당하는 컴포넌트를 매핑*/}
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/heroes" component={Heroes}></Route>
                <Route path="/scoreboard" component={ScoreBoard}></Route>
                <Route path="/product" component={Product}></Route>
            </Switch>
        </BrowserRouter>
    );
}
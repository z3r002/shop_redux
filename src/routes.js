import React from "react";
import {AuthPage} from "./pages/AuthPage";
import BasketPage from "./pages/BasketPage";
import Home from "./pages/HomePage";
import {Redirect, Switch, Route} from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";


export const useRoutes = isAuth => {
    if (isAuth) {
        return (
            <Switch>
                <Route path='/basket' exact>
                    <BasketPage/>
                </Route>
                <Route path='/home' exact>
                    <Home/>
                </Route>
                <Route path='/details' exact>
                    <DetailsPage/>
                </Route>
                {/*<Route path='/details' render={props => <DetailsPage  {...props} state={data}/>}>*/}
                {/*    <DetailsPage/>*/}
                {/*</Route>*/}

                <Redirect to='/home'/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path='/' exact>
                <AuthPage/>
            </Route>
            <Redirect to='/'/>

        </Switch>
    )
}
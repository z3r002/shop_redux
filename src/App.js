import './style/App.css';
import {BrowserRouter as Router} from 'react-router-dom'

import React from "react";
import {useRoutes} from "./routes";
import NavBar from "./NavBar";

export default function  Homer(){
    const routes = useRoutes(true)

    return(
        <Router>
            <NavBar/>
            <div>{routes}</div>
        </Router>
    )
}




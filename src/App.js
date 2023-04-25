import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {QueryClientProvider} from '@tanstack/react-query'
import "./css/bootstrap.css";

import churchService from "./Services/ChurchService";

import Home from "./Presentation/Home";
import About from "./Presentation/About";
import NotFound from "./Presentation/PageNotFound"
import Events from "./Presentation/Events"
import Contact from "./Presentation/Contact"

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/Events',
        element: <Events ChurchService={churchService} />
    },
    {
        path: '/About',
        element: <About />
    },
    {
        path: '/Contact',
        element: <Contact />
    },
    {
        path: '*',
        element: <NotFound />
    }
];

function App(): JSX.Element {
    return (
        <div className="App">
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))}
            </Routes>
        </div>
    );
}

export default App;

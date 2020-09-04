import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Header } from './components';
import Home from './views/Home';
import Register from './views/Register';

function App() {
    const location = useLocation();
    return (
        <>
            <Header />
            <main>
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                        <Route exact path="/" component={Home} />
                        <Route path="/register" component={Register} />
                    </Switch>
                </AnimatePresence>
            </main>
        </>
    );
}

export default App;

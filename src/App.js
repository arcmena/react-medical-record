import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components';
import Home from './views/Home';
import Register from './views/Register';

function App() {
    return (
        <>
            <Header />
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/register" component={Register} />
                </Switch>
            </main>
        </>
    );
}

export default App;

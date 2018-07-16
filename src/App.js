import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './HomePage'

class App extends Component {

    state = {
        /* ... */
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={HomePage} />
                </Switch>
            </Router>
        )
    }

}

export default App

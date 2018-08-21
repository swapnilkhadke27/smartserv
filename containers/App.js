import React, {Component} from 'react';
import Dashboard from './Dashboard'
import Details from './Details'
import EmailModal from './EmailModal'
import {render} from 'react-dom'
import {BrowserRouter as Router, Switch , Route, browserHistory} from 'react-router-dom'

export default class App extends Component {
    render () {
        return(
            <Router history={browserHistory}>
                <Switch>
                    <Route exact path='/' component={Dashboard}/>
                    <Route path='/details/' component={Details}/>
                </Switch>
            </Router>
        )
    }
}

render(<App/>, window.document.getElementById('app'));
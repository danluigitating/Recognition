import React, {Component} from 'react'
import './App.css'
import NavBar from './component/NavBar'
import CreateContainer from './containers/CreateContainer'
import {Route, Switch} from 'react-router-dom'
import SearchContainer from './containers/SearchContainer'
import ReportContainer from './containers/ReportContainer'
import ApproveContainer from './containers/ApproveContainer'
import drawerMenu from './constants/drawerMenu'

class App extends Component {
    render() {
        return (
            <div>
                <NavBar drawerMenu={drawerMenu}/>
                <Switch>
                    <Route exact path="/" component={CreateContainer}/>
                    <Route path="/create" component={CreateContainer}/>
                    <Route path="/search" component={SearchContainer}/>
                    <Route path="/report" component={ReportContainer}/>
                    <Route path="/approve" component={ApproveContainer}/>
                </Switch>
            </div>

        )
    }
}


export default App

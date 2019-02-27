import React, {Component} from 'react'
import './App.css'
import NavBar from './component/NavBar'
import CreateContainer from './containers/CreateContainer'
import {Redirect, Route, Switch} from 'react-router-dom'
import SearchContainer from './containers/SearchContainer'
import ReportContainer from './containers/ReportContainer'
import ApproveContainer from './containers/ApproveContainer'

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
               <Switch>
                   <Route exact path="/" component={CreateContainer}/>
                   <Route exact path="/create" component={CreateContainer}/>
                   <Route exact path="/search" component={SearchContainer}/>
                   <Route exact path="/report" component={ReportContainer}/>
                   <Route exact path="/approve" component={ApproveContainer}/>

                   <Redirect from="*" to={"/"}/>
               </Switch>
            </div>

        )
    }
}


export default App

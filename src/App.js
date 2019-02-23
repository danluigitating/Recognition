import React, {Component} from 'react'
import './App.css'
import BaseButton from './component/BaseButton'
import NavBar from './component/NavBar'
import NavDrawer from './component/NavDrawer'

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar/>
                <BaseButton></BaseButton>
                <NavDrawer/>
            </div>
        )
    }
}



export default App

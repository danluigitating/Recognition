import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import {IconButton, Toolbar, Typography, withStyles} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NavDrawer from './NavDrawer'


class NavBar extends Component {
    state = {
        drawerOpen: false
    }

    toggleDrawer ()  {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        })
    }

    render() {
        const {classes, drawerMenu} = this.props
        return (
            <div className={classes.root}>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"
                                    onClick={()=>this.toggleDrawer()}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="title" className={classes.grow} color={'inherit'}>
                            Container Award Recognition
                        </Typography>
                    </Toolbar>
                </AppBar>
                <NavDrawer open={this.state.drawerOpen} toggleDrawer={()=>this.toggleDrawer()} menus={drawerMenu}/>
            </div>
        )
    }
}


const style = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
}


export default withStyles(style)(NavBar)

import React , {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import {IconButton, Toolbar, Typography, withStyles} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

class NavBar extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <AppBar position='static' >
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon></MenuIcon>
                        </IconButton>
                        <Typography variant="h6" className={classes.grow} color={'inherit'}>
                            Container Award Recognition System
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const style = {
    root :{
        flexGrow: 1
    },
    grow : {
        flexGrow: 1
    },
    menuButton :{
        marginLeft : -12 ,
        marginRight : 20
    }

}

export default withStyles(style)(NavBar);

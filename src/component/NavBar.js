import React , {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import {IconButton, Toolbar, Typography, withStyles} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NavDrawer from './NavDrawer'
import {connect} from 'react-redux'
import { openDrawer} from "./NavDrawerAction"
import {bindActionCreators} from 'redux'

class NavBar extends Component {

    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <AppBar position='static' >
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.props.actions.openDrawer} >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" className={classes.grow} color={'inherit'}>
                            Container Award Recognition System
                        </Typography>
                    </Toolbar>
                </AppBar>
                <NavDrawer menus={['create', 'approve', 'report', 'search']}/>
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





function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({openDrawer}, dispatch)

    }
}
NavBar = withStyles(style)(NavBar)
export default connect(null,mapDispatchToProps)(NavBar)

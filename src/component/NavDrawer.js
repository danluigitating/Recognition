import React, {Component} from 'react'
import Drawer from '@material-ui/core/Drawer'
import {List, ListItem, ListItemText} from '@material-ui/core'

class NavDrawer extends Component {


    drawerOnClick = (menu) => {
        console.log(menu)
        this.props.open= !this.props.open
        console.log(this.props)

    }

    render() {
        const {
            open, onClose,menus
        } = this.props


        return (
            <div>
                <Drawer open={open} onClose={onClose}>
                    <div onKeyDown={this.drawerOnClick} onMouseDown={this.drawerOnClick}>
                        <div className={{width: 'auto'}}>
                            <List>
                                {menus.map((menu) => (
                                    <ListItem key={menu} button>
                                        <ListItemText primary={menu}/>
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                    </div>
                </Drawer>

            </div>
        )
    }
}

export default NavDrawer
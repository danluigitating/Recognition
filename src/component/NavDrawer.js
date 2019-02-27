import React, {Component} from 'react'
import Drawer from '@material-ui/core/Drawer'
import {List, ListItem, ListItemText} from '@material-ui/core'
import {Link} from 'react-router-dom'

class NavDrawer extends Component {
    state ={
        open : false
    }
    drawerOnClick() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const {
            open, onClose, menus
        } = this.props


        return (
            <div>
                <Drawer open={open} onClose={onClose}>
                    <div onKeyDown={this.drawerOnClick} onMouseDown={this.drawerOnClick}>
                        <div className={{width: 'auto'
                        }}>
                            <List>
                                {menus.map((menu) => (
                                    <Link key={menu} to={menu}>
                                        <ListItem key={menu} button >
                                            <ListItemText primary={menu}/>
                                        </ListItem>
                                    </Link>
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
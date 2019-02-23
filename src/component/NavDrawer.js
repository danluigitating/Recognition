import React, {Component} from 'react'
import Drawer from '@material-ui/core/Drawer'
import {List, ListItem, ListItemText} from '@material-ui/core'

class NavDrawer extends Component {
    state ={
        open : true
    }
    toggleDrawer() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const menuList = (
            <div>
                <List>
                    {['Create', 'Approve', 'Report', 'Search'].map((menu) => (
                        <ListItem key={menu} button>
                            <ListItemText primary={menu}/>
                        </ListItem>
                    ))}
                </List>
            </div>
        )

        return (
            <div>
                <Drawer open={this.state.open} onClose={this.toggleDrawer}>
                    <div onKeyDown={this.toggleDrawer} onMouseDown={this.toggleDrawer}>
                        {menuList}
                    </div>
                </Drawer>

            </div>
        )
    }
}

export default NavDrawer
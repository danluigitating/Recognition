import React, {Component} from 'react'
import Drawer from '@material-ui/core/Drawer'
import {List, ListItem, ListItemText} from '@material-ui/core'

class NavDrawer extends Component {
    state = {
        open: this.props.open
    }

    toggleDrawer = () => {
        console.log('toggle drawer ', this.state)
        this.setState({
            open: !this.props.open
        })
    }

    render() {
        const {
            open, onClose
        } = this.props
        const menuList = (
            <div className={{width: 'auto'}}>
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
                <Drawer open={open} onClose={onClose}>
                    <div onKeyDown={onClose} onMouseDown={onClose}>
                        {menuList}
                    </div>
                </Drawer>

            </div>
        )
    }
}

export default NavDrawer
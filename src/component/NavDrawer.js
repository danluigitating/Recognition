import React from 'react'
import MDrawer from '@material-ui/core/Drawer'
import {List, ListItem, ListItemText} from '@material-ui/core'
import {Link} from 'react-router-dom'

function NavDrawer(props) {
    const {
        open, toggleDrawer, menus
    } = props

    return (
        <MDrawer open={open}>
            <div className={{
                width: 'auto'
            }}>
                <List>
                    {menus.map((menu) => (
                        <Link key={menu.name} to={menu.url} onClick={toggleDrawer}>
                            <ListItem button>
                                <ListItemText primary={menu.name}/>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </div>

        </MDrawer>

    )
}


export default NavDrawer


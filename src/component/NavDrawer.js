import React, {Component} from 'react'
import Drawer from '@material-ui/core/Drawer'
import {List, ListItem, ListItemText} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { closeDrawer}from "./NavDrawerAction"

class NavDrawer extends Component {

    render() {
        const {
              menus
        } = this.props

        return (
            <div>
                <Drawer open={this.props.drawerOpen}>
                    <div onKeyDown={this.props.actions.closeDrawer} onMouseDown={this.props.actions.closeDrawer}>
                        <div className={{width: 'auto'
                        }}>
                            <List>
                                {menus.map((menu) => (

                                        <ListItem key={menu} button >
                                            <Link key={menu} to="/search">
                                                 <ListItemText primary={menu}/>
                                            </Link>
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


function mapStateToProps(state) {
    return {
        drawerOpen : state.drawer.drawerOpen
    }

}
function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators({closeDrawer}, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NavDrawer)
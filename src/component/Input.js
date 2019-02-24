import React, {Component} from 'react'
import {TextField} from '@material-ui/core'

class Input extends Component {
    render() {
        const {label, ...props} = this.props
        return (
            <div>
                <TextField label={label} {...props} />
            </div>
        )
    }
}


export default Input
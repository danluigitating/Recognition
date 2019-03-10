import React from 'react'
import {TextField} from '@material-ui/core'

function Input(props) {
    const {label} = props
    return (
        <div>
            <TextField label={label} {...props} />
        </div>
    )
}


export default Input
import React, {Component} from 'react'
import {Checkbox} from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'

class InputCheckbox extends Component {
    render() {
        const {value, label} = this.props
        return (
            <div>
                <FormControlLabel control={<Checkbox value={value} label='Label'/>} label={label}/>
            </div>
        )
    }
}


export default InputCheckbox

import React, {Component} from 'react'
import Button from '@material-ui/core/Button'

class ButtonComponent extends Component {
    render() {
        const {...props} = this.props
        return (
                <Button {...props}/>
        )
    }
}

export default ButtonComponent
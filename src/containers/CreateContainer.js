import React, {Component} from 'react'
import {Typography} from '@material-ui/core'
import attributes from '../constants/attributes'
import InputCheckbox from '../component/InputCheckbox'
import Input from '../component/Input'
import Button from '../component/Button'

class CreateContainer extends Component {
    render() {
        return (

            <div className="container">
                <div className={"row"}>
                    <Typography variant='body2'>

                        Everyday OOCL employees perform their job function and demonstrate positive attributes. By
                        participating in the Container Award program you can formally recognize your fellow
                        employees for providing positive customer experiences both internally and externally.

                    </Typography>

                    <Typography variant='body2'>

                        For a container to be issued, please complete the following. Once finished, save this form
                        as a WORD file on your computer, then attach it to your email message and address to DALUZDE
                        (with
                        LACHIJE in copy). Your request will be processed within two weeks.
                    </Typography>
                </div>
                <div className={"row "}>
                    <Input label='Requestor'/>
                    <Input label='Team'/>
                    <InputCheckbox label='Are you the employees supervisor?'/>
                </div>
                <div className={"row"}>
                    <Input label='Award to'/>
                    <Input label='Team'/>
                </div>
                <div className={"row"}>
                    {
                        attributes.map((attribute) => (
                            <InputCheckbox key={attribute.value} value={attribute.value} label={attribute.label}/>
                        ))
                    }
                </div>


                <Input label={'REMARKS'} multiline rowsMax={5}/>


                <Button> Submit </Button>
            </div>

        )
    }
}


export default CreateContainer
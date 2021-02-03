import React, {useState} from 'react'
import { TextField, withStyles } from '@material-ui/core'


const initialValue = {
    message: '',
    title: ''
}

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
})

const PostMessageForm = ({classes, ...props}) => { 
    const [values, setValues] = useState(initialValue)
    return (
        <form autoComplete='off' noValidate className={classes.root}>
            <h3>Post form</h3>

            <TextField
            name='title'
            variant='outlined'
            label='Title'
            value={values.title}
            />
            <TextField
            name='message'
            variant='outlined'
            label='Message'
            fullWidth
            multiline
            rows={4}
            value={values.message}
            />
        </form>
    )
}

export default (withStyles(styles))(PostMessageForm);

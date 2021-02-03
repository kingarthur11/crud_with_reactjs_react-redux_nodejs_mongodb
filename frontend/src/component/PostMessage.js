import { Grid, Paper, Typography, withStyles, ListItem, ListItemText, Divider, List } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import { Fragment } from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/postMessage'
import PostMessageForm from './PostMessageForm'

const styles = theme => ({
    paper: {
        margin: theme.spacing(3),
        padding: theme.spacing(2)
    }
})

const PostMessage = ({classes, ...props}) => {

    useEffect(() => {
        props.fetAllPostMessages()
    }, [])
    return (
        <Grid container>
            <Grid item xs={5}>
                <Paper className={classes.paper}>
                    <PostMessageForm />
                </Paper>
            </Grid>
            <Grid item xs={7}>
                <Paper className={classes.paper}>
                    <List>
                        {
                            props.postMessageList.map((record, index) => {
                                return (
                                    <Fragment key={index}>
                                        <ListItem>
                                            <ListItemText>
                                                <Typography variant="h3">
                                                    {record.title}
                                                </Typography>
                                                <div>
                                                    {record.message}
                                                </div>
                                            </ListItemText>
                                        </ListItem>
                                        <Divider component="li" />
                                    </Fragment>
                                )
                            })
                        }
                    </List>
                    <div>list of post</div>
                </Paper>
            </Grid>

        </Grid>

    )
}

const mapStateToProps = state => ({
    postMessageList: state.postMessage.list
})

const mapActionToProps = {
    fetAllPostMessages: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostMessage));

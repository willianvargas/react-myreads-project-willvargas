import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = {
    root: {
        position: 'absolute',
        top: 'calc(50% - 25px)',
        left: 'calc(50% - 25px)',
        width: 50,
        height: 50
    }
}

const LoadingState = ({ classes }) => (
    <Grid className={classes.root} container alignItems="center" justify="center">
        <CircularProgress size={30} />
    </Grid>
)

LoadingState.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LoadingState)


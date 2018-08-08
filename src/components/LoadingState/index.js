import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({
    root: {
        width: 50,
        height: 50
    },
    inline: {
        marginTop: theme.spacing.unit * 10,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    absolute: {
        position: 'absolute',
        top: 'calc(50% - 25px)',
        left: 'calc(50% - 25px)'
    }
})

const LoadingState = ({ classes, inline }) => (
    <Grid
        className={
            classNames(classes.root, inline ? classes.inline : classes.absolute)
        }
        alignItems="center"
        justify="center"
        container
    >
        <CircularProgress size={30} />
    </Grid>
)

LoadingState.propTypes = {
    classes: PropTypes.object.isRequired,
    inline: PropTypes.bool
}

LoadingState.defaultProps = {
    inline: false
}

export default withStyles(styles, { withTheme: true})(LoadingState)


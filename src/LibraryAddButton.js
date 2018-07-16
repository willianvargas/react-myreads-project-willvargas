import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom'
import Button from '@material-ui/core/Button'
import LibraryAdd from '@material-ui/icons/LibraryAdd'


const styles = theme => ({
    root: {
        position: 'absolute',
        bottom: theme.spacing.unit * 4,
        right: theme.spacing.unit * 4,
        zIndex: 1
    }
})

const LibraryAddButton = ({ theme, classes, onClick }) => {
    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    }
    return (
        <Zoom
            in
            timeout={transitionDuration}
            style={{
                transitionDelay: 0
            }}
            unmountOnExit
        >
            <Button onClick={onClick} variant="fab" className={classes.root} color="secondary">
                <LibraryAdd />
            </Button>
        </Zoom>
    )
}

LibraryAddButton.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}

export default withStyles(styles, { withTheme: true })(LibraryAddButton)

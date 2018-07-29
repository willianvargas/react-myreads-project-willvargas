import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import Search from '@material-ui/icons/Search'


const styles = theme => ({
    tooltip: {
        marginRight: theme.spacing.unit
    },
    button: {
        position: 'absolute',
        bottom: theme.spacing.unit * 4,
        right: theme.spacing.unit * 4,
        zIndex: 1
    }
})

const SearchButton = ({ theme, classes }) => {
    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    }
    return (
        <Tooltip
            title="Search Books"
            placement="left"
            classes={{
                tooltipPlacementLeft: classes.tooltip
            }}
        >
            <Zoom
                in
                timeout={transitionDuration}
                style={{
                    transitionDelay: 0
                }}
                unmountOnExit
            >

                <Button
                    variant="fab"
                    className={classes.button}
                    color="secondary"
                >
                    <Search />
                </Button>
            </Zoom>
        </Tooltip>
    )
}

SearchButton.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(SearchButton)

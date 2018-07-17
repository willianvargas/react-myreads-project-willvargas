import React from 'react'
import PropTypes from 'prop-types'
import classNames from "classnames"

import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'


const styles = theme => ({
    root: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: 240,
        overflow: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    closed: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: 0
    },
})

const SidebarDrawer = ({ classes, open, children, onClose = () => {} }) => {
    return (
        <Drawer
            variant="permanent"
            open={open}
            onClose={onClose}
            classes={{
                paper: classNames(classes.root, !open && classes.closed)
            }}
        >
            {children}
        </Drawer>
    )
}

SidebarDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    children: PropTypes.element,
    onClose: PropTypes.func
}

export default withStyles(styles, { withTheme: true })(SidebarDrawer)

import React from 'react'
import PropTypes from 'prop-types'
import classNames from "classnames"

import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'


const styles = theme => ({
    root: {
        width: 240,
    },
    rootNotMobile: {
        position: 'relative',
        whiteSpace: 'nowrap',
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
    toolbarOffset: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar
    }
})

const SidebarDrawer = ({ classes, open, children, mobile, onClose }) => {
    return (
        <Drawer
            variant={mobile ? "temporary" : "permanent"}
            open={open}
            onClose={() => {
                if (onClose) {
                    onClose()
                }
            }}
            classes={{
                paper: classNames(
                    classes.root,
                    !mobile && classes.rootNotMobile,
                    !open && !mobile && classes.closed
                )
            }}
            ModalProps={{
                keepMounted: mobile
            }}
        >
            {!mobile && (
                <div className={classes.toolbarOffset} />
            )}
            {children && children}
        </Drawer>
    )
}

SidebarDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    children: PropTypes.element,
    mobile: PropTypes.bool,
    onClose: PropTypes.func
}

SidebarDrawer.defaultProps = {
    children: null,
    mobile: false,
    onClose: null
}

export default withStyles(styles, { withTheme: true })(SidebarDrawer)

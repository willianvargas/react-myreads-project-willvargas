import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'


const styles = ({
    root: {
        width: 240
    }
})

const SidebarDrawerMobile = ({ classes, open, children, onClose = () => {} }) => {
    return (
        <Drawer
            variant="temporary"
            open={open}
            onClose={onClose}
            classes={{
                paper: classes.root
            }}
            ModalProps={{
                keepMounted: true // Better open performance on mobile.
            }}
        >
            {children}
        </Drawer>
    )
}

SidebarDrawerMobile.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    children: PropTypes.element,
    onClose: PropTypes.func
}

export default withStyles(styles)(SidebarDrawerMobile)

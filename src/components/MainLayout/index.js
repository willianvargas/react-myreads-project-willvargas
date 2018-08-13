import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import MenuIcon from '@material-ui/icons/Menu'

import SidebarDrawer from '../SidebarDrawer/index'
import SideBar from '../Sidebar/index'


const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    flex: {
        flex: 1
    },
    navGrid: {
        overflow: 'hidden',
        userSelect: 'none'
    },
    content: {
        position: 'relative',
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflowX: 'auto'
    },
    toolbarOffset: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar
    }
})

class MainLayout extends Component {

    state = {
        sidebarOpen: true,
        sidebarMobileOpen: false
    }

    onClickSidebarItem = () => {
        this.toggleDrawerMobile()
    }

    onClickToolbarButton = () => {
        const { theme } = this.props
        const width = theme.breakpoints.values.md
        const mobile = window.innerWidth < width
        if (mobile) {
            this.toggleDrawerMobile()
        } else {
            this.toggleDrawer()
        }
    }

    toggleDrawer = () => {
        this.setState(state => ({
            sidebarOpen: !state.sidebarOpen
        }))
    }

    toggleDrawerMobile = () => {
        this.setState(state => ({
            sidebarMobileOpen: !state.sidebarMobileOpen
        }))
    }

    render() {
        const { sidebarMobileOpen, sidebarOpen } = this.state
        const { classes, children, pageId } = this.props
        return (
            <div className={classes.root}>
                <AppBar
                    position="absolute"
                    className={classes.appBar}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.onClickToolbarButton}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Grid
                            container
                            spacing={24}
                            alignItems="center"
                            wrap="nowrap"
                            className={classes.navGrid}
                        >
                            <Grid item>
                                <Typography variant="title" color="inherit" noWrap>
                                    MyReads Project
                                </Typography>
                            </Grid>
                            <Grid item zeroMinWidth />
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Hidden smDown implementation="css">
                    <SidebarDrawer open={sidebarOpen}>
                        <SideBar activePage={pageId} onClickItem={this.onClickSidebarItem} />
                    </SidebarDrawer>
                </Hidden>
                <Hidden mdUp>
                    <SidebarDrawer
                        open={sidebarMobileOpen}
                        onClose={this.toggleDrawerMobile}
                        mobile
                    >
                        <SideBar activePage={pageId} onClickItem={this.onClickSidebarItem} />
                    </SidebarDrawer>
                </Hidden>
                <main className={classes.content}>
                    <div className={classes.toolbarOffset} />
                    {children}
                </main>
            </div>
        )
    }
}

MainLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    pageId: PropTypes.string
}

MainLayout.defaultProps = {
    pageId: 'home'
}

export default withStyles(styles, { withTheme: true })(MainLayout)

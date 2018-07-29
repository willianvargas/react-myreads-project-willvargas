import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link, withRouter } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'


const styles = theme => ({
    root: {
        color: 'inherit',
        textDecoration: 'none'
    },
    iconActive: {
        color: theme.palette.primary.dark
    },
    textActive: {
        color: theme.palette.primary.dark
    }
})

const MenuItem = ({ classes, link, icon, text, active }) => (
    <Link to={link} className={classes.root}>
        <ListItem button>
            {icon && (
                <ListItemIcon
                    classes={{
                        root: classNames(active && classes.iconActive)
                    }}
                >
                    {icon}
                </ListItemIcon>
            )}
            <ListItemText
                primary={text}
                classes={{
                    primary: classNames(active && classes.textActive)
                }}
            />
        </ListItem>
    </Link>
)

MenuItem.propTypes = {
    classes: PropTypes.object.isRequired,
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    active: PropTypes.bool,
    icon: PropTypes.element
}

MenuItem.defaultProps = {
    active: false,
    icon: null
}

export default withRouter(
    withStyles(styles, { withTheme: true })(MenuItem)
)

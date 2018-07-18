import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'


const styles = theme => ({
    iconActive: {
        color: theme.palette.primary.dark
    },
    textActive: {
        color: theme.palette.primary.dark
    }
})

const MenuItem = ({ classes, id, icon, text, active, onClick }) => (
    <ListItem
        button
        onClick={(e) => {
            e.stopPropagation()
            onClick(id)
        }}
    >
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
)

MenuItem.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    active: PropTypes.bool,
    icon: PropTypes.element
}

MenuItem.defaultProps = {
    active: false,
    icon: null
}

export default withStyles(styles, { withTheme: true })(MenuItem)

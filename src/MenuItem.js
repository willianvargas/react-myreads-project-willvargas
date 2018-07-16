import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const styles = theme => ({
    active: {
        backgroundColor: theme.palette.primary.main,
    }
})

const MenuItem = ({ classes, id, icon, text, isActive, onClick }) => (
    <ListItem
        button
        className={classNames(isActive && classes.active)}
        onClick={(e) => {
            e.stopPropagation()
            onClick(id)
        }}
    >
        {icon && (
            <ListItemIcon>
                {icon}
            </ListItemIcon>
        )}
        <ListItemText primary={text} />
    </ListItem>
)

MenuItem.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.element
}

export default withStyles(styles, { withTheme: true })(MenuItem)

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const styles = theme => ({
    active: {
        color: theme.palette.primary.dark,
        fontWeight: '600'
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
            <ListItemIcon className={classNames(active && classes.active)}>
                {icon}
            </ListItemIcon>
        )}
        <ListItemText
            primary={text}
            classes={{
                primary: classNames(active && classes.active)
            }}
        />
    </ListItem>
)

MenuItem.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.element
}

export default withStyles(styles, { withTheme: true })(MenuItem)

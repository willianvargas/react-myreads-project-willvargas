import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    root: {
        display: 'flex',
        marginBottom: theme.spacing.unit
    },
    marginLeft: {
        marginLeft: theme.spacing.unit
    }
})

const Title = ({ classes, icon, children }) => (
    <div className={classes.root}>
        {icon && icon}
        <Typography
            className={classNames(icon && classes.marginLeft)}
            variant="title"
            gutterBottom
        >
            {children}
        </Typography>
    </div>
)

Title.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    icon: PropTypes.element
}

Title.defaultProps = {
    icon: null
}

export default withStyles(styles, { withTheme: true })(Title)

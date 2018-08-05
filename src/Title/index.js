import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    root: {
        display: 'flex',
        marginBottom: theme.spacing.unit * 3,
        borderBottom: '1px solid ' + theme.palette.grey["400"],
    },
    text: {
        marginBottom: theme.spacing.unit * 1.5
    },
    marginLeft: {
        marginLeft: theme.spacing.unit
    }
})

const Title = ({ classes, icon, children }) => (
    <div className={classes.root}>
        {icon && icon}
        <Typography
            className={classNames(classes.text, icon && classes.marginLeft)}
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

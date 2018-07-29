import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Book from '../Book'

const styles = theme => ({
    root: {
        marginBottom: theme.spacing.unit * 5
    },
    title: {
        display: 'flex',
        marginBottom: theme.spacing.unit
    },
    titleText: {
        marginLeft: theme.spacing.unit
    }
})

const Shelf = ({ classes, Icon, title, books }) => (
    <Grid className={classes.root}>
        <div className={classes.title}>
            {Icon}
            <Typography className={classes.titleText} variant="title" gutterBottom>
                {title}
            </Typography>
        </div>
        <Grid container spacing={24} alignItems="stretch">
            {books.map(
                book => {
                    return (
                        <Grid key={book.id} item>
                            <Book
                                {...book}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
    </Grid>
)

Shelf.propTypes = {
    classes: PropTypes.object.isRequired,
    Icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
}

export default withStyles(styles, { withTheme: true })(Shelf)

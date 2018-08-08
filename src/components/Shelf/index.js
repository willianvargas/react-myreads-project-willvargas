import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Title from '../Title'
import Book from '../Book/index'

const styles = theme => ({
    root: {
        marginBottom: theme.spacing.unit * 5
    }
})

const Shelf = ({ classes, icon, title, books, onBookChangeShelf }) => (
    <Grid className={classes.root}>
        {title && (
            <Title icon={icon}>
                {title}
            </Title>
        )}
        <Grid container spacing={24} alignItems="stretch">
            {books.length > 0 ? (
                books.map(
                    book => {
                        return (
                            <Grid key={book.id} item>
                                <Book
                                    book={book}
                                    onBookChangeShelf={onBookChangeShelf}
                                />
                            </Grid>
                        )
                    }
                )
            ) : (
                <Grid item>
                    <Typography variant="body1">
                        No books for this shelf
                    </Typography>
                </Grid>
            )}
        </Grid>
    </Grid>
)

Shelf.propTypes = {
    classes: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onBookChangeShelf: PropTypes.func.isRequired,
    title: PropTypes.string,
    icon: PropTypes.element
}

Shelf.defaultProps = {
    title: null,
    icon: null
}

export default withStyles(styles, { withTheme: true })(Shelf)

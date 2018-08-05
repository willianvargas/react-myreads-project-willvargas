import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import grey from '@material-ui/core/colors/grey'

import BookMenu from "../BookMenu"

const styles = theme => ({
    root: {
        width: 200,
        height: '100%',
        minHeight: 280,
        padding: theme.spacing.unit
    },
    thumbnailContent: {
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: grey[200]
    },
    thumbnail: {
        width: '100%',
        height: 180,
        position: 'relative',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center'
    },
    thumbnailBlur: {
        position: 'absolute',
        backgroundSize: 'cover',
        filter: 'blur(10px)',
        transform: 'scale(1.2)'
    },
    description: {
        position: 'relative',
        padding: theme.spacing.unit * 0.5
    },
    menu: {
        position: 'absolute',
        top: 0,
        right: theme.spacing.unit * -1
    },
    title: {
        marginTop: theme.spacing.unit * 1.5,
        marginBottom: theme.spacing.unit,
        lineHeight: '1.1em',
        maxWidth: 'calc(100% - 32px)'
    },
    authors: {
        maxWidth: 'calc(100% - 32px)',
        lineHeight: '1.2em'
    }
})

const defaultThumbnail = 'https://books.google.com.br/googlebooks/images/no_cover_thumb.gif'


const Book = ({ classes, book, onBookChangeShelf }) => {
    const { title, authors, shelf, imageLinks } = book
    const { thumbnail } = imageLinks || {}
    const thumbnailStyle = {
        backgroundImage: `url(${thumbnail || defaultThumbnail})`
    }
    return (
        <Paper className={classes.root}>
            <div className={classes.thumbnailContent}>
                <div
                    className={classNames(classes.thumbnail, classes.thumbnailBlur)}
                    style={thumbnailStyle}
                />
                <div
                    className={classes.thumbnail}
                    style={thumbnailStyle}
                />
            </div>
            <div className={classes.description}>
                <div className={classes.menu}>
                    <BookMenu
                        shelf={shelf}
                        onChangeShelf={(shelf) => {
                            onBookChangeShelf(book, shelf)
                        }}
                    />
                </div>
                <Typography
                    className={classes.title}
                    variant="body2"
                    component="p"
                >
                    {title}
                </Typography>
                {authors && authors.length > 0 && (
                    <Typography className={classes.authors} variant="caption">
                        {authors.join(', ')}
                    </Typography>
                )}
            </div>
        </Paper>
    )
}

Book.propTypes = {
    classes: PropTypes.object.isRequired,
    book: PropTypes.object.isRequired,
    onBookChangeShelf: PropTypes.func.isRequired
}

export default withStyles(styles, { withTheme: true })(Book)

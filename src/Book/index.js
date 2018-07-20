import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import grey from '@material-ui/core/colors/grey'

const styles = theme => ({
    root: {
        minHeight: 160,
        padding: theme.spacing.unit
    },
    cover: {
        width: '100%',
        height: 146,
        backgroundColor: grey[200],
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    description: {
        padding: theme.spacing.unit * 0.5
    },
    title: {
        marginTop: theme.spacing.unit * 0.5,
        marginBottom: theme.spacing.unit * 0.5
    }
})

class Book extends Component {

    state = {
        shelf: null
    }

    componentWillReceiveProps(nextProps) {
        const { shelf } = this.props
        if (shelf !== nextProps.shelf) {
            this.setState({ shelf: nextProps.shelf })
        }
    }

    handleShelfChange = () => {

    }

    render() {
        const { shelf } = this.state
        const { classes, title, cover, authors } = this.props
        return (
            <Paper className={classes.root}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                >
                    <Grid item>
                        <div
                            className={classes.cover}
                            style={{
                                backgroundImage: `url(${cover})`
                            }}
                        />
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="flex-end"
                        className={classes.description}
                    >
                        <Grid item>
                            <Typography className={classes.title} variant="title" noWrap>
                                {title}
                            </Typography>
                        </Grid>
                        {authors && (
                            <Grid item>
                                <Typography variant="subheading" noWrap>
                                    MyReads Project
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

Book.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
    authors: PropTypes.string,
    shelf: PropTypes.string
}

Book.defaultProps = {
    cover: null,
    authors: null,
    shelf: null
}

export default withStyles(styles, { withTheme: true })(Book)

import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Search from '@material-ui/icons/Search'


const styles = theme => ({
    root: {
        width: '100%',
    },
    form: {
        flexGrow: 1,
        maxWidth: 600,
        padding: theme.spacing.unit * 2,
    },
    textFieldLabel: {
        fontSize: '1.1em',
        fontWeight: 400
    },
    textFieldInput: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        fontSize: '1.4em',
        fontWeight: 300
    },
    button: {
        boxShadow: 'none'
    }
})

const SearchInput = ({ classes, value, onChange }) => (
    <Grid className={classes.root} container alignItems="center" justify="center">
        <Grid className={classes.form} container item alignItems="center" justify="center">
            <Grid item xs={11}>
                <TextField
                    value={value}
                    onChange={onChange}
                    id="search"
                    label="Search"
                    placeholder="artificial intelligence"
                    fullWidth
                    autoFocus
                    InputLabelProps={{
                        shrink: true,
                        classes: {
                            root: classes.textFieldLabel
                        }
                    }}
                    InputProps={{
                        classes: {
                            input: classes.textFieldInput
                        }
                    }}
                />
            </Grid>
            <Grid item xs={1}>
                <Button
                    aria-label="Search"
                    variant="fab"
                    color="primary"
                    classes={{
                        root: classes.button
                    }}
                >
                    <Search />
                </Button>
            </Grid>
        </Grid>
    </Grid>
)

SearchInput.propTypes = {
    classes: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default withStyles(styles, { withTheme: true })(SearchInput)

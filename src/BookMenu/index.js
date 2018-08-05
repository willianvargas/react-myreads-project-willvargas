import React, { Component } from 'react'
import PropTypes from 'prop-types'

import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import shelves from '../constants/shelves'

const options = [
    ...shelves,
    {
        id: 'none',
        title: 'None'
    }
]

class BookMenu extends Component {

    state = {
        anchorEl: null,
    }

    handleOpen = (event) => {
        this.setState({ anchorEl: event.currentTarget })
    }

    handleClose = () => {
        this.setState({ anchorEl: null })
    }

    handleClick = (shelf) => {
        this.handleClose()
        const { onChangeShelf } = this.props
        onChangeShelf(shelf)
    }

    render() {
        const { anchorEl } = this.state
        const { shelf } = this.props
        return (
            <div>
                <IconButton
                    aria-label="Shelves"
                    aria-owns={anchorEl ? 'long-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleOpen}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    {options.map(option => (
                        <MenuItem
                            key={option.id}
                            selected={option.id === shelf}
                            onClick={() => {
                                this.handleClick(option.id)
                            }}
                        >
                            {option.title}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        )
    }
}

BookMenu.propTypes = {
    onChangeShelf: PropTypes.func.isRequired,
    shelf: PropTypes.string
}

BookMenu.defaultProps = {
    shelf: 'none'
}

export default BookMenu

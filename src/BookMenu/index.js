import React, { Component } from 'react'
import PropTypes from 'prop-types'

import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import shelves from '../constants/shelves'


class BookMenu extends Component {

    state = {
        anchorEl: null,
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget })
    }

    handleClose = () => {
        this.setState({ anchorEl: null })
    }

    render() {
        const { anchorEl } = this.state
        const { shelf } = this.props
        const options = [
            ...shelves,
            {
                id: 'none',
                title: 'None'
            }
        ]
        return (
            <div>
                <IconButton
                    aria-label="Shelves"
                    aria-owns={anchorEl ? 'long-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    // PopoverClasses={{
                    //     anchorOrigin: {
                    //         vertical: 'top',
                    //         horizontal: 'right'
                    //     }
                    // }}
                >
                    {options.map(option => (
                        <MenuItem
                            key={option.id}
                            selected={option.id === shelf}
                            onClick={this.handleClose}
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
    shelf: PropTypes.string.isRequired
}

export default BookMenu

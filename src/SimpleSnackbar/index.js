import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Snackbar from '@material-ui/core/Snackbar'


class SimpleSnackbar extends Component {

    state = {
        open: false
    }

    componentWillReceiveProps(nextProps) {
        const { open } = this.props
        if (open !== nextProps.open) {
            this.setState({ open: nextProps.open })
            if (open) {
                this.timeout = setTimeout(() => {
                    this.handleClose()
                }, 4000)
            }
        }
    }

    componentWillUnmount() {
        this.clearTimeout()
    }

    clearTimeout = () => {
        try {
            clearTimeout(this.timeout)
        } catch (e) {
            // timeout is already cleaned
        }
    }

    handleClose = () => {
        const { onClose } = this.props
        if (onClose) {
            onClose()
        }
        this.setState({ open: false })
        this.clearTimeout()
    }

    handleCloseClearTimeout = () => {
        this.handleClose()
        this.clearTimeout()
    }

    render() {
        const { open } = this.state
        const { message } = this.props
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                open={open}
                onClose={this.handleCloseClearTimeout}
                ContentProps={{
                    'aria-describedby': 'message-id'
                }}
                message={(
                    <span id="message-id">
                        {message}
                    </span>
                )}
            />
        )
    }
}

SimpleSnackbar.propTypes = {
    open: PropTypes.bool.isRequired,
    message: PropTypes.string,
    onClose: PropTypes.func
}

SimpleSnackbar.defaultProps = {
    message: PropTypes.string,
    onClose: PropTypes.func
}

export default SimpleSnackbar

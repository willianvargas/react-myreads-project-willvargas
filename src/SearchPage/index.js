import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import shelves from '../constants/shelves'

import LoadingState from '../LoadingState'
import Shelf from '../Shelf'
import SearchInput from '../SearchInput'


class SearchPage extends Component {

    state = {
        search: '',
        searchBooks: null
    }

    render() {
        const { search } = this.state
        return (
            <div>
                <SearchInput
                    search={search}
                />
            </div>
        )
    }
}

SearchPage.propTypes = {
    onBookChangeShelf: PropTypes.func.isRequired,
    books: PropTypes.object
}

SearchPage.defaultProps = {
    books: null
}

export default withRouter(SearchPage)

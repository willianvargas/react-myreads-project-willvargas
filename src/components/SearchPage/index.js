import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import Typography from '@material-ui/core/Typography'

import { search } from '../../services/BooksAPI'

import Shelf from '../Shelf/index'
import Title from '../Title/index'
import LoadingState from '../LoadingState/index'
import SearchInput from '../SearchInput/index'


class SearchPage extends Component {

    state = {
        search: '',
        searchResults: undefined,
        loading: false
    }

    componentWillMount() {
        this.searchDebounced = _.debounce(this.search, 1000)
    }

    componentWillReceiveProps(nextProps) {
        const { searchResults } = this.state
        if (searchResults) {
            const { books } = nextProps
            const updatedBooks = this.mapResultsWithBooks(searchResults, books)
            this.setState({
                searchResults: updatedBooks
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        const { search } = this.state
        if (nextState.search !== search && nextState.search.length > 0) {
            this.searchDebounced(nextState.search)
        }
    }

    onChangeSearch = (value) => {
        const nextState = { search: value }
        if (value.length === 0) {
            nextState.searchResults = undefined
        }
        this.setState(nextState)
    }

    searchApi = (value) => {
        search(value)
            .then(this.checkResults)
            .then(this.mapResultsWithPropsBooks)
            .then(this.renderResults)
    }

    checkResults = (searchResults) => {
        if (searchResults.error !== undefined) {
            searchResults = searchResults.items || []
        }
        return searchResults
    }

    mapResultsWithPropsBooks = (searchResults) => {
        const { books } = this.props
        return this.mapResultsWithBooks(searchResults, books)
    }

    mapResultsWithBooks = (searchResults, books) => {
        return searchResults.map(book => {
            const { id } = book
            if (books[id]) {
                book.shelf = books[id].shelf
            } else {
                book.shelf = undefined
            }
            return book
        })
    }

    search = (value) => {
        if (value.length > 0) {
            this.setState({
                searchResults: undefined,
                loading: true
            })
            this.searchApi(value)
        }
    }

    renderResults = (books) => {
        const { search } = this.state
        if (search.length > 0) {
            this.setState({
                searchResults: books,
                loading: false
            })
        } else {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { search, loading, searchResults } = this.state
        const { onBookChangeShelf } = this.props
        return (
            <div>
                <SearchInput
                    value={search}
                    onChange={this.onChangeSearch}
                />
                {((search && searchResults) || loading) && (
                    <div>
                        <Title>
                            {`Search results for: ${search}`}
                        </Title>
                        {loading ? (
                            <LoadingState inline />
                        ) : searchResults && (
                            searchResults.length > 0 ? (
                                <Shelf
                                    books={searchResults}
                                    onBookChangeShelf={onBookChangeShelf}
                                />
                            ) : (
                                <Typography variant="body1">
                                    No results found.
                                </Typography>
                            )
                        )}
                    </div>
                )}
            </div>
        )
    }
}

SearchPage.propTypes = {
    onBookChangeShelf: PropTypes.func.isRequired,
    books: PropTypes.object.isRequired
}

export default SearchPage

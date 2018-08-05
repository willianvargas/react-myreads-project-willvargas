import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import Typography from '@material-ui/core/Typography'

import { search } from "../services/BooksAPI"

import Shelf from '../Shelf'
import Title from '../Title'
import LoadingState from '../LoadingState'
import SearchInput from '../SearchInput'


class SearchPage extends Component {

    state = {
        search: '',
        searchResults: null,
        loading: false
    }

    componentWillReceiveProps() {
        const { searchResults } = this.state
        if (searchResults) {
            const updatedBooks = this.mapResultsWithLocalBooks(searchResults)
            this.setState({
                searchResults: updatedBooks
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        const { search } = this.state
        if (nextState.search !== search && nextState.search.length > 0) {
            this.search(nextState.search)
        }
    }

    onChangeSearch = (value) => {
        const nextState = { search: value }
        if (value.length === 0) {
            this.clearOnChangeTimeout()
            nextState.searchResults = null
        }
        this.setState(nextState)
    }

    clearOnChangeTimeout = () => {
        try {
            clearTimeout(this.onChangeTimeout)
        } catch (e) {
            // the timer doesn't exits
        }
    }

    searchApi = (text) => {
        search(text)
            .then(this.checkResults)
            .then(this.mapResultsWithLocalBooks)
            .then(this.renderResults)
    }

    checkResults = (searchResults) => {
        if (searchResults.error !== undefined) {
            searchResults = searchResults.items || []
        }
        return searchResults
    }

    mapResultsWithLocalBooks = (searchResults) => {
        const { books } = this.props
        return searchResults.map(book => {
            const { id } = book
            if (books[id]) {
                book.shelf = books[id].shelf
            }
            return book
        })
    }

    search = (text) => {
        this.clearOnChangeTimeout()
        this.onChangeTimeout = setTimeout(() => {
            this.setState({
                searchResults: null,
                loading: true
            })
            this.searchApi(text)
        }, 1000)
    }

    renderResults = (books) => {
        const { search } = this.state
        if (search.length > 0) {
            this.setState({
                searchResults: books,
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

export default withRouter(SearchPage)

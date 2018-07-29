import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import MuiTheme from '../styles/MuiTheme'

import shelves from '../constants/shelves'

import { getAll, update } from '../BooksAPI'

import MainLayout from '../MainLayout'
import LoadingState from '../LoadingState'
import SearchButton from '../SearchButton'
import Shelf from '../Shelf'


class HomePage extends Component {

    state = {
        books: {}
    }

    componentWillMount() {
        getAll()
            .then(books => {
                this.mapBooksFromApi(books)
            })
    }

    onClickLibraryAdd = (e) => {
        e.stopPropagation()
        console.log("Click add")
    }

    onBookChangeShelf = (id, shelf) => {
        const { books } = this.state
        const book = books[id]
        update(book, shelf)
            .then(shelves => {
                console.log(shelves)
                this.updateShelvesFromApi(shelves)
            })
    }

    updateShelvesFromApi(shelves) {
        let { books } = this.state
        const new_books = {}
        Object
            .keys(shelves)
            .forEach(shelf => {
                shelves[shelf].forEach(bookId => {
                    books[bookId].shelf = shelf
                    new_books[bookId] = books[bookId]
                })
            })
        this.setState({ books: new_books })
    }

    mapBooksFromApi(apiBooks) {
        let { books } = {}
        apiBooks.forEach(book => {
            const { id } = book
            books = {
                ...books,
                [id]: book
            }
        })
        this.setState({ books })
    }

    render() {
        const { books } = this.state
        const { location } = this.props
        const page = location.pathname.split('/')[1]
        const bookList = Object.keys(books).map(key => books[key])
        return (
            <MuiThemeProvider theme={MuiTheme}>
                <CssBaseline />
                <MainLayout>
                    {bookList.length > 0 ? (
                        (page ? (
                            shelves.filter(shelf => shelf.id === page)
                        ) : (
                            shelves
                        )).map(shelf => {
                        const shelfBooks = bookList.filter(book => book.shelf === shelf.id)
                            return (
                                <Shelf
                                    key={shelf.id}
                                    {...shelf}
                                    books={shelfBooks}
                                    onBookChangeShelf={this.onBookChangeShelf}
                                />
                            )
                        })
                    ) : (
                        <LoadingState />
                    )}
                </MainLayout>
                <Link to="/search">
                    <SearchButton />
                </Link>
            </MuiThemeProvider>
        )
    }

}

HomePage.propTypes = {
    location: PropTypes.object.isRequired
}


export default withRouter(HomePage)

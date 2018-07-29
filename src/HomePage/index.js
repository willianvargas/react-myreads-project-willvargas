import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import MuiTheme from '../styles/MuiTheme'

import shelves from '../constants/shelves'

import { getAll } from '../BooksAPI'

import MainLayout from '../MainLayout'
import LoadingState from '../LoadingState'
import SearchButton from '../SearchButton'
import Shelf from '../Shelf'


class HomePage extends Component {

    state = {
        books: {}
    }

    componentWillMount() {
        getAll().then((books) => {
            console.log(books)
            this.mapBooksFromApi(books)
        })
    }

    onClickLibraryAdd = (e) => {
        e.stopPropagation()
        console.log("Click add")
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
        const filter = location.pathname.split('/')[1]
        const bookList = Object.keys(books).map(key => books[key])
        return (
            <MuiThemeProvider theme={MuiTheme}>
                <CssBaseline />
                <MainLayout>
                    {bookList.length > 0 ? (
                        (filter ? (
                            shelves.filter(shelf => shelf.id === filter)
                        ) : (
                            shelves
                        )).map(shelf => {
                        const shelfBooks = bookList.filter(book => book.shelf === shelf.id)
                            return (
                                <Shelf
                                    key={shelf.id}
                                    {...shelf}
                                    books={shelfBooks}
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

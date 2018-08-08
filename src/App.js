import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import MuiTheme from './styles/MuiTheme'

import { getAll, update } from './services/BooksAPI'

import MainLayout from "./components/MainLayout"
import HomePage from "./components/HomePage"
import SearchPage from "./components/SearchPage"


class App extends Component {

    state = {
        books: {}
    }

    /**
     * On app mount request the books to API then map it
     */
    componentWillMount() {
        getAll().then(this.mapBooksFromApi)
    }

    /**
     * Saves the new book's shelf on the app books state and update on API
     *
     * @param {object} book - The book object, usually the same fetched from API
     * @param {string} shelf - The id of the new book's shelf
     */
    onBookChangeShelf = (book, shelf) => {
        const { books } = this.state
        book.shelf = shelf
        this.setState({
            books: {
                ...books,
                [book.id]: book
            }
        })
        update(book, shelf).then(this.syncShelvesWithApi)
    }

    /**
     * Maps the books retrieved from API and set on the app state
     *
     * @param {Object[]} apiBooks - Array of books objects
     */
    mapBooksFromApi = (apiBooks) => {
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

    /**
     * Maps the shelves returned on the update book API request
     * and update the app books state
     *
     * @param {object} shelves - Dictionary with the shelves and books relationship
     */
    syncShelvesWithApi = (shelves) => {
        let { books } = this.state
        const new_books = {}
        Object
            .keys(shelves)
            .forEach(shelf => {
                shelves[shelf].forEach(bookId => {
                    const book = books[bookId]
                    book.shelf = shelf
                    new_books[bookId] = book
                })
            })
        this.setState({ books: new_books })
    }

    render() {
        const { books } = this.state
        return (
            <MuiThemeProvider theme={MuiTheme}>
                <CssBaseline />
                <Router>
                    <MainLayout>
                        <Switch>
                            <Route
                                path="/search"
                                render={() => (
                                    <SearchPage
                                        books={books}
                                        onBookChangeShelf={this.onBookChangeShelf}
                                    />
                                )}
                            />
                            <Route
                                path="/"
                                render={() => (
                                    <HomePage
                                        books={books}
                                        onBookChangeShelf={this.onBookChangeShelf}
                                    />
                                )}
                            />
                        </Switch>
                    </MainLayout>
                </Router>
            </MuiThemeProvider>
        )
    }

}

export default App

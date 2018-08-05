import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import MuiTheme from './styles/MuiTheme'

import { getAll, update } from './services/BooksAPI'

import MainLayout from "./MainLayout"
import HomePage from "./HomePage"
import SearchPage from "./SearchPage"


class App extends Component {

    state = {
        books: {}
    }

    componentWillMount() {
        getAll().then(this.mapBooksFromApi)
    }

    onBookChangeShelf = (book, shelf) => {
        const { books } = this.state
        if (books[book.id] === undefined) {
            books[book.id] = book
        }
        update(book, shelf).then(this.syncShelvesWithApi)
    }

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

    syncShelvesWithApi = (shelves) => {
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

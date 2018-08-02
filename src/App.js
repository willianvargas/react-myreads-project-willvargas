import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import MuiTheme from './styles/MuiTheme'

import { getAll, update } from './BooksAPI'

import MainLayout from "./MainLayout"
import HomePage from "./HomePage"
import SearchPage from "./SearchPage"


class App extends Component {

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

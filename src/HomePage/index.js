import React, { Component } from 'react'

import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'

import MuiTheme from '../styles/MuiTheme'
import MainLayout from '../MainLayout'
import LibraryAddButton from '../LibraryAddButton'
import Book from '../Book'

import { getAll } from '../BooksAPI'


class HomePage extends Component {

    state = {
        books: [
            {
                title: "Hey, ho, let's go",
                cover: "/cover.png",
                authors: "Me and myself"
            },
            {
                title: "Hey, ho, let's go",
                cover: "/cover.png",
                authors: "Me and myself"
            },
            {
                title: "Hey, ho, let's go",
                cover: "/cover.png",
                authors: "Me and myself"
            },
            {
                title: "Hey, ho, let's go",
                cover: "/cover.png",
                authors: "Me and myself"
            },
            {
                title: "Hey, ho, let's go",
                cover: "/cover.png",
                authors: "Me and myself"
            },
            {
                title: "Hey, ho, let's go",
                cover: "/cover.png",
                authors: "Me and myself"
            },
        ],
        shelfs: {
            reading: [],
            want: [],
            read: []
        }
    }

    componentWillMount() {
        getAll().then((books) => {
            console.log(books)
        })
    }

    onClickLibraryAdd = (e) => {
        e.stopPropagation()
        console.log("Click add")
    }

    render() {
        const { books } = this.state
        return (
            <MuiThemeProvider theme={MuiTheme}>
                <CssBaseline />
                <MainLayout>
                    <Grid
                        container
                        spacing={24}
                        alignItems="center"
                    >
                        {books.map((book, index) => {
                            return (
                                <Grid
                                    key={index}
                                    item
                                >
                                    <Book
                                        {...book}
                                    />
                                </Grid>
                            )
                        })}
                    </Grid>
                </MainLayout>
                <LibraryAddButton onClick={this.onClickLibraryAdd} />
            </MuiThemeProvider>
        )
    }

}


export default HomePage

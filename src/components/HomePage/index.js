import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import shelves from '../../constants/shelves'

import LoadingState from '../LoadingState/index'
import SearchButton from '../SearchButton/index'
import Shelf from '../Shelf/index'


const HomePage = ({ books, onBookChangeShelf, shelfFilter }) => {
    const bookList = books ? Object.keys(books).map(key => books[key]) : []
    return (
        <div>
            {bookList.length > 0 ? (
                (shelfFilter ? (
                    shelves.filter(shelf => shelf.id === shelfFilter)
                ) : (
                    shelves
                )).map(shelf => {
                    const shelfBooks = bookList.filter(book => book.shelf === shelf.id)
                    return (
                        <Shelf
                            key={shelf.id}
                            {...shelf}
                            books={shelfBooks}
                            onBookChangeShelf={onBookChangeShelf}
                        />
                    )
                })
            ) : (
                <LoadingState />
            )}
            <Link to="/search">
                <SearchButton />
            </Link>
        </div>
    )
}

HomePage.propTypes = {
    onBookChangeShelf: PropTypes.func.isRequired,
    shelfFilter: PropTypes.string,
    books: PropTypes.object
}

HomePage.defaultProps = {
    shelfFilter: null,
    books: null
}

export default HomePage

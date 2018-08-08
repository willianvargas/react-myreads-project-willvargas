import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import shelves from '../../constants/shelves'

import LoadingState from '../LoadingState/index'
import SearchButton from '../SearchButton/index'
import Shelf from '../Shelf/index'


const HomePage = ({ books, onBookChangeShelf, location }) => {
    const page = location.pathname.split('/')[1]
    const bookList = books ? Object.keys(books).map(key => books[key]) : []
    return (
        <div>
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
    location: PropTypes.object.isRequired,
    onBookChangeShelf: PropTypes.func.isRequired,
    books: PropTypes.object
}

HomePage.defaultProps = {
    books: null
}

export default withRouter(HomePage)

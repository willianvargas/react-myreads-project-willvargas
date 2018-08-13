import React from 'react'
import { render } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'

import HomePage from '.'

import { getBooksObject } from '../../tests/books'


const getElement = (onBookChangeShelf, books, shelfFilter) => (
    <Router>
        <HomePage
            onBookChangeShelf={onBookChangeShelf}
            books={books}
            shelfFilter={shelfFilter}
        />
    </Router>
)

describe('Home page component', () => {

    it('render without errors', () => {
        const onBookChangeShelf = () => {}
        const books = getBooksObject()

        const component = render(
            getElement(onBookChangeShelf, books)
        )

        expect(component).toMatchSnapshot()
    })

    it('render without books', () => {
        const onBookChangeShelf = () => {}

        const component = render(
            getElement(onBookChangeShelf)
        )

        expect(component).toMatchSnapshot()
    })

    it('render with shelf filter', () => {
        const onBookChangeShelf = () => {}
        const books = getBooksObject()
        const shelfFilter = 'wantToRead'

        const component = render(
            getElement(onBookChangeShelf, books, shelfFilter)
        )

        expect(component).toMatchSnapshot()
    })

})

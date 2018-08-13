import React from 'react'
import { render } from 'enzyme'

import Shelf from '.'

import { booksList } from '../../tests/books'


describe('Shelf component', () => {

    it('render without errors', () => {
        const onBookChangeShelf = () => {}

        const component = render(
            <Shelf onBookChangeShelf={onBookChangeShelf} books={booksList} />
        )

        expect(component).toMatchSnapshot()
    })

})

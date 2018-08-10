import React from 'react'
import { mount, render } from 'enzyme'

import Book from '.'
import BookMenu from '../BookMenu'

import books from '../../tests/books'


describe('Book component', () => {

    it('render without errors', () => {
        const onBookChangeShelf = () => {}
        const book = books[0]

        const element = render(<Book book={book} onBookChangeShelf={onBookChangeShelf} />)

        expect(element)
            .toMatchSnapshot()
    })


    it('render without cover image', () => {
        const onBookChangeShelf = () => {}
        const imageLinks = null
        const book = {
            ...books[0],
            imageLinks
        }

        render(<Book book={book} onBookChangeShelf={onBookChangeShelf} />)
    })


    it('render without authors', () => {
        const onBookChangeShelf = () => {}
        const authors = null
        const book = {
            ...books[0],
            authors
        }

        render(<Book book={book} onBookChangeShelf={onBookChangeShelf} />)
    })


    it('trigger onBookChangeShelf function', () => {
        const onBookChangeShelf = jest.fn()
        const shelf = 'none'
        const book = {
            ...books[0],
            shelf
        }

        const wrapper = mount(<Book book={book} onBookChangeShelf={onBookChangeShelf} />)

        const menu = wrapper.find(BookMenu)

        menu.find('button').simulate('click')

        const menuItem = document.querySelectorAll('[data-role="menu-item"]')[0]

        menuItem.click()

        expect(onBookChangeShelf).toBeCalled()

        wrapper.unmount()
    })

})

import React from 'react'
import { mount, render } from 'enzyme'

import Book from '.'
import BookMenu from '../BookMenu'

import { booksList } from '../../tests/books'


describe('Book component', () => {

    it('render without errors', () => {
        const onBookChangeShelf = () => {}
        const book = booksList[0]

        const component = render(
            <Book book={book} onBookChangeShelf={onBookChangeShelf} />
        )

        expect(component).toMatchSnapshot()
    })


    it('render without cover image', () => {
        const onBookChangeShelf = () => {}
        const imageLinks = null
        const book = { ...booksList[0], imageLinks }

        const component = render(
            <Book book={book} onBookChangeShelf={onBookChangeShelf} />
        )

        expect(component).toMatchSnapshot()
    })


    it('render without authors', () => {
        const onBookChangeShelf = () => {}
        const authors = null
        const book = { ...booksList[0], authors }

        const component = render(
            <Book book={book} onBookChangeShelf={onBookChangeShelf} />
        )

        expect(component).toMatchSnapshot()
    })


    it('trigger onBookChangeShelf function', () => {
        const onBookChangeShelf = jest.fn()
        const shelf = 'none'
        const book = { ...booksList[0], shelf }

        const wrapper = mount(
            <Book book={book} onBookChangeShelf={onBookChangeShelf} />
        )

        const menu = wrapper.find(BookMenu)

        menu.find('button').simulate('click')

        const menuItem = document.querySelectorAll('[data-role="menu-item"]')[0]

        menuItem.click()

        expect(onBookChangeShelf).toBeCalled()

        wrapper.unmount()
    })

})

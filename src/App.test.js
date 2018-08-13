import React from 'react'
import { mount, render, shallow } from 'enzyme'

import App from './App'

import { booksList, getBooksObject } from './tests/books'


describe('App component', () => {

    it('render without errors', () => {
        const element = render(<App />)

        expect(element).toMatchSnapshot()
    })

    it('render search page', () => {
        window.history.pushState({}, null, '/search')

        const wrapper = mount(<App />)

        expect(wrapper).toMatchSnapshot()

        window.history.pushState({}, null, '/')

        wrapper.unmount()
    })

    it('map books from API', () => {
        const booksObject = getBooksObject()

        const wrapper = shallow(<App />)

        wrapper.instance().mapBooksFromApi(booksList)

        expect(wrapper.state('books')).toEqual(booksObject)
    })

    it('add book to state on change shelf', () => {
        const initialBooks = { [booksList[0].id]: { ...booksList[0] } }
        const newBook = { ...booksList[1], shelf: 'none' }
        const newShelf = 'read'

        const wrapper = shallow(<App />)

        wrapper.setState({ books: initialBooks })

        wrapper.instance().onBookChangeShelf(newBook, newShelf)

        const stateBooks = wrapper.state('books')

        expect(stateBooks[booksList[1].id]).toEqual(newBook)
    })

    it('not update state on book change shelf callback', () => {
        const initialBooks = getBooksObject()
        const book = { ...booksList[1] }
        const newShelf = 'currentlyReading'

        const wrapper = shallow(<App />)

        wrapper.setState({ books: initialBooks })

        wrapper.instance().onBookChangeShelf(book, newShelf)

        const stateBooks = wrapper.state('books')

        expect(stateBooks[booksList[1].id].shelf).not.toEqual(newShelf)
    })

    it('sync shelves with api response', () => {
        const initialBooks = getBooksObject()
        const book1 = booksList[0].id, book2 = booksList[1].id
        const apiResponse = {
            'read': [book1],
            'currentlyReading': [book2]
        }

        const wrapper = shallow(<App />)

        wrapper.setState({ books: initialBooks })

        wrapper.instance().syncShelvesWithApi(apiResponse)

        const stateBooks = wrapper.state('books')

        expect(stateBooks[book1].shelf).toEqual('read')

        expect(stateBooks[book2].shelf).toEqual('currentlyReading')
    })

})

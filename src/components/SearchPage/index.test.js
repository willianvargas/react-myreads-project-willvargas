import React from 'react'
import { mount, render, shallow } from 'enzyme'

import SearchPage from '.'

import { booksList, getBooksObject } from '../../tests/books'


describe('Search page component', () => {

    it('render without errors', () => {
        const onBookChangeShelf = () => {}
        const books = getBooksObject()

        const component = render(
            <SearchPage onBookChangeShelf={onBookChangeShelf} books={books} />
        )

        expect(component).toMatchSnapshot()
    })

    it('render empty search results', () => {
        const onBookChangeShelf = () => {}
        const books = getBooksObject()
        const search = 'test'

        const wrapper = mount(
            <SearchPage onBookChangeShelf={onBookChangeShelf} books={books} />
        )

        wrapper.setState({ search, searchResults: [] })

        expect(wrapper).toMatchSnapshot()

        wrapper.unmount()
    })

    it('update loading state on search', () => {
        const onBookChangeShelf = () => {}
        const books = getBooksObject()
        const search = 'test'

        const wrapper = shallow(
            <SearchPage onBookChangeShelf={onBookChangeShelf} books={books} />
        )

        wrapper.instance().search(search)

        expect(wrapper.state('loading')).toEqual(true)
    })

    it('not update loading state with empty search', () => {
        const onBookChangeShelf = () => {}
        const books = getBooksObject()
        const search = ''

        const wrapper = shallow(
            <SearchPage onBookChangeShelf={onBookChangeShelf} books={books} />
        )

        wrapper.instance().search(search)

        expect(wrapper.state('loading')).toEqual(false)
    })

    it('update state on change search', () => {
        const onBookChangeShelf = () => {}
        const books = getBooksObject()
        const initialSearch = 'foo'
        const finalSearch = 'bar'

        const wrapper = shallow(
            <SearchPage onBookChangeShelf={onBookChangeShelf} books={books} />
        )

        wrapper.setState({ search: initialSearch })

        wrapper.instance().onChangeSearch(finalSearch)

        expect(wrapper.state('search')).toEqual(finalSearch)
    })

    it('clear search on input empty string', () => {
        const onBookChangeShelf = () => {}
        const books = getBooksObject()
        const search = 'test'

        const wrapper = shallow(
            <SearchPage onBookChangeShelf={onBookChangeShelf} books={books} />
        )

        wrapper.setState({ search, searchResults: booksList })

        wrapper.instance().onChangeSearch('')

        expect(wrapper.state('searchResults')).toBeUndefined()
    })

    it('handle search results', () => {
        const onBookChangeShelf = () => {}
        const books = getBooksObject()
        const apiResponses = {
            success: booksList,
            errorWithItems: { error: 'Error', items: booksList },
            errorNoItems: { error: 'Error' }
        }

        const wrapper = shallow(
            <SearchPage onBookChangeShelf={onBookChangeShelf} books={books} />
        )

        const results = wrapper.instance().checkResults(apiResponses.success)
        expect(results).toEqual(apiResponses.success)

        const results2 = wrapper.instance().checkResults(apiResponses.errorNoItems)
        expect(results2).toEqual([])

        const results3 = wrapper.instance().checkResults(apiResponses.errorWithItems)
        expect(results3).toEqual(apiResponses.errorWithItems.items)
    })

    it('update state on receive new books via props', () => {
        const onBookChangeShelf = () => {}
        const search = 'test'
        const initialBooks = {}
        const searchResults = booksList.map(book => {
            book.shelf = undefined
            return book
        })
        const newBooks = {
            [booksList[0].id]: {
                ...booksList[0]
            }
        }
        const finalBooks = [{
            ...booksList[0]
        }, {
            ...searchResults[1]
        }]

        const wrapper = shallow(
            <SearchPage onBookChangeShelf={onBookChangeShelf} books={initialBooks} />
        )

        wrapper.setState({ search, searchResults })

        wrapper.setProps({ books: newBooks })

        expect(wrapper.state('searchResults')).toEqual(finalBooks)
    })

    it('map search results with books', () => {
        const onBookChangeShelf = () => {}
        const books = { [booksList[0].id]: { ...booksList[0] } }
        const searchResults = booksList.map(book => {
            book.shelf = undefined
            return book
        })

        const wrapper = shallow(
            <SearchPage onBookChangeShelf={onBookChangeShelf} books={books} />
        )

        wrapper.setProps({ books })

        const booksObject = wrapper.instance().mapResultsWithPropsBooks(searchResults)

        expect(booksObject).toEqual(booksList)
    })

    it('update results state on search', () => {
        const onBookChangeShelf = () => {}
        const books = getBooksObject()
        const search = 'test'

        const wrapper = shallow(
            <SearchPage onBookChangeShelf={onBookChangeShelf} books={books} />
        )

        wrapper.setState({ search })

        wrapper.instance().renderResults(booksList)

        expect(wrapper.state('searchResults')).toEqual(booksList)
    })

    it('prevent render results if search is empty', () => {
        const onBookChangeShelf = () => {}
        const books = getBooksObject()
        const search = ''

        const wrapper = shallow(
            <SearchPage onBookChangeShelf={onBookChangeShelf} books={books} />
        )

        wrapper.setState({ search })

        wrapper.instance().renderResults(booksList)

        expect(wrapper.state('searchResults')).toBeUndefined()
    })

    jest.clearAllTimers()

})

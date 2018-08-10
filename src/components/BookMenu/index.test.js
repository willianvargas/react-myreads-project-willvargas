import React from 'react'
import { mount, render } from 'enzyme'

import BookMenu from '.'


describe('Book menu component', () => {

    it('render without errors', () => {
        const onChangeShelf = () => {}
        const shelf = 'read'

        const element = render(<BookMenu onChangeShelf={onChangeShelf} shelf={shelf} />)

        expect(element).toMatchSnapshot()
    })


    it('render without shelf defined', () => {
        const onChangeShelf = () => {}
        const shelf = undefined

        render(<BookMenu onChangeShelf={onChangeShelf} shelf={shelf} />)
    })


    it('render the correct shelf', () => {
        const onChangeShelf = () => {}
        const shelf = "read"

        const wrapper = mount(<BookMenu onChangeShelf={onChangeShelf} shelf={shelf} />)

        wrapper.find('button').simulate('click')

        const selected = document.querySelectorAll('[data-selected="true"]')[0]

        expect(selected.innerHTML.toLowerCase())
            .toEqual(expect.stringContaining(shelf))

        wrapper.unmount()
    })


    it('trigger onChangeShelf function', () => {
        const onChangeShelf = jest.fn()
        const shelf = "none"

        const wrapper = mount(<BookMenu onChangeShelf={onChangeShelf} shelf={shelf} />)

        wrapper.find('button').simulate('click')

        const firstMenuItem = document.querySelectorAll('[data-role="menu-item"]')[0]

        firstMenuItem.click()

        expect(onChangeShelf).toBeCalled()

        wrapper.unmount()
    })

})

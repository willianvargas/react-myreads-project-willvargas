import React from 'react'
import { mount, render } from 'enzyme'

import BookMenu from '.'


it('Component render without errors', () => {
    const onChangeShelf = () => {}
    const shelf = 'read'

    const element = render(<BookMenu onChangeShelf={onChangeShelf} shelf={shelf} />)

    expect(element)
        .toMatchSnapshot()
})


it('Component render without shelf defined', () => {
    const onChangeShelf = () => {}
    const shelf = undefined

    render(<BookMenu onChangeShelf={onChangeShelf} shelf={shelf} />)
})


it('Component render the correct shelf', () => {
    const onChangeShelf = () => {}
    const shelf = "read"

    const wrapper = mount(<BookMenu onChangeShelf={onChangeShelf} shelf={shelf} />)

    wrapper.find('button').simulate('click')

    const selected = document.querySelectorAll('[data-selected="true"]')[0]

    expect(selected.innerHTML.toLowerCase())
        .toEqual(expect.stringContaining(shelf))

    wrapper.unmount()
})


it('Component trigger onChangeShelf function', () => {

    const onChangeShelf = jest.fn()
    const shelf = "none"

    const wrapper = mount(<BookMenu onChangeShelf={onChangeShelf} shelf={shelf} />)

    wrapper.find('button').simulate('click')

    const firstMenuItem = document.querySelectorAll('[data-role="menu-item"]')[0]

    firstMenuItem.click()

    expect(onChangeShelf).toBeCalled()

    wrapper.unmount()
})

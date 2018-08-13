import React from 'react'
import { mount, render } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'

import Sidebar from '.'
import MenuItem from '../MenuItem'


const getElement = (onClickItem, activePage) => (
    <Router>
        <Sidebar
            onClickItem={onClickItem}
            activePage={activePage}
        />
    </Router>
)

describe('Sidebar component', () => {

    it('render without errors', () => {
        const onClickItem = () => {}
        const activePage = 'home'

        const component = render(
            getElement(onClickItem, activePage)
        )

        expect(component).toMatchSnapshot()
    })

    it('trigger onClickItem function', () => {
        const onClickItem = jest.fn()
        const activePage = 'home'

        const wrapper = mount(
            getElement(onClickItem, activePage)
        )

        const menuItem = wrapper.find(MenuItem).at(0)

        menuItem.simulate('click')

        expect(onClickItem).toBeCalled()

        wrapper.unmount()
    })

})

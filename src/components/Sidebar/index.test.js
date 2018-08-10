import React from 'react'
import { mount, render } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'

import Sidebar from '.'
import MenuItem from '../MenuItem'


describe('Sidebar component', () => {

    it('render without errors', () => {
        const onClickItem = () => {}
        const active = 'home'
        const element = render(
            <Router>
                <Sidebar onClickItem={onClickItem} active={active} />
            </Router>
        )

        expect(element).toMatchSnapshot()
    })

    it('trigger onClickItem function', () => {
        const onClickItem = jest.fn()
        const active = 'home'

        const wrapper = mount(
            <Router>
                <Sidebar onClickItem={onClickItem} active={active} />
            </Router>
        )

        const menuItem = wrapper.find(MenuItem).at(0)

        menuItem.simulate('click')

        expect(onClickItem).toBeCalled()

        wrapper.unmount()
    })

})

import React from 'react'
import { render, mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'

import MenuItem from '.'


describe('Sidebar menu item component', () => {

    it('render without errors', () => {
        const onClick = () => {}
        const text = 'Lorem ipsum'
        const link = 'test'
        const element = render(
            <Router>
                <MenuItem onClick={onClick} text={text} link={link} />
            </Router>
        )

        expect(element).toMatchSnapshot()
    })

    it('trigger onClick function', () => {
        const onClick = jest.fn()
        const text = 'Lorem ipsum'
        const link = 'test'

        const wrapper = mount(
            <Router>
                <MenuItem onClick={onClick} text={text} link={link} />
            </Router>
        )

        wrapper.simulate('click')

        expect(onClick).toBeCalled()

        wrapper.unmount()
    })

})

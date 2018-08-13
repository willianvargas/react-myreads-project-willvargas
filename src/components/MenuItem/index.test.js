import React from 'react'
import { render, mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'

import MenuItem from '.'


describe('Sidebar menu item component', () => {

    it('render without errors', () => {
        const onClick = () => {}
        const text = 'Foo bar'
        const link = 'test'

        const component = render(
            <Router>
                <MenuItem onClick={onClick} text={text} link={link} />
            </Router>
        )

        expect(component).toMatchSnapshot()
    })

    it('trigger onClick function', () => {
        const onClick = jest.fn()
        const text = 'Foo bar'
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

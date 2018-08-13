import React from 'react'
import { mount, render } from 'enzyme'

import SidebarDrawer from '.'


describe('Sidebar drawer component', () => {

    it('render without errors', () => {
        const component = render(
            <SidebarDrawer open={false}>
                <i />
            </SidebarDrawer>
        )

        expect(component).toMatchSnapshot()
    })

    it('mobile trigger onClose function', () => {
        const onClose = jest.fn()

        const wrapper = mount(
            <SidebarDrawer onClose={onClose} open mobile>
                <i />
            </SidebarDrawer>
        )

        wrapper.find('div').at(1).simulate('click')

        expect(onClose).toBeCalled()

        wrapper.unmount()
    })

})

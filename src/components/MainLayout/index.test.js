import React from 'react'
import { shallow } from 'enzyme'

import MainLayout from '.'


describe('Main layout component', () => {

    it('render without errors', () => {
        const component = shallow(
            <MainLayout>
                <i />
            </MainLayout>
        )

        expect(component).toMatchSnapshot()
    })

    it('open sidebar on click drawer toggle', () => {
        const wrapper = shallow(
            <MainLayout>
                <i />
            </MainLayout>
        ).dive()

        wrapper.setState({ sidebarOpen: false })

        wrapper.instance().onClickToolbarButton()

        expect(wrapper.state('sidebarOpen')).toEqual(true)
    })

    it('open mobile sidebar on click drawer toggle', () => {
        const default_window_width = global.innerWidth
        global.innerWidth = 540

        const wrapper = shallow(
            <MainLayout>
                <i />
            </MainLayout>
        ).dive()

        wrapper.setState({ sidebarMobileOpen: false })

        wrapper.instance().onClickToolbarButton()

        expect(wrapper.state('sidebarMobileOpen')).toEqual(true)

        global.innerWidth = default_window_width
    })

    it('hide mobile sidebar on click sidebar menu item', () => {
        const wrapper = shallow(
            <MainLayout>
                <i />
            </MainLayout>
        ).dive()

        wrapper.setState({ sidebarMobileOpen: true })

        wrapper.instance().onClickSidebarItem()

        expect(wrapper.state('sidebarMobileOpen')).toEqual(false)
    })

})

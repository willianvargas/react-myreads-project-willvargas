import React from 'react'
import { mount } from 'enzyme'

import Home from '@material-ui/icons/Home'
import Title from '.'


describe('Title component', () => {

    it('render the text', () => {
        const text = 'Foo bar'

        const wrapper = mount(
            <Title>
                {text}
            </Title>
        )

        expect(wrapper.text()).toEqual(text)

        wrapper.unmount()
    })

    it('render with icon', () => {
        const icon = <Home id="icon" />
        const text = 'Foo bar'

        const wrapper = mount(
            <Title icon={icon}>
                {text}
            </Title>
        )

        expect(wrapper.find('#icon').get(0)).toBeDefined()

        wrapper.unmount()
    })

})

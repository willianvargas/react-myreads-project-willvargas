import React from 'react'
import { mount, render } from 'enzyme'

import SearchInput from '.'


describe('Search input component', () => {

    it('render without errors', () => {
        const onChange = () => {}
        const value = ''
        const element = render(<SearchInput onChange={onChange} value={value} />)

        expect(element).toMatchSnapshot()
    })

    it('trigger onChange on input text', () => {
        const onChange = jest.fn()
        const value = ''
        const wrapper = mount(<SearchInput onChange={onChange} value={value} />)

        wrapper.find('input').simulate('change', { target: { value: 'abc' } })

        expect(onChange).toBeCalled()

        wrapper.unmount()
    })

})

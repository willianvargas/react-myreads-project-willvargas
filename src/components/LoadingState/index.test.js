import React from 'react'
import { render } from 'enzyme'

import LoadingState from '.'


describe('Loading State component', () => {

    it('render without errors', () => {
        const component = render(
            <LoadingState />
        )

        expect(component).toMatchSnapshot()
    })

    it('render with inline style', () => {
        const component = render(
            <LoadingState inline />
        )

        expect(component).toMatchSnapshot()
    })

})

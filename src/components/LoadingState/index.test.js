import React from 'react'
import { render } from 'enzyme'

import LoadingState from '.'


describe('Loading State component', () => {

    it('render without errors', () => {
        const element = render(<LoadingState />)

        expect(element).toMatchSnapshot()
    })

    it('render with inline style', () => {
        const element = render(<LoadingState inline />)

        expect(element).toMatchSnapshot()
    })

})

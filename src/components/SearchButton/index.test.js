import React from 'react'
import { render } from 'enzyme'

import SearchButton from '.'


describe('Search button component', () => {

    it('render without errors', () => {
        const component = render(
            <SearchButton />
        )

        expect(component).toMatchSnapshot()
    })

})

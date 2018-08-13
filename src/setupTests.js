import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import mockFetch from './tests/BooksAPI'

configure({ adapter: new Adapter() })

global.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
}

global.fetch = mockFetch

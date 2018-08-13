import { booksList } from './books'


const mockFetch = (url, request) => {
    return new Promise(() => {
        const uri = url.split('.com/')[1]
        switch (uri) {
            case 'search':
                return booksList.map(book => {
                    book.shelf = undefined
                    return book
                })
            case 'books':
                return booksList
            case 'books/jAUODAAAQBAJ':
            case 'books/IOejDAAAQBAJ': {
                const id = uri.split('/')[1]
                let shelves = {}
                booksList.forEach(book => {
                    const shelf = id === book.id ? request.body.shelf : book.shelf
                    shelves[shelf] = [
                        ...(shelves[shelf] || []),
                        book.id
                    ]
                })
                return shelves
            }
            default:
                return undefined
        }
    })
}

export default mockFetch

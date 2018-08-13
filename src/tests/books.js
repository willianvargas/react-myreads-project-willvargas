export const booksList = [
    {
        "title": "Needful Things",
        "authors": [
            "Stephen King"
        ],
        "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "id": "jAUODAAAQBAJ",
        "shelf": "wantToRead"
    },
    {
        "title": "React",
        "authors": [
            "Nils Hartmann",
            "Oliver Zeigermann"
        ],
        "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "id": "IOejDAAAQBAJ",
        "shelf": "read"
    },
]

export const getBooksObject = () => {
    let { booksObject } = {}
    booksList.forEach(book => {
        booksObject = {
            ...booksObject,
            [book.id]: book
        }
    })
    return booksObject
}

export default { booksList, getBooksObject }

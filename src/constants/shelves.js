import React from 'react'
import {
    LocalLibrary as CurrentlyReadingIcon,
    CollectionsBookmark as WantToReadIcon,
    LibraryBooks as ReadIcon
} from '@material-ui/icons'

const shelves = [
    {
        id: 'currentlyReading',
        title: 'Currently Reading',
        icon: <CurrentlyReadingIcon />,
    },
    {
        id: 'wantToRead',
        title: 'Want to Read',
        icon: <WantToReadIcon />
    },
    {
        id: 'read',
        title: 'Read',
        icon: <ReadIcon />
    },
]

export default shelves

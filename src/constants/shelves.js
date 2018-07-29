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
        Icon: <CurrentlyReadingIcon />,
    },
    {
        id: 'wantToRead',
        title: 'Want to Read',
        Icon: <WantToReadIcon />
    },
    {
        id: 'read',
        title: 'Read',
        Icon: <ReadIcon />
    },
]

export default shelves

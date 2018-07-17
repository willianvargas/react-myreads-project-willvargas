import React, { Component } from 'react'

import List from '@material-ui/core/List'
import {
    Home as HomeIcon,
    LocalLibrary as CurrentlyReadingIcon,
    CollectionsBookmark as WantToReadIcon,
    LibraryBooks as ReadIcon
} from '@material-ui/icons'

import MenuItem from './MenuItem'

const itens = [
    {
        id: "home",
        text: "Home",
        icon: <HomeIcon />
    },
    {
        id: "reading",
        text: "Currently Reading",
        icon: <CurrentlyReadingIcon />
    },
    {
        id: "want",
        text: "Want to Read",
        icon: <WantToReadIcon />
    },
    {
        id: "read",
        text: "Read",
        icon: <ReadIcon />
    }
]


class SideBar extends Component {

    state = {
        active: "home"
    }

    handleClick = (id) => {
        this.setState({ active: id })
    }

    render() {
        const { active } = this.state
        return (
            <List>
                {itens.map((item) => {
                    return (
                        <MenuItem
                            key={item.id}
                            id={item.id}
                            text={item.text}
                            icon={item.icon}
                            active={active === item.id}
                            onClick={this.handleClick}
                        />
                    )
                })}
            </List>
        )
    }
}

export default SideBar

import React, { Component } from 'react'

import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import {
    Home as HomeIcon,
    LocalLibrary as CurrentlyReadingIcon,
    CollectionsBookmark as WantToReadIcon,
    LibraryBooks as ReadIcon
} from '@material-ui/icons'

import MenuItem from './MenuItem'


const reactPage = "https://br.udacity.com/course/react-nanodegree--nd019"


class SideBar extends Component {

    handleClick = (id) => {
        console.log("Menu click", id)
    }

    render() {
        return (
            <List>
                <MenuItem
                    id="home"
                    icon={<HomeIcon />}
                    text="Home"
                    isActive={false}
                    onClick={this.handleClick}
                />
                <MenuItem
                    id="reading"
                    icon={<CurrentlyReadingIcon />}
                    text="Currently Reading"
                    isActive={false}
                    onClick={this.handleClick}
                />
                <MenuItem
                    id="want"
                    icon={<WantToReadIcon />}
                    text="Want to Read"
                    isActive={false}
                    onClick={this.handleClick}
                />
                <MenuItem
                    id="read"
                    icon={<ReadIcon />}
                    text="Read"
                    isActive={false}
                    onClick={this.handleClick}
                />
                <Divider />
                <MenuItem
                    id="reactPage"
                    text="React Nanodegree Page"
                    isActive={false}
                    onClick={() => {
                        window.open(reactPage, "_blank")
                    }}
                />
            </List>
        )
    }
}

export default SideBar

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
                <MenuItem
                    id="home"
                    icon={<HomeIcon />}
                    text="Home"
                    isActive={active === "home"}
                    onClick={this.handleClick}
                />
                <MenuItem
                    id="reading"
                    icon={<CurrentlyReadingIcon />}
                    text="Currently Reading"
                    isActive={active === "reading"}
                    onClick={this.handleClick}
                />
                <MenuItem
                    id="want"
                    icon={<WantToReadIcon />}
                    text="Want to Read"
                    isActive={active === "want"}
                    onClick={this.handleClick}
                />
                <MenuItem
                    id="read"
                    icon={<ReadIcon />}
                    text="Read"
                    isActive={active === "read"}
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

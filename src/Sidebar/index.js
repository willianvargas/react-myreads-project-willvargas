import React from 'react'

import List from '@material-ui/core/List'
import { Home as HomeIcon } from '@material-ui/icons'

import MenuItem from './components/MenuItem'

import shelves from '../constants/shelves'

const itens = [
    {
        id: "home",
        title: "Home",
        Icon: <HomeIcon />
    },
    ...shelves
]


const SideBar = ({ active }) => {
    return (
        <List component="div">
            {itens.map((item) => {
                return (
                    <MenuItem
                        key={item.id}
                        link={item.id === 'home' ? '/' : '/' + item.id}
                        text={item.title}
                        icon={item.Icon}
                        active={active === item.id}
                    />
                )
            })}
        </List>
    )
}

export default SideBar

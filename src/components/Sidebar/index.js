import React from 'react'
import PropTypes from 'prop-types'

import List from '@material-ui/core/List'
import { Home as HomeIcon } from '@material-ui/icons'

import MenuItem from './components/MenuItem/index'

import shelves from '../../constants/shelves'

const itens = [
    {
        id: "home",
        title: "Home",
        icon: <HomeIcon />
    },
    ...shelves
]


const SideBar = ({ active, onClickItem }) => {
    return (
        <List component="div">
            {itens.map((item) => {
                return (
                    <MenuItem
                        key={item.id}
                        link={item.id === 'home' ? '/' : '/' + item.id}
                        text={item.title}
                        icon={item.icon}
                        active={active === item.id}
                        onClick={() => {
                            onClickItem(item.id)
                        }}
                    />
                )
            })}
        </List>
    )
}

SideBar.propTypes = {
    active: PropTypes.string.isRequired,
    onClickItem: PropTypes.func.isRequired
}

export default SideBar

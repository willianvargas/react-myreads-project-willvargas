import React, { Component } from 'react'

import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'

import MuiTheme from './styles/MuiTheme'
import MainLayout from './MainLayout'
import LibraryAddButton from './LibraryAddButton'


class HomePage extends Component {

    componentDidMount() {

    }

    onClickLibraryAdd = (e) => {
        e.stopPropagation()
        console.log("Click add")
    }

    render() {
        return (
            <MuiThemeProvider theme={MuiTheme}>
                <CssBaseline />
                <MainLayout>
                    <Typography>
                        Test
                    </Typography>
                </MainLayout>
                <LibraryAddButton onClick={this.onClickLibraryAdd} />
            </MuiThemeProvider>
        )
    }

}


export default HomePage

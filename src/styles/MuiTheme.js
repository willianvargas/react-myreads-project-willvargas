import { createMuiTheme } from '@material-ui/core/styles'


export default createMuiTheme({
    palette: {
        primary: {
            light: '#938E73',
            main: '#4A4739',
            dark: '#35311B',
            contrastText: '#fff'
        },
        secondary: {
            light: '#6C8C7E',
            main: '#47695A',
            dark: '#253F34',
            contrastText: '#fff'
        }
    },
    overrides: {
        MuiListItemText: {
            primary: {
                fontSize: '0.86rem',
                fontWeight: '500',
                color: 'rgba(0, 0, 0, 0.6)'
            }
        }
    }
})

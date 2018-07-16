import { createMuiTheme } from '@material-ui/core/styles'


export default createMuiTheme({
    palette: {
        primary: {
            light: '#36818F',
            main: '#1A6978',
            dark: '#094C58',
            contrastText: '#fff'
        },
        secondary: {
            light: '#E89D55',
            main: '#C37326',
            dark: '#8E4B0B',
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

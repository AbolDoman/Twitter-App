import {makeStyles} from '@mui/styles';
export const useStyles = makeStyles(theme =>({
    header : {
        backgroundColor: 'white',
        display : 'flex',
        textAlign : 'center',
        height : '15',

    },
    headerText : {
        fontWeight : 'bold',
        fontSize : '1.2rem'
    },
    menuIcon : {
        [theme.breakpoints.up('750')]:{
            display: 'none !important',
        }
    }
}));
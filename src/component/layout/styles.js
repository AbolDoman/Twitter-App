import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles({
    root : {
        height : '100vh',
        width : '100%',
        display : 'flex',
        overflow : 'hidden',
    },
    divider : {
        height : '100%',
        width : 1,
        backgroundColor : '#99B9FF',

    },
    circularP : {
        width : '100%',
        height : '100vh',
        backgroundColor: '#1B1E26',
        alignItems : 'center',
        display: 'flex',
        flexDirection : 'column',
        justifyContent : 'center',

    },
    circularProgressText : {
        marginTop : 10,
        color : '#99B9FF',
        fontWeight : 'bold',

    }

});
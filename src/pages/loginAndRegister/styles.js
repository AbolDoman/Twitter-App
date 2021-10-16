import {makeStyles} from '@mui/styles';
export const useStyles = makeStyles({
    root : {
        background : 'gainsboro',
        width: '100%',
        height : '100%',

    },
    header : {
        width : '50%',
        position : "absolute",
        display : 'flex',
        flexDirection : 'column',
        marginRight : '23%',
        marginTop : '2%',
        marginBottom : '2%',
        padding : '3%',
        background : '#EDFFDF !important',

    },
    LRBtn : {
        flex : 1,
        fontFamily : 'Samim !important',
        fontSize : '1.2rem !important',
        fontWeight : 'bold !important',
    },
    fontSamim : {
        fontFamily : 'Samim !important',

    },
    fontSamim2 : {
        fontFamily : 'Samim !important',
        color : 'white !important',
        fontWeight: 'bold !important'

    }

});

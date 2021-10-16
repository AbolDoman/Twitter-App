import {makeStyles} from '@mui/styles';
export const useStyles = makeStyles(theme => ({
    root : {
        width : 250,
        backgroundColor : 'white',
        overflowY : 'auto',
        [theme.breakpoints.down('750')]:{
            width : "400px !important"
        }
    },
    logo : {
        width: '100%',
        height: '100%',
        padding : '15%',
    },
    logoType : {
        fontSize : '120% !important',
        color : theme.palette.primary.main,

    },
    hottestHashTags : {
        padding : '2%',
        marginRight : 17,
        fontWeight : 'bold',
    },
    hashTagLogo : {
        width: '60% ',
        height: '60%',

    },
    hashTagText : {
        fontSize : '120% !important',
        fontWeight : 'bold !important',
        fontFamily : 'Samim !important',
        direction : 'right !important'
    },
    parent : {
        width : '100% !important',

    }
}));


//
// import {makeStyles} from '@mui/styles';
// export const useStyles = makeStyles(theme => ({
//     root : {
//         width : '18%',
//         backgroundColor : 'white',
//         overflowY : 'auto',
//     },
//     logo : {
//         width: '100%',
//         height: '100%',
//         padding : '15%',
//     },
//     logoType : {
//         fontSize : '120% !important',
//         color : theme.palette.primary.main,
//
//     },
//     hottestHashTags : {
//         padding : '2%',
//         marginRight : 17,
//         fontWeight : 'bold',
//     },
//     hashTagLogo : {
//         width: '60% ',
//         height: '60%',
//
//     },
//     hashTagText : {
//         fontSize : '120% !important',
//         fontWeight : 'bold !important',
//         fontFamily : 'Samim !important',
//         direction : 'right !important'
//     },
//     parent : {
//         width : '100% !important',
//
//     }
// }));
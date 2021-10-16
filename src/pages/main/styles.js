import {makeStyles} from '@mui/styles';
export const useStyles = makeStyles(theme =>({
    root: {
        flex : 1,
        backgroundColor : 'gainsboro',
        overflowY : 'auto',

    },
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
    divider: {
        width : '100%',
        height: '1',
        backgroundColor : theme.palette.primary.light,
    },
    userImage : {
        width: 70,
        height : 70,
        borderRadius : '50%',
    },
    newTweet : {
        backgroundColor :  'white',
        padding : '3%',
    },
    inputNewTweet : {
        height :'10%',
        marginTop : '2.5%',
        marginRight : '2%',
        outline : 'none',
        border : 'none',
        flex : 1,
        fontFamily : 'Samim !important',

    },
    newTweetBtn : {
        color :'white !important',
        backgroundColor : '#5DA9DD !important',
        fontFamily : 'Samim !important'
    },
    addPhotoIcon : {
        color : '#5DA9DD !important',
        marginTop : 5,
        marginBottom : 5,
        marginLeft : 3,
        marginRight : 3,
    },
    tweet : {
        backgroundColor :  'white',
        padding : '3%',
        marginTop : '1.5%',

    },
    twitterUserImage : {
        width: 45,
        height : 45,
        borderRadius : '50%',
    },
    twitterUserName : {
        fontWeight : 'bold !important',
        fontSize : '100% !important',
        fontFamily : 'Samim !important',
        marginRight : '2.25% !important',
    },
    twitterUserId: {
        fontSize : '0.8rem !important',
        opacity : '80%',
        marginRight : '1.75% !important',
        marginTop : '0.5% !important',
        direction : 'ltr !important',

    },
    tweetText : {
        marginRight : '8.25% !important',
        fontFamily : 'Samim !important',

    },
    reTweetIcon : {
        width: 30,
        height : 30,
        borderRadius : '50%',
        border : '0.5px solid gainsboro',


    },
    likeTweet : {
        border : '0.5px solid gainsboro',
        borderRadius : '50%',
        fontSize: '1.8rem !important',
    },
    tweetCount : {
        fontSize: '80% !important',
        marginTop : '17px !important',

    },
    imageOfTweet : {
        height:'10rem !important',
        width : '10rem !important',
        backgroundSize : '100% 100%',
        backgroundRepeat : 'no-repeat',
        borderRadius : '0.5rem',

    },
    noTweetTextParent : {
        height : '95vh',
        width : '100%',
        backgroundColor : 'black',
    },
    noTweetText : {
        fontSize : '180%',
        fontWight : 'bold',
        color : 'white',
        position : 'absolute',
        top : 150,


    }
    
}));
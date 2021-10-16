import {createTheme} from "@mui/material";
import tinyColor from 'tinycolor2'
const color = '#5DA9DD';
export const theme = createTheme({
    palette : {
        primary : {
            main : color,
            light : tinyColor(color).lighten().toString(),
            dark : tinyColor(color).darken().toString(),
        }
    },
});


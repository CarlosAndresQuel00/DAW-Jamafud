import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        height: 458,
        flexGrow: 1,
        minWidth: 300,
        transform: "translateZ(0)",
        textAlign: "center",
        // The position fixed scoping doesn't work in IE 11.
        // Disable this demo to preserve the others.
        "@media all and (-ms-high-contrast: none)": {
            display: "none",
        },
    },
    modal: {
        display: "flex",
        padding: theme.spacing(1),
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        width: 800,
        height: 400,
        backgroundImage:
            "url(https://img.goraymi.com/2019/09/23/95ede13d76c8d9272080956aa7ae4812_lg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(0),
    },
    paper2: {
        height: 396,
        width: 796,
        padding: theme.spacing(2),
        textAlign: "center",
        boxShadow: theme.shadows[0],
        backgroundColor: "#E1E5EE",
        opacity: 0.9,
    },
}));

export default useStyles;
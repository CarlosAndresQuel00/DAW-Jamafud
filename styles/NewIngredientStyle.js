import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    formControl: {
        minWidth: 210,
        backgroundColor: "#fff",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        backgroundColor: "#E0CFFC",
    },
    paper2: {
        textAlign: "center",
        marginTop: 0,
    },
}));

export default useStyles;
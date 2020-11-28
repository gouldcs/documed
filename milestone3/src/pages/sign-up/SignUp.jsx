import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DocuMedDescription from "./signup-components/DocuMedDescription";
import SignUpComponent from "./signup-components/SignUpComponent";
import Header from "../../components/Header";

const useStyles = makeStyles(
    (theme) => ({
        signUpContent: {
            display: "flex",
            flexDirection: "column",
        },

        default: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 50,
        },

        description: {
            display: 'flex',
            paddingRight: 50,
            paddingTop: 130,
            justifyContent: 'center'
        },
    }), { name: "SignUp" }
)

const SignUp = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.signUpContent}>
            <Header text="Welcome to DocuMed" />
            <div className={classes.default}>
                <div className={classes.description}>
                    <DocuMedDescription />
                </div>
                <div className={classes.signup}>
                    <SignUpComponent />
                </div>
            </div>
        </div>
    )
}

export default SignUp
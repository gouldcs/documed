import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DocuMedDescription from "../../components/DocuMedDescription";
import SignUpComponent from "../../components/SignUpComponent";
import Header from "../../components/Header";

const useStyles = makeStyles(
    (theme) => ({
        default: {
            display: 'flex',
            flexDirection: 'row',
            margin: 'auto',
            justifyContent: 'center',
            marginTop: 55
        },

        description: {
            display: 'flex',
            paddingRight: 150,
            paddingTop: 130,
            paddingBottom: 30,
            justifyContent: 'center'
        }
    })
)

const SignUp = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Header/>
            <div className={classes.default}>
                <div className={classes.description}>
                    <DocuMedDescription/>
                </div>
                <SignUpComponent/>
            </div>
        </div>
    )
}

export default SignUp
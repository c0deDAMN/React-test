import TextField from "./TextField";
import React from "react"

const FirstNameField = ({ ...rest }) => (
    <TextField name="firstName" label="First name:" {...rest} />
);

export default FirstNameField;

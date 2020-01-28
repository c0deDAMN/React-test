import TextField from "./TextField";
import React from "react"

const LastNameField = ({ ...rest }) => (
    <TextField name="lastName" label="Last name:" {...rest} />
);

export default LastNameField;

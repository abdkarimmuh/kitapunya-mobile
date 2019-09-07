import React, { Component } from "react";
import { TextInput } from "@app/components";
import { darkTheme } from "@app/themes";
import Styles from "@app/assets/styles";

const TextInputLoginRegister = (
    label,
    value,
    onChangeText
) => (
        <TextInput
            label={label}
            mode='outlined'
            theme={darkTheme}
            value={value}
            onChangeText={onChangeText}
            style={Styles.textInput}
        />
    );

export default TextInputLoginRegister;

import React, { Component } from "react";
import { TextInput } from "@app/components";
import { darkTheme } from "@app/themes";
import Styles from "@app/assets/styles";

const TextInputLoginRegister = (
    label,
    value,
    onChangeText,
    isPassword,
    keyboardType
) => (
        <TextInput
            label={label}
            mode='outlined'
            theme={darkTheme}
            value={value}
            onChangeText={onChangeText}
            style={Styles.textInput}
            secureTextEntry={isPassword}
            keyboardType={keyboardType}
        />
    );

export default TextInputLoginRegister;

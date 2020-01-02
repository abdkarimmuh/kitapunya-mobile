import React from "react";
import { TextInput } from "@app/components";
import { darkTheme } from "@app/themes";

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
            style={{ marginBottom: 16 }}
            secureTextEntry={isPassword}
            keyboardType={keyboardType}
        />
    );

export default TextInputLoginRegister;

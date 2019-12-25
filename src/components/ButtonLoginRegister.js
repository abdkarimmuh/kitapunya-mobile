import React, { Component } from "react";
import { Button } from "@app/components";
const ButtonLoginRegister = (
    label,
    onPress
) => (
        <Button
            style={{ padding: 8, marginTop: 24 }}
            mode="contained"
            dark
            onPress={onPress}>
            {label}
        </Button>
    );

export default ButtonLoginRegister;

import React from "react";
import { Button } from "@app/components";

const ButtonLoginRegister = (label, onPress, disabled) => (
    <Button style={{ padding: 8, marginTop: 24 }} mode="contained" dark
        onPress={onPress} disabled={disabled}>{label}
    </Button>
);

export default ButtonLoginRegister;

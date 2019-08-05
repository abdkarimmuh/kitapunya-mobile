import { SET_TEMP, REMOVE_TEMP } from "./types";

const setData = (data: any) => ({
    type: SET_TEMP,
    payload: data
});

const removeData = (key: string) => ({
    type: REMOVE_TEMP,
    payload: key
});

export default {
    setData,
    removeData
};

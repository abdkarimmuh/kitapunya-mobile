import apisauce from "apisauce";

import { Config } from "@app/api";

const get = (baseURL = Config.baseUrl) => {
    const api = apisauce.create({ baseURL });

    const user = (token) => api.get(`/getUser`, {}, { headers: { "Authorization": `Bearer ${token}` } });

    return {
        user
    }
}

const post = (baseURL = Config.baseUrl) => {
    const api = apisauce.create({ baseURL });

    const login = (email, password) => api.post(`/login`, { email: email, password: password });
    const changePassword = (token, oldPassword, password) => api.post(`/changePassword`, { oldPassword: oldPassword, password: password }, { headers: { "Authorization": `Bearer ${token}` } });

    return {
        login, changePassword
    }
}

export default {
    get, post
}
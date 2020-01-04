import apisauce from "apisauce";

import { Config } from "@app/api";

const get = (baseURL = Config.baseUrl) => {
    const api = apisauce.create({ baseURL });

    const user = (token) => api.get(`/getUser`, {}, { headers: { "Authorization": `Bearer ${token}` } });
    const logout = (token) => api.get(`/logout`, {}, { headers: { "Authorization": `Bearer ${token}` } });
    const campaign = (token) => api.get(`/campaign`, {}, { headers: { "Authorization": `Bearer ${token}` } });
    const campaignCurrent = (token) => api.get(`/campaign/getCurrent`, {}, { headers: { "Authorization": `Bearer ${token}` } });
    const campaignCategory = (token, category) => api.get(`/campaign/getCategory/${category}`, {}, { headers: { "Authorization": `Bearer ${token}` } });
    const campaignDetail = (token, id) => api.get(`/campaign/getDetail/${id}`, {}, { headers: { "Authorization": `Bearer ${token}` } });

    return {
        user, logout, campaign, campaignCurrent, campaignCategory, campaignDetail
    }
}

const post = (baseURL = Config.baseUrl) => {
    const api = apisauce.create({ baseURL });

    const login = (email, password) => api.post(`/loginAsDonatur`, { email: email, password: password });
    const register = (name, email, password) => api.post(`/register`, { name: name, email: email, password: password, role_id: 3 });
    const changePassword = (token, oldPassword, password) => api.post(`/changePassword`, { oldPassword: oldPassword, password: password }, { headers: { "Authorization": `Bearer ${token}` } });

    return {
        login, register, changePassword
    }
}

export default {
    get, post
}
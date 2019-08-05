import apisauce from 'apisauce';

import { Config } from '@app/api';

const create = (baseURL = Config.baseUrl) => {
    const api = apisauce.create({ baseURL })

    //method get
    const getLogout = (token) => api.get(`/logout`, {}, { headers: { 'Authorization': `Bearer ${token}` } })
    const getCategory = (token, category) => {
        if (category === 'Semua') {
            return api.get(`/campaign`, {}, { headers: { 'Authorization': `Bearer ${token}` } })
        } else {
            return api.get(`/campaign?category=${category}`, {}, { headers: { 'Authorization': `Bearer ${token}` } })
        }
    }
    //Kurang
    const getUser = (token) => api.get(`/user`, {}, { headers: { 'Authorization': `Bearer ${token}` } })
    //->yg belum
    const getIntro = () => api.get('/intro')
    const getCarousel = () => api.get('/carousel')
    const getDetailCampaign = (token, title) => api.get(`/campaign?title=${title}`, {}, { headers: { 'Authorization': `Bearer ${token}` } })
    const getListDonatur = (token, title) => api.get(`/donatur?title=${title}`, {}, { headers: { 'Authorization': `Bearer ${token}` } })
    const getRelease = (token) => api.get('/release', {}, { headers: { 'Authorization': `Bearer ${token}` } })
    const getDetailRelease = (token, title) => api.get(`/release?title=${title}`, {}, { headers: { 'Authorization': `Bearer ${token}` } })
    const getHistory = (token) => api.get('/history', {}, { headers: { 'Authorization': `Bearer ${token}` } })
    const getFAQ = () => api.get('/faq')
    const getPrivacy = () => api.get(`/privacy`)

    //method post
    const postLogin = (email, password) => api.post(`/login`, { email: email, password: password })
    const postRegister = (first_name, last_name, email, password, confrim_password) => api.post(`/register`, { firstname: first_name, lastname: last_name, email: email, password: password, confrim_password: confrim_password })
    //->yg belum
    const postEditProfile = (first_name, last_name, email, phone, address, gender, birth_date) => api.post('/user', { firstname: first_name, lastname: last_name, email: email, password: password, confrim_password: confrim_password, phone: phone, address: address, gender: gender, birth_date: birth_date })
    const postDonasi = (token, title, image, jenis_barang, jumlah, longitude, latitude, alamat, anonim) => api.post('/donasi', { token: token, title: title, image: image, jenis_barang: jenis_barang, jumlah: jumlah, longitude: longitude, latitude: latitude, alamat: alamat, anonim: anonim })

    const deleteHistory = (token) => api.delete('/history', {}, { headers: { 'Authorization': `Bearer ${token}` } })
    return {
        getLogout, getCategory, getUser, getRelease, getHistory, getDetailCampaign, getListDonatur, getDetailRelease,
        getCarousel, getPrivacy, getIntro, getFAQ,
        postLogin, postRegister, postEditProfile, postDonasi,
        deleteHistory
    }
}

export default {
    create
}
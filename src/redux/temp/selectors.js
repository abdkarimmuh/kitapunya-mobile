const getData = (store, key, fallback) => store.temp[key] || fallback

export default {
    getData
}

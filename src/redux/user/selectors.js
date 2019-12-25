const token = store => store.user.token
const id = store => store.user.id
const name = store => store.user.name
const email = store => store.user.email
const path_photo = store => store.user.path_photo

export default {
    token, id, name, email, path_photo
}

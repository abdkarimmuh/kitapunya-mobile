const faker = require('faker')

// [USER]
// const indomie = (idx) => ({
//     id: idx,
//     label: faker.name.findName(),
//     judul: faker.name.findName(),
//     deskripsi: faker.lorem.paragraph(faker.random.number(2, 5)),
//     image_url: faker.image.imageUrl(),
//     lembaga: faker.name.firstName(),
//     foto_lembaga: faker.internet.avatar(),
//     barang_total: faker.random.number(50, 100),
//     barang_terkumpul: faker.random.number(10, 50),
//     sisa_waktu: faker.random.number(10, 20),
//     progres_barang: faker.random.number(),
//     jenis_barang: cikiber
// })

// [STATUS]
// const indomie = (idx) => ({
//     id: idx,
//     title: faker.name.findName(),
//     status: faker.random.number({min: 1, max: 5}),
//     date: faker.date.recent()
// })

// [RELEASE]
// const indomie = (idx) => ({
//     id: idx,
//     title: faker.name.findName(),
//     name: faker.name.jobTitle(),
//     avatar: faker.internet.avatar(),
//     image: faker.image.imageUrl(),
//     description: faker.lorem.paragraph()
// })

// [DONATUR]
// const indomie = () => ({
//     name: faker.name.findName(),
//     avatar: faker.internet.avatar()
// })

// [FAQ]
// const indomie = (idx) => ({
//     id: idx,
//     name: faker.name.findName(),
//     content: faker.lorem.paragraph(),
//     isShow: faker.random.boolean()
// })

// [Intro]
const indomie = (idx) => ({
    key: idx,
    title: faker.name.findName(),
    text: faker.lorem.paragraph(),
    image: faker.image.imageUrl()
})

let arr = []
for (let i = 1; i < 4; i++) {
    arr.push(indomie(i))
}
console.log(JSON.stringify(arr))
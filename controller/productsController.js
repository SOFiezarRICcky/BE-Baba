const Product = require("../models/product")
const jwt = require("jsonwebtoken")

exports.home = (req, res) => {
    res.send("Wellcome to Baba Courses")
}

exports.listProduct = async (req, res) => {
    let data = await Product.find()
    res.send(JSON.stringify({ "status": 200, "error": null, "response": data }))

}

exports.detailProduct = async (req, res) => {
    const data = await Product.findById(req.params.id)
    res.send(JSON.stringify({ "status": 200, "erros": null, "response": data }))
}

exports.tambahProduct = async (req, res) => {

    const nama_kursus = req.body.nama_kursus
    const durasi = req.body.durasi
    const jumlah_murid = Number.parseInt(req.body.jumlah_murid)
    const jumlah_materi = Number.parseInt(req.body.jumlah_materi)
    const harga = Number.parseInt(req.body.harga)
    const image = req.body.image

    if (harga >= 5000000) {
        const data = {
            diskon: (harga - (harga * 20 / 100)) - 100000,
            durasi: durasi,
            nama_kursus: nama_kursus,
            jumlah_murid: jumlah_murid,
            jumlah_materi: jumlah_materi,
            harga: harga,
            image: image
        }
        const products = new Product(data)
        const status = await products.save()
        res.send(JSON.stringify({ "status": 200, "error": null, "response": status }))
    } else {
        const data = {
            diskon: (harga - (harga * 20 / 100)),
            durasi: durasi,
            nama_kursus: nama_kursus,
            jumlah_murid: jumlah_murid,
            jumlah_materi: jumlah_materi,
            harga: harga,
            image: image
        }
        const products = new Product(data)
        const status = await products.save()
        res.send(JSON.stringify({ "status": 200, "error": null, "response": status }))

    }


}

exports.ubahProduct = async (req, res) => {
    const { id } = req.params

    const nama_kursus = req.body.nama_kursus
    const durasi = req.body.durasi
    const jumlah_murid = Number.parseInt(req.body.jumlah_murid)
    const jumlah_materi = Number.parseInt(req.body.jumlah_materi)
    const harga = Number.parseInt(req.body.harga)
    const image = req.body.image

    if (harga >= 5000000) {
        const data = {
            diskon: (harga - (harga * 20 / 100)) - 100000,
            durasi: durasi,
            nama_kursus: nama_kursus,
            jumlah_murid: jumlah_murid,
            jumlah_materi: jumlah_materi,
            harga: harga,
            image: image
        }
        const status = await Product.update({ _id: id }, data)
        res.send(JSON.stringify({ "status": 200, "error": null, "response": status }))
    } else {
        const data = {
            diskon: (harga - (harga * 20 / 100)),
            durasi: durasi,
            nama_kursus: nama_kursus,
            jumlah_murid: jumlah_murid,
            jumlah_materi: jumlah_materi,
            harga: harga,
            image: image
        }
        const status = await Product.update({ _id: id }, data)
        res.send(JSON.stringify({ "status": 200, "error": null, "response": status }))

    }



    // const status = await Product.update({ _id: id }, req.body)
    // res.send(JSON.stringify({ "status": 200, "error": null, "response": status }))
}

exports.hapusProduct = async (req, res) => {
    let { id } = req.params
    const status = await Product.remove({ _id: id })
    res.send(JSON.stringify({ "status": 200, "error": null, "response": status }))
}
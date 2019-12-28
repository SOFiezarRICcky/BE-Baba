var mongoose = require("mongoose")

var CoursesSchema = mongoose.Schema({
    nama_kursus: {
        type: String,
        required: true
    },
    durasi: {
        type: String,
        required: true
    },
    jumlah_murid: {
        type: Number,
        required: true
    },
    jumlah_materi: {
        type: Number,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
    diskon: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
},
    {
        timestamps: true
    })

var Product = module.exports = mongoose.model("courses", CoursesSchema)
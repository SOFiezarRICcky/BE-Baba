const productsController = require("../controller/productsController")
const userController = require("../controller/userController")
const auth = require("../middleware/auth.js")

module.exports = app => {
    app.get("/", productsController.home)


    // API Untuk CRUD Produk
    app.get("/products", productsController.listProduct)
    app.get("/products/:id", auth.verifyToken, productsController.detailProduct)
    app.post("/products/", auth.verifyToken, productsController.tambahProduct)
    app.put("/products/:id", auth.verifyToken, productsController.ubahProduct)
    app.delete("/products/:id", auth.verifyToken, productsController.hapusProduct)


    // API Untuk CRUD User
    app.get("/user", userController.listUser)
    app.get("/user/:id", userController.detailUser)
    app.post("/user/", userController.tambahUser)
    app.put("/user/:id", userController.ubahUser)
    app.delete("/user/:id", userController.hapusUser)
    // Jalankan api untuk addtocart dengan userCart 
    // merupakan id dari collection users dan productCart 
    // merupakan id dari collection products

    // Get Token
    app.post('/gettoken', userController.getToken)

}
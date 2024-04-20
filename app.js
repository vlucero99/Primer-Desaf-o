import express from "express";
import { addProducts, getProducts, getProductsById, updateProduct, deleteProduct} from "./PrimerDesafio/productManager"

const app = express ();

//inicializar la app de express

const port = 8080
const ready = console.log ("server ready on port "+port);

//inicializar el servidor

app.listen (port, ready);

//configuración de solucitudes/peticiones

app.get("/", (req, res) => {
    try{
        const message = "Bienvenido a mi proyecto"
        return res.json({status: 200, response: message})
    } catch (error){
        console.log(error);
        return res.json({status: 500, response: error.message})
    }
})

app.get("/products", read)

function read(req, res) {
    try {
        
    } catch (error) {
        
    }
}
import express from "express";
import router from "./src/routes/index.js";

const app = express ();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.use("/api", router);
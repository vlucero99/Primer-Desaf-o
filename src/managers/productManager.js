import fs from "fs"
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const currentDir = dirname(fileURLToPath(import.meta.url));
const pathFile = join (currentDir, 'data', 'products.json')

let products = []; // creación de array de products vacío


//creación de los productos
const addProducts = async (title, description, price, thumbnail, code, stock) => {
    const newProduct = {
        id: products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    }

//obligatoriedad de los campos
    if(Object.values(newProduct).includes(undefined)) {
        console.log("Todos los campos son obligatorios");
        return
    }

//control de unicidad en el codigo de cada producto
    const productExist = products.find ( product => product.code === code);
    if(productExist) {
        console.log(`El producto con el código ${code} ya existe`);
        return;
    }
    products.push(newProduct);

    await fs.promises.writeFile(pathFile, JSON.stringify(products))

};


const getProducts = async () => {
    const productsJson = await fs.promises.readFile(pathFile, "utf8");
    products = JSON.parse(productsJson) || []; //se usa el parse para que no lo devuelva en formato string

    return products;
}

//busqueda de products por id
const getProductsById = async (id) => {
    await getProducts();
    const product = products.find( product => product.id === id);
    if(!product) {
        console.log( `No se encontró el producto con el id ${id}`);
        return;
    }
    console.log(product);
    return product;
};
//actualización de los datos de un producto sin cambiar el id
const updateProduct = async (id, dataProduct) => {
    await getProducts();
    const index = products.findIndex(product => product.id === id);
    products [index] = {
        ...products[index],
        ...dataProduct
    }

    await fs.promises.writeFile(pathFile, JSON.stringify(products));
};

//eliminación de un producto
const deleteProduct = async (id) => {
    await getProducts();
    products = products.filter ( product => product.id !== id);
    await fs.promises.writeFile(pathFile, JSON.stringify(products));
}

// test de cada función creada

// addProducts("Remera Negra", "Remera manga corta color negra", 4000, "http://www.google.com", "REM1", 5);
// addProducts("Remera Gris", "Remera manga corta color gris", 4500, "http://www.google.com", "REM2", 10);
// addProducts("Remera Blanca", "Remera manga corta color blanca", 3500, "http://www.google.com", "REM3", 7);
// addProducts("Remera Rosa", "Remera manga corta color rosa", 2800, "http://www.google.com", "REM3", 9); //prueba mismo código (code)
// addProducts("Remera Azul", "Remera manga corta color azul", "http://www.google.com", "REM5", 3); //prueba eliminando precio para el campo obligatorio
// addProducts("Remera Verde", "Remera manga corta color verde", 5600, "http://www.google.com", "REM6", 2);

// getProducts();

// getProductsById(1);
// getProductsById(8); //prueba id inexistente

// updateProduct(4, {
//     code: "REM4",
// });

// deleteProduct(1);

export default { addProducts, getProducts, getProductsById, updateProduct, deleteProduct}
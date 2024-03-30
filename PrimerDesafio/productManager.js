let products = [];

const addProducts = (title, description, price, thumbnail, code, stock) => {

    const newProduct = {
        id: products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    }

    if(Object.values(newProduct).includes(undefined)) {
        console.log("Todos los campos son obligatorios");
        return
    }

    const productExist = products.find ( product => product.code === code);
    if(productExist) {
        console.log(`El producto con el código ${code} ya existe`);
        return;
    }
    products.push(newProduct)
}


const getProducts = () => {
    console.log(products);
    return products;
}


const getProductsById = (id) => {
    const product = products.find( product => product.id === id);
    if(!product) {
        console.log( `No se encontró el producto con el id ${id}`);
        return;
    }
    console.log(product);
    return product;
}

// test
addProducts("Remera Negra", "Remera manga corta color negra", 4000, "http://www.google.com", "REM1", 5);
addProducts("Remera Gris", "Remera manga corta color gris", 4500, "http://www.google.com", "REM2", 10);
addProducts("Remera Blanca", "Remera manga corta color blanca", 3500, "http://www.google.com", "REM3", 7);
addProducts("Remera Rosa", "Remera manga corta color rosa", 2800, "http://www.google.com", "REM3", 9); //prueba mismo código (code)
addProducts("Remera Azul", "Remera manga corta color azul", "http://www.google.com", "REM5", 3); //prueba eliminando precio para el campo obligatorio
addProducts("Remera Verde", "Remera manga corta color verde", 5600, "http://www.google.com", "REM6", 2);

getProducts();

getProductsById(1);
getProductsById(8); //prueba id inexistente
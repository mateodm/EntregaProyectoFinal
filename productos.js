let productos = [];

function agregarAlCarrito(Producto, Precio) {
    alert("Revisa el console log (carrito)")
    console.log ("Agregaste " + Producto + " al carrito, con el valor de " + Precio)
}

function Producto(id, name, price) {
    this.id = id;
    this.name= name;
    this.price= price;
}


const producto1= new Producto({id: 1, name: "Panel Led Indoor 100w", price: 2500})
const producto2= new Producto({id: 2, name: "Panel Led Indoor 200w", price: 5000})
const producto3= new Producto({id: 3, name: "Panel Led Indoor 300w", price: 8000})

productos.push(producto1, producto2, producto3)

if(carrito[(carrito.length) -1].cantidad > productos [index].stock) {
    alert ("No tenemos stock")
    carrito.splice(((carrito.length) -1), 1)
}
else {
    alert("Añadimos el producto al carrito")
}

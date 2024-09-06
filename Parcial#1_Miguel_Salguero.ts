// Miguel Salguero - 1626923
//Definicion del producto
interface Producto {
    codigo: string;
    nombre: string;
    precioCosto: number;
    precioVenta: number;

}

// Uso de la tabla hash
class TablaHash {
    private tabla: { [key: string]: Producto };

    constructor() {
        this.tabla = {};
    }

    // metodo para agregar un nuevo producto
    agregarProducto(producto: Producto): void {
        if (this.tabla[producto.codigo]) {
            console.log(`El producto con con codigo ${producto.codigo} ya existe`);
        } else {
            this.tabla[producto.codigo] = producto;
            console.log(`Producto ${producto.nombre} agregado`);
        }
    }

    // metodo para buscar un producto 
    buscarProducto(codigo: string): Producto | undefined {
        const producto = this.tabla[codigo];
        if (producto) {
            return producto;
        } else {
            console.log(`Producto con codigo ${codigo} no encontrado`);
            return undefined;
        }
    }

    // metodo para eliminar un producto (no me di cuenta que no habia que hacerlo hasta que dijo que no jsjaskjakjk)
    eliminarProducto(codigo: string): void {
        if (this.tabla[codigo]) {
            delete this.tabla[codigo];
            console.log(`Producto con codigo ${codigo} eliminado`);
        } else {
            console.log(`Producto con codigo ${codigo} no existe`);
        }
    }

    // metodo para mostrar el producto (el print)
    mostrarProductos(): void {
        for (const codigo in this.tabla) {
            const producto = this.tabla[codigo];
            console.log(`${producto.codigo} - ${producto.nombre} (Costo: ${producto.precioCosto}, Venta: ${producto.precioVenta})`);
        }
    }
}

const farmacia = new TablaHash();

const producto1: Producto = { codigo: "P001", nombre: "Pepto-Bismol", precioCosto: 50.00, precioVenta: 65.00 };
const producto2: Producto = { codigo: "P002", nombre: "Aspirina", precioCosto: 30.00, precioVenta: 45.00 };
const producto3: Producto = { codigo: "P003", nombre: "Paracetamol", precioCosto: 100.00, precioVenta: 120.00 };
const producto4: Producto = { codigo: "P004", nombre: "Panadol", precioCosto: 78.00, precioVenta: 80.00 };
const producto5: Producto = { codigo: "P005", nombre: "Gasa", precioCosto: 10.00, precioVenta: 20.00 };
const producto6: Producto = { codigo: "P006", nombre: "Agua Oxigenada", precioCosto: 15.00, precioVenta: 20.00 };
const producto7: Producto = { codigo: "P007", nombre: "Jarabe para la tos", precioCosto: 65.00, precioVenta: 80.00 };
const producto8: Producto = { codigo: "P008", nombre: "Jeringa", precioCosto: 8.00, precioVenta: 10.00 };
const producto9: Producto = { codigo: "P009", nombre: "Algodon", precioCosto: 5.00, precioVenta: 8.00 };
const producto10: Producto = { codigo: "P0010", nombre: "Pastilla de ejemplo", precioCosto: 1000.00, precioVenta: 8000.00 };



farmacia.agregarProducto(producto1);
farmacia.agregarProducto(producto2);
farmacia.agregarProducto(producto3);
farmacia.agregarProducto(producto4);
farmacia.agregarProducto(producto5);
farmacia.agregarProducto(producto6);
farmacia.agregarProducto(producto7);
farmacia.agregarProducto(producto8);
farmacia.agregarProducto(producto9);
farmacia.agregarProducto(producto10);

console.log('---------------------------------------')
const encontrado = farmacia.buscarProducto("P0010");
if (encontrado) {
    console.log(`Producto encontrado: ${encontrado.nombre}`);
}

// linea para eliminar un producto: 
// farmacia.eliminarProducto("P002");

console.log('---------------------------------------')

farmacia.mostrarProductos();



export async function getProducts() {
    const salida =  await fetch(`https://fakestoreapi.com/products?limit=20`, {
        method: 'GET',
        cache: 'no-store'
    })
    return salida.json();
}

export async function getEspecificProduct(id) {
    const salida =  await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'GET',
        cache: 'no-store'
    })
    return salida.json();
}
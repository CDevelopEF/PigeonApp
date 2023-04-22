export async function getData(zona) {
    const res = await fetch(`http://localhost:3000/api/hello?zona=${zona}`, {method: 'GET', cache: 'no-store'})
    return res.json()
  }
export async function getData() {
    const res = await fetch('http://localhost:3000/api/hello', {method: 'GET'})
    return res.json()
  }
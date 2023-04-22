// Esta pagina se renderiza al lado derecho de la vista. recibiendo como parametro la zona que es linkeada desde otro componente

import { getData } from "@/services/getDataFromSV";

async function ZonaEvento({params}) {
  const { zona } = params;
  let data = {}
  try {
    data = await getData();
  } catch (err ) {
    console.log(err)
  }

  return (
     <div style={{
        display: 'flex',
        marginLeft: '15vw',
        marginRight: '15vw',
        backgroundColor: '#111',
        color: '#fff',
        minHeight: '100vh'
    }}>
  <h1>Evento en {zona.replaceAll('%20', ' ')}</h1>
      <p> { data.nombre}</p>
  </div>
  )
}

export default ZonaEvento

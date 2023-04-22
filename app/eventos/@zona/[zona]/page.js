// Esta pagina se renderiza al lado derecho de la vista. recibiendo como parametro la zona que es linkeada desde otro componente
'use client'

import { getData } from "@/services/getDataFromSV";
import { getEspecificProduct } from "@/services/getProducts";
import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";
import Image
 from "next/image";
 import Style from './card.module.css'
import CardComponent from "./Card";
async function ZonaEvento({params}) {
  const { zona } = params;
  
  let data = {}
  try {
    data = await getEspecificProduct(zona);
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
        minHeight: '100vh',
        
    }}>
  <h1>{ data.title}</h1> 
      <CardComponent description={data.description} price={data.price} title={data.title} className={Style.card}>
        <Image src={data.image}  height={450} width={450} alt={data.title}/>
      </CardComponent>
  </div>
  )
}

export default ZonaEvento

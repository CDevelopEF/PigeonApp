'use client'

import { useState  } from 'react'
import Link from 'next/link'

function InputEffect({children, municipality}) {

    const [municipio, setMunicipio] = useState('')
  
   function handleChange(ev) {
    setMunicipio(ev.target.value)
  }  
 
  return (
        <>
        <div style={{
            display: 'flex',
            border: '3px solid #555',
            padding: '0.5rem',
            margin: '0.3rem',
            gap: '1rem',
            borderRadius: '8px'
        }}>
            <span style={{color: '#fff'}}>Lupa</span>
            {/* FORM HERE */}
            <input type="text" placeholder={'Search...'} style={{
            backgroundColor: 'inherit',
            color: '#fff'
            }}
            onChange={(ev) => {handleChange(ev)} }
            />
        </div>
        <div style={{ overflow: 'scroll', overflowX: 'hidden', padding: '0.2rem', maxHeight: '100vh' }}>
         <ul>
            {municipality
            .filter((element) => element.title.toLowerCase().match(municipio.toLowerCase()))
            .map((element) => <li key={element.id} style={{color: '#fff', padding: '10px'}}>
            <Link href={`/eventos/${element.id}`}>{element.title}</Link></li>)}
         </ul>
        </div>
            
        </>
        
    
  )
}

export default InputEffect
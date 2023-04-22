import React from 'react'

function CardComponent({children, title, price, description}) {
  return (
    <div style={{
        display: 'flex',
        width: '15vw',
        height: '10vh',

    }}>
    {children}
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{price}</p>
    </div>
    </div>
  )
}

export default CardComponent
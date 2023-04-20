import Link from "next/link";
import InputEffect from "./InputEffect";


function EventosPage() {
  // Se puede hacer fetch al servidor para obtener lista de municipios o darselos manualmente
  const elementos = ['Alamar','Plaza de la Revolucion','Marianao','Cerro','Arroyo Naranjo','Habana Vieja','La Lisa','Cotorro','Regla','Guanabacoa','San Miguel del Padron','Cardenas','Cienfuegos','Villa Clara','SSpiritus','Camaguey','Tunas','Santiago','vrtientes'];

  return (
    <div style={{
        display: 'flex',
        marginLeft: '15vw',
        marginRight: '15vw',
        backgroundColor: '#111',
    }}>
        <aside style={{
            display: 'flex',
            flexDirection: 'column',
            top: '0',
            position: 'sticky',
            backgroundColor: '#111',
            maxHeight: '100vh'

        }}>
        
        {/* Menu Aside con los Municipios */}
        <InputEffect municipality={elementos} />
        
            
        </aside>
        <div style={{minHeight: '2000px', color: '#fff'}}>
            <h1>Proximas Competiciones renderizadas por orden de fecha desde el servidors</h1>
        </div>
    </div>
  )
}

export default EventosPage
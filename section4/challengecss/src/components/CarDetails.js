import { useState } from 'react'
import styles from './CarDetails.module.css'

const CarDetails = () => {
    const [cars] = useState([
        {
            name: 'Gol',
            brand: 'VW',
            color: 'azul' 
        },
        {
            name: 'Camaro',
            brand: 'Chevrolet',
            color: 'amarelo' 
        },
        {
            name: 'Enzo',
            brand: 'Ferrari',
            color: 'vermelho' 
        },
    ])

  return (
    <div>
        {cars.map((car) => (
            <>
                <h2 className={styles['carDetail_title']}>Detalhes do carro</h2>
                <ul>
                    <li className={styles['carDetail_li']}>Nome: {car.name}</li>
                    <li className={styles['carDetail_li']}>Marca: {car.brand}</li>
                    <li className={styles['carDetail_li']}>Cor: {car.color}</li>
                </ul>
            </>
        ))}
    </div>
  )
}

export default CarDetails
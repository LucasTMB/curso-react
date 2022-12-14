import React from 'react'

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes dos carros</h2>
        <ul>
          <li>Marca: {brand}</li>
          <li>Km: {km}</li>
          <li>Cor: {color}</li>
          <li>
            {
              newCar ?
              ("O carro é novo") :
              ("O carro é usado")
            }
          </li>
        </ul>
    </div>
  )
}

export default CarDetails
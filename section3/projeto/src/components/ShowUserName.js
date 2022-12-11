import React from 'react'

const ShowUserName = (props) => {
  return (
    <div>
        <h3>
            O username é: {props.name}
        </h3>
        <h3>
            A idade é: {props.age}
        </h3>
        <h3>
            Trabalha como: {props.job}
        </h3>
    </div>
  )
}

export default ShowUserName
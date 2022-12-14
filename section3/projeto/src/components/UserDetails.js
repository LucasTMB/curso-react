import React from 'react'

const UserDetails = (props) => {

    const podeTirarCarteira = (age) => {
        if (age >= 18) {
            return 'Pode tirar a carteira de habilitação'
        } else {
            return 'Não pode tirar a carteira de habilitação'
        }
    }

  return (
    <div>
        <h2>Detalhes do usuário</h2>
        <ul>
            <li>Nome: {props.name}</li>
            <li>Idade: {props.age}</li>
            <li>Profissão: {props.job}</li>
            <li>
                {podeTirarCarteira(props.age)}
            </li>
        </ul>
    </div>
  )
}

export default UserDetails
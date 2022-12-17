import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviando o formulário')
        console.log(name, email, bio, role);

        //limpando form
        setName('')
        setEmail('')
        setBio('')
    }

  return (
    <div>
        {/*Envio de formulário */}
        <form onSubmit={handleSubmit}>
            <div>
                {/*Criação do form */}
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>
            </div>
            <div>
                {/*Label envolvendo o input */}
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => {
                        setEmail(e.target.value)
                    }} value={email}/>
                </label>
            </div>
            <div>
                {/*Criação de textarea */}
                <label htmlFor="bio">Bio:</label>
                <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => {
                    setBio(e.target.value)
                }} value={bio}></textarea>
            </div>
            <div>
                {/*Criação de select */}
                <label>
                    <span>Função no sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
            </div>
            
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm
import { useState } from "react"

const ListRender = () => {

    const [list] = useState(['Lucas', 'Kauã', 'Pedro'])

    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'Lucas',
            age: 19
        },
        {
            id: 2,
            name: 'Kobe',
            age: 40
        },
        {
            id: 3,
            name: 'Cristiano Ronaldo',
            age: 37
        }
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        })
    }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Deletar aleatoriamente</button>
    </div>
  )
}

export default ListRender
import api from '../../services/api'
import { useEffect, useState } from 'react'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import { useNavigate } from 'react-router-dom'
import { Container, Title } from '../Home/styles'

function ListUsers() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/users/')
            setUsers(data)
        }
        getUsers()
    }, []);

    return (
        <Container>
            <TopBackground />
            <Title>Listagem de Usuários</Title>
            {users.map( user =>(
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.age}</p>
                    <p>{user.email}</p>
                </div>

            ))}
            <Button theme='primary' onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    )
}



export default ListUsers
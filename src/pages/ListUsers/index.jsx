import api from '../../services/api'
import { useEffect } from 'react'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import { useNavigate } from 'react-router-dom'
import { Container, Title } from '../Home/styles'

function ListUsers() {
    const navigate = useNavigate()

    useEffect(() => {

        async function getUsers() {
            const usersFromApi = await api.get('/users/')
            console.log(usersFromApi)
        }
        getUsers()
    }, []);

    return (
        <Container>
            <TopBackground />
            <Title>Listagem de Usuários</Title>
            <Button theme='primary' onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    )
}



export default ListUsers
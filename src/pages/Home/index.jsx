import { useRef } from 'react'
import api from '../../services/api.js'
import { Container, ContainerInputs, InputLabel, Form, Title, Input } from './styles.js'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import { useNavigate } from 'react-router-dom'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    await api.post('/users', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })

    inputName.current.value = ""
    inputAge.current.value = ""
    inputEmail.current.value = ""

  }

  return (
    <Container>
      <TopBackground />

      <Form>
        <Title>Cadastrar Usuários</Title>
        <ContainerInputs>
          <div>
            <InputLabel htmlFor="name">Nome <span>*</span></InputLabel>
            <Input id="name" type='text' placeholder='Nome do usuário' ref={inputName}></Input>
          </div>

          <div>
            <InputLabel htmlFor="age">Idade <span>*</span></InputLabel>
            <Input id="age" type='number' placeholder='Idade do usuário' ref={inputAge}></Input>
          </div>
        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel htmlFor="email">E-mail <span>*</span></InputLabel>
          <Input id="email" type='email' placeholder='E-mail do usuário' ref={inputEmail}></Input>
        </div>

        <Button type="button" onClick={registerNewUser} theme='primary'>
          Cadastrar Usuário
        </Button>
      </Form>

      <Button type="button" onClick={() => navigate('/lista-de-usuarios')}>Lista de Usuários</Button>
    </Container>
  )
}

export default Home


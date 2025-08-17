import { useRef } from 'react'
import api from '../../services/api.js'
import { Container, TopBackground, ContainerInputs, InputLabel, Form, Title, Input, Button } from './styles.js'
import UsersImage from '../../assets/users.png'

function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function registerNewUser() {
    await api.post('/users', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })

  }

  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt="imagem-usuarios" />
      </TopBackground>

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

        <Button type="button" onClick={registerNewUser}>Cadastrar Usuário</Button>
      </Form>
    </Container>
  )
}

export default Home


import { Container, TopBackground, ContainerInputs, InputLabel, Form, Title, Input, Button } from './styles.js'
import UsersImage from '../../assets/users.png'

function Home() {
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
            <Input id="name" type='text' placeholder='Nome do usuário'></Input>
          </div>

          <div>
            <InputLabel htmlFor="age">Idade <span>*</span></InputLabel>
            <Input id="age" type='number' placeholder='Idade do usuário'></Input>
          </div>
        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel htmlFor="email">E-mail <span>*</span></InputLabel>
          <Input id="email" type='email' placeholder='E-mail do usuário'></Input>
        </div>

        <Button>Cadastrar Usuário</Button>
      </Form>
    </Container>
  )
}

export default Home


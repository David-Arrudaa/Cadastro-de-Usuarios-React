import { Container, TopBackground, ContainerInputs, InputLabel, Form, Title, Input, Button } from './styles.js'
import UsersImage from './assets/users.png'

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
            <div>
              <InputLabel>Nome<span>* </span></InputLabel>
              <Input type='text' placeholder='Nome do usuário'></Input>
            </div>

            <div>
              <InputLabel>Idade<span>* </span></InputLabel>
              <Input type='number' placeholder='Idade do usuário'></Input>
            </div>
          </div>

          <div>
            <InputLabel>E-mail<span>* </span></InputLabel>
            <Input type='email' placeholder='E-mail do usuário'></Input>
          </div>
        </ContainerInputs>

        <Button>Cadastrar Usuário</Button>
      </Form>
    </Container>
  )
}

export default Home


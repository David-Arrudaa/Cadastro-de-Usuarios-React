import { Container, TopBackground, ContainerInputs, InputLabel, Form, Title, Input, Button } from './styles.js'

function Home() {
  return (
    <Container>
      <TopBackground>
        <img />
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>
          <div>
            <div>
              <InputLabel>Nome<span>*</span></InputLabel>
              <Input type='text' placeholder='Nome do usuário'></Input>
            </div>

            <div>
              <InputLabel>Idade<span>*</span></InputLabel>
              <Input type='number' placeholder='Idade do usuário'></Input>
            </div>
          </div>

          <div>
            <InputLabel>Nome<span>*</span></InputLabel>
            <Input type='email' placeholder='E-mail do usuário'></Input>
          </div>
        </ContainerInputs>

        <Button>Cadastrar Usuário</Button>
      </Form>
    </Container>
  )
}

export default Home


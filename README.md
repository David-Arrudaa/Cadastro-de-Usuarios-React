# Interface de Cadastro de Usuários 🚀

<p align="center">
  <img src="https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge" alt="Status do Projeto: Concluído"/>
</p>

## 📖 Sobre o Projeto

Este projeto é a interface (Front-End) de uma aplicação completa para cadastro e listagem de usuários. O foco foi criar uma experiência de usuário limpa e moderna, aplicando conceitos avançados do ecossistema React.

O objetivo principal foi praticar e consolidar habilidades em componentização, gerenciamento de rotas com React Router, estilização com Styled Components e a comunicação com uma API externa utilizando Axios.

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias Front-End:

<p align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled Components"/>
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router"/>
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios"/>
</p>

## ✨ Funcionalidades Principais

- **Componentização Reutilizável:** A estrutura foi organizada em componentes (como `Button` e `TopBackground`), facilitando a manutenção e a escalabilidade do código.
- **Estilização com Styled Components:** Estilos encapsulados para cada componente e uso de `GlobalStyles` para garantir uma identidade visual consistente em toda a aplicação.
- **Navegação SPA com React Router:** Navegação fluida entre a página de cadastro (`/`) e a de listagem de usuários (`/lista-de-usuarios`) sem recarregar a página.
- **Integração com API via Axios:** Módulo de serviço (`api.js`) configurado para realizar requisições `POST` para o back-end, enviando os dados dos novos usuários.
- **Uso de Hooks:** Utilização de `useRef` para capturar os valores dos inputs de forma eficiente e `useNavigate` para a navegação programática após o cadastro.

## 🚀 Como Executar

A aplicação é dividida em Front-End (este repositório) e Back-End. Ambos precisam estar em execução.

**1. Back-end (API)**
- Clone o repositório do back-end:
  ```bash
  git clone [https://github.com/David-Arrudaa/Cadastro-de-Usuarios-Node.git](https://github.com/David-Arrudaa/Cadastro-de-Usuarios-Node.git)
  ```
- Siga as instruções de instalação e execução no `README.md` do repositório do back-end.

**2. Front-end (Este Repositório)**
- Clone este repositório.
- Navegue até a pasta do projeto.
- Instale as dependências:
  ```bash
  npm install
  ```
- Inicie a aplicação:
  ```bash
  npm run dev
  ```
- A aplicação estará disponível em `http://localhost:5173` e fará requisições para o back-end em `http://localhost:3000`.

## 👨‍💻 Autor

**David Arruda**.

### 📫 Onde me encontrar

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/david-viniciusarruda/)
[![Email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:david.viniciusarruda@gmail.com)

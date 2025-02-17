# Pokédex

Bem-vindo ao **Quest Pokédex**, um aplicativo desenvolvido para auxiliar jogadores de Pokémon Quest a gerenciar e consultar informações sobre seus Pokémon de forma eficiente.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## Sobre o Projeto

O **Quest Pokédex** foi criado com o objetivo de fornecer uma ferramenta prática para jogadores de Pokémon Quest. Com este aplicativo, é possível visualizar detalhes dos Pokémon disponíveis no jogo, incluindo tipos, habilidades e métodos de obtenção.

## Funcionalidades

- **Consulta de Pokémon**: Pesquise e visualize informações detalhadas sobre cada Pokémon presente no jogo.
- **Gerenciamento de Equipe**: Monte e gerencie suas equipes de forma otimizada.
- **Receitas de Cozinha**: Acesse uma lista completa de receitas para atrair diferentes Pokémon.
- **Atualizações Constantes**: O aplicativo é atualizado regularmente para incluir novos eventos e Pokémon.

## Tecnologias Utilizadas

- **Frontend**: React.js
- **Backend**: Node.js com Express
- **Banco de Dados**: MongoDB
- **Estilização**: CSS3
- **Controle de Versão**: Git

## Instalação e Execução

Siga os passos abaixo para clonar e executar o **Quest Pokédex** em sua máquina local:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/quest-pokedex.git
   ```

2. **Acesse o diretório do projeto**:

   ```bash
   cd quest-pokedex
   ```

3. **Instale as dependências do backend**:

   ```bash
   cd backend
   npm install
   ```

4. **Configure as variáveis de ambiente do backend**:

   Crie um arquivo `.env` na pasta `backend` com as seguintes variáveis:

   ```env
   PORT=5000
   MONGO_URI=sua_string_de_conexão_mongodb
   ```

5. **Inicie o servidor backend**:

   ```bash
   npm start
   ```

6. **Instale as dependências do frontend**:

   Em uma nova janela/aba do terminal, acesse a pasta `frontend` e instale as dependências:

   ```bash
   cd ../frontend
   npm install
   ```

7. **Inicie o aplicativo frontend**:

   ```bash
   npm start
   ```

Após seguir esses passos, o aplicativo estará disponível em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com o projeto, siga os passos abaixo:

1. **Fork o repositório**.
2. **Crie uma branch** para sua feature (`git checkout -b feature/nova-feature`).
3. **Commit suas alterações** (`git commit -m 'Adiciona nova feature'`).
4. **Faça o push para a branch** (`git push origin feature/nova-feature`).
5. **Abra um Pull Request**.

## Licença

Este projeto está licenciado sob a licença MIT. Para mais detalhes, consulte o arquivo `LICENSE`.

## Contato

Para dúvidas ou sugestões:

- **Nome**: Seu Nome
- **Email**: seuemail@dominio.com
- **GitHub**: [seu-usuario](https://github.com/seu-usuario)

---

*Nota: Este README foi criado com base em boas práticas de documentação de projetos no GitHub.* 

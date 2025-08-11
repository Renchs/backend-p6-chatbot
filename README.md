
# Projeto 6 - Chatbot API

API de integração com o Google Gemini feito em node.js para complementar o projeto. 


## Front-end
Construido com HTML, CSS e Javascript.

Acesse o [front-end](https://github.com/Renchs/p6-chatbot) do projeto

### Atenção
Para utilziar do projeto e necessario ter uma key da api do Gemini, para ser direcionado para o site [clique aqui](https://console.cloud.google.com/)


## Documentação da API

#### Retorna todos os itens

```http
  POST /chat/
```

#### Retorna uma resposta para a pergunta do usuário
| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `message` | `string` | **Obrigatório**. Uma mensagem de texto |

#### Exemplo
```bash
{
  "message": "Quais são os filmes mais bem avaliados do ano?"
}
```

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Renchs/backend-p6-chatbot.git
```

Entre no diretório do projeto

```bash
  cd backend-p6-chatbot
```

Instale as dependências

```bash
  npm install
```

Variável ambientes
```bash
  API_KEY=
  PORT=
```


Inicie o servidor

```bash
  npm run dev
```

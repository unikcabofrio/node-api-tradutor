
# API de Tradução de Texto

Bem-vindo à API de Tradução de Texto desenvolvida em Node.js! Esta API foi projetada para fornecer uma maneira simples e eficaz de traduzir textos para diferentes idiomas. Com esta API, você pode facilmente integrar funcionalidades de tradução em seus aplicativos, sites ou projetos.


## Como Usar

#### Retorna informações sobre a API

```http
  GET /translate
```

#### Resposta
```http
{
  "information": "...",
  "example": "...",
  "description": "...",
  "languages": [...]
}
```

#### Retornar o texto traduzido
```http
  GET /translate?tl=en&text=Olá, mundo!
```

| Query   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `tl` | `string` | **Obrigatório**. Informa em que lingua deseja que o texto seja traduzido |
| `text` | `string` | **Obrigatório**. Texto que deseja fazer a tradução |



#### Resposta
```http
{
  "translatedText": "Hello, world!",
}
```



## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/unikcabofrio/api_trandutor_node.git
```

Entre no diretório do projeto

```bash
  cd api_trandutor_node
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```


## Variáveis de Ambiente

Para rodar esse projeto, você pode optar por alterar r as seguintes variáveis de ambiente no seu .env

`PORT`
`HOST`


## Stack utilizada

**Back-end:** Node, fastify, free-translate


## Autores

- [@unikcabofrio](https://github.com/unikcabofrio)


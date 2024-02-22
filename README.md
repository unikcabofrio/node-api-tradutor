
# Text Translation API

Welcome to the Text Translation API developed in Node.js! This API is designed to provide a simple and effective way to translate texts into different languages. With this API, you can easily integrate translation features into your applications, websites, or projects.


## How to Use

#### Get Information about the API
- Make a GET request to /translate to retrieve information about the API.
##### Example Request
```http
  GET /translate
```

#### Example Response
```http
{
  "information": "...",
  "example": "...",
  "description": "...",
  "languages": [...]
}
```

#### Translate Text
- Make a GET request to /translate with query parameters to get the translated text.
```http
  GET /translate?tl=en&text=Olá, mundo!
```

| Query   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `tl` | `string` | **Required**. Specifies the target language for translation. |
| `text` | `string` | **Required**. The text you want to translate. |



#### Example Response
```http
{
  "translatedText": "Hello, world!",
}
```



## Running Locally

- Clone the project
```bash
  git clone https://github.com/unikcabofrio/api_trandutor_node.git
```

- Navigate to the project directory
```bash
  cd api_trandutor_node
```

- Install dependencies
```bash
  npm install
```

- Start the server
```bash
  npm run dev
```


## Environment Variables

To run this project, modify the following environment variables in your .env file:

`PORT`
`HOST`


## Used Stack

**Back-end:** Node, fastify, free-translate


## Authors

- [@unikcabofrio](https://github.com/unikcabofrio)


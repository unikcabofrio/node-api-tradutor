// src/index.js
import { fastify } from "fastify"
import { translate } from 'free-translate'

// Configuranção dos servidor
const serve = fastify()

// 
// API TRADUTOR
// 

// GET  http://localhost:3030/
serve.get('/', async (request,reply) => {

    try {
        const { lenguage, text } = request.query
        const translatedText = await translate(text, { to: lenguage });
        return reply.send({translate:translatedText});
    } catch (error) {
        return error.message
    }
});


// 
// Ligando o servidor
// 
serve.listen({
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0'
}, (err) => {
    if (err) throw err
    console.log(`\nHTTP server running on port ${process.env.PORT}`);
})
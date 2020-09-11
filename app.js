const fastify = require('fastify')({ logger: true })

fastify.get("/g", (req, reply) => {
    reply.redirect('https://www.google.com/')
});




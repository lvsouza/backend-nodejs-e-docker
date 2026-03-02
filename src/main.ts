import Fastify from 'fastify'


const fastify = Fastify({
  logger: true
})


await fastify.register(import('@fastify/swagger'), {
  openapi: {
    openapi: '3.0.0',
    info: {
      title: 'Test swagger',
      description: 'Testing the Fastify swagger API',
      version: '0.1.0'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server'
      }
    ],
  }
})

await fastify.register(import('@fastify/swagger-ui'), {
  routePrefix: '/documentation',
})


// Declare a route
fastify.get('/health', async function handler() {
  return { ok: true }
})

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

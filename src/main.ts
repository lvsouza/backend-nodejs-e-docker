import Fastify from 'fastify'


const fastify = Fastify({
  logger: true
})


// Declare a route
fastify.get('/health', async function handler() {
  return { ok: 'false' }
})

// Run the server!
try {
  fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

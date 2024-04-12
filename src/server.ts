import fastify from 'fastify'
import {z} from 'zod'
import { PrismaClient } from '@prisma/client'
import { slugify } from './utils/generate-slug'
import { ZodTypeProvider, serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod'

const app = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

const prisma = new PrismaClient({
  log: ['query']
})

app
  .withTypeProvider<ZodTypeProvider>()
  .post('/events', {
    // ZOD CONFIGURATION SCHEMA
    schema: {
      body: z.object({
        title: z.string().min(4),
        details: z.string().nullable(),
        maximumAttendees: z.number().int().positive().nullable()
      }),
      response: {
        201: z.object({
          eventId: z.string().uuid()
        })
      }
    }
  }, async (request, reply) => {
    const {
      details,
      maximumAttendees,
      title
    } = request.body

    const slug = slugify(title)

    const eventWithSameSlug = await prisma.event.findUnique({
      where: {
        slug
      }
    })

    if(eventWithSameSlug !== null) {
      throw new Error('Another event with same title already exists')
    }

    const event = await prisma.event.create({
      data: {
        title,
        details,
        maximumAttendees,
        slug
      }
    })

  return reply.status(201).send({ eventId: event.id })
})

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP Server Running')
})

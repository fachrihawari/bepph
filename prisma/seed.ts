import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

try {
  await prisma.todo.create({
    data: {
      title: "sleep"
    }
  })
  await prisma.todo.create({
    data: {
      title: "eat"
    }
  })
} catch (error) {
  console.log(error)
} finally {
  await prisma.$disconnect()
}

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

try {
  const user = await prisma.user.create({
    data: {
      name: 'oresto admin',
      email: 'oresto@hawari.dev',
      password: await Bun.password.hash("123123")
    },
  })
  console.log(user)
} catch (error) {
  console.log(error)
} finally {
  await prisma.$disconnect()
}

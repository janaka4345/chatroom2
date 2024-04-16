'use server'
import { faker } from '@faker-js/faker'
import prisma from '@/utils/prismaClient'
export const createUser = async () => {
    const user = await prisma.user.create({
        data: {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.hacker.adjective(),
        },
    })
    return user
}

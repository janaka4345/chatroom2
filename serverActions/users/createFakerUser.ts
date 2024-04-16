'use server'
import { faker } from '@faker-js/faker'
import prisma from '@/utils/prismaClient'
export const createFakerUserList = async () => {
    const users = []
    for (let index = 0; index < 20; index++) {
        users.push({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            image: faker.image.avatar(),
            password: '123456',
        })
    }
    const user = await prisma.user.createMany({
        data: users,
    })
    return user
}

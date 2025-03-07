import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { email: 'String3274902' } },
    two: { data: { email: 'String8794464' } },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>

import { db } from 'api/src/lib/db'

export default async () => {
  try {
    const users = [
      {
        email: 'lisa02@example.com',
        name: 'Debra Calderon',
        createdAt: new Date('1990-01-01'),
      },
      {
        email: 'reginald32@example.com',
        name: 'Michael Brown',
        createdAt: new Date('1990-01-01'),
      },
      {
        email: 'brian54@example.com',
        name: 'Jocelyn Christian',
        createdAt: new Date('1990-01-01'),
      },
      {
        email: 'smithshelby@example.com',
        name: 'Shannon Morales',
        createdAt: new Date('1995-01-01'),
      },
      {
        email: 'spearschristopher@example.com',
        name: 'Erin Wood',
        createdAt: new Date('1995-01-01'),
      },
      {
        email: 'michele46@example.com',
        name: 'Paul Kelly',
        createdAt: new Date('2000-01-01'),
      },
      {
        email: 'uhart@example.com',
        name: 'Charles Bradley',
        createdAt: new Date('2000-01-01'),
      },
      {
        email: 'maryfernandez@example.com',
        name: 'Rhonda Johnson',
        createdAt: new Date('2000-01-01'),
      },
      {
        email: 'rebecca06@example.com',
        name: 'Chad Mcmahon',
        createdAt: new Date('2000-01-01'),
      },
      {
        email: 'greenamanda@example.com',
        name: 'Kyle Martinez',
        createdAt: new Date('2000-01-01'),
      },
    ]

    await db.user.createMany({ data: users })
  } catch (error) {
    console.error(error)
  }
}

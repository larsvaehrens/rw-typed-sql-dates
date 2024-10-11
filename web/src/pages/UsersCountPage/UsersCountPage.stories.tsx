import type { Meta, StoryObj } from '@storybook/react'

import UsersCountPage from './UsersCountPage'

const meta: Meta<typeof UsersCountPage> = {
  component: UsersCountPage,
}

export default meta

type Story = StoryObj<typeof UsersCountPage>

export const Primary: Story = {}

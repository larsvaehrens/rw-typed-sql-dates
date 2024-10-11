'use client'

import { CartesianGrid, LabelList, Line, LineChart, XAxis } from 'recharts'
import type { FindUsersCount } from 'types/graphql'

import { Card, CardContent } from 'src/components/ui/Card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from 'src/components/ui/Chart'

import 'src/components/User/UsersCount/UsersCount.css'

const chartConfig = {
  count: {
    label: 'Users',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig

const UsersCount = ({ usersCount }: FindUsersCount) => {
  return (
    <Card>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={usersCount}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="createdAt"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="count"
              type="linear"
              stroke="var(--color-count)"
              strokeWidth={2}
              dot={{
                fill: 'var(--color-count)',
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default UsersCount

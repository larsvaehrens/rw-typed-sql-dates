import type { FindUsersCount, FindUsersCountVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellFailureProps,
  CellSuccessProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import UsersCount from 'src/components/User/UsersCount'

export const QUERY: TypedDocumentNode<FindUsersCount, FindUsersCountVariables> =
  gql`
    query FindUsersCount($startDate: DateTime!, $endDate: DateTime!) {
      usersCount: usersCount(startDate: $startDate, endDate: $endDate) {
        count
        createdAt
      }
    }
  `

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      No users yet.{' '}
      <Link to={routes.newUser()} className="rw-link">
        Create one?
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindUsersCount>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  usersCount,
}: CellSuccessProps<FindUsersCount, FindUsersCountVariables>) => {
  return <UsersCount usersCount={usersCount} />
}

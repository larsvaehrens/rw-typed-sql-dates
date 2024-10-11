import UsersCountCell from 'src/components/User/UsersCountCell'

const UsersCountPage = () => {
  const startDate = new Date('1990-01-01').toISOString()
  const endDate = new Date('2000-01-01').toISOString()

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="h-[50%] w-[50%]">
        <UsersCountCell startDate={startDate} endDate={endDate} />
      </div>
    </div>
  )
}

export default UsersCountPage

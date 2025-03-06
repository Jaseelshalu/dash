import NewRoleInput from '@/components/NewRoleInput'
import TopBar from '@/components/TopBar'
import * as React from 'react'

const Roles = () => {
  return (
    <div className='grid'>
      <div>
        <TopBar />
      </div>
      <div className='m-4'>
        <NewRoleInput />
      </div>
    </div>
  )
}

export default Roles

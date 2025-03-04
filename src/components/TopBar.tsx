import * as React from 'react'

const TopBar = () => {
  return (
    <div className='flex flex-1 flex-col p-4'>
      <div className="grid gap-4 grid-cols-4">
        <div className='border rounded-xl min-h-40 text-center bg-muted'><h1>active roles</h1></div>
        <div className='border rounded-xl min-h-40 text-center bg-muted'><h1>old roles</h1></div>
        <div className='border rounded-xl min-h-40 text-center bg-muted'><h1>new roles</h1></div>
        <div className='border rounded-xl min-h-40 text-center bg-muted'><h1>current roles</h1></div>
      </div>
    </div>
  )
}

export default TopBar

import FormSection from '@/components/FormSection'
import TableSection from '@/components/TableSection'
import TopBar from '@/components/TopBar'
import * as React from 'react'

const Home = () => {
  return (
    <div className='grid grid-cols-2'>
      <div className='col-span-2'>
        <TopBar />
      </div>
      <div>
        <TableSection />
      </div>
      <div>
        <FormSection />
      </div>
    </div>
  )
}

export default Home

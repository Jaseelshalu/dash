import AuthorLabels from '@/components/AuthorLabels'
import AuthorsContributions from '@/components/AuthorsContributions'
import NewAuthorForm from '@/components/NewAuthorForm'
import TopBar from '@/components/TopBar'
import * as React from 'react'

const Authors = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className='col-span-2'>
                <TopBar />
            </div>
            <div className='p-4'>
                <AuthorsContributions />
            </div>
            <div className='row-span-2 p-4'>
                <AuthorLabels />
            </div>
            <div className='p-4'>
                <NewAuthorForm />
            </div>
        </div>
    )
}

export default Authors

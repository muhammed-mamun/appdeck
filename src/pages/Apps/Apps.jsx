import React, { Suspense, useState } from 'react'
import { useLoaderData } from 'react-router'
import AppsContainer from './AppsContainer'

export default function Apps() {
    
    const allApps = useLoaderData()
    const [searchQuery, setSearchQuery] = useState('')

    const filteredApps = allApps.filter(app => 
        app.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <div className='lg:py-20 py-10 lg:px-20 px-4'>
        <p className='text-4xl text-center py-4'>Our All Applications</p>
        <p className='text-gray-400 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
        <div>
            <div className='flex justify-between my-4'>
            <p className='capitalize font-semibold text-[#9F62F2]'>({filteredApps.length}) apps found</p>
            <input 
                type="search" 
                placeholder='Search Apps...'
                value={searchQuery}
                className='border border-[#9F62F2] p-1 rounded-lg w-64 outline-none focus:ring-2 focus:ring-[#9F62F2]'
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            </div>
            <Suspense fallback={<span className='loading loading-spinner loading-xl'></span>}> 
                <AppsContainer setSearchQuery={setSearchQuery} filteredApps={filteredApps}/>
            </Suspense>
        </div>
    </div>
  )
}

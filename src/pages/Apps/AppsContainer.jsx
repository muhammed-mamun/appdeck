import React from 'react'
import App from '../App/App'

export default function AppsContainer({ filteredApps }) {

    return (
        <>
            {
                filteredApps.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-4 justify-center items-center gap-4">
                {
                    filteredApps.map(data =>
                        <App data={data} key={data.id}></App>
                    )
                }
            </div>
                )  : (
                    <div className='lg:m-20 m-10'>
                        <p className='text-center text-4xl font-semibold'>No apps found</p>
                    </div>
                )
            }
        </>

    )
}

import React from 'react'
import App from '../App/App'
import errorApp from '../../assets/App-Error.png'
import { Link } from 'react-router'
export default function AppsContainer({ filteredApps, setSearchQuery }) {

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
                ) : (
                    <div className='lg:m-6 m-6'>

                        <div className='flex flex-col justify-center items-center'>
                            <img className='w-32 h-32' src={errorApp} alt="app error" />
                            <div className='text-center space-y-2'>
                                <p className='text-gray-800 text-3xl text-center font-semibold'>Oops App not found!</p>
                                <Link onClick={() => setSearchQuery("")} className='text-white bg-linear-to-br from-[#632EE3] to-[#9F62F2] px-6 btn'>Go back</Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    )
}

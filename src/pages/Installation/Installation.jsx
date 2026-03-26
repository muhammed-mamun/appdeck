import React, { Suspense, useEffect, useState } from 'react'
import InstalledAppsContainer from './InstalledAppsContainer'

export default function Installation() {
  const [installedApps, setInstalledApps] = useState([])
  const [sortBy, setSortBy] = useState("Default")

  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem('installed-apps')) || []
    setInstalledApps(savedApps)
  }, [])

  const getShortedApps = () => {
    let sorted = [...installedApps]
    if(sortBy === "High-Low") {
      sorted.sort((a, b) => b.downloads - a.downloads)
    } else {
      sorted.sort((a, b) => a.downloads - b.downloads)
    }
    return sorted
  }

  const sortedList = getShortedApps()

  return (
    <div className='lg:py-20 py-10 lg:px-20 px-4'>
      <p className='text-4xl text-center py-4'>Our All Applications</p>
      <p className='text-gray-400 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
      <div>
        <div className='flex justify-between items-center my-4'>
          <p className='capitalize font-semibold text-[#9F62F2]'>({sortedList.length}) apps found</p>
          <details className="dropdown">
           <summary className="btn m-1 bg-[#9F62F2] text-white border-none hover:bg-[#632EE3]">
            Sort By: {sortBy === "Default" ? "Select" : sortBy}</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-xl border border-gray-100">
              <li>
                <button onClick={() => setSortBy("Default")}>Default</button>
              </li>
              <li>
                <button onClick={() => setSortBy("High-Low")}>High-Low (Downloads)</button>
              </li>
              <li>
                <button onClick={() => setSortBy("Low-High")}>Low-High (Downloads)</button>
              </li>
            </ul>
          </details>
        </div>
        <Suspense fallback={<span className='loading loading-spinner loading-xl'>Loading...</span>}>
          <InstalledAppsContainer apps={sortedList} setInstalledApps={setInstalledApps} />
        </Suspense>
      </div>
    </div>
  )
}

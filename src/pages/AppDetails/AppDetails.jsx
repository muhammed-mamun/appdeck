import { Link, useLoaderData, useParams } from "react-router"
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
import AppRatingChart from "../../components/AppRatingChart/AppRatingChart"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"
export default function AppDetails() {
  const [isInstalled, setIsInstalled] = useState(false)
  const { id } = useParams()
  const data = useLoaderData()
  const singleApp = data.find(app => app.id === parseInt(id));
  const { title, companyName, image, description, size, reviews, ratingAvg, downloads, ratings } = singleApp
  
  useEffect(()=> {
    const installedApps = JSON.parse(localStorage.getItem('installed-apps')) || []
    const exists = installedApps.find(app=> app.id === parseInt(singleApp.id))
    if (exists) setIsInstalled(true) 
  },[singleApp.id])

  const handleInstall = () => {
    const installedApps = JSON.parse(localStorage.getItem('installed-apps')) || []
    const exists = installedApps.find(app => app.id === parseInt(singleApp.id))
    if (!exists) {
      const updatedApps = [...installedApps, singleApp]
      localStorage.setItem('installed-apps', JSON.stringify(updatedApps)) 
      setIsInstalled(true)
      
       Swal.fire({
                  title: 'Installed!',
                  text: `${title} has been Installed successfully.`,
                  icon: 'success',
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
              });
    } else {
      Swal.fire({
                  title: 'Already Installed!',
                  text: `${title} Already is in the bucket.`,
                  icon: 'success',
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
              });
    }
  }
  return (
    <div className="lg:px-20 lg:py-20 py-6 px-10 space-y-6 flex flex-col">
      <div className="flex gap-6">
        <img className="w-58 rounded-lg" src={image} alt={title} />
        <div className="flex flex-col w-full justify-between">
          <div>
            <p className="text-3xl font-bold">{title}</p>
            <p>Developed by <span className='font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] inline-block text-transparent bg-clip-text'>{companyName}</span></p>

            <div className="h-px my-4 bg-gray-300 w-full"></div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col justify-center items-center">
              <img className="w-6 h-6" src={downloadIcon} alt="download icon" />
              <p className="text-sm">Downloads</p>
              <p className="font-semibold text-lg">{downloads / 1000000}M</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="w-6 h-6" src={ratingIcon} alt="rating icon" />
              <p className="text-sm">Average Ratings</p>
              <p className="font-semibold text-lg">{ratingAvg}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="w-6 h-6" src={reviewIcon} alt="download icon" />
              <p className="text-sm">Total reviews</p>
              <p className="font-semibold text-lg">{reviews / 1000}K</p>
            </div>
          </div>
          <div>
            <button 
            onClick={handleInstall}
            disabled={isInstalled}
            className={`btn px-6 py-2  rounded-2xl   transition-colors ${isInstalled ? 'bg-gray-200 text-black cursor-not-allowed': 'bg-green-600 text-gray-200 hover:bg-green-700'}`}>{isInstalled ? "Installed" : `Install Now (${size} MB)`}</button>
          </div>
        </div>

      </div>

      <div className="h-px my-4 bg-gray-300 w-full"></div>
      <p className="text-[#1A2B3C] font-bold text-lg mb-4">Ratings</p>

      <AppRatingChart ratings={ratings} />
      <div className="h-px my-4 bg-gray-300 w-full"></div>
      <div>
        <p className="text-lg font-semibold">Description</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

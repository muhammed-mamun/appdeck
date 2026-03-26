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

  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem('installed-apps')) || []
    const exists = installedApps.find(app => app.id === parseInt(singleApp.id))
    if (exists) setIsInstalled(true)
  }, [singleApp.id])

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
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start gap-10 lg:gap-16 max-w-6xl mx-auto w-full">

        <div className="shrink-0">
          <img
            className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl object-cover shadow-md"
            src={image}
            alt={title}
          />
        </div>

        <div className="flex flex-col grow text-center lg:text-left pt-2">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#1A2B3C] tracking-tight">
              {title}
            </h1>
            <p className="text-lg mt-2 font-medium text-gray-600">
              Developed by <span className='text-[#9F62F2] font-bold'>{companyName}</span>
            </p>

            <div className="h-px mt-6 mb-8 bg-gray-200 w-full"></div>
          </div>

          <div className="flex justify-around lg:justify-start gap-8 lg:gap-12 items-center mb-10">
            <div className="flex flex-col items-center lg:items-start">
              <img className="w-6 h-6 mb-2" src={downloadIcon} alt="downloads" />
              <p className="text-xs text-gray-400 uppercase font-semibold">Downloads</p>
              <p className="font-bold text-2xl">{(downloads / 1000000).toFixed(1)}M</p>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <img className="w-6 h-6 mb-2" src={ratingIcon} alt="ratings" />
              <p className="text-xs text-gray-400 uppercase font-semibold">Average Ratings</p>
              <p className="font-bold text-2xl">{ratingAvg}</p>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <img className="w-6 h-6 mb-2" src={reviewIcon} alt="reviews" />
              <p className="text-xs text-gray-400 uppercase font-semibold">Total reviews</p>
              <p className="font-bold text-2xl">{(reviews / 1000).toFixed(0)}K</p>
            </div>
          </div>

          {/* Install Button */}
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`px-12 py-3.5 rounded-2xl font-bold text-white transition-all text-lg shadow-lg active:scale-95 ${isInstalled ? 'bg-gray-400' : 'bg-[#00D094] hover:bg-[#00B882]'
                }`}
            >
              {isInstalled ? "Installed" : `Install Now (${size} MB)`}
            </button>
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

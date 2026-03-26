import { Space } from "lucide-react"
import { Suspense } from "react"
import App from "../../pages/App/App"
import { Link } from "react-router"

export default function Trending({trending}) {
    console.log(trending)
  return (
    <div className="px-10 my-10 lg:my-20 lg:px-20 flex flex-col items-center justify-center space-y-8">
        <p className="text-3xl font-semibold text-center">Trending Apps</p>
        <p className="capitalize text-center text-base text-gray-600">Explore All Trending apps on the Market developed by us</p>
        <div className="grid grid-cols-1 lg:grid-cols-4 justify-center items-center gap-4">
            {
                trending.map(data => 
                    <App data={data} key={data.id}></App>
                )
            }
        </div>
        <Link to='/apps' className="btn font-bold flex gap-1 p-4 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">Show All</Link>
    </div>
  )
}

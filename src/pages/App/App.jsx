import  { use } from 'react'

import downloadIcon from '../../assets/icon-downloads.png'
import ratingsIcon from '../../assets/icon-ratings.png'
import { Link } from 'react-router'


export default function App({ data }) {
    const {title, ratingAvg, downloads, image, id} = data
    return (
        <Link to={`/apps/${id}`} className="card bg-base-100 p-4 border border-gray-200">
            <figure className="">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-lg w-full" />
            </figure>
            <div className="flex flex-col">
                <h2 className=" text-center text-lg font-semibold py-2">{title}</h2>
                <div className=" flex justify-between w-full p-4">
                    <p className='flex items-center text-center gap-1'> <img src={downloadIcon} alt="download icon" className='h-4 w-4'/>{downloads/1000000}M</p>
                    <p className='flex items-center text-center gap-1'> <img src={ratingsIcon} alt="download icon"  className='h-4 w-4'/>{ratingAvg}</p>
                </div>
            </div>
        </Link>
    )
}

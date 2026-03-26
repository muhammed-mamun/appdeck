import React from 'react';
import errorApp from '../../assets/App-Error.png';
import Swal from 'sweetalert2'; 
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'

export default function InstalledAppsContainer({ apps, setInstalledApps }) {
    
    const handleUninstall = (id, title) => {
        const updatedApps = apps.filter(app => app.id !== id);
        setInstalledApps(updatedApps);
        localStorage.setItem('installed-apps', JSON.stringify(updatedApps));
        window.dispatchEvent(new Event("local-storage-update"));
        Swal.fire({
            title: 'Uninstalled!',
            text: `${title} has been removed.`,
            icon: 'success',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
        });
    };

    return (
        <div className="mt-8 space-y-4">
            {apps.length > 0 ? (
                <div className="flex flex-col gap-4">
                    {apps.map(data => {
                        const { id, title, image, downloads, ratingAvg, size } = data;
                        
                        return (
                            <div key={id} className="flex-col lg:flex-row bg-white p-4 rounded-xl shadow-sm border border-gray-50 flex items-center justify-between hover:shadow-md transition-shadow">
                                
                                {/* Left Side: Image and Info */}
                                <div className="flex items-center gap-6">
                                    <img 
                                        className='w-20 h-20 rounded-xl bg-gray-200 object-cover' 
                                        src={image} 
                                        alt={title} 
                                    />
                                    
                                    <div className="space-y-1">
                                        <p className="text-xl font-bold text-[#1A2B3C]">{title}</p>
                                        
                                        <div className="flex items-center gap-4 text-sm font-medium">
                                            <div className="flex items-center gap-1 text-emerald-500">
                                                <img src={downloadIcon} className="w-4 h-4" alt="" />
                                                <span>{(downloads / 1000000)}M</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-orange-500">
                                                <img src={ratingIcon} className="w-4 h-4" alt="" />
                                                <span>{ratingAvg}</span>
                                            </div>
                                            <div className="text-gray-400">
                                                {size} MB
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Uninstall Button */}
                                <button  
                                    onClick={() => handleUninstall(id, title)}
                                    className="bg-[#00D094] hover:bg-[#00B882] text-white px-6 my-4 py-2 rounded-lg font-semibold transition-colors"
                                >
                                    Uninstall
                                </button>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className='flex flex-col justify-center items-center py-20'>
                    <img className='w-40 opacity-50' src={errorApp} alt="empty" />
                    <p className='text-gray-400 text-xl font-bold mt-4 text-center'>
                        No apps found in your library
                    </p>
                </div>
            )}
        </div>
    );
}

const VideoTitle=({title,overview})=>{
   
    return (

        <div className="w-screen aspect-video pt-[15%] px-12 absolute bg-gradient-to-r from-black ">
          
            <h1 className="text-6xl font-bold text-white">{title}</h1>
            <p className="w-1/4 py-3 text-lg text-white">{overview}</p>

            <div className="py-2">
                <button className="py-3 px-3 w-36 bg-white text-black font-bold rounded-lg mr-2">Play</button>
                <button className="py-3 px-3 w-36 bg-gray-600 text-white rounded-lg">More Info</button>
            </div>
        
        </div>
    )
}

export default VideoTitle;
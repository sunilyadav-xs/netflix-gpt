const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-32 px-10 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold w-1/3 text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div className="flex gap-5">
        <button className="bg-white text-lg font-bold py-2 px-12 rounded-md hover:bg-opacity-85"> Play</button>
        <button className="bg-gray-500 text-lg font-bold py-2 px-12 rounded-md hover:bg-gray-400">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle

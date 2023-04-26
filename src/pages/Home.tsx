import Image from '../assets/doge.jpg'

function home() {
  return (
    <div className='flex flex-row'>
      <div className='flex justify-center items-center w-1/2'>
          <img src= { Image } className='object-cover w-1/3 h-1/3 rounded-full'></img>
      </div>
      <div className='flex justify-center items-center w-1/2'>
          <div className="flex items-center h-screen">
            <h1 className="bg-white text-black rounded-lg text-3xl">Doge Says:Add Your Favorite Memes</h1>
          </div>
      </div>
    </div>
  )
}

export default home

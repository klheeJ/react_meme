import { Link } from 'react-router-dom'
import { useState } from 'react'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if (response.user){
            location.reload();
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }

    return (
        <nav className="flex items-center justify-between flex-wrap bg-black p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link to ='/' className="font-semibold text-2x1 tracking-widest">Memes</Link>
            </div>
            <div className="block">
                <button
                    onClick={dropDown}
                    className="flex items-center px-5 py-3 text-white border rounded border-gray-500
                    hover:text-gray-300 hover:border-gray-400">
                        <i className="fa-solid fa-bars"></i>
                    </button>
            </div>
            { isVisible? (
                <div className="block w-full flex-grow items-center">
                    <div className="text-sm lg:flex-grow">
                        <button className="p-3 m-5 bg-white justify-center w-24 rounded-sm">
                            <div>
                                <Link to='/' onClick={clicked} className='flex place-items-center lg:inline-block lg:mt-0
                                text-black hover:text-gray-500'>
                                    Home
                                </Link>
                            </div>
                        </button>
                        <button className="p-3 m-5 bg-white justify-center w-24 rounded-sm">
                            <div>
                                <Link to='/dashboard' onClick={clicked} className='flex place-items-center lg:inline-block lg:mt-0
                                text-black hover:text-gray-500'>
                                    Dashboard
                                </Link>
                            </div>
                        </button>
                        <button className="p-3 m-5 bg-white justify-center w-24 rounded-sm">
                            <div>
                                <Link to='/about' onClick={clicked} className='flex place-items-center lg:inline-block lg:mt-0
                                text-black hover:text-gray-500'>
                                    About
                                </Link>
                            </div>
                        </button>
                        <button className="p-3 m-5 bg-white justify-center w-24 rounded-sm">
                            <div>
                                <Link to='/memes' onClick={clicked} className='flex place-items-center lg:inline-block lg:mt-0
                                text-black hover:text-gray-500'>
                                    Memes
                                </Link>
                            </div>
                        </button>
                        {
                            !auth.currentUser ? 

                            <button className="p-3 m-5 bg-white justify-center w-24 rounded-sm">
                                <div>
                                    <Link to="/" onClick={ () => {signInOnClick()}} className="flex place-items-center
                                    lg:inline-block lg:mt-0 text-black hover:text-gray-500">
                                        Login
                                    </Link>
                                </div>
                            </button>
                            :
                            <button className="p-3 m-5 bg-white justify-center w-24 rounded-sm">
                            <div>
                                <Link to="/" onClick={ () => {signOutOnClick()}} className="flex place-items-center
                                lg:inline-block lg:mt-0 text-black hover:text-gray-500">
                                    Sign Out
                                </Link>
                            </div>
                    </button>
                    }
                    </div>
                </div>
            ):(
            <></>    
            ) }
        </nav>
    )
};

export default Navbar

import { useState } from 'react'
import MemeInventoryForm from './MemeInventoryForm'
import columns from './DataTable'

function MemeCounter() {
    return (
        <div className="container my-5 justify-center flex">
            <div className="card text-center-my-5">
                <div className="card-body">
                    <h1>Meme Counter</h1>
                    <div className="my-5 flex justify-center">
                        <h2>Count: {MemeInventoryForm.length}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
    // const [memeCounter, setIsVisible] = useState(false)
  
}

export default MemeCounter

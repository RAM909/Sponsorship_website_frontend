import React from 'react'
import { Link } from 'react-router-dom'

const YourEvents = () => {
    return (
        <>
        <Link to="/update">
        <div className='flex border border-red-500 h-96 w-80 justify-center items-center align-middle absolute cursor-pointer'>
        <div className=''>
            eventName
        </div>
        </div>
        </Link>
        </>
    )
}

export default YourEvents
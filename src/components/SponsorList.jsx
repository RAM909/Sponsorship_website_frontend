import React from 'react'

const SponsorList = () => {
    return (
        <>

            <div className='border border-red-500 h-72 w-64'>
                <div className='border border-red-500 h-72 w-64 p-4 flex flex-col justify-between'>
                    <div>
                        <h2 className="text-lg font-bold">Username</h2>
                        <p>John Doe</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">Company Name</h2>
                        <p>ABC Company</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">Events Sponsored</h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SponsorList
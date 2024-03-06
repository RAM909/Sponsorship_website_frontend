import React from 'react'
import { Link } from 'react-router-dom';
import Sponsors from '../components/Sponsors';

const Find = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-5 mt-10'>
        <Link to ="/register">
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Apply for a new event
        </button>
          </Link>
          <div className='flex gap-4'>
    <Sponsors/>
    <Sponsors/>
    <Sponsors/>
    <Sponsors/>
    <Sponsors/>

          </div>
      </div>
    </>
  )
}

export default Find
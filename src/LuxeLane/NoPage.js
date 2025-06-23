import React from 'react'
import error from "./assets/error.jpg"

const NoPage = () => {
  return (
    <div className='container text-center '>
    <div className='row d-flex justify-content-center'>
        <div className='col-lg-8'>
            <img src={error} className='w-100 h-100' alt='error'/>
        </div>
    </div>
</div>
  )
}

export default NoPage

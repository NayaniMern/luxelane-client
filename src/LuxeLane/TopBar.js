import React from 'react'


const TopBar = () => {
  return (
    <div className='container-fluid px-5  topbar '>
        <div className='row'>
            <div className='col-md-6 col-lg-4 d-flex justify-content-start  '>
                <h3>Follow Us : </h3>
                
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter"></i>
              
                
            </div>
            <div className='col-md-6 col-lg-4 d-flex justify-content-center  '>
                <h5 className='align-content-center'>Sign Up to get 20% Off on all collections</h5>
            </div>
            <div className='col-md-6 col-lg-4 d-flex justify-content-end '>
            <i className="bi bi-telephone-outbound-fill"></i>
            <h3>+91 7805638920</h3>
            </div>
        </div>
    </div>
  )
}

export default TopBar
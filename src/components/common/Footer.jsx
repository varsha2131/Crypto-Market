import React from 'react'
import { NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='container-fluid border p-3'>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className='footer-links'>
            <NavLink className="navbar-brand fw-bold fs-3" to='' >CryptoAdda</NavLink>
            <p>&copy;2025 CryptoAdda </p>
            <p className='social-media-links d-flex  '>
              <a href='' className='nav-link text-primary fs-2'> <i class="bi bi-facebook"></i></a>
              <a href='' className='nav-link text-danger fs-2'> <i class="bi bi-instagram mx-2"></i></a>
              <a href='' className='nav-link text-primary fs-2'> <i class="bi bi-twitter"></i></a>
              <a href='' className='nav-link text-success fs-2'> <i class="bi bi-whatsapp mx-2"></i></a>
            </p>
            <p><i className="bi bi-globe-americas"></i>  Global | English</p>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className='footer-links'>
            <h3>Company</h3>
            <p>About</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>Legal & Privacy</p>

          </div>
        </div>
         
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
        <div className='footer-links'>
            <h3>Developers</h3>
            <p>Wallets</p>
            <p>Exchange API</p>
            <p>Base</p>
            <p>Developer Platform</p>
            <p>Coinbase App</p>
          </div>
        </div>

         

        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
        <div className='footer-links'>
            <h3>Support</h3>
            <p>Contact us</p>
            <p>Create account</p>
            <p>Help center</p>
            <p>Account information</p>
            <p>Payment methods</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
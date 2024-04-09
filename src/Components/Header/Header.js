import { faEllipsis, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from './../../images/image1.png'
import img2 from './../../images/image2.png'
import img3 from './../../images/image3.png'
import img5 from './../../images/img5.jpg'


import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div className="header rounded shadow p-3 overflow-hidden bg-blue">

        <div className="header-component d-flex justify-content-between">
          <p className='h5 text-white'>WhatsApp</p>
          <div className='text-white'>
            
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon={faEllipsis} aria-hidden="true" className='ms-3' />
          </div>
        </div>

        <div className="row text-white">
          <div className="col">
            <div className='  ms-1'>
              <img src={img1} alt="" className='mt-2' />
              <p>Ipsum </p>
            </div>
          </div>
          <div className="col ">
            <img src={img2} alt="" className='mt-2' />
            <p> Kaif</p>
          </div>
          <div className="col">
            <img src={img3} alt="" className='mt-2' />
            <p>Lorem</p>
          </div>
          <div className="col">
            <img src={img5} alt="" className='mt-2' />
            <p>Katerina </p>
          </div>

        </div>
      </div>
    )
  }
}
export default Header

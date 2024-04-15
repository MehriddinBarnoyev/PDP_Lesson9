import React, { Component } from 'react';
import { faEllipsis, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from './../../images/image1.png';
import img2 from './../../images/image2.png';
import img3 from './../../images/image3.png';
import img5 from './../../images/img5.jpg';

class Header extends Component {
  constructor(props) {
    super(props);
   
  }

  toggleDarkMode = () => {
    this.props.setDark(!this.props.dark)
  };

  render() {

    return (
      <div className={`header rounded shadow p-3 overflow-hidden ${this.props.dark ? 'bg-dark' : 'bg-#00BFA5'}`}>
        <div className="header-component d-flex justify-content-between">
          <p className={`h5 text-${this.props.dark ? 'white' : 'white'}`}>WhatsApp</p>
          <div className={`text-${this.props.dark ? 'white' : 'white'}`}>
            <button className='btn' onClick={this.toggleDarkMode}>
              {this.props.dark ? 'Light Mode' : 'Dark Mode'}
            </button>
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon={faEllipsis} aria-hidden="true" className='ms-3' />
          </div>
        </div>
        <div className={`row text-${this.props.dark ? 'white' : 'white'}`}>
          <div className="col">
            <div className='  ms-1'>
              <img src={img1} alt="" className='mt-2 ' />
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
      
    );
  }
}

export default Header;

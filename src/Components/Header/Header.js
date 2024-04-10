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
    this.state = {
      darkMode: false,
    };
  }

  toggleDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode });
  };

  render() {
    const { darkMode } = this.state;

    return (
      <div className={`header rounded shadow p-3 overflow-hidden ${darkMode ? 'bg-dark' : 'bg-#00BFA5'}`}>
        <div className="header-component d-flex justify-content-between">
          <p className={`h5 text-${darkMode ? 'white' : 'black'}`}>WhatsApp</p>
          <div className={`text-${darkMode ? 'white' : 'black'}`}>
            <button className='btn' onClick={this.toggleDarkMode}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon={faEllipsis} aria-hidden="true" className='ms-3' />
          </div>
        </div>
        <div className={`row text-${darkMode ? 'white' : 'black'}`}>
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

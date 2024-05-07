import React from 'react';
import logo from '../media/Logo_VS Horizontal Color.png';

import '../styles/footer.css'


const Footer = () => (
  <div className='footerContainer'>
    <img src={logo} alt='vision subsea logo' className='footerLogo'/>
    <p>Alaska, USA</p>
    <p>907-299-4403</p>
    <p>info@visionsubsea.com</p>
  </div>
)

export default Footer;
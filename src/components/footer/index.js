import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

const Footer = () => (
  <div className="footer">
    <div className="footer-desc">
      <p>Copyright 2021 <span><Link to="/">Cryptoverse Inc.</Link></span> All Rights Reserved.</p>
    </div>
    <div className="footer-links" />

  </div>
);

export default Footer;

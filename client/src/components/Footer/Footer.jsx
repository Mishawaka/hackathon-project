import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';

import './Footer.scss';
import footer_logo from '../../img/LogoFooter.svg';
import facebook_img from '../../img/facebook.svg';
import insta_img from '../../img/instagram.svg';
import email_img from '../../img/email.svg';

const Footer = () => {
  const { setRegisterModal } = useContext(ModalContext);
  return (
    <div className="footer">
      <div className="footer-logo-block">
        <img src={footer_logo} alt="" />
        <h4>Helpers</h4>
      </div>
      <div className="first-links-block">
        <div className="link-block">
          <img src={insta_img} alt="" />
          <p>helpers_od</p>
        </div>
        <div className="link-block">
          <img src={facebook_img} alt="" />
          <p>facebook</p>
        </div>
      </div>
      <div className="second-links-block">
        <div className="link-block">
          <img src={email_img} alt="" />
          <p>brandy.soto@example.com</p>
        </div>
      </div>
      <div className="footer-btn">
        <button onClick={() => setRegisterModal(true)} className="gradient-btn">
          <h4>Стать волонтером</h4>
        </button>
      </div>
    </div>
  );
};

export default Footer;
